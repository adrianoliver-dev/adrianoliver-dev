---
trigger: model_decision
---

# Skill: MDX Blog Patterns — adrianoliver.dev

## When to Use This Skill

Only activate for Block B10 (Blog Setup) and any subsequent blog-related work.
Do not apply MDX patterns to non-blog sections of the portfolio.

## Stack

- `next-mdx-remote` v5+ with `compileMDX` function (not legacy `serialize`).
- `gray-matter` for frontmatter parsing.
- Blog posts stored as `.mdx` files in `content/blog/`.

## Frontmatter Schema

Every `.mdx` file must have this frontmatter:

```yaml
***
title: "Post Title Here"
description: "One sentence description for SEO."
date: "2026-03-11"
tags: ["Next.js", "freelance", "portfolio"]
published: true
***
File Naming Convention
content/blog/[year]-[mm]-[dd]-[kebab-case-title].mdx

Example: content/blog/2026-03-11-how-i-built-a-pos-in-30-days.mdx

The slug is derived from the filename, not the frontmatter.

lib/mdx.ts Pattern
typescript
import fs from "fs"
import path from "path"
import matter from "gray-matter"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export interface PostMeta {
  slug: string
  title: string
  description: string
  date: string
  tags: string[]
  published: boolean
}

export function getAllPostsMeta(): PostMeta[] {
  const files = fs.readdirSync(BLOG_DIR).filter(f => f.endsWith(".mdx"))
  return files
    .map(filename => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8")
      const { data } = matter(raw)
      return {
        slug: filename.replace(".mdx", ""),
        ...(data as Omit<PostMeta, "slug">)
      }
    })
    .filter(p => p.published)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}
compileMDX Pattern (for individual post page)
typescript
// app/blog/[slug]/page.tsx
import { compileMDX } from "next-mdx-remote/rsc"
import fs from "fs"
import path from "path"

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const raw = fs.readFileSync(
    path.join(process.cwd(), "content/blog", `${params.slug}.mdx`),
    "utf-8"
  )
  const { content, frontmatter } = await compileMDX<{ title: string; description: string }>({
    source: raw,
    options: { parseFrontmatter: true }
  })
  return (
    <article>
      <h1>{frontmatter.title}</h1>
      {content}
    </article>
  )
}
MDX Custom Components
Define custom renderers in lib/mdx-components.tsx for:

Code blocks (syntax highlighted)

Callout/Note boxes

Image captions

Pass them via the components prop in compileMDX.

