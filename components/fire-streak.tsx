"use client"

import { cn } from "@/lib/utils"

interface FireStreakProps {
  streak: number
  size?: "sm" | "md" | "lg" | "xl"
  animate?: boolean
}

export function FireStreak({ streak, size = "md", animate = false }: FireStreakProps) {
  const sizeClasses = {
    sm: "text-lg",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-6xl",
  }

  const numberSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-lg",
    xl: "text-2xl",
  }

  if (streak === 0) {
    return (
      <div className="flex items-center gap-1">
        <span className={cn(sizeClasses[size], "opacity-40")}>🔥</span>
        <span className={cn(numberSizes[size], "font-semibold text-muted-foreground")}>0</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-1">
      <span className={cn(sizeClasses[size], animate && "fire-animate")}>🔥</span>
      <span
        className={cn(
          numberSizes[size],
          "font-bold",
          streak >= 30 ? "text-accent" : streak >= 7 ? "text-primary" : "text-foreground",
        )}
      >
        {streak}
      </span>
    </div>
  )
}
