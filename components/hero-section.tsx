"use client"

import { useEffect, useMemo, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

const SLIDES = [
  { id: 1, heading: "Certified Manpower.", highlight: "Industrial Ready.", image: "/hero1.webp" },
  { id: 2, heading: "Shutdown & Turnaround Teams", highlight: "— On Time.", image: "/hero2.webp" },
  { id: 3, heading: "Your Offshore & Onshore", highlight: "Contracting Partner.", image: "/hero3.webp" },
  { id: 4, heading: "Safety-First Workforce", highlight: "for Critical Sites.", image: "/hero4.webp" },
  { id: 5, heading: "Fast Mobilization", highlight: "Across Saudi Arabia.", image: "/hero5.webp" },
  { id: 6, heading: "Quality Construction Materials.", highlight: "Delivered On Site.", image: "/hero6.webp" },
  { id: 7, heading: "Trusted Supply Partner", highlight: "for Projects & Contractors.", image: "/hero7.webp" },
]

const SLIDE_DURATION_MS = 7000
const FADE_MS = 900 // must match duration-[900ms]
const SWITCH_AT = 0.45 // switch a bit earlier (was 0.55) to reduce perceived lag

export function HeroSection() {
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
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[#0a1628]">
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1628]/95 via-[#0a1628]/70 to-[#0a1628]/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-transparent to-[#0a1628]/30" />
        </div>
      ))}

      {/* Flash overlay during transition */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-[900ms] ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[#0a1628]/20" />
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
          h-12 w-12 border border-[#c9a227]/40 bg-[#0a1628]/60
          text-white/90 backdrop-blur-sm hover:bg-[#c9a227] hover:text-[#0a1628] hover:border-[#c9a227] transition-all duration-300
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
          h-12 w-12 border border-[#c9a227]/40 bg-[#0a1628]/60
          text-white/90 backdrop-blur-sm hover:bg-[#c9a227] hover:text-[#0a1628] hover:border-[#c9a227] transition-all duration-300
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
              className={`inline-block border-l-2 border-[#c9a227] pl-4 mb-6
              transition-all duration-[900ms] ${
                isTransitioning ? "opacity-0 translate-x-4" : "opacity-100 translate-x-0"
              }`}
            >
              <span className="text-xs md:text-sm font-medium text-[#c9a227] uppercase tracking-[0.2em]">
                Manpower & Industrial Contracting
              </span>
            </div>

            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.1] text-white
              transition-all duration-[900ms] ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              {currentSlide.heading}
              <br />
              <span className="text-[#c9a227]">{currentSlide.highlight}</span>
            </h1>

            <p
              className={`mt-6 text-base md:text-lg text-white/70 max-w-xl leading-relaxed
              transition-all duration-[900ms] delay-100 ${
                isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
              }`}
            >
              Delivering certified industrial manpower and contracting solutions for oil & gas, petrochemical and construction projects across Saudi Arabia.
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
                className="inline-flex items-center px-8 py-4 bg-[#c9a227] text-[#0a1628] font-semibold hover:bg-[#e3c04b] transition-all"
              >
                Get a Quote
              </a>
              <a
                href="/services"
                className="inline-flex items-center px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 hover:border-white/50 transition-all"
              >
                Our Services
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
                      ? "w-12 bg-[#c9a227]" 
                      : "w-6 bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a1628] to-transparent z-10" />
    </section>
  )
}
