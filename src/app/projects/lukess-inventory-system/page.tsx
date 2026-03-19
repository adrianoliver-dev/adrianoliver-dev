import { Metadata } from "next";
import ProjectHero from "@/components/projects/ProjectHero";
import TechBento from "@/components/projects/TechBento";
import ProjectMetric from "@/components/projects/ProjectMetric";
import TechnicalSnippet from "@/components/projects/TechnicalSnippet";
import FadeUp from "@/components/ui/FadeUp";
import ProjectGallery from "@/components/projects/ProjectGallery";
import VideoDemo from "@/components/projects/VideoDemo";
import MagneticButton from "@/components/ui/MagneticButton";

export const metadata: Metadata = {
  title: "Lukess Inventory | Enterprise ERP Case Study",
  description: "Advanced inventory management and POS system built with Next.js 15 and Supabase.",
};

const RBAC_POLICY_CODE = `-- Granular RBAC using Row Level Security
ALTER TABLE inventory ENABLE ROW LEVEL SECURITY;

-- Dynamic manager-level access control
CREATE POLICY "Managers can update stock"
ON inventory FOR UPDATE
TO authenticated
USING ( 
  auth.uid() IN (
    SELECT user_id FROM staff_roles 
    WHERE role IN ('manager', 'admin')
  )
);

-- Public read-only for catalog sync
CREATE POLICY "Public read access"
ON inventory FOR SELECT
TO anon, authenticated
USING (true);`;

