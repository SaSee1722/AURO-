import type { Quote, MicroArticle } from "./types"

export const motivationalQuotes: Quote[] = [
  { text: "We are what we repeatedly do. Excellence, then, is not an act, but a habit.", author: "Aristotle" },
  { text: "The secret of getting ahead is getting started.", author: "Mark Twain" },
  { text: "Small daily improvements over time lead to stunning results.", author: "Robin Sharma" },
  { text: "You do not rise to the level of your goals. You fall to the level of your systems.", author: "James Clear" },
  { text: "Motivation is what gets you started. Habit is what keeps you going.", author: "Jim Rohn" },
  {
    text: "The chains of habit are too light to be felt until they are too heavy to be broken.",
    author: "Warren Buffett",
  },
  { text: "Success is the sum of small efforts, repeated day in and day out.", author: "Robert Collier" },
  { text: "First we make our habits, then our habits make us.", author: "John Dryden" },
  { text: "Your future is created by what you do today, not tomorrow.", author: "Robert Kiyosaki" },
  { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
]

export const microArticles: MicroArticle[] = [
  {
    id: "1",
    title: "The 1% Rule",
    content:
      "Getting 1% better every day means you'll be 37 times better by the end of the year. Small improvements compound into remarkable results. Focus on tiny gains, not giant leaps.",
    category: "Atomic Habits",
    readTime: "1 min",
    emoji: "📈",
  },
  {
    id: "2",
    title: "Habit Stacking",
    content:
      "Link a new habit to an existing one: 'After I [CURRENT HABIT], I will [NEW HABIT].' Your brain already has neural pathways for existing habits—use them as launching pads.",
    category: "Behavior Design",
    readTime: "1 min",
    emoji: "🔗",
  },
  {
    id: "3",
    title: "Environment Design",
    content:
      "Make good habits obvious and bad habits invisible. Put your running shoes by the door. Hide the snacks. Your environment shapes your behavior more than willpower ever will.",
    category: "Environment",
    readTime: "1 min",
    emoji: "🏠",
  },
  {
    id: "4",
    title: "The Two-Minute Rule",
    content:
      "Scale any habit down to two minutes: 'Read before bed' becomes 'Read one page.' Master the art of showing up before optimizing. Consistency beats intensity.",
    category: "Starting Small",
    readTime: "1 min",
    emoji: "⏱️",
  },
  {
    id: "5",
    title: "Temptation Bundling",
    content:
      "Pair something you need to do with something you want to do. Only listen to your favorite podcast while exercising. Make habits irresistible.",
    category: "Motivation",
    readTime: "1 min",
    emoji: "🎁",
  },
  {
    id: "6",
    title: "Keystone Habits",
    content:
      "Some habits trigger a cascade of other positive changes. Exercise often leads to better eating, more energy, and improved focus. Find your keystone habit.",
    category: "Systems",
    readTime: "1 min",
    emoji: "🔑",
  },
  {
    id: "7",
    title: "Never Miss Twice",
    content:
      "Missing once is an accident. Missing twice is the start of a new habit. If you break your streak, get back on track immediately. The best never let one bad day become two.",
    category: "Resilience",
    readTime: "1 min",
    emoji: "🎯",
  },
  {
    id: "8",
    title: "Identity-Based Habits",
    content:
      "Don't focus on what you want to achieve—focus on who you wish to become. Each habit is a vote for your new identity. Become the person who never misses a workout.",
    category: "Mindset",
    readTime: "1 min",
    emoji: "🪞",
  },
]

export const defaultHabits = [
  { name: "Meditate", emoji: "🧘", color: "#0A5F4E" },
  { name: "Workout", emoji: "💪", color: "#E85D4C" },
  { name: "Read 10 pages", emoji: "📚", color: "#5B8DEF" },
  { name: "Drink 8 glasses of water", emoji: "💧", color: "#4ECDC4" },
  { name: "Journal", emoji: "✍️", color: "#9B59B6" },
  { name: "No social media until noon", emoji: "📵", color: "#F39C12" },
]

export function getTodayQuote(): Quote {
  const today = new Date()
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000)
  return motivationalQuotes[dayOfYear % motivationalQuotes.length]
}

export function formatDate(date: Date): string {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  return `${year}-${month}-${day}`
}

export function getDayName(dayIndex: number): string {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  return days[dayIndex]
}

export function getFullDayName(dayIndex: number): string {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  return days[dayIndex]
}
