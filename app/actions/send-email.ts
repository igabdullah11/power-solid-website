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

export async function sendContactEmail(formData: {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}, lang: "en" | "ar" = "en") {
  try {
    const emailHtml = `
      <h2>Power Solid - New Website Inquiry</h2>
      <p><strong>Name:</strong> ${formData.fullName}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Subject:</strong> ${formData.subject}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message.replace(/\n/g, "<br/>")}</p>
    `

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Power Solid Website <onboarding@resend.dev>", // ✅ allowed for testing
        to: ["igabdullah11@gmail.com"], // ✅ TEST EMAIL FIRST
        reply_to: formData.email,
        subject: `New Manpower Request: ${formData.subject}`,
        html: emailHtml,
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error("Resend Error:", errorText)
      throw new Error("Email failed")
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
          ? "تعذر إرسال الطلب. يرجى الاتصال على +966 55 216 3720."
          : "Failed to send email. Please call +966 55 216 3720 instead.",
    }
  }
}
