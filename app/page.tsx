"use client"

import { useState, useEffect } from "react"
import { BottomNav } from "@/components/bottom-nav"
import { HomeTab } from "@/components/tabs/home-tab"
import { CalendarTab } from "@/components/tabs/calendar-tab"
import { VybesTab } from "@/components/tabs/vybes-tab"
import { ProfileTab } from "@/components/tabs/profile-tab"
import { Onboarding } from "@/components/onboarding"
import { OnboardingFlow } from "@/components/onboarding-flow"
import { DoItNowScreen } from "@/components/do-it-now-screen"
import { SplashScreen } from "@/components/splash-screen"
import { LoginScreen } from "@/components/login-screen"
import { isOnboardingComplete, getHabits, getStreak, toggleCompletion } from "@/lib/store"
import { formatDate, getTodayQuote } from "@/lib/data"
import { supabase } from "@/lib/supabase"
import { notificationService } from "@/lib/notifications"
import type { Habit } from "@/lib/types"
import type { Session } from "@supabase/supabase-js"
import { NotificationSplash } from "@/components/notification-splash"

type TabType = "home" | "calendar" | "vybes" | "profile"

export default function VybeApp() {
  const [showSplash, setShowSplash] = useState(true)
  const [session, setSession] = useState<Session | null>(null)
  const [authChecked, setAuthChecked] = useState(false)

  const [showOnboarding, setShowOnboarding] = useState(false)
  const [showProfileSetup, setShowProfileSetup] = useState(false)
  const [activeTab, setActiveTab] = useState<TabType>("home")
  const [doItNowHabit, setDoItNowHabit] = useState<Habit | null>(null)
  const [notificationHabit, setNotificationHabit] = useState<{ habit: Habit; quote: string } | null>(null)

  useEffect(() => {
    // Handle deep link for OAuth callback (Capacitor)
    const handleDeepLink = async () => {
      if (typeof window !== 'undefined' && (window as any).Capacitor) {
        const { App } = await import('@capacitor/app')

        App.addListener('appUrlOpen', async (data: any) => {
          console.log('Deep link received:', data.url)

          // Extract hash fragment from deep link
          // Format: com.auro.habittracker://auth/callback#access_token=...&refresh_token=...
          const url = data.url
          const hashIndex = url.indexOf('#')

          if (hashIndex !== -1) {
            const hash = url.substring(hashIndex + 1)
            const params = new URLSearchParams(hash)
            const accessToken = params.get('access_token')
            const refreshToken = params.get('refresh_token')

            if (accessToken && refreshToken) {
              console.log('Setting session from deep link')
              try {
                const { data: sessionData, error } = await supabase.auth.setSession({
                  access_token: accessToken,
                  refresh_token: refreshToken,
                })

                if (error) {
                  console.error('Error setting session:', error)
                } else {
                  console.log('Session set successfully:', sessionData)
                  setSession(sessionData.session)
                }
              } catch (error) {
                console.error('Error in setSession:', error)
              }
            }
          }
        })
      }
    }

    handleDeepLink()

    // Check active session
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log('Initial session check:', session)
      setSession(session)
      setAuthChecked(true)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log('Auth state changed:', _event, session)
      setSession(session)
      if (session?.user) {
        notificationService.registerPushNotifications(session.user.id)

        // Check if profile is complete
        checkProfileCompletion(session.user.id)
      }
      if (!authChecked) {
        setAuthChecked(true)
      }
    })

    // Setup notification listeners
    notificationService.setupNotificationListeners((habitId, habitData) => {
      console.log('Notification received for habit:', habitId, habitData)

      // Find the full habit data
      const habits = getHabits()
      const habit = habits.find(h => h.id === habitId)

      if (habit) {
        // Get a motivational quote
        const quoteObj = getTodayQuote()

        // Show notification splash
        setNotificationHabit({ habit, quote: quoteObj.text })
      }
    })

    return () => subscription.unsubscribe()
  }, [])

  const checkProfileCompletion = async (userId: string) => {
    const { data, error } = await supabase
      .from('profiles')
      .select('age')
      .eq('id', userId)
      .single()

    if (error || !data || !data.age) {
      setShowProfileSetup(true)
    } else {
      setShowProfileSetup(false)
    }
  }

  useEffect(() => {
    if (authChecked && !showSplash && session) {
      // Check onboarding status only after auth is confirmed and splash is done
      const onboardingComplete = isOnboardingComplete()
      setShowOnboarding(!onboardingComplete)

      // Also check profile
      if (session.user) {
        checkProfileCompletion(session.user.id)
      }
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

  if (showProfileSetup) {
    return <OnboardingFlow onComplete={() => setShowProfileSetup(false)} />
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

      {/* Notification Splash Screen */}
      {notificationHabit && (
        <NotificationSplash
          habit={notificationHabit.habit}
          quote={notificationHabit.quote}
          onDismiss={() => setNotificationHabit(null)}
          onDoItNow={() => {
            setDoItNowHabit(notificationHabit.habit)
            setNotificationHabit(null)
          }}
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
