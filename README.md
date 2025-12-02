# 🌟 AURO+ Habit Tracker

A beautiful, feature-rich habit tracking mobile app built with Next.js, Capacitor, and Supabase.

![AURO+ Logo](./app-icon-1024.png)

---

## ✨ Features

### 🎯 Core Features

- ✅ **Habit Tracking** - Create and track daily habits
- ✅ **Smart Scheduling** - Set custom repeat days for each habit
- ✅ **Streak Tracking** - Monitor your progress with streak counters
- ✅ **Calendar View** - Visualize your habit completion history
- ✅ **Statistics** - Track completion rates and patterns

### 🔔 Notifications

- ✅ **Push Notifications** - Get reminded at your scheduled times
- ✅ **Sound & Vibration** - Never miss a habit reminder
- ✅ **Beautiful Splash Screen** - Motivational quotes when notifications arrive
- ✅ **Background Delivery** - Works even when app is closed

### 🎨 Design

- ✅ **Modern UI** - Beautiful, intuitive interface
- ✅ **Custom Colors** - Personalize each habit with colors and emojis
- ✅ **Smooth Animations** - Delightful micro-interactions
- ✅ **Dark Mode** - Easy on the eyes

### 🔐 Authentication

- ✅ **Google OAuth** - Secure sign-in with Google
- ✅ **Cloud Sync** - Sync habits across devices via Supabase
- ✅ **Offline Support** - Works without internet connection

### 🌍 Internationalization

- ✅ **10 Languages** - English, Spanish, French, German, Italian, Portuguese, Chinese, Japanese, Korean, Hindi
- ✅ **Easy Switching** - Change language from Profile tab

---

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ installed
- Android Studio (for Android builds)
- Xcode (for iOS builds, macOS only)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/SaSee1722/AURO-.git
   cd habit-tracker-design
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   Create `.env.local`:

   ```env
   NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run development server**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

---

## 📱 Mobile App Build

### Android

1. **Build the web app**

   ```bash
   npm run build
   ```

2. **Sync with Capacitor**

   ```bash
   npx cap sync android
   ```

3. **Open in Android Studio**

   ```bash
   npx cap open android
   ```

4. **Build and run**
   - Click "Run" in Android Studio
   - App will install on connected device/emulator

### iOS

1. **Build the web app**

   ```bash
   npm run build
   ```

2. **Sync with Capacitor**

   ```bash
   npx cap sync ios
   ```

3. **Open in Xcode**

   ```bash
   npx cap open ios
   ```

4. **Add capabilities**
   - Enable "Push Notifications"
   - Enable "Background Modes" > "Remote notifications"

5. **Build and run**
   - Click "Run" in Xcode
   - App will install on connected device/simulator

---

## 🔔 Notification Setup

### Testing Notifications (2-Minute Test)

1. **Create a test habit**
   - Name: "Test Reminder"
   - Reminder time: **2 minutes from now**
   - Select today's day

2. **Enable notifications** in Profile tab

3. **Wait 2 minutes**
   - You'll hear a sound 🔊
   - Device will vibrate 📳
   - Notification appears

4. **Tap the notification**
   - Beautiful splash screen appears
   - Shows habit name and motivational quote
   - Tap "Do It Now!" to complete

**See [TESTING_NOTIFICATIONS.md](./TESTING_NOTIFICATIONS.md) for detailed testing guide**

---

## 🎨 Updating App Icon

If you need to update the app icon:

1. **Replace** `app-icon-1024.png` with your new icon (must be 1024x1024)

2. **Run the generation script**

   ```bash
   node generate-icons.js
   ```

3. **Sync with Capacitor**

   ```bash
   npx cap sync android
   ```

4. **Rebuild the app** in Android Studio

**See [APP_ICON_FIX.md](./APP_ICON_FIX.md) for more details**

---

## 📚 Documentation

- **[NOTIFICATIONS_COMPLETE.md](./NOTIFICATIONS_COMPLETE.md)** - Complete notification system guide
- **[TESTING_NOTIFICATIONS.md](./TESTING_NOTIFICATIONS.md)** - Quick testing guide
- **[NOTIFICATION_IMPLEMENTATION_SUMMARY.md](./NOTIFICATION_IMPLEMENTATION_SUMMARY.md)** - Implementation details
- **[APP_ICON_FIX.md](./APP_ICON_FIX.md)** - App icon update guide

---

## 🛠️ Tech Stack

- **Frontend**: Next.js 16, React, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Mobile**: Capacitor
- **Backend**: Supabase (Auth, Database, Storage)
- **Notifications**: Capacitor Local Notifications
- **UI Components**: shadcn/ui

---

## 📂 Project Structure

```text
habit-tracker-design/
├── app/                    # Next.js app directory
│   ├── page.tsx           # Main app component
│   ├── globals.css        # Global styles
│   └── auth/              # Auth callback
├── components/            # React components
│   ├── tabs/             # Tab components (Home, Calendar, etc.)
│   ├── ui/               # UI components (shadcn/ui)
│   ├── notification-splash.tsx
│   └── ...
├── lib/                   # Utilities and helpers
│   ├── notifications.ts  # Notification service
│   ├── store.ts          # Local storage + Supabase sync
│   ├── supabase.ts       # Supabase client
│   └── types.ts          # TypeScript types
├── android/              # Android project
├── ios/                  # iOS project
├── public/               # Static assets
├── generate-icons.js     # Icon generation script
└── capacitor.config.ts   # Capacitor configuration
```

---

## 🔐 Environment Variables

Required environment variables in `.env.local`:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

---

## 📄 License

This project is licensed under the MIT License.

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Mobile framework by [Capacitor](https://capacitorjs.com/)
- Backend by [Supabase](https://supabase.com/)

---

## 📞 Support

For issues and questions, please open an issue on GitHub.

---

### Made with ❤️ by SaSee1722
