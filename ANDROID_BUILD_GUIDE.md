# Building Android App with Ionic Appflow

This guide explains how to build your Habit Tracker app as an Android APK using **Ionic Appflow** - a cloud-based build service that builds your app directly from your GitHub repository.

## What is Ionic Appflow?

Ionic Appflow is a cloud platform that provides:

- ☁️ Cloud builds (no need for local Android Studio setup)
- 🔄 CI/CD integration with GitHub
- 📱 Direct APK/AAB generation
- 🚀 Easy deployment and distribution

## Prerequisites

Before you start, you need:

1. ✅ Your code on GitHub (already done: `https://github.com/SaSee1722/AURO-.git`)
2. ✅ An Ionic Appflow account (sign up at [ionic.io/appflow](https://ionic.io/appflow))
3. ✅ Capacitor configured in your project (we need to add this)

## Step 1: Prepare Your Project for Android

Since you currently have a Next.js web app, you need to add Capacitor to make it build as an Android app.

### 1.1 Install Capacitor

Run these commands in your project directory:

```bash
# Install Capacitor core and CLI
npm install @capacitor/core @capacitor/cli

# Initialize Capacitor
npx cap init

# Add Android platform
npm install @capacitor/android
npx cap add android

# Build your web app
npm run build

# Copy web assets to Android
npx cap sync android
```

### 1.2 Configure Capacitor

Create/update `capacitor.config.ts`:

```typescript
import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.auro.habittracker',
  appName: 'AURO Habit Tracker',
  webDir: 'out', // Next.js static export directory
  server: {
    androidScheme: 'https'
  }
};

export default config;
```

### 1.3 Update Next.js for Static Export

Update `next.config.mjs`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static export
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
```

### 1.4 Commit and Push Changes

```bash
git add .
git commit -m "Add Capacitor for Android build"
git push origin main
```

## Step 2: Set Up Ionic Appflow

### 2.1 Create an Appflow Account

1. Go to [ionic.io/appflow](https://ionic.io/appflow)
2. Sign up for a free account (or use existing account)
3. Create a new app in the dashboard

### 2.2 Connect Your GitHub Repository

1. In Appflow dashboard, select your app
2. Go to **Settings** → **Git** → **GitHub**
3. Click **Connect to GitHub**
4. Authorize Ionic to access your GitHub account
5. Search for and select your repository: `SaSee1722/AURO-`
6. Appflow will automatically create a webhook to track commits

## Step 3: Build Your Android App

### 3.1 Trigger a Build

1. In Appflow dashboard, go to **Builds** section
2. Click **New Build**
3. Select the latest commit from your `main` branch
4. Choose build options:
   - **Platform**: Android
   - **Build Type**: Debug (for testing) or Release (for production)
   - **Build Stack**: Latest available
5. Click **Build**

### 3.2 Monitor Build Progress

- Watch the build logs in real-time
- Build typically takes 5-15 minutes
- You'll see each step: dependencies, compilation, packaging

### 3.3 Download Your APK

Once the build completes successfully:

1. Click on the completed build
2. Download the `.apk` file (Debug) or `.aab` file (Release)
3. Install on your Android device or emulator

## Step 4: Install on Android Device

### For Debug APK

1. Transfer the APK to your Android device
2. Enable "Install from Unknown Sources" in device settings
3. Tap the APK file to install
4. Open and test your app!

### For Release AAB (Google Play)

1. Upload the `.aab` file to Google Play Console
2. Follow Google Play's publishing process

## Build Types Explained

### Debug Build

- ✅ No signing certificate required
- ✅ Quick to set up
- ✅ Good for testing
- ❌ Cannot publish to Google Play
- ❌ Shows "Debug" in app info

### Release Build

- ✅ Production-ready
- ✅ Can publish to Google Play
- ✅ Optimized and signed
- ❌ Requires signing certificate (keystore)
- ❌ More setup required

## Pricing

Ionic Appflow offers:

- **Free Tier**: Limited builds per month
- **Paid Plans**: Unlimited builds, more features
- Check [ionic.io/pricing](https://ionic.io/pricing) for current plans

## Alternative: Local Build (Free)

If you prefer to build locally without Appflow:

```bash
# Install Android Studio first
# Then run:
npx cap open android

# In Android Studio:
# Build → Build Bundle(s) / APK(s) → Build APK(s)
```

## Troubleshooting

### Build Fails

- Check build logs in Appflow
- Ensure all dependencies are in `package.json`
- Verify `android/` folder is committed to GitHub

### App Won't Install

- Enable "Unknown Sources" on Android device
- Check minimum Android version compatibility

### White Screen on Launch

- Verify `webDir` in `capacitor.config.ts` matches your build output
- Run `npx cap sync` after building

## Next Steps

1. ✅ Add Capacitor to your project (Step 1)
2. ✅ Push changes to GitHub
3. ✅ Sign up for Ionic Appflow
4. ✅ Connect your GitHub repo
5. ✅ Trigger your first build
6. ✅ Download and test your APK!

## Resources

- [Ionic Appflow Docs](https://ionic.io/docs/appflow)
- [Capacitor Documentation](https://capacitorjs.com/docs)
- [Android Build Guide](https://ionic.io/docs/appflow/package/builds)

---

**Your GitHub Repository**: <https://github.com/SaSee1722/AURO-.git>

Good luck with your Android build! 🚀📱
