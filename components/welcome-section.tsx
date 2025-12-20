export function WelcomeSection() {
  return (
    <section className="py-12 md:py-16 bg-white text-black">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-[2fr,1fr] items-start">
          <div>
            <p className="text-xs md:text-sm font-semibold tracking-[0.18em] text-[#d4af37] uppercase mb-2">
              Welcome to
            </p>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mb-4">
              Power Solid Company
            </h2>

            <p className="text-sm md:text-base text-black/70 mb-4">
              Power Solid is a manpower and industrial contracting company based
              in Jubail, Saudi Arabia. We provide certified shutdown and
              long-term project manpower for oil &amp; gas, petrochemical and
              construction clients across the Kingdom.
            </p>

            <p className="text-sm md:text-base text-black/70 mb-4">
              Our teams include Riggers (I, II, III), Work Permit Receivers,
              Firewatchers, Safety Officers, helpers and support crews. We are
              committed to safety, compliance and reliable on-time mobilization
              for every assignment.
            </p>

            <p className="text-sm md:text-base text-black/70">
              Over the years, we have supported major industrial facilities in
              Jubail and the Eastern Province with shutdown, turnaround and
              maintenance manpower, building long-term relationships based on
              performance and trust.
            </p>
          </div>

          {/* Side card with quick facts */}
          <div className="bg-white text-black rounded-2xl p-6 md:p-8 border border-black/10 shadow-lg">
            <h3 className="text-lg font-semibold mb-4">
              Why companies choose{" "}
              <span className="text-[#d4af37]">Power Solid</span>
            </h3>

            <ul className="space-y-3 text-sm md:text-base text-black/80">
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#d4af37] flex-shrink-0" />
                <span>Certified and experienced industrial manpower</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#d4af37] flex-shrink-0" />
                <span>Strong focus on safety and compliance</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#d4af37] flex-shrink-0" />
                <span>Fast mobilization for shutdown projects</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#d4af37] flex-shrink-0" />
                <span>Local presence in Jubail &amp; Eastern Province</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#d4af37] flex-shrink-0" />
                <span>Flexible contracts for short and long-term needs</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
