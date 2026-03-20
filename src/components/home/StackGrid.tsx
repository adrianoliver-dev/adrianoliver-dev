const stack = [
  {
    category: "Framework",
    items: [
      { name: "Next.js", detail: "App Router · RSC" },
      { name: "React 19", detail: "Server Components" },
    ]
  },
  {
    category: "Language",
    items: [
      { name: "TypeScript", detail: "strict mode" },
    ]
  },
  {
    category: "Database",
    items: [
      { name: "Supabase", detail: "PostgreSQL · RLS · Realtime" },
      { name: "PostgreSQL", detail: "raw SQL · RPC · triggers" },
    ]
  },
  {
    category: "Styling",
    items: [
      { name: "Tailwind CSS v4", detail: "CSS-first config" },
      { name: "Framer Motion", detail: "LazyMotion · useInView" },
    ]
  },
  {
    category: "APIs",
    items: [
      { name: "Resend", detail: "transactional email" },
      { name: "WhatsApp Meta API", detail: "approved templates" },
    ]
  },
  {
    category: "Deploy",
    items: [
      { name: "Vercel", detail: "Edge · CI/CD" },
      { name: "GitHub Actions", detail: "lint · build pipeline" },
    ]
  },
]

export default function StackGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
      {stack.map(({ category, items }) => (
        <div
          key={category}
          className="p-4 rounded-xl border border-border bg-surface flex flex-col gap-2"
        >
          <p className="font-mono text-xs text-text-secondary uppercase 
             tracking-widest">
            {category}
          </p>
          {items.map(({ name, detail }) => (
            <div key={name} className="flex flex-col gap-0.5">
              <p className="font-mono text-sm text-text-primary">{name}</p>
              <p className="font-mono text-xs text-accent">{detail}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
