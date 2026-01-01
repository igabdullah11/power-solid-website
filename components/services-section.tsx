import { Card, CardContent } from "@/components/ui/card"
import { Users, HardHat, Shield, Wrench, Truck, Factory } from "lucide-react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Users,
    title: "Manpower Supply",
    description:
      "Certified Riggers (I, II, III), WPRs, Firewatchers, Safety Officers, Electricians, Welders, Helpers and full industrial manpower teams.",
  },
  {
    icon: Factory,
    title: "Shutdown & Turnaround",
    description:
      "Rapid mobilization of large manpower teams for plant shutdowns, turnarounds and emergency maintenance.",
  },
  {
    icon: Wrench,
    title: "Industrial Maintenance",
    description:
      "Mechanical, electrical and instrumentation manpower support for routine, preventive and breakdown maintenance.",
  },
  {
    icon: HardHat,
    title: "Mechanical & Civil",
    description:
      "Piping, structural fabrication, equipment erection, excavation, foundation and general construction.",
  },
  {
    icon: Truck,
    title: "Equipment with Operator",
    description:
      "Cranes, forklifts, manlifts, boom trucks, generators and air compressors with certified operators.",
  },
  {
    icon: Shield,
    title: "HSE & Safety Support",
    description:
      "Certified safety officers, permit management, site supervision, toolbox talks and compliance.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        {/* Section header - Nesma style */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#c9a227]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#c9a227] uppercase">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628] mb-4">
              A Dynamic Network of <br className="hidden lg:block" />
              <span className="text-[#c9a227]">Expertise & Solutions</span>
            </h2>
            <p className="text-[#0a1628]/70 text-lg">
              Complete manpower and industrial contracting solutions for oil & gas, 
              petrochemical, construction and maintenance projects across Saudi Arabia.
            </p>
          </div>

          <Link 
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#0f2847] text-white font-medium hover:bg-[#0a1628] transition-colors group"
          >
            View All Services
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Services grid - Nesma style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border border-[#e2e8f0]">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 border-b border-r border-[#e2e8f0] hover:bg-[#f8f9fa] transition-all relative"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-[#0f2847] flex items-center justify-center mb-6 group-hover:bg-[#c9a227] transition-colors">
                <service.icon className="w-7 h-7 text-white" strokeWidth={1.5} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-[#0a1628] mb-3 group-hover:text-[#0f2847]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-[#0a1628]/60 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Learn more link */}
              <Link
                href="/services"
                className="inline-flex items-center text-sm font-medium text-[#0f2847] hover:text-[#c9a227] group-hover:gap-2 transition-all"
              >
                Learn More
                <ArrowRight className="ml-1 w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>

              {/* Accent line on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#c9a227] group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
