"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react"

function Panel({
  title,
  children,
  defaultOpen = false,
}: {
  title: string
  children: React.ReactNode
  defaultOpen?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border-b border-border last:border-b-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 text-left group"
        aria-expanded={open}
      >
        <h2 className="font-heading font-700 text-base md:text-lg uppercase tracking-widest text-foreground group-hover:text-primary transition-colors">
          {title}
        </h2>
        {open
          ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />
        }
      </button>

      {open && (
        <div className="pb-7 space-y-4 text-muted-foreground text-sm md:text-[15px] leading-relaxed">
          {children}
        </div>
      )}
    </div>
  )
}

export function InfoSections() {
  return (
    <section className="bg-background py-10 md:py-14 px-4" aria-label="Information">
      <div className="container mx-auto max-w-6xl">

        {/* Section label */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-1 h-6 bg-primary flex-shrink-0" aria-hidden="true" />
          <h2 className="font-heading font-700 text-xl md:text-2xl uppercase tracking-widest text-foreground">
            Betting Guide
          </h2>
        </div>

        <div className="border-t border-border">

          {/* Panel 1 */}
          <Panel title="How We Rate Betting Sites" defaultOpen>
            <p>
              topukbettingsiteslist.com uses an independent, structured methodology to assess every bookmaker listed on this page. Our editorial team spends several weeks testing each operator hands-on before any rating is published — we never accept payment from operators to influence rankings.
            </p>
            <p>
              <span className="text-foreground font-semibold">Licensing and safety</span> carry the most weight in our scoring. We verify each site holds a current, active UK Gambling Commission (UKGC) licence, check SSL encryption standards, review player fund protection levels, and confirm that responsible gambling tools are easy to find and use. No unlicensed operator can appear on this list, regardless of its offer.
            </p>
            <p>
              <span className="text-foreground font-semibold">Promotions</span> are assessed on genuine value rather than headline figures. We read every term and condition — wagering requirements, maximum bet restrictions, time limits, and game restrictions — and score offers on how fair they are to ordinary players. A welcome bonus with a 60× wagering requirement will always rank below one offering genuine, straightforward value.
            </p>
            <p>
              <span className="text-foreground font-semibold">Odds quality</span> is measured by comparing prices across a representative sample of Premier League and major sport markets. We calculate operator margins and assess market breadth — from mainstream football to niche sports and in-play options. Better average odds directly improve a site&apos;s score.
            </p>
            <p>
              <span className="text-foreground font-semibold">Usability, payments, and customer support</span> complete the picture. We test registration on both mobile and desktop, attempt deposits and withdrawals using common UK methods, time live chat responses, and evaluate the depth of the help centre. Fast withdrawals, responsive support, and a smooth mobile experience are expected at any site we recommend.
            </p>
          </Panel>

          {/* Panel 2 */}
          <Panel title="What Makes a Good UK Betting Site in 2026">
            <p>
              The UK betting market is one of the most regulated in the world, which works in bettors&apos; favour. Every site we list must hold a UKGC licence — this means the operator is legally required to segregate player funds, display responsible gambling tools prominently, and submit to regular independent audits. Choosing a licensed site is the single most important step you can take as a new bettor.
            </p>
            <p>
              Beyond the licence, the best sites in {new Date().getFullYear()} share a handful of consistent traits. They offer competitive odds across football, horse racing, tennis, and cricket — the four largest markets for UK players. They process withdrawals within 24 hours to major UK bank accounts and debit cards. Their mobile apps or responsive sites work reliably without lag or login issues. And they make it straightforward to set deposit limits, take a cooling-off period, or self-exclude if needed.
            </p>
            <p>
              Welcome offers matter, but they should not be the deciding factor. A strong ongoing promotion programme — acca insurance, enhanced odds for existing customers, in-play boosts — is a far better indicator of long-term value than a headline new-customer bonus that comes loaded with restrictive terms.
            </p>
          </Panel>

          {/* Panel 3 */}
          <Panel title="Responsible Gambling">
            <p>
              Betting should always be treated as entertainment, not as a source of income. Every UKGC-licensed operator is required to provide a full suite of responsible gambling tools, and we strongly encourage all players to make use of them regardless of experience level.
            </p>
            <p>
              <span className="text-foreground font-semibold">Deposit limits</span> allow you to cap how much you load onto an account each day, week, or month. Setting a limit before you start is one of the most effective ways to stay in control. Most operators apply increases to limits after a cooling-off period, so they cannot be raised impulsively in the heat of the moment.
            </p>
            <p>
              <span className="text-foreground font-semibold">Session reminders and reality checks</span> alert you to how long you have been betting. Research consistently shows that losing track of time is one of the key factors in problem gambling — a simple notification every 30 or 60 minutes can make a meaningful difference.
            </p>
            <p>
              <span className="text-foreground font-semibold">Self-exclusion</span> is available on every licensed UK site and through GAMSTOP — the national self-exclusion scheme that blocks you from all UKGC-licensed operators simultaneously. If gambling is causing harm, GAMSTOP at <span className="text-primary">www.gamstop.co.uk</span> should be your first call. GambleAware (<span className="text-primary">www.begambleaware.org</span>) and GamCare (<span className="text-primary">www.gamcare.org.uk</span>) offer free, confidential support and advice 24 hours a day.
            </p>
            <p className="border-l-2 border-destructive pl-4 text-foreground bg-destructive/5 py-3 pr-3">
              <strong>18+ only.</strong> Gambling can be addictive. Never bet more than you can afford to lose. If you feel gambling is affecting your health, relationships, or finances, please seek help immediately.
            </p>
          </Panel>

          {/* Panel 4 */}
          <Panel title="Frequently Asked Questions">
            <div className="space-y-5">
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">Are all sites on this list UKGC licensed?</h3>
                <p>Yes, without exception. Every operator that appears on topukbettingsiteslist.com holds a current licence issued by the UK Gambling Commission. We verify licence status before publishing and update our list regularly.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">How are the rankings ordered?</h3>
                <p>Rankings reflect our independent composite score based on licensing, promotions, odds quality, usability, payment options, and customer support. The list is reviewed and updated throughout {new Date().getFullYear()} as operators improve or fall short of standards.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">Do you receive commission from bookmakers?</h3>
                <p>We may earn affiliate revenue when a user clicks through and registers with a site. This commercial relationship does not affect our editorial rankings — sites are scored on merit, and we have declined to list operators that did not meet our standards despite commercial interest.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">Can I use multiple betting sites at once?</h3>
                <p>Yes. Most experienced bettors maintain accounts at two or three operators in order to line-shop for the best odds and take advantage of different promotions. There is no restriction on holding multiple accounts with different licensed bookmakers.</p>
              </div>
              <div>
                <h3 className="text-foreground font-semibold mb-1.5">What payment methods are accepted at UK betting sites?</h3>
                <p>All sites on this list accept Visa and Mastercard debit cards — credit cards are banned for gambling transactions in the UK by UKGC regulation. Most also support PayPal, Apple Pay, and bank transfer. Processing times vary, but the best operators complete withdrawals within 24 hours.</p>
              </div>
            </div>
          </Panel>

        </div>
      </div>
    </section>
  )
}
