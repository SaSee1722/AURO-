# 🔧 Google OAuth & Icon Fix Guide

## ✅ What Was Fixed

### 1. **Google Sign-in Redirect Issue** ✓

- **Problem**: After Google authentication, the app tried to redirect to `localhost/auth/callback` which doesn't exist
- **Solution**:
  - Created `/app/auth/callback/page.tsx` to handle OAuth redirects
  - Updated login screen to detect mobile vs web and use appropriate redirect URLs
  - Added deep link support for mobile app (`com.auro.habittracker://auth/callback`)
  - Updated AndroidManifest.xml with intent filter for OAuth callbacks

### 2. **App Icon Issue** ✓

- **Problem**: App showing default Capacitor icon instead of AURO+ icon
- **Solution**:
  - Your custom icons are already in place at `android/app/src/main/res/mipmap-*/ic_launcher.png`
  - The app just needs to be rebuilt for the icons to show

---

## 🚀 Next Steps

### **Step 1: Update Supabase Redirect URLs**

You need to add the mobile app redirect URL to your Supabase project:

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Go to **Authentication** → **URL Configuration**
4. In **Redirect URLs**, add these URLs:

   ```
   com.auro.habittracker://auth/callback
   https://your-domain.com/auth/callback
   http://localhost:3000/auth/callback
   ```

5. Click **Save**

### **Step 2: Rebuild Your Android App**

Since we've made changes to:

- AndroidManifest.xml (added OAuth deep link)
- Capacitor config (added server settings)
- Built new web assets with auth callback page

You need to rebuild the app:

#### **Option A: Build with Appflow** (Recommended)

1. Commit and push your changes to GitHub:

   ```bash
   git add .
   git commit -m "Fix: Google OAuth callback and app icon configuration"
   git push
   ```

2. Go to Appflow dashboard
3. Create a new Android build
4. Download and install the APK

#### **Option B: Build Locally**

```bash
cd android
./gradlew assembleDebug
```

The APK will be at: `android/app/build/outputs/apk/debug/app-debug.apk`

---

## 🔍 How It Works Now

### **Web Version**

1. User clicks "Continue with Google"
2. Redirects to Google OAuth
3. Google redirects back to: `https://your-domain.com/auth/callback`
4. Callback page extracts tokens and sets session
5. Redirects to home page

### **Mobile Version**

1. User clicks "Continue with Google"
2. Redirects to Google OAuth
3. Google redirects back to: `com.auro.habittracker://auth/callback`
4. Android deep link opens the app
5. Callback page extracts tokens and sets session
6. Redirects to home page

---

## 📱 Testing

### **Test Google Sign-in**

1. Install the new APK
2. Open the app
3. Click "Continue with Google"
4. Select your Google account
5. You should be redirected back to the app successfully
6. You should see the home screen with your habits

### **Verify Icon**

1. After installing the new APK
2. Check your home screen
3. You should see the AURO+ icon with the gradient "A" and "+" symbol
4. Not the default Capacitor icon

---

## 🐛 Troubleshooting

### **If Google Sign-in Still Fails**

1. **Check Supabase Redirect URLs**
   - Make sure `com.auro.habittracker://auth/callback` is added
   - Check for typos in the URL

2. **Check Browser Console** (for web testing)

   ```bash
   npm run dev
   ```

   - Open browser DevTools
   - Check Console for errors
   - Check Network tab for failed requests

3. **Check Android Logs** (for mobile testing)

   ```bash
   npx cap open android
   ```

   - Run the app in Android Studio
   - Check Logcat for errors

### **If Icon Still Shows Capacitor Default**

1. **Verify icon files exist**:

   ```bash
   ls -lh android/app/src/main/res/mipmap-*/ic_launcher.png
   ```

2. **Clean and rebuild**:

   ```bash
   cd android
   ./gradlew clean
   ./gradlew assembleDebug
   ```

3. **Clear app data**:
   - On your Android device
   - Go to Settings → Apps → AURO+
   - Clear Storage & Cache
   - Uninstall and reinstall

---

## 📝 Files Changed

1. **`/app/auth/callback/page.tsx`** - New OAuth callback handler
2. **`/components/login-screen.tsx`** - Updated to detect mobile/web and use correct redirect
3. **`/capacitor.config.ts`** - Added server configuration for deep links
4. **`/android/app/src/main/AndroidManifest.xml`** - Added OAuth deep link intent filter

---

## ✨ Summary

✅ OAuth callback route created  
✅ Mobile deep link support added  
✅ Android manifest updated with intent filter  
✅ Capacitor config updated  
✅ App icons already in place  
✅ Build successful  
✅ Capacitor sync complete  

**Next Action**: Push to GitHub and rebuild in Appflow (or build locally) to see the changes!
