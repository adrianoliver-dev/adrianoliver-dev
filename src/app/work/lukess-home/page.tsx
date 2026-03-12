import type { Metadata } from "next"
import Link from "next/link"
import CaseStudyLayout from "@/components/work/CaseStudyLayout"
import MetricCard from "@/components/work/MetricCard"

export const metadata: Metadata = {
  title: 'Lukess Home — E-Commerce Architecture Case Study',
  description:
    'Full-stack e-commerce platform built solo in ~23 days. ' +
    'Next.js 15, Supabase, WhatsApp Meta API checkout, Resend. ' +
    'Production-ready from day one.',
  openGraph: {
    title: 'Lukess Home — E-Commerce Architecture Case Study',
    description:
      'Full-stack e-commerce platform built solo in ~23 days. ' +
      'Next.js 15 App Router, Supabase PostgreSQL, WhatsApp checkout.',
    url: 'https://adrianoliver.dev/work/lukess-home',
  },
  alternates: {
    canonical: 'https://adrianoliver.dev/work/lukess-home',
  },
}

export default function LukessHomePage() {
  return (
    <CaseStudyLayout>
      
      {/* Back link */}
      <Link href="/#projects" className="font-mono text-xs text-text-secondary hover:text-accent transition-colors mb-12 inline-block">
        ← Back to work
      </Link>

      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full font-mono text-xs">● Live</span>
          <span className="font-mono text-xs text-text-secondary">E-Commerce Platform</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">Lukess Home</h1>
        <p className="text-lg text-text-secondary leading-relaxed">
          A retail clothing business needed to move beyond WhatsApp-only sales. 
          I built a complete e-commerce system — product catalog, checkout flow, 
          order management, and inventory sync — starting from zero web development 
          experience, with approximately 23 days of focused build time.
        </p>
      </header>

      {/* Metrics row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
        <MetricCard value="~23d" label="Active build" sublabel="Concept to production" />
        <MetricCard value="100" label="Lighthouse" sublabel="Performance score" />
        <MetricCard value="1" label="Developer" sublabel="Solo end-to-end" />
        <MetricCard value="< 1s" label="LCP" sublabel="Largest Contentful Paint" />
      </div>

      {/* Problem */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-text-primary mb-4">The Problem</h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          Lukess Home was running its entire sales operation through WhatsApp. 
          Customers would message to ask about stock, negotiate prices, and confirm orders — 
          all manually. There was no catalog, no inventory tracking, and no way to 
          scale without adding staff.
        </p>
        <p className="text-text-secondary leading-relaxed">
          The owner needed a system that would let customers browse and buy independently, 
          while giving him visibility into what was selling and what needed restocking — 
          without requiring him to learn any new tools.
        </p>
      </section>

      {/* Architecture */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-text-primary mb-4">Architecture Decisions</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Every architectural decision was made to maximize performance and 
          minimize operational risk:
        </p>
        <div className="flex flex-col gap-3">
          {[
            { decision: "Next.js 15 App Router + RSC", reason: "Product pages rendered server-side for SEO. Google indexes every product without JavaScript." },
            { decision: "Supabase PostgreSQL", reason: "Single source of truth for inventory. Real-time subscriptions prevent overselling when stock updates." },
            { decision: "WhatsApp checkout integration", reason: "Kept the existing customer behavior — browse online, confirm via WhatsApp — reducing adoption friction to zero." },
            { decision: "Resend for transactional email", reason: "Order confirmations sent automatically. Owner no longer needs to manually confirm every sale." },
          ].map(({ decision, reason }) => (
            <div key={decision} className="p-4 rounded-xl border border-border bg-surface">
              <p className="font-mono text-sm text-accent mb-1">{decision}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Challenges */}
      <section className="mb-12">
        <h2 className="font-serif text-2xl text-text-primary mb-4">Key Challenges</h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          The hardest technical constraint was building a shared-database 
          architecture where the storefront and the inventory management system 
          operate as two independent Vercel deployments against the same 
          Supabase PostgreSQL instance. Row Level Security policies needed to 
          grant the storefront read-only access while preserving full mutation 
          rights for the admin system — with zero risk of data bleed between layers.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Inventory sync between the storefront and the owner&apos;s management view required 
          careful Supabase RLS policy design — customers could read stock levels but not 
          write them, while the admin interface had full CRUD without exposing API keys 
          to the client.
        </p>
      </section>

      {/* Results */}
      <section className="mb-16">
        <h2 className="font-serif text-2xl text-text-primary mb-4">Results</h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          The platform shipped production-ready. The system handles the full 
          retail cycle — product discovery, filtered catalog, multi-step checkout 
          with GPS delivery integration, WhatsApp Meta API notifications, and 
          Resend transactional email — from a single PostgreSQL source of truth 
          shared with the inventory system.
        </p>
        <p className="text-text-secondary leading-relaxed">
          The system sustained a 100/100 Lighthouse performance score across all 
          product pages post-launch, with LCP consistently under one second on mobile.
        </p>
      </section>

      {/* CTA */}
      <div className="p-6 rounded-2xl border border-accent/20 bg-accent/5">
        <p className="font-serif text-lg text-text-primary mb-2">
          Need a production-ready e-commerce system?
        </p>
        <p className="text-sm text-text-secondary mb-4">
          I scope, architect, and ship. No templates, no compromises on performance.
        </p>
        <Link 
          href="/contact"
          className="inline-block bg-accent text-black px-5 py-2.5 text-sm font-medium hover:bg-amber-500 transition-all duration-300 shadow-[0_0_40px_#D9770630] hover:shadow-[0_0_60px_#D9770650]"
        >
          Discuss your project →
        </Link>
      </div>

    </CaseStudyLayout>
  )
}
