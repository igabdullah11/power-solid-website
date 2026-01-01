// "use client"

// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import { Button } from "@/components/ui/button"
// import Image from "next/image"
// import { useState } from "react"

// const projects = [
//   {
//     id: 1,
//     title: "SABIC Petrochemical Plant Expansion",
//     category: "Industrial",
//     client: "SABIC",
//     location: "Al Jubail, Saudi Arabia",
//     year: "2023",
//     description:
//       "Complete plant expansion including mechanical, electrical, and instrumentation works for petrochemical production facility.",
//     image: "/industrial-petrochemical-plant-construction.jpg",
//     scope: ["Mechanical Installation", "Electrical Works", "Instrumentation", "Testing & Commissioning"],
//     value: "$15M+",
//   },
//   {
//     id: 7,
//     title: "SABIC Chemical Processing Unit Upgrade",
//     category: "Industrial",
//     client: "SABIC",
//     location: "Yanbu, Saudi Arabia",
//     year: "2023",
//     description:
//       "Major upgrade of chemical processing units including reactor vessels, heat exchangers, and control systems modernization.",
//     image: "/chemical-processing-plant-upgrade.jpg",
//     scope: ["Equipment Replacement", "Control System Upgrade", "Safety Enhancement", "Process Optimization"],
//     value: "$22M+",
//   },
//   {
//     id: 2,
//     title: "ARAMCO Pipeline Installation Project",
//     category: "Oil & Gas",
//     client: "Saudi Aramco",
//     location: "Eastern Province, Saudi Arabia",
//     year: "2023",
//     description: "Installation of 50km oil and gas pipeline system including all associated facilities and testing.",
//     image: "/oil-pipeline-construction-saudi-arabia.jpg",
//     scope: ["Pipeline Installation", "Welding & Testing", "Coating & Protection", "Commissioning"],
//     value: "$25M+",
//   },
//   {
//     id: 8,
//     title: "ARAMCO Gas Compression Station",
//     category: "Oil & Gas",
//     client: "Saudi Aramco",
//     location: "Dhahran, Saudi Arabia",
//     year: "2022",
//     description:
//       "Construction of natural gas compression station with multiple compressor trains and associated infrastructure.",
//     image: "/gas-compression-station.jpg",
//     scope: ["Compressor Installation", "Piping Systems", "Electrical & Control", "HVAC Systems"],
//     value: "$28M+",
//   },
//   {
//     id: 3,
//     title: "Saudi Electric Company Substation",
//     category: "Power & Utilities",
//     client: "Saudi Electric Company",
//     location: "Riyadh, Saudi Arabia",
//     year: "2022",
//     description: "Construction and commissioning of 380kV substation including civil, electrical, and control systems.",
//     image: "/electrical-substation-construction.jpg",
//     scope: ["Civil Works", "HV Equipment Installation", "Control Systems", "Testing"],
//     value: "$12M+",
//   },
//   {
//     id: 9,
//     title: "Power Distribution Network Expansion",
//     category: "Power & Utilities",
//     client: "Saudi Electric Company",
//     location: "Jeddah, Saudi Arabia",
//     year: "2023",
//     description:
//       "Expansion of urban power distribution network including underground cables, transformers, and smart grid integration.",
//     image: "/power-distribution-network.jpg",
//     scope: ["Underground Cabling", "Transformer Installation", "Smart Grid Systems", "Network Integration"],
//     value: "$16M+",
//   },
//   {
//     id: 4,
//     title: "Vision 2030 Infrastructure Development",
//     category: "Infrastructure",
//     client: "Riyadh Development Company",
//     location: "Riyadh, Saudi Arabia",
//     year: "2022",
//     description:
//       "Major infrastructure development including roads, utilities, and support facilities for Vision 2030 projects.",
//     image: "/modern-infrastructure-construction-saudi-arabia.jpg",
//     scope: ["Road Construction", "Utility Installation", "Site Development", "Project Management"],
//     value: "$20M+",
//   },
//   {
//     id: 10,
//     title: "NEOM Smart City Infrastructure",
//     category: "Infrastructure",
//     client: "NEOM Project",
//     location: "NEOM, Saudi Arabia",
//     year: "2023",
//     description:
//       "Development of smart city infrastructure including fiber optic networks, water systems, and sustainable energy distribution.",
//     image: "/neom-smart-city-infrastructure.jpg",
//     scope: ["Fiber Optic Network", "Water Distribution", "Energy Systems", "Smart Technology Integration"],
//     value: "$35M+",
//   },
//   {
//     id: 5,
//     title: "SABIC Plant Maintenance & Turnaround",
//     category: "Maintenance",
//     client: "SABIC",
//     location: "Al Jubail, Saudi Arabia",
//     year: "2022",
//     description: "Major plant turnaround including maintenance, repair, and upgrade of critical production equipment.",
//     image: "/industrial-plant-maintenance-workers.jpg",
//     scope: ["Shutdown Management", "Equipment Overhaul", "Piping Replacement", "Safety Systems Upgrade"],
//     value: "$8M+",
//   },
//   {
//     id: 11,
//     title: "ARAMCO Refinery Turnaround Project",
//     category: "Maintenance",
//     client: "Saudi Aramco",
//     location: "Ras Tanura, Saudi Arabia",
//     year: "2023",
//     description:
//       "Comprehensive refinery turnaround including catalyst replacement, vessel inspection, and process unit optimization.",
//     image: "/refinery-turnaround-maintenance.jpg",
//     scope: ["Catalyst Replacement", "Vessel Inspection", "Piping Maintenance", "Equipment Calibration"],
//     value: "$10M+",
//   },
//   {
//     id: 6,
//     title: "Tadawul Group Commercial Complex",
//     category: "Commercial",
//     client: "Tadawul Group",
//     location: "Jeddah, Saudi Arabia",
//     year: "2021",
//     description: "Construction of commercial office complex with modern facilities and sustainable design features.",
//     image: "/modern-commercial-construction.png",
//     scope: ["Structural Works", "MEP Installation", "Interior Fit-out", "Landscape Development"],
//     value: "$18M+",
//   },
//   {
//     id: 12,
//     title: "Riyadh Business District Tower",
//     category: "Commercial",
//     client: "Saudi Real Estate Company",
//     location: "Riyadh, Saudi Arabia",
//     year: "2023",
//     description:
//       "Construction of 40-story business tower featuring state-of-the-art facilities, energy-efficient systems, and premium finishes.",
//     image: "/business-tower-construction.jpg",
//     scope: ["High-Rise Construction", "Facade Engineering", "MEP Systems", "Premium Fit-out"],
//     value: "$45M+",
//   },
// ]

