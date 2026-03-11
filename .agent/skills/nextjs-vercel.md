---
trigger: model_decision
name: nextjs-vercel
description: Patterns and best practices for deploying Next.js 15 App Router applications on Vercel. Focuses on edge functions, image optimization, analytics, and performance.
risk: safe
source: community
date_added: '2026-03-11'
---

# Skill: Next.js + Vercel Deployment Patterns — adrianoliver.dev

## When to Use This Skill

Only activate when dealing with deployments, Vercel configuration, SEO (B9), or Analytics (B11).

## Vercel Core Configurations

### 1. Edge vs Node.js Runtime

- **Default:** Node.js (Serverless Functions)
- **Edge:** Use only for lightweight API routes, middleware, or specific pages that need ultra-low latency and rely on Edge-compatible APIs (no Node native modules).

```typescript
export const runtime = 'edge'; // in page.tsx or route.ts
```

### 2. Image Optimization (`next/image`)

Vercel automatically optimizes `next/image`. For best performance:
- Always define explicit `width` and `height` to prevent layout shift.
- Use `priority` on above-the-fold images (LCP).
- Use `quality` (e.g., `quality={90}`) on critical hero images.

### 3. Vercel Analytics setup (B11)

Vercel Analytics should be integrated natively:
1. Enable Web Vitals in Vercel Dashboard
2. Add `@vercel/analytics` package
3. Add component to Root Layout.

```tsx
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### 4. Cache & ISR (Incremental Static Regeneration)

Next.js 15 App Router caching on Vercel:
- Pages are static by default.
- Use `export const revalidate = 3600;` for ISR (revalidates every hour).
- Use `export const dynamic = 'force-dynamic';` only if absolutely needed for real-time uncacheable data.

```typescript
// Revalidate this page every 24 hours
export const revalidate = 86400; 

export default async function Page() { ... }
```

### 5. Middleware

Middleware on Vercel runs at the Edge network before a request is processed. Useful for:
- Authentication checks
- A/B Testing redirects
- Localization/I18N

```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.next()
}

export const config = {
  matcher: ['/api/:path*'],
}
```

## Advanced Vercel + Next.js Features

- **Draft Mode:** For CMS previews on Vercel.
- **Vercel KV / Postgres:** For ultra-fast edge data.
- **Speed Insights:** Add `@vercel/speed-insights` to monitor actual user CWV (Core Web Vitals) metrics.
