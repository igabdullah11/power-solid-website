"use client"

// import Header from "@/components/header"
// import Footer from "@/components/footer"
// import { Award, Download } from "lucide-react"

// export default function CertificatesPage() {
//   const isoCertificates = [
//     {
//       title: "ISO 9001:2015",
//       category: "Quality Management",
//       issuer: "International Organization for Standardization",
//       year: "2023",
//     },
//     {
//       title: "ISO 45001:2018",
//       category: "Occupational Health & Safety",
//       issuer: "International Organization for Standardization",
//       year: "2023",
//     },
//     {
//       title: "ISO 14001:2015",
//       category: "Environmental Management",
//       issuer: "International Organization for Standardization",
//       year: "2022",
//     },
//     {
//       title: "ARAMCO Contractor Certification",
//       category: "Industry Certification",
//       issuer: "Saudi Aramco",
//       year: "2023",
//     },
//   ]

//   const awards = [
//     {
//       title: "SABIC Safety Excellence Award",
//       category: "Safety Excellence",
//       issuer: "SABIC",
//       year: "2022",
//     },
//     {
//       title: "Best Engineering Practices Award",
//       category: "Industry Recognition",
//       issuer: "Saudi Engineering Society",
//       year: "2021",
//     },
//     {
//       title: "PMP Project Management Certification",
//       category: "Professional Development",
//       issuer: "Project Management Institute",
//       year: "2023",
//     },
//     {
//       title: "LEED Green Building Certification",
//       category: "Sustainability",
//       issuer: "U.S. Green Building Council",
//       year: "2022",
//     },
//   ]

//   const accreditations = [
//     {
//       title: "ISO Certified",
//       description: "ISO 9001, 14001, 45001 certified",
//     },
//     {
//       title: "Industry Partnerships",
//       description: "Partnerships with global leaders",
//     },
//     {
//       title: "Safety Committed",
//       description: "Zero-tolerance safety policy",
//     },
//   ]

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />

//       {/* Hero Section */}
//       <section className="bg-gradient-to-r from-gray-900 via-black to-gray-900 py-20 text-white">
//         <div className="container mx-auto px-4 text-center">
//           <h1 className="mb-4 text-4xl font-bold md:text-5xl">Certifications & Awards</h1>
//           <p className="text-lg text-gray-300">Industry recognition of our commitment to excellence</p>
//         </div>
//       </section>

