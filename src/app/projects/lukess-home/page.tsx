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
  const heroMetadata = [
    { label: "Role",    value: "Lead Developer" },
    { label: "Stack",   value: "Next.js 15 · TypeScript · Supabase · Resend" },
    { label: "Service", value: "Omnichannel Retail" },
  ];

  const metrics = [
    { value: "99",  suffix: "/100", label: "Performance" },
    { value: "91",  suffix: "/100", label: "Accessibility" },
    { value: "100", suffix: "/100", label: "Best Practices" },
    { value: "100", suffix: "/100", label: "SEO" },
  ];

  const features = [
    {
      title: "Omnichannel State",
      description: "Real-time sync between four locations — three storefronts and a central warehouse — via PostgreSQL triggers and RLS.",
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
        metadata={heroMetadata}
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
                  The client had four locations &mdash; three storefronts and a central warehouse &mdash;
                  running on disconnected spreadsheets. A sale in one location wouldn&apos;t reflect
                  in the others until end of day &mdash; causing overselling, frustrated customers,
                  and manual reconciliation overhead.
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
                The system works exactly as we needed &mdash; real-time inventory and
                the order notification system via WhatsApp are the most useful
                parts. If anyone needs something similar for their store,
                I&apos;d recommend it without hesitation.
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
                  AL
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
                    Lukess Home — Mercado Mutualista, Santa Cruz de la Sierra
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
                    Production client
                  </span>
                </div>
              </footer>
            </blockquote>
          </div>
        </FadeUp>
      </section>

      <VideoDemo 
        title="Omnichannel Retail Walkthrough"
        posterImage="/images/projects/lukess-home/lukess-home_Home_page%20hero.png"
      />

      <ProjectGallery 
        images={[
          {
            src: "/images/projects/lukess-home/lukess-home_Home_page%20hero.png",
            alt: "Home Page Hero View",
            caption: "Homepage hero with animated banner CMS and trust signals",
            colSpan: "col-span-1 lg:col-span-2",
          },
          {
            src: "/images/projects/lukess-home/lukess-home_cart_drawer.png",
            alt: "Cart Drawer overlay",
            caption: "Slide-in cart drawer with Framer Motion animations",
            colSpan: "col-span-1",
          },
          {
            src: "/images/projects/lukess-home/lukess-home_Catalogo.png",
            alt: "Global Catalog View",
            caption: "Product catalog with multi-category navigation",
            colSpan: "col-span-1",
          },
          {
            src: "/images/projects/lukess-home/lukess-home_catalogo_con_filtros.png",
            alt: "Catalog view with active filters",
            caption: "Dynamic filters with URL-based state — deep-linkable",
            colSpan: "col-span-2",
          },
          {
            src: "/images/projects/lukess-home/lukess-home_page_product.png",
            alt: "Detailed Product View",
            caption: "Product detail page with size selector and gallery",
            colSpan: "col-span-2",
          },
          {
            src: "/images/projects/lukess-home/lukess-home_catalogo_mobile.png",
            alt: "Mobile Catalog",
            caption: "Responsive mobile catalog — optimized layout",
            colSpan: "col-span-1",
            aspectRatio: "aspect-[9/19]",
          },
          {
            src: "/images/projects/lukess-home/lukess-home_page_product_mobile.png",
            alt: "Mobile Product View",
            caption: "Mobile PDP with sticky add-to-cart",
            colSpan: "col-span-1",
            aspectRatio: "aspect-[9/19]",
          },
        ]} 
      />

      <TechBento sectionTitle="Strategic Engineering" features={features} />

      <section className="py-48 px-6 lg:px-12 text-center max-w-4xl mx-auto">
        <FadeUp>
          <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-[0.3em] mb-8 block">Results</span>
          <h2 className="text-5xl md:text-7xl font-instrument-serif italic text-[var(--color-text-primary)] mb-12 leading-tight">
            From spreadsheets to real-time omnichannel.
          </h2>
          <p className="text-[var(--color-text-secondary)] text-xl mb-8 font-light leading-relaxed">
            Before: four disconnected locations running on spreadsheets. Manual
            reconciliation every night. No visibility between stores. No online presence.
          </p>
          <p className="text-[var(--color-text-secondary)] text-xl mb-16 font-light leading-relaxed mt-8">
            After: atomic PostgreSQL triggers preventing race conditions across all
            locations in a single transaction. Real-time stock sync from a shared
            Supabase instance powering both the storefront and the admin POS system.
            Three checkout paths &mdash; QR bank transfer, cash pickup, and Stripe &mdash; each
            triggering automatic WhatsApp and email notifications. Guest checkout with
            no account required: just a name and a phone number.
          </p>
          <div className="flex justify-center flex-col md:flex-row gap-6 items-center">
            <MagneticButton
              href="/contact"
              className="bg-accent text-black px-6 py-3 text-sm font-medium hover:bg-amber-500 transition-all duration-300 shadow-[0_0_40px_#D9770630] hover:shadow-[0_0_60px_#D9770650]"
            >
              Start your build
            </MagneticButton>
            <MagneticButton
              href="https://store.adrianoliver.dev"
              className="border border-border text-text-primary px-6 py-3 text-sm hover:border-accent hover:text-accent transition-colors duration-200"
            >
              View live deployment →
            </MagneticButton>
          </div>
        </FadeUp>
      </section>
    </article>
  );
}
