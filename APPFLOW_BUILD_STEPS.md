# 📱 Ionic Appflow Build Configuration Guide

## ✅ Your Code is Ready

I've just pushed all the necessary Android build files to your GitHub repository. Appflow will now be able to build your app!

---

## 🎯 How to Fill Out the Appflow Build Form

### Step 1: Select the Latest Commit

In Appflow, you should now see a new commit:

- **Commit**: "Add Android build configuration for Appflow"
- **Author**: SaSee1722
- Click **"Change"** if you need to select this commit

### Step 2: Configure Build Settings

#### ✅ Target Platform

- Select: **Android** (with the green Android icon)

#### ✅ Build Stack

- Select: **Linux - 2025.06 (Latest)** ✓ (already selected)

#### ✅ Build Type

- Select: **Debug** ✓ (already selected)
- This is perfect for testing - no signing certificate needed!

#### 🔧 Caching

- Leave **OFF** for your first build
- You can enable it later for faster builds

---

## 🔑 CRITICAL: Add Environment Variables

Click **"+ Add environment"** and add your Supabase credentials:

### Variable 1

```
Name:  NEXT_PUBLIC_SUPABASE_URL
Value: [Your Supabase Project URL]
```

### Variable 2

```
Name:  NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: [Your Supabase Anonymous Key]
```

### 📍 Where to Find These Values

1. Go to [supabase.com](https://supabase.com)
2. Open your project dashboard
3. Click **Settings** (gear icon) → **API**
4. Copy:
   - **Project URL** → Use for `NEXT_PUBLIC_SUPABASE_URL`
   - **anon/public key** → Use for `NEXT_PUBLIC_SUPABASE_ANON_KEY`

---

## 📋 Optional Settings (You Can Skip These)

### Ad-hoc Environment (optional)

- Skip this for now
- Used for temporary environment variables

### Native Config (optional)

- Skip this for now
- Your app already has proper configuration in `capacitor.config.ts`

### Webhook (optional)

- Leave **OFF**
- Only needed if you want notifications when build completes

---

## 🚀 Final Step: Build

Once you've added the environment variables:

1. Review all settings
2. Click the blue **"Build"** button at the bottom right
3. Wait 5-15 minutes for the build to complete
4. Download your APK file!

---

## 📊 What Happens During Build

Appflow will:

1. ✅ Clone your GitHub repository
2. ✅ Install dependencies (`npm install`)
3. ✅ Build your Next.js app (`npm run build`)
4. ✅ Sync with Capacitor (`npx cap sync`)
5. ✅ Compile Android APK
6. ✅ Make it available for download

---

## 🎉 After Build Completes

You'll be able to:

- 📥 Download the `.apk` file
- 📱 Install it on your Android device
- 🧪 Test your habit tracker app!

---

## ⚠️ Troubleshooting

### Build Fails?

- Check the build logs in Appflow
- Verify environment variables are correct
- Make sure you selected the latest commit

### Can't Find Environment Variables?

- They're in your Supabase dashboard under Settings → API
- You need both the URL and the anon key

### App Won't Install?

- Enable "Install from Unknown Sources" on your Android device
- Go to Settings → Security → Unknown Sources

---

## 📞 Need Help?

If the build fails, check:

1. Build logs in Appflow (they show detailed error messages)
2. Your Supabase credentials are correct
3. The latest commit is selected

Good luck! 🚀
