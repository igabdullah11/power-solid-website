"use client"

import { useEffect, useRef, useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { pickLang } from "@/lib/i18n"

const stats = [
  {
    value: "500+",
    label: { en: "Skilled Workers", ar: "عمالة ماهرة" },
    description: { en: "Certified industrial manpower", ar: "قوى عاملة صناعية معتمدة" },
  },
  {
    value: "200+",
    label: { en: "Projects", ar: "مشاريع" },
    description: { en: "Completed across KSA", ar: "منجزة في أنحاء المملكة" },
  },
  {
    value: "50+",
    label: { en: "Active Clients", ar: "عملاء نشطون" },
    description: { en: "Major contractors & operators", ar: "مقاولون ومشغّلون رئيسيون" },
  },
  {
    value: "100%",
    label: { en: "Safety Focus", ar: "تركيز على السلامة" },
    description: { en: "Compliance & mobilization", ar: "الامتثال والتعبئة" },
  },
]

export function StatsSection() {
  const { lang } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className="relative bg-primary py-16 md:py-24 overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section header - Nesma style */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              {pickLang(lang, { en: "Power Solid in Numbers", ar: "باور سوليد بالأرقام" })}
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            {pickLang(lang, { en: "Delivering Excellence", ar: "نقدم التميز" })}{" "}
            <br className="hidden md:block" />
            <span className="text-accent">{pickLang(lang, { en: "Across Saudi Arabia", ar: "في أنحاء المملكة" })}</span>
          </h2>
        </div>

        {/* Stats grid - Nesma style with large numbers */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative group transition-all duration-700 ${
                isVisible 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Large number */}
              <div className="text-5xl md:text-6xl lg:text-7xl font-bold text-accent mb-2 tracking-tight">
                {stat.value}
              </div>
              
              {/* Label */}
              <div className="text-lg md:text-xl font-semibold text-white mb-1">
                {pickLang(lang, stat.label)}
              </div>
              
              {/* Description */}
              <div className="text-sm text-white/60">
                {pickLang(lang, stat.description)}
              </div>

              {/* Bottom accent line */}
              <div className="mt-4 h-0.5 w-12 bg-accent/30 group-hover:w-full group-hover:bg-accent transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* Bottom description - Nesma style */}
        <div className="mt-12 md:mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <p className="text-white/70 max-w-2xl leading-relaxed">
              {pickLang(lang, {
                en: "Power Solid is a trusted manpower supply and industrial contracting company supporting oil & gas, petrochemical and construction projects across Saudi Arabia with certified, site-ready manpower for shutdowns and long-term operations.",
                ar: "باور سوليد شركة موثوقة في توريد القوى العاملة والمقاولات الصناعية لدعم مشاريع النفط والغاز والبتروكيماويات والإنشاءات في المملكة العربية السعودية، بعمالة معتمدة وجاهزة للموقع لمشاريع الإيقاف والعمليات طويلة الأمد.",
              })}
            </p>
            <a 
              href="/about-us"
              className="inline-flex items-center gap-2 text-accent font-medium hover:gap-4 transition-all group"
            >
              {pickLang(lang, { en: "Learn More About Us", ar: "اعرف المزيد عنا" })}
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
