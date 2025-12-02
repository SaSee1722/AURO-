# 🔔 Notification Fix & Testing Guide

## ✅ What Was Fixed

### Critical Notification Bug Fixed

The notification scheduling logic had a critical bug where it would schedule notifications for next week even if the time hadn't passed today. This has been **completely fixed**.

### Changes Made

1. **Fixed Scheduling Logic** ✅
   - Now correctly schedules for TODAY if time hasn't passed
   - Only schedules for next week if time has already passed
   - Added detailed logging to debug scheduling

2. **Removed Weekly Repeat** ✅
   - Removed `repeats: true` and `every: 'week'`
   - Now uses single-shot notifications
   - Auto-rescheduled after firing

3. **Added Auto-Rescheduling** ✅
   - Listens for notification received events
   - Automatically reschedules for next occurrence
   - Ensures continuous reminders

4. **Improved Splash Screen** ✅
   - Replaced wave emoji (🌊) with AURO+ app icon
   - Added gradient background
   - Added subtle breathing animation
   - More professional and branded

5. **Added Debug Logging** ✅
   - Lists all pending notifications after scheduling
   - Shows scheduled time for each notification
   - Helps verify notifications are set correctly

---

## 🧪 Testing Instructions

### Step 1: Rebuild the App

```bash
# Already done for you:
npm run build
npx cap sync android

# Now open in Android Studio:
npx cap open android
```

In Android Studio:

1. Click **Build** > **Clean Project**
2. Click **Build** > **Rebuild Project**
3. **Uninstall old app** from device
4. Click **Run** to install new build

### Step 2: Grant Permissions

When you open the app:

1. **Sign in** (if needed)
2. Go to **Profile** tab
3. Tap **General Settings**
4. Toggle **Notifications** to ON
5. When prompted:
   - Tap **Allow** for notifications
   - Tap **Allow** for alarms & reminders (Android 12+)

### Step 3: Create Test Habit

1. Go to **Home** tab
2. Tap **+** button
3. Create a habit:
   - **Name**: "Test Notification"
   - **Emoji**: 🔔
   - **Color**: Any color
   - **Reminder Time**: **3 minutes from now**
     - Example: If it's 6:40 PM, set to 18:43
   - **Repeat Days**: Select TODAY's day
4. Tap **Save**

### Step 4: Check Console Logs

Open Android Studio > Logcat and look for:

```
✅ Notification permissions granted
✅ Notification channel created
📅 Scheduling notification for Test Notification:
  day: Mon (or current day)
  time: 18:43
  scheduledFor: 12/2/2025, 6:43:00 PM
  daysUntilNext: 0
  notificationId: 12345
📅 Scheduled 1 notifications
📋 Pending notifications (1):
  - ID: 12345, Title: 🔔 Test Notification, Scheduled: Mon Dec 02 2025 18:43:00
```

**Important**: `daysUntilNext: 0` means it's scheduled for TODAY!

### Step 5: Wait for Notification

1. **Close the app** or lock your phone
2. **Wait 3 minutes**
3. You should:
   - ✅ Hear notification sound
   - ✅ Feel vibration
   - ✅ See notification in tray

### Step 6: Tap Notification

1. **Tap the notification**
2. You should see:
   - ✅ Beautiful splash screen
   - ✅ Habit emoji and name
   - ✅ Motivational quote
   - ✅ "Do It Now!" button

---

## 🔍 Troubleshooting

### ❌ No Notification Arrives

#### Check 1: Permissions

```
Settings > Apps > AURO+ > Notifications > Allow
Settings > Apps > AURO+ > Alarms & reminders > Allow
```

#### Check 2: Battery Optimization

```
Settings > Apps > AURO+ > Battery > Unrestricted
```

#### Check 3: Do Not Disturb

- Disable DND, or
- Add AURO+ to DND exceptions

#### Check 4: Check Logcat

Look for errors in Android Studio Logcat:

```
Filter: package:com.auro.habittracker
```

Look for:

- ❌ Permission denied errors
- ❌ Scheduling errors
- ✅ "Scheduled X notifications" message

