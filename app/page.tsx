
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { WelcomeSection } from "@/components/welcome-section"
import { StatsSection } from "@/components/stats-section"
import { ServicesSection } from "@/components/services-section"
import { NewsSection } from "@/components/news-section"
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

        {/* STATS SECTION - Nesma style "In Numbers" */}
        <section id="stats">
          <StatsSection />
        </section>

        {/* WELCOME / ABOUT PREVIEW */}
        <section id="about-preview">
          <WelcomeSection />
        </section>

        {/* SERVICES SECTION */}
        <section id="services">
          <ServicesSection />
        </section>

        {/* NEWS SECTION - Nesma style */}
        <section id="news">
          <NewsSection />
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
