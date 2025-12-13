// "use client"

// import Link from "next/link"
// import { Phone, Mail, Menu } from "lucide-react"
// import { Button } from "@/components/ui/button"
// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
// import Image from "next/image"
// import { usePathname } from "next/navigation"

// export function Header() {
//   const pathname = usePathname()

//   const isActive = (path: string) => pathname === path

//   const navLinkClass = (path: string) =>
//     isActive(path)
//       ? "text-sm font-medium text-[#d4af37] border-b-2 border-[#d4af37] pb-1"
//       : "text-sm font-medium text-gray-700 hover:text-[#d4af37] transition-colors"

//   const mobileNavLinkClass = (path: string) =>
//     isActive(path)
//       ? "text-base font-medium text-[#d4af37] border-b-2 border-[#d4af37] pb-2 w-fit"
//       : "text-base font-medium text-gray-700 hover:text-[#d4af37] transition-colors"

//   return (
//     <header className="bg-white border-b">
//       <div className="bg-black text-white py-2 px-4 md:px-6">
//         <div className="container mx-auto flex justify-end items-center gap-3 md:gap-6 text-xs md:text-sm">
//           <a
//             href="tel:+966551429094"
//             className="flex items-center gap-1 md:gap-2 hover:text-[#d4af37] transition-colors"
//           >
//             <Phone className="w-3 h-3 md:w-4 md:h-4" />
//             <span className="hidden sm:inline">+966 55 142 9094</span>
//             <span className="sm:hidden">Call</span>
//           </a>
//           <a
//             href="mailto:info@psc-intl.com"
//             className="flex items-center gap-1 md:gap-2 hover:text-[#d4af37] transition-colors"
//           >
//             <Mail className="w-3 h-3 md:w-4 md:h-4" />
//             <span className="hidden sm:inline">info@psc-intl.com</span>
//             <span className="sm:hidden">Email</span>
//           </a>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 md:px-6 py-4">
//         <div className="flex items-center justify-between">
//           <Link href="/" className="flex items-center gap-2 md:gap-3">
//             <Image
//               src="/images/power-solid-logo.png"
//               alt="Power Solid Logo"
//               width={50}
//               height={50}
//               className="w-10 h-10 md:w-12 md:h-12 object-contain"
//             />
//             <span className="text-lg md:text-xl font-bold text-gray-900">Power Solid</span>
//           </Link>

//           <nav className="hidden md:flex items-center gap-8">
//             <Link href="/" className={navLinkClass("/")}>
//               HOME
//             </Link>
//             <Link href="/about-us" className={navLinkClass("/about-us")}>
//               ABOUT US
//             </Link>
//             <Link href="/services" className={navLinkClass("/services")}>
//               SERVICES
//             </Link>
//             <Link href="/projects" className={navLinkClass("/projects")}>
//               PROJECTS
//             </Link>
//             <Link href="/certificates" className={navLinkClass("/certificates")}>
//               CERTIFICATES
//             </Link>
//             <Link href="/contact-us" className={navLinkClass("/contact-us")}>
//               CONTACT US
//             </Link>
//           </nav>

//           <Sheet>
//             <SheetTrigger asChild className="md:hidden">
//               <Button variant="ghost" size="icon">
//                 <Menu className="w-6 h-6" />
//               </Button>
//             </SheetTrigger>
//             <SheetContent side="right" className="w-[300px]">
//               <nav className="flex flex-col gap-6 mt-8">
//                 <Link href="/" className={mobileNavLinkClass("/")}>
//                   HOME
//                 </Link>
//                 <Link href="/about-us" className={mobileNavLinkClass("/about-us")}>
//                   ABOUT US
//                 </Link>
//                 <Link href="/services" className={mobileNavLinkClass("/services")}>
//                   SERVICES
//                 </Link>
//                 <Link href="/projects" className={mobileNavLinkClass("/projects")}>
//                   PROJECTS
//                 </Link>
//                 <Link href="/certificates" className={mobileNavLinkClass("/certificates")}>
//                   CERTIFICATES
//                 </Link>
//                 <Link href="/contact-us" className={mobileNavLinkClass("/contact-us")}>
//                   CONTACT US
//                 </Link>
//               </nav>
//             </SheetContent>
//           </Sheet>
//         </div>
//       </div>
//     </header>
//   )
// }

// export default Header
"use client"

