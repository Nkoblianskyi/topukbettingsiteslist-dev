import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"

export default function CookiePolicyPage() {
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
            Cookie Policy
          </h1>
          <p className="text-muted-foreground text-xs mt-1">Last updated: January {new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-8 space-y-4">

        <div className="border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <h2 className="font-heading font-700 text-base uppercase tracking-wide text-foreground">What Are Cookies?</h2>
          </div>
          <div className="px-4 py-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              Cookies are small text files stored on your device when you visit a website. They allow the site to recognise your device and remember information about your visit to improve your experience.
            </p>
          </div>
        </div>

        <div className="border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <h2 className="font-heading font-700 text-base uppercase tracking-wide text-foreground">Types of Cookies We Use</h2>
          </div>
          <div className="divide-y divide-border">
            {[
              {
                title: "Essential Cookies",
                tag: "Required",
                tagColor: "bg-secondary text-secondary-foreground",
                desc: "Necessary for the basic functioning of the website. These cannot be disabled.",
              },
              {
                title: "Analytics Cookies",
                tag: "Optional",
                tagColor: "bg-muted text-muted-foreground",
                desc: "Help us understand how visitors interact with the site so we can improve content and layout.",
              },
              {
                title: "Marketing Cookies",
                tag: "Optional",
                tagColor: "bg-muted text-muted-foreground",
                desc: "Used to deliver relevant content and track the effectiveness of our affiliate partnerships.",
              },
            ].map((item, i) => (
              <div key={i} className="px-4 py-4">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold text-foreground text-sm">{item.title}</h3>
                  <span className={`${item.tagColor} text-[10px] px-2 py-0.5 uppercase tracking-wide font-heading font-700`}>{item.tag}</span>
                </div>
                <p className="text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="border border-border bg-card">
          <div className="border-b border-border px-4 py-3">
            <h2 className="font-heading font-700 text-base uppercase tracking-wide text-foreground">Managing Cookies</h2>
          </div>
          <div className="px-4 py-4">
            <p className="text-muted-foreground text-sm leading-relaxed">
              You can manage cookie preferences via the banner displayed when you first visit the site, or by adjusting your browser settings. Please note that disabling essential cookies may affect site functionality.
            </p>
          </div>
        </div>

        <div className="border border-border bg-muted px-4 py-3">
          <p className="text-muted-foreground text-xs">
            Questions? Contact us: <span className="text-foreground font-semibold">cookies@topukbettingsiteslist.com</span>
          </p>
        </div>

      </div>
    </div>
  )
}
