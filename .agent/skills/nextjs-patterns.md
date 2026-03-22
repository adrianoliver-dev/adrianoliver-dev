---
trigger: always_on
---

# Skill: Next.js App Router Patterns — adrianoliver.dev

## Server vs Client Components

- DEFAULT: every component is a Server Component.
- ADD 'use client' ONLY when the component needs:
  - Event handlers (onClick, onChange, onSubmit)
  - Browser APIs (window, document, localStorage, IntersectionObserver)
  - React hooks that require client state (useState, useEffect, useReducer)
  - Framer Motion animated components (m.* need client context)
  - vanilla-tilt (uses DOM APIs directly)

- NEVER add 'use client' to:
  - layout.tsx (any layout)
  - page.tsx files (push interactivity to child components)
  - Components that only fetch data or render static markup

## Data Fetching

- Fetch data directly in Server Components using async/await.
- Use React's `cache()` for expensive fetches that may be called multiple times.
- For portfolio (no DB yet): use static data files in `lib/data/` typed with TypeScript interfaces.
- Example pattern:

```typescript
// lib/data/projects.ts
export interface Project {
  slug: string
  title: string
  description: string
  tags: string[]
  year: number
  featured: boolean
}

export const projects: Project[] = [
  {
    slug: "lukess-home",
    title: "Lukess Home — E-commerce",
    ...
  }
]
Metadata
Export metadata from every page.tsx and layout.tsx.

Root layout: define base metadata (title template, description, OG).

Individual pages: override title and description.

NEVER use <head> tags directly.

typescript
// Example: app/projects/lukess-home/page.tsx
export const metadata = {
  title: "Lukess Home — Case Study",
  description: "Full-stack e-commerce built in 30 days with Next.js and Supabase."
}
Image Handling
ALWAYS use next/image (Image from "next/image").

Always provide explicit width and height OR use fill with a positioned parent.

For project mockups: store in public/mockups/, reference as /mockups/filename.webp.

Format: WebP preferred. PNG only if WebP not available.

Font Handling
ONLY use next/font/google in src/lib/fonts.ts.

Export font classNames and apply them in layout.tsx on <html> or <body>.

NEVER @import in CSS.

NEVER use Google Fonts CDN link tags.

Route Groups
Not needed for this project. Keep structure flat as defined in portfolio-rules.md.

Middleware
No middleware needed for this project (no auth).

Do not create middleware.ts unless explicitly asked.

