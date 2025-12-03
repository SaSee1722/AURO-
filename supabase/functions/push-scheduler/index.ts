import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.38.4'
import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'

// 🔑 YOU MUST SET THESE ENV VARS IN SUPABASE DASHBOARD
// FCM_SERVER_KEY: Your Firebase Cloud Messaging Server Key
// SUPABASE_URL: Auto-set by Supabase
// SUPABASE_SERVICE_ROLE_KEY: Auto-set by Supabase

const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
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

        // 1. Get current time (HH:MM)
        const now = new Date()
        const hours = String(now.getHours()).padStart(2, '0')
        const minutes = String(now.getMinutes()).padStart(2, '0')
        const currentTime = `${hours}:${minutes}`
        const currentDay = now.getDay() // 0 = Sunday

        console.log(`⏰ Checking habits for time: ${currentTime}, Day: ${currentDay}`)

        // 2. Find habits due now
        // Note: This is a simplified query. In production, you might want to handle timezones properly.
        // For now, we assume server time matches user time or users set time in UTC.
        // A better approach is to store 'reminder_time_utc' in the database.

        const { data: habits, error: habitsError } = await supabase
            .from('habits')
            .select('*, user_devices(token)')
            .eq('reminder_time', currentTime)
            .contains('repeat_days', [currentDay])
            .eq('archived', false)

        if (habitsError) throw habitsError

        console.log(`Found ${habits.length} habits to remind.`)

        const results = []

        // 3. Send notifications
        for (const habit of habits) {
            if (!habit.user_devices || habit.user_devices.length === 0) continue

            const tokens = habit.user_devices.map((d: any) => d.token)

            // Send to FCM
            const fcmResponse = await fetch('https://fcm.googleapis.com/fcm/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `key=${Deno.env.get('FCM_SERVER_KEY')}`
                },
                body: JSON.stringify({
                    registration_ids: tokens,
                    notification: {
                        title: `${habit.emoji} ${habit.name}`,
                        body: "Time to build your habit! Tap to get started.",
                        sound: "default",
                        click_action: "FCM_PLUGIN_ACTIVITY"
                    },
                    data: {
                        habitId: habit.id,
                        landing_page: "do-it-now"
                    },
                    priority: "high"
                })
            })

            const fcmResult = await fcmResponse.json()
            results.push({ habit: habit.name, result: fcmResult })
        }

        return new Response(JSON.stringify(results), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })

    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), {
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        })
    }
})
