import FadeUp from "@/components/ui/FadeUp"

export default function CurrentProject() {
  return (
    <section className="py-24 px-6 border-t border-border bg-[color-mix(in_srgb,var(--color-surface)_30%,transparent)]">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Left — Styled placeholder with icon group */}
            <div
              className="group flex-1 relative aspect-[16/10] w-full rounded-2xl overflow-hidden flex items-center justify-center bg-surface border border-border"
            >
              {/* Center icon group */}
              <div
                className="relative flex items-center justify-center w-20 h-20 rounded-full border border-accent/20 transition-colors duration-500 group-hover:border-accent/40"
              >
                <svg
                  className="w-8 h-8 opacity-40 transition-opacity duration-500 group-hover:opacity-60 text-accent"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                  />
                </svg>
              </div>

              {/* Bottom-left badge */}
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <span
                  className="font-mono text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full border"
                  style={{
                    color: "var(--color-accent)",
                    borderColor: "color-mix(in srgb, var(--color-accent) 30%, transparent)",
                    backgroundColor: "color-mix(in srgb, var(--color-accent) 10%, transparent)",
                  }}
                >
                  In Development
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
                A dark-mode menswear storefront being built as a portfolio
                piece — editorial UX, Framer Motion animations, and a
                premium cart experience. Not a template.
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
                      className="h-1 w-1 rounded-full bg-accent"
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
