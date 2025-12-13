import Header from "@/components/header"
import Footer from "@/components/footer"

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* SITE HEADER (same as other pages) */}
      <Header />

      {/* PAGE CONTENT */}
      <main className="flex-1 bg-[#020617] text-white">
        {/* Top banner */}
        <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,#facc15_0,transparent_45%),#020617] pt-8 md:pt-10">
          <div className="container mx-auto px-6 py-10 md:py-14">
            <p className="text-xs md:text-sm font-semibold tracking-[0.18em] text-[#facc15] uppercase mb-3">
              About Power Solid Company
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">
              Trusted Manpower Partner for Oil &amp; Gas, Petrochemical &amp;
              Construction Projects
            </h1>
            <p className="max-w-3xl text-sm md:text-base lg:text-lg text-white/80">
              Power Solid is a manpower and industrial contracting company based
              in Jubail, Saudi Arabia. We provide certified shutdown and
              long-term project manpower across the Kingdom – with a strong focus
              on safety, compliance and reliable, on-time mobilization.
            </p>
          </div>
        </section>

        {/* Main about content */}
        <section className="bg-[#020617]">
          <div className="container mx-auto px-6 py-12 md:py-16 grid gap-10 md:grid-cols-[1.7fr,1.3fr]">
            {/* Left column – story + detailed paragraph */}
            <div>
              <h2 className="text-xl md:text-2xl font-semibold mb-4">Who we are</h2>
              <p className="text-sm md:text-base text-white/80 mb-4">
                Power Solid supplies certified <strong>Riggers (I, II, III)</strong>,{" "}
                <strong>Work Permit Receivers</strong>,{" "}
                <strong>Firewatchers</strong>, <strong>Safety Officers</strong>,
                helpers and complete shutdown teams across Jubail, the Eastern
                Province and all over KSA – with a strong focus on safety,
                compliance and on-time mobilization.
              </p>
              <p className="text-sm md:text-base text-white/80 mb-4">
                Our teams are trained to work in demanding industrial environments –
                refineries, petrochemical plants, construction sites and shutdown
                projects – supporting our clients’ operations while meeting
                site-specific procedures and international safety standards.
              </p>
              <p className="text-sm md:text-base text-white/80">
                We aim to be a long-term partner to our clients, not just a
                manpower supplier. That means understanding project schedules, site
                requirements and permit systems, and mobilizing the right people at
                the right time so work can progress without delays.
              </p>
            </div>

            {/* Right column – quick facts / categories */}
            <div className="bg-white/5 border border-white/10 rounded-3xl p-6 md:p-7 lg:p-8 backdrop-blur">
              <h3 className="text-lg md:text-xl font-semibold mb-4">
                Core manpower categories
              </h3>
              <ul className="space-y-3 text-sm md:text-base text-white/85 mb-6">
                <li>• Riggers – Levels I, II &amp; III</li>
                <li>• Work Permit Receivers (WPR)</li>
                <li>• Firewatchers &amp; Hole-watchers</li>
                <li>• Safety Officers &amp; Safety Assistants</li>
                <li>• Helpers &amp; General manpower</li>
                <li>• Shutdown &amp; maintenance support crews</li>
              </ul>

              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Where we operate
              </h3>
              <p className="text-sm md:text-base text-white/80 mb-4">
                Our primary focus is Jubail and the Eastern Province, supporting
                major industrial facilities and contractors on both{" "}
                <strong>offshore and onshore</strong> projects. We regularly deploy
                teams to refineries, petrochemical plants, construction sites, ports
                and offshore facilities across Saudi Arabia.
              </p>

              <h3 className="text-lg md:text-xl font-semibold mb-3">
                Why clients choose Power Solid
              </h3>
              <ul className="space-y-2 text-sm md:text-base text-white/80">
                <li>• Certified and experienced industrial manpower</li>
                <li>• Strong safety culture and compliance mindset</li>
                <li>• Fast mobilization for shutdowns and urgent needs</li>
                <li>• Clear communication and responsive coordination</li>
                <li>• Flexible contracts for short-term and long-term projects</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Process / how we work */}
        <section className="bg-[#020617] border-t border-white/5">
          <div className="container mx-auto px-6 py-12 md:py-16">
            <h2 className="text-xl md:text-2xl font-semibold mb-6">
              How we work with our clients
            </h2>
            <div className="grid gap-6 md:grid-cols-4 text-sm md:text-base">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-xs font-semibold text-[#facc15] mb-1">
                  01 • Requirement
                </p>
                <p className="text-white/85">
                  We discuss your project scope, site requirements, categories,
                  quantities and tentative mobilization dates.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-xs font-semibold text-[#facc15] mb-1">
                  02 • Selection
                </p>
                <p className="text-white/85">
                  Profiles are shortlisted based on certifications, experience and
                  specific client criteria for each category.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-xs font-semibold text-[#facc15] mb-1">
                  03 • Mobilization
                </p>
                <p className="text-white/85">
                  We coordinate documentation, medicals and gate pass processes to
                  ensure timely site mobilization.
                </p>
              </div>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
                <p className="text-xs font-semibold text-[#facc15] mb-1">
                  04 • Ongoing support
                </p>
                <p className="text-white/85">
                  Our team tracks attendance, performance and replacement needs so
                  your project runs smoothly from start to finish.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* SITE FOOTER (same as other pages) */}
      <Footer />
    </div>
  )
}
