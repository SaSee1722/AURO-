# 🚀 Supabase Push Notifications Migration Guide

This guide outlines how to migrate from **Local Notifications** to **Supabase-triggered Push Notifications** (FCM/APNs).

> **⚠️ Recommendation:** For a Habit Tracker, **Local Notifications** (current implementation) are generally superior because they work **offline** and have **exact timing**. Push notifications require an internet connection and may have slight delays. Only switch if you specifically need server-side control or multi-device sync for notifications.

---

## 📋 Prerequisites

1. **Firebase Project** (for FCM)
2. **Apple Developer Account** (for APNs, if targeting iOS)
3. **Supabase Project**

---

## 🛠️ Step 1: Firebase Setup (FCM)

1. Go to [Firebase Console](https://console.firebase.google.com/).
2. Create a new project.
3. Add an **Android App**:
    * Package name: `com.example.app` (check your `capacitor.config.ts`)
    * Download `google-services.json` and place it in `android/app/`.
4. Add an **iOS App** (Optional):
    * Bundle ID: `com.example.app`
    * Download `GoogleService-Info.plist` and place it in `ios/App/App/`.
5. Go to **Project Settings > Cloud Messaging**.
6. Copy the **Server Key** (Legacy) or generate a **Private Key** (V1).

---

## ☁️ Step 2: Supabase Setup

1. Go to **Supabase Dashboard > Project Settings > Integrations**.
2. Enable **Webhooks** or **Edge Functions** (depending on approach).
3. Ideally, create a `notifications` table to queue messages, or use `pg_cron` to trigger checks.

### Database Schema (Example)

```sql
create table user_devices (
  user_id uuid references auth.users,
  fcm_token text not null,
  platform text check (platform in ('android', 'ios', 'web')),
  updated_at timestamptz default now(),
  primary key (user_id, fcm_token)
);
```

---

## 📱 Step 3: App Configuration

1. Install the Push Notifications plugin:

    ```bash
    npm install @capacitor/push-notifications
    npx cap sync
    ```

2. Update `capacitor.config.ts`:

    ```typescript
    plugins: {
      PushNotifications: {
        presentationOptions: ["badge", "sound", "alert"],
      },
    },
    ```

3. Register for Push Notifications in `app/page.tsx` (or a service):

    ```typescript
    import { PushNotifications } from '@capacitor/push-notifications';

    // ... inside useEffect
    await PushNotifications.requestPermissions();
    await PushNotifications.register();

    PushNotifications.addListener('registration', token => {
      // Save token to Supabase 'user_devices' table
      saveTokenToSupabase(token.value);
    });

    PushNotifications.addListener('pushNotificationReceived', notification => {
      // Handle foreground notification
    });
    ```

---

## ⚡ Step 4: Backend Logic (The Hard Part)

Since habits are time-based, you need a way to trigger the push at the right time.

### Option A: Supabase Edge Functions + Cron (Recommended)

1. Create an Edge Function `check-habits`.
2. Use `pg_cron` in Supabase to call this function every minute (or 5 mins).

    ```sql
    select cron.schedule('* * * * *', $$
      select
        net.http_post(
            url:='https://project-ref.supabase.co/functions/v1/check-habits',
            headers:='{"Content-Type": "application/json", "Authorization": "Bearer SERVICE_ROLE_KEY"}'
        ) as request_id;
    $$);
    ```

3. **Edge Function Logic**:
    * Query `habits` table for habits due in the current minute.
    * Join with `user_devices` to get FCM tokens.
    * Send batch request to FCM.

### Option B: Scheduled Edge Functions

* Instead of `pg_cron`, you can use a service like **QStash** or **Inngest** to schedule HTTP calls to your Edge Function at the specific habit time.

---

## ⚖️ Trade-offs

| Feature | Local Notifications (Current) | Supabase Push Notifications |
| :--- | :--- | :--- |
| **Offline Support** | ✅ Works perfectly | ❌ Fails without internet |
| **Timing Precision** | ✅ Exact (AlarmManager) | ⚠️ ~1-5 min delay possible |
| **Cost** | ✅ Free | ⚠️ Edge Function costs |
| **Complexity** | ✅ Low | ⚠️ High (Certs, Tokens, Cron) |
| **Multi-device** | ❌ Device specific | ✅ Syncs across devices |

---

## 🏁 Conclusion

If your goal is simply **reliable reminders**, sticking with **Local Notifications** and fixing the configuration (Battery Optimization, ID collisions) is usually the better path.

If you proceed with Supabase, follow the steps above to set up the infrastructure.
