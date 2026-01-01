// "use client"

// import type React from "react"
// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import { Phone, Mail, MapPin, Send } from "lucide-react"
// import { useState } from "react"
// import { sendContactEmail } from "@/app/actions/send-email"

// export default function ContactUsPage() {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setIsSubmitting(true)
//     setSubmitStatus(null)

//     try {
//       const result = await sendContactEmail(formData)

//       if (result.success) {
//         setSubmitStatus({ type: "success", message: result.message })
//         setFormData({
//           fullName: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         })
//       } else {
//         setSubmitStatus({ type: "error", message: result.message })
//       }
//     } catch (error) {
//       setSubmitStatus({
//         type: "error",
//         message: "An unexpected error occurred. Please contact us directly at info@psc-intl.com",
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value })
//   }

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-24 md:py-32">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6">Get in Touch</h1>
//           <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
//             We're here to help and answer any question you might have
//           </p>
//         </div>
//       </section>

//       {/* Contact Form & Information Section */}
//       <section className="py-16 md:py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
//             {/* Contact Information Sidebar */}
//             <div className="lg:col-span-1 space-y-6 md:space-y-8">
//               <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">Contact Information</h2>

//               {/* Phone */}
//               <div className="flex items-start gap-4">
//                 <div className="bg-yellow-50 p-3 md:p-4 rounded-lg shrink-0">
//                   <Phone className="w-5 h-5 md:w-6 md:h-6 text-[#d4af37]" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-base md:text-lg mb-1">Phone</h3>
//                   <a href="tel:+966551429094" className="text-gray-600 hover:text-[#d4af37] transition-colors">
//                     +966 55 142 9094
//                   </a>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start gap-4">
//                 <div className="bg-yellow-50 p-3 md:p-4 rounded-lg shrink-0">
//                   <Mail className="w-5 h-5 md:w-6 md:h-6 text-[#d4af37]" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-base md:text-lg mb-1">Email</h3>
//                   <a href="mailto:info@psc-intl.com" className="text-gray-600 hover:text-[#d4af37] transition-colors">
//                     info@psc-intl.com
//                   </a>
//                 </div>
//               </div>

//               {/* Address */}
//               <div className="flex items-start gap-4">
//                 <div className="bg-yellow-50 p-3 md:p-4 rounded-lg shrink-0">
//                   <MapPin className="w-5 h-5 md:w-6 md:h-6 text-[#d4af37]" />
//                 </div>
//                 <div>
//                   <h3 className="font-bold text-base md:text-lg mb-1">Address</h3>
//                   <p className="text-gray-600">Riyadh, Saudi Arabia</p>
//                 </div>
//               </div>

//               {/* Business Hours */}
//               <div className="bg-yellow-50 p-5 md:p-6 rounded-lg mt-6 md:mt-8">
//                 <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Business Hours</h3>
//                 <div className="space-y-2 text-gray-700">
//                   <p className="text-sm">Monday - Friday: 8:00 AM - 6:00 PM</p>
//                   <p className="text-sm">Saturday: 9:00 AM - 4:00 PM</p>
//                   <p className="text-sm">Sunday: Closed</p>
//                 </div>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="lg:col-span-2">
//               {submitStatus && (
//                 <div
//                   className={`mb-6 p-4 rounded-lg ${
//                     submitStatus.type === "success"
//                       ? "bg-green-50 text-green-800 border border-green-200"
//                       : "bg-red-50 text-red-800 border border-red-200"
//                   }`}
//                 >
//                   {submitStatus.message}
//                 </div>
//               )}

