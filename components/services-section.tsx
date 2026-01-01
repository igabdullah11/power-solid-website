"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, HardHat, Shield, Wrench, Truck, Factory } from "lucide-react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import { pickLang } from "@/lib/i18n"

const services = [
  {
    icon: Users,
    title: { en: "Manpower Supply", ar: "توريد القوى العاملة" },
    description: {
      en: "Certified Riggers (I, II, III), WPRs, Firewatchers, Safety Officers, Electricians, Welders, Helpers and full industrial manpower teams.",
      ar: "رافعات (I, II, III) معتمدة، مستلمو تصاريح العمل، مراقبو الحريق، مسؤولو السلامة، كهربائيون، لحّامون، مساعدين وفرق عمالة صناعية متكاملة.",
    },
  },
  {
    icon: Factory,
    title: { en: "Shutdown & Turnaround", ar: "دعم الإيقاف والتوقفات" },
    description: {
      en: "Rapid mobilization of large manpower teams for plant shutdowns, turnarounds and emergency maintenance.",
      ar: "تعبئة سريعة لفرق كبيرة لدعم إيقاف المصانع والتوقفات والصيانة الطارئة.",
    },
  },
  {
    icon: Wrench,
    title: { en: "Industrial Maintenance", ar: "الصيانة الصناعية" },
    description: {
      en: "Mechanical, electrical and instrumentation manpower support for routine, preventive and breakdown maintenance.",
      ar: "دعم عمالة ميكانيكية وكهربائية وأجهزة دقيقة للصيانة الدورية والوقائية وصيانة الأعطال.",
    },
  },
  {
    icon: HardHat,
    title: { en: "Mechanical & Civil", ar: "مقاولات ميكانيكية ومدنية" },
    description: {
      en: "Piping, structural fabrication, equipment erection, excavation, foundation and general construction.",
      ar: "أعمال الأنابيب، تصنيع الهياكل، تركيب المعدات، الحفر، الأساسات وأعمال الإنشاء العامة.",
    },
  },
  {
    icon: Truck,
    title: { en: "Equipment with Operator", ar: "معدات مع مشغل" },
    description: {
      en: "Cranes, forklifts, manlifts, boom trucks, generators and air compressors with certified operators.",
      ar: "رافعات، فوركلفت، مان لفت، شاحنات بوم، مولدات وضواغط هواء مع مشغلين معتمدين.",
    },
  },
  {
    icon: Shield,
    title: { en: "HSE & Safety Support", ar: "دعم السلامة والصحة المهنية" },
    description: {
      en: "Certified safety officers, permit management, site supervision, toolbox talks and compliance.",
      ar: "مسؤولو سلامة معتمدون، إدارة التصاريح، إشراف موقعي، اجتماعات السلامة والالتزام.",
    },
  },
]

export function ServicesSection() {
  const { lang } = useLanguage()

  return (
    <section className="py-20 md:py-28 bg-primary">
      <div className="container mx-auto px-6">
        {/* Section header - Nesma style */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-accent" />
              <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
                {pickLang(lang, { en: "Our Services", ar: "خدماتنا" })}
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {pickLang(lang, { en: "A Dynamic Network of", ar: "شبكة ديناميكية من" })}{" "}
              <br className="hidden lg:block" />
              <span className="text-accent">{pickLang(lang, { en: "Expertise & Solutions", ar: "الخبرات والحلول" })}</span>
            </h2>
            <p className="text-white/70 text-lg">
              {pickLang(lang, {
                en: "Complete manpower and industrial contracting solutions for oil & gas, petrochemical, construction and maintenance projects across Saudi Arabia.",
                ar: "حلول متكاملة للقوى العاملة والمقاولات الصناعية لمشاريع النفط والغاز والبتروكيماويات والإنشاءات والصيانة في أنحاء المملكة.",
              })}
            </p>
          </div>

          <Link 
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors group"
          >
            {pickLang(lang, { en: "View All Services", ar: "عرض جميع الخدمات" })}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Services grid - Nesma style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-white/10 bg-background/95 rounded-3xl overflow-hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border-b border-r border-border hover:bg-secondary transition-all relative"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary flex items-center justify-center mb-6 group-hover:bg-accent transition-colors">
                <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary">
                {pickLang(lang, service.title)}
              </h3>

              {/* Description */}
              <p className="text-foreground/60 mb-6 leading-relaxed">
                {pickLang(lang, service.description)}
              </p>

              {/* Learn more link */}
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-medium text-primary hover:text-accent group-hover:gap-2 transition-all"
              >
                {pickLang(lang, { en: "Learn More", ar: "اعرف المزيد" })}
                <ArrowRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Accent line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
