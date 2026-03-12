export default function Methodology() {
  const principles = [
    {
      number: "01",
      title: "Speed that saves sales",
      description: "Performance isn't a feature; it's a conversion strategy. I build high-concurrency systems that handle traffic spikes without breaking a sweat."
    },
    {
      number: "02", 
      title: "Maintainable systems",
      description: "You get a codebase your team can actually maintain, not a cryptic puzzle. Full documentation, clean abstractions, and zero technical debt."
    },
    {
      number: "03",
      title: "Zero-friction workflow",
      description: "Async-first communication tailored for US/EU timezones. Weekly Loom demos, written logs, and staged deployments keep you in the loop 24/7."
    }
  ]

  const coreStack = [
    { name: "Next.js 15", role: "Framework / SSR / Routing" },
    { name: "TypeScript", role: "Type safety" },
    { name: "Supabase", role: "Database / Auth / Realtime" },
    { name: "Tailwind CSS v4", role: "Styling system" },
    { name: "Vercel", role: "Deployment / Edge" },
  ]

  const tooling = [
    "PostgreSQL", "Framer Motion", "Resend", 
    "GitHub Actions", "Zod", "React Hook Form"
  ]

  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <div className="mb-16">
          <p className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-3">
            How I work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary max-w-xl">
            Engineering decisions that reduce your risk.
          </h2>
        </div>

        {/* 2-col grid: principles left, stack right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="flex flex-col">
            {principles.map(({ number, title, description }) => (
              <div key={number} className="flex flex-col gap-1 pb-6 border-b border-border last:border-0 last:pb-0 mb-6 last:mb-0">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-accent text-sm">{number}</span>
                  <h3 className="font-serif text-lg text-text-primary">{title}</h3>
                </div>
                <p className="text-sm text-text-secondary leading-relaxed pl-9">{description}</p>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col gap-8">
            {/* Core Stack */}
            <div>
              <p className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-4">
                Core Stack
              </p>
              <div className="flex flex-col gap-2">
                {coreStack.map(item => (
                  <div key={item.name} className="flex items-center justify-between py-2 border-b border-border">
                    <span className="font-mono text-sm text-text-primary">{item.name}</span>
                    <span className="font-mono text-xs text-text-secondary">{item.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tooling */}
            <div>
              <p className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-4">
                Tooling
              </p>
              <div className="flex flex-wrap gap-2">
                {tooling.map(tool => (
                  <span key={tool} className="font-mono text-xs bg-border text-text-secondary px-2 py-1 rounded">
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
