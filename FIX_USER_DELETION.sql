-- 🚨 RUN THIS IN SUPABASE SQL EDITOR 🚨

-- This script fixes the "Database error deleting user" issue by ensuring that
-- when a user is deleted, all their data (habits, logs, profile) is automatically deleted too.

BEGIN;

-- 1. Fix 'habits' table (links to auth.users)
ALTER TABLE public.habits
DROP CONSTRAINT IF EXISTS habits_user_id_fkey;

ALTER TABLE public.habits
ADD CONSTRAINT habits_user_id_fkey
    FOREIGN KEY (user_id)
    REFERENCES auth.users(id)
    ON DELETE CASCADE;

-- 2. Fix 'habit_logs' table (links to habits)
ALTER TABLE public.habit_logs
DROP CONSTRAINT IF EXISTS habit_logs_habit_id_fkey;

ALTER TABLE public.habit_logs
ADD CONSTRAINT habit_logs_habit_id_fkey
    FOREIGN KEY (habit_id)
    REFERENCES public.habits(id)
    ON DELETE CASCADE;

-- 3. Fix 'profiles' table (if you have one)
-- We wrap this in a block so it doesn't fail if the table doesn't exist
DO $$
BEGIN
    IF EXISTS (SELECT FROM pg_tables WHERE schemaname = 'public' AND tablename = 'profiles') THEN
        ALTER TABLE public.profiles
        DROP CONSTRAINT IF EXISTS profiles_id_fkey;
        
        ALTER TABLE public.profiles
        ADD CONSTRAINT profiles_id_fkey
            FOREIGN KEY (id)
            REFERENCES auth.users(id)
            ON DELETE CASCADE;
    END IF;
END $$;

COMMIT;

-- ✅ Success! You should now be able to delete users from the dashboard.
