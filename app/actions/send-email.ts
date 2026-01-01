// "use server"

// export async function sendContactEmail(formData: {
//   fullName: string
//   email: string
//   phone: string
//   subject: string
//   message: string
// }) {
//   try {
//     // Email content in HTML format
//     const emailHtml = `
//       <!DOCTYPE html>
//       <html>
//         <head>
//           <style>
//             body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
//             .container { max-width: 600px; margin: 0 auto; padding: 20px; }
//             .header { background-color: #d4af37; padding: 20px; text-align: center; }
//             .header h1 { color: #000; margin: 0; }
//             .content { background-color: #f9f9f9; padding: 20px; margin-top: 20px; }
//             .field { margin-bottom: 15px; }
//             .field strong { color: #000; }
//             .footer { margin-top: 20px; padding: 20px; text-align: center; color: #666; font-size: 12px; }
//           </style>
//         </head>
//         <body>
//           <div class="container">
//             <div class="header">
//               <h1>Power Solid - New Contact Form Submission</h1>
//             </div>
//             <div class="content">
//               <div class="field">
//                 <strong>From:</strong> ${formData.fullName}
//               </div>
//               <div class="field">
//                 <strong>Email:</strong> ${formData.email}
//               </div>
//               <div class="field">
//                 <strong>Phone:</strong> ${formData.phone}
//               </div>
//               <div class="field">
//                 <strong>Subject:</strong> ${formData.subject}
//               </div>
//               <div class="field">
//                 <strong>Message:</strong><br/>
//                 ${formData.message.replace(/\n/g, "<br/>")}
//               </div>
//             </div>
//             <div class="footer">
//               This email was sent from the Power Solid website contact form.
//             </div>
//           </div>
//         </body>
//       </html>
//     `

//     // Send email using fetch to a mailto link or email API
//     // For now, we'll use a simple approach with fetch to a serverless function
//     const response = await fetch("https://api.resend.com/emails", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${process.env.RESEND_API_KEY || ""}`,
//       },
//       body: JSON.stringify({
//         from: "Power Solid Website <onboarding@resend.dev>",
//         to: ["info@psc-intl.com"],
//         reply_to: formData.email,
//         subject: `New Contact Form: ${formData.subject}`,
//         html: emailHtml,
//       }),
//     })

//     if (!response.ok) {
//       // If Resend fails, create a fallback using mailto
//       console.log("[v0] Email API failed, contact form data:", formData)
//       throw new Error("Failed to send email")
//     }

//     return { success: true, message: "Email sent successfully!" }
//   } catch (error) {
//     console.error("[v0] Error sending email:", error)
//     return {
//       success: false,
//       message: "Failed to send email. Please try contacting us directly at info@psc-intl.com or call +966 55 142 9094.",
//     }
//   }
// }
"use server"

import { headers } from "next/headers"

const RATE_LIMIT_WINDOW_MS = 60_000
const RATE_LIMIT_MAX = 5
const rateLimitStore = new Map<string, { count: number; resetAt: number }>()

async function getClientIp(): Promise<string> {
  const h = await headers()
  const forwardedFor = h.get("x-forwarded-for")
  const realIp = h.get("x-real-ip")

  const ip = (forwardedFor ? forwardedFor.split(",")[0] : realIp)?.trim()
  return ip || "unknown"
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
    .replace(/\"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

function isValidEmail(email: string): boolean {
  // Simple sanity check (not RFC-complete)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function parseRecipientList(raw: string | undefined): string[] {
  if (!raw) return []
  return raw
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean)
    .filter(isValidEmail)
}

export async function sendContactEmail(formData: {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}, lang: "en" | "ar" = "en") {
  try {
    enforceRateLimit(`contact:${await getClientIp()}`)

    const resendApiKey = process.env.RESEND_API_KEY
    if (!resendApiKey) {
      throw new Error("Missing RESEND_API_KEY")
    }

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

    const safeFullName = escapeHtml(fullName)
    const safeEmail = escapeHtml(email)
    const safePhone = escapeHtml(phone)
    const safeSubject = escapeHtml(subject)
    const safeMessageHtml = escapeHtml(messageRaw).replace(/\n/g, "<br/>")

    const resendFrom = process.env.RESEND_FROM || "Power Solid Website <onboarding@resend.dev>"
    const configuredRecipients =
      parseRecipientList(process.env.RESEND_TO) ||
      parseRecipientList(process.env.CONTACT_EMAIL_TO)
    const recipients = configuredRecipients.length
      ? configuredRecipients
      : ["info@powersolid-intl.com"]
    const replyTo = email // already newline-stripped by normalizeLine

    const emailHtml = `
      <h2>Power Solid - New Website Inquiry</h2>
      <p><strong>Name:</strong> ${safeFullName}</p>
      <p><strong>Email:</strong> ${safeEmail}</p>
      <p><strong>Phone:</strong> ${safePhone}</p>
      <p><strong>Subject:</strong> ${safeSubject}</p>
      <p><strong>Message:</strong></p>
      <p>${safeMessageHtml}</p>
    `

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendApiKey}`,
      },
      body: JSON.stringify({
        from: resendFrom,
        to: recipients,
        reply_to: replyTo,
        subject: `New Manpower Request: ${subject}`,
        html: emailHtml,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Resend Error:", response.status, errorText)
      throw new Error(`Resend request failed (${response.status})`)
    }

    return {
      success: true,
      message:
        lang === "ar"
          ? "تم إرسال طلب القوى العاملة بنجاح."
          : "Your manpower request has been sent successfully!",
    }
  } catch (error) {
    console.error("Email Error:", error)
    return {
      success: false,
      message:
        lang === "ar"
          ? "تعذر إرسال الطلب. يرجى المحاولة لاحقاً أو التواصل معنا مباشرة."
          : "Failed to send email. Please try again later or contact us directly.",
    }
  }
}
