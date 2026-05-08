"use client"

import Link from "next/link"
import { useState } from "react"
import { Shield, Menu, X, ChevronRight } from "lucide-react"
import Image from "next/image"

const navLinks = [
  { label: "Top Betting Sites", href: "/" },
  { label: "About", href: "/about" },
  { label: "Responsible Gambling", href: "/responsible-gambling" },
]

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full bg-card border-b border-border">
      {/* Top strip */}
      <div className="bg-surface border-b border-border/50 hidden sm:block">
        <div className="container mx-auto max-w-6xl px-4 py-1.5 flex items-center justify-between">
          <p className="text-[11px] text-muted-foreground tracking-wide">
            Independent UK betting sites comparison — updated monthly
          </p>
          <div className="flex items-center gap-4 text-[11px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <Shield className="w-3 h-3 text-primary" />
              UKGC Licensed operators only
            </span>
            <span className="text-destructive font-heading font-700 tracking-widest border border-destructive/50 px-1.5 py-0.5">
              18+
            </span>
          </div>
        </div>
      </div>

      {/* Main nav bar */}
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            {/* Icon mark */}
            <Image src="/favicon.ico" width={24} height={24} />


            {/* Wordmark */}
            <div className="flex items-baseline gap-0 leading-none">
              <span className="font-heading font-700 text-[15px] md:text-[17px] uppercase tracking-[0.08em] text-foreground">Top</span>
              <span className="font-heading font-700 text-[15px] md:text-[17px] uppercase tracking-[0.08em] text-primary">UK</span>
              <span className="font-heading font-700 text-[15px] md:text-[17px] uppercase tracking-[0.08em] text-foreground mx-1.5">Betting Sites</span>
              <span className="hidden sm:inline font-heading font-700 text-[10px] uppercase tracking-[0.12em] text-muted-foreground self-center ml-0.5 border-l border-border pl-1.5">List</span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link text-[13px] text-muted-foreground hover:text-foreground transition-colors font-sans uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop right badges */}
          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://www.begambleaware.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-3 py-1.5 hover:opacity-90 transition-opacity flex-shrink-0"
              aria-label="BeGambleAware"
            >
              <img src="/gamble.webp" alt="BeGambleAware" className="h-5 w-auto object-contain" />
            </a>
            <span className="text-[11px] font-heading font-700 text-destructive border border-destructive/50 px-2 py-1 bg-destructive/10 uppercase tracking-widest flex-shrink-0">
              18+
            </span>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile nav drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-border pb-4 pt-2 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-between px-2 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-surface transition-colors uppercase tracking-wide"
              >
                {link.label}
                <ChevronRight className="w-4 h-4 opacity-50" />
              </Link>
            ))}
            <div className="flex items-center gap-3 px-2 pt-3 border-t border-border mt-2">
              <a href="https://www.begambleaware.org" target="_blank" rel="noopener noreferrer" className="bg-white px-3 py-1.5">
                <img src="/gamble.webp" alt="BeGambleAware" className="h-5 w-auto object-contain" />
              </a>
              <span className="text-[11px] font-heading font-700 text-destructive border border-destructive/50 px-2 py-1 bg-destructive/10 uppercase tracking-widest">
                18+
              </span>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
