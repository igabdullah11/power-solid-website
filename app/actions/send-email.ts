"use server"

import { headers } from "next/headers"

/* ------------------ CONFIG ------------------ */
const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5

// ✅ YOUR VERIFIED RESEND EMAIL (receiver in testing)
const TESTING_RECIPIENT = "igabdullah11@gmail.com"

// ✅ SAFE TESTING FROM (DO NOT CHANGE)
const TESTING_FROM = "Power Solid Website <onboarding@resend.dev>"

/* ------------------ RATE LIMIT ------------------ */
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

async function getClientIp(): Promise<string> {
  const h = await headers()
  const forwardedFor = h.get("x-forwarded-for")
  const realIp = h.get("x-real-ip")
  return (forwardedFor ? forwardedFor.split(",")[0] : realIp)?.trim() || "unknown"
}

function enforceRateLimit(key: string) {
  const now = Date.now()
  const existing = rateLimitStore.get(key)

  if (!existing || existing.resetAt <= now) {
    rateLimitStore.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS })
    return
  }

  existing.count += 1
  if (existing.count > RATE_LIMIT_MAX) {
    throw new Error("Rate limited")
  }
}

/* ------------------ HELPERS ------------------ */
function normalizeLine(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim()
}

function clamp(value: string, maxLen: number): string {
  return value.length > maxLen ? value.slice(0, maxLen) : value
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

/* ------------------ MAIN ACTION ------------------ */
export async function sendContactEmail(
  formData: {
    fullName: string
    email: string
    phone: string
    subject: string
    message: string
  },
  lang: "en" | "ar" = "en"
) {
  try {
    enforceRateLimit(`contact:${await getClientIp()}`)

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      throw new Error("Missing RESEND_API_KEY")
    }

    // ✅ Correct Vercel environment detection
    const isProd = process.env.VERCEL_ENV === "production"

    /* ---------- INPUT SANITIZATION ---------- */
    const fullName = clamp(normalizeLine(formData.fullName || ""), 120)
    const email = clamp(normalizeLine(formData.email || ""), 254)
    const phone = clamp(normalizeLine(formData.phone || ""), 50)
    const subject = clamp(normalizeLine(formData.subject || ""), 160)
    const messageRaw = clamp((formData.message || "").trim(), 10_000)

    if (!fullName || !email || !subject || !messageRaw) {
      return {
        success: false,
        message:
          lang === "ar"
            ? "يرجى تعبئة الحقول المطلوبة."
            : "Please fill in the required fields.",
      }
    }

    if (!isValidEmail(email)) {
      return {
        success: false,
        message:
          lang === "ar"
            ? "يرجى إدخال بريد إلكتروني صحيح."
            : "Please enter a valid email address.",
      }
    }

    /* ---------- EMAIL HTML ---------- */
    const emailHtml = `
      <h2>Power Solid - New Website Inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(messageRaw).replace(/\n/g, "<br/>")}</p>
    `

    /* ---------- FROM + TO (CRITICAL FIX) ---------- */
    const from = isProd
      ? process.env.RESEND_FROM // must be verified domain later
      : TESTING_FROM             // 👈 ALWAYS resend.dev in testing

    if (isProd && !from) {
      throw new Error("RESEND_FROM must be set in production")
    }

    const to = isProd
      ? ["info@powersolid-intl.com"] // future real inbox
      : [TESTING_RECIPIENT]          // 👈 ONLY allowed in testing

    /* ---------- SEND ---------- */
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New Manpower Request: ${subject}`,
        html: emailHtml,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Resend Error:", errorText)
      throw new Error("Resend request failed")
    }

    return {
      success: true,
      message:
        lang === "ar"
          ? "تم إرسال الطلب بنجاح."
          : "Your request has been sent successfully!",
    }
  } catch (error) {
    console.error("Email Error:", error)
    return {
      success: false,
      message:
        lang === "ar"
          ? "تعذر إرسال الطلب. يرجى المحاولة لاحقاً."
          : "Failed to send email. Please try again later.",
    }
  }
}
