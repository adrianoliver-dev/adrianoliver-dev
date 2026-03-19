import ProjectCard from "./ProjectCard"
import Link from "next/link"

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
            description="Omnichannel retail engine with real-time stock sync at the database level. Built with Next.js 15 Server Components and Supabase RLS for maximum integrity."
            tags={["Next.js 15", "TypeScript", "Supabase", "Tailwind v4", "Resend"]}
            href="/projects/lukess-home"
            status="live"
            featured={true}
            imageSrc="/images/projects/lukess-home/lukess-home_Catalogo.png"
            className="md:col-span-3 h-full"
            metrics={[
              { value: "4 locations", label: "Real-time sync" },
              { value: "99/100", label: "PageSpeed score" },
              { value: "3 methods", label: "WA · QR · Stripe" },
            ]}
          />

          {/* Right column — Lukess Inventory — spans 2 cols */}
          <div className="md:col-span-2 flex flex-col gap-4">
            <ProjectCard
              title="Lukess Inventory"
              tagline="POS + Inventory System · Real-time sync"
              description="Enterprise-grade ERP system with RBAC permissions, real-time POS ergonomics, and automated financial reporting for multi-location businesses."
              tags={["Next.js 15", "Supabase Realtime", "PostgreSQL", "RBAC"]}
              href="/projects/lukess-inventory-system"
              status="case-study"
              featured={true}
              imageSrc="/images/projects/lukess-inventory/inventory_dashboard.png"
              metrics={[
                { value: "19 tables", label: "PostgreSQL schema" },
                { value: "7 states", label: "Order machine" },
                { value: "3 roles", label: "RBAC enforced" },
              ]}
            />

            {/* CTA Card: Available for new projects */}
            <Link
              href="#contact"
              className="group rounded-2xl border border-dashed border-border p-6 flex flex-1 items-center justify-center min-h-[120px] bg-surface/50 hover:bg-surface/80 transition-all duration-300 decoration-none"
            >
              <div className="flex flex-col items-center gap-2">
                <div className="flex items-center gap-2">
                  <span
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{ backgroundColor: "var(--color-code-green)" }}
                  />
                  <p
                    className="font-mono text-[10px] uppercase tracking-wider text-text-secondary transition-colors"
                    style={{ color: undefined }}
                  >
                    <span className="group-hover:hidden">Available for a new build</span>
                    <span className="hidden group-hover:inline" style={{ color: "var(--color-accent)" }}>Available for a new build</span>
                  </p>
                </div>
                <p
                  className="font-serif text-lg text-text-primary transition-colors group-hover:text-[var(--color-accent)]"
                >
                  Let&apos;s talk about your project
                </p>
              </div>
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}
