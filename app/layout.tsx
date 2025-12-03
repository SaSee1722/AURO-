import type React from "react"
import type { Metadata, Viewport } from "next"
import { DM_Sans, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { AuthProvider } from "@/components/auth-provider"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  title: "AURO+ - Build Unbreakable Habits",
  description: "Build unbreakable habits with AURO+. Track streaks, see your progress, and stay motivated on your journey to excellence.",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#0A5F4E",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
