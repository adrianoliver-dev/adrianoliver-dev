"use client"
import FadeUp from "@/components/ui/FadeUp"

export default function CurrentProject() {
  return (
    <section className="py-24 px-6 border-t border-border bg-surface/30">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left — Styled placeholder (no image) */}
            <div
              className="flex-1 relative aspect-[16/10] w-full rounded-2xl overflow-hidden flex items-center justify-center"
              style={{ border: "1px solid var(--color-accent)" }}
            >
              {/* Subtle amber glow backdrop */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at 50% 50%, var(--color-accent-glow) 0%, transparent 70%)",
                }}
              />
              {/* Grid pattern overlay */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, var(--color-border) 0px, var(--color-border) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, var(--color-border) 0px, var(--color-border) 1px, transparent 1px, transparent 40px)",
                }}
              />
              {/* Center label */}
              <div className="relative z-10 flex flex-col items-center gap-3">
                <span
                  className="font-mono text-xs uppercase tracking-widest px-3 py-1.5 rounded-full"
                  style={{
                    color: "var(--color-accent)",
                    border: "1px solid var(--color-accent)",
                    backgroundColor: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
                  }}
                >
                  In Development
                </span>
                <p
                  className="font-mono text-xs uppercase tracking-widest"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Expected Q2 2026
                </p>
              </div>
            </div>

            {/* Right — Copy */}
            <div className="flex-1 space-y-6">
              <p className="font-mono text-xs text-text-secondary uppercase tracking-widest">
                Currently Building
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary leading-tight">
                Solnr <em>Studio</em>
              </h2>
              <p className="text-text-secondary text-lg leading-relaxed font-light">
                A quiet luxury menswear e-commerce. Editorial catalog, animated cart drawer,
                URL-based filters, dark-mode-first. Austin, TX.
              </p>
              <ul className="space-y-3">
                {[
                  "Next.js 15",
                  "Supabase",
                  "Tailwind v4",
                  "Framer Motion",
                ].map((tech) => (
                  <li key={tech} className="flex items-center gap-3 text-sm text-text-secondary font-mono">
                    <span
                      className="h-1 w-1 rounded-full"
                      style={{ backgroundColor: "var(--color-accent)" }}
                    />
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
