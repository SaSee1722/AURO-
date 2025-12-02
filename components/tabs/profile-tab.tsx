"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Bell,
  Settings,
  Globe,
  Share2,
  Star,
  MessageSquare,
  X,
  Check,
  User,
  Mail,
  Lock,
  Calendar,
  Trophy,
  Medal,
  Award,
  Zap
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/use-translation"
import { useAuth } from "@/components/auth-provider"

import { getHabits, getCompletions, getStreak } from "@/lib/store"

export function ProfileTab() {
  const { t } = useTranslation()
  const { user, signOut } = useAuth()
  const [isDark, setIsDark] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [showLanguageModal, setShowLanguageModal] = useState(false)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [feedbackText, setFeedbackText] = useState("")
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [achievements, setAchievements] = useState<any[]>([])

  // Mock user data (replace with real data from DB later)
  const userProfile = {
    name: user?.user_metadata?.full_name || "Alex Johnson",
    age: 24,
    email: user?.email || "alex.johnson@example.com",
  }

  useEffect(() => {
    // Check if dark mode is enabled
    setIsDark(document.documentElement.classList.contains("dark"))

    // Load notification preference
    const notifPref = localStorage.getItem("notifications")
    if (notifPref !== null) {
      setNotificationsEnabled(notifPref === "true")
    }

    // Load language preference
    const langPref = localStorage.getItem("language")
    if (langPref) {
      setSelectedLanguage(langPref)
    }

    // Calculate Achievements
    const calculateAchievements = () => {
      const habits = getHabits()
      const completions = getCompletions()
      const totalCompletions = completions.length

      // Calculate max streak across all habits
      let maxStreak = 0
      habits.forEach(h => {
        const s = getStreak(h.id)
        if (s > maxStreak) maxStreak = s
      })

      // Calculate perfect days (all active habits completed)
      // This is a bit complex, let's simplify for now:
      // Count days with >= 3 completions as a "good day"
      const completionsByDate: Record<string, number> = {}
      completions.forEach(c => {
        completionsByDate[c.date] = (completionsByDate[c.date] || 0) + 1
      })
      const goodDays = Object.values(completionsByDate).filter(count => count >= 3).length

      const newAchievements = [
        {
          id: 1,
          title: "Early Bird",
          icon: Sun,
          color: "text-orange-500",
          bg: "bg-orange-500/10",
          desc: "Completed 5 morning habits",
          unlocked: totalCompletions >= 5 // Simplified logic
        },
        {
          id: 2,
          title: "Streak Master",
          icon: Zap,
          color: "text-yellow-500",
          bg: "bg-yellow-500/10",
          desc: "7 day streak achieved",
          unlocked: maxStreak >= 7
        },
        {
          id: 3,
          title: "Zen Master",
          icon: Moon,
          color: "text-indigo-500",
          bg: "bg-indigo-500/10",
          desc: "Completed 10 habits total",
          unlocked: totalCompletions >= 10
        },
        {
          id: 4,
          title: "Goal Crusher",
          icon: Trophy,
          color: "text-emerald-500",
          bg: "bg-emerald-500/10",
          desc: "3 good days (3+ habits)",
          unlocked: goodDays >= 3
        },
      ]
      setAchievements(newAchievements)
    }

    calculateAchievements()

    // Listen for updates
    const handleUpdate = () => calculateAchievements()
    window.addEventListener('vybe_data_updated', handleUpdate)
    return () => window.removeEventListener('vybe_data_updated', handleUpdate)

  }, [])

  const showToastMessage = (message: string) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(!isDark)
  }

  const toggleNotifications = async () => {
    const newValue = !notificationsEnabled

    if (newValue) {
      // Request notification permissions
      const { notificationService } = await import('@/lib/notifications')
      const granted = await notificationService.initialize()

      if (granted) {
        setNotificationsEnabled(true)
        localStorage.setItem("notifications", "true")

        // Schedule notifications for all habits
        const { getHabits } = await import('@/lib/store')
        const habits = getHabits()
        await notificationService.scheduleHabitNotifications(habits)

        showToastMessage(t("notificationsEnabled"))
      } else {
        showToastMessage("Notification permissions denied")
      }
    } else {
      setNotificationsEnabled(false)
      localStorage.setItem("notifications", "false")
      showToastMessage(t("notificationsDisabled"))
    }
  }

  const handleGeneralSettings = () => {
    setShowSettingsModal(true)
  }

  const handleLanguageOptions = () => {
    setShowLanguageModal(true)
  }

  const handleShareWithFriends = async () => {
    const shareData = {
      title: "Vybe - Habit Tracker",
      text: "Build unbreakable habits with Vybe! Track your progress and stay motivated.",
      url: window.location.href
    }

    try {
      if (navigator.share) {
        await navigator.share(shareData)
        showToastMessage(t("thanksForSharing"))
      } else {
        await navigator.clipboard.writeText(shareData.url)
        showToastMessage(t("linkCopied"))
      }
    } catch (err) {
      console.log("Share failed:", err)
    }
  }

  const handleRateUs = () => {
    const userAgent = navigator.userAgent.toLowerCase()
    let storeUrl = ""

    if (userAgent.includes("android")) {
      storeUrl = "https://play.google.com/store"
      showToastMessage(t("openingPlayStore"))
    } else if (userAgent.includes("iphone") || userAgent.includes("ipad")) {
      storeUrl = "https://apps.apple.com"
      showToastMessage(t("openingAppStore"))
    } else {
      showToastMessage(t("thankYouSupport"))
      return
    }

    if (storeUrl) {
      window.open(storeUrl, "_blank")
    }
  }

  const handleFeedback = () => {
    setShowFeedbackModal(true)
  }

  const submitFeedback = () => {
    if (feedbackText.trim()) {
      console.log("Feedback submitted:", feedbackText)
      showToastMessage(t("thanksForFeedback"))
      setFeedbackText("")
      setShowFeedbackModal(false)
    } else {
      showToastMessage(t("enterFeedback"))
    }
  }

  const selectLanguage = (lang: string) => {
    setSelectedLanguage(lang)
    localStorage.setItem("language", lang)
    showToastMessage(`${t("languageChanged")} ${lang}`)
    setShowLanguageModal(false)
    setTimeout(() => window.location.reload(), 500)
  }

  const languages = ["English", "Spanish", "French", "German", "Italian", "Portuguese", "Chinese", "Japanese", "Korean", "Tamil", "Hindi"]

  return (
    <div className="flex flex-col pb-24 px-5 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-3xl font-bold text-foreground mb-6">{t("me")}</h1>

      {/* Toast Notification */}
      {showToast && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 animate-in slide-in-from-top-2 fade-in duration-300">
          <div className="glass border-0 px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
            <Check className="h-4 w-4 text-success" />
            <span className="text-sm font-medium">{toastMessage}</span>
          </div>
        </div>
      )}

      {/* Profile Card */}
      <Card className="glass border-0 p-6 shadow-lg mb-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <User className="h-32 w-32" />
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-16 w-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold text-primary border-2 border-primary/30">
              {userProfile.name.charAt(0)}
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground">{userProfile.name}</h2>
              <p className="text-sm text-muted-foreground">Level 5 Achiever</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 backdrop-blur-sm">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Email</p>
                <p className="text-sm font-medium truncate">{userProfile.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-xl bg-background/50 backdrop-blur-sm">
              <Calendar className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Age</p>
                <p className="text-sm font-medium">{userProfile.age} years</p>
              </div>
            </div>

            <button
              onClick={() => showToastMessage("Password reset email sent!")}
              className="w-full flex items-center gap-3 p-3 rounded-xl bg-background/50 backdrop-blur-sm hover:bg-background/80 transition-colors text-left"
            >
              <Lock className="h-5 w-5 text-muted-foreground" />
              <div className="flex-1">
                <p className="text-xs text-muted-foreground uppercase tracking-wider">Security</p>
                <p className="text-sm font-medium text-primary">Change Password</p>
              </div>
            </button>
          </div>
        </div>
      </Card>

      {/* Achievements Section */}
      <div className="mb-6">
        <h2 className="text-lg font-bold text-foreground mb-3 flex items-center gap-2">
          <Medal className="h-5 w-5 text-yellow-500" />
          Achievements
        </h2>
        <div className="grid grid-cols-2 gap-3">
          {achievements.map((achievement) => (
            <Card
              key={achievement.id}
              className={cn(
                "glass border-0 p-4 shadow-sm transition-all relative overflow-hidden",
                achievement.unlocked ? "hover:shadow-md" : "opacity-60 grayscale"
              )}
            >
              <div className={cn("h-10 w-10 rounded-full flex items-center justify-center mb-3", achievement.bg)}>
                <achievement.icon className={cn("h-5 w-5", achievement.color)} />
              </div>
              <h3 className="font-bold text-sm mb-1">{achievement.title}</h3>
              <p className="text-xs text-muted-foreground leading-tight">{achievement.desc}</p>

              {!achievement.unlocked && (
                <div className="absolute top-2 right-2">
                  <Lock className="h-4 w-4 text-muted-foreground/50" />
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>

      {/* Menu Options */}
      <Card className="glass border-0 p-2 shadow-lg stagger-item mb-4">
        <div className="space-y-1">
          {/* General settings */}
          <button
            onClick={handleGeneralSettings}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="h-9 w-9 rounded-lg bg-orange-500/20 flex items-center justify-center">
              <Settings className="h-5 w-5 text-orange-500" />
            </div>
            <span className="font-medium text-foreground">{t("generalSettings")}</span>
          </button>

          {/* Language Options */}
          <button
            onClick={handleLanguageOptions}
            className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-red-500/20 flex items-center justify-center">
                <Globe className="h-5 w-5 text-red-500" />
              </div>
              <span className="font-medium text-foreground">{t("languageOptions")}</span>
            </div>
            <span className="text-sm text-muted-foreground">{selectedLanguage}</span>
          </button>
        </div>
      </Card>

      {/* Social & Feedback Options */}
      <Card className="glass border-0 p-2 shadow-lg stagger-item">
        <div className="space-y-1">
          {/* Share with friends */}
          <button
            onClick={handleShareWithFriends}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="h-9 w-9 rounded-lg bg-blue-500/20 flex items-center justify-center">
              <Share2 className="h-5 w-5 text-blue-500" />
            </div>
            <span className="font-medium text-foreground">{t("shareWithFriends")}</span>
          </button>

          {/* Rate us */}
          <button
            onClick={handleRateUs}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="h-9 w-9 rounded-lg bg-teal-500/20 flex items-center justify-center">
              <Star className="h-5 w-5 text-teal-500" />
            </div>
            <span className="font-medium text-foreground">{t("rateUs")}</span>
          </button>

          {/* Feedback */}
          <button
            onClick={handleFeedback}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
          >
            <div className="h-9 w-9 rounded-lg bg-sky-500/20 flex items-center justify-center">
              <MessageSquare className="h-5 w-5 text-sky-500" />
            </div>
            <span className="font-medium text-foreground">{t("feedback")}</span>
          </button>
        </div>
      </Card>

      {/* Sign Out Button */}
      <div className="mt-6 mb-4">
        <Button
          onClick={() => signOut()}
          variant="destructive"
          className="w-full h-12 rounded-xl shadow-md"
        >
          Sign Out
        </Button>
      </div>

      {/* Version Info */}
      <div className="mt-2 text-center">
        <p className="text-sm text-muted-foreground font-medium">{t("version")} 1.3.9</p>
      </div>

      {/* Settings Modal */}
      {showSettingsModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <Card className="glass border-0 p-6 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">{t("generalSettings")}</h2>
              <button
                onClick={() => setShowSettingsModal(false)}
                className="h-8 w-8 rounded-full hover:bg-accent/50 flex items-center justify-center transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              {/* Dark Mode */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent/20">
                <div className="flex items-center gap-3">
                  {isDark ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                  <span className="font-medium">{t("darkMode")}</span>
                </div>
                <Switch checked={isDark} onCheckedChange={toggleDarkMode} />
              </div>

              {/* Notifications */}
              <div className="flex items-center justify-between p-3 rounded-lg bg-accent/20">
                <div className="flex items-center gap-3">
                  <Bell className="h-5 w-5" />
                  <span className="font-medium">{t("notifications")}</span>
                </div>
                <Switch checked={notificationsEnabled} onCheckedChange={toggleNotifications} />
              </div>
            </div>

            <Button
              onClick={() => setShowSettingsModal(false)}
              className="w-full mt-6 bg-primary hover:bg-primary/90"
            >
              {t("done")}
            </Button>
          </Card>
        </div>
      )}

      {/* Language Modal */}
      {showLanguageModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <Card className="glass border-0 p-6 w-full max-w-md shadow-2xl max-h-[80vh] overflow-auto animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">{t("selectLanguage")}</h2>
              <button
                onClick={() => setShowLanguageModal(false)}
                className="h-8 w-8 rounded-full hover:bg-accent/50 flex items-center justify-center transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-2">
              {languages.map((lang) => (
                <button
                  key={lang}
                  onClick={() => selectLanguage(lang)}
                  className={cn(
                    "w-full p-3 rounded-lg text-left transition-colors flex items-center justify-between",
                    selectedLanguage === lang
                      ? "bg-primary/20 text-primary font-medium"
                      : "hover:bg-accent/50"
                  )}
                >
                  <span>{lang}</span>
                  {selectedLanguage === lang && <Check className="h-5 w-5" />}
                </button>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Feedback Modal */}
      {showFeedbackModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <Card className="glass border-0 p-6 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-foreground">{t("sendFeedback")}</h2>
              <button
                onClick={() => setShowFeedbackModal(false)}
                className="h-8 w-8 rounded-full hover:bg-accent/50 flex items-center justify-center transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <textarea
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder={t("feedbackPlaceholder")}
              className="w-full h-32 p-3 rounded-lg bg-accent/20 border-0 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
            />

            <div className="flex gap-3 mt-6">
              <Button
                onClick={() => setShowFeedbackModal(false)}
                variant="outline"
                className="flex-1"
              >
                {t("cancel")}
              </Button>
              <Button
                onClick={submitFeedback}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                {t("submit")}
              </Button>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