//       {/* ISO Certifications Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//             {isoCertificates.map((cert, index) => (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl"
//               >
//                 <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f]" />
//                 <div className="p-6">
//                   <div className="mb-4 inline-flex rounded-lg bg-[#d4af37] p-3">
//                     <Award className="h-6 w-6 text-white" />
//                   </div>
//                   <h3 className="mb-2 text-xl font-bold text-gray-900">{cert.title}</h3>
//                   <p className="mb-2 font-semibold text-[#d4af37]">{cert.category}</p>
//                   <p className="mb-4 text-sm text-gray-600">{cert.issuer}</p>
//                   <div className="flex items-center justify-between border-t border-gray-100 pt-4">
//                     <span className="text-sm text-gray-500">{cert.year}</span>
//                     <button className="text-[#d4af37] transition-colors hover:text-[#b8941f]">
//                       <Download className="h-5 w-5" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Key Accreditations Section */}
//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <div className="mb-12 text-center">
//             <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Key Accreditations</h2>
//             <p className="text-gray-600">Trusted by leading organizations and industry bodies</p>
//           </div>
//           <div className="grid gap-8 md:grid-cols-3">
//             {accreditations.map((accred, index) => (
//               <div key={index} className="rounded-lg bg-white p-8 text-center shadow-sm transition-all hover:shadow-md">
//                 <div className="mb-4 inline-flex h-24 w-24 items-center justify-center rounded-full bg-[#d4af37]">
//                   <Award className="h-12 w-12 text-white" />
//                 </div>
//                 <h3 className="mb-2 text-xl font-bold text-gray-900">{accred.title}</h3>
//                 <p className="text-gray-600">{accred.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Awards & Certifications Section */}
//       <section className="py-16">
//         <div className="container mx-auto px-4">
//           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
//             {awards.map((award, index) => (
//               <div
//                 key={index}
//                 className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl"
//               >
//                 <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-[#d4af37] to-[#f4d03f]" />
//                 <div className="p-6">
//                   <div className="mb-4 inline-flex rounded-lg bg-[#d4af37] p-3">
//                     <Award className="h-6 w-6 text-white" />
//                   </div>
//                   <h3 className="mb-2 text-xl font-bold text-gray-900">{award.title}</h3>
//                   <p className="mb-2 font-semibold text-[#d4af37]">{award.category}</p>
//                   <p className="mb-4 text-sm text-gray-600">{award.issuer}</p>
//                   <div className="flex items-center justify-between border-t border-gray-100 pt-4">
//                     <span className="text-sm text-gray-500">{award.year}</span>
//                     <button className="text-[#d4af37] transition-colors hover:text-[#b8941f]">
//                       <Download className="h-5 w-5" />
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Why Trust Power Solid Section */}
//       <section className="bg-gray-50 py-16">
//         <div className="container mx-auto px-4">
//           <div className="mx-auto max-w-4xl text-center">
//             <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">Why Trust Power Solid?</h2>
//             <p className="mb-8 text-lg leading-relaxed text-gray-600">
//               Our certifications and awards demonstrate our unwavering commitment to quality, safety, and professional
//               excellence. Every certification represents our dedication to meeting and exceeding industry standards.
//             </p>
//             <div className="flex flex-wrap items-center justify-center gap-4">
//               <span className="rounded-full bg-[#f4e5b1] px-6 py-3 font-semibold text-gray-800">Certified</span>
//               <span className="rounded-full bg-[#f4e5b1] px-6 py-3 font-semibold text-gray-800">Experienced</span>
//               <span className="rounded-full bg-[#f4e5b1] px-6 py-3 font-semibold text-gray-800">Reliable</span>
//               <span className="rounded-full bg-[#f4e5b1] px-6 py-3 font-semibold text-gray-800">Safe</span>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />
//     </div>
//   )
// }
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Award } from "lucide-react"
import Image from "next/image"
import { useLanguage } from "@/components/language-provider"
import { pickLang } from "@/lib/i18n"

