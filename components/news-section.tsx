import { Newspaper } from "lucide-react"

import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"

export function NewsSection() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px w-12 bg-accent" />
            <span className="text-xs font-semibold tracking-[0.25em] text-accent uppercase">
              Latest Updates
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            News &amp; <span className="text-accent">Insights</span>
          </h2>
        </div>

        <Empty className="border-border bg-background">
          <EmptyHeader>
            <EmptyMedia variant="icon" className="bg-muted text-foreground">
              <Newspaper />
            </EmptyMedia>
            <EmptyTitle>Nothing published yet</EmptyTitle>
            <EmptyDescription>
              Updates will appear here as they’re released.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent />
        </Empty>
      </div>
    </section>
  )
}

export default NewsSection
