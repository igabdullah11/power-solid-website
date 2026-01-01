"use client"

import React, { createContext, useContext, useEffect, useMemo, useState } from "react"

import { DEFAULT_LANG, dirFromLang, isLang, type Lang } from "@/lib/i18n"

type LanguageContextValue = {
  lang: Lang
  dir: "ltr" | "rtl"
  isArabic: boolean
  setLang: (lang: Lang) => void
  toggleLang: () => void
}

const STORAGE_KEY = "ps_lang"

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG)

  const setLang = (next: Lang) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // ignore
    }
  }

  const toggleLang = () => setLang(lang === "ar" ? "en" : "ar")

  useEffect(() => {
    let stored: unknown = undefined
    try {
      stored = window.localStorage.getItem(STORAGE_KEY)
    } catch {
      stored = undefined
    }

    if (isLang(stored) && stored !== lang) {
      setLangState(stored)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const html = document.documentElement
    html.setAttribute("lang", lang)
    html.setAttribute("dir", dirFromLang(lang))
    html.setAttribute("data-lang", lang)

    const onStorage = (e: StorageEvent) => {
      if (e.key !== STORAGE_KEY) return
      if (isLang(e.newValue) && e.newValue !== lang) {
        setLangState(e.newValue)
      }
    }

    window.addEventListener("storage", onStorage)
    return () => window.removeEventListener("storage", onStorage)
  }, [lang])

  const value = useMemo<LanguageContextValue>(() => {
    const dir = dirFromLang(lang)
    return {
      lang,
      dir,
      isArabic: lang === "ar",
      setLang,
      toggleLang,
    }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) {
    throw new Error("useLanguage must be used within <LanguageProvider>")
  }
  return ctx
}
