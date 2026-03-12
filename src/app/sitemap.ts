import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://adrianoliver.dev'
  const now = new Date()

  // In the future, fetch blog slugs from filesystem or CMS here
  const blogPosts: string[] = [] 
  
  const blogRoutes = blogPosts.map((slug) => ({
    url: `${base}/blog/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const staticRoutes = [
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
      url: `${base}/contact`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
  ]

  return [...staticRoutes, ...blogRoutes]
}
