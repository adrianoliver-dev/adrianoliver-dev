import FadeUp from "@/components/ui/FadeUp"
import Link from 'next/link'
import { getAllPosts } from '@/lib/blog'

export const metadata = {
  title: "Blog | Adrian Oliver — Engineering Thought Leadership",
  description: "Technical deep dives on Next.js, Supabase, and e-commerce architecture for retail founders.",
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen py-32 px-6">
      <div className="mx-auto max-w-4xl">
        <FadeUp>
          <div className="space-y-4 mb-24">
            <p className="font-mono text-[10px] text-[var(--color-accent)] uppercase tracking-[0.2em]">
              Writing & Perspective
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-[var(--color-text-primary)] leading-tight">
              Engineering <span className="italic">Thought</span>
            </h1>
            <p className="text-[var(--color-text-secondary)] text-xl font-light max-w-2xl leading-relaxed">
              Practical architecture decisions for retail and e-commerce — written for founders who value speed and scale.
            </p>
          </div>
        </FadeUp>

        <div className="space-y-16">
          {posts.length > 0 ? (
            posts.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.1}>
                <Link prefetch={true} href={`/blog/${post.slug}`} className="group block">
                  <article className="relative grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-8 pb-16 border-b border-[var(--color-border)] transition-colors group-hover:border-[var(--color-accent)]/20">
                    <div className="space-y-4">
                      <time className="font-mono text-[10px] text-[var(--color-text-secondary)] uppercase tracking-wider block">
                        {new Date(post.date).toLocaleDateString("en-US", { 
                          month: "long", 
                          day: "numeric",
                          year: "numeric" 
                        })}
                      </time>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                          <span 
                            key={tag} 
                            className="px-2 py-0.5 text-[9px] font-mono uppercase tracking-wider border border-[var(--color-border)] text-[var(--color-text-secondary)] rounded group-hover:border-[var(--color-accent)]/30 group-hover:text-[var(--color-accent)] transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="font-mono text-[9px] text-[var(--color-text-secondary)] uppercase block">
                        {post.readingTime} min read
                      </span>
                    </div>

                    <div className="space-y-4">
                      <h2 className="font-serif text-3xl md:text-4xl text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                        {post.title}
                      </h2>
                      <p className="text-[var(--color-text-secondary)] text-lg font-light leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-2 text-[var(--color-accent)] font-mono text-xs uppercase tracking-widest pt-4">
                        <span>Read article</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                      </div>
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

          <div className="mt-12 p-8 border border-dashed border-[var(--color-border)] rounded-sm">
            <p className="font-mono text-sm text-[var(--color-text-secondary)] leading-relaxed">
              More technical deep dives on retail architecture, 
              headless e-commerce, and inventory precision — coming soon.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
