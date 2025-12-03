import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { JWT } from 'https://deno.land/x/jose@v4.15.5/index.ts'

// 🔑 YOU MUST SET THIS ENV VAR IN SUPABASE DASHBOARD
// FIREBASE_SERVICE_ACCOUNT: The entire JSON content of your service account key

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

// Helper to get access token from Service Account
async function getAccessToken(serviceAccount: any) {
    const now = Math.floor(Date.now() / 1000)
    const claim = {
        iss: serviceAccount.client_email,
        scope: 'https://www.googleapis.com/auth/firebase.messaging',
        aud: 'https://oauth2.googleapis.com/token',
        exp: now + 3600,
        iat: now,
    }

    const key = await import('https://deno.land/x/jose@v4.15.5/index.ts').then(m => m.importPKCS8(serviceAccount.private_key, 'RS256'))
    const jwt = await new import('https://deno.land/x/jose@v4.15.5/index.ts').then(m => new m.SignJWT(claim).setProtectedHeader({ alg: 'RS256' }).sign(key))

    const params = new URLSearchParams()
    params.append('grant_type', 'urn:ietf:params:oauth:grant-type:jwt-bearer')
    params.append('assertion', jwt)

    const res = await fetch('https://oauth2.googleapis.com/token', {
        method: 'POST',
        body: params,
    })
    const data = await res.json()
    return data.access_token
}

serve(async (req) => {
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const supabase = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        )

        // 1. Get Service Account
        const serviceAccountStr = Deno.env.get('FIREBASE_SERVICE_ACCOUNT')
        if (!serviceAccountStr) {
            throw new Error('Missing FIREBASE_SERVICE_ACCOUNT env var')
        }
        const serviceAccount = JSON.parse(serviceAccountStr)

        // 2. Get Access Token
        const accessToken = await getAccessToken(serviceAccount)

        // 3. Get current time (HH:MM)
        const now = new Date()
        const hours = String(now.getHours()).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')
        const currentTime = `${hours}:${minutes}`
        const currentDay = now.getDay() // 0 = Sunday

        console.log(`⏰ Checking habits for time: ${currentTime}, Day: ${currentDay}`)

        // 4. Find habits due now
        const { data: habits, error: habitsError } = await supabase
            .from('habits')
            .select('*, user_devices(token)')
            .eq('reminder_time', currentTime)
            .contains('repeat_days', [currentDay])
            .eq('archived', false)

        if (habitsError) throw habitsError

        console.log(`Found ${habits.length} habits to remind.`)

        const results = []

        // 5. Send notifications via FCM v1 API
        for (const habit of habits) {
            if (!habit.user_devices || habit.user_devices.length === 0) continue

            const tokens = habit.user_devices.map((d: any) => d.token)

            for (const token of tokens) {
                const response = await fetch(
                    `https://fcm.googleapis.com/v1/projects/${serviceAccount.project_id}/messages:send`,
                    {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${accessToken}`,
                        },
                        body: JSON.stringify({
                            message: {
                                token: token,
                                notification: {
                                    title: `${habit.emoji} ${habit.name}`,
                                    body: "Time to build your habit! Tap to get started.",
                                },
                                data: {
                                    habitId: habit.id,
                                    landing_page: "do-it-now"
                                },
                                android: {
                                    priority: "high",
                                    notification: {
                                        sound: "default",
                                        click_action: "FCM_PLUGIN_ACTIVITY"
                                    }
                                }
                            }
                        }),
                    }
                )

                const result = await response.json()
                results.push({ habit: habit.name, token: token.substring(0, 10) + '...', result })
            }
        }

        return new Response(JSON.stringify(results), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })

    } catch (error) {
        console.error('Error:', error)
        return new Response(JSON.stringify({ error: error.message }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
    }
})
