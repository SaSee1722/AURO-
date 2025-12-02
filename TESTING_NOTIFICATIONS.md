# 🧪 Quick Testing Guide - Notifications & Alarms

## ⚡ 2-Minute Quick Test

Follow these steps to test the notification system right now:

### Step 1: Set Up Test Habit (30 seconds)

1. Open the AURO+ app
2. Tap the **+** button (top right)
3. Create a habit:
   - **Name**: "Test Notification"
   - **Emoji**: 🔔 (or any emoji)
   - **Color**: Pick any color
   - **Reminder Time**: **Set to 2 minutes from now**
     - Example: If it's 5:30 PM now, set to 17:32 (5:32 PM)
   - **Repeat Days**: Select today's day
4. Tap **Save**

### Step 2: Enable Notifications (10 seconds)

1. Go to **Profile** tab (bottom right)
2. Toggle **Notifications** to ON
3. When prompted, tap **Allow** to grant permissions

### Step 3: Wait & Test (2 minutes)

1. **Close the app** or put it in background
2. **Wait 2 minutes**
3. You should:
   - ✅ Hear a notification sound
   - ✅ Feel device vibrate
   - ✅ See notification in notification tray

### Step 4: Tap Notification (10 seconds)

1. **Tap the notification**
2. You should see:
   - ✅ Full-screen splash with habit emoji
   - ✅ Habit name: "Test Notification"
   - ✅ Motivational quote
   - ✅ "Do It Now! 💪" button
   - ✅ "Remind Me Later" button

3. **Tap "Do It Now!"**
   - Should open the habit completion screen

---

## 📱 What to Check

### ✅ Notification Arrives

- [ ] Notification appears at exact time
- [ ] Sound plays
- [ ] Device vibrates
- [ ] Shows in notification tray

### ✅ Notification Content

- [ ] Shows habit emoji
- [ ] Shows habit name
- [ ] Shows message: "Time to build your habit! Tap to get started."

### ✅ Splash Screen

- [ ] Opens when notification tapped
- [ ] Shows habit emoji (large)
- [ ] Shows habit name
- [ ] Shows motivational quote
- [ ] Has animated bell icon
- [ ] Has colored background matching habit

### ✅ Actions Work

- [ ] "Do It Now!" opens completion screen
- [ ] "Remind Me Later" dismisses splash
- [ ] X button closes splash
- [ ] Auto-dismisses after 30 seconds

---

## 🔍 Troubleshooting During Test

### No Notification?

**Check 1: Permissions**

```
Settings > Apps > AURO+ > Notifications > Allow
Settings > Apps > AURO+ > Alarms & reminders > Allow
```

**Check 2: Time is Correct**

- Make sure you set the time to FUTURE (2 minutes from now)
- Check device time is correct

**Check 3: Day is Selected**

- Make sure today's day is checked in repeat days

**Check 4: Notifications Enabled**

- Profile tab > Notifications toggle is ON

### No Sound?

**Check 1: Volume**

- Turn up notification volume on device

**Check 2: Do Not Disturb**

- Disable DND or add AURO+ to exceptions

**Check 3: Notification Channel**

```
Settings > Apps > AURO+ > Notifications > Habit Reminders > Sound > Enabled
```

### Splash Not Showing?

**Check 1: Tap the Notification**

- Don't just swipe it away
- Actually tap on it

**Check 2: App is Running**

- For web/PWA, app needs to be running
- For mobile app, it should work even when closed

---

## 🎯 Advanced Testing

### Test Weekly Repeat

1. Create habit with reminder time 1 minute from now
2. Select multiple days (e.g., Mon, Wed, Fri)
3. Wait for notification
4. Check it repeats next week on same days

### Test Multiple Habits

1. Create 3 habits with different times:
   - Habit 1: 2 minutes from now
   - Habit 2: 5 minutes from now
   - Habit 3: 10 minutes from now
2. Verify all 3 notifications arrive at correct times

### Test Background Delivery

1. Create habit with reminder 2 minutes from now
2. **Close the app completely**
3. Lock your phone
4. Wait for notification
5. Should still arrive and make sound

---

## 📊 Expected Behavior

| Scenario | Expected Result |
|----------|----------------|
| App in foreground | Notification + Sound + Vibrate + Splash |
| App in background | Notification + Sound + Vibrate |
| App closed | Notification + Sound + Vibrate |
| Device locked | Notification + Sound + Vibrate (shows on lock screen) |
| Tap notification | Opens app + Shows splash |
| Ignore notification | Stays in notification tray |

---

## 🚀 Next Steps After Testing

If everything works:

1. ✅ Delete test habit
2. ✅ Create your real habits with actual reminder times
3. ✅ Enjoy your habit tracking journey!

If something doesn't work:

1. ❌ Check the troubleshooting section
2. ❌ Review console logs (if in browser)
3. ❌ Check Android Studio logcat (if on Android)
4. ❌ Refer to NOTIFICATIONS_COMPLETE.md for detailed info

---

**Happy Testing! 🎉**
