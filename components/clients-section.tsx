// import { Card, CardContent } from "@/components/ui/card"
// import Image from "next/image"

// const clients = [
//   { name: "Saudi Aramco", logo: "/saudi-aramco-logo.png" },
//   { name: "SABIC", logo: "/SABIC-logo.png" },
//   { name: "Riyadh Development Company", logo: "/riyadh-development-company-logo.jpg" },
//   { name: "Saudi Electric Company", logo: "/saudi-electric-company-logo.jpg" },
//   { name: "Saudi Vision 2030", logo: "/saudi-vision-2030-logo.png" },
//   { name: "Tadawul Group", logo: "/tadawul-group-logo.jpg" },
// ]

// export function ClientsSection() {
//   return (
//     <section className="py-20 bg-gradient-to-b from-white to-gray-50">
//       <div className="container mx-auto px-6">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Major Clients</h2>
//           <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-4" />
//           <p className="text-gray-600 max-w-2xl mx-auto text-lg">
//             Trusted by leading organizations across Saudi Arabia
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
//           {clients.map((client, index) => (
//             <Card
//               key={index}
//               className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-[#d4af37] hover:-translate-y-1 bg-white"
//             >
//               <CardContent className="p-8 flex flex-col items-center justify-center min-h-[160px]">
//                 <div className="relative w-full h-24 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
//                   <Image
//                     src={client.logo || "/placeholder.svg"}
//                     alt={`${client.name} logo`}
//                     width={200}
//                     height={96}
//                     className="object-contain"
//                   />
//                 </div>
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         <div className="mt-16 text-center">
//           <div className="inline-flex items-center gap-8 flex-wrap justify-center">
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-[#d4af37] rounded-full"></div>
//               <span className="text-gray-600 font-medium">ISO Certified</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-[#d4af37] rounded-full"></div>
//               <span className="text-gray-600 font-medium">20+ Years Experience</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-3 h-3 bg-[#d4af37] rounded-full"></div>
//               <span className="text-gray-600 font-medium">150+ Projects Delivered</span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }
import { Card, CardContent } from "@/components/ui/card"
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
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Major Clients</h2>
          <div className="w-20 h-1 bg-[#d4af37] mx-auto mb-4" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Trusted by leading organizations across Saudi Arabia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 border-gray-200 hover:border-[#d4af37] hover:-translate-y-1 bg-white"
            >
              <CardContent className="p-8 flex flex-col items-center justify-center min-h-[160px]">
                <div className="relative w-full h-24 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    width={200}
                    height={96}
                    className="object-contain"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#d4af37] rounded-full"></div>
              <span className="text-gray-600 font-medium">ISO Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#d4af37] rounded-full"></div>
              <span className="text-gray-600 font-medium">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#d4af37] rounded-full"></div>
              <span className="text-gray-600 font-medium">150+ Projects Delivered</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
