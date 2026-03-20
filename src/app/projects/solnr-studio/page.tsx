import { Metadata } from "next";
import Image from "next/image";
import ProjectHero from "@/components/projects/ProjectHero";
import FadeUp from "@/components/ui/FadeUp";
import MagneticButton from "@/components/ui/MagneticButton";
import ScrollToTop from "@/components/ui/ScrollToTop";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Solnr Studio | Luxury E-commerce Architecture",
  description: "Next.js 15 e-commerce architecture designed for a premium dark-mode aesthetic.",
};

export default function SolnrStudioCaseStudy() {
  const metadata = [
    { label: "Status", value: "In Development" },
    { label: "Stack",  value: "Next.js 15 · Supabase · Tailwind v4 · Framer Motion" },
    { label: "Brand",  value: "Quiet luxury menswear · Austin, TX" }
  ];

  return (
    <article className="bg-[var(--color-background)] min-h-screen">
      <ScrollToTop />
      
      <ProjectHero
        title="Solnr"
        italicWord="Studio"
        description="An ongoing exploration in luxury e-commerce. Focused on high-fidelity animations, deep dark-mode aesthetics, and Next.js 15 Server Components for zero-compromise performance."
        metadata={metadata}
      />

      <section className="px-6 lg:px-12 max-w-3xl mx-auto py-32">
        <FadeUp delay={0.1}>
          <div className="space-y-8">
            <h2 className="text-4xl font-serif italic"
              style={{ color: "var(--color-text-primary)" }}>
              What&apos;s being built
            </h2>
            <p className="text-xl leading-relaxed font-light"
              style={{ color: "var(--color-text-secondary)" }}>
              SOLNR Studio is a quiet luxury menswear e-commerce being
              built as a design engineering showcase. The focus is on
              editorial UX, animated interactions, and a cart experience
              that feels premium — not like a template. The brand is
              fictional and based in Austin, TX.
            </p>
            <ul className="space-y-4 text-lg font-light"
              style={{ color: "var(--color-text-secondary)" }}>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--color-accent)" }}
                  className="mt-1 text-sm">→</span>
                Editorial catalog with URL-based filters and Framer
                Motion reorder animations
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--color-accent)" }}
                  className="mt-1 text-sm">→</span>
                Animated slide-in cart drawer with full inventory
                awareness
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--color-accent)" }}
                  className="mt-1 text-sm">→</span>
                Product detail page with sticky size selector and
                image gallery
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--color-accent)" }}
                  className="mt-1 text-sm">→</span>
                Dark-mode-first design system with Instrument Serif
                typography
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: "var(--color-accent)" }}
                  className="mt-1 text-sm">→</span>
                Supabase backend with the same omnichannel inventory
                architecture as Lukess
              </li>
            </ul>
          </div>
        </FadeUp>
      </section>

      <FadeUp delay={0.1}>
        <section className="px-6 lg:px-12 max-w-5xl mx-auto pb-24">
          <div className="relative w-full rounded-2xl overflow-hidden
            border border-[var(--color-border)] group transition-all
            duration-500 hover:border-[color-mix(in_srgb,
            var(--color-accent)_40%,transparent)]"
            style={{ aspectRatio: "16/9" }}>
            <Image
              src="/images/projects/solnr-studio/solnr-studio.vercel.app_.png"
              alt="SOLNR Studio — Current Capsules"
              fill
              className="object-cover object-top transition-transform
                duration-700 group-hover:scale-105"
              priority
            />
          </div>
          <p className="mt-4 text-center font-mono text-xs
            text-[var(--color-text-secondary)] uppercase tracking-widest">
            Current capsules — dark hero view
          </p>
        </section>
      </FadeUp>

      <section className="py-32 px-6 lg:px-12 text-center max-w-2xl mx-auto">
        <FadeUp>
          <p className="font-mono text-xs uppercase tracking-[0.3em] mb-8 block"
            style={{ color: "var(--color-accent)" }}>
            Work in Progress
          </p>
          <MagneticButton
            href="/contact"
            className="border px-8 py-4 text-sm font-mono uppercase tracking-widest
              hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
              transition-colors duration-200"
            style={{
              borderColor: "var(--color-border)",
              color: "var(--color-text-primary)"
            }}
          >
            Interested in something similar? Let&apos;s talk
          </MagneticButton>
        </FadeUp>
      </section>
    </article>
  );
}
