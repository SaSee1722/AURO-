"use client"

import { Home, Calendar, Sparkles, User } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/use-translation"

type TabType = "home" | "calendar" | "vybes" | "profile"

interface BottomNavProps {
  activeTab: TabType
  onTabChange: (tab: TabType) => void
}

export function BottomNav({ activeTab, onTabChange }: BottomNavProps) {
  const { t } = useTranslation()

  const tabs = [
    { id: "home" as const, label: t("navToday"), icon: Home },
    { id: "calendar" as const, label: t("navCalendar"), icon: Calendar },
    { id: "vybes" as const, label: t("navVybes"), icon: Sparkles },
    { id: "profile" as const, label: t("navProfile"), icon: User },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-40 glass border-t border-border/50">
      <div className="flex items-center justify-around h-16 max-w-md mx-auto">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id

          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={cn(
                "flex flex-col items-center gap-1 px-4 py-2 transition-all",
                isActive ? "text-primary" : "text-muted-foreground",
              )}
            >
              <Icon className={cn("h-6 w-6 transition-transform", isActive && "scale-110")} />
              <span className="text-xs font-medium">{tab.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
