"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function SplashScreen({ onFinish }: { onFinish: () => void }) {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            setTimeout(onFinish, 500) // Wait for exit animation
        }, 2000) // Show splash for 2 seconds

        return () => clearTimeout(timer)
    }, [onFinish])

    if (!isVisible) return null

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
            <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="flex flex-col items-center"
            >
                <div className="text-6xl mb-4">🌊</div>
                <h1 className="text-4xl font-bold tracking-tighter text-foreground">
                    AURO<span className="text-primary">+</span>
                </h1>
                <p className="text-muted-foreground mt-2 tracking-widest text-xs uppercase">
                    Build Unbreakable Habits
                </p>
            </motion.div>
        </motion.div>
    )
}