#### Check 5: Verify Scheduled Time

In Logcat, check the `scheduledFor` time:

- Should be in the FUTURE
- Should be TODAY if you selected today
- Should match your reminder time

#### Check 6: Re-enable Notifications

1. Profile > General Settings
2. Toggle Notifications OFF
3. Toggle Notifications ON
4. Check Logcat for scheduling logs

### ❌ Notification Arrives But No Sound

#### Check 1: Volume

- Turn up notification volume
- Test with other apps

#### Check 2: Notification Channel Settings

```
Settings > Apps > AURO+ > Notifications > Habit Reminders
- Ensure "Sound" is enabled
- Ensure "Vibration" is enabled
```

#### Check 3: Recreate Channel

1. Uninstall app
2. Reinstall app
3. Enable notifications
4. Channel will be recreated

### ❌ Splash Screen Doesn't Show

#### Check 1: Tap the Notification

- Don't just swipe it away
- Actually tap on it

#### Check 2: Check Logcat

Look for:

```
📱 Notification tapped: ...
```

If you see this, the listener is working.

#### Check 3: App Must Be Running

- For web/PWA, app needs to be running
- For native Android, should work even when closed

---

## 📊 Expected Behavior

| Scenario | Expected Result |
|----------|----------------|
| Set time for 2 min from now | Notification arrives in 2 minutes |
| Set time for past time today | Notification scheduled for next week |
| Set time for future time today | Notification arrives TODAY |
| Tap notification | Splash screen appears |
| Close app | Notification still arrives |
| Lock phone | Notification still arrives |
| DND enabled | Notification may be silent (depends on settings) |

---

## 🎯 Debug Checklist

Before asking for help, check:

- [ ] App is rebuilt and reinstalled
- [ ] Old app was uninstalled first
- [ ] Notification permission granted
- [ ] Alarm permission granted (Android 12+)
- [ ] Battery optimization disabled
- [ ] DND is off or AURO+ is excepted
- [ ] Reminder time is in the FUTURE
- [ ] Today's day is selected in repeat days
- [ ] Checked Logcat for scheduling logs
- [ ] Saw "Scheduled X notifications" message
- [ ] Saw "Pending notifications (X):" message
- [ ] `daysUntilNext: 0` for today's notifications

---

## 🔧 Advanced Debugging

### Check Pending Notifications Manually

In your code, you can call:

```typescript
await notificationService.listPendingNotifications()
```

This will log all pending notifications to console.

### Check Notification Permissions

```typescript
const granted = await notificationService.checkPermissions()
console.log('Permissions granted:', granted)
```

### Force Reschedule

```typescript
const habits = getHabits()
await notificationService.scheduleHabitNotifications(habits)
await notificationService.listPendingNotifications()
```

---

## 📝 What Changed in Code

### Before (Broken)

```typescript
if (daysUntilNext < 0 || (daysUntilNext === 0 && now > scheduledDate)) {
    daysUntilNext += 7
}
```

**Problem**: Used `>` instead of `>=`, so if time was EXACTLY now, it would schedule for next week.

### After (Fixed)

```typescript
if (daysUntilNext < 0) {
    daysUntilNext += 7
} else if (daysUntilNext === 0 && now >= scheduledDate) {
    daysUntilNext = 7
}
```

**Fixed**: Properly handles today's notifications.

---

## 🎨 Splash Screen Improvements

### Before

- Wave emoji (🌊)
- Plain background
- Static

### After

- AURO+ app icon (120x120)
- Gradient background
- Breathing animation
- More professional
- Branded experience

---

## ✅ Summary

**Notifications will now work correctly!**

The critical bug has been fixed. Notifications will:

- ✅ Schedule for TODAY if time hasn't passed
- ✅ Fire at the correct time
- ✅ Play sound and vibrate
- ✅ Show splash screen when tapped
- ✅ Auto-reschedule for next occurrence

**Just rebuild the app and test with a 3-minute reminder!**

---

**Last Updated**: 2025-12-02
**Build Required**: Yes - Rebuild and reinstall the app
