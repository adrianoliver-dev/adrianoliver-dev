import type { Metadata } from "next"
import Link from "next/link"
import CaseStudyLayout from "@/components/work/CaseStudyLayout"
import MetricCard from "@/components/work/MetricCard"

export const metadata: Metadata = {
  title: 'Lukess Inventory — POS & Inventory System Case Study',
  description:
    'Multi-role POS and inventory management system with real-time sync, ' +
    'RBAC, and multi-location support. Next.js 15, Supabase, TypeScript.',
  openGraph: {
    title: 'Lukess Inventory — POS & Inventory System Case Study',
    description:
      'Multi-role POS system with real-time inventory sync and RBAC. ' +
      'Built solo with Next.js 15 and Supabase PostgreSQL.',
    url: 'https://adrianoliver.dev/work/lukess-inventory',
  },
  alternates: {
    canonical: 'https://adrianoliver.dev/work/lukess-inventory',
  },
}

export default function LukessInventoryPage() {
  return (
    <CaseStudyLayout>

      <Link href="/#projects" className="font-mono text-xs text-text-secondary hover:text-accent transition-colors mb-12 inline-block">
        ← Back to work
      </Link>

      <header className="mb-12">
        <div className="flex items-center gap-3 mb-4">
          <span className="bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full font-mono text-xs">◆ Case Study</span>
          <span className="font-mono text-xs text-text-secondary">POS + Inventory System</span>
        </div>
        <h1 className="font-serif text-4xl md:text-5xl text-text-primary mb-4">Lukess Inventory</h1>
        <p className="text-lg text-text-secondary leading-relaxed">
          A clothing retailer operating 3 physical locations needed a unified 
          operations system. I built a real-time POS and inventory management 
          platform from scratch — multi-location stock sync, 3-tier RBAC, 
          WhatsApp Business API integration, and analytics — sharing the same 
          PostgreSQL database as the public-facing e-commerce storefront.
        </p>
      </header>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-16">
        <MetricCard value="3" label="Locations" sublabel="Real-time sync" />
        <MetricCard value="< 500ms" label="Sync latency" sublabel="Cross-location updates" />
        <MetricCard value="RBAC" label="Access control" sublabel="3 permission tiers" />
        <MetricCard value="~23d" label="Active build" sublabel="Concurrent with e-commerce build" />
      </div>

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-text-primary mb-4">The Problem</h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          With 3 retail locations selling the same inventory, the business had no way 
          to know which location had what in stock without calling each store. 
          Overselling was common. Staff had no unified system for processing sales, 
          and the owner had no real-time visibility into revenue or stock movement.
        </p>
        <p className="text-text-secondary leading-relaxed">
          The system needed to work on basic hardware, require minimal training, 
          and be operational within ~23 days — with no budget for commercial POS software.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-text-primary mb-4">Architecture Decisions</h2>
        <p className="text-text-secondary leading-relaxed mb-6">
          Real-time synchronization across distributed locations was the central constraint. 
          Every architectural decision flowed from that requirement:
        </p>
        <div className="flex flex-col gap-3">
          {[
            { decision: "Supabase Realtime subscriptions", reason: "WebSocket-based stock updates propagate to all connected locations in under 500ms. No polling, no stale data." },
            { decision: "PostgreSQL Row Level Security", reason: "Staff can process sales and view their location's stock. Managers see all locations. Owners get full analytics access. Enforced at the database level." },
            { decision: "Next.js App Router with Server Actions", reason: "POS transactions are server mutations — no client-side inventory math that could drift from the database state." },
            { decision: "Optimistic UI with server reconciliation", reason: "Sales feel instant for cashiers. If a conflict occurs (two locations selling the last unit simultaneously), the server resolves it and the UI corrects automatically." },
          ].map(({ decision, reason }) => (
            <div key={decision} className="p-4 rounded-xl border border-border bg-surface">
              <p className="font-mono text-sm text-accent mb-1">{decision}</p>
              <p className="text-sm text-text-secondary leading-relaxed">{reason}</p>
            </div>
          ))}
        </div>
        <p className="text-sm text-text-secondary leading-relaxed mt-6 p-4 rounded-xl border border-border bg-surface">
          <span className="font-mono text-accent">Shared database architecture: </span>
          Both this system and the public storefront connect to the same 
          Supabase PostgreSQL instance. The storefront operates under 
          read-only RLS policies. This system holds full mutation rights, 
          isolated as a separate Vercel deployment to protect the 
          revenue-facing application from admin bundle risk.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="font-serif text-2xl text-text-primary mb-4">Key Challenges</h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          The most complex engineering challenge was designing atomic POS 
          transactions across a multi-location inventory matrix. A single 
          checkout needed to deduct the exact size/color variant from the 
          correct physical stall, in a single SQL RPC, without race conditions 
          — while simultaneously firing WhatsApp Business API notifications 
          and Resend emails without blocking the client response.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Designing an RBAC system that was strict enough for the owner&apos;s security 
          requirements but simple enough that staff could be onboarded in under 
          10 minutes required careful schema design with a roles table and 
          policy-per-action approach rather than column-level permissions.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="font-serif text-2xl text-text-primary mb-4">Results</h2>
        <p className="text-text-secondary leading-relaxed mb-4">
          All 3 locations went live on the system simultaneously. Overselling dropped 
          to zero from day one. The owner gained a real-time dashboard showing revenue, 
          stock levels, and order status across all locations from any device.
        </p>
        <p className="text-text-secondary leading-relaxed">
          Staff onboarding took under 15 minutes per person. The system has processed 
          daily sales operations without downtime since deployment.
        </p>
      </section>

      <div className="p-6 rounded-2xl border border-accent/20 bg-accent/5">
        <p className="font-serif text-lg text-text-primary mb-2">
          Need a custom business management system?
        </p>
        <p className="text-sm text-text-secondary mb-4">
          Inventory systems, POS, internal tools. Built for your exact workflow, not a generic SaaS template.
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
