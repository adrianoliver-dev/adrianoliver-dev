import { notFound } from 'next/navigation';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import FadeUp from '@/components/ui/FadeUp';
import Link from 'next/link';

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);
  if (!post) return { title: 'Not Found' };
  
  return {
    title: `${post.title} | Adrian Oliver Blog`,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getBlogPostBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="min-h-screen pt-32 pb-48 px-6 lg:px-12 bg-[var(--color-background)]">
      <div className="max-w-3xl mx-auto">
        <FadeUp>
          <Link href="/blog" className="font-mono text-xs uppercase tracking-widest text-[var(--color-accent)] hover:underline mb-12 block">
            ← Back to Engineering Thought
          </Link>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-instrument-serif text-[var(--color-text-primary)] mb-6 leading-tight">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 mb-16 border-b border-[var(--color-border)] pb-8">
            <time className="font-mono text-sm uppercase tracking-widest text-[var(--color-text-secondary)]">
              {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </time>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="prose prose-invert prose-lg max-w-none prose-headings:font-instrument-serif prose-headings:font-normal prose-a:text-[var(--color-accent)] prose-a:no-underline hover:prose-a:underline prose-pre:bg-[var(--color-surface)] prose-pre:border prose-pre:border-[var(--color-border)] prose-img:rounded-2xl">
            <MDXRemote source={post.content} />
          </div>
        </FadeUp>
      </div>
    </article>
  );
}