//               <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
//                 {/* Name and Email Row */}
//                 <div className="grid md:grid-cols-2 gap-5 md:gap-6">
//                   <div>
//                     <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
//                       Full Name
//                     </label>
//                     <input
//                       type="text"
//                       id="fullName"
//                       name="fullName"
//                       value={formData.fullName}
//                       onChange={handleChange}
//                       placeholder="Your name"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                       Email Address
//                     </label>
//                     <input
//                       type="email"
//                       id="email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       placeholder="your@email.com"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Phone and Subject Row */}
//                 <div className="grid md:grid-cols-2 gap-5 md:gap-6">
//                   <div>
//                     <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
//                       Phone Number
//                     </label>
//                     <input
//                       type="tel"
//                       id="phone"
//                       name="phone"
//                       value={formData.phone}
//                       onChange={handleChange}
//                       placeholder="+966 XX XXX XXXX"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
//                       required
//                     />
//                   </div>
//                   <div>
//                     <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                       Subject
//                     </label>
//                     <input
//                       type="text"
//                       id="subject"
//                       name="subject"
//                       value={formData.subject}
//                       onChange={handleChange}
//                       placeholder="Project inquiry"
//                       className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all"
//                       required
//                     />
//                   </div>
//                 </div>

//                 {/* Message Field */}
//                 <div>
//                   <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                     Message
//                   </label>
//                   <textarea
//                     id="message"
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     rows={6}
//                     placeholder="Tell us about your project..."
//                     className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#d4af37] focus:border-transparent outline-none transition-all resize-none"
//                     required
//                   />
//                 </div>

//                 {/* Submit Button */}
//                 <button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="w-full bg-[#d4af37] text-black font-bold py-4 px-8 rounded-lg hover:bg-[#c4a137] transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
//                 >
//                   <Send className="w-5 h-5" />
//                   {isSubmitting ? "Sending..." : "Send Message"}
//                 </button>
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Google Map Section */}
//       <section className="h-[400px] md:h-[500px] w-full">
//         <iframe
//           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3624.251!2d46.7171!3d24.7136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDQyJzQ5LjAiTiA0NsKwNDMnMDEuNiJF!5e0!3m2!1sen!2ssa!4v1234567890!5m2!1sen!2ssa"
//           width="100%"
//           height="100%"
//           style={{ border: 0 }}
//           allowFullScreen
//           loading="lazy"
//           referrerPolicy="no-referrer-when-downgrade"
//           title="Power Solid Office Location - Riyadh, Saudi Arabia"
//         />
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 md:py-20 bg-gray-50">
//         <div className="container mx-auto px-6 text-center">
//           <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Ready to Start Your Project?</h2>
//           <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed">
//             Get in touch with our team today and let's discuss how Power Solid can help bring your vision to reality.
//           </p>
//           <a
//             href="#"
//             onClick={(e) => {
//               e.preventDefault()
//               window.scrollTo({ top: 0, behavior: "smooth" })
//             }}
//             className="inline-block bg-[#d4af37] text-black font-bold py-4 px-10 rounded-lg hover:bg-[#c4a137] transition-all shadow-lg hover:shadow-xl"
//           >
//             Contact Us Now
//           </a>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
"use client"

import type React from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { sendContactEmail } from "@/app/actions/send-email"
import { useLanguage } from "@/components/language-provider"
import { pickLang } from "@/lib/i18n"

