"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { pickLang } from "@/lib/i18n"

const SLIDES = [
  {
    id: 1,
    heading: { en: "Certified Manpower.", ar: "قوى عاملة معتمدة." },
    highlight: { en: "Industrial Ready.", ar: "جاهزة للمواقع الصناعية." },
    image: "/hero1.webp",
  },
  {
    id: 2,
    heading: { en: "Shutdown & Turnaround Teams", ar: "فرق الإيقاف والتوقفات" },
    highlight: { en: "— On Time.", ar: "— في الوقت المحدد." },
    image: "/hero2.webp",
  },
  {
    id: 3,
    heading: { en: "Your Offshore & Onshore", ar: "شريكك في المشاريع" },
    highlight: { en: "Contracting Partner.", ar: "البرية والبحرية." },
    image: "/hero3.webp",
  },
  {
    id: 4,
    heading: { en: "Safety-First Workforce", ar: "قوى عاملة تضع السلامة أولاً" },
    highlight: { en: "for Critical Sites.", ar: "للمواقع الحساسة." },
    image: "/hero4.webp",
  },
  {
    id: 5,
    heading: { en: "Fast Mobilization", ar: "تعبئة سريعة" },
    highlight: { en: "Across Saudi Arabia.", ar: "في أنحاء المملكة." },
    image: "/hero5.webp",
  },
  {
    id: 6,
    heading: { en: "Quality Construction Materials.", ar: "مواد إنشائية بجودة عالية." },
    highlight: { en: "Delivered On Site.", ar: "تسليم مباشر للموقع." },
    image: "/hero6.webp",
  },
  {
    id: 7,
    heading: { en: "Trusted Supply Partner", ar: "شريك توريد موثوق" },
    highlight: { en: "for Projects & Contractors.", ar: "للمشاريع والمقاولين." },
    image: "/hero7.webp",
  },
]

const SLIDE_DURATION_MS = 7000
const FADE_MS = 900 // must match duration-[900ms]
const SWITCH_AT = 0.45 // switch a bit earlier (was 0.55) to reduce perceived lag

export function HeroSection() {
  const { lang } = useLanguage()

  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [paused, setPaused] = useState(false)

  const resumeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const currentSlide = useMemo(() => SLIDES[currentIndex], [currentIndex])

  // ✅ Preload + decode slides ASAP (smooth transitions)
  useEffect(() => {
    SLIDES.forEach(({ image }) => {
      const img = new window.Image()
      img.src = image
      img.decode?.().catch(() => {})
    })
  }, [])

  const startTransitionTo = (nextIndex: number) => {
    setIsTransitioning(true)

    // switch slide during fade for smoothness
    setTimeout(() => {
      setCurrentIndex(nextIndex)
    }, Math.floor(FADE_MS * SWITCH_AT))

    // end transition
    setTimeout(() => {
      setIsTransitioning(false)
    }, FADE_MS)
  }

  const pauseAutoFor = (ms: number) => {
    setPaused(true)
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    resumeTimerRef.current = setTimeout(() => setPaused(false), ms)
  }

  // Auto slide
  useEffect(() => {
    if (paused) return

    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % SLIDES.length
      startTransitionTo(nextIndex)
    }, SLIDE_DURATION_MS)

    return () => clearInterval(timer)
  }, [paused, currentIndex])

  // cleanup resume timer
  useEffect(() => {
    return () => {
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current)
    }
  }, [])

  const goToSlide = (i: number) => {
    pauseAutoFor(12000)
    startTransitionTo(i)
  }

  const nextSlide = () => {
    pauseAutoFor(12000)
    startTransitionTo((currentIndex + 1) % SLIDES.length)
  }

  const prevSlide = () => {
    pauseAutoFor(12000)
    startTransitionTo((currentIndex - 1 + SLIDES.length) % SLIDES.length)
  }

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-navy-dark">
      {/* Background slides (crossfade) - Nesma style */}
      {SLIDES.map((s, i) => (
        <div
          key={s.id}
          className={`absolute inset-0 transition-opacity duration-[900ms] ${
            i === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={s.image}
            alt=""
            fill
            sizes="100vw"
            priority={i === 0}
            className={`object-cover ${i === currentIndex && !isTransitioning ? "hero-kenburns" : ""}`}
          />

          {/* Nesma-style dark navy overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/70 to-navy-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-dark via-transparent to-navy-dark/30" />
        </div>
      ))}

      {/* Flash overlay during transition */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-[900ms] ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-navy-dark/20" />
      </div>

      {/* Arrows (bottom on mobile, center on desktop) */}
      {/* Nesma-style navigation arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prevSlide}
        className="
          absolute z-20
          left-4 bottom-32
          md:left-10 md:top-1/2 md:-translate-y-1/2 md:bottom-auto
          h-12 w-12 border border-accent/40 bg-navy-dark/60
          text-white/90 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300
        "
      >
        <ChevronLeft className="mx-auto h-6 w-6" />
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={nextSlide}
        className="
          absolute z-20
          right-4 bottom-32
          md:right-10 md:top-1/2 md:-translate-y-1/2 md:bottom-auto
          h-12 w-12 border border-accent/40 bg-navy-dark/60
          text-white/90 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300
        "
      >
        <ChevronRight className="mx-auto h-6 w-6" />
      </button>

      {/* Nesma-style hero content - left aligned */}
      <div className="relative z-10 h-full pt-32 md:pt-40">
        <div className="container mx-auto px-6 h-full flex items-center">
          <div className="max-w-3xl">
            {/* Subtitle tag - Nesma style */}
            <div
              className={`inline-block border-l-2 border-accent pl-4 mb-6
              transition-all duration-[900ms] ${
                isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
              }`}
            >
              <span className="text-xs md:text-sm font-medium text-accent uppercase tracking-[0.2em]">
                {pickLang(lang, { en: "Manpower & Industrial Contracting", ar: "القوى العاملة والمقاولات الصناعية" })}
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white
              transition-all duration-[900ms] ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {pickLang(lang, currentSlide.heading)}
              <br />
              <span className="text-accent">{pickLang(lang, currentSlide.highlight)}</span>
            </h1>

            <p
              className={`mt-6 text-base md:text-lg text-white/70 max-w-xl leading-relaxed
              transition-all duration-[900ms] delay-100 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {pickLang(lang, {
                en: "Delivering certified industrial manpower and contracting solutions for oil & gas, petrochemical and construction projects across Saudi Arabia.",
                ar: "نقدم قوى عاملة صناعية معتمدة وحلول مقاولات لمشاريع النفط والغاز والبتروكيماويات والإنشاءات في جميع أنحاء المملكة العربية السعودية.",
              })}
            </p>

            {/* CTA Buttons - Nesma style */}
            <div
              className={`mt-8 flex flex-wrap gap-4
              transition-all duration-[900ms] delay-200 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              <a
                href="/contact-us"
                className="inline-flex items-center px-8 py-4 bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-all"
              >
                {pickLang(lang, { en: "Get a Quote", ar: "اطلب عرض سعر" })}
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 hover:border-white/50 transition-all"
              >
                {pickLang(lang, { en: "Our Services", ar: "خدماتنا" })}
              </a>
            </div>

            {/* Slide indicators - Nesma style */}
            <div className="mt-12 flex items-center gap-3">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-1 transition-all duration-300 ${
                    i === currentIndex 
                      ? "w-12 bg-accent" 
                      : "w-6 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-dark to-transparent z-10" />
    </section>
  )
}
