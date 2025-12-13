// import { Header } from "@/components/header"
// import { HeroSection } from "@/components/hero-section"
// import { StatsSection } from "@/components/stats-section"
// import { ServicesSection } from "@/components/services-section"
// import { ClientsSection } from "@/components/clients-section"
// import { Footer } from "@/components/footer"

// export default function Home() {
//   return (
//     <div className="min-h-screen">
//       <Header />
//       <main>
//         <HeroSection />
//         <StatsSection />
//         <ServicesSection />
//         <ClientsSection />
//       </main>
//       <Footer />
//     </div>
//   )
// }
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { ClientsSection } from "@/components/clients-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* SITE HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <main className="flex-1">
        {/* HERO SECTION */}
        <section id="home">
          <HeroSection />
        </section>

        {/* WELCOME / INTRO SECTION (like PSC home) */}
        <section id="about-preview">
          <WelcomeSection />
        </section>

        {/* COMPANY STATS */}
        <section id="stats">
          <StatsSection />
        </section>

        {/* SERVICES PREVIEW */}
        <section id="services">
          <ServicesSection />
        </section>

        {/* CLIENTS & PARTNERS */}
        <section id="clients">
          <ClientsSection />
        </section>
      </main>

      {/* SITE FOOTER */}
      <Footer />
    </div>
  )
}
