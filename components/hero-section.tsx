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
    <section className="relative h-[78vh] min-h-[520px] w-full overflow-hidden bg-black">
      {/* Background slides (crossfade) */}
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
            sizes="100vw"   // ✅ helps Next render more efficiently
            priority={i === 0}
            // className={`object-cover ${i === currentIndex ? "hero-kenburns" : ""}`}
           className={`object-cover ${i === currentIndex && !isTransitioning ? "hero-kenburns" : ""}`}
 
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/60" />

          {/* Optional top blend */}
          <div className="absolute -top-40 left-0 right-0 h-80 bg-gradient-to-b from-black/70 to-transparent" />
        </div>
      ))}

      {/* Flash overlay during transition (cheap + smooth) */}
      <div
        className={`pointer-events-none absolute inset-0 transition-opacity duration-[900ms] ${
          isTransitioning ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-white/5" />
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* Arrows (bottom on mobile, center on desktop) */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prevSlide}
        className="
          absolute z-20
          left-4 bottom-24
          md:left-8 md:top-1/2 md:-translate-y-1/2 md:bottom-auto
          h-11 w-11 rounded-full border border-white/25 bg-black/30
          text-white/90 backdrop-blur hover:bg-black/45 transition
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
          right-4 bottom-24
          md:right-8 md:top-1/2 md:-translate-y-1/2 md:bottom-auto
          h-11 w-11 rounded-full border border-white/25 bg-black/30
          text-white/90 backdrop-blur hover:bg-black/45 transition
        "
      >
        <ChevronRight className="mx-auto h-6 w-6" />
      </button>

      {/* Tagline */}
      <div className="relative z-10 h-full">
        <div className="container mx-auto px-6 h-full flex items-center justify-center">
          <div className="max-w-5xl text-center">
            <div
              className={`inline-flex items-center rounded-full border border-[#d4af37]/35 bg-black/25 px-4 py-1
              text-[11px] font-medium text-[#f3d37a] uppercase tracking-[0.18em]
              transition-all duration-[900ms] ${
                isTransitioning ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
              }`}
            >
              Manpower & Contracting · Saudi Arabia
            </div>

            <h1
              className={`mt-5 text-4xl md:text-6xl font-bold leading-tight text-white
              transition-all duration-[900ms] ${
                isTransitioning ? "opacity-0 translate-y-3 blur-[1px]" : "opacity-100 translate-y-0 blur-0"
              }`}
            >
              {currentSlide.heading} <span className="text-[#d4af37]">{currentSlide.highlight}</span>
            </h1>

            <div className="mt-8 flex items-center justify-center gap-2">
              {SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? "w-8 bg-[#d4af37]" : "w-2.5 bg-white/35 hover:bg-white/55"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
