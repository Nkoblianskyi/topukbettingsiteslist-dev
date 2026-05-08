import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"

export default function PrivacyPolicyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-muted-foreground text-xs mt-1">Last updated: January {new Date().getFullYear()}</p>
        </div>
      </div>

      <div className="container mx-auto max-w-3xl px-4 py-8 space-y-4">

        {[
          {
            title: "Introduction",
            content: "topukbettingsiteslist.com is committed to protecting the privacy of our visitors. This policy explains how we collect, use and protect your personal information in accordance with UK GDPR and the Data Protection Act 2018.",
          },
          {
            title: "Information We Collect",
            list: [
              "IP address and approximate location",
              "Browser type and operating system",
              "Pages visited and time spent on site",
              "Cookie preferences",
            ],
          },
          {
            title: "How We Use Your Data",
            list: [
              "To personalise content and recommendations",
              "To analyse browsing patterns and improve the site",
              "To respond to contact requests",
              "To comply with legal obligations",
            ],
          },
          {
            title: "Data Protection",
            content: "We implement appropriate technical and organisational security measures to protect your data against unauthorised access, loss or alteration, including SSL/TLS encryption and firewalls.",
          },
          {
            title: "Your Rights",
            content: "Under UK GDPR you have the right to: access your data, request rectification, erasure or portability, object to processing, and restrict processing. To exercise any right, contact us at the address below.",
          },
          {
            title: "Cookies",
            content: "We use cookies to improve your experience. For full details please see our Cookie Policy. You can manage your preferences via the cookie banner or your browser settings.",
          },
          {
            title: "Contact",
            content: "For privacy enquiries: privacy@topukbettingsiteslist.com",
          },
        ].map((section, i) => (
          <div key={i} className="border border-border bg-card">
            <div className="border-b border-border px-4 py-3">
              <h2 className="font-heading font-700 text-base uppercase tracking-wide text-foreground">{section.title}</h2>
            </div>
            <div className="px-4 py-4">
              {section.content && (
                <p className="text-muted-foreground text-sm leading-relaxed">{section.content}</p>
              )}
              {section.list && (
                <ul className="space-y-1.5">
                  {section.list.map((item, j) => (
                    <li key={j} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="w-1 h-1 bg-primary flex-shrink-0 mt-2" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}
