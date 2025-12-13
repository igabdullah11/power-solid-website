"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const slides = [
  {
    id: 1,
    image: "/images/hero-rigger.jpg",
    alt: "Rigger working at height",
  },
  {
    id: 2,
    image: "/images/hero-plant.jpg",
    alt: "Industrial plant shutdown",
  },
  {
    id: 3,
    image: "/images/hero-safety.jpg",
    alt: "Safety officer at construction site",
  },
  // 👆 replace these paths with your real images in /public/images
]

export function HomeHero() {
  const [current, setCurrent] = useState(0)

  // auto-slide
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(id)
  }, [])

  return (
    <section className="relative h-[70vh] min-h-[480px] w-full overflow-hidden bg-black">
      {/* Background images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              index === current ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt={slide.alt}
              fill
              priority={index === 0}
              className="object-cover"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/40" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="inline-block rounded-full bg-[#d4af37]/90 px-5 py-2 text-xs md:text-sm font-semibold text-black mb-6">
            Manpower &amp; Industrial Contracting • Saudi Arabia
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
            Reliable{" "}
            <span className="text-[#f4d27a]">
              Manpower &amp; Contracting
            </span>{" "}
            Partner
          </h1>

          <p className="max-w-2xl mx-auto text-sm md:text-lg text-white/80 mb-8">
            Certified Riggers, WPR, Firewatch, Safety Officers and complete
            industrial contracting solutions for shutdowns, turnarounds and
            long-term projects across the Kingdom.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link href="/contact-us">
              <Button className="bg-[#d4af37] hover:bg-[#c49b2e] text-black font-semibold px-8 py-4 text-sm md:text-base shadow-lg shadow-black/25">
                Request Manpower
              </Button>
            </Link>

            {/* Optional secondary action – you can turn this into a link or input later */}
            <div className="w-full sm:w-64 h-11 md:h-12 rounded-md bg-white/95 flex items-center px-4 text-sm text-gray-500">
              View services &amp; categories
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="relative z-10 flex justify-center gap-2 pb-6">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all ${
              index === current ? "w-6 bg-[#d4af37]" : "w-2 bg-white/50 hover:bg-white"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

export default HomeHero
