import FadeUp from "@/components/ui/FadeUp"
import Link from 'next/link'
import Image from 'next/image'
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
          <div className="space-y-4 mb-24 text-center">
            <p className="font-mono text-[10px] text-[var(--color-accent)] uppercase tracking-[0.2em]">
              Writing & Perspective
            </p>
            <h1 className="font-serif text-5xl md:text-7xl text-[var(--color-text-primary)] leading-tight italic">
              Engineering <span className="not-italic">Thought</span>
            </h1>
            <p className="text-[var(--color-text-secondary)] text-xl font-light max-w-2xl mx-auto leading-relaxed">
              Practical architecture decisions for retail and e-commerce — written for founders who value speed and scale.
            </p>
          </div>
        </FadeUp>

        <div className="space-y-24">
          {posts.length > 0 ? (
            posts.map((post, i) => (
              <FadeUp key={post.slug} delay={i * 0.1}>
                <Link prefetch={true} href={`/blog/${post.slug}`} className="group block max-w-2xl mx-auto">
                  <article className="space-y-8">
                    {/* Visual Area: Image or Fallback */}
                    {post.coverImage ? (
                      <div className="relative w-full rounded-xl overflow-hidden border border-[var(--color-border)] group" style={{ aspectRatio: '16/9' }}>
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, 672px"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)] via-transparent to-transparent opacity-40" />
                      </div>
                    ) : (
                      <div className="w-full rounded-xl flex items-center justify-center border border-[var(--color-border)] transition-colors group-hover:border-[var(--color-accent)]/30" style={{ aspectRatio: '16/9', background: 'var(--color-surface)' }}>
                        <div className="w-12 h-px transition-all duration-300 group-hover:w-20" style={{ background: 'var(--color-accent)' }} />
                      </div>
                    )}

                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-[var(--color-text-secondary)]">
                        <time className="font-mono text-[10px] uppercase tracking-widest">
                          {new Date(post.date).toLocaleDateString("en-US", { 
                            month: "long", 
                            day: "numeric",
                            year: "numeric" 
                          })}
                        </time>
                        <span className="w-1 h-1 rounded-full bg-[var(--color-border)]" />
                        <span className="font-mono text-[10px] uppercase tracking-widest">
                          {post.readingTime} min read
                        </span>
                      </div>

                      <h2 className="font-serif text-3xl md:text-5xl text-[var(--color-text-primary)] group-hover:text-[var(--color-accent)] transition-colors duration-300 leading-tight">
                        {post.title}
                      </h2>
                      
                      <p className="text-[var(--color-text-secondary)] text-lg font-light leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center gap-3 text-[var(--color-accent)] font-mono text-xs uppercase tracking-[0.2em] pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span>Read article</span>
                        <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeUp>
            ))
          ) : (
            <div className="text-center py-20 border border-dashed border-[var(--color-border)] rounded-xl max-w-2xl mx-auto">
              <p className="text-[var(--color-text-secondary)] font-mono text-sm uppercase tracking-widest">
                 No architectural insights published yet.
              </p>
            </div>
          )}

          <div className="mt-12 p-12 border border-dashed border-[var(--color-border)] rounded-xl max-w-2xl mx-auto text-center opacity-50">
            <p className="font-mono text-xs text-[var(--color-text-secondary)] uppercase tracking-[0.3em] mb-4">
              Coming Soon
            </p>
            <p className="text-[var(--color-text-secondary)] text-sm font-light leading-relaxed">
              Technical deep dives on retail scaling, 
              headless e-commerce, and precision inventory.
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}
