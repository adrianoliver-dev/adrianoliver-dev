import type { MetadataRoute } from 'next'
import { getAllPosts } from '@/lib/blog'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://adrianoliver.dev'
  const now = new Date()

  const posts = getAllPosts()
  
  const blogRoutes = posts.map((post) => ({
    url: `${base}/blog/${post.slug}`,
    lastModified: new Date(post.updated ?? post.date),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${base}/projects/lukess-home`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${base}/projects/lukess-inventory-system`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${base}/projects/solnr-studio`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${base}/blog`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  return [...staticRoutes, ...blogRoutes]
}
