---
trigger: always_on
---

# Skill: Tailwind CSS v4 Patterns — adrianoliver.dev

## Key Differences from v3

| v3 | v4 |
|---|---|
| `tailwind.config.js` | `@theme {}` block in CSS |
| `@tailwind base/components/utilities` | `@import "tailwindcss"` |
| `theme.extend.colors` | CSS custom properties in `@theme` |
| JIT mode optional | Always JIT (Oxide engine) |
| PostCSS config manual | Auto-configured with Next.js |

## globals.css Setup

```css
@import "tailwindcss";

@theme {
  /* Background scale */
  --color-background: #0C0C0C;
  --color-surface: #141414;
  --color-border: #1C1C1C;

  /* Text */
  --color-text-primary: #F5F0E8;
  --color-text-secondary: #78716C;

  /* Accent */
  --color-accent: #D97706;
  --color-accent-glow: rgba(217, 119, 6, 0.12);

  /* Code */
  --color-code-green: #22C55E;
  --color-code-yellow: #FACC15;

  /* Typography */
  --font-sans: var(--font-dm-sans);
  --font-serif: var(--font-instrument-serif);
  --font-mono: var(--font-jetbrains-mono);
}
How to Use Custom Tokens in Classes
Since v4 uses CSS variables, Tailwind utilities are auto-generated from @theme.
Token --color-accent becomes utility bg-accent, text-accent, border-accent.
Token --color-background becomes bg-background, etc.

✅ Correct:

tsx
<div className="bg-background text-text-primary border border-border">
❌ Wrong (arbitrary values for defined tokens):

tsx
<div className="bg-[#0C0C0C] text-[#F5F0E8]">
Only use arbitrary values for one-off values that are NOT in the design system (e.g., exact pixel measurements for specific layouts).

Responsive Design
Mobile-first always: unprefixed = mobile, md: = 768px+, lg: = 1024px+.

Test at 375px (iPhone SE) before 1440px.

Transitions / Animations via CSS
For micro-interactions (hover, color changes, scale):

css
/* Use Tailwind transition utilities */
className="transition-colors duration-200 ease-out"
className="transition-transform duration-300 ease-out hover:scale-105"
NEVER use Framer Motion for simple hover effects.

Dark Mode
This project is DARK by default. No light mode toggle.

No dark: prefix needed — all colors are already dark-optimized.

Do NOT add darkMode config.

