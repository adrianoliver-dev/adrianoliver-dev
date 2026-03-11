# activecontext.md — adrianoliver.dev (Portfolio)
**Last Updated:** 2026-03-11
**Updated By:** Manual (initial setup)

---

## CURRENT BLOCK
- **Block Number:** B3
- **Block Name:** Projects Bento Grid
- **Status:** PENDING

## LAST COMPLETED BLOCK
- **Block Number:** B2
- **Block Name:** Hero Section
- **Completed Date:** 2026-03-11
- **Started:** 2026-03-11



## FILES CHANGED THIS SESSION
- `src/components/home/Hero.tsx` — Created static Hero component
- `src/components/home/HeroAnimations.tsx` — Created Client Component with Framer Motion glitch and cursor glow
- `src/app/page.tsx` — Wired Hero component into home page
- `.agent/.context/activecontext.md` — Marked B2 DONE

## PROJECT STATE

- **Repo:** adrianoliver-dev/adrianoliver-dev
- **Stack Installed:** Next.js 15, TypeScript, Tailwind v4 (to be confirmed), Framer Motion, Vanilla Tilt, Resend, MDX libs (to be installed in B1).
- **MCPs Available:** GitHub, Supabase, Notion (Vercel MCP optional for later).

---

## OPEN ISSUES
- [x] Implement actual Hero section in `src/components/home/Hero.tsx`
- [ ] Build global Navbar with animations
- [ ] Connect Framer Motion transitions (B3)

---

## NEXT BLOCK
- **Block Number:** B3
- **Block Name:** Projects Bento Grid
- **Dependencies:** B2 Hero Section
- **Scope:**
  - Build `<ProjectsPreview />` component
  - Implement Vanilla Tilt on project cards
  - Setup responsive CSS Grid (Bento style)

---

## BLOCK HISTORY TABLE

| Block | Name                    | Status       | Date       | Commit |
|-------|-------------------------|--------------|------------|--------|
| B0    | Foundation & Setup      | DONE         | 2026-03-11 | chore: complete block B0 - foundation, dependencies, and skills |
| B1    | Global Layout & Fonts   | DONE         | 2026-03-11 | feat(portfolio-b1): Next.js 15 init, Tailwind v4, global layout, fonts, navbar, footer |
| B2    | Hero Section            | DONE         | 2026-03-11 | feat(portfolio-b2): hero section with glitch, stagger reveal, cursor glow |
