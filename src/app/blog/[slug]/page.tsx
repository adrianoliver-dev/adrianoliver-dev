import { notFound } from 'next/navigation'
import { getPostBySlug, getAllPosts } from '@/lib/blog'
import { MDXRemote } from 'next-mdx-remote/rsc'
import FadeUp from '@/components/ui/FadeUp'
import Link from 'next/link'
import type { Metadata } from 'next'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(post => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)
  if (!post) return {}

  return {
    title: `${post.title} | Adrian Oliver`,
    description: post.excerpt,
    alternates: {
      canonical: `https://adrianoliver.dev/blog/${post.slug}`,
    },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.excerpt,
      url: `https://adrianoliver.dev/blog/${post.slug}`,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: ['Adrian Oliver'],
      tags: post.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)

  if (!post) {
    notFound()
  }

  const blogPostingSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    author: {
      '@type': 'Person',
      name: 'Adrian Oliver',
      url: 'https://adrianoliver.dev',
    },
    publisher: {
      '@type': 'Person',
      name: 'Adrian Oliver',
      url: 'https://adrianoliver.dev',
    },
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    url: `https://adrianoliver.dev/blog/${post.slug}`,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://adrianoliver.dev/blog/${post.slug}`,
    },
    keywords: post.tags.join(', '),
    ...(post.coverImage && {
      image: {
        '@type': 'ImageObject',
        url: `https://adrianoliver.dev${post.coverImage}`,
        width: 1200,
        height: 630,
      },
    }),
  }

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://adrianoliver.dev' },
      { '@type': 'ListItem', position: 2, name: 'Blog', item: 'https://adrianoliver.dev/blog' },
      { '@type': 'ListItem', position: 3, name: post.title, item: `https://adrianoliver.dev/blog/${post.slug}` },
    ],
  }

  return (
    <article className="min-h-screen pt-32 pb-48 px-6 bg-[var(--color-background)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <Link 
            href="/blog" 
            className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] hover:underline mb-12 inline-block"
          >
            ← Back to blog
          </Link>
          
          <div className="space-y-6 mb-16">
            <div className="flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span 
                  key={tag} 
                  className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider border border-[var(--color-accent)]/30 text-[var(--color-accent)] rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[var(--color-text-primary)] leading-tight">
              {post.title}
            </h1>
            
            <div className="flex items-center gap-4 py-6 border-y border-[var(--color-border)]">
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[var(--color-text-secondary)] uppercase tracking-widest">Published</span>
                <time className="font-mono text-xs text-[var(--color-text-primary)]">
                  {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </time>
              </div>
              <div className="w-px h-8 bg-[var(--color-border)]" />
              <div className="flex flex-col">
                <span className="font-mono text-[10px] text-[var(--color-text-secondary)] uppercase tracking-widest">Reading Time</span>
                <span className="font-mono text-xs text-[var(--color-text-primary)]">
                  {post.readingTime} min read
                </span>
              </div>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="prose prose-invert prose-lg max-w-none 
            prose-headings:font-serif prose-headings:font-normal 
            prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline 
            prose-pre:bg-[var(--color-surface)] prose-pre:border prose-pre:border-[var(--color-border)] 
            prose-img:rounded-2xl prose-strong:text-[var(--color-text-primary)]
            prose-code:text-[var(--color-accent)] prose-code:bg-[var(--color-surface)] prose-code:px-1 prose-code:rounded prose-code:before:content-[''] prose-code:after:content-['']"
          >
            <MDXRemote source={post.content} />
          </div>
          
          <div className="mt-24 pt-12 border-t border-[var(--color-border)]">
            <Link 
              href="/blog" 
              className="group flex items-center gap-3 font-serif text-2xl text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors"
            >
              <span>Explore more articles</span>
              <span className="text-[var(--color-accent)] transition-transform group-hover:translate-x-2">→</span>
            </Link>
          </div>
        </FadeUp>
      </div>
    </article>
  )
}
