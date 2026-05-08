import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-secondary text-secondary-foreground px-4 py-6 border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-3 uppercase tracking-wide">
            <ArrowLeft className="w-3 h-3" />
            Back to Rankings
          </Link>
          <h1 className="font-heading font-700 text-2xl md:text-3xl uppercase tracking-wide text-foreground">
            About Us
          </h1>
          <p className="text-muted-foreground text-sm mt-1">Independent UK betting site comparison — topukbettingsiteslist.com</p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-8 space-y-4">

        <div className="border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <h2 className="font-heading font-700 text-base uppercase tracking-wide text-foreground">Our Mission</h2>
          </div>
          <div className="px-4 py-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              topukbettingsiteslist.com was built to help UK bettors make informed decisions about licensed bookmakers. We provide transparent, independently researched comparisons without commercial bias.
            </p>
          </div>
        </div>

        <div className="border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <h2 className="font-heading font-700 text-base uppercase tracking-wide text-foreground">What We Do</h2>
          </div>
          <div className="px-4 py-4 space-y-3">
            {[
              { title: "In-Depth Reviews", desc: "We test each bookmaker against strict criteria before publishing any assessment." },
              { title: "Transparent Rankings", desc: "Our ratings are updated monthly and based on measurable, published methodology." },
              { title: "Responsible Gambling", desc: "We promote safe betting habits and signpost support services on every page." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 border-b border-border last:border-b-0 pb-3 last:pb-0">
                <div className="w-1 h-full flex-shrink-0 bg-primary mt-1" aria-hidden="true" />
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <h2 className="font-heading font-700 text-base uppercase tracking-wide text-foreground">Our Values</h2>
          </div>
          <div className="grid grid-cols-2 gap-0">
            {[
              { title: "Transparency", desc: "Objective criteria, clearly published." },
              { title: "Independence", desc: "No operator influences our ratings." },
              { title: "Responsibility", desc: "Responsible gambling on every page." },
              { title: "Accuracy", desc: "Monthly updates to keep rankings current." },
            ].map((item, i) => (
              <div key={i} className="border-r border-b border-border last:border-r-0 [&:nth-child(2)]:border-r-0 [&:nth-child(3)]:border-b-0 [&:nth-child(4)]:border-b-0 px-4 py-3">
                <h3 className="font-semibold text-primary text-xs mb-0.5">{item.title}</h3>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-border bg-muted px-4 py-3">
          <p className="text-muted-foreground text-xs leading-relaxed">
            <strong className="text-foreground">Disclaimer:</strong> topukbettingsiteslist.com is an informational comparison site. We are not a bookmaker. All operators we recommend hold a current UKGC licence. Please gamble responsibly.
          </p>
        </div>

      </div>
    </div>
  )
}
