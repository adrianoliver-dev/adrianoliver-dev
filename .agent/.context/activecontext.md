# activecontext.md — adrianoliver.dev (Portfolio)
**Last Updated:** 2026-03-11
**Updated By:** Manual (initial setup)

---

## CURRENT BLOCK
- **Block Number:** B2
- **Block Name:** Hero Section
- **Status:** PENDING

## LAST COMPLETED BLOCK
- **Block Number:** B1
- **Block Name:** Global Layout & Fonts
- **Completed Date:** 2026-03-11
- **Started:** 2026-03-11



## FILES CHANGED THIS SESSION
- `src/app/page.tsx` — Minimal placeholder for layout testing
- `src/app/layout.tsx` — Configured with fonts, metadata, Navbar, and Footer
- `src/app/globals.css` — Configured Tailwind v4 @theme design tokens
- `src/lib/fonts.ts` — Defined DM Sans, Instrument Serif, JetBrains Mono
- `src/components/layout/Navbar.tsx` — Created skeleton Navbar
- `src/components/layout/Footer.tsx` — Created skeleton Footer
- `package.json` — Scaffolded Next.js 15 app with original custom dependencies reinstalled
- `.agent/.context/activecontext.md` — Marked B1 DONE

## PROJECT STATE

- **Repo:** adrianoliver-dev/adrianoliver-dev
- **Stack Installed:** Next.js 15, TypeScript, Tailwind v4 (to be confirmed), Framer Motion, Vanilla Tilt, Resend, MDX libs (to be installed in B1).
- **MCPs Available:** GitHub, Supabase, Notion (Vercel MCP optional for later).

---

## OPEN ISSUES
- [ ] Implement actual Hero section in `src/components/home/Hero.tsx`
- [ ] Build global Navbar with animations
- [ ] Connect Framer Motion transitions (B2/B3)

---

## NEXT BLOCK
- **Block Number:** B2
- **Block Name:** Hero Section
- **Dependencies:** B1 Global Layout
- **Scope:**
  - Build `<Hero />` component with typography hierarchy
  - Add text scramble/glitch effect to the main title
  - Animate entrance with Framer Motion `LazyMotion`

---

## BLOCK HISTORY TABLE

| Block | Name                    | Status       | Date       | Commit |
|-------|-------------------------|--------------|------------|--------|
| B0    | Foundation & Setup      | DONE         | 2026-03-11 | chore: complete block B0 - foundation, dependencies, and skills |
| B1    | Global Layout & Fonts   | DONE         | 2026-03-11 | feat(portfolio-b1): Next.js 15 init, Tailwind v4, global layout, fonts, navbar, footer |