// const categories = [
//   "All",
//   "Industrial",
//   "Oil & Gas",
//   "Power & Utilities",
//   "Infrastructure",
//   "Maintenance",
//   "Commercial",
// ]

// export default function ProjectsPage() {
//   const [activeFilter, setActiveFilter] = useState("All")

//   const filteredProjects =
//     activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

//   return (
//     <div className="min-h-screen bg-background">
//       <Header />

//       {/* Hero Section */}
//       <section className="relative bg-black text-white py-24">
//         <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40 z-10" />
//         <Image src="/construction-projects-overview-aerial.jpg" alt="Projects" fill className="object-cover" priority />
//         <div className="container mx-auto px-4 relative z-20 text-center">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Our Projects</h1>
//           <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
//             Delivering excellence across diverse industries with innovative engineering solutions
//           </p>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-12 bg-gray-50 border-b">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <div className="text-center">
//               <div className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2">150+</div>
//               <div className="text-gray-600 font-medium">Projects Completed</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2">$500M+</div>
//               <div className="text-gray-600 font-medium">Total Project Value</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2">98%</div>
//               <div className="text-gray-600 font-medium">On-Time Delivery</div>
//             </div>
//             <div className="text-center">
//               <div className="text-4xl md:text-5xl font-bold text-[#d4af37] mb-2">25+</div>
//               <div className="text-gray-600 font-medium">Industry Awards</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Filter Section */}
//       <section className="py-12 bg-white border-b">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-wrap gap-3 justify-center">
//             {categories.map((category) => (
//               <Button
//                 key={category}
//                 onClick={() => setActiveFilter(category)}
//                 variant={category === activeFilter ? "default" : "outline"}
//                 className={
//                   category === activeFilter
//                     ? "bg-[#d4af37] hover:bg-[#c19b2e] text-black"
//                     : "hover:border-[#d4af37] hover:text-[#d4af37]"
//                 }
//               >
//                 {category}
//               </Button>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Projects Grid */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           {filteredProjects.length === 0 ? (
//             <div className="text-center py-16">
//               <p className="text-gray-500 text-lg">No projects found in this category.</p>
//             </div>
//           ) : (
//             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//               {filteredProjects.map((project) => (
//                 <div
//                   key={project.id}
//                   className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-[#d4af37]"
//                 >
//                   {/* Project Image */}
//                   <div className="relative h-64 overflow-hidden">
//                     <Image
//                       src={project.image || "/placeholder.svg"}
//                       alt={project.title}
//                       fill
//                       className="object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                     <div className="absolute top-4 left-4">
//                       <span className="bg-[#d4af37] text-black px-3 py-1 rounded-full text-sm font-semibold">
//                         {project.category}
//                       </span>
//                     </div>
//                     <div className="absolute top-4 right-4">
//                       <span className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-semibold">
//                         {project.year}
//                       </span>
//                     </div>
//                   </div>

