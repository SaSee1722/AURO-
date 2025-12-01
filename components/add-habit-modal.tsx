"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { getDayName } from "@/lib/data"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/use-translation"
import {
  Repeat,
  Ban,
  CheckSquare,
  Plus,
  ThumbsUp,
  ClipboardList,
  GlassWater,
  Footprints,
  ArrowRight,
  ChevronLeft
} from "lucide-react"

const EMOJI_OPTIONS = ["🧘", "💪", "📚", "💧", "✍️", "📵", "🏃", "🎯", "🧠", "😴", "🥗", "🎨"]
const COLOR_OPTIONS = ["#0A5F4E", "#E85D4C", "#5B8DEF", "#4ECDC4", "#9B59B6", "#F39C12"]

interface AddHabitModalProps {
  open: boolean
  onClose: () => void
  onSave: (habit: {
    name: string
    emoji: string
    color: string
    reminderTime: string
    repeatDays: number[]
  }) => void
  initialData?: {
    name: string
    emoji: string
    color: string
    reminderTime: string
    repeatDays: number[]
  }
}

type HabitType = "regular" | "negative" | "onetime"

export function AddHabitModal({ open, onClose, onSave, initialData }: AddHabitModalProps) {
  const { t } = useTranslation()
  const [step, setStep] = useState<"selection" | "suggestions" | "form">(initialData ? "form" : "selection")
  const [selectedType, setSelectedType] = useState<HabitType>("regular")
  const [selectedPresetId, setSelectedPresetId] = useState<string | null>(null)

  // Form State
  const [name, setName] = useState(initialData?.name || "")
  const [emoji, setEmoji] = useState(initialData?.emoji || "🎯")
  const [color, setColor] = useState(initialData?.color || "#0A5F4E")
  const [reminderTime, setReminderTime] = useState(initialData?.reminderTime || "")
  const [repeatDays, setRepeatDays] = useState<number[]>(initialData?.repeatDays || [0, 1, 2, 3, 4, 5, 6])

  const toggleDay = (day: number) => {
    if (repeatDays.includes(day)) {
      setRepeatDays(repeatDays.filter((d) => d !== day))
    } else {
      setRepeatDays([...repeatDays, day].sort())
    }
  }

  const handleSave = () => {
    if (!name.trim()) return
    onSave({ name, emoji, color, reminderTime, repeatDays })
    resetForm()
    onClose()
  }

  const resetForm = () => {
    setName("")
    setEmoji("🎯")
    setColor("#0A5F4E")
    setReminderTime("")
    setRepeatDays([0, 1, 2, 3, 4, 5, 6])
    setStep("selection")
    setSelectedType("regular")
    setSelectedPresetId(null)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const handlePresetClick = (presetId: string) => {
    setSelectedPresetId(presetId)
    setStep("suggestions")
  }

  const handleSuggestionClick = (suggestion: { name: string; emoji: string; color: string }) => {
    setName(suggestion.name)
    setEmoji(suggestion.emoji)
    setColor(suggestion.color)
    setStep("form")
  }

  const getDescription = () => {
    switch (selectedType) {
      case "regular":
        return t("regularDesc")
      case "negative":
        return t("negativeDesc")
      case "onetime":
        return t("onetimeDesc")
    }
  }

  const presets = [
    { id: "trend", icon: ThumbsUp, label: t("presetTrendTitle"), sub: t("presetTrendSub"), colorClass: "text-white", bgClass: "bg-blue-500" },
    { id: "essential", icon: ClipboardList, label: t("presetEssentialTitle"), sub: t("presetEssentialSub"), colorClass: "text-white", bgClass: "bg-yellow-500" },
    { id: "health", icon: GlassWater, label: t("presetHealthTitle"), sub: t("presetHealthSub"), colorClass: "text-white", bgClass: "bg-cyan-500" },
    { id: "fit", icon: Footprints, label: t("presetFitTitle"), sub: t("presetFitSub"), colorClass: "text-white", bgClass: "bg-[#005C4B]" },
  ]

  const getSuggestions = (id: string) => {
    switch (id) {
      case "trend":
        return [
          { name: t("sugScreenTime"), sub: t("sugScreenTimeSub"), emoji: "📱", color: "#3B82F6" },
          { name: t("sugCaffeine"), sub: t("sugCaffeineSub"), emoji: "☕", color: "#3B82F6" },
          { name: t("sugFasting"), sub: t("sugFastingSub"), emoji: "⏱️", color: "#3B82F6" },
          { name: t("sugMeditation"), sub: t("sugMeditationSub"), emoji: "🧘", color: "#3B82F6" },
          { name: t("sugLaugh"), sub: t("sugLaughSub"), emoji: "😂", color: "#3B82F6" },
          { name: t("sugBest"), sub: t("sugBestSub"), emoji: "😊", color: "#3B82F6" },
          { name: t("sugHobby"), sub: t("sugHobbySub"), emoji: "🌱", color: "#3B82F6" },
          { name: t("sugClean"), sub: t("sugCleanSub"), emoji: "🧹", color: "#3B82F6" },
          { name: t("sugWeight"), sub: t("sugWeightSub"), emoji: "⚖️", color: "#3B82F6" },
        ]
      case "essential":
        return [
          { name: t("sugWater"), sub: t("sugWaterSub"), emoji: "💧", color: "#EAB308" },
          { name: t("sugRead"), sub: t("sugReadSub"), emoji: "📚", color: "#EAB308" },
          { name: t("sugExercise"), sub: t("sugExerciseSub"), emoji: "🏃", color: "#EAB308" },
        ]
      case "health":
        return [
          { name: t("sugVeggies"), sub: t("sugVeggiesSub"), emoji: "🥗", color: "#06B6D4" },
          { name: t("sugSoda"), sub: t("sugSodaSub"), emoji: "🥤", color: "#06B6D4" },
          { name: t("sugWater"), sub: t("sugWaterSub"), emoji: "💧", color: "#06B6D4" },
        ]
      case "fit":
        return [
          { name: t("sugRun"), sub: t("sugRunSub"), emoji: "🏃", color: "#005C4B" },
          { name: t("sugYoga"), sub: t("sugYogaSub"), emoji: "🧘", color: "#005C4B" },
          { name: t("sugExercise"), sub: t("sugExerciseSub"), emoji: "💪", color: "#005C4B" },
        ]
      default:
        return []
    }
  }

  const currentSuggestions = selectedPresetId ? getSuggestions(selectedPresetId) : []
  const currentPreset = presets.find(p => p.id === selectedPresetId)

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="bg-white max-w-md border-0 p-0 overflow-hidden text-slate-900 h-[80vh] flex flex-col">

        {step === "selection" && (
          <div className="p-6 space-y-6 overflow-y-auto flex-1">
            <DialogHeader>
              <DialogTitle className="text-xl font-bold text-slate-900">{t("createNewHabit")}</DialogTitle>
            </DialogHeader>

            {/* Type Selection Buttons */}
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setSelectedType("regular")}
                className={cn(
                  "flex flex-col items-center justify-center p-3 rounded-xl transition-all h-24 border-2",
                  selectedType === "regular"
                    ? "bg-[#005C4B] border-[#005C4B] text-white"
                    : "bg-slate-100 border-transparent hover:bg-slate-200 text-slate-600"
                )}
              >
                <Repeat className="h-6 w-6 mb-2" />
                <span className="text-[10px] font-bold uppercase">{t("regular")}</span>
              </button>

              <button
                onClick={() => setSelectedType("negative")}
                className={cn(
                  "flex flex-col items-center justify-center p-3 rounded-xl transition-all h-24 border-2",
                  selectedType === "negative"
                    ? "bg-red-500 border-red-500 text-white"
                    : "bg-slate-100 border-transparent hover:bg-slate-200 text-slate-600"
                )}
              >
                <Ban className="h-6 w-6 mb-2" />
                <span className="text-[10px] font-bold uppercase">{t("negative")}</span>
              </button>

              <button
                onClick={() => setSelectedType("onetime")}
                className={cn(
                  "flex flex-col items-center justify-center p-3 rounded-xl transition-all h-24 border-2",
                  selectedType === "onetime"
                    ? "bg-[#005C4B] border-[#005C4B] text-white"
                    : "bg-slate-100 border-transparent hover:bg-slate-200 text-slate-600"
                )}
              >
                <CheckSquare className="h-6 w-6 mb-2" />
                <span className="text-[10px] font-bold uppercase text-center leading-tight">{t("onetime")}</span>
              </button>
            </div>

            {/* Description Box */}
            <div className="bg-slate-100 p-4 rounded-xl relative">
              {/* Triangle pointer */}
              <div className={cn(
                "absolute -top-2 w-4 h-4 bg-slate-100 rotate-45 transition-all duration-300",
                selectedType === "regular" && "left-[16%]",
                selectedType === "negative" && "left-[50%] -translate-x-1/2",
                selectedType === "onetime" && "left-[84%]"
              )} />

              <h3 className="font-bold uppercase mb-1 text-sm text-slate-900">
                {selectedType === "onetime" ? t("onetime") : selectedType === "regular" ? t("regular") : t("negative")}
              </h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                {getDescription()}
              </p>
            </div>

            {/* Create Button */}
            <Button
              onClick={() => setStep("form")}
              className="w-full h-12 bg-[#005C4B] hover:bg-[#004a3c] text-white font-bold rounded-full text-base"
            >
              <Plus className="h-5 w-5 mr-2" />
              {t("createYourOwn")}
            </Button>

            {/* Presets */}
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase mb-3 text-center">{t("chooseFromPresets")}</h4>
              <div className="space-y-3">
                {presets.map((preset, i) => (
                  <button
                    key={i}
                    onClick={() => handlePresetClick(preset.id)}
                    className="w-full bg-slate-100 hover:bg-slate-200 p-4 rounded-xl flex items-center justify-between group transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn("h-10 w-10 rounded-lg flex items-center justify-center", preset.bgClass, preset.colorClass)}>
                        <preset.icon className="h-6 w-6" />
                      </div>
                      <div className="text-left">
                        <h5 className="font-bold text-sm text-slate-900">{preset.label}</h5>
                        <p className="text-xs text-slate-500">{preset.sub}</p>
                      </div>
                    </div>
                    <div className="h-8 w-8 rounded-full bg-white group-hover:bg-white/80 flex items-center justify-center shadow-sm">
                      <ArrowRight className="h-4 w-4 text-slate-400" />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {step === "suggestions" && currentPreset && (
          <div className="flex flex-col h-full bg-slate-50">
            {/* Header */}
            <div className="p-6 pb-4 bg-white border-b border-slate-100">
              <div className="flex items-center gap-2 mb-2">
                <Button variant="ghost" size="icon" onClick={() => setStep("selection")} className="-ml-2 text-slate-900 hover:bg-slate-100">
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <h2 className="text-xl font-bold text-slate-900">{currentPreset.label}</h2>
              </div>
              <p className="text-sm text-slate-500 pl-10">
                {currentPreset.sub}
              </p>
            </div>

            {/* Suggestions List */}
            <div className="p-4 space-y-3 overflow-y-auto flex-1">
              {currentSuggestions.map((suggestion, i) => (
                <button
                  key={i}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full bg-white p-4 rounded-xl flex items-center justify-between group hover:shadow-md transition-all border border-slate-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-lg bg-blue-50 text-2xl flex items-center justify-center">
                      {suggestion.emoji}
                    </div>
                    <div className="text-left">
                      <h5 className="font-bold text-sm text-slate-900">{suggestion.name}</h5>
                      <p className="text-xs text-slate-500">{suggestion.sub}</p>
                    </div>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-slate-50 group-hover:bg-slate-100 flex items-center justify-center">
                    <ArrowRight className="h-4 w-4 text-slate-400" />
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "form" && (
          /* Form Step */
          <div className="p-6 flex flex-col h-full overflow-y-auto">
            <div className="flex items-center gap-2 mb-6">
              <Button variant="ghost" size="icon" onClick={() => setStep(selectedPresetId ? "suggestions" : "selection")} className="-ml-2 text-slate-900 hover:bg-slate-100">
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <DialogTitle className="text-xl font-bold text-slate-900">
                {initialData ? t("editHabit") : t("newHabitDetails")}
              </DialogTitle>
            </div>

            <div className="space-y-6 py-4 flex-1">
              <div className="space-y-2">
                <Label className="text-slate-700">{t("habitName")}</Label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g., Meditate for 10 minutes"
                  className="border-slate-200 bg-slate-50 text-slate-900 placeholder:text-slate-400"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700">{t("chooseEmoji")}</Label>
                <div className="flex flex-wrap gap-2">
                  {EMOJI_OPTIONS.map((e) => (
                    <button
                      key={e}
                      onClick={() => setEmoji(e)}
                      className={cn(
                        "flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-all",
                        emoji === e ? "bg-[#005C4B]/10 ring-2 ring-[#005C4B]" : "bg-slate-100 hover:bg-slate-200",
                      )}
                    >
                      {e}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700">{t("chooseColor")}</Label>
                <div className="flex gap-2">
                  {COLOR_OPTIONS.map((c) => (
                    <button
                      key={c}
                      onClick={() => setColor(c)}
                      className={cn(
                        "h-10 w-10 rounded-full transition-all",
                        color === c && "ring-2 ring-offset-2 ring-slate-300",
                      )}
                      style={{ backgroundColor: c }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700">{t("reminderTime")}</Label>
                <Input
                  type="time"
                  value={reminderTime}
                  onChange={(e) => setReminderTime(e.target.value)}
                  className="border-slate-200 bg-slate-50 text-slate-900"
                />
              </div>

              <div className="space-y-2">
                <Label className="text-slate-700">{t("repeatDays")}</Label>
                <div className="flex gap-1">
                  {[0, 1, 2, 3, 4, 5, 6].map((day) => (
                    <button
                      key={day}
                      onClick={() => toggleDay(day)}
                      className={cn(
                        "flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-all",
                        repeatDays.includes(day)
                          ? "bg-[#005C4B] text-white"
                          : "bg-slate-100 text-slate-500 hover:bg-slate-200",
                      )}
                    >
                      {getDayName(day)}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-3 mt-4 pt-4 border-t border-slate-100">
              <Button variant="outline" onClick={handleClose} className="flex-1 bg-transparent border-slate-200 text-slate-700 hover:bg-slate-50">
                {t("cancel")}
              </Button>
              <Button onClick={handleSave} className="flex-1 bg-[#005C4B] hover:bg-[#004a3c] text-white">
                {initialData ? t("saveChanges") : t("createHabit")}
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
