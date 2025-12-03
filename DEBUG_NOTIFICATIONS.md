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

## 3. Check Cron Job Status

The logs are empty, which means the **Cron Job is not running**.

1. Copy the code from `CHECK_CRON_STATUS.sql`.
2. Run it in the **Supabase SQL Editor**.
3. **Analyze the Results**:
   - **Result 1 (pg_extension)**: Should show a row for `pg_cron`. If empty, enable the extension: `create extension pg_cron;`
   - **Result 2 (cron.job)**: Should show a row with `jobname: invoke-push-scheduler`. If empty, the job wasn't scheduled. Run `SCHEDULE_CRON.sql` again.
   - **Result 3 (job_run_details)**: Look for `status`. Is it `succeeded` or `failed`?

## 4. Manually Test the Function

If the Cron Job seems broken, test the function directly to see if it works.

1. Go to **Supabase Dashboard** > **Edge Functions** > `push-scheduler`.
2. Click the **Test** button (top right).
3. Leave the default JSON body and click **Run**.
4. Check the **Logs** tab again. Do you see new logs now?
   - **Yes**: The function works, but the Cron Job is the issue.
   - **No**: The function itself is broken (check for deployment errors).

## 4. Common Issues

- **Emulator**: Push notifications often do NOT work on Android Emulators. Use a real physical device.
- **Timezone**: The server uses UTC time. Ensure your habit times align with when the server checks (the logic handles this, but it's good to be aware).
- **Permissions**: Go to Android Settings > Apps > AURO+ > Notifications and ensure they are ALLOWED.
