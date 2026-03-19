import { Metadata } from "next";
import ProjectHero from "@/components/projects/ProjectHero";
import TechBento from "@/components/projects/TechBento";
import ProjectMetric from "@/components/projects/ProjectMetric";
import ProjectGallery from "@/components/projects/ProjectGallery";
import FadeUp from "@/components/ui/FadeUp";

export const metadata: Metadata = {
  title: "Solnr Studio | Luxury E-commerce Architecture",
  description: "Next.js 15 e-commerce architecture designed for a premium dark-mode aesthetic.",
};

export default function SolnrStudioCaseStudy() {
  const metadata = [
    { label: "Role", value: "Lead Architect" },
    { label: "Status", value: "Ongoing" },
    { label: "Stack", value: "Next.js 15, Vercel" },
    { label: "Aesthetic", value: "Dark Luxury" },
  ];

  const metrics = [
    { label: "Target LCP", value: "< 1.5s", suffix: "" },
    { label: "Animations", value: "Framer Motion", suffix: "" },
    { label: "Components", value: "Server First", suffix: "" },
  ];

  const features = [
    {
      title: "Capsule Architecture",
      description: "Data models designed around rotating capsule collections rather than static categories.",
      colSpan: "col-span-1" as const,
    },
    {
      title: "Dark Mode Typographics",
      description: "High-contrast editorial layouts utilizing Instrument Serif to convey brand luxury.",
      colSpan: "col-span-2" as const,
    },
  ];

  return (
    <article className="bg-[var(--color-background)] min-h-screen">
      <ProjectHero
        title="Solnr"
        italicWord="Studio"
        description="An ongoing exploration in luxury e-commerce. Focused on high-fidelity animations, deep dark-mode aesthetics, and Next.js 15 Server Components for zero-compromise performance."
        metadata={metadata}
      />

      <section className="px-6 lg:px-12 max-w-7xl mx-auto py-32">
        <FadeUp>
          <ProjectMetric metrics={metrics} />
        </FadeUp>
      </section>

      <ProjectGallery 
        images={[
          { src: "/images/projects/solnr-studio/solnr-studio.vercel.app_.png", alt: "Current Capsules Dark Hero", colSpan: "col-span-1 lg:col-span-2" },
        ]} 
      />

      <TechBento sectionTitle="Design Engineering" features={features} />

      <section className="py-48 px-6 lg:px-12 text-center max-w-4xl mx-auto">
        <FadeUp>
          <span className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-[0.3em] mb-8 block">Project Status</span>
          <h2 className="text-5xl md:text-7xl font-instrument-serif italic text-[var(--color-text-primary)] mb-12 leading-tight">
            Currently In Development.
          </h2>
          <div className="flex justify-center flex-col md:flex-row gap-12 items-center">
             <p className="text-[var(--color-text-secondary)] font-mono text-sm uppercase tracking-widest">More captures coming soon</p>
          </div>
        </FadeUp>
      </section>
    </article>
  );
}
