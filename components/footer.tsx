import Link from "next/link"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-black text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* COMPANY INFO */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/power-solid-logo.png"
                alt="Power Solid Logo"
                width={50}
                height={50}
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold text-white">Power Solid Company</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Power Solid is a trusted manpower supply and industrial contracting
              company providing certified Riggers, WPRs, Firewatchers, Safety
              Officers, Helpers and full shutdown teams for Oil & Gas,
              Petrochemical and Construction projects across Saudi Arabia.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-[#d4af37] font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-white/70 hover:text-[#d4af37] transition-colors text-sm">Home</Link></li>
              <li><Link href="/about-us" className="text-white/70 hover:text-[#d4af37] transition-colors text-sm">About Us</Link></li>
              <li><Link href="/services" className="text-white/70 hover:text-[#d4af37] transition-colors text-sm">Manpower &amp; Services</Link></li>
              <li><Link href="/projects" className="text-white/70 hover:text-[#d4af37] transition-colors text-sm">Projects</Link></li>
              <li><Link href="/certificates" className="text-white/70 hover:text-[#d4af37] transition-colors text-sm">Certificates</Link></li>
              <li><Link href="/contact-us" className="text-white/70 hover:text-[#d4af37] transition-colors text-sm">Contact Us</Link></li>
            </ul>
          </div>

          {/* CORE SERVICES */}
          <div>
            <h3 className="text-[#d4af37] font-semibold mb-4">Core Services</h3>
            <ul className="space-y-2">
              <li className="text-white/70 text-sm">Manpower Supply (Riggers, WPR, Firewatch, Safety)</li>
              <li className="text-white/70 text-sm">Shutdown &amp; Turnaround Support</li>
              <li className="text-white/70 text-sm">Industrial Maintenance Manpower</li>
              <li className="text-white/70 text-sm">Mechanical &amp; Civil Contracting</li>
              <li className="text-white/70 text-sm">Equipment with Operator</li>
            </ul>
          </div>

          {/* CONTACT INFO */}
          <div>
            <h3 className="text-[#d4af37] font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 text-[#d4af37] mt-1 flex-shrink-0" />
                <a
                  href="tel:+966552163720"
                  className="text-white/70 hover:text-[#d4af37] transition-colors text-sm"
                >
                  +966 55 216 3720
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] mt-1 flex-shrink-0" />
                <a
                  href="https://wa.me/966552163720"
                  target="_blank"
                  rel="noreferrer"
                  className="text-white/70 hover:text-[#25D366] transition-colors text-sm"
                >
                  WhatsApp Chat
                </a>
              </li>

              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-[#d4af37] mt-1 flex-shrink-0" />
                <a
                  href="mailto:info@psc-intl.com"
                  className="text-white/70 hover:text-[#d4af37] transition-colors text-sm"
                >
                  info@psc-intl.com
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] mt-1 flex-shrink-0" />
                <span className="text-white/70 text-sm">
                  Jubail Industrial City, Eastern Province, Saudi Arabia
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2025 Power Solid Company. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/privacy" className="hover:text-[#d4af37] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-[#d4af37] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
