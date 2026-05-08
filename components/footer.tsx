import Link from "next/link"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

const footerNav = [
  { label: "Privacy Policy",         href: "/privacy-policy" },
  { label: "Cookie Policy",          href: "/cookie-policy" },
  { label: "About Us",               href: "/about" },
  { label: "Responsible Gambling",   href: "/responsible-gambling" },
]

export function Footer() {
  return (
    <footer className="w-full bg-card border-t border-border" aria-label="Site footer">

      {/* ── Top strip: logo + nav ── */}
      <div className="border-b border-border">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-8 flex flex-col md:flex-row md:items-start md:justify-between gap-8">

          {/* Brand */}
          <div className="flex-shrink-0 max-w-xs">
            <Link href="/" className="flex items-center gap-2.5 mb-3 group">
              {/* Icon mark */}
              <Image src="/favicon.ico" width={32} height={32} alt="Icon mark" className="flex-shrink-0" />
              {/* Wordmark */}
              <div className="flex items-baseline gap-0 leading-none">
                <span className="font-heading font-700 text-[15px] uppercase tracking-[0.08em] text-foreground">Top</span>
                <span className="font-heading font-700 text-[15px] uppercase tracking-[0.08em] text-primary">UK</span>
                <span className="font-heading font-700 text-[15px] uppercase tracking-[0.08em] text-foreground mx-1.5">Betting Sites</span>
                <span className="font-heading font-700 text-[10px] uppercase tracking-[0.12em] text-muted-foreground self-center ml-0.5 border-l border-border pl-1.5">List</span>
              </div>
            </Link>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Independent comparison of UKGC-licensed UK betting sites. We do not operate a bookmaker. All rankings are based on independent editorial review.
            </p>
          </div>

          {/* Nav columns */}
          <div className="flex flex-wrap gap-x-10 gap-y-1">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 font-heading font-700">Pages</p>
              <nav className="flex flex-col gap-2" aria-label="Footer navigation">
                {footerNav.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-xs text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-muted-foreground mb-3 font-heading font-700">Regulatory</p>
              <div className="flex flex-col gap-2">
                {[
                  { name: "UKGC",          url: "https://www.gamblingcommission.gov.uk" },
                  { name: "GambleAware",   url: "https://www.begambleaware.org" },
                  { name: "GamCare",       url: "https://www.gamcare.org.uk" },
                  { name: "GAMSTOP",       url: "https://www.gamstop.co.uk" },
                ].map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wide flex items-center gap-1"
                  >
                    {link.name}
                    <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Endorsed by — окремий рядок ── */}
      <div className="border-b border-border">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-5 flex flex-col gap-3">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground font-heading font-700">Endorsed by</p>
          <div className="flex flex-row flex-wrap items-center gap-3">
            <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="bg-white px-3 py-2 hover:opacity-90 transition-opacity">
              <img src="/gamble.webp" alt="BeGambleAware" className="h-6 w-auto object-contain" />
            </a>
            <a href="https://www.gamstop.co.uk" target="_blank" rel="noopener noreferrer" className="bg-white px-3 py-2 hover:opacity-90 transition-opacity">
              <img src="/gamstop.svg" alt="GAMSTOP" className="h-6 w-auto object-contain" />
            </a>
            <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer" className="bg-white px-3 py-2 hover:opacity-90 transition-opacity">
              <img src="/gamecare.svg" alt="GamCare" className="h-6 w-auto object-contain" />
            </a>
            <a href="https://www.gamblingcommission.gov.uk" target="_blank" rel="noopener noreferrer" className="bg-white px-3 py-2 hover:opacity-90 transition-opacity">
              <img src="/commission.png" alt="UKGC" className="h-6 w-auto object-contain" />
            </a>
            <a href="https://gordonmoody.org.uk/" target="_blank" rel="noopener noreferrer" className="bg-white px-3 py-2 hover:opacity-90 transition-opacity">
              <img src="/gordon.png" alt="UKGC" className="h-6 w-auto object-contain" />
            </a>
          </div>
        </div>
      </div>

      {/* ── Disclaimer ── */}
      <div className="border-b border-border bg-surface">
        <div className="container mx-auto max-w-6xl px-4 md:px-6 py-5">
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            <span className="text-destructive font-semibold">18+</span> · topukbettingsiteslist.com is an independent comparison website. We may receive commission when users visit operators through our links. This does not influence our editorial ratings. All operators listed hold a valid UKGC licence. Gambling involves risk — please gamble responsibly. If you are concerned about your gambling, visit{" "}
            <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">BeGambleAware.org</a>.
          </p>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="container mx-auto max-w-6xl px-4 md:px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] text-muted-foreground uppercase tracking-widest">
        <span>&copy; {new Date().getFullYear()} topukbettingsiteslist.com — All rights reserved</span>
        <span className="text-destructive font-heading font-700 border border-destructive/40 px-2 py-0.5 bg-destructive/10">18+</span>
      </div>
    </footer>
  )
}
