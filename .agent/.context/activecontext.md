# activecontext.md — adrianoliver.dev (Portfolio)
**Last Updated:** 2026-03-19
**Updated By:** Antigravity (Block B1-homepage completion)

---

## CURRENT BLOCK
- **Block Number:** B1
- **Block Name:** Homepage Refactor
- **Status:** DONE

### Files Modified
- `src/components/home/HeroAnimations.tsx` [MODIFY] — subtitle second span updated with new apparel/retail copy
- `src/components/home/ProjectCard.tsx` [MODIFY] — data-driven metrics prop added, hardcoded values removed
- `src/components/home/ProjectsGrid.tsx` [MODIFY] — Solnr removed, grid restructured to Lukess Home (col-span-3) + Lukess Inventory (col-span-2) + CTA card, both with metrics and correct imageSrc paths
- `src/components/home/CurrentProject.tsx` [MODIFY] — replaced with Solnr Studio WIP, styled accent-border placeholder, no broken image references
- `src/components/home/ContactForm.tsx` — verified email is hello@adrianoliver.dev (no change needed)

### Notes
- `npm run lint` — 0 errors (1 pre-existing warning in gtag.d.ts, unrelated)
- `npm run build` — exit code 0
- CTA dot: var(--color-code-green), hover text: var(--color-accent)
- All colors via CSS variables, no hardcoded hex in className props

## LAST COMPLETED BLOCK
- **Block Number:** B1
- **Block Name:** Homepage Refactor
- **Completed Date:** 2026-03-19
- **Started:** 2026-03-19

## PROJECT STATE

- **Repo:** adrianoliver-dev/adrianoliver-dev
- **Stack Installed:** Next.js 15, TypeScript, Tailwind v4, Framer Motion, Vanilla Tilt, Resend, MDX libs, Lenis.
- **MCPs Available:** GitHub, Supabase, Notion.

---

## NEXT BLOCK
- **Block Number:** B2
- **Block Name:** (TBD by user)

---

## BLOCK HISTORY TABLE

| Block | Name                    | Status       | Date       | Commit |
|-------|-------------------------|--------------|------------|--------|
| B0    | Foundation & Setup      | DONE         | 2026-03-11 | chore: complete block B0 - foundation, dependencies, and skills |
| B1    | Global Layout & Fonts   | DONE         | 2026-03-11 | feat(portfolio-b1): Next.js 15 init, Tailwind v4, global layout, fonts, navbar, footer |
| B2    | Hero Section            | DONE         | 2026-03-11 | feat(portfolio-b2): hero section with glitch, stagger reveal, cursor glow |
| B4    | Methodology Section     | DONE         | 2026-03-11 | feat(portfolio-b4): methodology section |
| B5    | Case Study Pages        | DONE         | 2026-03-11 | feat(portfolio-b5): case study pages for lukess-home and lukess-inventory |
| B6    | Visual Polish           | DONE         | 2026-03-11 | feat(portfolio-b6): visual polish — noise, tilt, amber glow, spotlight borders, page transitions, scroll fade-up |
| B7    | About + Stack Section   | DONE         | 2026-03-11 | feat(portfolio-b7): about section — terminal card, stack grid, self-taught narrative |
| B8    | Services & Process      | DONE         | 2026-03-11 | feat(portfolio-b8): services, process steps, and SLA strip |
| B9    | Contact Form            | DONE         | 2026-03-11 | feat(portfolio-b9): contact section, server action, resend integration, availability indicator |
| B10   | SEO Completo            | DONE         | 2026-03-11 | feat(portfolio-b10): seo — metadata, json-ld, sitemap, robots, llms.txt, og image |
| B11   | Analytics               | DONE         | 2026-03-11 | feat(portfolio-b11): analytics — vercel analytics, speed insights, ga4 |
| B14   | Premium Visual Layer    | DONE         | 2026-03-12 | feat(portfolio-b14): premium visual layer — lenis, hero scale, magnetic buttons, ambient glow, dividers |
| B15   | Final QA & Optimization | DONE         | 2026-03-18 | feat(portfolio-b15): final QA and analytics setups |
| B16   | Outreach & Content      | DONE         | 2026-03-18 | feat(portfolio-b16-outreach): implemented multi-project visual galleries, dynamic MDX blog, and finalized top-tier SEO/Analytics |
| B0    | Prerequisite Migration  | DONE         | 2026-03-19 | chore(portfolio-b0): lenis migration, VideoDemo coming-soon, ProjectGallery real images |
| B1    | Homepage Refactor       | DONE         | 2026-03-19 | feat(portfolio-b1-homepage): hero subtitle, data-driven metrics, grid to 2 projects, Solnr to CurrentProject, contact email |
