"use client"

import { useState, useEffect } from "react"
import { translations, type Language, type TranslationKey } from "./translations"

export function useTranslation() {
    const [language, setLanguage] = useState<Language>("English")

    useEffect(() => {
        // Load language from localStorage
        const savedLanguage = localStorage.getItem("language") as Language
        if (savedLanguage && translations[savedLanguage]) {
            setLanguage(savedLanguage)
        }

        // Listen for language changes
        const handleStorageChange = (e: StorageEvent) => {
            if (e.key === "language" && e.newValue) {
                const newLang = e.newValue as Language
                if (translations[newLang]) {
                    setLanguage(newLang)
                }
            }
        }

        window.addEventListener("storage", handleStorageChange)
        return () => window.removeEventListener("storage", handleStorageChange)
    }, [])

    const t = (key: TranslationKey): string => {
        const langTranslations = translations[language] as Record<string, string>
        return langTranslations?.[key] || translations.English[key] || key
    }

    return { t, language, setLanguage }
}
