import FadeUp from "@/components/ui/FadeUp"
import Link from 'next/link'
import { getBlogPosts } from '@/lib/mdx'

export const metadata = {
  title: "Blog | Adrian Oliver — Engineering Thought Leadership",
  description: "Technical deep dives on Next.js, Supabase, and e-commerce architecture.",
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <main className="min-h-screen py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <FadeUp>
          <div className="space-y-4 mb-24">
            <p className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest">
              Writing & Perspective
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-[var(--color-text-primary)] italic">
              Engineering <em>Thought</em>
            </h1>
            <p className="text-[var(--color-text-secondary)] text-xl font-light max-w-2xl leading-relaxed">
              Practical engineering decisions for retail and e-commerce — written for founders and builders.
            </p>
          </div>
        </FadeUp>

        <div className="space-y-12">
          {posts.length > 0 ? (
            posts.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.1}>
                <Link prefetch={true} href={`/blog/${post.slug}`} className="group block">
                  <article className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12 pb-12 border-b border-[var(--color-border)] transition-colors group-hover:border-[var(--color-accent)]/30">
                    <time className="font-mono text-[10px] text-[var(--color-text-secondary)] uppercase tracking-widest shrink-0 whitespace-nowrap">
                      {new Date(post.date).toLocaleDateString("en-US", { month: "long", year: "numeric", day: "numeric" })}
                    </time>
                    <div className="space-y-3">
                      <h2 className="font-serif text-2xl md:text-3xl text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-[var(--color-text-secondary)] text-base font-light leading-relaxed max-w-xl">
                        {post.description}
                      </p>
                    </div>
                  </article>
                </Link>
              </FadeUp>
            ))
          ) : (
            <p className="text-[var(--color-text-secondary)] font-mono text-sm uppercase tracking-widest mt-12">
               No architectural insights published yet.
            </p>
          )}

          <p className="font-mono text-sm mt-12"
            style={{ color: "var(--color-text-secondary)" }}>
            More articles on retail architecture, inventory systems,
            and e-commerce performance — coming soon.
          </p>
        </div>
      </div>
    </main>
  )
}
