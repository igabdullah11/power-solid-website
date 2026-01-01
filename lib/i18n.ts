export type Lang = "en" | "ar"

export const DEFAULT_LANG: Lang = "en"

export function isLang(value: unknown): value is Lang {
  return value === "en" || value === "ar"
}

export function pickLang<T>(lang: Lang, value: { en: T; ar: T }): T {
  return value[lang]
}

export function dirFromLang(lang: Lang): "ltr" | "rtl" {
  return lang === "ar" ? "rtl" : "ltr"
}
