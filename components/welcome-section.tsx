import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function WelcomeSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            {/* Section label - Nesma style */}
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12 bg-[#c9a227]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#c9a227] uppercase">
                About Us
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] leading-tight mb-6">
              Empowering Industrial Growth <span className="text-[#c9a227]">Across Saudi Arabia</span>
            </h2>

            <p className="text-lg text-[#0a1628]/70 mb-6 leading-relaxed">
              Power Solid is a manpower and industrial contracting company based 
              in Jubail, Saudi Arabia. We provide certified shutdown and long-term 
              project manpower for oil & gas, petrochemical and construction clients 
              across the Kingdom.
            </p>

            <p className="text-base text-[#0a1628]/60 mb-8 leading-relaxed">
              Our teams include Riggers (I, II, III), Work Permit Receivers, Firewatchers, 
              Safety Officers, helpers and support crews. We are committed to safety, 
              compliance and reliable on-time mobilization for every assignment.
            </p>

            <Link 
              href="/about-us"
              className="inline-flex items-center gap-3 text-[#0f2847] font-semibold group"
            >
              <span className="border-b-2 border-[#c9a227] pb-1">Discover Our Legacy</span>
              <ArrowRight className="w-5 h-5 text-[#c9a227] group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>

          {/* Right content - Key features */}
          <div className="bg-[#0a1628] p-8 md:p-12">
            <h3 className="text-xl font-bold text-white mb-8">
              Why companies choose <span className="text-[#c9a227]">Power Solid</span>
            </h3>

            <div className="space-y-6">
              {[
                { title: "Certified Workforce", desc: "Experienced industrial manpower with valid certifications" },
                { title: "Safety First", desc: "Strong focus on HSE compliance and zero incidents" },
                { title: "Rapid Mobilization", desc: "Fast deployment for shutdown and turnaround projects" },
                { title: "Local Expertise", desc: "Deep presence in Jubail & Eastern Province" },
                { title: "Flexible Solutions", desc: "Contracts tailored for short and long-term needs" },
              ].map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-1 bg-[#c9a227]/30 group-hover:bg-[#c9a227] transition-colors" />
                  <div>
                    <h4 className="font-semibold text-white mb-1">{item.title}</h4>
                    <p className="text-sm text-white/60">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Quick stats */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#c9a227]">10+</div>
                <div className="text-xs text-white/50 mt-1">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#c9a227]">500+</div>
                <div className="text-xs text-white/50 mt-1">Workers</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#c9a227]">200+</div>
                <div className="text-xs text-white/50 mt-1">Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
