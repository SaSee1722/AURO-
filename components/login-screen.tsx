"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { Chrome } from "lucide-react"

export function LoginScreen() {
    const [isLoading, setIsLoading] = useState(false)

    const handleGoogleLogin = async () => {
        try {
            setIsLoading(true)

            // Detect if running in Capacitor (mobile app)
            const isCapacitor = typeof window !== 'undefined' &&
                (window as any).Capacitor !== undefined

            // Use custom scheme for mobile, standard URL for web
            const redirectTo = isCapacitor
                ? 'com.auro.habittracker://auth/callback'
                : `${window.location.origin}/auth/callback`

            const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo,
                },
            })
            if (error) throw error
        } catch (error) {
            console.error("Error logging in with Google:", error)
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-background to-accent/20 animate-in fade-in duration-700">
            <div className="w-full max-w-sm space-y-10 text-center">
                <div className="space-y-4">
                    <div className="relative inline-block">
                        <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full animate-pulse" />
                        <div className="relative text-7xl mb-2">🌊</div>
                    </div>
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight text-foreground">AURO+</h1>
                        <p className="text-lg text-muted-foreground font-medium">Build Unbreakable Habits</p>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-xl">
                        <div className="space-y-4">
                            <Button
                                variant="outline"
                                className="w-full h-14 text-base font-semibold relative overflow-hidden group border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all"
                                onClick={handleGoogleLogin}
                                disabled={isLoading}
                            >
                                {isLoading ? (
                                    <div className="h-5 w-5 border-2 border-primary border-t-transparent rounded-full animate-spin" />
                                ) : (
                                    <div className="flex items-center justify-center gap-3">
                                        <Chrome className="h-5 w-5 text-foreground group-hover:text-primary transition-colors" />
                                        <span>Continue with Google</span>
                                    </div>
                                )}
                            </Button>
                        </div>
                    </div>

                    <p className="text-xs text-muted-foreground px-8 leading-relaxed">
                        By continuing, you acknowledge that you have read and understood our{" "}
                        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="underline underline-offset-4 hover:text-primary transition-colors">
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}
