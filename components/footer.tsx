"use client"

import Link from "next/link"
import { MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { pickLang } from "@/lib/i18n"

export function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="bg-navy-dark text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* COMPANY INFO */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/images/power-solid-logo.png"
                alt="Power Solid Logo"
                width={50}
                height={50}
                className="w-12 h-12 object-contain"
              />
              <div>
                <span className="text-xl font-bold text-white block">POWER SOLID</span>
                <span className="text-xs text-accent uppercase tracking-wider">
                  {pickLang(lang, { en: "Manpower & Contracting", ar: "القوى العاملة والمقاولات" })}
                </span>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              {pickLang(lang, {
                en: "A trusted manpower supply and industrial contracting company providing certified industrial manpower for Oil & Gas, Petrochemical and Construction projects across Saudi Arabia.",
                ar: "شركة موثوقة في توريد القوى العاملة والمقاولات الصناعية، توفر عمالة صناعية معتمدة لمشاريع النفط والغاز والبتروكيماويات والإنشاءات في جميع أنحاء المملكة العربية السعودية.",
              })}
            </p>
            
            {/* Social links - Nesma style */}
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-accent hover:bg-accent transition-all group">
                <svg className="w-4 h-4 text-white/60 group-hover:text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-accent hover:bg-accent transition-all group">
                <svg className="w-4 h-4 text-white/60 group-hover:text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-accent hover:bg-accent transition-all group">
                <svg className="w-4 h-4 text-white/60 group-hover:text-accent-foreground" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* MAIN LINKS */}
          <div>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-6">
              {pickLang(lang, { en: "Who We Are", ar: "من نحن" })}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/about-us" className="text-white/60 hover:text-accent transition-colors text-sm">{pickLang(lang, { en: "About Power Solid", ar: "عن باور سوليد" })}</Link></li>
              <li><Link href="/about-us#mission" className="text-white/60 hover:text-accent transition-colors text-sm">{pickLang(lang, { en: "Our Mission", ar: "رسالتنا" })}</Link></li>
              <li><Link href="/about-us#values" className="text-white/60 hover:text-accent transition-colors text-sm">{pickLang(lang, { en: "Our Values", ar: "قيمنا" })}</Link></li>
              <li><Link href="/certificates" className="text-white/60 hover:text-accent transition-colors text-sm">{pickLang(lang, { en: "Certifications", ar: "الشهادات" })}</Link></li>
              <li><Link href="/projects" className="text-white/60 hover:text-accent transition-colors text-sm">{pickLang(lang, { en: "Our Projects", ar: "مشاريعنا" })}</Link></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-6">
              {pickLang(lang, { en: "Our Services", ar: "خدماتنا" })}
            </h3>
            <ul className="space-y-3">
              <li><Link href="/services#manpower" className="text-white/60 hover:text-accent transition-colors text-sm">{pickLang(lang, { en: "Manpower Supply", ar: "توريد القوى العاملة" })}</Link></li>
              <li><Link href="/services#shutdown" className="text-white/60 hover:text-accent transition-colors text-sm">{pickLang(lang, { en: "Shutdown & Turnaround", ar: "دعم الإيقاف والتوقفات" })}</Link></li>
              <li><Link href="/services#maintenance" className="text-white/60 hover:text-accent transition-colors text-sm">{pickLang(lang, { en: "Industrial Maintenance", ar: "الصيانة الصناعية" })}</Link></li>
              <li><Link href="/services#contracting" className="text-white/60 hover:text-accent transition-colors text-sm">{pickLang(lang, { en: "Mechanical & Civil", ar: "مقاولات ميكانيكية ومدنية" })}</Link></li>
              <li><Link href="/services#equipment" className="text-white/60 hover:text-accent transition-colors text-sm">{pickLang(lang, { en: "Equipment with Operator", ar: "معدات مع مشغل" })}</Link></li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-sm font-semibold text-accent uppercase tracking-wider mb-6">
              {pickLang(lang, { en: "Contact Us", ar: "تواصل معنا" })}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">
                  {pickLang(lang, { en: "Jubail Industrial City", ar: "مدينة الجبيل الصناعية" })}
                  <br />
                  {pickLang(lang, { en: "Eastern Province", ar: "المنطقة الشرقية" })}
                  <br />
                  {pickLang(lang, { en: "Saudi Arabia", ar: "المملكة العربية السعودية" })}
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a href="tel:+966581945796" className="text-white/60 hover:text-accent transition-colors text-sm">
                  +966 058 194 5796
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <a href="mailto:info@powersolid-intl.com" className="text-white/60 hover:text-accent transition-colors text-sm">
                  info@powersolid-intl.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM - Nesma style */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/40">
            <p>
              {pickLang(lang, {
                en: "Power Solid Co. © 2026. All rights reserved.",
                ar: "شركة باور سوليد © 2026. جميع الحقوق محفوظة.",
              })}
            </p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-accent transition-colors">
                {pickLang(lang, { en: "Privacy Policy", ar: "سياسة الخصوصية" })}
              </Link>
              <Link href="/terms" className="hover:text-accent transition-colors">
                {pickLang(lang, { en: "Terms of Use", ar: "شروط الاستخدام" })}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
