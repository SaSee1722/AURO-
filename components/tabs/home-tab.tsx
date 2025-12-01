"use client"

import { useState, useEffect } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { HabitCard } from "@/components/habit-card"
import { AddHabitModal } from "@/components/add-habit-modal"
import type { Habit } from "@/lib/types"
import { getTodayQuote, formatDate } from "@/lib/data"
import { getHabits, addHabit, toggleCompletion, isCompleted, getStreak, deleteHabit } from "@/lib/store"
import { useTranslation } from "@/lib/use-translation"

export function HomeTab() {
  const { t, language } = useTranslation()
  const [habits, setHabits] = useState<Habit[]>([])
  const [modalOpen, setModalOpen] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const today = new Date()
  const todayStr = formatDate(today)
  const dayOfWeek = today.getDay()
  const quote = getTodayQuote()

  // Map language names to locales
  const locales: Record<string, string> = {
    English: "en-US",
    Spanish: "es-ES",
    French: "fr-FR",
    German: "de-DE",
    Italian: "it-IT",
    Portuguese: "pt-BR",
    Chinese: "zh-CN",
    Japanese: "ja-JP",
    Korean: "ko-KR",
    Hindi: "hi-IN",
  }
  const currentLocale = locales[language] || "en-US"

  useEffect(() => {
    const loadedHabits = getHabits().filter((h) => !h.archived && h.repeatDays.includes(dayOfWeek))
    setHabits(loadedHabits)

    const handleDataUpdate = () => setRefreshKey(k => k + 1)
    window.addEventListener('vybe_data_updated', handleDataUpdate)
    return () => window.removeEventListener('vybe_data_updated', handleDataUpdate)
  }, [dayOfWeek, refreshKey])

  const handleAddHabit = (habitData: {
    name: string
    emoji: string
    color: string
    reminderTime: string
    repeatDays: number[]
  }) => {
    const newHabit: Habit = {
      id: crypto.randomUUID(),
      ...habitData,
      createdAt: new Date().toISOString(),
      archived: false,
    }
    addHabit(newHabit)
    setRefreshKey((k) => k + 1)
  }

  const handleToggle = (habitId: string) => {
    toggleCompletion(habitId, todayStr)
    setRefreshKey((k) => k + 1)
  }

  const handleDelete = (habitId: string) => {
    deleteHabit(habitId)
    setRefreshKey((k) => k + 1)
  }

  const completedCount = habits.filter((h) => isCompleted(h.id, todayStr)).length
  const progressPercent = habits.length > 0 ? (completedCount / habits.length) * 100 : 0

  return (
    <div className="flex flex-col pb-24 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="px-5 pt-6 pb-4">
        <p className="text-sm font-medium text-muted-foreground">
          {today.toLocaleDateString(currentLocale, { weekday: "long", month: "long", day: "numeric" })}
        </p>
        <h1 className="text-3xl font-bold text-foreground mt-1">{t("today")}</h1>

        {/* Quote */}
        <div className="mt-4 rounded-2xl bg-primary/10 p-4">
          <p className="text-balance text-sm font-medium leading-relaxed text-foreground">&ldquo;{t("quote1")}&rdquo;</p>
          <p className="mt-2 text-xs text-muted-foreground">— {t("quote1Author")}</p>
        </div>

        {/* Progress */}
        {habits.length > 0 && (
          <div className="mt-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{t("todayProgress")}</span>
              <span className="text-sm font-semibold text-foreground">
                {completedCount}/{habits.length}
              </span>
            </div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full rounded-full bg-success transition-all duration-500"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Habits List */}
      <div className="flex-1 px-5 space-y-3">
        {habits.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-xl font-semibold text-foreground">{t("noHabitsToday")}</h3>
            <p className="text-muted-foreground mt-2">{t("addFirstHabit")}</p>
          </div>
        ) : (
          habits.map((habit) => (
            <HabitCard
              key={habit.id}
              habit={habit}
              isCompleted={isCompleted(habit.id, todayStr)}
              streak={getStreak(habit.id)}
              onToggle={() => handleToggle(habit.id)}
              onDelete={() => handleDelete(habit.id)}
            />
          ))
        )}
      </div>

      {/* Add Habit Button - Top Right Corner */}
      <Button
        onClick={() => setModalOpen(true)}
        className="fixed top-6 right-6 h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl hover:bg-primary/90 z-10"
        size="icon"
      >
        <Plus className="h-6 w-6" />
      </Button>

      {/* Add Habit Modal */}
      <AddHabitModal open={modalOpen} onClose={() => setModalOpen(false)} onSave={handleAddHabit} />
    </div>
  )
}
