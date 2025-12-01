"use client"

import { useState } from "react"
import { ChevronRight, Bell, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { AddHabitModal } from "./add-habit-modal"
import type { Habit } from "@/lib/types"
import { defaultHabits } from "@/lib/data"
import { addHabit, setOnboardingComplete } from "@/lib/store"
import { cn } from "@/lib/utils"

interface OnboardingProps {
  onComplete: () => void
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(0)
  const [selectedPresets, setSelectedPresets] = useState<number[]>([])
  const [showCustomModal, setShowCustomModal] = useState(false)

  const handleNext = () => {
    if (step < 2) {
      setStep(step + 1)
    } else {
      // Add selected habits
      selectedPresets.forEach((index) => {
        const preset = defaultHabits[index]
        const newHabit: Habit = {
          id: crypto.randomUUID(),
          name: preset.name,
          emoji: preset.emoji,
          color: preset.color,
          reminderTime: "09:00",
          repeatDays: [0, 1, 2, 3, 4, 5, 6],
          createdAt: new Date().toISOString(),
          archived: false,
        }
        addHabit(newHabit)
      })
      setOnboardingComplete()
      onComplete()
    }
  }

  const togglePreset = (index: number) => {
    if (selectedPresets.includes(index)) {
      setSelectedPresets(selectedPresets.filter((i) => i !== index))
    } else {
      setSelectedPresets([...selectedPresets, index])
    }
  }

  const handleAddCustom = (habitData: {
    name: string
    emoji: string
    color: string
    reminderTime: string
    repeatDays: number[]
  }) => {
    const newHabit: Habit = {
      id: crypto.randomUUID(),
      ...habitData,
      createdAt: new Date().toISOString(),
      archived: false,
    }
    addHabit(newHabit)
  }

  return (
    <div className="fixed inset-0 flex flex-col bg-background">
      {/* Progress Dots */}
      <div className="flex justify-center gap-2 pt-12 pb-8">
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              i === step ? "w-8 bg-primary" : i < step ? "bg-primary/50" : "bg-secondary",
            )}
          />
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 min-h-0 overflow-y-auto flex flex-col items-center justify-center px-8 py-4 text-center">
        {step === 0 && (
          <>
            <div className="text-7xl mb-8">🌊</div>
            <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to Vybe</h1>
            <p className="text-lg text-muted-foreground max-w-sm leading-relaxed">
              Build unbreakable habits. One vibe at a time.
            </p>
            <p className="mt-4 text-muted-foreground max-w-sm">
              Track your streaks, visualize progress, and stay motivated with daily insights from Atomic Habits.
            </p>
          </>
        )}

        {step === 1 && (
          <>
            <Bell className="h-16 w-16 text-primary mb-8" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Stay on Track</h1>
            <p className="text-lg text-muted-foreground max-w-sm leading-relaxed">
              Enable notifications to get powerful &ldquo;Do It Now&rdquo; reminders that help you never miss a habit.
            </p>
            <Card className="glass border-0 mt-8 p-4 shadow-lg max-w-xs">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-primary/20 flex items-center justify-center text-2xl">💪</div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Time to Workout!</p>
                  <p className="text-sm text-muted-foreground">Tap to complete • 12 day streak</p>
                </div>
              </div>
            </Card>
          </>
        )}

        {step === 2 && (
          <>
            <Sparkles className="h-16 w-16 text-primary mb-8" />
            <h1 className="text-3xl font-bold text-foreground mb-4">Add Your First Habits</h1>
            <p className="text-muted-foreground max-w-sm mb-6">Choose from popular habits or create your own</p>

            <div className="grid grid-cols-2 gap-3 w-full max-w-sm">
              {defaultHabits.map((habit, index) => (
                <button
                  key={index}
                  onClick={() => togglePreset(index)}
                  className={cn(
                    "glass rounded-xl p-4 text-left transition-all",
                    selectedPresets.includes(index) ? "ring-2 ring-primary bg-primary/10" : "hover:bg-secondary/80",
                  )}
                >
                  <span className="text-2xl">{habit.emoji}</span>
                  <p className="text-sm font-medium text-foreground mt-2">{habit.name}</p>
                </button>
              ))}
            </div>

            <Button variant="ghost" onClick={() => setShowCustomModal(true)} className="mt-4 text-primary">
              + Create custom habit
            </Button>
          </>
        )}
      </div>

      {/* Bottom Button */}
      <div className="shrink-0 p-8 pb-10 bg-background">
        <Button
          onClick={handleNext}
          className="w-full h-14 rounded-2xl bg-primary text-primary-foreground text-lg font-semibold shadow-xl"
        >
          {step === 2 ? (
            selectedPresets.length > 0 ? (
              `Start with ${selectedPresets.length} habits`
            ) : (
              "Skip for now"
            )
          ) : (
            <>
              Continue
              <ChevronRight className="ml-2 h-5 w-5" />
            </>
          )}
        </Button>
      </div>

      <AddHabitModal open={showCustomModal} onClose={() => setShowCustomModal(false)} onSave={handleAddCustom} />
    </div>
  )
}
