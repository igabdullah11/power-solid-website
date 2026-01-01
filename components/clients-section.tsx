"use client"

import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { pickLang } from "@/lib/i18n"

const clients = [
  { name: "Saudi Aramco", logo: "/saudi-aramco-logo.png" },
  { name: "SABIC", logo: "/SABIC-logo.png" },
  { name: "Riyadh Development Company", logo: "/riyadh-development-company-logo.jpg" },
  { name: "Saudi Electric Company", logo: "/saudi-electric-company-logo.jpg" },
  { name: "Saudi Vision 2030", logo: "/saudi-vision-2030-logo.png" },
  { name: "Tadawul Group", logo: "/tadawul-group-logo.jpg" },
]

export function ClientsSection() {
  const { lang } = useLanguage()

  return (
    <section className="py-20 md:py-28 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        {/* Section header - Nesma style */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              {pickLang(lang, { en: "Our Partners", ar: "شركاؤنا" })}
            </span>
            <div className="h-px w-12 bg-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            {pickLang(lang, { en: "Trusted by", ar: "موثوق من قبل" })}{" "}
            <span className="text-accent">{pickLang(lang, { en: "Industry Leaders", ar: "روّاد الصناعة" })}</span>
          </h2>
          <p className="text-foreground/60 max-w-2xl mx-auto text-lg">
            {pickLang(lang, {
              en: "Partnering with leading organizations across Saudi Arabia",
              ar: "شراكات مع جهات رائدة في أنحاء المملكة العربية السعودية",
            })}
          </p>
        </div>

        {/* Clients grid - Nesma style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-border max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group p-8 border-b border-r border-border flex items-center justify-center hover:bg-secondary transition-all"
            >
              <div className="relative w-full h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  width={120}
                  height={64}
                  className="object-contain max-h-16"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badges - Nesma style */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-accent" />
            <div>
              <div className="text-sm font-semibold text-foreground">{pickLang(lang, { en: "ISO Certified", ar: "اعتماد ISO" })}</div>
              <div className="text-xs text-foreground/50">{pickLang(lang, { en: "Quality Management", ar: "إدارة الجودة" })}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-accent" />
            <div>
              <div className="text-sm font-semibold text-foreground">{pickLang(lang, { en: "10+ Years", ar: "10+ سنوات" })}</div>
              <div className="text-xs text-foreground/50">{pickLang(lang, { en: "Industry Experience", ar: "خبرة صناعية" })}</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-accent" />
            <div>
              <div className="text-sm font-semibold text-foreground">{pickLang(lang, { en: "200+ Projects", ar: "200+ مشروع" })}</div>
              <div className="text-xs text-foreground/50">{pickLang(lang, { en: "Successfully Delivered", ar: "تم تسليمها بنجاح" })}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
