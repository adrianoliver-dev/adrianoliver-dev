import { Metadata } from "next";
import Image from "next/image";
import ProjectHero from "@/components/projects/ProjectHero";
import TechBento from "@/components/projects/TechBento";
import ProjectMetric from "@/components/projects/ProjectMetric";
import FadeUp from "@/components/ui/FadeUp";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import VideoDemo from "@/components/projects/VideoDemo";

export const metadata: Metadata = {
  title: "Lukess Inventory | Enterprise ERP Case Study",
  description: "Advanced inventory management and POS system built with Next.js and Supabase.",
};

export default function LukessInventoryCaseStudy() {
  const metadata = [
    { label: "Role",   value: "Systems Architect" },
    { label: "Stack",  value: "Next.js · TypeScript · Supabase · Recharts" },
    { label: "Type",   value: "Internal ERP / POS" },
    { label: "Access", value: "Role-gated — 3 permission levels" },
  ];

  const metrics = [
    { value: "19", suffix: " tables", label: "PostgreSQL schema" },
    { value: "7", suffix: " states", label: "Order state machine" },
    { value: "9", suffix: " templates", label: "WhatsApp automations" },
    { value: "3", suffix: " roles", label: "RBAC — admin · manager · staff" },
  ];

  const infrastructureFeatures = [
    {
      title: "Loyalty Engine",
      description: "On order completion, the system automatically generates a unique discount code — configurable percentage, single-use, 7-day expiry — and sends it to the customer simultaneously by email and WhatsApp. Zero manual steps.",
    },
    {
      title: "Audit Trail",
      description: "Every stock movement, order state change, and staff action is logged with a timestamp and user ID. The record is immutable — no row can be deleted, only marked. Full accountability without spreadsheets.",
    },
  ];

  return (
    <article className="bg-[var(--color-background)] min-h-screen">
      <ScrollToTop />
      
      <ProjectHero
        title="Inventory"
        italicWord="System"
        description="An enterprise-grade ERP solution designed for complex multi-node retail environments. This system unifies real-time tracking, financial reporting, and staff management into a single immutable source of truth."
        metadata={metadata}
      />

      {/* Metrics Section */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto pt-24 pb-12">
        <FadeUp>
          <ProjectMetric metrics={metrics} />
        </FadeUp>
      </section>

      {/* SECTION A: The Problem */}
      <FadeUp delay={0.1}>
        <section className="py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              {/* Left Column: Text */}
              <div className="space-y-6">
                <span className="font-mono text-xs text-[var(--color-text-secondary)] uppercase tracking-widest mb-4 block">
                  The Problem
                </span>
                <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] leading-tight">
                  The Operations Problem
                </h2>
                <div className="space-y-6 text-[var(--color-text-secondary)] text-lg leading-relaxed font-light">
                  <p>
                    Before this system, stock records lived in paper logs and end-of-week spreadsheets. A return at one location never reached the others. Purchasing decisions were reactive &mdash; they only knew they were out of stock when the shelf was empty. No audit trail. No financial visibility.
                  </p>
                  <p>
                    I built a custom ERP and POS from scratch on a 19-table PostgreSQL schema with row-level security. Stock is not decremented on sale &mdash; it is reserved via a database trigger, preventing overselling even when a physical sale and an online order compete for the same unit simultaneously. A 7-state order machine manages every transition from placement to delivery, triggering automated email and WhatsApp notifications on each state change &mdash; email via Resend for standard transactional workflows, WhatsApp via direct Meta Business API integration with no Twilio dependency. Three roles &mdash; admin, manager, staff &mdash; are enforced at the database level via RLS and at the application level via Next.js Edge middleware.
                  </p>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="relative aspect-[5/3] rounded-xl overflow-hidden border border-[var(--color-border)] group transition-all duration-500 hover:border-[color-mix(in_srgb,var(--color-accent)_40%,transparent)]">
                <Image 
                  src="/images/projects/lukess-inventory/inventory_dashboard.png" 
                  alt="Business Intelligence Center" 
                  fill 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* SECTION B: The Solution */}
      <FadeUp delay={0.1}>
        <section className="py-16 px-6">
          <div className="mx-auto max-w-3xl">
            <span className="font-mono text-xs text-[var(--color-text-secondary)] uppercase tracking-widest mb-4 block">
              The Solution
            </span>
            <div className="space-y-6 text-[var(--color-text-secondary)] text-lg leading-relaxed font-light">
              <p>
                The backend utilizes Supabase (PostgreSQL) as the source of truth, leveraging Row Level Security (RLS) to enforce data boundaries between storefronts and warehouse staff. Every transaction is auditable, and permissions are managed dynamically based on staff roles.
              </p>
              <p>
                The frontend is built with Next.js, providing a low-latency Point of Sale interface that remains high-performing even on basic tablet hardware used in physical retail locations. Real-time observability through Recharts dashboards gives the owner instant financial clarity.
              </p>
            </div>
          </div>
        </section>
      </FadeUp>

      {/* SECTION C: Testimonial */}
      <FadeUp delay={0.15}>
        <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto">
          <div
            className="relative rounded-2xl p-10 border"
            style={{
              borderColor: "var(--color-border)",
              background: "var(--color-surface)",
            }}
          >
            <span
              className="font-serif text-8xl leading-none absolute -top-6 left-8 select-none"
              style={{ color: "var(--color-accent)", opacity: 0.4 }}
              aria-hidden="true"
            >
              &ldquo;
            </span>

            <blockquote className="relative z-10 space-y-6">
              <p
                className="font-serif text-xl md:text-2xl leading-relaxed font-light italic"
                style={{ color: "var(--color-text-primary)" }}
              >
                The order and inventory system is exactly what we needed &mdash; we can
                see what&apos;s happening across all four locations in real time, and the POS
                makes processing sales much faster than before. The WhatsApp
                notification on every order state change is the part we use most.
              </p>
              <footer
                className="flex items-center gap-4 pt-4"
                style={{ borderTop: "1px solid var(--color-border)" }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-medium flex-shrink-0"
                  style={{
                    backgroundColor: "color-mix(in srgb, var(--color-accent) 15%, transparent)",
                    color: "var(--color-accent)",
                    border: "1px solid var(--color-accent)",
                  }}
                >
                  AM
                </div>
                <div>
                  <p
                    className="font-mono text-sm font-medium"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Aldrin Mamani
                  </p>
                  <p
                    className="font-mono text-xs"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    Lukess &mdash; Mercado Mutualista, Santa Cruz de la Sierra
                  </p>
                </div>
                <div className="ml-auto">
                  <span
                    className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded"
                    style={{
                      color: "var(--color-accent)",
                      backgroundColor: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
                      border: "1px solid var(--color-accent)",
                    }}
                  >
                    Tested in production
                  </span>
                </div>
              </footer>
            </blockquote>
          </div>
        </section>
      </FadeUp>
      
      {/* Video Demo Placeholder */}
      <VideoDemo />

      {/* SECTION D: Narrative screenshots */}
      <div className="group/rows">
        {/* Row 1 */}
        <FadeUp delay={0.1}>
          <div className="py-16 px-6 transition-opacity duration-500 group-hover/rows:opacity-50 hover:!opacity-100">
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[5/3] rounded-xl overflow-hidden border border-[var(--color-border)] group transition-all duration-500 hover:border-[color-mix(in_srgb,var(--color-accent)_40%,transparent)] hover:shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_12%,transparent)]">
                <Image 
                  src="/images/projects/lukess-inventory/inventory_POS_view.png" 
                  alt="Point of Sale Interface" 
                  fill 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-accent)" }}>
                  Point of Sale
                </p>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-light">
                  A sale at the physical store updates online inventory in the same database transaction — the customer on the website cannot buy what was just sold in-store. No sync delay, no reconciliation needed.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Row 2 */}
        <FadeUp delay={0.1}>
          <div className="py-16 px-6 transition-opacity duration-500 group-hover/rows:opacity-50 hover:!opacity-100">
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-accent)" }}>
                  Live Inventory
                </p>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-light">
                  Every SKU, every size, every location — visible in one table with live counts. A manager at one storefront can see stock at the other two without making a phone call.
                </p>
              </div>
              <div className="relative aspect-[5/3] rounded-xl overflow-hidden border border-[var(--color-border)] group order-1 md:order-2 transition-all duration-500 hover:border-[color-mix(in_srgb,var(--color-accent)_40%,transparent)] hover:shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_12%,transparent)]">
                <Image 
                  src="/images/projects/lukess-inventory/inventory_list_inventory.png" 
                  alt="Live Inventory" 
                  fill 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Row 3 */}
        <FadeUp delay={0.1}>
          <div className="py-16 px-6 transition-opacity duration-500 group-hover/rows:opacity-50 hover:!opacity-100">
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[5/3] rounded-xl overflow-hidden border border-[var(--color-border)] group transition-all duration-500 hover:border-[color-mix(in_srgb,var(--color-accent)_40%,transparent)] hover:shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_12%,transparent)]">
                <Image 
                  src="/images/projects/lukess-inventory/inventory_edit_product.png" 
                  alt="Product Management" 
                  fill 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-accent)" }}>
                  Product Management
                </p>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-light">
                  Products are created once and sync to the storefront automatically. Images upload directly to Supabase Storage — no external CDN configuration required.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Row 4 */}
        <FadeUp delay={0.1}>
          <div className="py-16 px-6 transition-opacity duration-500 group-hover/rows:opacity-50 hover:!opacity-100">
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-accent)" }}>
                  Financial Reporting
                </p>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-light">
                  The owner can filter sales by date range, location, or staff member — and export the result to PDF or Excel in one click. No spreadsheet assembly required.
                </p>
              </div>
              <div className="relative aspect-[5/3] rounded-xl overflow-hidden border border-[var(--color-border)] group order-1 md:order-2 transition-all duration-500 hover:border-[color-mix(in_srgb,var(--color-accent)_40%,transparent)] hover:shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_12%,transparent)]">
                <Image 
                  src="/images/projects/lukess-inventory/inventory_reports.png" 
                  alt="Financial Reports" 
                  fill 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Row 5 */}
        <FadeUp delay={0.1}>
          <div className="py-16 px-6 transition-opacity duration-500 group-hover/rows:opacity-50 hover:!opacity-100">
            <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[5/3] rounded-xl overflow-hidden border border-[var(--color-border)] group transition-all duration-500 hover:border-[color-mix(in_srgb,var(--color-accent)_40%,transparent)] hover:shadow-[0_0_24px_color-mix(in_srgb,var(--color-accent)_12%,transparent)]">
                <Image 
                  src="/images/projects/lukess-inventory/inventory_reports_2.png" 
                  alt="Advanced Analytics" 
                  fill 
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div>
                <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-accent)" }}>
                  Advanced Analytics
                </p>
                <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-light">
                  Sales broken down by category, discount impact, and staff performance — all from the same Recharts dashboard. Data that took days to compile manually is now always current.
                </p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>

      {/* SECTION F: Infrastructure */}
      <FadeUp delay={0.1}>
        <TechBento sectionTitle="Strategic Engineering" features={infrastructureFeatures} />
      </FadeUp>

      {/* SECTION G: Results */}
      <section className="py-48 px-6 lg:px-12 text-center max-w-4xl mx-auto">
        <FadeUp delay={0.1}>
          <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest mb-8 block">Results</span>
          <h2 className="text-5xl md:text-7xl font-serif text-[var(--color-text-primary)] mb-12 leading-tight">
            What changed.
          </h2>
          
          <div className="space-y-12 max-w-2xl mx-auto text-left mb-16">
            <div className="border-l-2 border-[var(--color-border)] pl-6 text-[var(--color-text-secondary)]">
              <p className="text-lg font-light leading-relaxed">
                Before: four locations running on disconnected paper logs. No cross-location visibility. Purchasing made by memory. Returns unrecorded. Zero financial reporting.
              </p>
            </div>

            <div className="w-12 h-px bg-[var(--color-accent)] opacity-60 my-6 ml-6" />

            <div className="border-l-2 border-[var(--color-accent)] pl-6 text-[var(--color-text-primary)]">
              <p className="text-lg font-light leading-relaxed">
                After: a 19-table PostgreSQL system where every stock movement, order state change, and staff action is logged and auditable. The POS receives online orders from the e-commerce storefront in real time and manages their full lifecycle &mdash; from payment confirmation to WhatsApp notification to completion. A loyalty engine generates a unique discount code automatically on delivery and sends it to the customer by email and WhatsApp in the same transaction. Financial reports are available instantly, exportable to PDF and Excel.
              </p>
            </div>
          </div>

          {/* SECTION H: CTAs */}
          <div className="flex justify-center flex-col md:flex-row gap-6 items-center">
            <MagneticButton
              href="/contact"
              className="bg-[var(--color-accent)] text-black px-8 py-4 text-sm font-medium hover:bg-amber-500 transition-all duration-300 shadow-[0_0_40px_rgba(217,119,6,0.2)] hover:shadow-[0_0_60px_rgba(217,119,6,0.3)] rounded-full"
            >
              Request a custom system
            </MagneticButton>
            <MagneticButton
              href="https://lukess-inventory-system.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--color-border)] text-[var(--color-text-primary)] px-8 py-4 text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200 rounded-full"
            >
              View live system →
            </MagneticButton>
          </div>
        </FadeUp>
      </section>
    </article>
  );
}
