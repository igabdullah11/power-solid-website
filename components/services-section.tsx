// import { Card, CardContent } from "@/components/ui/card"
// import { Settings, TrendingUp, HardHat, Wrench, CheckCircle, Shield } from "lucide-react"
// import { ArrowRight } from "lucide-react"
// import Link from "next/link"

// const services = [
//   {
//     icon: Settings,
//     title: "Engineering Consulting",
//     description: "Expert engineering solutions for complex projects",
//   },
//   {
//     icon: TrendingUp,
//     title: "Project Management",
//     description: "Professional project oversight and execution",
//   },
//   {
//     icon: HardHat,
//     title: "Construction Services",
//     description: "High-quality construction and building solutions",
//   },
//   {
//     icon: Wrench,
//     title: "Technical Support",
//     description: "24/7 technical support and maintenance services",
//   },
//   {
//     icon: CheckCircle,
//     title: "Quality Assurance",
//     description: "Rigorous quality control and assurance processes",
//   },
//   {
//     icon: Shield,
//     title: "Safety Management",
//     description: "Comprehensive safety management protocols",
//   },
// ]

// export function ServicesSection() {
//   return (
//     <section className="py-20 bg-background">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-12">
//           <div className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">OUR SERVICES</div>
//           <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Provides High Performance</h2>
//           <div className="w-16 h-1 bg-primary mx-auto mb-4" />
//           <p className="text-muted-foreground text-lg">Services For Multiple Industries</p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {services.map((service, index) => (
//             <Card key={index} className="group hover:shadow-lg transition-shadow border-border">
//               <CardContent className="p-6">
//                 <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
//                   <service.icon className="w-7 h-7 text-primary-foreground" strokeWidth={1.5} />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
//                 <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>
//                 <Link
//                   href="/services"
//                   className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
//                 >
//                   Learn More
//                   <ArrowRight className="ml-1 w-4 h-4" />
//                 </Link>
//               </CardContent>
//             </Card>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  HardHat,
  Shield,
  Wrench,
  Truck,
  Factory,
} from "lucide-react"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Users,
    title: "Manpower Supply",
    description:
      "Certified Riggers (I, II, III), WPRs, Firewatchers, Safety Officers, Electricians, Welders, Helpers and full industrial manpower teams for short & long-term projects.",
  },
  {
    icon: Factory,
    title: "Shutdown & Turnaround Support",
    description:
      "Rapid mobilization of large manpower teams for plant shutdowns, turnarounds and emergency maintenance across Jubail and Eastern Province.",
  },
  {
    icon: Wrench,
    title: "Industrial Maintenance",
    description:
      "Mechanical, electrical and instrumentation manpower support for routine, preventive and breakdown maintenance in industrial plants.",
  },
  {
    icon: HardHat,
    title: "Mechanical & Civil Contracting",
    description:
      "Piping, structural fabrication, equipment erection, excavation, foundation and general industrial construction services.",
  },
  {
    icon: Truck,
    title: "Equipment with Operator",
    description:
      "Cranes, forklifts, manlifts, boom trucks, generators and air compressors provided with certified operators and safety documents.",
  },
  {
    icon: Shield,
    title: "HSE & Safety Support",
    description:
      "Certified safety officers, permit management, site supervision, toolbox talks, safety compliance and accident-free operations.",
  },
]

export function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="text-primary text-sm font-semibold uppercase tracking-wider mb-3">
            OUR CORE SERVICES
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Complete Manpower & Industrial Solutions
          </h2>

          <div className="w-16 h-1 bg-primary mx-auto mb-4" />

          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Power Solid supplies certified manpower and delivers industrial
            contracting solutions for oil & gas, petrochemical, construction
            and maintenance projects across Saudi Arabia.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all border-border"
            >
              <CardContent className="p-6">
                <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center mb-4">
                  <service.icon
                    className="w-7 h-7 text-primary-foreground"
                    strokeWidth={1.5}
                  />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>

                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {service.description}
                </p>

                <Link
                  href="/services"
                  className="inline-flex items-center text-primary font-medium text-sm group-hover:gap-2 transition-all"
                >
                  View Details
                  <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
