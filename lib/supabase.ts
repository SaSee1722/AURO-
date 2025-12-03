import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
    console.warn('⚠️ Supabase credentials missing. Check environment variables.')
}

export const supabase = createClient(
    supabaseUrl || 'https://xzdldkwviiayysltizmz.supabase.co',
    supabaseKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh6ZGxka3d2aWlheXlzbHRpem16Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQ0OTQ0MDgsImV4cCI6MjA4MDA3MDQwOH0.0f2202Q52H0DbFmPL9wr2tjPYEmafAHHBd_E9mSbCmo'
)
