import Image from "next/image"

const clients = [
  { name: "Saudi Aramco", logo: "/saudi-aramco-logo.png" },
  { name: "SABIC", logo: "/SABIC-logo.png" },
  { name: "Riyadh Development Company", logo: "/riyadh-development-company-logo.jpg" },
  { name: "Saudi Electric Company", logo: "/saudi-electric-company-logo.jpg" },
  { name: "Saudi Vision 2030", logo: "/saudi-vision-2030-logo.png" },
  { name: "Tadawul Group", logo: "/tadawul-group-logo.jpg" },
]

export function ClientsSection() {
  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#e2e8f0]">
      <div className="container mx-auto px-6">
        {/* Section header - Nesma style */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-[#c9a227]" />
            <span className="text-xs font-semibold tracking-[0.25em] text-[#c9a227] uppercase">
              Our Partners
            </span>
            <div className="h-px w-12 bg-[#c9a227]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4">
            Trusted by <span className="text-[#c9a227]">Industry Leaders</span>
          </h2>
          <p className="text-[#0a1628]/60 max-w-2xl mx-auto text-lg">
            Partnering with leading organizations across Saudi Arabia
          </p>
        </div>

        {/* Clients grid - Nesma style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0 border border-[#e2e8f0] max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group p-8 border-b border-r border-[#e2e8f0] flex items-center justify-center hover:bg-[#f8f9fa] transition-all"
            >
              <div className="relative w-full h-16 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={`${client.name} logo`}
                  width={120}
                  height={64}
                  className="object-contain max-h-16"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badges - Nesma style */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-[#c9a227]" />
            <div>
              <div className="text-sm font-semibold text-[#0a1628]">ISO Certified</div>
              <div className="text-xs text-[#0a1628]/50">Quality Management</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-[#c9a227]" />
            <div>
              <div className="text-sm font-semibold text-[#0a1628]">10+ Years</div>
              <div className="text-xs text-[#0a1628]/50">Industry Experience</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-1 h-8 bg-[#c9a227]" />
            <div>
              <div className="text-sm font-semibold text-[#0a1628]">200+ Projects</div>
              <div className="text-xs text-[#0a1628]/50">Successfully Delivered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
