"use client"

import { useState, useEffect } from "react"
import {
  Moon,
  Sun,
  Bell,
  Trash2,
  Archive,
  RotateCcw,
  RefreshCw,
  Crown,
  Settings,
  Globe,
  Share2,
  Star,
  MessageSquare,
  X,
  Check
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import type { Habit } from "@/lib/types"
import { getHabits, archiveHabit, updateHabit, deleteHabit } from "@/lib/store"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/use-translation"
import { useAuth } from "@/components/auth-provider"

export function ProfileTab() {
  const { t } = useTranslation()
  const { user, signInWithGoogle, signOut } = useAuth()
  const [habits, setHabits] = useState<Habit[]>([])
  const [showArchived, setShowArchived] = useState(false)
  const [isDark, setIsDark] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)
  const [notificationsEnabled, setNotificationsEnabled] = useState(true)
  const [showSettingsModal, setShowSettingsModal] = useState(false)
  const [showLanguageModal, setShowLanguageModal] = useState(false)
  const [showFeedbackModal, setShowFeedbackModal] = useState(false)
  const [showBackupModal, setShowBackupModal] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState("English")
  const [feedbackText, setFeedbackText] = useState("")
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [isSyncing, setIsSyncing] = useState(false)

  useEffect(() => {
    setHabits(getHabits())
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

    const handleDataUpdate = () => setRefreshKey((k) => k + 1)
    window.addEventListener("vybe_data_updated", handleDataUpdate)
    return () => window.removeEventListener("vybe_data_updated", handleDataUpdate)
  }, [refreshKey])

  const showToastMessage = (message: string) => {
    setToastMessage(message)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const toggleDarkMode = () => {
    document.documentElement.classList.toggle("dark")
    setIsDark(!isDark)
  }

  const toggleNotifications = () => {
    const newValue = !notificationsEnabled
    setNotificationsEnabled(newValue)
    localStorage.setItem("notifications", String(newValue))
    showToastMessage(newValue ? t("notificationsEnabled") : t("notificationsDisabled"))
  }

  const handleBackupRestore = () => {
    setShowBackupModal(true)
  }

  const handlePremium = () => {
    showToastMessage(t("premiumSoon"))
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
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(shareData.url)
        showToastMessage(t("linkCopied"))
      }
    } catch (err) {
      console.log("Share failed:", err)
    }
  }

  const handleRateUs = () => {
    // Detect platform and open appropriate store
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

    // Open store in new tab
    if (storeUrl) {
      window.open(storeUrl, "_blank")
    }
  }

  const handleFeedback = () => {
    setShowFeedbackModal(true)
  }

  const submitFeedback = () => {
    if (feedbackText.trim()) {
      // In a real app, this would send to a backend
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
    // Reload page to apply new language
    setTimeout(() => window.location.reload(), 500)
  }

  const activeHabits = habits.filter((h) => !h.archived)
  const archivedHabits = habits.filter((h) => h.archived)

  const handleArchive = (habitId: string) => {
    archiveHabit(habitId)
    setRefreshKey((k) => k + 1)
  }

  const handleRestore = (habit: Habit) => {
    updateHabit({ ...habit, archived: false })
    setRefreshKey((k) => k + 1)
  }

  const handleDelete = (habitId: string) => {
    if (confirm("Are you sure you want to permanently delete this habit?")) {
      deleteHabit(habitId)
      setRefreshKey((k) => k + 1)
    }
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

      {/* Backup & Restore */}
      <Card className="glass border-0 p-4 shadow-lg stagger-item mb-4">
        <button
          onClick={handleBackupRestore}
          className="flex items-center justify-between w-full hover:opacity-80 transition-opacity"
        >
          <div>
            <h2 className="font-bold text-foreground text-base">{t("backupRestore")}</h2>
            <p className="text-sm text-muted-foreground mt-1">{t("backupRestoreDesc")}</p>
          </div>
          <RefreshCw className="h-5 w-5 text-primary" />
        </button>
      </Card>

      {/* GO PREMIUM Button */}
      <Button
        onClick={handlePremium}
        className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-base rounded-xl shadow-lg mb-4 stagger-item"
      >
        <Crown className="h-5 w-5 mr-2" />
        {t("goPremium")}
      </Button>

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

      {/* Version Info */}
      <div className="mt-6 text-center">
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

      {/* Backup & Restore Modal */}
      {showBackupModal && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4 animate-in fade-in duration-200">
          <Card className="glass border-0 p-8 w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200 relative">
            <button
              onClick={() => setShowBackupModal(false)}
              className="absolute top-4 right-4 h-8 w-8 rounded-full bg-muted/50 hover:bg-muted flex items-center justify-center transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Google Icon */}
              <div className="h-20 w-20 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mb-6 shadow-lg">
                <svg className="h-10 w-10 text-white" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                  <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                  <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
              </div>

              <h2 className="text-2xl font-bold text-foreground mb-2">{t("backupRestore")}</h2>
              <p className="text-muted-foreground mb-8">{t("synchronizeData")}</p>

              {/* Auth Buttons */}
              {user ? (
                <div className="w-full">
                  <div className="bg-green-50 p-4 rounded-xl mb-6 text-center">
                    <p className="text-sm text-green-800 font-medium">Logged in as</p>
                    <p className="text-base font-bold text-green-900">{user.email}</p>
                  </div>

                  <Button
                    disabled={isSyncing}
                    onClick={async () => {
                      setIsSyncing(true)
                      showToastMessage("Syncing data with cloud...")
                      try {
                        const result = await import("@/lib/store").then(m => m.syncWithSupabase(user.id))
                        showToastMessage(result || "Sync complete!")
                      } catch (e) {
                        showToastMessage("Sync failed. Please try again.")
                      } finally {
                        setIsSyncing(false)
                      }
                    }}
                    className="w-full h-14 bg-blue-500 hover:bg-blue-600 text-white font-bold text-base rounded-full shadow-lg mb-4 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    <RefreshCw className={cn("h-5 w-5 mr-2", isSyncing && "animate-spin")} />
                    {isSyncing ? "Syncing..." : "Sync Data Now"}
                  </Button>

                  <Button
                    onClick={() => {
                      signOut()
                      setShowBackupModal(false)
                      showToastMessage("Signed out successfully")
                    }}
                    className="w-full h-14 bg-red-500 hover:bg-red-600 text-white font-bold text-base rounded-full shadow-lg mb-4"
                  >
                    Sign Out
                  </Button>
                </div>
              ) : (
                <Button
                  onClick={() => {
                    signInWithGoogle()
                    setShowBackupModal(false)
                  }}
                  className="w-full h-14 bg-primary hover:bg-primary/90 text-white font-bold text-base rounded-full shadow-lg mb-4"
                >
                  {t("continueWithGoogle")}
                </Button>
              )}

              {/* Others Dropdown */}
              <details className="w-full">
                <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground flex items-center justify-center gap-2 py-2">
                  <span>{t("others")}</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="mt-4 space-y-2">
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      showToastMessage(t("emailSignInSoon"))
                      setShowBackupModal(false)
                    }}
                  >
                    {t("continueWithEmail")}
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full"
                    onClick={() => {
                      showToastMessage(t("appleSignInSoon"))
                      setShowBackupModal(false)
                    }}
                  >
                    {t("continueWithApple")}
                  </Button>
                </div>
              </details>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
