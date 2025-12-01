"use client"

import { useState } from "react"
import { Trash2 } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { ConfirmDialog } from "@/components/confirm-dialog"
import { FireStreak } from "./fire-streak"
import { Confetti } from "./confetti"
import type { Habit } from "@/lib/types"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/use-translation"

interface HabitCardProps {
  habit: Habit
  isCompleted: boolean
  streak: number
  onToggle: () => void
  onDelete?: () => void
  onClick?: () => void
}

export function HabitCard({ habit, isCompleted, streak, onToggle, onDelete, onClick }: HabitCardProps) {
  const { t } = useTranslation()
  const [showConfetti, setShowConfetti] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const handleToggle = () => {
    if (!isCompleted) {
      setShowConfetti(true)
      setTimeout(() => setShowConfetti(false), 100)
    }
    onToggle()
  }

  const handleDeleteClick = () => {
    setShowDeleteDialog(true)
  }

  const handleConfirmDelete = () => {
    setShowDeleteDialog(false)
    onDelete?.()
  }

  return (
    <Card
      className={cn(
        "glass relative overflow-hidden border-0 p-4 shadow-lg transition-all duration-300",
        isCompleted && "ring-2 ring-success/50",
      )}
    >
      <Confetti trigger={showConfetti} />

      <div className="flex items-center gap-4">
        <button
          onClick={handleToggle}
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-2xl text-2xl transition-all duration-300",
            isCompleted ? "bg-success/20 scale-105" : "bg-secondary hover:bg-secondary/80",
          )}
          style={{
            borderLeft: `4px solid ${habit.color}`,
          }}
        >
          {habit.emoji}
        </button>

        <div className="flex-1 cursor-pointer" onClick={onClick}>
          <h3 className={cn("font-semibold text-foreground transition-all", isCompleted && "line-through opacity-60")}>
            {habit.name}
          </h3>
          <p className="text-sm text-muted-foreground">{habit.reminderTime && `⏰ ${habit.reminderTime}`}</p>
        </div>

        <div className="flex items-center gap-2">
          <FireStreak streak={streak} size="md" animate={isCompleted} />
          {onDelete && (
            <Button
              variant="ghost"
              size="icon"
              onClick={handleDeleteClick}
              className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-colors"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          )}
          <Checkbox
            checked={isCompleted}
            onCheckedChange={handleToggle}
            className="h-6 w-6 rounded-lg border-2 data-[state=checked]:bg-success data-[state=checked]:border-success"
          />
        </div>
      </div>

      {/* Delete Confirmation Dialog */}
      <ConfirmDialog
        open={showDeleteDialog}
        title={t("deleteHabit")}
        message={`${t("deleteConfirmation")} "${habit.name}"? ${t("deleteMessage")}`}
        confirmText={t("delete")}
        cancelText={t("cancel")}
        variant="danger"
        onConfirm={handleConfirmDelete}
        onCancel={() => setShowDeleteDialog(false)}
      />
    </Card>
  )
}
