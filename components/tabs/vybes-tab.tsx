"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { useTranslation } from "@/lib/use-translation"
import { JourneyDetail } from "@/components/journey-detail"
import { Moon, Bed, Lightbulb, Calendar } from "lucide-react"

export function VybesTab() {
  const { t } = useTranslation()
  const [selectedJourney, setSelectedJourney] = useState<any>(null)

  const sleepJourneyData = {
    description: t("journeySleepDesc"),
    keyResults: [
      { title: t("journeySleepResult1"), icon: Moon, color: "bg-indigo-100 text-indigo-600" },
      { title: t("journeySleepResult2"), icon: Bed, color: "bg-blue-100 text-blue-600" },
      { title: t("journeySleepResult3"), icon: Lightbulb, color: "bg-amber-100 text-amber-600" },
      { title: t("journeySleepResult4"), icon: Calendar, color: "bg-green-100 text-green-600" },
    ],
    moreToExpect: [
      t("journeySleepExpect1"),
      t("journeySleepExpect2"),
      t("journeySleepExpect3"),
    ],
    timeline: [
      { day: t("journeySleepTimeline1"), title: t("journeySleepTimeline1Desc"), active: true },
      { day: t("journeySleepTimeline2"), title: t("journeySleepTimeline2Desc"), active: false },
      { day: t("journeySleepTimeline3"), title: t("journeySleepTimeline3Desc"), active: false },
    ]
  }

  // Reuse sleep data for others as placeholders since we only have keys for one full journey
  // In a real app, each would have its own keys
  const genericJourneyData = sleepJourneyData

  const recommended = [
    {
      id: 1,
      title: t("vybesWalkTitle"),
      days: t("vybesWalkDays"),
      image: "https://images.unsplash.com/photo-1515775538093-d2d95c5ee4f5?q=80&w=1000&auto=format&fit=crop",
      ...genericJourneyData
    },
    {
      id: 2,
      title: t("vybesEnergyTitle"),
      days: t("vybesEnergyDays"),
      image: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=1000&auto=format&fit=crop",
      ...genericJourneyData
    },
    {
      id: 3,
      title: t("vybesWaterTitle"),
      days: t("vybesWaterDays"),
      image: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?q=80&w=1000&auto=format&fit=crop",
      ...genericJourneyData
    },
  ]

  const journeys = [
    {
      id: 1,
      title: t("vybesSleepTitle"),
      image: "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?q=80&w=1000&auto=format&fit=crop",
      ...sleepJourneyData
    },
    {
      id: 2,
      title: t("vybesSugarTitle"),
      image: "https://images.unsplash.com/photo-1582053433976-25c00369fc93?q=80&w=1000&auto=format&fit=crop",
      ...genericJourneyData
    },
    {
      id: 3,
      title: t("vybesMeditationTitle"),
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
      ...genericJourneyData
    },
    {
      id: 4,
      title: t("vybesPetTitle"),
      image: "https://images.unsplash.com/photo-1517849845537-4d257902454a?q=80&w=1000&auto=format&fit=crop",
      ...genericJourneyData
    },
  ]

  if (selectedJourney) {
    return <JourneyDetail journey={selectedJourney} onBack={() => setSelectedJourney(null)} />
  }

  return (
    <div className="flex flex-col pb-24 px-5 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h1 className="text-3xl font-bold text-foreground mb-6 uppercase">{t("journey")}</h1>

      {/* Recommended Section */}
      <div className="mb-8">
        <h2 className="text-sm font-bold text-muted-foreground uppercase mb-4 tracking-wider">{t("recommendedForYou")}</h2>
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 scrollbar-hide">
          {recommended.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedJourney(item)}
              className="relative shrink-0 w-[280px] h-[180px] rounded-2xl overflow-hidden group cursor-pointer"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40" />

              {/* Content */}
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <h3 className="text-2xl font-black text-white uppercase leading-tight max-w-[80%] drop-shadow-md">
                  {item.title}
                </h3>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-bold text-white">{item.days.split(' ')[0]}</span>
                  <span className="text-sm font-medium text-white/90 translate-y-1">{item.days.split(' ')[1]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Journeys Section */}
      <div>
        <h2 className="text-sm font-bold text-muted-foreground uppercase mb-4 tracking-wider">{t("allJourneys")}</h2>
        <div className="space-y-4">
          {journeys.map((journey) => (
            <Card
              key={journey.id}
              onClick={() => setSelectedJourney(journey)}
              className="relative h-[100px] border-0 overflow-hidden cursor-pointer group bg-[#2A2A2A] dark:bg-[#1E1E1E]"
            >
              <div className="absolute inset-0 flex">
                {/* Text Side (Left) */}
                <div className="w-[65%] p-5 flex items-center z-10">
                  <h3 className="text-white font-bold text-lg leading-tight">
                    {journey.title}
                  </h3>
                </div>

                {/* Image Side (Right) with diagonal cut */}
                <div className="absolute right-0 top-0 bottom-0 w-[50%] h-full">
                  {/* Diagonal mask using clip-path */}
                  <div
                    className="absolute inset-0 bg-cover bg-center h-full w-full"
                    style={{
                      backgroundImage: `url(${journey.image})`,
                      clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)'
                    }}
                  />
                  {/* Gradient overlay for smooth transition */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-[#2A2A2A] via-transparent to-transparent dark:from-[#1E1E1E]"
                    style={{
                      clipPath: 'polygon(25% 0, 100% 0, 100% 100%, 0% 100%)'
                    }}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
