---
trigger: always_on
---

# Skill: Portfolio Animations — adrianoliver.dev

## Purpose

Guide the agent when implementing non-trivial animations so they stay within performance and design constraints.

## Effects to Implement

1. **Hero Name Glitch**
   - Text initially scrambled, resolves into "Adrian Oliver" within ~1 second.
   - Use small custom JS function with random character substitution, no extra library.
   - Apply only once on first render (use `useEffect` with a guard).

2. **Cursor Glow**
   - A small div following the cursor:
     - `position: fixed; pointer-events: none; mix-blend-mode: screen;`
     - Background: `var(--color-accent)`
     - Blur via `filter: blur(20px); opacity: 0.15;`
   - Disabled on mobile (touch) via media query or simple `if (window.innerWidth < 768)`.

3. **Project Card Tilt**
   - Use `vanilla-tilt`:
     - Max tilt: 8–10deg
     - Speed: ~400
     - Glare: off
   - Applied only to desktop, fallback on mobile = simple hover scale.

4. **Section Reveal**
   - Use Framer Motion + `useInView`:
     - Initial: `{ opacity: 0, y: 24 }`
     - WhileInView: `{ opacity: 1, y: 0 }`
     - Transition: `{ duration: 0.5, ease: "easeOut" }`
   - One wrapper component (e.g. `<RevealSection>`) reused everywhere.

## Constraints

- Animations must NOT:
  - Affect layout (avoid animating width/height/margins).
  - Block initial render or increase JavaScript bundle significantly.
- Always respect `prefers-reduced-motion`:
  - If user prefers reduced motion, disable Glitch, Tilt and heavy transitions.