import Link from "next/link"
import { Phone, Mail, Menu, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"
import Image from "next/image"
import { usePathname } from "next/navigation"

export function Header() {
  const pathname = usePathname()

  const isActive = (path: string) => pathname === path

  // Desktop nav links
  const navLinkClass = (path: string) =>
    isActive(path)
      ? "text-sm font-semibold text-[#d4af37] border-b-2 border-[#d4af37] pb-1"
      : "text-sm font-medium text-gray-800 hover:text-[#d4af37] transition-colors"

  // ✅ Mobile nav links (drawer)
  const mobileNavLinkClass = (path: string) =>
    isActive(path)
      ? "flex items-center justify-between rounded-lg bg-white/10 px-3 py-2 text-base font-semibold text-[#f4d27a]"
      : "flex items-center rounded-lg px-3 py-2 text-base font-medium text-white/80 hover:bg-white/10 hover:text-[#f4d27a] transition-colors"

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      {/* TOP CONTACT BAR */}
      <div className="bg-black text-white py-2 px-4 md:px-6">
        <div className="container mx-auto flex justify-between items-center gap-3 md:gap-6 text-xs md:text-sm">
          <div className="hidden md:block text-white/80">
            Manpower & Industrial Contracting • Saudi Arabia
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:+966552163720"
              className="flex items-center gap-1 md:gap-2 hover:text-[#d4af37] transition-colors"
            >
              <Phone className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">+966 55 216 3720</span>
              <span className="sm:hidden">Call</span>
            </a>

            <a
              href="https://wa.me/966552163720"
              target="_blank"
              className="flex items-center gap-1 md:gap-2 text-[#25D366] hover:opacity-80 transition"
            >
              <MessageCircle className="w-3 h-3 md:w-4 md:h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>

            <a
              href="mailto:info@psc-intl.com"
              className="hidden sm:flex items-center gap-1 md:gap-2 hover:text-[#d4af37] transition-colors"
            >
              <Mail className="w-3 h-3 md:w-4 md:h-4" />
              <span>info@psc-intl.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* MAIN HEADER */}
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex items-center justify-between flex-wrap gap-y-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2 md:gap-3">
            <Image
              src="/images/power-solid-logo.png"
              alt="Power Solid Logo"
              width={50}
              height={50}
              className="w-10 h-10 md:w-12 md:h-12 object-contain"
            />
            <div className="flex flex-col leading-tight whitespace-nowrap">
              <span className="text-lg md:text-xl font-bold text-gray-900">
                POWER SOLID
              </span>
              <span className="text-xs text-gray-600">
                Manpower &amp; Contracting
              </span>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-6 flex-wrap justify-center">
            <Link href="/" className={navLinkClass("/")}>Home</Link>
            <Link href="/about-us" className={navLinkClass("/about-us")}>About</Link>
            <Link href="/services" className={navLinkClass("/services")}>Manpower &amp; Services</Link>
            <Link href="/projects" className={navLinkClass("/projects")}>Projects</Link>
            <Link href="/certificates" className={navLinkClass("/certificates")}>Certificates</Link>
            <Link href="/contact-us" className={navLinkClass("/contact-us")}>Contact</Link>
          </nav>

          {/* DESKTOP CTA */}
          <div className="hidden md:block">
            <Link href="/contact-us">
              <Button className="bg-[#d4af37] hover:bg-[#c49b2e] text-black font-semibold">
                Request Manpower
              </Button>
            </Link>
          </div>

          {/* ✅ MOBILE MENU */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>

            <SheetContent
              side="right"
              className="w-full max-w-xs sm:max-w-sm bg-[#050509] text-white border-l border-white/10 px-0 pt-0 pb-6 flex flex-col"
            >
              {/* Drawer Header */}
              <div className="flex items-center gap-3 px-5 pt-5 pb-4 border-b border-white/10">
                <Image
                  src="/images/power-solid-logo.png"
                  alt="Power Solid Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 object-contain"
                />
                <div className="flex flex-col leading-tight">
                  <span className="text-base font-semibold">Power Solid</span>
                  <span className="text-xs text-white/60">Manpower &amp; Contracting</span>
                </div>
              </div>

              {/* ✅ NAV LINKS WITH AUTO CLOSE */}
              <nav className="flex flex-col gap-1 px-5 pt-4">
                <SheetClose asChild><Link href="/" className={mobileNavLinkClass("/")}>Home</Link></SheetClose>
                <SheetClose asChild><Link href="/about-us" className={mobileNavLinkClass("/about-us")}>About</Link></SheetClose>
                <SheetClose asChild><Link href="/services" className={mobileNavLinkClass("/services")}>Manpower &amp; Services</Link></SheetClose>
                <SheetClose asChild><Link href="/projects" className={mobileNavLinkClass("/projects")}>Projects</Link></SheetClose>
                <SheetClose asChild><Link href="/certificates" className={mobileNavLinkClass("/certificates")}>Certificates</Link></SheetClose>
                <SheetClose asChild><Link href="/contact-us" className={mobileNavLinkClass("/contact-us")}>Contact</Link></SheetClose>
              </nav>

              {/* ✅ CTA BUTTON */}
              <div className="mt-6 px-5">
                <SheetClose asChild>
                  <Link href="/contact-us">
                    <Button className="w-full bg-[#d4af37] hover:bg-[#c49b2e] text-black font-semibold">
                      Request Manpower
                    </Button>
                  </Link>
                </SheetClose>
              </div>

              {/* Footer Info */}
              <div className="mt-auto px-5 pt-5 border-t border-white/10 text-xs text-white/60">
                <p>Urgent requirement? WhatsApp us at</p>
                <p className="font-semibold text-white mt-1">+966 55 216 3720</p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

export default Header
