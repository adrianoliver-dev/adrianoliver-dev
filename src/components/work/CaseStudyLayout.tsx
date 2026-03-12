'use client'

import { usePathname } from 'next/navigation'

interface CaseStudyLayoutProps {
  children: React.ReactNode
}

export default function CaseStudyLayout({ children }: CaseStudyLayoutProps) {
  const pathname = usePathname()
  const segments = pathname.split('/').filter(Boolean)
  
  const breadcrumbList = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: segments.map((segment, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' '),
      item: `https://adrianoliver.dev/${segments.slice(0, index + 1).join('/')}`,
    })),
  }

  return (
    <article className="py-24 px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbList) }}
      />
      <div className="mx-auto max-w-3xl">
        {children}
      </div>
    </article>
  )
}