//                   {/* Project Info */}
//                   <div className="p-6">
//                     <h3 className="text-xl font-bold mb-2 group-hover:text-[#d4af37] transition-colors">
//                       {project.title}
//                     </h3>

//                     <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
//                         />
//                       </svg>
//                       <span className="font-medium">{project.client}</span>
//                     </div>

//                     <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
//                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                         />
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           strokeWidth={2}
//                           d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                         />
//                       </svg>
//                       <span>{project.location}</span>
//                     </div>

//                     <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>

//                     <div className="mb-4">
//                       <div className="text-sm font-semibold text-gray-700 mb-2">Project Scope:</div>
//                       <div className="flex flex-wrap gap-2">
//                         {project.scope.slice(0, 2).map((item, index) => (
//                           <span key={index} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
//                             {item}
//                           </span>
//                         ))}
//                         {project.scope.length > 2 && (
//                           <span className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
//                             +{project.scope.length - 2} more
//                           </span>
//                         )}
//                       </div>
//                     </div>

//                     <div className="flex items-center justify-between pt-4 border-t">
//                       <span className="text-[#d4af37] font-bold text-lg">{project.value}</span>
//                       <Button variant="ghost" className="text-[#d4af37] hover:text-[#c19b2e] hover:bg-[#d4af37]/10">
//                         View Details
//                         <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
//                         </svg>
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-16 bg-black text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Next Project?</h2>
//           <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
//             {
//               "Let's discuss how Power Solid can bring your vision to life with our expertise and commitment to excellence"
//             }
//           </p>
//           <Button className="bg-[#d4af37] hover:bg-[#c19b2e] text-black font-semibold px-8 py-6 text-lg">
//             Contact Us Today
//           </Button>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
"use client"

import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useState } from "react"
import { useLanguage } from "@/components/language-provider"
import { pickLang } from "@/lib/i18n"

type CategoryKey =
  | "all"
  | "shutdown"
  | "oil_gas"
  | "power_utilities"
  | "infrastructure"
  | "maintenance"
  | "commercial"

const categories: Array<{ key: CategoryKey; label: { en: string; ar: string } }> = [
  { key: "all", label: { en: "All", ar: "الكل" } },
  { key: "shutdown", label: { en: "Shutdown", ar: "الإيقاف" } },
  { key: "oil_gas", label: { en: "Oil & Gas", ar: "النفط والغاز" } },
  { key: "power_utilities", label: { en: "Power & Utilities", ar: "الطاقة والمرافق" } },
  { key: "infrastructure", label: { en: "Infrastructure", ar: "البنية التحتية" } },
  { key: "maintenance", label: { en: "Maintenance", ar: "الصيانة" } },
  { key: "commercial", label: { en: "Commercial", ar: "تجاري" } },
]