export default function ContactUsPage() {
  const { lang } = useLanguage()

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{ type: "success" | "error"; message: string } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const result = await sendContactEmail(formData, lang)

      if (result.success) {
        setSubmitStatus({ type: "success", message: result.message })
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      } else {
        setSubmitStatus({ type: "error", message: result.message })
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: pickLang(lang, {
          en: "An unexpected error occurred. Please contact us directly at info@powersolid-intl.com",
          ar: "حدث خطأ غير متوقع. يرجى التواصل معنا مباشرة عبر info@powersolid-intl.com",
        }),
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ✅ HERO SECTION (MANPOWER OPTIMIZED) */}
      <section className="relative bg-black text-white pt-40 pb-32 md:pt-48 md:pb-40">
        <div className="absolute inset-0 z-0">
          <Image src="/images/construction-site2.jpg" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {pickLang(lang, { en: "Request Manpower", ar: "طلب قوى عاملة" })}
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {pickLang(lang, {
              en: "We provide certified manpower, shutdown teams and safety workforce across Saudi Arabia",
              ar: "نوفر قوى عاملة معتمدة وفرق إيقاف وكوادر سلامة في أنحاء المملكة",
            })}
          </p>
        </div>
      </section>

      {/* ✅ CONTACT SECTION */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8 md:gap-12">
            {/* CONTACT INFO */}
            <div className="lg:col-span-1 space-y-6 md:space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
                {pickLang(lang, { en: "Contact Information", ar: "معلومات التواصل" })}
              </h2>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <Phone className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{pickLang(lang, { en: "Phone", ar: "الهاتف" })}</h3>
                  <a href="tel:+966581945796" className="text-gray-600 hover:text-[#d4af37]">
                    +966 058 194 5796
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <Mail className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{pickLang(lang, { en: "Email", ar: "البريد الإلكتروني" })}</h3>
                  <a href="mailto:info@powersolid-intl.com" className="text-gray-600 hover:text-[#d4af37]">
                    info@powersolid-intl.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#d4af37]" />
                </div>
                <div>
                  <h3 className="font-bold mb-1">{pickLang(lang, { en: "Office Address", ar: "عنوان المكتب" })}</h3>
                  <p className="text-gray-600">
                    {pickLang(lang, {
                      en: "Jubail Industrial City, Eastern Province, Saudi Arabia",
                      ar: "مدينة الجبيل الصناعية، المنطقة الشرقية، المملكة العربية السعودية",
                    })}
                  </p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mt-8">
                <h3 className="font-bold mb-4">{pickLang(lang, { en: "Business Hours", ar: "ساعات العمل" })}</h3>
                <p className="text-sm">
                  {pickLang(lang, { en: "Monday – Friday: 8:00 AM – 6:00 PM", ar: "الاثنين – الجمعة: 8:00 صباحاً – 6:00 مساءً" })}
                </p>
                <p className="text-sm">
                  {pickLang(lang, { en: "Saturday: 9:00 AM – 4:00 PM", ar: "السبت: 9:00 صباحاً – 4:00 مساءً" })}
                </p>
                <p className="text-sm">{pickLang(lang, { en: "Sunday: Closed", ar: "الأحد: مغلق" })}</p>
              </div>
            </div>

            {/* ✅ CONTACT FORM */}
            <div className="lg:col-span-2">
              {submitStatus && (
                <div
                  className={`mb-6 p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder={pickLang(lang, { en: "Full Name", ar: "الاسم الكامل" })}
                    className="w-full px-4 py-3 border rounded-lg"
                    required
                  />

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder={pickLang(lang, { en: "Email Address", ar: "البريد الإلكتروني" })}
                    className="w-full px-4 py-3 border rounded-lg"
                    required
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+966 XX XXX XXXX"
                    className="w-full px-4 py-3 border rounded-lg"
                    required
                  />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder={pickLang(lang, {
                      en: "Manpower requirement / Shutdown support",
                      ar: "احتياج عمالة / دعم الإيقاف",
                    })}
                    className="w-full px-4 py-3 border rounded-lg"
                    required
                  />
                </div>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder={pickLang(lang, {
                    en: "Mention required manpower (Riggers, WPR, Safety, Helpers, etc.)",
                    ar: "اذكر احتياج القوى العاملة (رافعات، WPR، سلامة، مساعدين، إلخ)",
                  })}
                  className="w-full px-4 py-3 border rounded-lg"
                  required
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#d4af37] text-black font-bold py-4 rounded-lg flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting
                    ? pickLang(lang, { en: "Sending...", ar: "جارٍ الإرسال..." })
                    : pickLang(lang, { en: "Send Manpower Request", ar: "إرسال طلب القوى العاملة" })}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ✅ GOOGLE MAP (WORKING & SAFE) */}
      <section className="h-[450px]">
        <iframe
          src="https://www.google.com/maps?q=Jubail%20Industrial%20City%20Saudi%20Arabia&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          title="Power Solid Office - Jubail Industrial City"
        />
      </section>

      {/* ✅ FINAL CTA */}
      <section className="py-20 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold mb-6">
          {pickLang(lang, { en: "Need Certified Manpower for Your Site?", ar: "هل تحتاج إلى عمالة معتمدة لموقعك؟" })}
        </h2>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
          }}
          className="inline-block bg-[#d4af37] text-black font-bold py-4 px-10 rounded-lg"
        >
          {pickLang(lang, { en: "Contact Power Solid Now", ar: "تواصل مع باور سوليد الآن" })}
        </a>
      </section>

      <Footer />
    </div>
  )
}
