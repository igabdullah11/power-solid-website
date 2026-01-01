"use client"

import Link from "next/link"
import Image from "next/image"
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from "react"
import { usePathname } from "next/navigation"
import { ChevronDown, Plus } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLanguage } from "@/components/language-provider"
import { pickLang } from "@/lib/i18n"

export function Header() {
  const pathname = usePathname()
  const isHome = pathname === "/"
  const [scrolled, setScrolled] = useState(false)
  const [collapsed, setCollapsed] = useState(true)

  const { lang, isArabic, toggleLang } = useLanguage()

  const containerRef = useRef<HTMLDivElement | null>(null)
  const measureLeftRef = useRef<HTMLDivElement | null>(null)
  const measureRightRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => pathname === path

  const navLinks = useMemo(
    () => [
      { href: "/about-us", label: { en: "About Us", ar: "من نحن" } },
      { href: "/projects", label: { en: "Our Projects", ar: "مشاريعنا" } },
      { href: "/services", label: { en: "Our Services", ar: "خدماتنا" } },
      { href: "/certificates", label: { en: "Certifications", ar: "الشهادات" } },
      { href: "/", label: { en: "Home", ar: "الرئيسية" } },
    ],
    [],
  )

  const navLinkClass = (path: string) =>
    isActive(path)
      ? "text-xs font-semibold text-accent uppercase tracking-wide flex items-center gap-1 transition-colors"
      : "text-xs font-semibold text-foreground uppercase tracking-wide flex items-center gap-1 hover:text-accent transition-colors"

  const mobileNavLinkClass = (path: string) =>
    isActive(path)
      ? "flex items-center px-4 py-3 text-base font-medium text-accent bg-primary border-l-2 border-accent"
      : "flex items-center px-4 py-3 text-base font-medium text-white/80 hover:bg-primary hover:text-accent transition-colors"

  const transparentTopRoutes = useMemo(
    () => new Set(["/", "/about-us", "/services", "/projects", "/certificates", "/contact-us"]),
    [],
  )

  const shouldBeTransparentAtTop = !scrolled && transparentTopRoutes.has(pathname)

  const headerClassName =
    "fixed top-0 z-50 w-full transition-colors duration-300 " +
    (shouldBeTransparentAtTop
      ? "bg-transparent"
      : "bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75 border-b border-border")

  const desktopTopTextClass = shouldBeTransparentAtTop ? "text-white" : "text-foreground"

  useLayoutEffect(() => {
    const recalc = () => {
      if (!containerRef.current || !measureLeftRef.current || !measureRightRef.current) return

      const containerWidth = containerRef.current.clientWidth
      const leftNeeded = measureLeftRef.current.scrollWidth
      const rightNeeded = measureRightRef.current.scrollWidth

      // small buffer to prevent edge-case jitter right at the boundary
      const nextCollapsed = leftNeeded + rightNeeded + 12 > containerWidth
      setCollapsed(nextCollapsed)
    }

    recalc()

    const ro = new ResizeObserver(() => recalc())
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [navLinks.length, lang])

  return (
    <header className={headerClassName}>
      <div className="container mx-auto px-4 md:px-6">
        <div ref={containerRef} className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center gap-4">
            <Sheet>
              <div className="flex items-center flex-shrink-0 rounded-2xl bg-background border border-border shadow-sm px-2 py-1 gap-2">
                <Link
                  href="/"
                  aria-label="Go to homepage"
                  className="size-10 md:size-11 rounded-xl flex items-center justify-center"
                >
                  <Image
                    src="/images/power-solid-logo.png"
                    alt="Power Solid Logo"
                    width={44}
                    height={44}
                    className="w-7 h-7 md:w-8 md:h-8 object-contain"
                  />
                </Link>

                {/* Collapse trigger — only shows when nav would overlap right controls */}
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    aria-label="Open menu"
                    className={
                      "size-10 md:size-11 rounded-xl bg-navy-dark text-white hover:bg-primary hover:text-white " +
                      (collapsed ? "inline-flex" : "hidden")
                    }
                  >
                    <Plus className="size-5" />
                  </Button>
                </SheetTrigger>
              </div>

                <SheetContent
                  side="right"
                  className="w-full max-w-xs bg-navy-dark text-white border-l border-navy-light p-0 flex flex-col"
                >
                  <div className="flex items-center gap-3 px-5 py-5 border-b border-navy-light">
                    <Image
                      src="/images/power-solid-logo.png"
                      alt="Power Solid Logo"
                      width={40}
                      height={40}
                      className="w-10 h-10 object-contain"
                    />
                    <div className="flex flex-col leading-tight">
                      <span className="text-base font-bold text-white">Power Solid</span>
                      <span className="text-[10px] text-accent uppercase tracking-wider">
                        {pickLang(lang, { en: "Manpower & Contracting", ar: "القوى العاملة والمقاولات" })}
                      </span>
                    </div>
                  </div>

                  <nav className="flex flex-col py-4">
                    <SheetClose asChild>
                      <Link href="/" className={mobileNavLinkClass("/")}>{pickLang(lang, { en: "Home", ar: "الرئيسية" })}</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/about-us" className={mobileNavLinkClass("/about-us")}>{pickLang(lang, { en: "About Us", ar: "من نحن" })}</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/services" className={mobileNavLinkClass("/services")}>{pickLang(lang, { en: "Our Services", ar: "خدماتنا" })}</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/projects" className={mobileNavLinkClass("/projects")}>{pickLang(lang, { en: "Our Projects", ar: "مشاريعنا" })}</Link>
                    </SheetClose>
                    <SheetClose asChild>
                      <Link href="/certificates" className={mobileNavLinkClass("/certificates")}>{pickLang(lang, { en: "Certifications", ar: "الشهادات" })}</Link>
                    </SheetClose>
                  </nav>

                  <div className="px-5 py-4 border-t border-navy-light">
                    <SheetClose asChild>
                      <Link href="/contact-us">
                        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold rounded-full">
                          {pickLang(lang, { en: "Contact Us", ar: "تواصل معنا" })}
                        </Button>
                      </Link>
                    </SheetClose>
                  </div>

                  <div className="mt-auto px-5 py-5 border-t border-navy-light text-xs text-white/60">
                    <p className="mb-2">{pickLang(lang, { en: "Contact us directly:", ar: "تواصل معنا مباشرة:" })}</p>
                    <a href="tel:+966552163720" className="block font-semibold text-white mb-1">
                      +966 55 216 3720
                    </a>
                    <a href="mailto:info@psc-intl.com" className="text-accent">
                      info@psc-intl.com
                    </a>
                  </div>
                </SheetContent>
            </Sheet>

            <nav
              className={
                "items-center gap-6 bg-background/95 border border-border rounded-full px-6 py-3 shadow-sm " +
                (collapsed ? "hidden" : "hidden lg:flex")
              }
            >
              {navLinks.map((item) => (
                <Link key={item.href} href={item.href} className={navLinkClass(item.href)}>
                  {pickLang(lang, item.label)}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-3 sm:gap-6">
            <button
              type="button"
              onClick={toggleLang}
              className={`text-xs sm:text-sm font-medium transition-colors ${desktopTopTextClass} hover:text-accent`}
            >
              {isArabic ? "English" : "العربية"}
            </button>

            <Link href="/contact-us">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-4 sm:px-6 py-2 rounded-full uppercase text-[11px] sm:text-xs tracking-wide transition-all">
                {pickLang(lang, { en: "Contact Us", ar: "تواصل معنا" })}
              </Button>
            </Link>
          </div>
        </div>

        {/* Offscreen measurement row: determines when nav would overlap the right controls */}
        <div className="absolute -left-[9999px] top-0 h-0 overflow-hidden whitespace-nowrap" aria-hidden>
          <div className="flex items-center justify-between">
            <div ref={measureLeftRef} className="flex items-center gap-4">
              <div className="flex items-center flex-shrink-0 rounded-2xl bg-background border border-border shadow-sm px-2 py-1 gap-2">
                <div className="size-10 md:size-11 rounded-xl flex items-center justify-center">
                  <Image
                    src="/images/power-solid-logo.png"
                    alt=""
                    width={44}
                    height={44}
                    className="w-7 h-7 md:w-8 md:h-8 object-contain"
                  />
                </div>
              </div>

              <nav className="flex items-center gap-6 bg-background/95 border border-border rounded-full px-6 py-3 shadow-sm">
                {navLinks.map((item) => (
                  <div key={item.href} className={navLinkClass(item.href)}>
                    {pickLang(lang, item.label)}
                  </div>
                ))}
              </nav>
            </div>

            <div ref={measureRightRef} className="flex items-center gap-3 sm:gap-6">
              <div className={`text-xs sm:text-sm font-medium ${desktopTopTextClass}`}>{isArabic ? "English" : "العربية"}</div>
              <div className="inline-flex bg-accent text-accent-foreground font-semibold px-4 sm:px-6 py-2 rounded-full uppercase text-[11px] sm:text-xs tracking-wide">
                {pickLang(lang, { en: "Contact Us", ar: "تواصل معنا" })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