const projects: Array<{
  id: number
  title: { en: string; ar: string }
  category: CategoryKey
  client: { en: string; ar: string }
  location: { en: string; ar: string }
  year: string
  description: { en: string; ar: string }
  image: string
  scope: Array<{ en: string; ar: string }>
}> = [
  {
    id: 1,
    title: {
      en: "Petrochemical Plant Shutdown Manpower",
      ar: "توريد عمالة لإيقاف مصنع بتروكيماويات",
    },
    category: "shutdown",
    client: { en: "SABIC Contractor (Subcontract)", ar: "مقاول سابك (مقاول فرعي)" },
    location: { en: "Jubail Industrial City", ar: "مدينة الجبيل الصناعية" },
    year: "2023",
    description: {
      en: "Supply of certified Riggers, WPRs, Firewatchers and Safety Officers for a major plant shutdown and turnaround operation.",
      ar: "توريد رافعات معتمدة ومستلمي تصاريح العمل (WPR) ومراقبي الحريق ومسؤولي السلامة لدعم إيقاف وتوقف رئيسي للمصنع.",
    },
    image: "/industrial-plant-maintenance-workers.jpg",
    scope: [
      { en: "Riggers I, II, III", ar: "رافعات I وII وIII" },
      { en: "WPR", ar: "WPR" },
      { en: "Firewatch", ar: "مراقب حريق" },
      { en: "Safety Officers", ar: "مسؤولو السلامة" },
    ],
  },
  {
    id: 2,
    title: {
      en: "Oil & Gas Pipeline Maintenance Workforce",
      ar: "عمالة صيانة خطوط أنابيب النفط والغاز",
    },
    category: "oil_gas",
    client: { en: "Aramco Approved Contractor", ar: "مقاول معتمد لدى أرامكو" },
    location: { en: "Eastern Province, Saudi Arabia", ar: "المنطقة الشرقية، المملكة العربية السعودية" },
    year: "2023",
    description: {
      en: "Provision of skilled mechanical manpower for pipeline maintenance, welding assistance, and safety supervision.",
      ar: "توفير عمالة ميكانيكية ماهرة لصيانة خطوط الأنابيب، دعم أعمال اللحام والإشراف على السلامة.",
    },
    image: "/oil-pipeline-construction-saudi-arabia.jpg",
    scope: [
      { en: "Mechanical helpers", ar: "مساعدون ميكانيكيون" },
      { en: "Safety Officers", ar: "مسؤولو السلامة" },
      { en: "Welders", ar: "لحّامون" },
      { en: "Riggers", ar: "رافعات" },
    ],
  },
  {
    id: 3,
    title: { en: "Power Substation Maintenance Support", ar: "دعم صيانة محطة كهرباء فرعية" },
    category: "power_utilities",
    client: { en: "Power Sector Contractor", ar: "مقاول قطاع الطاقة" },
    location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
    year: "2022",
    description: {
      en: "Supply of electrical helpers, safety staff and WPRs for substation testing and preventive maintenance activities.",
      ar: "توريد مساعدين كهربائيين وطاقم سلامة ومستلمي تصاريح العمل (WPR) لاختبارات المحطة وأعمال الصيانة الوقائية.",
    },
    image: "/electrical-substation-construction.jpg",
    scope: [
      { en: "Electrical Helpers", ar: "مساعدون كهربائيون" },
      { en: "WPR", ar: "WPR" },
      { en: "Safety Officers", ar: "مسؤولو السلامة" },
    ],
  },
  {
    id: 4,
    title: { en: "Industrial Infrastructure Labor Supply", ar: "توريد عمالة للبنية التحتية الصناعية" },
    category: "infrastructure",
    client: { en: "Government Infrastructure Contractor", ar: "مقاول بنية تحتية حكومي" },
    location: { en: "Riyadh, Saudi Arabia", ar: "الرياض، المملكة العربية السعودية" },
    year: "2022",
    description: {
      en: "Provision of general labor, riggers and safety manpower for major road and utility development works.",
      ar: "توفير عمالة عامة ورافعات وطاقم سلامة لمشاريع تطوير الطرق والمرافق الرئيسية.",
    },
    image: "/modern-infrastructure-construction-saudi-arabia.jpg",
    scope: [
      { en: "Helpers", ar: "مساعدون" },
      { en: "Riggers", ar: "رافعات" },
      { en: "Safety Officers", ar: "مسؤولو السلامة" },
    ],
  },
  {
    id: 5,
    title: { en: "Refinery Turnaround Safety & Shutdown Crew", ar: "فرق سلامة وإيقاف لمصفاة" },
    category: "maintenance",
    client: { en: "Refinery Maintenance Contractor", ar: "مقاول صيانة مصفاة" },
    location: { en: "Eastern Province", ar: "المنطقة الشرقية" },
    year: "2023",
    description: {
      en: "Deployment of plant shutdown safety staff, firewatch teams and riggers for refinery turnaround activities.",
      ar: "تجهيز طاقم سلامة الإيقاف وفرق مراقبة الحريق ورافعات لدعم أعمال التوقف في المصفاة.",
    },
    image: "/refinery-turnaround-maintenance.jpg",
    scope: [
      { en: "Firewatch", ar: "مراقب حريق" },
      { en: "Safety Officers", ar: "مسؤولو السلامة" },
      { en: "Riggers", ar: "رافعات" },
    ],
  },
  {
    id: 6,
    title: { en: "Commercial Project Manpower Supply", ar: "توريد عمالة لمشروع تجاري" },
    category: "commercial",
    client: { en: "Private Developer", ar: "مطور خاص" },
    location: { en: "Jeddah, Saudi Arabia", ar: "جدة، المملكة العربية السعودية" },
    year: "2021",
    description: {
      en: "Supply of civil helpers, scaffolding support crew and safety manpower for commercial building construction.",
      ar: "توريد مساعدين مدنيين وفريق دعم السقالات وطاقم سلامة لأعمال إنشاء مبنى تجاري.",
    },
    image: "/modern-commercial-construction.png",
    scope: [
      { en: "Helpers", ar: "مساعدون" },
      { en: "Scaffolders", ar: "فنيّو سقالات" },
      { en: "Safety Officers", ar: "مسؤولو السلامة" },
    ],
  },
]

