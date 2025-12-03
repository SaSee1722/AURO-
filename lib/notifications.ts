import { LocalNotifications } from '@capacitor/local-notifications'
import type { Habit } from './types'

export class NotificationService {
    private static instance: NotificationService
    private initialized = false

    private constructor() { }

    static getInstance(): NotificationService {
        if (!NotificationService.instance) {
            NotificationService.instance = new NotificationService()
        }
        return NotificationService.instance
    }

    async initialize(): Promise<boolean> {
        if (this.initialized) {
            console.log('ℹ️ Notifications already initialized')
            return true
        }

        try {
            console.log('🔔 Initializing notifications...')

            // Check if we're on Capacitor (mobile) or web
            const isCapacitor = !!(window as any).Capacitor
            console.log(`Platform: ${isCapacitor ? 'Capacitor (Mobile)' : 'Web'}`)

            // Create notification channel for Android
            if (isCapacitor && (window as any).Capacitor?.getPlatform() === 'android') {
                console.log('📱 Creating Android notification channel...')
                await LocalNotifications.createChannel({
                    id: 'habit-reminders',
                    name: 'Habit Reminders',
                    description: 'Notifications for your daily habits',
                    importance: 5, // Max importance for sound and heads-up
                    sound: 'default',
                    vibration: true,
                    visibility: 1, // Public
                })
                console.log('✅ Notification channel created')
            }

            // Check current permissions first
            console.log('🔍 Checking current permissions...')
            const currentPermission = await LocalNotifications.checkPermissions()
            console.log('Current permission status:', currentPermission)

            if (currentPermission.display === 'granted') {
                this.initialized = true
                console.log('✅ Notification permissions already granted')
                return true
            }

            // Request permissions
            console.log('📝 Requesting notification permissions...')
            const permission = await LocalNotifications.requestPermissions()
            console.log('Permission result:', permission)

            if (permission.display === 'granted') {
                this.initialized = true
                console.log('✅ Notification permissions granted')
                return true
            } else {
                console.warn('⚠️ Notification permissions denied:', permission.display)
                return false
            }
        } catch (error) {
            console.error('❌ Error initializing notifications:', error)
            return false
        }
    }

    setupNotificationListeners(onNotificationReceived: (habitId: string, habitData: any) => void): void {
        // Listen for notification actions (when user taps notification)
        LocalNotifications.addListener('localNotificationActionPerformed', (notification) => {
            console.log('📱 Notification tapped:', notification)
            const { habitId, habitName, habitEmoji, habitColor } = notification.notification.extra || {}

            if (habitId) {
                onNotificationReceived(habitId, {
                    name: habitName,
                    emoji: habitEmoji,
                    color: habitColor,
                })
            }
        })

        console.log('✅ Notification listeners registered')
    }

    async scheduleHabitNotifications(habits: Habit[]): Promise<void> {
        if (!this.initialized) {
            const success = await this.initialize()
            if (!success) return
        }

        try {
            // Cancel all existing notifications first
            await LocalNotifications.cancel({ notifications: await this.getAllScheduledIds() })

            // Schedule new notifications for habits with reminder times
            const notifications = habits
                .filter(habit => !habit.archived && habit.reminderTime)
                .map(habit => this.createNotificationForHabit(habit))
                .flat()

            if (notifications.length > 0) {
                await LocalNotifications.schedule({ notifications })
                console.log(`📅 Scheduled ${notifications.length} notifications`)
            }
        } catch (error) {
            console.error('❌ Error scheduling notifications:', error)
        }
    }

