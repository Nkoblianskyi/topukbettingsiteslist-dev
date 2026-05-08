import Image from "next/image"
import { CheckCircle2, Star, TrendingUp, Lock, Zap } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"

const trustItems = [
  { icon: CheckCircle2, label: "UKGC Licensed Only" },
  { icon: Star,         label: "Independent Editorial" },
  { icon: Lock,         label: "Verified & Safe" },
  { icon: TrendingUp,   label: "Monthly Updates" },
  { icon: Zap,          label: "Exclusive Offers" },
]

export function Hero() {
  const topSite = bettingSites[0]

  return (
    <section className="w-full" aria-label="Hero">

      {/* ── Full-width image strip with text overlay ── */}
      <div className="relative w-full h-[280px] sm:h-[340px] md:h-[420px] overflow-hidden">
        <Image
          src="/images/stadium-hero.jpg"
          alt="UK Premier League stadium"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        {/* Layered overlays */}
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/98 via-background/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />

        {/* Text content — left-anchored */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="max-w-xl">

              {/* Breadcrumb-style pill */}
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary text-primary-foreground text-[10px] font-heading font-700 uppercase tracking-[0.15em] px-3 py-1.5">
                  {new Date().getFullYear()} Rankings
                </span>
                <div className="flex items-center gap-1.5 text-[11px] text-muted-foreground uppercase tracking-widest">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
                  Live Updated
                </div>
              </div>

              <h1 className="font-heading font-700 text-4xl sm:text-5xl md:text-6xl uppercase leading-[0.95] tracking-tight text-balance text-foreground">
                Best UK
                <span className="block text-primary">Betting Sites</span>
                <span className="block text-[0.75em] text-foreground/80 mt-1">Top List {new Date().getFullYear()}</span>
              </h1>

              <p className="text-sm md:text-base text-white mt-4 leading-relaxed max-w-md">
                Independently reviewed and ranked UKGC-licensed bookmakers. Expert analysis, real welcome offers, no bias.
              </p>

            </div>
          </div>
        </div>
      </div>

      {/* ── Trust bar ── */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-2 md:gap-x-8 py-3">
            {trustItems.map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-[11px] text-muted-foreground">
                <Icon className="w-3.5 h-3.5 text-primary flex-shrink-0" aria-hidden="true" />
                <span className="uppercase tracking-wide whitespace-nowrap">{label}</span>
              </div>
            ))}
            <div className="hidden md:block ml-auto pl-5 border-l border-border">
              <span className="text-[11px] text-destructive font-heading font-700 uppercase tracking-widest border border-destructive/50 px-2.5 py-1 bg-destructive/10">
                18+ BeGambleAware.org
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
