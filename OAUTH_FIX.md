# OAuth Login Redirect Fix

## Problem

After Google OAuth callback, the app was showing the login page again instead of redirecting to the home tab.

## Root Cause

When using Capacitor with deep links (`com.auro.habittracker://auth/callback`), the app wasn't properly handling the OAuth callback tokens from the deep link URL. The auth tokens were in the URL hash fragment, but there was no listener to extract and process them.

## Solution

### 1. Added Deep Link Listener (`app/page.tsx`)

- Imported `@capacitor/app` plugin
- Added `App.addListener('appUrlOpen')` to listen for deep link events
- Extracts `access_token` and `refresh_token` from the deep link URL hash
- Calls `supabase.auth.setSession()` to establish the user session
- Updates the session state immediately after setting

### 2. Improved Web Callback Handler (`app/auth/callback/page.tsx`)

- Added better logging to track the OAuth flow
- Added a 500ms delay after setting the session to ensure it propagates
- Added status messages to show progress to the user
- Better error handling with console logs

### 3. Installed Required Package

- Installed `@capacitor/app` package for deep link handling

## How It Works Now

### Mobile Flow (Capacitor)

1. User clicks "Continue with Google"
2. Google OAuth redirects to `com.auro.habittracker://auth/callback#access_token=...&refresh_token=...`
3. Android opens the app via the deep link
4. The `appUrlOpen` listener in `app/page.tsx` catches the deep link
5. Tokens are extracted from the URL hash
6. Session is set via `supabase.auth.setSession()`
7. Auth state changes, triggering `onAuthStateChange`
8. User is shown the home tab

### Web Flow

1. User clicks "Continue with Google"
2. Google OAuth redirects to `https://yourapp.com/auth/callback#access_token=...&refresh_token=...`
3. The callback page extracts tokens from the URL hash
4. Session is set via `supabase.auth.setSession()`
5. After 500ms delay, redirects to `/`
6. Main page detects the session and shows home tab

## Testing

1. Build the app: `npm run build`
2. Sync with Capacitor: `npx cap sync`
3. Open in Android Studio: `npx cap open android`
4. Run the app and test Google login
5. Check console logs for debugging information

## Console Logs to Watch For

- "Deep link received: ..." - Confirms deep link was caught
- "Setting session from deep link" - Confirms token extraction
- "Session set successfully: ..." - Confirms session was established
- "Auth state changed: SIGNED_IN ..." - Confirms auth state updated
- "Initial session check: ..." - Shows session on page load
