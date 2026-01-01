"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useState, useEffect } from "react"

export function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  // Desktop nav links - Nesma style (clean, minimal)
  const navLinkClass = (path: string) =>
    isActive(path)
      ? "text-sm font-medium text-[#c9a227] transition-colors"
      : "text-sm font-medium text-white/90 hover:text-[#c9a227] transition-colors"

  // Mobile nav links
  const mobileNavLinkClass = (path: string) =>
    isActive(path)
      ? "flex items-center px-4 py-3 text-base font-medium text-[#c9a227] bg-[#0f2847] border-l-2 border-[#c9a227]"
      : "flex items-center px-4 py-3 text-base font-medium text-white/80 hover:bg-[#0f2847] hover:text-[#c9a227] transition-colors"

  return (
    <header 
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled 
          ? "bg-[#0a1628]/98 backdrop-blur-md shadow-lg" 
          : "bg-[#0a1628]"
      }`}
    >
      {/* Top bar - like Nesma */}
      <div className="hidden md:block border-b border-white/10">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-end gap-6 py-2 text-xs text-white/60">
            <a href="tel:+966552163720" className="hover:text-[#c9a227] transition-colors">
              +966 55 216 3720
            </a>
            <a href="mailto:info@psc-intl.com" className="hover:text-[#c9a227] transition-colors">
              info@psc-intl.com
            </a>
            <span className="text-white/40">|</span>
            <span>EN</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* LOGO - Nesma style */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/power-solid-logo.png"
              alt="Power Solid Logo"
              width={48}
              height={48}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-lg md:text-xl font-bold text-white tracking-wide">
                POWER SOLID
              </span>
              <span className="text-[10px] md:text-xs text-[#c9a227] uppercase tracking-[0.15em]">
                Manpower & Contracting
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV - Nesma style (clean horizontal) */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/" className={navLinkClass("/")}>
              Home
            </Link>
            <Link href="/about-us" className={navLinkClass("/about-us")}>
              Who We Are
            </Link>
            <Link href="/services" className={navLinkClass("/services")}>
              Our Services
            </Link>
            <Link href="/projects" className={navLinkClass("/projects")}>
              Projects
            </Link>
            <Link href="/certificates" className={navLinkClass("/certificates")}>
              Certifications
            </Link>
            <Link href="/contact-us" className={navLinkClass("/contact-us")}>
              Contact
            </Link>
          </nav>

          {/* DESKTOP CTA - Nesma style */}
          <div className="hidden lg:block">
            <Link href="/contact-us">
              <Button 
                className="bg-[#c9a227] hover:bg-[#a68617] text-[#0a1628] font-semibold px-6 rounded-none transition-all hover:shadow-lg"
              >
                Get Quote
              </Button>
            </Link>
          </div>

          {/* MOBILE MENU */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className="text-white hover:bg-white/10 hover:text-white"
              >
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full max-w-xs bg-[#0a1628] text-white border-l border-[#1a3a5c] p-0 flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center gap-3 px-5 py-5 border-b border-[#1a3a5c]">
                <Image
                  src="/images/power-solid-logo.png"
                  alt="Power Solid Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-base font-bold text-white">Power Solid</span>
                  <span className="text-[10px] text-[#c9a227] uppercase tracking-wider">Manpower & Contracting</span>
                </div>
              </div>

              {/* NAV LINKS */}
              <nav className="flex flex-col py-4">
                <SheetClose asChild>
                  <Link href="/" className={mobileNavLinkClass("/")}>Home</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/about-us" className={mobileNavLinkClass("/about-us")}>Who We Are</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/services" className={mobileNavLinkClass("/services")}>Our Services</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/projects" className={mobileNavLinkClass("/projects")}>Projects</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/certificates" className={mobileNavLinkClass("/certificates")}>Certifications</Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/contact-us" className={mobileNavLinkClass("/contact-us")}>Contact</Link>
                </SheetClose>
              </nav>

              {/* CTA BUTTON */}
              <div className="px-5 py-4 border-t border-[#1a3a5c]">
                <SheetClose asChild>
                  <Link href="/contact-us">
                    <Button className="w-full bg-[#c9a227] hover:bg-[#a68617] text-[#0a1628] font-semibold rounded-none">
                      Request Quote
                    </Button>
                  </Link>
                </SheetClose>
              </div>

              {/* Drawer Footer */}
              <div className="mt-auto px-5 py-5 border-t border-[#1a3a5c] text-xs text-white/60">
                <p className="mb-2">Contact us directly:</p>
                <a href="tel:+966552163720" className="block font-semibold text-white mb-1">
                  +966 55 216 3720
                </a>
                <a href="mailto:info@psc-intl.com" className="text-[#c9a227]">
                  info@psc-intl.com
                </a>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
