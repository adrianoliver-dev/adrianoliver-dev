---
trigger: always_on
---

# PROJECT CONTEXT — adrianoliver.dev (Portfolio)

## Project Identity

- **Repo:** adrianoliver-dev/adrianoliver-dev
- **Live Domain:** https://adrianoliver.dev
- **Developer:** Adrian Oliver — Full-Stack Developer (Santa Cruz de la Sierra, Bolivia)
- **Goal:** Use this portfolio as main asset to reach $800+/month remote freelance income (US/EU) in <= 5 months.
- **Target Clients:** SMB owners, startup founders, technical leads in US/EU looking for:
  - High-performance e-commerce
  - Custom business dashboards (inventory / POS / internal tools)

## Tech Stack (MANDATORY)

- **Framework:** Next.js 15 App Router (React Server Components by default)
- **Language:** TypeScript strict (no `any`, no implicit `any`)
- **Styling:** Tailwind CSS v4 (Oxide, `@theme` config, no `tailwind.config.js`)
- **Animations:** Framer Motion (LazyMotion + `domAnimation` + `m.*`), CSS transitions, Vanilla Tilt
- **Content:** MDX (blog posts and possibly long-form case studies)
- **Email:** Resend for contact form
- **Deployment:** Vercel (Production: `adrianoliver.dev`)

## Scope Boundaries

- You ONLY work inside this repo.
- You NEVER touch Lukess Home repos or inventory repos from here.
- This project is **public portfolio**, not an app for clients. No auth, no Supabase writes except optional guestbook/analytics in later blocks.
- Do not add dependencies that are not strictly required for:
  - Layout
  - Animations
  - Content (MDX)
  - Contact form
- Do not implement 3D/WebGL, Three.js or heavy canvas libraries in this project.

## Pages & Routes

- `/` — Homepage (hero, projects, about, services, contact teaser)
- `/projects/lukess-home` — Case study: e-commerce
- `/projects/lukess-inventory-system` — Case study: POS/inventory
- `/blog` & `/blog/[slug]` — Developer/freelance blog
- `/contact` — Contact page (form + async-first info)
- `/llms.txt` — AI-optimized context file (served from `public/llms.txt`)

## Positioning Rules

- Portfolio must present Adrian as:
  - A **high-performance web architect** for SMBs, not a generic coder.
  - Someone who can scope, implement and ship full systems *solo* in ~30 days.
- Hero and case studies **focus on business outcomes** and delivery speed, not just tech stack.
- Copy language: clear, concise, confident. No slang, no filler.

## MCP Boot Protocol (Antigravity)

Before any non-trivial change in this project:

1. **Daily planning:**
   - Read Notion Home Dashboard page: `311a9019b851809985efeb5e99b8d894`
   - Check if there is a portfolio-related MIT for today.

2. **Project status:**
   - If a Notion page exists for adrianoliver.dev blocks, read it and sync with `.agent/.context/activecontext.md`.

3. **GitHub:**
   - Use GitHub MCP only to:
     - Read latest commits for this repo.
     - Push changes after each completed block (with a clear commit message).

No Supabase MCP is required for this project at Block 0–B7. It can be enabled later if we add a Supabase-powered guestbook/analytics.

## Deliverable Definition

A block is considered **DONE** only when:

- Code compiles (`npm run lint && npm run build` passes).
- UI works on **mobile and desktop** (tested via Browser Sub-Agent or manual).
- `activecontext.md` is updated with:
  - Block number and name
  - Files changed
  - Short note of what was implemented
- If the block changes public behavior, a quick screenshot or Loom description is added in Notion.
