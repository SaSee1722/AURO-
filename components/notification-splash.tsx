"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Bell, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Habit } from "@/lib/types"

interface NotificationSplashProps {
    habit: Habit
    quote: string
    onDismiss: () => void
    onDoItNow: () => void
}

export function NotificationSplash({ habit, quote, onDismiss, onDoItNow }: NotificationSplashProps) {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        // Vibrate on notification (if supported)
        if (navigator.vibrate) {
            navigator.vibrate([200, 100, 200])
        }

        // Auto-dismiss after 30 seconds if no action
        const timer = setTimeout(() => {
            handleDismiss()
        }, 30000)

        return () => clearTimeout(timer)
    }, [])

    const handleDismiss = () => {
        setIsVisible(false)
        setTimeout(onDismiss, 300)
    }

    const handleDoItNow = () => {
        setIsVisible(false)
        setTimeout(onDoItNow, 300)
    }

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.8, y: 50 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.8, y: 50 }}
                        transition={{ type: "spring", damping: 20 }}
                        className="relative w-[90%] max-w-md mx-auto"
                    >
                        {/* Close Button */}
                        <button
                            onClick={handleDismiss}
                            className="absolute -top-4 -right-4 z-10 h-10 w-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/20 transition-colors"
                        >
                            <X className="h-5 w-5 text-white" />
                        </button>

                        {/* Main Card */}
                        <div
                            className="rounded-3xl p-8 shadow-2xl"
                            style={{
                                background: `linear-gradient(135deg, ${habit.color}20 0%, ${habit.color}40 100%)`,
                                border: `2px solid ${habit.color}60`,
                            }}
                        >
                            {/* Bell Icon with Animation */}
                            <motion.div
                                animate={{
                                    rotate: [0, -15, 15, -15, 15, 0],
                                }}
                                transition={{
                                    duration: 0.5,
                                    repeat: Infinity,
                                    repeatDelay: 2,
                                }}
                                className="flex justify-center mb-6"
                            >
                                <div
                                    className="h-20 w-20 rounded-full flex items-center justify-center"
                                    style={{ backgroundColor: `${habit.color}40` }}
                                >
                                    <Bell className="h-10 w-10" style={{ color: habit.color }} />
                                </div>
                            </motion.div>

                            {/* Habit Info */}
                            <div className="text-center mb-6">
                                <div className="text-6xl mb-4">{habit.emoji}</div>
                                <h2 className="text-3xl font-bold text-white mb-2">{habit.name}</h2>
                                <p className="text-white/80 text-lg">It's time for your habit!</p>
                            </div>

                            {/* Motivational Quote */}
                            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 mb-6">
                                <p className="text-white text-center italic leading-relaxed">
                                    "{quote}"
                                </p>
                            </div>

                            {/* Action Buttons */}
                            <div className="space-y-3">
                                <Button
                                    onClick={handleDoItNow}
                                    className="w-full h-14 text-lg font-semibold rounded-xl"
                                    style={{
                                        backgroundColor: habit.color,
                                        color: 'white',
                                    }}
                                >
                                    Do It Now! 💪
                                </Button>
                                <Button
                                    onClick={handleDismiss}
                                    variant="ghost"
                                    className="w-full h-12 text-white/80 hover:text-white hover:bg-white/10"
                                >
                                    Remind Me Later
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
