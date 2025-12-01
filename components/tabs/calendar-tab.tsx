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
        <button
          onClick={() => setActiveTab("achievements")}
          className={cn(
            "text-base font-semibold pb-2 transition-all relative",
            activeTab === "achievements" ? "text-foreground" : "text-muted-foreground"
          )}
        >
          {t("achievements")}
          {activeTab === "achievements" && (
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
              <div className="flex justify-between items-start mb-8">
                <div>
                  <h3 className="text-lg font-bold text-foreground">Nov 23 - Nov 29</h3>
                  <p className="text-sm text-muted-foreground">2025</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-foreground">33%</span>
                  <p className="text-xs text-muted-foreground">{t("avgCompletionRate")}</p>
                </div>
              </div>

              {/* Mock Bar Chart */}
              <div className="h-32 flex items-end justify-between gap-2 relative">
                {/* Dotted Line */}
                <div className="absolute top-1/2 left-0 right-0 border-t border-dashed border-muted-foreground/20" />

                {["S", "M", "T", "W", "T", "F", "S"].map((day, i) => {
                  const height = [20, 30, 25, 35, 60, 20, 25][i] // Mock data
                  const isHigh = height > 50
                  return (
                    <div key={i} className="flex flex-col items-center gap-2 flex-1">
                      <div
                        className={cn(
                          "w-3 rounded-full transition-all duration-500",
                          isHigh ? "bg-primary shadow-lg" : "bg-secondary"
                        )}
                        style={{ height: `${height}%` }}
                      />
                      <span className="text-xs font-medium text-muted-foreground">{day}</span>
                    </div>
                  )
                })}
              </div>
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

      {/* --- ACHIEVEMENTS TAB CONTENT --- */}
      {activeTab === "achievements" && (
        <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-300">
          {/* Main Banner */}
          <Card className="border-0 p-6 bg-blue-500 text-white shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-xl font-bold mb-1">{t("myAchievements")}</h2>
              <p className="text-sm text-white/80">{t("earnedAchievements")}</p>
            </div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full border-4 border-white/30 flex items-center justify-center font-bold text-xl">
              1
            </div>
          </Card>

          {/* Habits Finished Grid */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-foreground">{t("habitsFinished")}</h3>
              <span className="text-sm text-muted-foreground">1/6 {t("archived")}</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[1, 10, 20, 50, 100, 300].map((count, i) => (
                <div key={count} className="flex flex-col items-center text-center">
                  <div className={cn(
                    "h-16 w-16 mb-2 flex items-center justify-center rounded-full border-4",
                    i === 0 ? "bg-blue-500/20 border-blue-500 text-blue-500" : "bg-muted border-muted-foreground/30 text-muted-foreground/50"
                  )}>
                    <Target className="h-8 w-8" />
                  </div>
                  <span className="text-xs font-bold text-foreground mb-0.5">{t("finishHabit")}</span>
                  <span className="text-xs font-bold text-foreground">{i === 0 ? t("firstTime") : `${count} ${t("times")}`}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Perfect Days Grid */}
          <div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-foreground">{t("perfectDays")}</h3>
              <span className="text-sm text-muted-foreground">0/6 {t("archived")}</span>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {[3, 10, 20, 50, 100, 300].map((count) => (
                <div key={count} className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 mb-2 flex items-center justify-center rounded-full bg-muted border-4 border-muted-foreground/30 text-muted-foreground/50">
                    <CalendarIcon className="h-8 w-8" />
                  </div>
                  <span className="text-xs font-bold text-foreground">{count} {t("perfect")}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
