import { Metadata } from "next";
import ProjectHero from "@/components/projects/ProjectHero";
import TechBento from "@/components/projects/TechBento";
import ProjectMetric from "@/components/projects/ProjectMetric";
import TechnicalSnippet from "@/components/projects/TechnicalSnippet";
import FadeUp from "@/components/ui/FadeUp";
import ProjectGallery from "@/components/projects/ProjectGallery";
import VideoDemo from "@/components/projects/VideoDemo";
import Image from "next/image";

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
    { label: "Timeline", value: "Enterprise Scale" },
    { label: "Stack", value: "Next.js 15, Recharts, RLS" },
    { label: "Type", value: "Internal Tooling / ERP" },
  ];

  const metrics = [
    { label: "Visibility", value: "Real-time", suffix: "" },
    { label: "Auditability", value: "100", suffix: "%" },
    { label: "Reporting", value: "Instant", suffix: "" },
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
      description: "Automated low-stock forecasting and vendor management dashboard using historical data aggregation.",
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
              <h2 className="text-4xl font-instrument-serif italic text-[var(--color-text-primary)]">The Systems Challenge</h2>
              <div className="space-y-6 text-[var(--color-text-secondary)] text-xl leading-relaxed font-light">
                <p>
                  Before this system, stock records relied on manual paper logs and end-of-week spreadsheets. This lack of visibility led to constant inventory leakage, unrecorded returns, and a purely reactive approach to purchasing.
                </p>
                <p>
                  I engineered a custom POS and ERP backbone powered by Supabase and granular RBAC. By moving from paper to real-time data streams, the business gained absolute transparency. Owners now have instant financial reporting and 100% auditability for every transaction across the entire warehouse.
                </p>
              </div>
            </div>
          </FadeUp>
          
          <div className="space-y-12">
            <FadeUp delay={0.2}>
              <div className="aspect-video bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl overflow-hidden relative group">
                <Image 
                  src="/images/projects/lukess-inventory/inventory_dashboard.png" 
                  alt="Inventory Dashboard Architecture"
                  fill
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/80 to-transparent p-8 flex flex-end items-end">
                  <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-text-primary)]">01 / Business Intelligence Center</span>
                </div>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <TechnicalSnippet 
        title="Dynamic Access Control"
        subtitle="Supabase / PostgreSQL Row Level Security"
        code={RBAC_POLICY_CODE}
      />

      <section className="py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeUp>
            <div className="aspect-square bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl overflow-hidden relative group">
              <Image 
                src="/images/projects/lukess-inventory/inventory_POS_view.png" 
                alt="Point of Sale Technical Workflow"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <h4 className="text-2xl font-instrument-serif text-[var(--color-text-primary)] mb-2">Operational Precision</h4>
                <p className="text-[var(--color-text-secondary)] max-w-xs text-sm leading-relaxed lowercase">
                  Custom POS logic optimized for staff efficiency and zero-latency transaction handling.
                </p>
              </div>
            </div>
          </FadeUp>
          
          <FadeUp delay={0.2}>
            <div className="aspect-square bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl overflow-hidden relative group">
              <Image 
                src="/images/projects/lukess-inventory/inventory_reports.png" 
                alt="RBAC Security Management"
                fill
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 p-12 flex flex-col justify-end">
                <h4 className="text-2xl font-instrument-serif text-[var(--color-text-primary)] mb-2">Immutable Security</h4>
                <p className="text-[var(--color-text-secondary)] max-w-xs text-sm leading-relaxed lowercase">
                  Enterprise-grade permission hierarchies ensuring data privacy and financial security.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <VideoDemo 
        title="ERP System Demonstration"
        posterImage="/images/projects/lukess-inventory/inventory_POS_view.png"
      />

      <ProjectGallery 
        images={[
          { src: "/images/projects/lukess-inventory/inventory_list_inventory.png", alt: "Inventory Data Table", colSpan: "col-span-2", aspectRatio: "aspect-video" },
          { src: "/images/projects/lukess-inventory/inventory_edit_product.png", alt: "Edit Product Panel", colSpan: "col-span-1" },
          { src: "/images/projects/lukess-inventory/inventory_reports_2.png", alt: "Advanced Analytics Reports", colSpan: "col-span-1 lg:col-span-2", aspectRatio: "aspect-video" },
        ]} 
      />

      <TechBento sectionTitle="Infrastructure Core" features={features} />

      <section className="py-48 px-6 lg:px-12 text-center max-w-4xl mx-auto">
        <FadeUp>
          <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-[0.3em] mb-8 block">Results</span>
          <h2 className="text-5xl md:text-7xl font-instrument-serif italic text-[var(--color-text-primary)] mb-12 leading-tight">
            Replacing manual counts with automated Business Intelligence.
          </h2>
          <p className="text-[var(--color-text-secondary)] text-xl mb-16 font-light leading-relaxed">
            The Lukess Inventory system is a testament to the power of custom software. By building a tool tailored to the specific operational needs of the client, I delivered measurable value that off-the-shelf software simply cannot match.
          </p>
          <div className="flex justify-center flex-col md:flex-row gap-12 items-center">
            <a href="https://inventory.adrianoliver.dev" target="_blank" className="font-mono text-sm uppercase tracking-widest text-[var(--color-text-primary)] border-b border-[var(--color-accent)] pb-2 active:scale-95 transition-transform">
              Access Internal ERP →
            </a>
            <a href="/contact" className="font-mono text-sm uppercase tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
              Request a custom system
            </a>
          </div>
        </FadeUp>
      </section>
    </article>
  );
}
