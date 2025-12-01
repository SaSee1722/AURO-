import type { Habit, HabitCompletion } from "./types"
import { formatDate } from "./data"
import { supabase } from "./supabase"

const HABITS_KEY = "vybe_habits"
const COMPLETIONS_KEY = "vybe_completions"
const ONBOARDING_KEY = "vybe_onboarding_complete"

export function getHabits(): Habit[] {
  if (typeof window === "undefined") return []
  const stored = localStorage.getItem(HABITS_KEY)
  return stored ? JSON.parse(stored) : []
}

export function saveHabits(habits: Habit[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem(HABITS_KEY, JSON.stringify(habits))
}

export async function syncWithSupabase(userId: string) {
  console.log("Starting syncWithSupabase for user:", userId)
  try {
    // 1. Fetch habits
    const { data: habits, error: habitsError } = await supabase
      .from('habits')
      .select('*')
      .eq('user_id', userId)

    if (habitsError) {
      console.error("Error fetching habits:", habitsError)
      throw habitsError
    }

    console.log("Fetched habits from Supabase:", habits.length)

    // Check if server is empty but local has data (First time sync for guest -> user)
    if (habits.length === 0) {
      const localHabits = getHabits()
      if (localHabits.length > 0) {
        console.log("Pushing local data to Supabase...", localHabits)
        // Push habits
        for (const h of localHabits) {
          const { error } = await supabase.from('habits').upsert({
            id: h.id,
            user_id: userId,
            name: h.name,
            emoji: h.emoji,
            color: h.color,
            reminder_time: h.reminderTime,
            repeat_days: h.repeatDays,
            created_at: h.createdAt,
            archived: h.archived
          })
          if (error) {
            console.error("Failed to push habit:", h.name, error)
            throw error
          }
        }
        // Push completions
        const localCompletions = getCompletions()
        for (const c of localCompletions) {
          const { error } = await supabase.from('habit_logs').upsert({
            habit_id: c.habitId,
            completed_at: c.date,
            created_at: c.completedAt
          })
          if (error) console.error("Failed to push log:", c, error)
        }
        console.log("Push complete.")
        return "Synced local data to cloud."
      }
    } else {
      console.log("Server has data, pulling...", habits.length)
    }

    // 2. Fetch logs
    const { data: logs, error: logsError } = await supabase
      .from('habit_logs')
      .select('*')
      .in('habit_id', habits.map(h => h.id))

    if (logsError) throw logsError

    // 3. Map and Save
    const mappedHabits: Habit[] = habits.map(h => ({
      id: h.id,
      name: h.name,
      emoji: h.emoji,
      color: h.color,
      reminderTime: h.reminder_time,
      repeatDays: h.repeat_days,
      createdAt: h.created_at,
      archived: h.archived
    }))

    const mappedCompletions: HabitCompletion[] = logs.map(l => ({
      habitId: l.habit_id,
      date: l.completed_at,
      completedAt: l.created_at
    }))

    saveHabits(mappedHabits)
    saveCompletions(mappedCompletions)

    // Notify components to refresh
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event('vybe_data_updated'))
    }

    return "Synced data from cloud."
  } catch (error: any) {
    console.error("Sync failed:", error)
    return `Sync failed: ${error.message || error}`
  }
}

export function addHabit(habit: Habit): void {
  const habits = getHabits()
  habits.push(habit)
  saveHabits(habits)

  // Sync to Supabase
  supabase.auth.getUser().then(({ data: { user } }) => {
    if (user) {
      supabase.from('habits').upsert({
        id: habit.id,
        user_id: user.id,
        name: habit.name,
        emoji: habit.emoji,
        color: habit.color,
        reminder_time: habit.reminderTime,
        repeat_days: habit.repeatDays,
        created_at: habit.createdAt,
        archived: habit.archived
      }).then(({ error }) => {
        if (error) console.error("Supabase add failed:", error)
      })
    }
  })
}

export function updateHabit(updatedHabit: Habit): void {
  const habits = getHabits()
  const index = habits.findIndex((h) => h.id === updatedHabit.id)
  if (index !== -1) {
    habits[index] = updatedHabit
    saveHabits(habits)

    // Sync to Supabase
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        supabase.from('habits').update({
          name: updatedHabit.name,
          emoji: updatedHabit.emoji,
          color: updatedHabit.color,
          reminder_time: updatedHabit.reminderTime,
          repeat_days: updatedHabit.repeatDays,
          archived: updatedHabit.archived
        }).eq('id', updatedHabit.id).then(({ error }) => {
          if (error) console.error("Supabase update failed:", error)
        })
      }
    })
  }
}

