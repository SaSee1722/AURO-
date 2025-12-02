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
            const { error } = await supabase.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: `${window.location.origin}/auth/callback`,
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
        <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background animate-in fade-in duration-500">
            <div className="w-full max-w-sm space-y-8 text-center">
                <div className="space-y-2">
                    <div className="text-6xl mb-6">🌊</div>
                    <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
                    <p className="text-muted-foreground">Sign in to continue your journey</p>
                </div>

                <div className="space-y-4">
                    <Button
                        variant="outline"
                        className="w-full h-12 text-base font-medium relative"
                        onClick={handleGoogleLogin}
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <div className="h-5 w-5 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        ) : (
                            <>
                                <Chrome className="mr-2 h-5 w-5" />
                                Continue with Google
                            </>
                        )}
                    </Button>

                    <p className="text-xs text-muted-foreground px-8">
                        By clicking continue, you agree to our{" "}
                        <a href="#" className="underline underline-offset-4 hover:text-primary">
                            Terms of Service
                        </a>{" "}
                        and{" "}
                        <a href="#" className="underline underline-offset-4 hover:text-primary">
                            Privacy Policy
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    )
}
