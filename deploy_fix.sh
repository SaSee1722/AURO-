#!/bin/bash

# 1. Install Supabase CLI (if not found)
if ! command -v supabase &> /dev/null; then
    echo "📦 Installing Supabase CLI via Homebrew..."
    brew install supabase/tap/supabase
else
    echo "✅ Supabase CLI already installed"
fi

# 2. Login (Interactive)
echo "🔑 Logging in to Supabase..."
echo "👉 If a browser opens, please click 'Confirm' to log in."
supabase login

# 3. Link Project
echo "🔗 Linking to your Supabase project..."
# Enter your database password if prompted (it's the one you created when starting the project)
supabase link --project-ref xzdldkwviiayysltizmz

# 4. Deploy Function
echo "🚀 Deploying push-scheduler function..."
supabase functions deploy push-scheduler --no-verify-jwt

echo "✨ Deployment Complete! You can now test the function in the Dashboard."
