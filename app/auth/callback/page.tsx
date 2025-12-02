"use client"

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AuthCallback() {
    const router = useRouter()
    const [status, setStatus] = useState('Processing...')

    useEffect(() => {
        const handleCallback = async () => {
            try {
                console.log('Auth callback page loaded')

                // Get the hash from the URL (Supabase uses hash-based auth)
                const hashParams = new URLSearchParams(window.location.hash.substring(1))
                const accessToken = hashParams.get('access_token')
                const refreshToken = hashParams.get('refresh_token')

                console.log('Tokens found:', { accessToken: !!accessToken, refreshToken: !!refreshToken })

                if (accessToken && refreshToken) {
                    setStatus('Setting up your session...')

                    // Set the session
                    const { data, error } = await supabase.auth.setSession({
                        access_token: accessToken,
                        refresh_token: refreshToken,
                    })

                    if (error) {
                        console.error('Error setting session:', error)
                        setStatus('Error signing in. Redirecting...')
                    } else {
                        console.log('Session set successfully:', data)
                        setStatus('Success! Redirecting to home...')
                    }

                    // Wait a bit to ensure the session is fully propagated
                    await new Promise(resolve => setTimeout(resolve, 500))
                }

                // Redirect to home page
                console.log('Redirecting to home page')
                router.replace('/')
            } catch (error) {
                console.error('Error handling auth callback:', error)
                setStatus('Error occurred. Redirecting...')
                await new Promise(resolve => setTimeout(resolve, 500))
                router.replace('/')
            }
        }

        handleCallback()
    }, [router])

    return (
        <div className="min-h-screen flex items-center justify-center bg-background">
            <div className="text-center space-y-4">
                <div className="h-8 w-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
                <p className="text-muted-foreground">{status}</p>
            </div>
        </div>
    )
}
