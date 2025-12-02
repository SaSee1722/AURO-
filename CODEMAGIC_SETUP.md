# 🚀 Codemagic CI/CD Setup Guide

## Overview

This guide will help you set up automated builds for your AURO+ Habit Tracker using Codemagic.io.

---

## 📋 Prerequisites

1. **Codemagic Account**
   - Sign up at [codemagic.io](https://codemagic.io)
   - Connect your GitHub account

2. **Android Signing**
   - Keystore file (.jks or .keystore)
   - Keystore password
   - Key alias
   - Key password

3. **iOS Signing** (if building for iOS)
   - Apple Developer account
   - App Store Connect API key
   - Distribution certificate
   - Provisioning profile

4. **Environment Variables**
   - Supabase URL
   - Supabase Anon Key

---

## 🔧 Step 1: Connect Repository

1. **Log in to Codemagic**
   - Go to [codemagic.io](https://codemagic.io)
   - Sign in with GitHub

2. **Add Application**
   - Click "Add application"
   - Select your repository: `SaSee1722/AURO-`
   - Choose "Other" as project type

3. **Select Configuration**
   - Choose "Use codemagic.yaml"
   - Codemagic will detect the `codemagic.yaml` file

---

## 🔑 Step 2: Set Up Environment Variables

### In Codemagic Dashboard

1. **Go to App Settings**
   - Select your app
   - Click "Environment variables"

2. **Add Supabase Variables**

   ```text
   SUPABASE_URL = your_supabase_project_url
   SUPABASE_ANON_KEY = your_supabase_anon_key
   ```

3. **Mark as Secure**
   - Check "Secure" for sensitive values
   - These will be encrypted

---

## 🔐 Step 3: Android Signing Setup

### Generate Keystore (if you don't have one)

```bash
keytool -genkey -v -keystore auro-release.keystore \
  -alias auro-key \
  -keyalg RSA \
  -keysize 2048 \
  -validity 10000
```

### Upload to Codemagic

1. **Go to Code Signing**
   - App Settings > Code signing identities
   - Click "Android"

2. **Upload Keystore**
   - Click "Upload keystore"
   - Upload your `.keystore` or `.jks` file
   - Enter keystore password
   - Enter key alias
   - Enter key password
   - Save as "auro_keystore"

3. **Update build.gradle**

   Make sure `android/app/build.gradle` has:

   ```gradle
   android {
       ...
       signingConfigs {
           release {
               if (System.getenv("CM_KEYSTORE_PATH")) {
                   storeFile file(System.getenv("CM_KEYSTORE_PATH"))
                   storePassword System.getenv("CM_KEYSTORE_PASSWORD")
                   keyAlias System.getenv("CM_KEY_ALIAS")
                   keyPassword System.getenv("CM_KEY_PASSWORD")
               }
           }
       }
       buildTypes {
           release {
               signingConfig signingConfigs.release
               minifyEnabled false
               proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'
           }
       }
   }
   ```

---

## 📱 Step 4: Google Play Publishing (Optional)

### Set Up Google Play

1. **Create Service Account**
   - Go to Google Cloud Console
   - Create service account
   - Download JSON key

2. **Grant Permissions**
   - Google Play Console > Users and permissions
   - Invite service account email
   - Grant "Release manager" role

3. **Upload to Codemagic**
   - App Settings > Publishing
   - Google Play
   - Upload service account JSON
   - Save credentials

4. **Update codemagic.yaml**

   ```yaml
   publishing:
     google_play:
       credentials: $GCLOUD_SERVICE_ACCOUNT_CREDENTIALS
       track: internal  # or alpha, beta, production
       submit_as_draft: true
   ```

---

## 🍎 Step 5: iOS Setup (Optional)

### App Store Connect API Key

1. **Generate API Key**
   - App Store Connect > Users and Access > Keys
   - Generate new key
   - Download `.p8` file

2. **Upload to Codemagic**
   - App Settings > Publishing
   - App Store Connect
   - Upload API key

3. **Set Up Signing**
   - App Settings > Code signing
   - iOS
   - Upload certificate and provisioning profile
   - Or use automatic code signing

---

## 🚀 Step 6: Trigger Build

### Manual Build

1. **Go to Builds**
   - Select your app
   - Click "Start new build"

2. **Choose Workflow**
   - Select "android-workflow" or "ios-workflow"
   - Choose branch (main)
   - Click "Start build"

### Automatic Builds

Builds will trigger automatically on:

- Push to `main` branch
- Pull request creation
- Tag creation

---

## 📊 Step 7: Monitor Build

### Build Process

1. **Install Dependencies**
   - npm install

2. **Set Environment Variables**
   - Creates .env.local with Supabase credentials

3. **Build Next.js**
   - npm run build

4. **Update Version**
   - Increments version code automatically

5. **Sync Capacitor**
   - npx cap sync android/ios

6. **Build App**
   - Gradle build for Android
   - Xcode build for iOS

### Build Artifacts

- **Android**: `.apk` and `.aab` files
- **iOS**: `.ipa` file

Download from Codemagic dashboard after build completes.

---

## 🔔 Step 8: Set Up Notifications

### Email Notifications

Update `codemagic.yaml`:

```yaml
publishing:
  email:
    recipients:
      - your-email@example.com
    notify:
      success: true
      failure: true
```

### Slack Notifications

1. **Create Slack Webhook**
   - Slack > Apps > Incoming Webhooks
   - Copy webhook URL

2. **Add to Codemagic**

   ```yaml
   publishing:
     slack:
       channel: '#builds'
       notify_on_build_start: true
       notify:
         success: true
         failure: true
   ```

---

## 📝 Build Configuration

### Current Setup

**Android Workflow:**

- Node.js 18.17.0
- Mac Mini M1 instance
- Auto-increment version code
- Build release APK and AAB
- Optional Google Play upload

**iOS Workflow:**

- Node.js 18.17.0
- Xcode 15.0
- Mac Mini M1 instance
- Build release IPA
- Optional TestFlight upload

### Customization

Edit `codemagic.yaml` to:

- Change Node.js version
- Add custom build scripts
- Modify publishing settings
- Add testing steps
- Configure different tracks

---

## 🐛 Troubleshooting

### Build Fails at npm install

**Solution:**

- Check `package.json` is committed
- Verify Node.js version compatibility

### Build Fails at Capacitor Sync

**Solution:**

- Ensure `capacitor.config.ts` is correct
- Check Capacitor plugins are installed

### Signing Errors

**Solution:**

- Verify keystore is uploaded correctly
- Check passwords are correct
- Ensure build.gradle has signing config

### Environment Variables Not Working

**Solution:**

- Check variable names match exactly
- Ensure variables are not marked as secure if needed in logs
- Verify .env.local is created correctly

---

## 📈 Best Practices

1. **Version Management**
   - Let Codemagic auto-increment version codes
   - Use semantic versioning for version names

2. **Testing**
   - Add test scripts before build
   - Use internal track for testing

3. **Security**
   - Never commit credentials
   - Use Codemagic environment variables
   - Mark sensitive values as secure

4. **Notifications**
   - Set up email notifications
   - Use Slack for team updates

5. **Artifacts**
   - Download and test builds
   - Keep builds for rollback

---

## 🎯 Quick Start Checklist

- [ ] Sign up for Codemagic
- [ ] Connect GitHub repository
- [ ] Add environment variables (Supabase)
- [ ] Upload Android keystore
- [ ] Update email in codemagic.yaml
- [ ] Commit and push codemagic.yaml
- [ ] Trigger first build
- [ ] Download and test APK
- [ ] Set up Google Play (optional)
- [ ] Configure automatic builds

---

## 📚 Resources

- **Codemagic Docs**: <https://docs.codemagic.io>
- **Capacitor Docs**: <https://capacitorjs.com/docs>
- **Android Signing**: <https://developer.android.com/studio/publish/app-signing>
- **App Store Connect**: <https://developer.apple.com/app-store-connect/>

---

## 🆘 Support

If you encounter issues:

1. **Check Build Logs**
   - Codemagic dashboard > Build > Logs
   - Look for error messages

2. **Codemagic Support**
   - Email: <support@codemagic.io>
   - Slack: codemagic.slack.com

3. **Community**
   - Codemagic Community Forum
   - Stack Overflow (tag: codemagic)

---

### Your CI/CD pipeline is ready! 🚀

Push to GitHub and watch Codemagic build your app automatically!
