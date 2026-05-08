import type React from "react"
import type { Metadata } from "next"
import { Inter, Rajdhani } from "next/font/google"
import "./globals.css"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"
import { TopSitesModal } from "@/components/top-sites-modal"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const rajdhani = Rajdhani({ subsets: ["latin"], weight: ["500", "600", "700"], variable: "--font-rajdhani" })

const currentYear = new Date().getFullYear()

export const metadata: Metadata = {
  title: `TopUK Betting Sites List – Best UK Betting Sites ${currentYear}`,
  description:
    "Independent ranking of the best licensed betting sites in the United Kingdom. Expert reviews, welcome offers, and unbiased ratings for UK bettors — topukbettingsiteslist.com.",
  metadataBase: new URL("https://topukbettingsiteslist.com"),
  robots: "index, follow",
  referrer: "strict-origin-when-cross-origin",
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
}

export const viewport = {
  themeColor: "#161b27",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${rajdhani.variable} bg-background`}>
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full bg-background">
          {children}
          <Footer />
          <CookieBanner />
          <TopSitesModal />
        </div>
      </body>
    </html>
  )
}
