import { ArrowRight } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    date: "DEC 2025",
    title: "Power Solid Expands Operations in Jubail Industrial City",
    excerpt: "Power Solid has expanded its operations to serve more clients in the Jubail Industrial City, strengthening our presence in the Eastern Province...",
  },
  {
    date: "NOV 2025",
    title: "New Partnership with Major Petrochemical Contractor",
    excerpt: "We are proud to announce a new long-term manpower supply agreement with one of the leading petrochemical contractors in Saudi Arabia...",
  },
  {
    date: "OCT 2025",
    title: "Safety Excellence Award for Zero Incident Record",
    excerpt: "Power Solid has been recognized for maintaining an exceptional safety record across all project sites during the past fiscal year...",
  },
]

export function NewsSection() {
  return (
    <section className="py-20 md:py-28 bg-[#f8f9fa]">
      <div className="container mx-auto px-6">
        {/* Section header - Nesma style */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="h-px w-12 bg-[#c9a227]" />
              <span className="text-xs font-semibold tracking-[0.25em] text-[#c9a227] uppercase">
                Power Solid in the News
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0a1628]">
              Latest <span className="text-[#c9a227]">Updates</span>
            </h2>
          </div>

          <Link 
            href="/news"
            className="inline-flex items-center gap-2 text-[#0f2847] font-medium hover:text-[#c9a227] transition-colors group"
          >
            View All News
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* News grid - Nesma style */}
        <div className="grid md:grid-cols-3 gap-6">
          {newsItems.map((item, index) => (
            <article 
              key={index}
              className="bg-white border-b-2 border-transparent hover:border-[#c9a227] transition-all group"
            >
              {/* Image placeholder */}
              <div className="h-48 bg-gradient-to-br from-[#0f2847] to-[#1a3a5c] flex items-center justify-center">
                <div className="text-[#c9a227]/30 text-6xl font-bold">PS</div>
              </div>

              <div className="p-6">
                {/* Date tag */}
                <div className="text-xs font-semibold text-[#c9a227] mb-3">
                  {item.date}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[#0a1628] mb-3 group-hover:text-[#0f2847] transition-colors line-clamp-2">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[#0a1628]/60 mb-4 line-clamp-3">
                  {item.excerpt}
                </p>

                {/* Read more link */}
                <Link 
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-[#0f2847] group-hover:text-[#c9a227] transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
