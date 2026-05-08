import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="bg-secondary text-secondary-foreground px-4 py-6 border-b border-border">
        <div className="container mx-auto max-w-3xl">
          <Link href="/" className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors mb-3 uppercase tracking-wide">
            <ArrowLeft className="w-3 h-3" />
            Back to Rankings
          </Link>
          <div className="flex items-center justify-between">
            <h1 className="font-heading font-700 text-2xl md:text-3xl uppercase tracking-wide text-foreground">
              Responsible Gambling
            </h1>
            <span className="text-destructive font-heading font-700 text-sm border border-destructive/50 px-2.5 py-1 uppercase bg-destructive/5">18+</span>
          </div>
          <p className="text-muted-foreground text-sm mt-1">Betting should always remain entertainment</p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-8 space-y-4">

        <div className="border-2 border-destructive/40 bg-destructive/5 px-4 py-4">
          <p className="text-sm text-foreground leading-relaxed">
            <strong className="text-destructive">Important Warning:</strong> Sports betting can be addictive and cause serious financial and personal harm. Never bet money you cannot afford to lose. If gambling is affecting your life, seek help immediately.
          </p>
          <p className="text-destructive font-semibold text-sm mt-2 uppercase tracking-wide">Strictly 18+ Only</p>
        </div>

        <div className="border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <h2 className="font-heading font-700 text-base uppercase tracking-wide text-foreground">What Is Responsible Gambling?</h2>
          </div>
          <div className="px-4 py-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Responsible gambling means betting in a conscious, controlled and safe way, maintaining a healthy balance between entertainment and personal and financial responsibility.
            </p>
          </div>
        </div>

        <div className="border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <h2 className="font-heading font-700 text-base uppercase tracking-wide text-foreground">Key Principles</h2>
          </div>
          <div className="divide-y divide-border">
            {[
              { num: "1", title: "Only Bet What You Can Afford to Lose", desc: "Never use money set aside for bills, rent, or essential expenses." },
              { num: "2", title: "Set Limits Before You Start", desc: "Decide your budget and time limits in advance, and stick to them." },
              { num: "3", title: "Never Chase Losses", desc: "Accepting a loss is part of gambling. Chasing losses leads to bigger losses." },
              { num: "4", title: "Do Not Bet Under the Influence", desc: "Avoid betting when emotional, tired, or under the influence of alcohol." },
            ].map((item, i) => (
              <div key={i} className="flex gap-3 px-4 py-3">
                <div className="w-7 h-7 bg-primary text-primary-foreground flex items-center justify-center font-heading font-700 text-sm flex-shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-border bg-card">
            <div className="border-b border-border px-4 py-3">
              <h2 className="font-heading font-700 text-sm uppercase tracking-wide text-foreground">Safe Practices</h2>
            </div>
            <ul className="px-4 py-3 space-y-2">
              {[
                "Set a strict monthly betting budget",
                "Use deposit limits on your account",
                "Keep other leisure activities in your life",
                "Take regular breaks from betting",
                "Use self-exclusion tools if needed",
              ].map((item, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-foreground font-semibold mt-0.5">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="border border-border bg-card">
            <div className="border-b border-border px-4 py-3">
              <h2 className="font-heading font-700 text-sm uppercase tracking-wide text-destructive">Warning Signs</h2>
            </div>
            <ul className="px-4 py-3 space-y-2">
              {[
                "Betting more than you can afford",
                "Hiding gambling from family or friends",
                "Borrowing money to gamble",
                "Neglecting work or responsibilities",
                "Feeling anxious when you cannot bet",
              ].map((item, i) => (
                <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                  <span className="text-destructive font-semibold mt-0.5">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <h2 className="font-heading font-700 text-base uppercase tracking-wide text-foreground">UK Support Services</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-border">
            {[
              { name: "GambleAware", url: "www.begambleaware.org", desc: "Free confidential support and advice" },
              { name: "GamCare", url: "www.gamcare.org.uk", desc: "National gambling helpline and counselling" },
              { name: "GAMSTOP", url: "www.gamstop.co.uk", desc: "UK self-exclusion scheme for all sites" },
              { name: "Gambling Therapy", url: "www.gamblingtherapy.org", desc: "Free international online support" },
            ].map((org, i) => (
              <div key={i} className="px-4 py-3">
                <div className="font-semibold text-foreground text-xs">{org.name}</div>
                <div className="text-primary text-xs">{org.url}</div>
                <div className="text-muted-foreground text-[10px] mt-0.5">{org.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-secondary bg-secondary text-secondary-foreground text-center py-3">
          <span className="font-heading font-700 text-sm uppercase tracking-widest">Under 18s Must Not Gamble</span>
        </div>

      </div>
    </div>
  )
}
