import ProjectCard from "./ProjectCard"

export default function ProjectsGrid() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        
        {/* Section header */}
        <div className="mb-12">
          <p className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-3">
            Production Work
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-text-primary">
            Built and shipped, not just coded.
          </h2>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {/* Large card — Lukess Home — spans 3 cols */}
          <ProjectCard 
            title="Lukess Home"
            tagline="E-Commerce Platform · Next.js + Supabase"
            description="Full e-commerce storefront with product catalog, WhatsApp checkout flow, and custom CMS. Built solo, shipped to production in ~23 days."
            tags={["Next.js 15", "TypeScript", "Supabase", "Tailwind v4", "Resend"]}
            href="/work/lukess-home"
            status="live"
            featured={true}
            className="md:col-span-3 h-full"
          />
          
          {/* Right column — spans 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <ProjectCard 
              title="Lukess Inventory"
              tagline="POS + Inventory System · Real-time sync"
              description="Custom inventory and point-of-sale system syncing stock across 3 retail locations in real-time. RBAC, analytics dashboard, order fulfillment."
              tags={["Next.js 15", "Supabase Realtime", "PostgreSQL", "RBAC"]}
              href="/work/lukess-inventory"
              status="case-study"
              featured={false}
            />
            
            {/* Coming Soon Card */}
            <div className="rounded-2xl border border-dashed border-border p-6 flex flex-1 items-center justify-center min-h-[120px]">
              <p className="font-mono text-xs text-text-secondary">
                Next project — in progress
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