    private createNotificationForHabit(habit: Habit) {
        if (!habit.reminderTime) return []

        const [hours, minutes] = habit.reminderTime.split(':').map(Number)
        const notifications = []

        // Check if it's a daily habit (all 7 days selected)
        const isDaily = habit.repeatDays.length === 7

        if (isDaily) {
            // For daily habits, we can use the native 'every: day' which is generally reliable
            const now = new Date()
            const scheduledDate = new Date()
            scheduledDate.setHours(hours, minutes, 0, 0)

            if (now >= scheduledDate) {
                scheduledDate.setDate(scheduledDate.getDate() + 1)
            }

            const notificationId = this.generateNotificationId(habit.id, 999) // Special ID for daily

            console.log(`📅 Scheduling DAILY notification for ${habit.name} at ${habit.reminderTime}`)

            notifications.push({
                id: notificationId,
                title: `${habit.emoji} ${habit.name}`,
                body: `Time to build your habit! Tap to get started.`,
                schedule: {
                    at: scheduledDate,
                    allowWhileIdle: true,
                    every: 'day' as any,
                    count: 100 // Optional: limit count if needed, but 'every' handles it
                },
                sound: 'default',
                attachments: undefined,
                actionTypeId: 'HABIT_REMINDER',
                extra: {
                    habitId: habit.id,
                    habitName: habit.name,
                    habitEmoji: habit.emoji,
                    habitColor: habit.color,
                },
                channelId: 'habit-reminders',
            })

            return notifications
        }

        const WEEKS_TO_SCHEDULE = 4 // Schedule 4 weeks ahead to ensure reliability

        // Schedule for each repeat day
        for (const dayOfWeek of habit.repeatDays) {
            // Calculate next occurrence
            const now = new Date()
            const scheduledDate = new Date()
            scheduledDate.setHours(hours, minutes, 0, 0)

            // Adjust to the next occurrence of this day of week
            const currentDay = now.getDay()
            let daysUntilNext = dayOfWeek - currentDay

            // If it's today but the time has passed, schedule for next week
            // If it's today and time hasn't passed, schedule for today (daysUntilNext = 0)
            if (daysUntilNext < 0) {
                daysUntilNext += 7
            } else if (daysUntilNext === 0 && now >= scheduledDate) {
                // Time has passed today, schedule for next week
                daysUntilNext = 7
            }

            // Base date for the first occurrence
            const firstOccurrenceDate = new Date(now)
            firstOccurrenceDate.setDate(now.getDate() + daysUntilNext)
            firstOccurrenceDate.setHours(hours, minutes, 0, 0)

            // Schedule for the next WEEKS_TO_SCHEDULE occurrences
            for (let week = 0; week < WEEKS_TO_SCHEDULE; week++) {
                const notificationDate = new Date(firstOccurrenceDate)
                notificationDate.setDate(firstOccurrenceDate.getDate() + (week * 7))

                const notificationId = this.generateNotificationId(habit.id, dayOfWeek, week)

                console.log(`📅 Scheduling notification for ${habit.name}:`, {
                    day: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][dayOfWeek],
                    weekOffset: week,
                    time: habit.reminderTime,
                    scheduledFor: notificationDate.toLocaleString(),
                    notificationId
                })

                notifications.push({
                    id: notificationId,
                    title: `${habit.emoji} ${habit.name}`,
                    body: `Time to build your habit! Tap to get started.`,
                    schedule: {
                        at: notificationDate,
                        allowWhileIdle: true,
                        // Removed 'every: week' to avoid reliability issues
                    },
                    sound: 'default',
                    attachments: undefined,
                    actionTypeId: 'HABIT_REMINDER',
                    extra: {
                        habitId: habit.id,
                        habitName: habit.name,
                        habitEmoji: habit.emoji,
                        habitColor: habit.color,
                    },
                    channelId: 'habit-reminders',
                })
            }
        }

        return notifications
    }

    private generateNotificationId(habitId: string, dayOfWeek: number, weekOffset: number = 0): number {
        // Create a unique ID by combining habit ID, day of week, and week offset
        const uniqueString = `${habitId}_${dayOfWeek}_${weekOffset}`

        const hashCode = (str: string) => {
            let hash = 0
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i)
                hash = ((hash << 5) - hash) + char
                hash = hash & hash // Convert to 32bit integer
            }
            return Math.abs(hash)
        }

        return hashCode(uniqueString)
    }

    private async getAllScheduledIds(): Promise<{ id: number }[]> {
        try {
            const pending = await LocalNotifications.getPending()
            return pending.notifications.map(n => ({ id: n.id }))
        } catch (error) {
            console.error('Error getting scheduled notifications:', error)
            return []
        }
    }

    async cancelHabitNotifications(habitId: string): Promise<void> {
        try {
            // Cancel all notifications for this habit (all 7 days * 4 weeks)
            const idsToCancel = []
            for (let day = 0; day < 7; day++) {
                for (let week = 0; week < 4; week++) {
                    idsToCancel.push({ id: this.generateNotificationId(habitId, day, week) })
                }
            }

            await LocalNotifications.cancel({ notifications: idsToCancel })
            console.log(`🗑️ Cancelled notifications for habit ${habitId}`)
        } catch (error) {
            console.error('Error cancelling notifications:', error)
        }
    }

    async checkPermissions(): Promise<boolean> {
        try {
            const permission = await LocalNotifications.checkPermissions()
            return permission.display === 'granted'
        } catch (error) {
            console.error('Error checking permissions:', error)
            return false
        }
    }

    async listPendingNotifications(): Promise<void> {
        try {
            const pending = await LocalNotifications.getPending()
            console.log(`📋 Pending notifications (${pending.notifications.length}):`)
            pending.notifications.forEach(n => {
                console.log(`  - ID: ${n.id}, Title: ${n.title}, Scheduled: ${n.schedule?.at}`)
            })
        } catch (error) {
            console.error('Error listing pending notifications:', error)
        }
    }
}

export const notificationService = NotificationService.getInstance()
