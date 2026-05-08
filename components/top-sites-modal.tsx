"use client"

import { useEffect, useState } from "react"
import { X, Award, Star, ExternalLink } from "lucide-react"
import { bettingSites } from "@/lib/mock-data"

export function TopSitesModal() {
  const [open, setOpen] = useState(false)
  const top = bettingSites[0]

  useEffect(() => {
    const t = setTimeout(() => setOpen(true), 9000)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  if (!open || !top) return null

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative w-full max-w-sm bg-card border border-highlight/40 shadow-2xl overflow-hidden rank-1-glow"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label="Our top pick"
      >
        {/* Gold accent top bar */}
        <div className="h-[3px] bg-highlight w-full" />

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-surface border-b border-border">
          <div className="flex items-center gap-2">
            <Award className="w-4 h-4 text-highlight" aria-hidden="true" />
            <span className="font-heading font-700 text-sm uppercase tracking-wide text-foreground">Our Top Pick</span>
            <span className="text-[10px] text-muted-foreground uppercase tracking-widest hidden sm:inline">
              — {new Date().toLocaleString("en-GB", { month: "long", year: "numeric" })}
            </span>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="w-7 h-7 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Logo */}
        <div className="mx-5 mt-5 bg-black flex items-center justify-center h-16">
          <img src={top.logo || "/placeholder.svg"} alt={`${top.name} logo`} className="max-h-24 max-w-[190px] object-contain" />
        </div>

        {/* Rating */}
        <div className="mx-5 mt-3 flex items-center justify-between border border-border bg-surface px-4 py-3">
          <div className="flex gap-0.5" aria-label={`${top.stars} out of 5 stars`}>
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} className={`w-4 h-4 ${i < top.stars ? "fill-highlight text-highlight" : "fill-muted/40 text-muted/40"}`} aria-hidden="true" />
            ))}
          </div>
          <div className="text-right">
            <span className="font-heading font-700 text-3xl text-primary tabular-nums">{top.rating.toFixed(1)}</span>
            <span className="text-xs text-muted-foreground">/10</span>
          </div>
        </div>

        {/* Offer */}
        <div className="mx-5 mt-3 border-l-2 border-highlight bg-highlight/5 px-4 py-3">
          <div className="text-[10px] uppercase tracking-widest text-muted-foreground mb-1">Welcome Offer</div>
          <p className="text-foreground font-semibold text-sm leading-snug">{top.bonus}</p>
        </div>

        {/* CTA */}
        <div className="p-5 pt-4">
          <a
            href={top.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            className="flex items-center justify-center gap-2 w-full h-12 bg-primary hover:bg-primary/85 text-primary-foreground font-heading font-700 uppercase tracking-wide text-sm transition-colors"
          >
            Visit Site
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
          <p className="text-center text-[10px] text-muted-foreground uppercase tracking-wide mt-3">
            <span className="text-destructive font-semibold">18+</span> · T&amp;Cs Apply · BeGambleAware.org
          </p>
        </div>
      </div>
    </div>
  )
}
