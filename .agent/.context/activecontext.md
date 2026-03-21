# activecontext.md — adrianoliver.dev (Portfolio)
**Last Updated:** 2026-03-20
**Updated By:** Antigravity (Block 7 complete)

---

## CURRENT BLOCK
- **Block Number:** B8.3
- **Block Name:** AI Chatbot Widget UI
- **Status:** DONE
- **Completed Date:** 2026-03-21
- **Commit:** feat(portfolio-b8.3-chat-complete): Gemini 2.5 streaming, scroll fixes, fixed-height textarea
- **Files:**
  - [NEW] src/components/chat/ChatTrigger.tsx
  - [NEW] src/components/chat/ChatMessage.tsx
  - [NEW] src/components/chat/ChatWidget.tsx
  - [NEW] src/app/api/chat/route.ts
  - [NEW] src/lib/chat-knowledge.ts
  - [MODIFY] src/app/layout.tsx
  - [MODIFY] src/app/globals.css
- **Summary:** Completed the AI chatbot integration (Block 8.3). Implemented a streaming RAG-style assistant using Gemini 2.5 Flash with sliding window history (20 messages). Designed a premium sidebar UI with `framer-motion` animations and a `BrandMark` pill trigger. Resolved critical scroll propagation issues caused by Lenis conflict using `data-lenis-prevent` and `isolation: isolate`. Finalized the input area with a 7-line fixed-height textarea (168px) for stable typing UX.

| B7.5h | Footer Hotfix      | DONE | 2026-03-21 | fix(footer): remove nav duplication |
| B7.5  | [Footer & Banner](file:///c:/AdrianOliver-dev/adrianoliver-dev/src/components/layout/Footer.tsx) | DONE | 2026-03-21 | feat(portfolio-b7.5-footer-social) |
| B7.4  | [JSON-LD & Robots](file:///c:/AdrianOliver-dev/adrianoliver-dev/public/robots.txt) | DONE | 2026-03-21 | feat(portfolio-b7.4-jsonld-robots) |
| B7.3a | [Favicon & LLMs](file:///c:/AdrianOliver-dev/adrianoliver-dev/public/llms.txt) | DONE | 2026-03-21 | feat(portfolio-b7.3a-favicon-llms) |
| B7.2  | [Content Payload](file:///c:/AdrianOliver-dev/adrianoliver-dev/src/content/blog/nextjs-vs-shopify-apparel.mdx) | DONE | 2026-03-20 | feat(portfolio-b7.2-blog-post-2) |
| B7.1e | [Card Redesign](file:///c:/AdrianOliver-dev/adrianoliver-dev/src/app/blog/page.tsx) | DONE | 2026-03-20 | feat(portfolio-b7.1e-blog-cards) |
| B7.1d | [Visuals & Share](file:///c:/AdrianOliver-dev/adrianoliver-dev/src/app/blog/page.tsx) | DONE | 2026-03-20 | feat(portfolio-b7.1d-blog-covers) |

## PROJECT STATE

- **Repo:** adrianoliver-dev/adrianoliver-dev
- **Stack Installed:** Next.js 15, TypeScript, Tailwind v4, Framer Motion, @tailwindcss/typography.
- **MCPs Available:** GitHub, Supabase, Notion.

---

## NEXT BLOCK
- **Block Number:** B8.4
- **Block Name:** AI Chatbot Polishing & Mobile Optimization

---

## BLOCK HISTORY TABLE

| Block | Name                    | Status       | Date       | Commit |
|-------|-------------------------|--------------|------------|--------|
| B0    | Foundation & Setup      | DONE         | 2026-03-11 | chore: complete block B0 |
| B1    | Global Layout & Fonts   | DONE         | 2026-03-11 | feat(portfolio-b1) |
| B2    | Hero Section            | DONE         | 2026-03-11 | feat(portfolio-b2) |
| B14   | Premium Visual Layer    | DONE         | 2026-03-12 | feat(portfolio-b14) |
| B15   | Final QA & Optimization | DONE         | 2026-03-18 | feat(portfolio-b15) |
| B16   | Outreach & Content      | DONE         | 2026-03-18 | feat(portfolio-b16) |
| B0.2  | Prerequisite Migration  | DONE         | 2026-03-19 | chore(portfolio-b0) |
| B1.2  | Homepage Refactor       | DONE         | 2026-03-19 | feat(portfolio-b1) |
| B2.2  | Lukess Home Overhaul    | DONE         | 2026-03-19 | feat(portfolio-b2) |
| B3.2  | Lukess Inventory Overhaul| DONE         | 2026-03-19 | feat(portfolio-b3) |
| B4.2  | Solnr WIP & Blog Fixes | DONE         | 2026-03-19 | feat(portfolio-b4) |
| B4.5  | Personal brand mark            | DONE         | 2026-03-19 | feat(portfolio-b4.5) |
| B4.5b | Brand assets export page       | DONE         | 2026-03-19 | feat(portfolio-b4.5b) |
| B5.8  | Copy Audit Fixes + Hotfix     | DONE         | 2026-03-19 | feat(portfolio-b5.8) |
| B6.1  | ProjectGallery Interactive Upgrade | DONE         | 2026-03-19 | feat(portfolio-b6.1) |
| B6.B  | Cursor & LCP Performance Refinement | DONE | 2026-03-20 | fb0b337 |
| B7.0  | Blog Infrastructure Rebuild | DONE | 2026-03-20 | feat(portfolio-b7.0) |
| B7.1  | Blog Post #1 Content | DONE | 2026-03-20 | feat(portfolio-b7.1) |
