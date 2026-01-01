"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { pickLang } from "@/lib/i18n"

export function WelcomeSection() {
  const { lang } = useLanguage()

  const featureItems = [
    {
      title: { en: "Certified Workforce", ar: "عمالة معتمدة" },
      desc: { en: "Experienced industrial manpower with valid certifications", ar: "قوى عاملة صناعية بخبرة وشهادات سارية" },
    },
    {
      title: { en: "Safety First", ar: "السلامة أولاً" },
      desc: { en: "Strong focus on HSE compliance and zero incidents", ar: "تركيز قوي على الالتزام بمتطلبات السلامة والصحة المهنية" },
    },
    {
      title: { en: "Rapid Mobilization", ar: "تعبئة سريعة" },
      desc: { en: "Fast deployment for shutdown and turnaround projects", ar: "تجهيز وتعبئة سريعة لمشاريع الإيقاف والتوقفات" },
    },
    {
      title: { en: "Local Expertise", ar: "خبرة محلية" },
      desc: { en: "Deep presence in Jubail & Eastern Province", ar: "تواجد قوي في الجبيل والمنطقة الشرقية" },
    },
    {
      title: { en: "Flexible Solutions", ar: "حلول مرنة" },
      desc: { en: "Contracts tailored for short and long-term needs", ar: "عقود مرنة للاحتياجات قصيرة وطويلة الأجل" },
    },
  ]

  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            {/* Section label - Nesma style */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
                {pickLang(lang, { en: "About Us", ar: "من نحن" })}
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
              {pickLang(lang, { en: "Empowering Industrial Growth", ar: "ندعم النمو الصناعي" })}{" "}
              <span className="text-accent">{pickLang(lang, { en: "Across Saudi Arabia", ar: "في أنحاء المملكة" })}</span>
            </h2>

            <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
              {pickLang(lang, {
                en: "Power Solid is a manpower and industrial contracting company based in Jubail, Saudi Arabia. We provide certified shutdown and long-term project manpower for oil & gas, petrochemical and construction clients across the Kingdom.",
                ar: "باور سوليد شركة متخصصة في توريد القوى العاملة والمقاولات الصناعية ومقرها الجبيل، المملكة العربية السعودية. نوفر كوادر معتمدة لمشاريع الإيقاف والمشاريع طويلة الأمد لعملاء النفط والغاز والبتروكيماويات والإنشاءات في جميع أنحاء المملكة.",
              })}
            </p>

            <p className="text-base text-foreground/60 mb-8 leading-relaxed">
              {pickLang(lang, {
                en: "Our teams include Riggers (I, II, III), Work Permit Receivers, Firewatchers, Safety Officers, helpers and support crews. We are committed to safety, compliance and reliable on-time mobilization for every assignment.",
                ar: "تشمل فرقنا رافعين (I, II, III)، مستلمي تصاريح العمل، مراقبي الحريق، مسؤولي السلامة، المساعدين وفرق الدعم. نلتزم بالسلامة والامتثال والتعبئة في الوقت المحدد لكل مهمة.",
              })}
            </p>

            <Link 
              href="/about-us"
              className="inline-flex items-center gap-3 text-primary font-semibold group"
            >
              <span className="border-b-2 border-accent pb-1">
                {pickLang(lang, { en: "Discover Our Legacy", ar: "اكتشف قصتنا" })}
              </span>
              <ArrowRight className="w-5 h-5 text-accent group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Right content - Key features */}
          <div className="bg-navy-dark p-8 md:p-12 rounded-2xl">
            <h3 className="text-xl font-bold text-white mb-8">
              {pickLang(lang, { en: "Why companies choose", ar: "لماذا تختار الشركات" })}{" "}
              <span className="text-accent">Power Solid</span>
            </h3>

            <div className="space-y-6">
              {featureItems.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-1 bg-accent/30 group-hover:bg-accent transition-colors" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{pickLang(lang, item.title)}</h4>
                    <p className="text-sm text-white/60">{pickLang(lang, item.desc)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">10+</div>
                <div className="text-xs text-white/50 mt-1">{pickLang(lang, { en: "Years Experience", ar: "سنوات خبرة" })}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">500+</div>
                <div className="text-xs text-white/50 mt-1">{pickLang(lang, { en: "Workers", ar: "عامل" })}</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-accent">200+</div>
                <div className="text-xs text-white/50 mt-1">{pickLang(lang, { en: "Projects", ar: "مشروع" })}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
