"use client"

import { useState, useEffect, useMemo } from "react"
import { ChevronLeft, ChevronRight, Share2, Trophy, Target, Calendar as CalendarIcon, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { getHabits, getCompletions, getCompletionsForDate } from "@/lib/store"
import { formatDate } from "@/lib/data"
import type { Habit, HabitCompletion } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/use-translation"

export function CalendarTab() {
  const { t, language } = useTranslation()
  const [activeTab, setActiveTab] = useState<"calendar" | "habits" | "achievements">("calendar")
  const [currentDate, setCurrentDate] = useState(new Date())
  const [habits, setHabits] = useState<Habit[]>([])
  const [completions, setCompletions] = useState<HabitCompletion[]>([])
  const [selectedDate, setSelectedDate] = useState<string | null>(formatDate(new Date()))

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
    Tamil: "ta-IN",
  }
  const currentLocale = locales[language] || "en-US"

  useEffect(() => {
    const loadData = () => {
      setHabits(getHabits().filter((h) => !h.archived))
      setCompletions(getCompletions())
    }
    loadData()

    window.addEventListener('vybe_data_updated', loadData)
    return () => window.removeEventListener('vybe_data_updated', loadData)
  }, [])

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const firstDayOfMonth = new Date(year, month, 1).getDay()

  const monthName = currentDate.toLocaleDateString(currentLocale, { month: "long", year: "numeric" })

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1))
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1))

  // --- Calendar Tab Logic ---
  const completionMap = useMemo(() => {
    const map: Record<string, number> = {}
    completions.forEach((c) => {
      map[c.date] = (map[c.date] || 0) + 1
    })
    return map
  }, [completions])

  // --- All Habits Logic ---
  const activeHabits = habits.filter(h => !h.archived)
  const morningHabits = activeHabits.filter(h => h.reminderTime && parseInt(h.reminderTime.split(':')[0]) < 12)
  const anytimeHabits = activeHabits.filter(h => !h.reminderTime || parseInt(h.reminderTime.split(':')[0]) >= 12)

  // Generate localized day names
  const dayNames = useMemo(() => {
    const days = []
    for (let i = 0; i < 7; i++) {
      // Create a date for a specific day of the week (e.g., Sunday, Jan 5, 2025)
      const date = new Date(2025, 0, 5 + i)
      days.push(date.toLocaleDateString(currentLocale, { weekday: "short" }).toUpperCase())
    }
    return days
  }, [currentLocale])

  return (
    <div className="flex flex-col pb-24 px-5 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-foreground uppercase">{t("history")}</h1>
        <Button variant="ghost" size="icon">
          <Share2 className="h-6 w-6" />
        </Button>
      </div>

      {/* Sub-tabs Navigation */}
      <div className="flex items-center gap-6 mb-6 border-b border-border/50 pb-1">
        <button
          onClick={() => setActiveTab("calendar")}
          className={cn(
            "text-base font-semibold pb-2 transition-all relative",
            activeTab === "calendar" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {t("calendar")}
          {activeTab === "calendar" && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full translate-y-1.5" />
          )}
        </button>
        <button
          onClick={() => setActiveTab("habits")}
          className={cn(
            "text-base font-semibold pb-2 transition-all relative",
            activeTab === "habits" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {t("allHabits")}
          {activeTab === "habits" && (
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-t-full translate-y-1.5" />
          )}
        </button>
      </div>

      {/* --- CALENDAR TAB CONTENT --- */}
      {activeTab === "calendar" && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          {/* Calendar Card */}
          <Card className="glass border-0 p-4 shadow-lg">
            {/* Month Nav */}
            <div className="flex items-center justify-between mb-4 px-2">
              <Button variant="ghost" size="icon" onClick={prevMonth} className="h-8 w-8">
                <ChevronLeft className="h-5 w-5" />
              </Button>
              <h2 className="text-lg font-bold text-foreground capitalize">{monthName}</h2>
              <Button variant="ghost" size="icon" onClick={nextMonth} className="h-8 w-8">
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-1 w-full text-center mb-2">
              {dayNames.map((day) => (
                <div key={day} className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                  {day}
                </div>
              ))}
            </div>

            {/* Days Grid */}
            <div className="grid grid-cols-7 gap-1">
              {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                <div key={`empty-${i}`} className="aspect-square" />
              ))}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1
                const dateStr = formatDate(new Date(year, month, day))
                const isSelected = dateStr === selectedDate
                const isToday = dateStr === formatDate(new Date())

                // Check if any habits were completed on this day
                const hasCompletions = completions.some(c => c.date === dateStr)

                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(dateStr)}
                    className={cn(
                      "aspect-square flex flex-col items-center justify-center rounded-xl text-sm font-bold transition-all relative",
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-lg scale-110 z-10"
                        : "text-foreground hover:bg-secondary",
                      isToday && !isSelected && "border-2 border-primary/50"
                    )}
                  >
                    <span>{day}</span>
                    {hasCompletions && !isSelected && (
                      <div className="w-1 h-1 rounded-full bg-primary mt-1" />
                    )}
                  </button>
                )
              })}
            </div>
          </Card>

          {/* Selected Date Habits */}
          <div>
            <h2 className="text-lg font-bold text-foreground mb-3 uppercase tracking-wide">
              {selectedDate === formatDate(new Date()) ? t("today") : new Date(selectedDate!).toLocaleDateString(currentLocale, { weekday: 'long', month: 'long', day: 'numeric' })}
            </h2>

            <div className="space-y-3">
              {(() => {
                if (!selectedDate) return null

                // Fix timezone issue by parsing YYYY-MM-DD manually
                const [y, m, d] = selectedDate.split('-').map(Number)
                const dateObj = new Date(y, m - 1, d)
                const dayOfWeek = dateObj.getDay()

                const scheduledHabits = activeHabits.filter(h => h.repeatDays.includes(dayOfWeek))

                if (scheduledHabits.length === 0) {
                  return (
                    <div className="text-center py-8 text-muted-foreground">
                      <p>No habits scheduled for this day.</p>
                    </div>
                  )
                }

                return scheduledHabits.map(habit => {
                  const isCompleted = completions.some(c => c.habitId === habit.id && c.date === selectedDate)

                  return (
                    <Card key={habit.id} className={cn(
                      "border-0 p-4 shadow-md flex items-center justify-between transition-all",
                      isCompleted ? "bg-primary/10" : "bg-card/50"
                    )}>
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "h-12 w-12 rounded-xl flex items-center justify-center text-2xl shadow-sm transition-all",
                          isCompleted ? "bg-primary text-primary-foreground scale-110" : "bg-secondary"
                        )}>
                          {isCompleted ? <Check className="h-6 w-6" /> : habit.emoji}
                        </div>
                        <div>
                          <h3 className={cn("font-bold text-lg", isCompleted && "text-primary")}>{habit.name}</h3>
                          <p className="text-xs text-muted-foreground">
                            {habit.reminderTime ? `Reminder: ${habit.reminderTime}` : "Anytime"}
                          </p>
                        </div>
                      </div>

                      {isCompleted && (
                        <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Trophy className="h-4 w-4 text-primary" />
                        </div>
                      )}
                    </Card>
                  )
                })
              })()}
            </div>
          </div>
        </div>
      )}

      {/* --- ALL HABITS TAB CONTENT --- */}
      {activeTab === "habits" && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="flex items-center gap-2">
            <h2 className="text-lg font-bold text-foreground uppercase">{t("active")}</h2>
            <span className="text-sm text-muted-foreground">({activeHabits.length})</span>
          </div>

          {/* Anytime Section */}
          {anytimeHabits.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase mb-3 tracking-wider">{t("anytime")}</h3>
              <div className="space-y-3">
                {anytimeHabits.map((habit) => (
                  <Card key={habit.id} className="border-0 p-4 bg-blue-500 text-white shadow-lg flex items-center gap-4">
                    <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center text-xl backdrop-blur-sm">
                      {habit.emoji}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{habit.name}</h4>
                      <p className="text-sm text-white/80">{t("everyday")}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Morning Section */}
          {morningHabits.length > 0 && (
            <div>
              <h3 className="text-xs font-bold text-muted-foreground uppercase mb-3 tracking-wider">{t("morning")}</h3>
              <div className="space-y-3">
                {morningHabits.map((habit, index) => (
                  <Card
                    key={habit.id}
                    className={cn(
                      "border-0 p-4 text-white shadow-lg flex items-center gap-4",
                      index % 2 === 0 ? "bg-green-600" : "bg-orange-500"
                    )}
                  >
                    <div className="h-10 w-10 bg-white/20 rounded-lg flex items-center justify-center text-xl backdrop-blur-sm">
                      {habit.emoji}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{habit.name}</h4>
                      <p className="text-sm text-white/80">{t("everyday")}</p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
