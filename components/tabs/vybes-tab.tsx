"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArticleDetail } from "@/components/article-detail"
import { Brain } from "lucide-react"
import { articles } from "@/lib/articles"
import { addHabit } from "@/lib/store"

export function VybesTab() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null)
  const [filter, setFilter] = useState<string>("All")

  // Get unique categories
  const categories = ["All", ...Array.from(new Set(articles.map(a => a.category)))]

  // Filter articles
  const filteredArticles = filter === "All"
    ? articles
    : articles.filter(a => a.category === filter)

  const featuredArticles = articles.slice(0, 5)
  const gridArticles = filteredArticles

  const handleAddRoutine = (article: any) => {
    if (!article.routine) return

    article.routine.forEach((step: any) => {
      const newHabit = {
        id: crypto.randomUUID(),
        name: step.step,
        emoji: "✨", // Default emoji since we can't easily map dynamic icons to strings here without a helper
        color: "bg-primary",
        reminderTime: "09:00",
        repeatDays: [0, 1, 2, 3, 4, 5, 6], // Everyday
        createdAt: new Date().toISOString(),
        archived: false,
      }

      addHabit(newHabit)
    })

    // Dispatch event to update other tabs
    window.dispatchEvent(new Event('vybe_data_updated'))

    // Close the article
    setSelectedArticle(null)
  }

  if (selectedArticle) {
    return <ArticleDetail article={selectedArticle} onBack={() => setSelectedArticle(null)} onAddRoutine={() => handleAddRoutine(selectedArticle)} />
  }

  return (
    <div className="flex flex-col pb-24 px-5 pt-8 animate-in fade-in slide-in-from-bottom-4 duration-500 bg-background min-h-screen">
      <div className="flex flex-col mb-6">
        <h1 className="text-3xl font-bold text-foreground tracking-tight">Vybe Insights</h1>
        <p className="text-muted-foreground font-medium">50 Ways to Upgrade Your Life</p>
      </div>

      {/* Categories */}
      <div className="flex gap-2 overflow-x-auto pb-4 -mx-5 px-5 scrollbar-hide mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all",
              filter === cat
                ? "bg-primary text-primary-foreground shadow-md"
                : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured Insights (Horizontal Scroll) - Only show if All is selected or if featured items match filter */}
      {filter === "All" && (
        <div className="mb-10">
          <h2 className="text-sm font-bold text-muted-foreground uppercase mb-4 tracking-wider">Featured</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 scrollbar-hide snap-x snap-mandatory">
            {featuredArticles.map((insight) => (
              <div
                key={insight.id}
                onClick={() => setSelectedArticle(insight)}
                className={cn(
                  "relative shrink-0 w-[85vw] md:w-[320px] h-[200px] rounded-[32px] overflow-hidden cursor-pointer group transition-all duration-300 hover:shadow-xl border border-border/50 snap-center",
                  insight.color
                )}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url(${insight.image})` }}
                  />
                  <div className={cn("absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent")} />
                </div>

                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-2 bg-white/20 backdrop-blur-md border border-white/10 text-white w-fit">
                    <Brain className="h-3 w-3" />
                    {insight.category}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1 leading-tight tracking-tight drop-shadow-md">
                    {insight.title}
                  </h3>
                  <p className="text-sm text-white/90 font-medium line-clamp-1">
                    {insight.subtitle}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* All Articles Grid */}
      <div>
        <h2 className="text-sm font-bold text-muted-foreground uppercase mb-4 tracking-wider">
          {filter === "All" ? "Explore All" : `${filter} Articles`}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {gridArticles.map((item) => (
            <Card
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="relative aspect-square border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl overflow-hidden cursor-pointer group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <span className="text-[10px] font-bold text-white/80 uppercase tracking-wider mb-1">{item.category}</span>
                <h3 className="text-white font-bold text-sm leading-tight drop-shadow-md line-clamp-2">
                  {item.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
