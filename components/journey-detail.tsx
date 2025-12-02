"use client"

import { ArrowLeft, Moon, Bed, Lightbulb, Calendar, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/use-translation"

interface JourneyDetailProps {
    journey: {
        id: number | string
        title: string
        days: string
        image: string
        description?: string
        keyResults?: { title: string; icon: any; color: string }[]
        moreToExpect?: string[]
        timeline?: { day: string; title: string; active: boolean }[]
    }
    onBack: () => void
}

export function JourneyDetail({ journey, onBack }: JourneyDetailProps) {
    const { t } = useTranslation()

    // Default data if not provided (fallback)
    const defaultKeyResults = [
        { title: "Say bye to insomnia", icon: Moon, color: "bg-indigo-100 text-indigo-600" },
        { title: "Sleep faster and better", icon: Bed, color: "bg-blue-100 text-blue-600" },
        { title: "More energetic and creative", icon: Lightbulb, color: "bg-amber-100 text-amber-600" },
        { title: "Healthy life schedule", icon: Calendar, color: "bg-green-100 text-green-600" },
    ]

    const defaultMoreToExpect = [
        "Better mood",
        "Higher productivity",
        "Improved memory"
    ]

    const defaultTimeline = [
        { day: "DAY 1-7", title: "Establish a routine", active: true },
        { day: "DAY 8-21", title: "Adjust and improve", active: false },
        { day: "DAY 22-30", title: "Maintain and enjoy", active: false },
    ]

    const description = journey.description || "Relaxing sleep rituals are proven to significantly overcome sleep disorders and stress overload. They also allow moments for deep family interactions. Before bed, try to prepare yourself mentally and physically for a night of restful sleep."
    const keyResults = journey.keyResults || defaultKeyResults
    const moreToExpect = journey.moreToExpect || defaultMoreToExpect
    const timeline = journey.timeline || defaultTimeline

    return (
        <div className="fixed inset-0 z-50 flex flex-col bg-background animate-in fade-in slide-in-from-bottom-8 duration-300">
            {/* Header Image */}
            <div className="relative h-[40vh] min-h-[300px]">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${journey.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />

                <Button
                    variant="ghost"
                    size="icon"
                    onClick={onBack}
                    className="absolute top-6 left-4 text-white hover:bg-white/20"
                >
                    <ArrowLeft className="h-6 w-6" />
                </Button>

                <div className="absolute bottom-0 left-0 right-0 p-6 pt-20 bg-gradient-to-t from-background to-transparent">
                    <h1 className="text-3xl font-black text-foreground uppercase leading-tight drop-shadow-sm">
                        {journey.title}
                    </h1>
                </div>
            </div>

            <div className="flex-1 overflow-y-auto pb-24">
                <div className="px-6 space-y-8">
                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed text-base">
                        {description}
                    </p>

                    {/* Key Results */}
                    <div>
                        <h2 className="text-xs font-bold text-muted-foreground uppercase mb-4 tracking-wider">{t("keyResults")}</h2>
                        <div className="grid grid-cols-2 gap-3">
                            {keyResults.map((result, i) => (
                                <Card key={i} className="border-0 bg-secondary/50 p-4 flex flex-col gap-3">
                                    <div className={cn("h-8 w-8 rounded-full flex items-center justify-center", result.color)}>
                                        <result.icon className="h-4 w-4" />
                                    </div>
                                    <span className="text-sm font-bold leading-tight">{result.title}</span>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* More to Expect */}
                    <div>
                        <h2 className="text-xs font-bold text-muted-foreground uppercase mb-4 tracking-wider">{t("moreToExpect")}</h2>
                        <div className="space-y-3">
                            {moreToExpect.map((item, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className="h-5 w-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                                        <Check className="h-3 w-3" />
                                    </div>
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Timeline */}
                    <div>
                        <h2 className="text-xs font-bold text-muted-foreground uppercase mb-6 tracking-wider">{t("yourPersonalizedJourney")}</h2>
                        <div className="relative pl-4 border-l-2 border-border space-y-8">
                            {timeline.map((stage, i) => (
                                <div key={i} className="relative">
                                    {/* Dot */}
                                    <div className={cn(
                                        "absolute -left-[21px] top-1 h-4 w-4 rounded-full border-2 transition-colors",
                                        stage.active ? "bg-primary border-primary" : "bg-background border-muted-foreground"
                                    )} />

                                    <div className="flex flex-col gap-1">
                                        <span className={cn(
                                            "text-xs font-bold uppercase tracking-wider",
                                            stage.active ? "text-primary" : "text-muted-foreground"
                                        )}>
                                            {stage.day}
                                        </span>
                                        <span className={cn(
                                            "font-bold text-lg",
                                            stage.active ? "text-foreground" : "text-muted-foreground"
                                        )}>
                                            {stage.title}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Floating Button */}
            <div className="fixed bottom-6 left-6 right-6">
                <Button className="w-full h-14 text-lg font-bold rounded-full shadow-xl bg-primary text-primary-foreground hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98]">
                    {t("startMyJourney")}
                </Button>
            </div>
        </div>
    )
}
