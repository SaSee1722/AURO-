"use client"

import { useState, useEffect } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { HomeTab } from "@/components/tabs/home-tab"
import { CalendarTab } from "@/components/tabs/calendar-tab"
import { VybesTab } from "@/components/tabs/vybes-tab"
import { ProfileTab } from "@/components/tabs/profile-tab"
import { Onboarding } from "@/components/onboarding"
import { DoItNowScreen } from "@/components/do-it-now-screen"
import { SplashScreen } from "@/components/splash-screen"
import { LoginScreen } from "@/components/login-screen"
import { isOnboardingComplete, getHabits, getStreak, toggleCompletion } from "@/lib/store"
import { formatDate } from "@/lib/data"
import { supabase } from "@/lib/supabase"
import type { Habit } from "@/lib/types"
import type { Session } from "@supabase/supabase-js"

type TabType = "home" | "calendar" | "vybes" | "profile"

export default function VybeApp() {
  const [showSplash, setShowSplash] = useState(true)
  const [session, setSession] = useState<Session | null>(null)
  const [authChecked, setAuthChecked] = useState(false)

  const [showOnboarding, setShowOnboarding] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>("home")
  const [doItNowHabit, setDoItNowHabit] = useState<Habit | null>(null)

  useEffect(() => {
    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
      setAuthChecked(true)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  useEffect(() => {
    if (authChecked && !showSplash && session) {
      // Check onboarding status only after auth is confirmed and splash is done
      const onboardingComplete = isOnboardingComplete()
      setShowOnboarding(!onboardingComplete)
    }
  }, [authChecked, showSplash, session])

  const handleSplashFinish = () => {
    setShowSplash(false)
  }

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

  if (showSplash) {
    return <SplashScreen onFinish={handleSplashFinish} />
  }

  if (!authChecked) {
    return null // Or a loading spinner, but splash covers this usually
  }

  if (!session) {
    return <LoginScreen />
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