export function archiveHabit(habitId: string): void {
  const habits = getHabits()
  const index = habits.findIndex((h) => h.id === habitId)
  if (index !== -1) {
    habits[index].archived = true
    saveHabits(habits)

    // Sync to Supabase
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        supabase.from('habits').update({ archived: true }).eq('id', habitId).then(({ error }) => {
          if (error) console.error("Supabase archive failed:", error)
        })
      }
    })
  }
}

export function deleteHabit(habitId: string): void {
  const habits = getHabits().filter((h) => h.id !== habitId)
  saveHabits(habits)

  // Sync to Supabase
  supabase.auth.getUser().then(({ data: { user } }) => {
    if (user) {
      supabase.from('habits').delete().eq('id', habitId).then(({ error }) => {
        if (error) console.error("Supabase delete failed:", error)
      })
    }
  })
}

export function getCompletions(): HabitCompletion[] {
  if (typeof window === "undefined") return []
  const stored = localStorage.getItem(COMPLETIONS_KEY)
  return stored ? JSON.parse(stored) : []
}

export function saveCompletions(completions: HabitCompletion[]): void {
  if (typeof window === "undefined") return
  localStorage.setItem(COMPLETIONS_KEY, JSON.stringify(completions))
}

export function toggleCompletion(habitId: string, date: string): boolean {
  const completions = getCompletions()
  const existingIndex = completions.findIndex((c) => c.habitId === habitId && c.date === date)
  let isCompleted = false
  let completionData: HabitCompletion | null = null

  if (existingIndex !== -1) {
    completions.splice(existingIndex, 1)
    saveCompletions(completions)
    isCompleted = false
  } else {
    completionData = {
      habitId,
      date,
      completedAt: new Date().toISOString(),
    }
    completions.push(completionData)
    saveCompletions(completions)
    isCompleted = true
  }

  // Sync to Supabase
  supabase.auth.getUser().then(({ data: { user } }) => {
    if (user) {
      if (isCompleted && completionData) {
        supabase.from('habit_logs').upsert({
          habit_id: habitId,
          completed_at: date,
          created_at: completionData.completedAt
        }).then(({ error }) => {
          if (error) console.error("Supabase completion add failed:", error)
        })
      } else {
        supabase.from('habit_logs').delete().match({
          habit_id: habitId,
          completed_at: date
        }).then(({ error }) => {
          if (error) console.error("Supabase completion delete failed:", error)
        })
      }
    }
  })

  return isCompleted
}

export function isCompleted(habitId: string, date: string): boolean {
  const completions = getCompletions()
  return completions.some((c) => c.habitId === habitId && c.date === date)
}

export function getStreak(habitId: string): number {
  const completions = getCompletions().filter((c) => c.habitId === habitId)
  const habit = getHabits().find((h) => h.id === habitId)
  if (!habit || completions.length === 0) return 0

  const sortedDates = [...new Set(completions.map((c) => c.date))].sort().reverse()

  let streak = 0
  const currentDate = new Date()

  // Check if today is completed
  const todayStr = formatDate(currentDate)
  const todayCompleted = sortedDates.includes(todayStr)

  if (!todayCompleted) {
    // Check yesterday
    currentDate.setDate(currentDate.getDate() - 1)
  }

  while (true) {
    const dateStr = formatDate(currentDate)
    const dayOfWeek = currentDate.getDay()

    // Only count days that are in the repeat schedule
    if (habit.repeatDays.includes(dayOfWeek)) {
      if (sortedDates.includes(dateStr)) {
        streak++
        currentDate.setDate(currentDate.getDate() - 1)
      } else {
        break
      }
    } else {
      currentDate.setDate(currentDate.getDate() - 1)
    }

    // Safety limit
    if (streak > 1000) break
  }

  return streak
}

export function getLongestStreak(habitId: string): number {
  const completions = getCompletions().filter((c) => c.habitId === habitId)
  if (completions.length === 0) return 0

  const sortedDates = [...new Set(completions.map((c) => c.date))].sort()

  let longestStreak = 1
  let currentStreak = 1

  for (let i = 1; i < sortedDates.length; i++) {
    const prevDate = new Date(sortedDates[i - 1])
    const currDate = new Date(sortedDates[i])
    const diffDays = Math.round((currDate.getTime() - prevDate.getTime()) / 86400000)

    if (diffDays === 1) {
      currentStreak++
      longestStreak = Math.max(longestStreak, currentStreak)
    } else {
      currentStreak = 1
    }
  }

  return longestStreak
}

export function getCompletionsForDate(date: string): HabitCompletion[] {
  return getCompletions().filter((c) => c.date === date)
}

export function isOnboardingComplete(): boolean {
  if (typeof window === "undefined") return false
  return localStorage.getItem(ONBOARDING_KEY) === "true"
}

export function setOnboardingComplete(): void {
  if (typeof window === "undefined") return
  localStorage.setItem(ONBOARDING_KEY, "true")
}
