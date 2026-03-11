---
trigger: always_on
---

# PORTFOLIO RULES — adrianoliver.dev

## 1. Design System

### Colors (Tailwind v4 @theme variables)

These MUST be defined in `globals.css` using `@theme` / CSS variables:

- `--color-background: #0C0C0C;`   (page background)
- `--color-surface: #141414;`      (cards, secondary sections)
- `--color-border: #1C1C1C;`
- `--color-text-primary: #F5F0E8;`
- `--color-text-secondary: #78716C;`
- `--color-accent: #D97706;`       (amber, main accent)
- `--color-accent-glow: #D9770620;`
- `--color-code-green: #22C55E;`
- `--color-code-yellow: #FACC15;`

Tailwind classes must reference these via `bg-[var(--color-background)]`, `text-[var(--color-text-primary)]`, etc, NOT hardcoded hex in-class (except for rare utilities).

### Typography

- **Display / H1-H2:** Instrument Serif
  - Used for main hero and big section titles.
  - Use italic on emotional words only (e.g., *fast*, *reliable*).
- **Body / UI Copy:** DM Sans
  - Weights 400 and 500 only.
- **Monospace / Technical elements:** JetBrains Mono
  - For code snippets, small labels, glitch effects, and terminal-style UI.

Fonts MUST be imported via `next/font/google` in `src/lib/fonts.ts` and used via className tokens, never via `@import` in CSS.

## 2. Animation Rules

### Libraries

- Framer Motion:
  - Use `LazyMotion` + `domAnimation` + `import * as m from "framer-motion/m";`
  - NEVER import `motion` directly from `"framer-motion"`.
  - Use only for:
    - Page transitions
    - Hero intro animation
    - Section reveal on scroll (in-view)
- Vanilla Tilt:
  - Used only on project cards in the Projects section (B3).
- CSS / Tailwind:
  - All micro-interactions: hover, background/border color transitions, simple transforms.
  - Use `transition`, `transform`, `opacity` only — no layout-affecting properties.

### Custom Effects

Implement the following as custom code (no heavy libs):

- **Noise / Grain:**
  - A single SVG or CSS-based noise overlay applied via `::before` on `body` or main layout container, opacity 3–4%.
- **Cursor Glow:**
  - A small circular element following the cursor with blur and `background: var(--color-accent); opacity ~0.15`.
- **Hero Glitch / Scramble:**
  - On first render, the hero name briefly shows a scrambled/glitch text effect and then settles into readable text.
- **Typing Cursor:**
  - In the subheading or tag line, simulate a typing cursor (`|`) blinking using CSS keyframes.

## 3. Layout & Components

### App Router

- `src/app/layout.tsx`:
  - Server Component.
  - Wraps:
    - `<RootLayout>` with fonts from `lib/fonts.ts`.
    - Global background, noise overlay, and base styles.
  - Contains global `<Navbar />` and `<Footer />` (imported from `components/layout`).

- `src/app/page.tsx`:
  - Server Component by default.
  - Composes sections:
    - `<Hero />`
    - `<ProjectsPreview />`
    - `<About />`
    - `<Services />`
    - `<ContactTeaser />`

- Child routes (`/projects/...`, `/blog`, `/contact`) follow the same pattern: Server Components hosting Client Components only when stateful interactivity is necessary.

### File Organization

- `components/layout` — Navbar, Footer, Layout primitives.
- `components/home` — Hero, ProjectsPreview, About, Services, ContactTeaser.
- `components/projects` — Case study-specific blocks.
- `components/ui` — Buttons, badges, tags, cards, input fields.

## 4. Copy & Positioning

- English only (US spelling).
- Hero must clearly answer in one line:
  - What Adrian does
  - For whom
  - What outcome
- Required messaging elements:
  - "Solo 30-day builds" as key differentiator.
  - E-commerce + internal tools as main verticals.
  - Async-first, remote-friendly process.

Words to AVOID in all copy:
- "cheap", "affordable", "offshore", "budget", "junior".

Words to PREFER:
- "scalable", "high-performance", "async", "architecture", "measurable results", "delivery in weeks, not months".

## 5. Performance Rules

- Target Lighthouse:
  - Mobile: ≥ 95 (Performance), ≥ 95 (Accessibility), ≥ 95 (Best Practices), ≥ 90 (SEO).
- Core Web Vitals goals:
  - LCP < 2s, CLS = 0, INP < 200ms.
- 90%+ of components as Server Components.
- Client-only zones:
  - Animation wrappers (where needed).
  - Contact form with interactive validation.
  - Future interactive widgets (guestbook, etc).

## 6. Block Workflow (for activecontext.md)

- Every coding session must be tied to a **Block** (B0, B1, B2, ...).
- At the start of a block:
  - Read `.agent/.context/activecontext.md`.
  - Confirm CURRENT BLOCK and NEXT BLOCK.
- At the end of a block:
  - Update the `CURRENT BLOCK` → `LAST COMPLETED BLOCK`.
  - List all modified files.
  - Write a 2–3 line summary of what changed.

This file (`portfolio-rules.md`) MUST be included in Active Context for every Antigravity session on this repo.


## 7. Folder Structure (Portfolio)

The project MUST follow this structure:

src/
app/
layout.tsx # Root layout (Server Component)
page.tsx # Homepage
projects/
lukess-home/
page.tsx
lukess-inventory-system/
page.tsx
blog/
page.tsx
[slug]/
page.tsx
contact/
page.tsx
components/
layout/ # Navbar, Footer, Layout primitives
home/ # Hero, ProjectsPreview, About, Services, ContactTeaser
projects/ # Case study components
blog/ # Blog components
ui/ # Buttons, cards, badges, inputs, tags
lib/
fonts.ts # next/font setup
animations.ts # shared Motion variants
mdx.ts # MDX helpers
utils.ts # generic helpers
content/
blog/ # .mdx posts
public/
images/
mockups/
llms.txt


When creating new components, ALWAYS place them in the appropriate folder above instead of inventing new top-level folders.


## 9. Commit & Push Protocol

A block or sub-block is NEVER complete until the code is pushed to GitHub remote.

After EVERY completed block or meaningful sub-block fix:

1. Run lint first:
   npm run lint
   (wait for output — fix ALL errors before continuing)

2. Run build:
   npm run build
   (wait for output — fix ALL errors before continuing)

3. Only if both pass with zero errors:
   git add .
   git commit -m "[type](portfolio-b[N]-[name]): [description]"
   
4. Push to remote immediately after commit:
   Use GitHub MCP: push_files OR run: git push origin main

NEVER commit if lint or build has errors.
NEVER leave a commit without pushing — local commits are invisible to Vercel deploy.
NEVER chain commands — run each one separately and wait for output.

Commit message format:
- feat(portfolio-b1-layout): description → new feature completed
- fix(portfolio-b1-layout): description → bug fix
- chore(portfolio): description → config, deps, non-code changes

## 10. Browser / Screenshot Protocol

Do NOT run the dev server or take screenshots by default.

ONLY use Browser Sub-Agent or dev server when:
- Explicitly requested by the user ("show me how it looks")
- Verifying a visual bug that cannot be diagnosed from code alone
- Capturing mockup screenshots for case studies or portfolio documentation
- Running a Lighthouse audit (B12 QA block only)
- Checking a layout on mobile viewport (375px) when responsive issues are suspected

For all other tasks: trust lint + build output as the verification signal.
When in doubt, ask: "Do you want me to run the dev server to verify visually?"

