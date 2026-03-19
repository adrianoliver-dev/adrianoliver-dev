"use client"
import Image from "next/image"
import FadeUp from "@/components/ui/FadeUp"

export default function CurrentProject() {
  return (
    <section className="py-24 px-6 border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left — Visual */}
            <div className="flex-1 relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-border group">
              <Image
                src="/images/projects/solnr-teaser.webp"
                alt="SOLNR Studio Prototype"
                fill
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-accent bg-accent/10 px-2 py-1 rounded">
                  In Progress — Expected April 2026
                </span>
              </div>
            </div>

            {/* Right — Copy */}
            <div className="flex-1 space-y-6">
              <p className="font-mono text-xs text-text-secondary uppercase tracking-widest">
                Currently Building
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary leading-tight">
                SOLNR <em>Studio</em>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed font-light">
                A quiet-luxury e-commerce experience for a premium apparel brand. 
                Focusing on editorial-grid layouts, high-fidelity micro-interactions, 
                and a server-first architecture for absolute performance.
              </p>
              <ul className="space-y-3">
                {['Next.js 15 App Router', 'Tailwind v4 primitives', 'Framer Motion (LazyMotion)', 'Supabase SSR'].map((tech) => (
                  <li key={tech} className="flex items-center gap-3 text-sm text-text-secondary font-mono">
                    <span className="h-1 w-1 bg-accent rounded-full" />
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
