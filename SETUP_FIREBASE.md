# 🔥 Firebase & Supabase Push Notification Setup

To enable reliable push notifications via Supabase, you must set up Firebase Cloud Messaging (FCM).

## 🚨 Critical Step: Get `google-services.json`

The app **will not build** or **will not receive notifications** without this file.

### 1. Create Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Click **Add project** and name it `AURO+`.
3. Disable Google Analytics (optional).
4. Click **Create project**.

### 2. Add Android App

1. Click the **Android icon** (🤖) to add an app.
2. **Package name**: `com.auro.habittracker` (Must match exactly!)
3. **App nickname**: `AURO+`
4. Click **Register app**.

### 3. Download Config File

1. Download **`google-services.json`**.
2. Place this file in your project at:

   ```
   android/app/google-services.json
   ```

   *(Note: Do not commit this file to public GitHub if you want to keep it private, but it is generally safe for Firebase).*

### 4. Get Server Key (for Supabase)

1. In Firebase Console, go to **Project settings** (⚙️ icon).
2. Go to **Cloud Messaging** tab.
3. Enable **Cloud Messaging API (Legacy)** if needed (click the 3 dots > Manage API in Google Cloud Console > Enable).
4. Copy the **Server key**.

---

## ☁️ Supabase Setup

### 1. Run SQL Script

Run the `SETUP_PUSH_DB.sql` script in your Supabase SQL Editor to create the `user_devices` table.

### 2. Set Environment Variables

In Supabase Dashboard > Settings > Edge Functions, add:

- `FCM_SERVER_KEY`: (The key you copied from Firebase)

### 3. Deploy Edge Function

You need to deploy the function located in `supabase/functions/push-scheduler`.

```bash
supabase functions deploy push-scheduler --no-verify-jwt
```

### 4. Set Up Cron Job

To trigger notifications every minute, you need to set up a Cron job (using `pg_cron` or an external service like Cron-job.org) to call your Edge Function URL:
`https://[YOUR_PROJECT_REF].supabase.co/functions/v1/push-scheduler`

---

## 📦 Codemagic Setup (If using CI/CD)

If you are building with Codemagic, you cannot just upload the file to GitHub if it's ignored.

1. Encode `google-services.json` to base64:

   ```bash
   base64 -i android/app/google-services.json | pbcopy
   ```

2. Add a variable `ANDROID_FIREBASE_CONFIG` in Codemagic with this value.
3. Add a script in `codemagic.yaml` to decode it before building:

   ```yaml
   - name: Decode Google Services JSON
     script: |
       echo $ANDROID_FIREBASE_CONFIG | base64 --decode > android/app/google-services.json
   ```

---

## ✅ Summary

1. Get `google-services.json` -> Put in `android/app/`
2. Get Server Key -> Put in Supabase Env Vars
3. Deploy Edge Function
4. Build App

Once done, your app will register for push notifications on login!
