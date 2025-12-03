# Debugging Notifications

If notifications are not working, please follow these steps to identify the issue.

## 1. Check if your Device Token is Saved

1. Open your App on your Android device.
2. Go to **Supabase Dashboard** > **Table Editor** > `user_devices`.
3. Do you see a row with your `user_id` and a long `token`?
   - **Yes**: Good! Your device is registered.
   - **No**: The app failed to save the token. Check if you granted notification permissions on your phone.

## 2. Check the Edge Function Logs

1. Go to **Supabase Dashboard** > **Edge Functions**.
2. Click on `push-scheduler`.
3. Click on **Logs**.
4. Look for recent logs. Do you see:
   - `✅ Found X due habits to notify`
   - `📲 Sending notification to user...`
   - `❌ Error...`

## 3. Check Cron Job

1. The function should run every minute.
2. If you don't see logs appearing every minute, the Cron Job might not be running.
3. Run this SQL to check active cron jobs:

   ```sql
   select * from cron.job;
   ```

## 4. Common Issues

- **Emulator**: Push notifications often do NOT work on Android Emulators. Use a real physical device.
- **Timezone**: The server uses UTC time. Ensure your habit times align with when the server checks (the logic handles this, but it's good to be aware).
- **Permissions**: Go to Android Settings > Apps > AURO+ > Notifications and ensure they are ALLOWED.
