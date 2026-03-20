import FadeUp from '@/components/ui/FadeUp'
import ProcessSteps from './ProcessSteps'

export default function Services() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <FadeUp>
          <p className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-3">
            What I build
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary max-w-xl mb-16">
            Focused on two things: <em>e-commerce</em> and business systems.
          </h2>
        </FadeUp>

        {/* Grid */}
        <FadeUp delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <div className="bg-surface border border-border rounded-2xl p-6 card-spotlight flex flex-col">
              <svg className="w-6 h-6 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <h3 className="font-serif text-xl text-text-primary mb-2">E-Commerce Architecture</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                Full-stack storefront systems built for conversion and scale. Catalog, checkout, order management, notification pipelines, and inventory sync — production-ready from day one.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["Next.js", "Supabase", "WhatsApp API", "Resend", "Vercel"].map(tag => (
                  <span key={tag} className="font-mono text-xs bg-border text-text-secondary px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-surface border border-border rounded-2xl p-6 card-spotlight flex flex-col">
              <svg className="w-6 h-6 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zm10 0a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
              <h3 className="font-serif text-xl text-text-primary mb-2">Business Web Applications</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                Custom internal tools, POS systems, and management dashboards. Multi-role access, real-time data sync, audit trails, and zero-downtime deploys.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["RBAC", "Real-time", "PostgreSQL", "TypeScript", "REST APIs"].map(tag => (
                  <span key={tag} className="font-mono text-xs bg-border text-text-secondary px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-surface border border-border rounded-2xl p-6 card-spotlight flex flex-col">
              <svg className="w-6 h-6 text-accent mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M4 17a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10z" />
              </svg>
              <h3 className="font-serif text-xl text-text-primary mb-2">Technical Consulting</h3>
              <p className="text-sm text-text-secondary leading-relaxed mb-6 flex-grow">
                Architecture review, stack selection, and system design for founders and product teams. Async-first. Written deliverables. No hand-waving.
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {["System Design", "Code Review", "Stack Audit", "Documentation"].map(tag => (
                  <span key={tag} className="font-mono text-xs bg-border text-text-secondary px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>

        <ProcessSteps />

        {/* SLA Strip */}
        <FadeUp delay={0.2}>
          <div className="bg-surface border border-border rounded-2xl p-6 mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex flex-col md:flex-row gap-8 md:gap-12 w-full md:w-auto">
              <div>
                <div className="font-mono text-2xl text-accent font-bold">{'< 4h'}</div>
                <div className="font-mono text-xs text-text-primary uppercase tracking-wide mt-1">Response time</div>
                <div className="font-mono text-xs text-text-secondary mt-1">during active projects</div>
              </div>
              <div className="hidden md:block w-px bg-border"></div>
              <div>
                <div className="font-mono text-2xl text-accent font-bold">Weekly</div>
                <div className="font-mono text-xs text-text-primary uppercase tracking-wide mt-1">Milestone updates</div>
                <div className="font-mono text-xs text-text-secondary mt-1">Loom + written summary</div>
              </div>
              <div className="hidden md:block w-px bg-border"></div>
              <div>
                <div className="font-mono text-2xl text-accent font-bold">60 days</div>
                <div className="font-mono text-xs text-text-primary uppercase tracking-wide mt-1">Post-launch support</div>
                <div className="font-mono text-xs text-text-secondary mt-1">included on all projects</div>
              </div>
            </div>

            <a href="#contact" className="inline-flex items-center gap-2 bg-accent text-black font-mono text-sm font-medium px-5 py-2.5 rounded-lg shadow-[0_0_40px_#D9770630] hover:shadow-[0_0_60px_#D9770650] transition-shadow duration-300 whitespace-nowrap">
              Start a project &rarr;
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
