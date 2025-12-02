"use client"

import { useState, useEffect, useMemo } from "react"
import { ChevronLeft, ChevronRight, Share2, Trophy, Target, Calendar as CalendarIcon } from "lucide-react"
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
              <div className="grid grid-cols-7 gap-1 w-full text-center">
                {dayNames.map((day) => (
                  <div key={day} className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">
                    {day}
                  </div>
                ))}
              </div>
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

                return (
                  <button
                    key={day}
                    onClick={() => setSelectedDate(dateStr)}
                    className={cn(
                      "aspect-square flex items-center justify-center rounded-full text-sm font-bold transition-all",
                      isSelected
                        ? "bg-primary text-primary-foreground shadow-lg"
                        : "text-foreground hover:bg-secondary"
                    )}
                  >
                    {day}
                  </button>
                )
              })}
            </div>
          </Card>

          {/* Statistics Section */}
          <div>
            <h2 className="text-lg font-bold text-foreground mb-1 uppercase tracking-wide">{t("statistics")}</h2>
            <p className="text-sm font-bold text-muted-foreground mb-4 capitalize">{monthName}</p>

            <Card className="glass border-0 p-5 shadow-lg">
              {(() => {
                // Calculate weekly stats based on selectedDate
                // Fix: Parse YYYY-MM-DD string explicitly to avoid timezone issues
                const [y, m, d] = (selectedDate || formatDate(new Date())).split('-').map(Number)
                const selected = new Date(y, m - 1, d)

                const dayOfWeek = selected.getDay() // 0 (Sun) to 6 (Sat)
                const startOfWeek = new Date(selected)
                startOfWeek.setDate(selected.getDate() - dayOfWeek) // Go back to Sunday

                const weekData = []
                let totalRate = 0

                for (let i = 0; i < 7; i++) {
                  const current = new Date(startOfWeek)
                  current.setDate(startOfWeek.getDate() + i)
                  const dateStr = formatDate(current)
                  const currentDayOfWeek = current.getDay()

                  // Find habits scheduled for this day
                  const scheduledHabits = activeHabits.filter(h => h.repeatDays.includes(currentDayOfWeek))

                  // Find completions for this day matching scheduled habits
                  const completedCount = completions.filter(c =>
                    c.date === dateStr && scheduledHabits.some(h => h.id === c.habitId)
                  ).length

                  const rate = scheduledHabits.length > 0 ? (completedCount / scheduledHabits.length) * 100 : 0
                  weekData.push({
                    day: current.toLocaleDateString(currentLocale, { weekday: "narrow" }),
                    rate,
                    isHigh: rate >= 80, // Green if >= 80%
                    isMedium: rate >= 40 && rate < 80, // Orange if 40-79%
                    date: current
                  })
                  totalRate += rate
                }

                const avgRate = Math.round(totalRate / 7)
                const endOfWeek = new Date(startOfWeek)
                endOfWeek.setDate(startOfWeek.getDate() + 6)

                const dateRange = `${startOfWeek.toLocaleDateString(currentLocale, { month: "short", day: "numeric" })} - ${endOfWeek.toLocaleDateString(currentLocale, { month: "short", day: "numeric" })}`

                return (
                  <>
                    <div className="flex justify-between items-start mb-8">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{dateRange}</h3>
                        <p className="text-sm text-muted-foreground">{startOfWeek.getFullYear()}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-2xl font-bold text-foreground">{avgRate}%</span>
                        <p className="text-xs text-muted-foreground">{t("avgCompletionRate")}</p>
                      </div>
                    </div>

                    {/* Bar Chart */}
                    <div className="h-32 flex items-end justify-between gap-2 relative">
                      {/* Dotted Line (50%) */}
                      <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-muted-foreground/20" />

                      {weekData.map((data, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 flex-1 group relative">
                          {/* Tooltip */}
                          <div className="absolute -top-8 opacity-0 group-hover:opacity-100 transition-opacity bg-foreground text-background text-[10px] px-2 py-1 rounded z-10">
                            {Math.round(data.rate)}%
                          </div>

                          {/* Bar Container */}
                          <div className="relative w-full h-full flex items-end justify-center">
                            {/* Background bar (always visible) */}
                            <div className="absolute bottom-0 w-4 h-full bg-secondary/30 rounded-full" />

                            {/* Actual completion bar */}
                            <div
                              className={cn(
                                "w-4 rounded-full transition-all duration-500 relative z-10",
                                data.rate >= 80 ? "bg-green-500 shadow-lg shadow-green-500/20" :
                                  data.rate >= 40 ? "bg-orange-500 shadow-lg shadow-orange-500/20" :
                                    data.rate > 0 ? "bg-red-400 shadow-lg shadow-red-400/20" : "bg-transparent"
                              )}
                              style={{ height: `${data.rate}%` }}
                            />
                          </div>

                          <span className={cn(
                            "text-xs font-medium",
                            formatDate(data.date) === selectedDate ? "text-primary font-bold" : "text-muted-foreground"
                          )}>
                            {data.day}
                          </span>
                        </div>
                      ))}
                    </div>
                  </>
                )
              })()}
            </Card>
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
