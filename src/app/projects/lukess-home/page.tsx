import { Metadata } from "next";
import ProjectHero from "@/components/projects/ProjectHero";
import TechBento from "@/components/projects/TechBento";
import ProjectMetric from "@/components/projects/ProjectMetric";
import TechnicalSnippet from "@/components/projects/TechnicalSnippet";
import FadeUp from "@/components/ui/FadeUp";
import ProjectGallery from "@/components/projects/ProjectGallery";
import VideoDemo from "@/components/projects/VideoDemo";
export const metadata: Metadata = {
  title: "Lukess Home | Omnichannel E-commerce Case Study",
  description: "High-performance retail architecture built with Next.js 15 and Supabase.",
};

const DB_TRIGGER_CODE = `-- Atomic stock decrement trigger
CREATE OR REPLACE FUNCTION handle_new_order() 
RETURNS TRIGGER AS $$
BEGIN
  -- Decrement stock and verify availability in one transaction
  UPDATE products 
  SET stock = stock - (NEW.quantity)
  WHERE id = NEW.product_id AND stock >= NEW.quantity;

  IF NOT FOUND THEN
    RAISE EXCEPTION 'Insufficient stock for product %', NEW.product_id;
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql;`;

export default function LukessHomeCaseStudy() {
  const metadata = [
    { label: "Role", value: "Lead Developer" },
    { label: "Timeline", value: "23-Day Build" },
    { label: "Stack", value: "Next.js 15, TS, Supabase" },
    { label: "Service", value: "Omnichannel Retail" },
  ];

  const metrics = [
    { label: "Delivery", value: "23", suffix: "Days to production" },
    { label: "Lighthouse Score", value: "100", suffix: "/100" },
    { label: "Synced live", value: "3", suffix: " storefronts" },
  ];

  const features = [
    {
      title: "Omnichannel State",
      description: "Real-time sync between three physical storefronts and digital catalog via PostgreSQL triggers and RLS.",
      colSpan: "col-span-2" as const,
    },
    {
      title: "Edge Optimization",
      description: "Server-side rendering at the edge ensures sub-500ms TTFB for global product discoverability.",
    },
    {
      title: "Transaction Integrity",
      description: "Atomic checkout flow prevents race conditions during high-concurrency liquidation sales.",
    },
    {
      title: "WhatsApp API",
      description: "Custom integration with Meta's Business API for automated order fulfillment and customer tracking.",
      colSpan: "col-span-2" as const,
    },
  ];

  return (
    <article className="bg-[var(--color-background)] min-h-screen">
      <ProjectHero
        title="Lukess"
        italicWord="Home"
        description="A high-performance retail engine designed to bridge the gap between physical storefronts and digital discovery. Built for resilience and speed, this system handles complex inventory logic with zero compromises."
        metadata={metadata}
        liveUrl="https://store.adrianoliver.dev"
      />

      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-32">
        <FadeUp>
          <ProjectMetric metrics={metrics} />
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mt-32">
          <FadeUp delay={0.1}>
            <div className="space-y-8">
              <h2 className="text-4xl font-instrument-serif italic text-[var(--color-text-primary)]">The Architecture Challenge</h2>
              <div className="space-y-6 text-[var(--color-text-secondary)] text-xl leading-relaxed font-light">
                <p>
                  The client had three physical storefronts running on disconnected spreadsheets. A sale in one location wouldn&apos;t reflect in the others until end of day — causing overselling, frustrated customers, and manual reconciliation overhead.
                </p>
                <p>
                  I replaced the spreadsheet chaos with a PostgreSQL-first architecture: atomic triggers that decrement stock across all locations in the same transaction as the sale. The result is a system where a 2AM online order and a noon in-store sale compete for the same stock with zero race conditions.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <TechnicalSnippet 
        title="Atomic Inventory Control"
        subtitle="PostgreSQL / PL/pgSQL Trigger"
        code={DB_TRIGGER_CODE}
      />


      <VideoDemo 
        title="Omnichannel Retail Walkthrough"
        posterImage="/images/projects/lukess-home/lukess-home_Home_page hero.png"
      />

      <ProjectGallery 
        images={[
          { src: "/images/projects/lukess-home/lukess-home_Home_page hero.png", alt: "Home Page Hero View", colSpan: "col-span-1 lg:col-span-2" },
          { src: "/images/projects/lukess-home/lukess-home_cart_drawer.png", alt: "Cart Drawer overlay", colSpan: "col-span-1" },
          { src: "/images/projects/lukess-home/lukess-home_Catalogo.png", alt: "Global Catalog View", colSpan: "col-span-1" },
          { src: "/images/projects/lukess-home/lukess-home_catalogo_con_filtros.png", alt: "Catalog view with active filters", colSpan: "col-span-2" },
          { src: "/images/projects/lukess-home/lukess-home_page_product.png", alt: "Detailed Product View", colSpan: "col-span-2" },
          { src: "/images/projects/lukess-home/lukess-home_catalogo_mobile.png", alt: "Mobile Catalog", colSpan: "col-span-1" },
          { src: "/images/projects/lukess-home/lukess-home_page_product_mobile.png", alt: "Mobile Product View", colSpan: "col-span-1" },
        ]} 
      />

      <TechBento sectionTitle="Strategic Engineering" features={features} />

      <section className="py-48 px-6 lg:px-12 text-center max-w-4xl mx-auto">
        <FadeUp>
          <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-[0.3em] mb-8 block">Results</span>
          <h2 className="text-5xl md:text-7xl font-instrument-serif italic text-[var(--color-text-primary)] mb-12 leading-tight">
            From spreadsheets to real-time omnichannel in 23 days.
          </h2>
          <p className="text-[var(--color-text-secondary)] text-xl mb-16 font-light leading-relaxed">
            The Lukess ecosystem isn&apos;t just a store; it&apos;s a blueprint for modern retail. By focusing on database-level integrity and server-first performance, I delivered a system that empowers the business for long-term growth.
          </p>
          <div className="flex justify-center flex-col md:flex-row gap-12 items-center">
            <a href="https://store.adrianoliver.dev" target="_blank" className="font-mono text-sm uppercase tracking-widest text-[var(--color-text-primary)] border-b border-[var(--color-accent)] pb-2 active:scale-95 transition-transform">
              Explore Live Store →
            </a>
            <a href="/contact" className="font-mono text-sm uppercase tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors">
              Start your build
            </a>
          </div>
        </FadeUp>
      </section>
    </article>
  );
}
