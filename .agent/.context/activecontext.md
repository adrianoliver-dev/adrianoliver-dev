# activecontext.md — adrianoliver.dev (Portfolio)
**Last Updated:** 2026-03-11
**Updated By:** Manual (initial setup)

---

## CURRENT BLOCK
- **Block Number:** B0
- **Block Name:** Foundation & Setup (.agent, rules, structure)
- **Status:** IN_PROGRESS
- **Started:** 2026-03-11

---

## LAST COMPLETED BLOCK
- **Block Number:** —
- **Block Name:** —
- **Completed:** —
- **Commit:** —

---

## FILES CHANGED THIS SESSION
- `src/app/page.tsx` — Created dummy homepage route.
- `src/app/projects/lukess-home/page.tsx` — Created dummy project case study route.
- `src/app/projects/lukess-inventory-system/page.tsx` — Created dummy project case study route.
- `src/app/blog/page.tsx` — Created dummy blog index route.
- `src/app/blog/[slug]/page.tsx` — Created dummy dynamic blog post route.
- `src/app/contact/page.tsx` — Created dummy contact route.
- `public/llms.txt` — Created placeholder file for AI context.
- Scaffolding of standard directories: `src/components/{layout,home,projects,blog,ui}`, `src/lib/`, `src/content/blog/`, `public/{images,mockups}`.
- `package.json` — Initialized with `framer-motion`, `vanilla-tilt`, `next-mdx-remote`, `gray-matter`, `resend` (installations in progress).

## PROJECT STATE

- **Repo:** adrianoliver-dev/adrianoliver-dev
- **Stack Installed:** Next.js 15, TypeScript, Tailwind v4 (to be confirmed), Framer Motion, Vanilla Tilt, Resend, MDX libs (to be installed in B1).
- **MCPs Available:** GitHub, Supabase, Notion (Vercel MCP optional for later).

---

## OPEN ISSUES
- [ ] Next.js 15 app requires initialization (package missing). To be done in B1.
- [ ] Confirm Tailwind is v4 with Oxide and @theme (not v3). To be done in B1.
- [ ] Create `src/lib/fonts.ts` with Instrument Serif, DM Sans, JetBrains Mono via `next/font/google`.
- [ ] Set up `globals.css` with design tokens from portfolio-rules.md.

---

## NEXT BLOCK
- **Block Number:** B1
- **Block Name:** Global Layout & Fonts
- **Dependencies:** B0 rules & design tokens in place
- **Scope:**
  - Implement `src/app/layout.tsx` with fonts and base layout.
  - Create `Navbar` and `Footer` skeletons.
  - Apply background, noise texture, and basic theming.

---

## BLOCK HISTORY TABLE

| Block | Name                    | Status       | Date       | Commit |
|-------|-------------------------|--------------|------------|--------|
| B0    | Foundation & Setup      | IN_PROGRESS  | 2026-03-11 | —      |