export default function CertificatesPage() {
  const { lang } = useLanguage()

  const isoCertificates = [
    {
      title: { en: "ISO 9001:2015 (Planned)", ar: "ISO 9001:2015 (قيد التنفيذ)" },
      category: { en: "Quality Management System", ar: "نظام إدارة الجودة" },
      issuer: {
        en: "International Organization for Standardization",
        ar: "المنظمة الدولية للتوحيد القياسي",
      },
      year: { en: "Implementation in Progress", ar: "جارٍ التنفيذ" },
    },
    {
      title: { en: "ISO 45001:2018 (Planned)", ar: "ISO 45001:2018 (قيد التنفيذ)" },
      category: { en: "Occupational Health & Safety", ar: "الصحة والسلامة المهنية" },
      issuer: {
        en: "International Organization for Standardization",
        ar: "المنظمة الدولية للتوحيد القياسي",
      },
      year: { en: "Implementation in Progress", ar: "جارٍ التنفيذ" },
    },
    {
      title: { en: "ISO 14001:2015 (Planned)", ar: "ISO 14001:2015 (قيد التنفيذ)" },
      category: { en: "Environmental Management System", ar: "نظام الإدارة البيئية" },
      issuer: {
        en: "International Organization for Standardization",
        ar: "المنظمة الدولية للتوحيد القياسي",
      },
      year: { en: "Implementation in Progress", ar: "جارٍ التنفيذ" },
    },
  ]

  const accreditations = [
    {
      title: { en: "Saudi Labor Law Compliance", ar: "الامتثال لنظام العمل السعودي" },
      description: {
        en: "Fully compliant with Saudi manpower & labor regulations",
        ar: "التزام كامل بأنظمة ولوائح القوى العاملة والعمل في المملكة",
      },
    },
    {
      title: { en: "HSE Safety Standards", ar: "معايير السلامة (HSE)" },
      description: {
        en: "Strict site safety rules and toolbox talk procedures",
        ar: "تطبيق صارم لقواعد السلامة وإجراءات اجتماعات السلامة اليومية",
      },
    },
    {
      title: { en: "Industrial Site Experience", ar: "خبرة في المواقع الصناعية" },
      description: {
        en: "Experience working under Aramco & SABIC approved contractors",
        ar: "خبرة عمل تحت مقاولين معتمدين لدى أرامكو وسابك",
      },
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-black pt-36 pb-28 text-white">
        <div className="absolute inset-0 z-0">
          <Image src="/refinery-turnaround-maintenance.jpg" alt="" fill priority className="object-cover" />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            {pickLang(lang, { en: "Certifications & Compliance", ar: "الشهادات والامتثال" })}
          </h1>
          <p className="text-lg text-gray-300">
            {pickLang(lang, {
              en: "Standards, safety compliance & workforce credibility",
              ar: "المعايير والالتزام بالسلامة ومصداقية القوى العاملة",
            })}
          </p>
        </div>
      </section>

      {/* ISO & Compliance Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {isoCertificates.map((cert, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <div className="absolute left-0 right-0 top-0 h-1 bg-[#d4af37]" />
                <div className="p-6">
                  <div className="mb-4 inline-flex rounded-lg bg-[#d4af37] p-3">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{pickLang(lang, cert.title)}</h3>
                  <p className="mb-2 font-semibold text-[#d4af37]">{pickLang(lang, cert.category)}</p>
                  <p className="mb-4 text-sm text-gray-600">{pickLang(lang, cert.issuer)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Accreditations */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              {pickLang(lang, { en: "Workforce Compliance & Safety", ar: "امتثال القوى العاملة والسلامة" })}
            </h2>
            <p className="text-gray-600">
              {pickLang(lang, {
                en: "Our manpower operates under strict Saudi industrial standards",
                ar: "تعمل كوادرنا وفق معايير صناعية صارمة في المملكة",
              })}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {accreditations.map((accred, index) => (
              <div
                key={index}
                className="rounded-lg bg-white p-8 text-center shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-4 inline-flex h-24 w-24 items-center justify-center rounded-full bg-[#d4af37]">
                  <Award className="h-12 w-12 text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900">{pickLang(lang, accred.title)}</h3>
                <p className="text-gray-600">{pickLang(lang, accred.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Statement */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              {pickLang(lang, { en: "Why Clients Trust Power Solid?", ar: "لماذا يثق العملاء بباور سوليد؟" })}
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {pickLang(lang, {
                en: "Our certified workforce background, Saudi compliance, safety training and industrial site experience make us a trusted manpower support partner for shutdown, maintenance and infrastructure projects.",
                ar: "خبرة كوادرنا المعتمدة والامتثال للأنظمة في المملكة والتدريب على السلامة وتجربة العمل في المواقع الصناعية تجعلنا شريكاً موثوقاً لدعم مشاريع الإيقاف والصيانة والبنية التحتية.",
              })}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="rounded-full bg-[#f4e5b1] px-6 py-3 font-semibold text-gray-800">{pickLang(lang, { en: "Certified Workforce", ar: "عمالة معتمدة" })}</span>
              <span className="rounded-full bg-[#f4e5b1] px-6 py-3 font-semibold text-gray-800">{pickLang(lang, { en: "Safety Driven", ar: "تركيز على السلامة" })}</span>
              <span className="rounded-full bg-[#f4e5b1] px-6 py-3 font-semibold text-gray-800">{pickLang(lang, { en: "Site Proven", ar: "خبرة ميدانية" })}</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
