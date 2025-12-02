# 🔔 Notification System - Setup Guide

## ✅ What's Been Implemented

Your AURO+ Habit Tracker now has a **fully functional notification system** that sends reminders at the times you set for each habit!

### Features

- ✅ **Local Push Notifications** using Capacitor
- ✅ **Automatic Scheduling** when you add/update habits
- ✅ **Weekly Repeating** notifications based on your habit's repeat days
- ✅ **Smart Cleanup** - notifications are cancelled when you delete habits
- ✅ **Permission Management** through the Profile tab

---

## 📱 How It Works

### 1. **Enable Notifications**

- Go to the **Profile** tab
- Toggle the **Notifications** switch to ON
- Grant permission when prompted by your browser/device

### 2. **Set Reminder Times**

When creating or editing a habit:

- Fill in the **Reminder Time** field (e.g., "09:00" for 9 AM)
- Select which days the habit repeats
- Save the habit

### 3. **Automatic Scheduling**

The app will automatically:

- Schedule notifications for each selected day
- Send reminders at the specified time
- Repeat weekly for ongoing habits

### 4. **Notification Content**

Each notification shows:

- **Title**: ⏰ [Habit Name]
- **Body**: "Time to complete your habit!"
- Tap to open the app

---

## 🔧 For Mobile App (Capacitor)

### Android Setup

1. **Sync Capacitor**:

   ```bash
   npx cap sync android
   ```

2. **Add Permissions** (already configured):
   - The app will request notification permissions on first use
   - Users can manage permissions in device settings

3. **Build & Test**:

   ```bash
   npm run build
   npx cap open android
   ```

### iOS Setup

1. **Sync Capacitor**:

   ```bash
   npx cap sync ios
   ```

2. **Add Capabilities** in Xcode:
   - Open the project in Xcode
   - Enable "Push Notifications" capability
   - Enable "Background Modes" > "Remote notifications"

3. **Build & Test**:

   ```bash
   npm run build
   npx cap open ios
   ```

---

## 🌐 For Web (PWA)

The notification system works in modern browsers that support the **Notifications API**:

### Supported Browsers

- ✅ Chrome/Edge (Desktop & Android)
- ✅ Firefox (Desktop & Android)
- ✅ Safari (macOS & iOS 16.4+)

### Limitations

- Web notifications require the browser to be running (or PWA installed)
- Some browsers may not support background notifications
- For best experience, install as PWA

---

## 🎯 Testing Notifications

### Quick Test

1. Create a habit with a reminder time **2 minutes from now**
2. Enable notifications in Profile
3. Wait for the notification to appear
4. Check your device's notification center

### Debugging

- Open browser console (F12)
- Look for notification-related logs:
  - ✅ "Notification permissions granted"
  - 📅 "Scheduled X notifications"
  - 🗑️ "Cancelled notifications for habit..."

---

## 📋 Code Structure

### Files Created/Modified

1. **`lib/notifications.ts`** (NEW)
   - NotificationService class
   - Handles permission requests
   - Schedules/cancels notifications

2. **`lib/store.ts`** (MODIFIED)
   - Integrated notification scheduling
   - Auto-schedules when habits are saved
   - Cancels when habits are deleted

3. **`components/tabs/profile-tab.tsx`** (MODIFIED)
   - Updated notification toggle
   - Requests permissions
   - Schedules all habits on enable

---

## 🚀 Next Steps

### Optional Enhancements

1. **Custom Notification Sounds**
   - Add different sounds for different habit types

2. **Notification Actions**
   - "Mark as Complete" button in notification
   - "Snooze for 10 minutes" option

3. **Smart Scheduling**
   - Don't send notifications for already-completed habits
   - Adjust timing based on user behavior

4. **Analytics**
   - Track notification engagement
   - Optimize reminder times

---

## ❓ Troubleshooting

### Notifications Not Appearing?

1. **Check Permissions**:
   - Browser: Settings > Site Settings > Notifications
   - Android: Settings > Apps > AURO+ > Notifications
   - iOS: Settings > AURO+ > Notifications

2. **Verify Reminder Time**:
   - Make sure the time is in the future
   - Check that the habit is scheduled for today

3. **Console Errors**:
   - Open browser DevTools
   - Check for permission or scheduling errors

4. **Re-enable Notifications**:
   - Toggle OFF in Profile
   - Toggle ON again
   - This will re-request permissions and re-schedule

---

## 📝 Notes

- Notifications are **local** (no server required)
- Data is stored in **localStorage** and synced to **Supabase**
- Notifications persist even after closing the app (on mobile)
- Web notifications require the browser/PWA to be running

---

**Built with ❤️ using Capacitor Local Notifications**
