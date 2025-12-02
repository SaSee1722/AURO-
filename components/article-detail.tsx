"use client"

import { ArrowLeft, BookOpen, Brain, Lightbulb, List, CheckCircle, Bookmark, Share2, Quote, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface ArticleDetailProps {
    article: {
        id: string
        title: string
        subtitle: string
        image: string
        color: string
        intro: string
        science: string
        sections?: { title: string; content: string; quote?: string; example?: string }[]
        suggestions: string[]
        routine: { step: string; icon: any }[]
        takeaway: string
    }
    onBack: () => void
    onAddRoutine?: () => void
}

export function ArticleDetail({ article, onBack, onAddRoutine }: ArticleDetailProps) {
    return (
        <div className="fixed inset-0 z-50 flex flex-col bg-background animate-in fade-in slide-in-from-bottom-8 duration-300">

            {/* Scrollable Content Area */}
            <div className="flex-1 overflow-y-auto">
                {/* Header Image */}
                <div className="relative h-[45vh] min-h-[350px] shrink-0">
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${article.image})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-background" />

                    {/* Navigation Bar */}
                    <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={onBack}
                            className="text-white hover:bg-white/20 rounded-full h-10 w-10 backdrop-blur-sm"
                        >
                            <ArrowLeft className="h-6 w-6" />
                        </Button>
                        <div className="flex gap-2">
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-white/20 rounded-full h-10 w-10 backdrop-blur-sm"
                            >
                                <Bookmark className="h-5 w-5" />
                            </Button>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="text-white hover:bg-white/20 rounded-full h-10 w-10 backdrop-blur-sm"
                            >
                                <Share2 className="h-5 w-5" />
                            </Button>
                        </div>
                    </div>

                    {/* Title Section */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 pt-20 bg-gradient-to-t from-background via-background/80 to-transparent">
                        <div className={cn("inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-4 bg-white/10 backdrop-blur-md border border-white/20 text-foreground")}>
                            <BookOpen className="h-3 w-3" />
                            Insight
                        </div>
                        <h1 className="text-3xl md:text-4xl font-black text-foreground leading-tight mb-2 drop-shadow-sm">
                            {article.title}
                        </h1>
                        <p className="text-lg text-muted-foreground font-medium">
                            {article.subtitle}
                        </p>
                    </div>
                </div>

                {/* Content */}
                <div className="px-6 py-8 space-y-12 max-w-2xl mx-auto w-full pb-32">

                    {/* Motivational Intro */}
                    <div className="prose dark:prose-invert">
                        <p className="text-xl font-medium leading-relaxed text-foreground/90 border-l-4 border-primary pl-6 italic">
                            "{article.intro}"
                        </p>
                    </div>

                    {/* Scientific Research */}
                    <div className="bg-secondary/30 rounded-3xl p-6 border border-border/50">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="h-10 w-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                                <Brain className="h-5 w-5" />
                            </div>
                            <h2 className="text-lg font-bold">The Science</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {article.science}
                        </p>
                    </div>

                    {/* Detailed Sections */}
                    {article.sections && article.sections.map((section, index) => (
                        <div key={index} className="space-y-4">
                            <h3 className="text-xl font-bold text-foreground">{section.title}</h3>
                            <p className="text-muted-foreground leading-relaxed text-lg">
                                {section.content}
                            </p>

                            {/* Highlighted Quote */}
                            {section.quote && (
                                <div className="my-6 p-6 bg-primary/5 rounded-2xl border-l-4 border-primary relative overflow-hidden">
                                    <Quote className="absolute top-4 right-4 h-12 w-12 text-primary/10" />
                                    <p className="text-lg font-bold text-primary relative z-10">
                                        "{section.quote}"
                                    </p>
                                </div>
                            )}

                            {/* Motivational Example */}
                            {section.example && (
                                <div className="bg-orange-50 dark:bg-orange-950/20 p-5 rounded-2xl border border-orange-100 dark:border-orange-900/30">
                                    <div className="flex items-center gap-2 mb-2 text-orange-600 dark:text-orange-400 font-bold text-sm uppercase tracking-wide">
                                        <Sparkles className="h-4 w-4" />
                                        Real Life Example
                                    </div>
                                    <p className="text-foreground/80 italic">
                                        {section.example}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}

                    {/* Practical Suggestions */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-10 w-10 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                                <Lightbulb className="h-5 w-5" />
                            </div>
                            <h2 className="text-lg font-bold">Quick Actions</h2>
                        </div>
                        <div className="space-y-4">
                            {article.suggestions.map((suggestion, i) => (
                                <div key={i} className="flex gap-4 items-start p-4 rounded-xl bg-card border border-border/50 shadow-sm">
                                    <div className="h-6 w-6 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                                        {i + 1}
                                    </div>
                                    <p className="text-foreground/90 font-medium leading-relaxed">{suggestion}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Routine Planner */}
                    <div>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="h-10 w-10 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                                <List className="h-5 w-5" />
                            </div>
                            <h2 className="text-lg font-bold">Your Routine Flow</h2>
                        </div>
                        <div className="relative pl-2">
                            {/* Connecting Line */}
                            <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-border" />

                            <div className="space-y-6 relative">
                                {article.routine.map((step, i) => (
                                    <div key={i} className="flex items-center gap-4 group">
                                        <div className="h-12 w-12 rounded-full bg-background border-2 border-primary flex items-center justify-center shrink-0 z-10 shadow-sm group-hover:scale-110 transition-transform duration-300">
                                            <step.icon className="h-5 w-5 text-primary" />
                                        </div>
                                        <div className="bg-card border border-border/50 p-4 rounded-2xl flex-1 shadow-sm group-hover:shadow-md transition-all">
                                            <p className="font-bold text-base">{step.step}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Takeaway Summary */}
                    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8 text-center border border-primary/10">
                        <div className="inline-flex h-14 w-14 rounded-full bg-primary text-primary-foreground items-center justify-center mb-6 shadow-lg shadow-primary/20">
                            <CheckCircle className="h-7 w-7" />
                        </div>
                        <h3 className="text-xl font-bold mb-3">Today's Takeaway</h3>
                        <p className="text-foreground/80 font-medium text-lg leading-relaxed mb-4">
                            {article.takeaway}
                        </p>
                        <p className="text-primary font-bold uppercase tracking-widest text-xs">
                            You've got this
                        </p>
                    </div>

                </div>
            </div>

            {/* Floating Action Button - Fixed at bottom */}
            <div className="p-6 bg-gradient-to-t from-background via-background/95 to-transparent pt-8 z-50 shrink-0">
                <Button
                    onClick={onAddRoutine}
                    className="w-full h-14 text-lg font-bold rounded-full shadow-2xl bg-foreground text-background hover:bg-foreground/90 transition-all hover:scale-[1.02] active:scale-[0.98]"
                >
                    Add to My Routine
                </Button>
            </div>
        </div>
    )
}
