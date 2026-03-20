import { Metadata } from "next";
import Image from "next/image";
import ProjectHero from "@/components/projects/ProjectHero";
import TechBento from "@/components/projects/TechBento";
import ProjectMetric from "@/components/projects/ProjectMetric";
import FadeUp from "@/components/ui/FadeUp";
import VideoDemo from "@/components/projects/VideoDemo";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: "Lukess Home | Omnichannel E-commerce Case Study",
  description: "High-performance retail architecture built with Next.js 15 and Supabase.",
};

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

  const infrastructureFeatures = [
    {
      title: "WhatsApp Integration",
      description: "Direct Meta Business API integration — no Twilio, no third-party wrapper. 9 approved message templates map to each order state transition automatically.",
    },
    {
      title: "Loyalty Engine",
      description: "On order completion, the system generates a unique discount code and delivers it simultaneously by email and WhatsApp in the same transaction. Zero manual steps.",
    },
  ];

  return (
    <article className="bg-[var(--color-background)] min-h-screen">
      <ScrollToTop />
      
      <ProjectHero
        title="Lukess"
        italicWord="Home"
        description="Built to handle simultaneous transactions across four physical locations without a single race condition."
        metadata={heroMetadata}
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
                  The Architecture Challenge
                </h2>
                <div className="space-y-6 text-[var(--color-text-secondary)] text-lg leading-relaxed font-light">
                  <p>
                    The client had four locations — three storefronts and a central warehouse —
                    running on disconnected spreadsheets. A sale in one location wouldn&apos;t reflect
                    in the others until end of day — causing overselling, frustrated customers,
                    and manual reconciliation overhead.
                  </p>
                  <p>
                    I replaced the spreadsheet chaos with a PostgreSQL-first architecture: atomic triggers that decrement stock across all locations in the same transaction as the sale. The result is a system where a 2AM online order and a noon in-store sale compete for the same stock with zero race conditions.
                  </p>
                </div>
              </div>

              {/* Right Column: Image */}
              <div className="relative aspect-[5/3] rounded-xl overflow-hidden border border-[var(--color-border)]">
                <Image 
                  src="/images/projects/lukess-home/lukess-home_Home_page.png" 
                  alt="Lukess Home Architecture Challenge"
                  fill 
                  className="object-cover object-top"
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
                The backend utilizes Supabase (PostgreSQL) as the source of truth. Every transaction is wrapped in a database function that checks stock availability before processing the payment. This eliminates the need for expensive distributed locks while maintaining strict consistency.
              </p>
              <p>
                The frontend is built with Next.js 15, leveraging Server Components to minimize the JavaScript bundle sent to the user. This results in nearly instant page transitions and high accessibility scores, even on slower mobile networks common in the local market.
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
              </footer>
            </blockquote>
          </div>
        </section>
      </FadeUp>

      <VideoDemo />

      {/* SECTION D: Narrative screenshots */}
      {/* Row 1 */}
      <FadeUp delay={0.1}>
        <div className="py-16 px-6">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[5/3] rounded-xl overflow-hidden border border-[var(--color-border)] group">
              <Image 
                src="/images/projects/lukess-home/lukess-home_Catalogo.png" 
                alt="Product Catalog" 
                fill 
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-accent)" }}>
                Product Catalog
              </p>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-light">
                The catalog renders server-side with no client hydration delay. 26 SKUs across multiple categories, each with real-time stock status pulled directly from the database.
              </p>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Row 2 */}
      <FadeUp delay={0.1}>
        <div className="py-16 px-6">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-accent)" }}>
                URL-Based Filters
              </p>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-light">
                Filter state lives in the URL — not in React state. A customer can share an exact filtered view via WhatsApp link. No JavaScript required to render the filtered results.
              </p>
            </div>
            <div className="relative aspect-[5/3] rounded-xl overflow-hidden border border-[var(--color-border)] group order-1 md:order-2">
              <Image 
                src="/images/projects/lukess-home/lukess-home_catalogo_con_filtros.png" 
                alt="URL-Based Filters" 
                fill 
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Row 3 */}
      <FadeUp delay={0.1}>
        <div className="py-16 px-6">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[5/3] rounded-xl overflow-hidden border border-[var(--color-border)] group">
              <Image 
                src="/images/projects/lukess-home/lukess-home_page_product.png" 
                alt="Product Detail" 
                fill 
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            <div>
              <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-accent)" }}>
                Product Detail
              </p>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-light">
                Size selection is enforced before checkout — the add-to-cart button is disabled until a size is chosen. This eliminates the main source of wrong-size returns.
              </p>
            </div>
          </div>
        </div>
      </FadeUp>

      {/* Row 4 */}
      <FadeUp delay={0.1}>
        <div className="py-16 px-6">
          <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <p className="font-mono text-xs uppercase tracking-widest mb-3" style={{ color: "var(--color-accent)" }}>
                Cart & Checkout
              </p>
              <p className="text-[var(--color-text-secondary)] text-lg leading-relaxed font-light">
                The cart validates stock in real time. If the last unit sells while a customer is reviewing their cart, they know before paying — not after.
              </p>
            </div>
            <div className="relative aspect-[5/3] rounded-xl overflow-hidden border border-[var(--color-border)] group order-1 md:order-2">
              <Image 
                src="/images/projects/lukess-home/lukess-home_cart_drawer.png" 
                alt="Cart & Checkout" 
                fill 
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
          </div>
        </div>
      </FadeUp>

      {/* SECTION E: Mobile device showcase */}
      <FadeUp delay={0.1}>
        <section className="py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <p className="font-mono text-xs text-[var(--color-text-secondary)] uppercase tracking-widest mb-12 text-center">
              Mobile Experience
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {/* Mobile Frame 1 */}
              <div className="relative mx-auto w-full" style={{ maxWidth: "280px" }}>
                <div className="rounded-[2rem] overflow-hidden border-2 border-[var(--color-border)] bg-[var(--color-surface)]">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--color-border)]">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-border)" }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-border)" }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-accent)", opacity: "0.6" }} />
                  </div>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "9/19" }}>
                    <Image 
                      src="/images/projects/lukess-home/lukess-home_catalogo_mobile.png" 
                      alt="Mobile Catalog"
                      fill 
                      className="object-cover object-top" 
                    />
                  </div>
                </div>
              </div>

              {/* Mobile Frame 2 */}
              <div className="relative mx-auto w-full" style={{ maxWidth: "280px" }}>
                <div className="rounded-[2rem] overflow-hidden border-2 border-[var(--color-border)] bg-[var(--color-surface)]">
                  <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--color-border)]">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-border)" }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-border)" }} />
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--color-accent)", opacity: "0.6" }} />
                  </div>
                  <div className="relative overflow-hidden" style={{ aspectRatio: "9/19" }}>
                    <Image 
                      src="/images/projects/lukess-home/lukess-home_page_product_mobile.png" 
                      alt="Mobile Product Detail"
                      fill 
                      className="object-cover object-top" 
                    />
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-center font-mono text-xs text-[var(--color-text-secondary)] mt-8">
              Fully responsive — same inventory logic, optimized for mobile
            </p>
          </div>
        </section>
      </FadeUp>

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
                Before: four disconnected locations running on spreadsheets. Manual
                reconciliation every night. No visibility between stores. No online presence.
              </p>
            </div>

            <div className="w-12 h-px bg-[var(--color-accent)] opacity-60 my-6 ml-6" />

            <div className="border-l-2 border-[var(--color-accent)] pl-6 text-[var(--color-text-primary)]">
              <p className="text-lg font-light leading-relaxed">
                After: atomic PostgreSQL triggers preventing race conditions across all
                locations in a single transaction. Real-time stock sync from a shared
                Supabase instance powering both the storefront and the admin POS system.
                Three checkout paths &mdash; QR bank transfer, cash pickup, and Stripe &mdash; each
                triggering automatic WhatsApp and email notifications. Guest checkout with
                no account required.
              </p>
            </div>
          </div>

          {/* SECTION H: CTAs */}
          <div className="flex justify-center flex-col md:flex-row gap-6 items-center">
            <MagneticButton
              href="/contact"
              className="bg-[var(--color-accent)] text-black px-8 py-4 text-sm font-medium hover:bg-amber-500 transition-all duration-300 shadow-[0_0_40px_rgba(217,119,6,0.2)] hover:shadow-[0_0_60px_rgba(217,119,6,0.3)] rounded-full"
            >
              Start your build
            </MagneticButton>
            <MagneticButton
              href="https://lukess-home.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-[var(--color-border)] text-[var(--color-text-primary)] px-8 py-4 text-sm hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-colors duration-200 rounded-full"
            >
              View live deployment →
            </MagneticButton>
          </div>
        </FadeUp>
      </section>
    </article>
  );
}
