# Codemagic Setup Guide for AURO+

This guide explains how to set up your project on Codemagic to build the Android app.

## 1. Prerequisites

- **Codemagic Account**: Sign up at [codemagic.io](https://codemagic.io/).
- **GitHub Repository**: Ensure your code is pushed to GitHub.
- **Supabase Project**: You need your Supabase URL and Anon Key.

## 2. Add Application to Codemagic

1. Log in to Codemagic.
2. Click **Add application**.
3. Select **GitHub**.
4. Find and select your repository (`habit-tracker-design` or equivalent).
5. Select **App type**: `Ionic / Capacitor`.

## 3. Configure Environment Variables

You need to add the following environment variables in Codemagic:

1. Go to the **Environment variables** tab for your app.
2. Add the following variables (add to a group named `default` or similar):

    | Variable Name | Value | Group |
    | :--- | :--- | :--- |
    | `SUPABASE_URL` | Your Supabase Project URL | default |
    | `SUPABASE_ANON_KEY` | Your Supabase Anon Key | default |

    *Note: You can find these in your local `.env.local` file.*

## 4. Keystore (Optional for Debug Build)

The current configuration builds a **Debug APK** which does not require a keystore.
If you want to build a **Release APK** for the Play Store, you will need to:

1. Generate a keystore file.
2. Upload it to Codemagic in the **Code signing identities** section.
3. Update `codemagic.yaml` to use the keystore.

## 5. Build the App

1. Go to the **Overview** page.
2. Click **Start new build**.
3. Select the **Android Build** workflow.
4. Click **Start new build**.

## 6. Download Artifacts

Once the build finishes (usually 10-15 minutes):

1. Go to the build page.
2. Look for the **Artifacts** section on the left.
3. Download the **app-debug.apk**.
4. Install it on your Android device to test.

## Troubleshooting

- **Build fails on "Update Android version"**: This script tries to auto-increment the version. If it fails, check the logs.
- **Build fails on "Gradle"**: Ensure `gradlew` has executable permissions (the script handles this, but good to verify).
