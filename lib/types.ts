export interface Habit {
  id: string
  name: string
  emoji: string
  color: string
  reminderTime: string
  repeatDays: number[] // 0 = Sunday, 1 = Monday, etc.
  createdAt: string
  archived: boolean
}

export interface HabitCompletion {
  habitId: string
  date: string // YYYY-MM-DD format
  completedAt: string
}

export interface Quote {
  text: string
  author: string
}

export interface MicroArticle {
  id: string
  title: string
  content: string
  category: string
  readTime: string
  emoji: string
}
