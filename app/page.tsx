"use client"

import { useState, useEffect } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { HomeTab } from "@/components/tabs/home-tab"
import { CalendarTab } from "@/components/tabs/calendar-tab"
import { VybesTab } from "@/components/tabs/vybes-tab"
import { ProfileTab } from "@/components/tabs/profile-tab"
import { Onboarding } from "@/components/onboarding"
import { DoItNowScreen } from "@/components/do-it-now-screen"
import { isOnboardingComplete, getHabits, getStreak, toggleCompletion } from "@/lib/store"
import { formatDate } from "@/lib/data"
import type { Habit } from "@/lib/types"

type TabType = "home" | "calendar" | "vybes" | "profile"

export default function VybeApp() {
  const [showOnboarding, setShowOnboarding] = useState(true)
  const [activeTab, setActiveTab] = useState<TabType>("home")
  const [isLoading, setIsLoading] = useState(true)
  const [doItNowHabit, setDoItNowHabit] = useState<Habit | null>(null)

  useEffect(() => {
    // Check onboarding status
    const onboardingComplete = isOnboardingComplete()
    setShowOnboarding(!onboardingComplete)
    setIsLoading(false)
  }, [])

  const handleDoItNowComplete = () => {
    if (doItNowHabit) {
      toggleCompletion(doItNowHabit.id, formatDate(new Date()))
      setDoItNowHabit(null)
    }
  }

  const handleDoItNowSnooze = () => {
    // In a real app, this would schedule a reminder for 10 minutes later
    setDoItNowHabit(null)
  }

  // Demo: Show Do It Now screen when clicking a habit (simulating notification)
  const handleDemoDoItNow = () => {
    const habits = getHabits().filter((h) => !h.archived)
    if (habits.length > 0) {
      setDoItNowHabit(habits[0])
    }
  }

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-4xl animate-pulse">🌊</div>
      </div>
    )
  }

  if (showOnboarding) {
    return <Onboarding onComplete={() => setShowOnboarding(false)} />
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Do It Now Full Screen */}
      {doItNowHabit && (
        <DoItNowScreen
          habit={doItNowHabit}
          streak={getStreak(doItNowHabit.id)}
          onComplete={handleDoItNowComplete}
          onSnooze={handleDoItNowSnooze}
          onClose={() => setDoItNowHabit(null)}
        />
      )}

      {/* Tab Content */}
      <div className="max-w-md mx-auto">
        {activeTab === "home" && <HomeTab key="home" />}
        {activeTab === "calendar" && <CalendarTab key="calendar" />}
        {activeTab === "vybes" && <VybesTab key="vybes" />}
        {activeTab === "profile" && <ProfileTab key="profile" />}
      </div>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </main>
  )
}
