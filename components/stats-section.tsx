export function StatsSection() {
  return (
    <section className="bg-black text-white py-12 md:py-16 border-t border-white/10">
      <div className="container mx-auto px-6">
        {/* Top row: title + short description */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <p className="text-xs md:text-sm font-semibold tracking-[0.18em] text-[#d4af37] uppercase mb-2">
              Power Solid in numbers
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-white">
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
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#d4af37]/40 transition-colors">
            <p className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-1">
              500+
            </p>
            <p className="text-sm md:text-base text-white/80">
              Skilled workers supplied to industrial sites.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#d4af37]/40 transition-colors">
            <p className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-1">
              200+
            </p>
            <p className="text-sm md:text-base text-white/80">
              Industrial projects supported across KSA.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#d4af37]/40 transition-colors">
            <p className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-1">
              50+
            </p>
            <p className="text-sm md:text-base text-white/80">
              Active client companies and contractors.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:border-[#d4af37]/40 transition-colors">
            <p className="text-3xl md:text-4xl font-bold text-[#d4af37] mb-1">
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
