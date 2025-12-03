"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { supabase } from "@/lib/supabase"
import { useAuth } from "@/components/auth-provider"
import { Sparkles, ArrowRight } from "lucide-react"

interface OnboardingFlowProps {
    onComplete: () => void
}

export function OnboardingFlow({ onComplete }: OnboardingFlowProps) {
    const { user } = useAuth()
    const [step, setStep] = useState(1)
    const [name, setName] = useState(user?.user_metadata?.full_name || "")
    const [age, setAge] = useState<string>("")
    const [loading, setLoading] = useState(false)

    const handleSave = async () => {
        if (!user || !age || !name) return

        setLoading(true)
        try {
            const { error } = await supabase
                .from('profiles')
                .upsert({
                    id: user.id,
                    full_name: name,
                    age: parseInt(age),
                    updated_at: new Date().toISOString(),
                })

            if (error) throw error

            onComplete()
        } catch (error) {
            console.error("Error saving profile:", error)
        } finally {
            setLoading(false)
        }
    }

    if (step === 1) {
        return (
            <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 animate-in fade-in duration-500">
                <div className="w-full max-w-md text-center space-y-8">
                    <div className="flex justify-center mb-6">
                        <div className="h-20 w-20 bg-primary/20 rounded-3xl flex items-center justify-center rotate-12">
                            <Sparkles className="h-10 w-10 text-primary" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight">Welcome to AURO+</h1>
                        <p className="text-muted-foreground text-lg">Your journey to a better you starts here.</p>
                    </div>

                    <Button
                        size="lg"
                        className="w-full h-14 text-lg rounded-2xl"
                        onClick={() => setStep(2)}
                    >
                        Get Started
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center p-6 animate-in slide-in-from-right duration-500">
            <Card className="w-full max-w-md p-8 border-0 shadow-2xl glass">
                <div className="text-center mb-8">
                    <h2 className="text-2xl font-bold mb-2">Tell us about yourself</h2>
                    <p className="text-muted-foreground">This helps us personalize your experience.</p>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-base">What should we call you?</Label>
                        <Input
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            className="h-12 text-lg bg-accent/20 border-0"
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="age" className="text-base">How old are you?</Label>
                        <Input
                            id="age"
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            placeholder="Age"
                            className="h-12 text-lg bg-accent/20 border-0"
                        />
                    </div>

                    <Button
                        className="w-full h-12 text-lg mt-4"
                        onClick={handleSave}
                        disabled={!name || !age || loading}
                    >
                        {loading ? "Saving..." : "Continue"}
                    </Button>
                </div>
            </Card>
        </div>
    )
}
