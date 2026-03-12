import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://adrianoliver.dev'
  const now = new Date()

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${base}/work/lukess-home`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${base}/work/lukess-inventory`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ]
}
