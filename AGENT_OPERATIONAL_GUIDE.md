# 🤖 AGENT OPERATIONAL GUIDE: adrianoliver.dev (Agentic Strategy & Implementation)

> **Role:** Strategic Implementation Assistant (Prompter)
> **Goal:** Coordinate with the "Implementer Agent" (Antigravity) to execute the [PORTFOLIO_AUDIT_19_03_2026.md](file:///c:/AdrianOliver-dev/adrianoliver-dev/PORTFOLIO_AUDIT_19_03_2026.md) plan.
> **Last Updated:** 2026-03-19

This document defines the **operational protocol** for interacting with the Adrian Oliver workspace and its agentic infrastructure. Use this to provide high-precision implementation prompts to Antigravity.

---

## 1. WORKSPACE MEMORY ARCHITECTURE

The workspace uses a strict **Memory Protocol** to maintain state across sessions. Every prompt you generate must acknowledge and potentially update these files.

### 1.1 The Source of Truth: `activecontext.md`
**Path:** [.agent/.context/activecontext.md](file:///c:/AdrianOliver-dev/adrianoliver-dev/.agent/.context/activecontext.md)
*   **Purpose:** Tracks current block, last completed tasks, repo state, and open issues.
*   **Your Action:** Before any task, ask Antigravity to verify the current block in this file. NEVER skip blocks.

### 1.2 The Guardrails: `portfolio-rules.md`
**Path:** [.agent/rules/portfolio-rules.md](file:///c:/AdrianOliver-dev/adrianoliver-dev/.agent/rules/portfolio-rules.md)
*   **Purpose:** Technical and design 
*   **Key Constraints:**
    *   **TypeScript:** Strict, no `any`, explicit return types.
    *   **Tailwind v4:** `@theme` block in CSS only. No `tailwind.config.js`.
    *   **Animations:** Framer Motion `LazyMotion` + `domAnimation`. Vanilla Tilt (max 10°).
    *   **Components:** 90%+ Server Components. `'use client'` only for interactive leaf nodes.

---

## 2. THE "BLOCK" WORKFLOW

Implementation follows a linear "Block" system (B0, B1, ... B17). A block is considered **DONE** only when:
1.  **Code is written** according to rules.
2.  **Lint passes** (`npm run lint`).
3.  **Build passes** (`npm run build`).
4.  **Files are committed** with the specific format: `feat(portfolio-b[N]-[scope]): description`.
5.  **Files are pushed** to GitHub.
6.  **`activecontext.md` is updated** to reflect the new state.

**Your Action:** Ensure your prompts follow this lifecycle. Do not move to B18 until B17 is marked DONE in `activecontext.md`.

---

## 3. MCP INTEROPERABILITY (Leveraging Antigravity's Power)

Antigravity has access to specialized tools. When you give a prompt, you can explicitly ask it to use these MCPs for maximum efficiency:

### 3.1 GitHub MCP
*   **Capabilities:** `get_file_contents` (to get SHA), `push_files` (multi-file commits), `create_pull_request`.
*   **Strategy:** Ask Antigravity to "Commit and push via GitHub MCP" instead of using raw terminal `git` commands.

### 3.2 Vercel MCP
*   **Capabilities:** `get_runtime_logs`, `quick_status`, `create_deployment`.
*   **Strategy:** Use when an implementation requires verification of the live preview or debugging edge functions.

### 3.3 Supabase MCP
*   **Capabilities:** `apply_migration`, `list_tables`, `generate_typescript_types`.
*   **Strategy:** Crucial for guestbook, contact form persistence, or any future backend features. Always remind it to `generate_typescript_types` after migrations.

### 3.4 Notion MCP
*   **Capabilities:** Update project dashboards, track task status.
*   **Page ID:** `311a9019b851809985efeb5e99b8d894` (Home Dashboard).

---

## 4. PROMPT ENGINEERING FOR ANTIGRAVITY (Patterns)

To avoid "hallucinations" or rule-breaking code, your prompts should follow this structure:

### ✅ RECOMMENDED PROMPT PATTERN
```markdown
# TASK: [Block Name - Ref/ID]

## Context
- Related Files: [List paths]
- Current Block: [B_]
- Goal: [Specific outcome from PORTFOLIO_AUDIT]

## Implementation Instructions
1. [Step 1: Code changes based on portfolio-rules.md]
   - Use CSS variables from globals.css @theme.
   - Implement [Animation] using LazyMotion.
2. [Step 2: Logic requirements]
3. [Step 3: Protocol enforcement]
   - Run `npm run lint` and `npm run build`.
   - Commit as `feat(portfolio-b_): [desc]`.
   - Update `activecontext.md`.
```

### ❌ AVOID
- "Improve the SEO" (Too vague).
- "Add a new page" (Specify the directory structure from `portfolio-rules.md`).
- "Use motion from framer-motion" (Rules strictly require `m` from `framer-motion/m`).

---

## 5. DESIGN SYSTEM QUICK-REF (For Prompting)

| Category | Rules to Enforce in Prompts |
|---|---|
| **Colors** | Use `var(--color-background)`, `var(--color-accent)`. No hardcoded hex. |
| **Typography** | `Instrument Serif` (H1/H2), `DM Sans` (Body), `JetBrains Mono` (Technical). |
| **Visuals** | Maintain "Dark Organic Luxury". Ambient Glow, Noise Overlay, Spotlight. |
| **Copy** | PREFER: "scalable", "async", "architecture". AVOID: "cheap", "junior". |

---

## 6. INTERACTION WITH "PORTFOLIO_AUDIT_19_03_2026.md"

You have the comprehensive audit document. Your role is to **prioritize the "Open Issues" and "Strategic Recommendations"** from that file.

1.  Read the **Mega-Prompt** in section 16 of the audit.
2.  Deconstruct it into **Atomic Prompts** (one per Antigravity session).
3.  Each prompt must include the current state from `activecontext.md` as the starting point.

---

## 7. FINAL PROTOCOL

If Antigravity fails a build or lint, do NOT allow it to ignore the errors. Your next prompt must focus on **FIXING** before proceeding. 

**Memory is life.** If `activecontext.md` is not updated at the end of a session, the work does not exist in the agentic timeline.
