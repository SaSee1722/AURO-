"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ArticleDetail } from "@/components/article-detail"
import { Droplets, Move, Brain, Target, Heart, Zap, Moon, Coffee, Smartphone, Smile, Sun, Wind, BookOpen, Clock, Phone, List } from "lucide-react"

import { addHabit } from "@/lib/store"

export function VybesTab() {
  const [selectedArticle, setSelectedArticle] = useState<any>(null)

  // Mock Data for Articles
  const insights = [
    {
      id: "insight-1",
      title: "Morning Energy Reset",
      subtitle: "Hydration, stretch, set intention",
      image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=1000&auto=format&fit=crop",
      color: "bg-orange-50 dark:bg-orange-950/30",
      accent: "text-orange-600 dark:text-orange-400",
      intro: "You deserve a morning that fuels your clarity, confidence, and calm, setting a positive tone for the entire day.",
      science: "Studies show that starting the day with hydration and light movement can boost cortisol levels naturally, waking up your brain faster than caffeine alone. This 'cortisol awakening response' is crucial for alertness.",
      sections: [
        {
          title: "Hydration First",
          content: "After 8 hours of sleep, your body is naturally dehydrated. Drinking water immediately jumpstarts your metabolism and flushes out toxins accumulated overnight.",
          quote: "Water is the fuel your brain needs to fire up its engines.",
          example: "Sarah, a busy mom, keeps a glass of water on her nightstand. Before her feet hit the floor, she drinks it all. She reports feeling 50% more alert instantly."
        },
        {
          title: "Movement & Flow",
          content: "You don't need a 1-hour gym session. Just 5 minutes of stretching increases blood flow to muscles and brain, reducing grogginess.",
          quote: "Motion creates emotion. Move your body to change your state."
        },
        {
          title: "Intentionality",
          content: "Most people wake up in reaction mode—checking emails or news. Instead, set one clear intention. What is the one thing that would make today great?",
          example: "Mark asks himself every morning: 'What is my one big win today?' This simple question aligns his focus before the chaos begins."
        }
      ],
      suggestions: [
        "Drink a full glass of water (500ml) immediately upon waking.",
        "Do 5 minutes of light stretching or sun salutations.",
        "Avoid your phone for the first 20 minutes.",
        "Set one clear intention for what you want to achieve today.",
        "Open the curtains to let natural light reset your circadian rhythm."
      ],
      routine: [
        { step: "Hydrate (500ml)", icon: Droplets },
        { step: "Light Stretch", icon: Move },
        { step: "Set Intention", icon: Target },
        { step: "No Phone", icon: Smartphone },
        { step: "Natural Light", icon: Sun }
      ],
      takeaway: "Small steps in the first hour create powerful momentum for the next sixteen."
    },
    {
      id: "insight-2",
      title: "Beat Procrastination",
      subtitle: "Focus, micro-goals, momentum",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop",
      color: "bg-blue-50 dark:bg-blue-950/30",
      accent: "text-blue-600 dark:text-blue-400",
      intro: "Procrastination isn't about laziness; it's about emotional regulation. Let's hack your focus and reclaim your time.",
      science: "The 'Zeigarnik Effect' states that starting a task creates a mental tension that is only relieved upon completion, making it easier to keep going once you begin. Dopamine is released when we tick off small wins.",
      sections: [
        {
          title: "The 2-Minute Rule",
          content: "If a task takes less than 2 minutes, do it immediately. This prevents small tasks from piling up and becoming a mental burden.",
          quote: "Action precedes motivation. You don't wait to feel like it; you do it to feel like it."
        },
        {
          title: "Micro-Steps",
          content: "Big projects are scary. 'Write a book' is impossible. 'Write one sentence' is easy. Break everything down until the first step is laughably simple.",
          example: "James needed to clean his garage. He procrastinated for months. Finally, he committed to just 'moving one box'. Once he started, he finished half the garage in an hour."
        },
        {
          title: "Friction Removal",
          content: "Design your environment for success. Put your phone in another room. Close irrelevant tabs. Make the bad habits hard and the good habits easy."
        }
      ],
      suggestions: [
        "Use the 2-minute rule: if it takes less than 2 mins, do it now.",
        "Break big tasks into tiny, non-threatening micro-steps.",
        "Remove phone distractions for just 20 minutes (Pomodoro).",
        "Forgive yourself for past procrastination to reduce guilt.",
        "Focus on the feeling of completion, not the pain of starting."
      ],
      routine: [
        { step: "Pick One Task", icon: Target },
        { step: "Break It Down", icon: List },
        { step: "Set Timer (25m)", icon: Zap },
        { step: "Hide Phone", icon: Smartphone },
        { step: "Start Now", icon: Move }
      ],
      takeaway: "Action precedes motivation. Start small, and the feeling of flow will follow."
    },
    {
      id: "insight-3",
      title: "Calm Under Pressure",
      subtitle: "Breathwork, gratitude, grounding",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop",
      color: "bg-emerald-50 dark:bg-emerald-950/30",
      accent: "text-emerald-600 dark:text-emerald-400",
      intro: "Stress is inevitable, but your reaction to it is a choice. Master the art of staying cool when the heat is on.",
      science: "Controlled breathing activates the parasympathetic nervous system (rest and digest), instantly lowering heart rate and cortisol levels, counteracting the fight-or-flight response.",
      sections: [
        {
          title: "Box Breathing",
          content: "Used by Navy SEALs, this technique regulates the autonomic nervous system. Inhale 4s, hold 4s, exhale 4s, hold 4s. It forces your body into a calm state.",
          quote: "The breath is the remote control for your brain and nervous system."
        },
        {
          title: "Reframing Stress",
          content: "View stress as excitement or energy rather than a threat. This cognitive shift changes how your body physically responds to the pressure.",
          example: "Before a big presentation, Elena tells herself 'I'm excited to share this' instead of 'I'm nervous'. Her shaky hands turn into expressive gestures."
        },
        {
          title: "Grounding",
          content: "Get out of your head and into your body. Feel your feet on the floor. Notice 5 things you can see. This anchors you in the present moment."
        }
      ],
      suggestions: [
        "Practice Box Breathing (4-4-4-4) for 2 minutes.",
        "Name 3 things you are grateful for right now.",
        "Physically ground yourself by feeling your feet on the floor.",
        "Disconnect from the source of stress for 5 minutes.",
        "Drink a glass of water to cool down your system."
      ],
      routine: [
        { step: "Box Breathing", icon: Wind },
        { step: "Gratitude", icon: Heart },
        { step: "Grounding", icon: Move },
        { step: "Hydrate", icon: Droplets },
        { step: "Reframing", icon: Brain }
      ],
      takeaway: "Peace is a skill you can practice, not just a feeling you wait for."
    }
  ]

  const exploreMore = [
    {
      id: "exp-1",
      title: "Sleep Better",
      image: "https://images.unsplash.com/photo-1511295742362-92c96b1cf484?q=80&w=1000&auto=format&fit=crop",
      intro: "Quality sleep is the foundation of health.",
      science: "Sleep cleanses the brain of toxins via the glymphatic system.",
      sections: [
        { title: "Darkness", content: "Melatonin needs darkness to release.", quote: "Dim the lights to brighten your tomorrow." }
      ],
      suggestions: ["No screens 1h before bed.", "Keep room cool (18°C)."],
      routine: [{ step: "Dim Lights", icon: Moon }, { step: "Read Book", icon: BookOpen }],
      takeaway: "Sleep is the best meditation."
    },
    {
      id: "exp-2",
      title: "Digital Detox",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1000&auto=format&fit=crop",
      intro: "Reclaim your attention from the screen.",
      science: "Constant notifications spike cortisol and fragment attention.",
      sections: [
        { title: "The Dopamine Loop", content: "Apps are designed to keep you hooked. Break the cycle.", quote: "Be the master of your device, not its servant." }
      ],
      suggestions: ["Turn off non-essential alerts.", "Phone-free meals."],
      routine: [{ step: "Phone Down", icon: Smartphone }, { step: "Nature Walk", icon: Move }],
      takeaway: "Disconnect to reconnect."
    },
    {
      id: "exp-3",
      title: "Mindful Eating",
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1000&auto=format&fit=crop",
      intro: "Savor every bite for better health.",
      science: "Digestion starts in the brain (cephalic phase).",
      sections: [
        { title: "Slow Down", content: "It takes 20 minutes for your brain to register fullness.", quote: "Eat to nourish, not just to fill." }
      ],
      suggestions: ["Chew slowly (20x).", "Put fork down between bites."],
      routine: [{ step: "No TV", icon: Coffee }, { step: "Savor", icon: Smile }],
      takeaway: "Food is fuel and pleasure."
    },
    {
      id: "exp-4",
      title: "Daily Gratitude",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000&auto=format&fit=crop",
      intro: "Shift your perspective to abundance.",
      science: "Gratitude rewires the brain for positivity and reduces depression.",
      sections: [
        { title: "The Lens", content: "You find what you look for. Look for the good.", quote: "Gratitude turns what we have into enough." }
      ],
      suggestions: ["Write down 3 good things.", "Thank someone today."],
      routine: [{ step: "Journal", icon: BookOpen }, { step: "Reflect", icon: Heart }],
      takeaway: "Happiness is a perspective."
    },
    {
      id: "exp-5",
      title: "Power Nap",
      image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000&auto=format&fit=crop",
      intro: "Recharge in 20 minutes.",
      science: "Naps boost alertness and learning consolidation.",
      sections: [
        { title: "Timing", content: "Keep it short to avoid sleep inertia.", quote: "Rest is not idleness." }
      ],
      suggestions: ["Keep it under 30 mins.", "Nap before 3 PM."],
      routine: [{ step: "Set Alarm", icon: Clock }, { step: "Eye Mask", icon: Moon }],
      takeaway: "Rest is productive."
    },
    {
      id: "exp-6",
      title: "Social Connection",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1000&auto=format&fit=crop",
      intro: "We are wired for connection.",
      science: "Loneliness is as harmful as smoking 15 cigarettes a day.",
      sections: [
        { title: "Deep Talk", content: "Skip the small talk. Go deep.", quote: "Connection gives purpose and meaning to our lives." }
      ],
      suggestions: ["Call a friend.", "Listen actively."],
      routine: [{ step: "Call Mom", icon: Phone }, { step: "Meet Up", icon: Smile }],
      takeaway: "Connect deeply."
    }
  ]

  // Helper for icons in exploreMore since we can't fully mock them all above easily
  // Icons are already imported at the top level


  const handleAddRoutine = (article: any) => {
    if (!article.routine) return

    const getEmojiForStep = (stepName: string) => {
      const lower = stepName.toLowerCase()
      if (lower.includes("hydrate") || lower.includes("water")) return "💧"
      if (lower.includes("stretch") || lower.includes("yoga")) return "🧘"
      if (lower.includes("intention") || lower.includes("goal") || lower.includes("task")) return "🎯"
      if (lower.includes("phone") || lower.includes("screen") || lower.includes("tv")) return "📵"
      if (lower.includes("light") || lower.includes("sun")) return "☀️"
      if (lower.includes("timer") || lower.includes("alarm") || lower.includes("clock")) return "⏱️"
      if (lower.includes("break") || lower.includes("split")) return "🔨"
      if (lower.includes("start") || lower.includes("begin")) return "🚀"
      if (lower.includes("breath") || lower.includes("wind")) return "🌬️"
      if (lower.includes("gratitude") || lower.includes("thank")) return "🙏"
      if (lower.includes("ground") || lower.includes("feet")) return "🦶"
      if (lower.includes("reframe") || lower.includes("mind") || lower.includes("brain")) return "🧠"
      if (lower.includes("read") || lower.includes("book")) return "📖"
      if (lower.includes("walk") || lower.includes("nature")) return "🌳"
      if (lower.includes("savor") || lower.includes("eat") || lower.includes("food")) return "😋"
      if (lower.includes("journal") || lower.includes("write")) return "✍️"
      if (lower.includes("reflect") || lower.includes("think")) return "🤔"
      if (lower.includes("mask") || lower.includes("sleep") || lower.includes("nap")) return "😴"
      if (lower.includes("call") || lower.includes("phone")) return "📞"
      if (lower.includes("meet") || lower.includes("social")) return "☕"
      return "✨"
    }

    article.routine.forEach((step: any) => {
      const newHabit = {
        id: crypto.randomUUID(),
        name: step.step,
        emoji: getEmojiForStep(step.step),
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
      <div className="flex flex-col mb-8">
        <h1 className="text-3xl font-bold text-foreground tracking-tight">Vybe Insights</h1>
        <p className="text-muted-foreground font-medium">Your Daily Boost</p>
      </div>

      {/* Featured Insights (Horizontal Scroll) */}
      <div className="mb-10">
        <div className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 scrollbar-hide snap-x snap-mandatory">
          {insights.map((insight) => (
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
                  Insight
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

      {/* Explore More Section */}
      <div>
        <h2 className="text-sm font-bold text-muted-foreground uppercase mb-4 tracking-wider">Explore More</h2>
        <div className="grid grid-cols-2 gap-4">
          {exploreMore.map((item) => (
            <Card
              key={item.id}
              onClick={() => setSelectedArticle({ ...item, color: "bg-background", accent: "text-primary", science: item.science || "Science data loading...", suggestions: item.suggestions || [], routine: item.routine || [], takeaway: item.takeaway || "" })}
              className="relative aspect-square border-0 shadow-sm hover:shadow-md transition-all duration-300 rounded-3xl overflow-hidden cursor-pointer group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              <div className="absolute inset-0 p-4 flex flex-col justify-end">
                <h3 className="text-white font-bold text-sm leading-tight drop-shadow-md">
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
