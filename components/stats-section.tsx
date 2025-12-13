// // import { Users, Briefcase, Award, Target } from "lucide-react"

// // const stats = [
// //   {
// //     icon: Users,
// //     value: "250+",
// //     label: "Team Members",
// //   },
// //   {
// //     icon: Briefcase,
// //     value: "150+",
// //     label: "Projects Completed",
// //   },
// //   {
// //     icon: Award,
// //     value: "25+",
// //     label: "Awards & Certifications",
// //   },
// //   {
// //     icon: Target,
// //     value: "98%",
// //     label: "Client Satisfaction",
// //   },
// // ]

// // export function StatsSection() {
// //   return (
// //     <section className="bg-black py-16">
// //       <div className="container mx-auto px-6">
// //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
// //           {stats.map((stat, index) => (
// //             <div key={index} className="flex flex-col items-center text-center">
// //               <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4">
// //                 <stat.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
// //               </div>
// //               <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
// //               <div className="text-white/80 text-sm">{stat.label}</div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </section>
// //   )
// // }
// import { Users, Briefcase, ShieldCheck, Building2 } from "lucide-react"

// const stats = [
//   {
//     icon: Users,
//     value: "500+",
//     label: "Skilled Workers Supplied",
//   },
//   {
//     icon: Briefcase,
//     value: "200+",
//     label: "Industrial Projects Supported",
//   },
//   {
//     icon: Building2,
//     value: "50+",
//     label: "Active Client Companies",
//   },
//   {
//     icon: ShieldCheck,
//     value: "100%",
//     label: "Safety & Site Compliance",
//   },
// ]

// export function StatsSection() {
//   return (
//     <section className="bg-black py-16">
//       <div className="container mx-auto px-6">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {stats.map((stat, index) => (
//             <div key={index} className="flex flex-col items-center text-center">
//               <div className="w-16 h-16 bg-[#d4af37]/20 rounded-2xl flex items-center justify-center mb-4">
//                 <stat.icon className="w-8 h-8 text-[#d4af37]" strokeWidth={1.5} />
//               </div>
//               <div className="text-4xl md:text-5xl font-bold text-white mb-2">
//                 {stat.value}
//               </div>
//               <div className="text-white/80 text-sm">
//                 {stat.label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   )
// }
export function StatsSection() {
  return (
    <section className="bg-[#020617] text-white py-12 md:py-16 border-t border-white/5">
      <div className="container mx-auto px-6">
        {/* Top row: title + short description */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs md:text-sm font-semibold tracking-[0.18em] text-[#facc15] uppercase mb-2">
              Power Solid in numbers
            </p>
            <h2 className="text-2xl md:text-3xl font-bold">
              Manpower you can rely on
            </h2>
          </div>

          <p className="text-sm md:text-base text-white/70 max-w-xl">
            Supporting oil &amp; gas, petrochemical and construction projects
            across Saudi Arabia with certified, site-ready manpower for
            shutdowns and long-term operations.
          </p>
        </div>

        {/* Stats cards */}
        <div className="grid gap-6 md:grid-cols-4">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-3xl md:text-4xl font-bold text-[#facc15] mb-1">
              500+
            </p>
            <p className="text-sm md:text-base text-white/80">
              Skilled workers supplied to industrial sites.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-3xl md:text-4xl font-bold text-[#facc15] mb-1">
              200+
            </p>
            <p className="text-sm md:text-base text-white/80">
              Industrial projects supported across KSA.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-3xl md:text-4xl font-bold text-[#facc15] mb-1">
              50+
            </p>
            <p className="text-sm md:text-base text-white/80">
              Active client companies and contractors.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-3xl md:text-4xl font-bold text-[#facc15] mb-1">
              100%
            </p>
            <p className="text-sm md:text-base text-white/80">
              Focus on safety, compliance and on-time mobilization.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
