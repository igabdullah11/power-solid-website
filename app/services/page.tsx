// import { Header } from "@/components/header"
// import { Footer } from "@/components/footer"
// import { Code, Briefcase, HardHat, Shield, TrendingUp, Users } from "lucide-react"
// import Link from "next/link"

// const services = [
//   {
//     icon: Code,
//     title: "Engineering Consulting",
//     description: "Comprehensive engineering consulting services for complex projects",
//     features: ["Design Analysis", "Technical Planning", "Cost Optimization", "Feasibility Studies"],
//   },
//   {
//     icon: Briefcase,
//     title: "Project Management",
//     description: "End-to-end project management ensuring timely delivery",
//     features: ["Scope Management", "Budget Control", "Timeline Planning", "Quality Assurance"],
//   },
//   {
//     icon: HardHat,
//     title: "Construction Services",
//     description: "High-quality construction and building solutions",
//     features: ["Building Construction", "Infrastructure Development", "Site Management", "Equipment Supply"],
//   },
//   {
//     icon: Shield,
//     title: "Safety Management",
//     description: "Comprehensive safety protocols and management",
//     features: ["Risk Assessment", "Safety Training", "Compliance Monitoring", "Incident Prevention"],
//   },
//   {
//     icon: TrendingUp,
//     title: "Quality Assurance",
//     description: "Rigorous quality control processes",
//     features: ["Quality Testing", "Standards Compliance", "Performance Monitoring", "Continuous Improvement"],
//   },
//   {
//     icon: Users,
//     title: "Technical Support",
//     description: "24/7 technical support and maintenance",
//     features: ["Support Services", "Maintenance Plans", "Emergency Response", "Troubleshooting"],
//   },
// ]

// const processSteps = [
//   {
//     number: "1",
//     title: "Consultation",
//     description: "Understanding your needs",
//   },
//   {
//     number: "2",
//     title: "Planning",
//     description: "Strategic approach design",
//   },
//   {
//     number: "3",
//     title: "Execution",
//     description: "Professional implementation",
//   },
//   {
//     number: "4",
//     title: "Support",
//     description: "Ongoing assistance",
//   },
// ]

// export default function ServicesPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Hero Section */}
//       <section className="bg-black py-20 text-white">
//         <div className="container mx-auto px-6 text-center">
//           <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
//           <p className="text-lg text-white/80">Comprehensive solutions designed to meet your unique business needs</p>
//         </div>
//       </section>

//       {/* Services Grid - First Row */}
//       <section className="py-20">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.slice(0, 3).map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white border-t-4 border-[#d4af37] rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
//               >
//                 <div className="w-16 h-16 bg-[#d4af37] rounded-lg flex items-center justify-center mb-6">
//                   <service.icon className="w-8 h-8 text-black" strokeWidth={2} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
//                 <ul className="space-y-3 mb-6">
//                   {service.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-gray-700">
//                       <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-3" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <Link
//                   href="#"
//                   className="inline-flex items-center text-[#d4af37] font-semibold hover:gap-2 transition-all"
//                 >
//                   Learn More
//                   <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Services Grid - Second Row */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-6">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.slice(3, 6).map((service, index) => (
//               <div
//                 key={index}
//                 className="bg-white border-t-4 border-[#d4af37] rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
//               >
//                 <div className="w-16 h-16 bg-[#d4af37] rounded-lg flex items-center justify-center mb-6">
//                   <service.icon className="w-8 h-8 text-black" strokeWidth={2} />
//                 </div>
//                 <h3 className="text-2xl font-bold text-black mb-3">{service.title}</h3>
//                 <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
//                 <ul className="space-y-3 mb-6">
//                   {service.features.map((feature, idx) => (
//                     <li key={idx} className="flex items-center text-gray-700">
//                       <span className="w-2 h-2 bg-[#d4af37] rounded-full mr-3" />
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>
//                 <Link
//                   href="#"
//                   className="inline-flex items-center text-[#d4af37] font-semibold hover:gap-2 transition-all"
//                 >
//                   Learn More
//                   <svg className="ml-1 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                   </svg>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our Process Section */}
//       <section className="py-20 bg-white">
//         <div className="container mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Process</h2>
//             <p className="text-lg text-gray-600">A structured approach to delivering excellence</p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
//             {processSteps.map((step, index) => (
//               <div key={index} className="relative">
//                 <div className="bg-white border-2 border-gray-200 rounded-lg p-8 text-center hover:border-[#d4af37] transition-colors">
//                   <div className="w-16 h-16 bg-[#d4af37] rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-black">
//                     {step.number}
//                   </div>
//                   <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
//                   <p className="text-gray-600">{step.description}</p>
//                 </div>
//                 {index < processSteps.length - 1 && (
//                   <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-[#d4af37] transform -translate-y-1/2" />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Users, HardHat, Shield, Wrench, Truck, Factory } from "lucide-react"

const services = [
  {
    icon: Users,
    title: "Manpower Supply",
    description:
      "Certified Riggers (I, II, III), WPR, Firewatch, Safety Officers, Electricians, Welders, Helpers and full industrial manpower teams.",
  },
  {
    icon: Factory,
    title: "Shutdown & Turnaround Support",
    description:
      "Complete shutdown manpower mobilization for petrochemical plants, refineries and industrial facilities.",
  },
  {
    icon: Wrench,
    title: "Industrial Maintenance Manpower",
    description:
      "Mechanical, electrical and instrumentation manpower for routine and breakdown maintenance.",
  },
  {
    icon: HardHat,
    title: "Mechanical & Civil Contracting",
    description:
      "Piping, structural fabrication, equipment erection, excavation and foundation works.",
  },
  {
    icon: Truck,
    title: "Equipment with Operator",
    description:
      "Cranes, forklifts, manlifts and heavy equipment with certified operators.",
  },
  {
    icon: Shield,
    title: "HSE & Safety Support",
    description:
      "Certified safety officers, permit management, toolbox talks and safety compliance support.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero */}
      <section className="bg-black py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Manpower & Industrial Services
          </h1>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Certified manpower supply, shutdown support and industrial contracting
            services across Saudi Arabia.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border-t-4 border-[#d4af37] rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#d4af37] rounded-lg flex items-center justify-center mb-6">
                  <service.icon className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose Power Solid?</h2>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-gray-700">
            <p>✔ Fast manpower mobilization</p>
            <p>✔ Certified & experienced workforce</p>
            <p>✔ Strict safety & HSE compliance</p>
            <p>✔ 24/7 shutdown manpower availability</p>
            <p>✔ Competitive manpower rates</p>
            <p>✔ Trusted by industrial contractors</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