export default function LukessInventoryCaseStudy() {
  const metadata = [
    { label: "Role", value: "Systems Architect" },
    { label: "Stack", value: "Next.js 16 · TypeScript · Supabase · Recharts" },
    { label: "Type", value: "Internal ERP / POS" },
    { label: "Access", value: "Role-gated — 3 permission levels" },
  ];

  const metrics = [
    { value: "19", suffix: " tables", label: "PostgreSQL schema" },
    { value: "7", suffix: " states", label: "Order state machine" },
    { value: "9", suffix: " templates", label: "WhatsApp automations" },
    { value: "3", suffix: " roles", label: "RBAC — admin · manager · staff" },
  ];

  const features = [
    {
      title: "Reactive POS",
      description: "A low-latency point-of-sale interface optimized for high-speed physical transactions with optimistic state reconciliation.",
      colSpan: "col-span-1" as const,
    },
    {
      title: "Granular RBAC",
      description: "Hardware-level security and dynamic permissions via Supabase Auth and PostgreSQL policies (RLS).",
      colSpan: "col-span-2" as const,
    },
    {
      title: "Supply Intelligence",
      description: "Automated low-stock alerts with configurable threshold rules per SKU and location. When stock falls below the minimum, the dashboard surfaces it in the Business Intelligence Center immediately.",
      colSpan: "col-span-2" as const,
    },
    {
      title: "Audit Trails",
      description: "Immutable transaction logs tracking every inventory movement, adjustment, and staff action.",
    },
  ];

  return (
    <article className="bg-[var(--color-background)] min-h-screen">
      <ProjectHero
        title="Inventory"
        italicWord="System"
        description="An enterprise-grade ERP solution designed for complex multi-node retail environments. This system unifies real-time tracking, financial reporting, and staff management into a single immutable source of truth."
        metadata={metadata}
        liveUrl="https://inventory.adrianoliver.dev"
      />

      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-32">
        <FadeUp>
          <ProjectMetric metrics={metrics} />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-32">
          <FadeUp delay={0.1}>
            <div className="space-y-8">
              <h2 className="text-4xl font-instrument-serif italic text-[var(--color-text-primary)]">The Operations Problem</h2>
              <div className="space-y-6 text-[var(--color-text-secondary)] text-xl leading-relaxed font-light">
                <p>
                  Before this system, stock records lived in paper logs and end-of-week spreadsheets. A return at one location never reached the others. Purchasing decisions were reactive &mdash; they only knew they were out of stock when the shelf was empty. No audit trail. No financial visibility.
                </p>
                <p>
                  I built a custom ERP and POS from scratch on a 19-table PostgreSQL schema with row-level security. Stock is not decremented on sale &mdash; it is reserved via a database trigger, preventing overselling even when a physical sale and an online order compete for the same unit simultaneously. A 7-state order machine manages every transition from placement to delivery, triggering WhatsApp notifications automatically on each state change via direct Meta Business API integration &mdash; no Twilio, no third-party wrapper. Three roles &mdash; admin, manager, staff &mdash; are enforced at the database level via RLS and at the application level via Next.js Edge middleware.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <TechnicalSnippet 
        title="Dynamic Access Control"
        subtitle="Supabase / PostgreSQL Row Level Security"
        code={RBAC_POLICY_CODE}
      />

      {/* Client Testimonial */}
      <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto">
        <FadeUp>
          <div
            className="relative rounded-2xl p-10 border"
            style={{
              borderColor: "var(--color-border)",
              background: "var(--color-surface)",
            }}
          >
            {/* Amber quote mark */}
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
                see what&apos;s happening across all locations in real time, and the POS
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
        </FadeUp>
      </section>

      <VideoDemo 
        title="ERP System Demonstration"
        posterImage="/images/projects/lukess-inventory/inventory_POS_view.png"
      />

      <ProjectGallery 
        images={[
          {
            src: "/images/projects/lukess-inventory/inventory_dashboard.png",
            alt: "Business Intelligence Center",
            caption: "Real-time dashboard — revenue KPIs, low-stock alerts, and sales activity across all locations",
            colSpan: "col-span-1 lg:col-span-2"
          },
          {
            src: "/images/projects/lukess-inventory/inventory_POS_view.png",
            alt: "Point of Sale Interface",
            caption: "Touch-optimized POS — SKU search, variant selection, and one-tap sale confirmation with confetti",
            colSpan: "col-span-1"
          },
          {
            src: "/images/projects/lukess-inventory/inventory_reports.png",
            alt: "Financial Reports",
            caption: "Date-range reports — revenue, margin, and sales broken down by channel, location, and staff member",
            colSpan: "col-span-1"
          },
          {
            src: "/images/projects/lukess-inventory/inventory_list_inventory.png",
            alt: "Inventory Data Table",
            caption: "Live inventory table — stock per SKU per location, bulk label printing, and inline stock editing",
            colSpan: "col-span-2"
          },
          {
            src: "/images/projects/lukess-inventory/inventory_edit_product.png",
            alt: "Product Management Panel",
            caption: "Product editor — full variant management, category assignment, and multi-image upload to Supabase Storage",
            colSpan: "col-span-1 lg:col-span-2"
          },
          {
            src: "/images/projects/lukess-inventory/inventory_reports_2.png",
            alt: "Advanced Analytics",
            caption: "Advanced analytics — sales by category, discount impact, staff performance, and exportable to PDF and Excel",
            colSpan: "col-span-1"
          },
        ]} 
      />

      <TechBento sectionTitle="Infrastructure Core" features={features} />

      <section className="py-48 px-6 lg:px-12 text-center max-w-4xl mx-auto">
        <FadeUp>
          <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-[0.3em] mb-8 block">Results</span>
          <h2 className="text-5xl md:text-7xl font-instrument-serif italic text-[var(--color-text-primary)] mb-12 leading-tight">
            From paper logs to a live ERP.
          </h2>
          <p className="text-[var(--color-text-secondary)] text-xl font-light leading-relaxed">
            Before: three locations running on disconnected paper logs. No cross-location visibility. Purchasing made by memory. Returns unrecorded. Zero financial reporting.
          </p>
          <p className="text-[var(--color-text-secondary)] text-xl mt-8 mb-16 font-light leading-relaxed">
            After: a 19-table PostgreSQL system where every stock movement, order state change, and staff action is logged and auditable. The POS receives online orders from the e-commerce storefront in real time and manages their full lifecycle &mdash; from payment confirmation to WhatsApp notification to completion. A loyalty engine generates a unique discount code automatically on delivery and sends it to the customer by email and WhatsApp in the same transaction. Financial reports are available instantly, exportable to PDF and Excel.
          </p>
          <div className="flex justify-center flex-col md:flex-row gap-6 items-center">
            <MagneticButton
              href="/contact"
              className="bg-[var(--color-accent)] text-black px-6 py-3 text-sm font-medium hover:opacity-90 transition-all duration-300 shadow-[0_0_40px_var(--color-accent-glow)]"
            >
              Request a custom system
            </MagneticButton>
            <MagneticButton
              href="https://lukess-inventory-system.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--color-border)] text-[var(--color-text-primary)] px-6 py-3 text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              View live system →
            </MagneticButton>
          </div>
        </FadeUp>
      </section>
    </article>
  );
}