export default function ProjectsPage() {
  const { lang } = useLanguage()
  const [activeFilter, setActiveFilter] = useState<CategoryKey>("all")

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter)

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black text-white pt-40 pb-32">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <Image
          src="/construction-projects-overview-aerial.jpg"
          alt="Projects"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={70}
        />
        <div className="container mx-auto px-4 relative z-20 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            {pickLang(lang, { en: "Our Manpower Projects", ar: "مشاريعنا في القوى العاملة" })}
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto">
            {pickLang(lang, {
              en: "Shutdown manpower, industrial maintenance workforce and safety deployment across Saudi Arabia.",
              ar: "توريد عمالة الإيقاف، عمالة الصيانة الصناعية وتجهيز كوادر السلامة في أنحاء المملكة.",
            })}
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category.key}
                onClick={() => setActiveFilter(category.key)}
                variant={category.key === activeFilter ? "default" : "outline"}
                className={
                  category.key === activeFilter
                    ? "bg-[#d4af37] hover:bg-[#c19b2e] text-black"
                    : "hover:border-[#d4af37] hover:text-[#d4af37]"
                }
              >
                {pickLang(lang, category.label)}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all border"
              >
                <div className="relative h-60">
                  <Image
                    src={project.image}
                    alt={pickLang(lang, project.title)}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    quality={70}
                  />
                </div>

                <div className="p-6">
                  <span className="text-sm font-semibold text-[#d4af37]">
                    {pickLang(
                      lang,
                      categories.find((c) => c.key === project.category)?.label ?? { en: "", ar: "" },
                    )}
                  </span>

                  <h3 className="text-xl font-bold mt-2 mb-2">
                    {pickLang(lang, project.title)}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3">
                    {pickLang(lang, project.description)}
                  </p>

                  <div className="text-sm text-gray-500 mb-3">
                    <strong>{pickLang(lang, { en: "Client:", ar: "العميل:" })}</strong> {pickLang(lang, project.client)}
                    <br />
                    <strong>{pickLang(lang, { en: "Location:", ar: "الموقع:" })}</strong> {pickLang(lang, project.location)}
                    <br />
                    <strong>{pickLang(lang, { en: "Year:", ar: "السنة:" })}</strong> {project.year}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.scope.map((item, index) => (
                      <span
                        key={index}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {pickLang(lang, item)}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {pickLang(lang, { en: "Need Manpower for Your Next Project?", ar: "هل تحتاج إلى عمالة لمشروعك القادم؟" })}
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            {pickLang(lang, {
              en: "Get in touch with Power Solid today for certified manpower supply, shutdown support and safety workforce.",
              ar: "تواصل مع باور سوليد اليوم لتوريد عمالة معتمدة، دعم الإيقاف والتوقفات وكوادر السلامة.",
            })}
          </p>
          <Button className="bg-[#d4af37] hover:bg-[#c19b2e] text-black font-semibold px-8 py-6 text-lg">
            {pickLang(lang, { en: "Request Manpower", ar: "اطلب عمالة" })}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
