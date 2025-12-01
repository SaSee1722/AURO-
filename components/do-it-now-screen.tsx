"use client"

import { useState } from "react"
import { X, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FireStreak } from "./fire-streak"
import { Confetti } from "./confetti"
import type { Habit } from "@/lib/types"

const MOTIVATIONAL_LINES = [
  "Your future self is watching. Make them proud.",
  "Small steps. Massive results.",
  "Don't break the chain. You've got this.",
  "One more day. One more win.",
  "Champions do what others won't.",
  "The only bad workout is the one that didn't happen.",
  "You're stronger than your excuses.",
  "Every rep counts. Every day matters.",
]

interface DoItNowScreenProps {
  habit: Habit
  streak: number
  onComplete: () => void
  onSnooze: () => void
  onClose: () => void
}

export function DoItNowScreen({ habit, streak, onComplete, onSnooze, onClose }: DoItNowScreenProps) {
  const [completed, setCompleted] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const motivationalLine = MOTIVATIONAL_LINES[Math.floor(Math.random() * MOTIVATIONAL_LINES.length)]

  const handleComplete = () => {
    setShowConfetti(true)
    setCompleted(true)
    setTimeout(() => {
      onComplete()
    }, 1500)
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background/95 backdrop-blur-xl">
      <Confetti trigger={showConfetti} />

      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground transition-colors"
      >
        <X className="h-6 w-6" />
      </button>

      {/* Main Content */}
      <div className="flex flex-col items-center text-center px-8 max-w-md">
        {/* Emoji */}
        <div className="text-8xl mb-6 animate-bounce" style={{ animationDuration: "2s" }}>
          {habit.emoji}
        </div>

        {/* Habit Name */}
        <h1 className="text-3xl font-bold text-foreground mb-4 text-balance">{habit.name}</h1>

        {/* Streak */}
        <div className="mb-6">
          <FireStreak streak={streak} size="xl" animate />
          {streak > 0 && (
            <p className="text-sm text-muted-foreground mt-2">{streak === 1 ? "day streak" : `day streak`}</p>
          )}
        </div>

        {/* Motivational Line */}
        <p className="text-lg text-muted-foreground mb-12 text-balance leading-relaxed">{motivationalLine}</p>

        {/* Action Buttons */}
        {!completed ? (
          <div className="flex flex-col gap-4 w-full">
            <Button
              onClick={handleComplete}
              className="h-16 rounded-2xl bg-success text-success-foreground text-xl font-bold shadow-xl hover:bg-success/90 transition-all hover:scale-105"
            >
              I DID IT! ✓
            </Button>

            <Button
              onClick={onSnooze}
              variant="ghost"
              className="h-12 rounded-xl text-muted-foreground hover:text-foreground"
            >
              <Clock className="h-4 w-4 mr-2" />
              Snooze 10 min
            </Button>
          </div>
        ) : (
          <div className="flex flex-col items-center animate-in zoom-in">
            <div className="text-6xl mb-4">🎉</div>
            <p className="text-2xl font-bold text-success">Amazing!</p>
            <p className="text-muted-foreground mt-2">Keep the momentum going!</p>
          </div>
        )}
      </div>
    </div>
  )
}
