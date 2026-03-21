import type { Metadata } from "next"
import { dmSans, instrumentSerif, jetbrainsMono } from "@/lib/fonts"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import PageTransition from "@/components/layout/PageTransition"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import MicrosoftClarity from '@/components/analytics/MicrosoftClarity'
import ClientSideProviders from '@/components/providers/ClientSideProviders'
import CustomCursor from "@/components/ui/CustomCursor"
import { Suspense } from "react"
import ChatWidget from "@/components/chat/ChatWidget"

export const metadata: Metadata = {
  metadataBase: new URL('https://adrianoliver.dev'),
  title: {
    default: 'Adrian Oliver — Full-Stack Developer',
    template: '%s | Adrian Oliver',
  },
  description:
    'Full-stack developer specializing in Next.js, TypeScript, and Supabase. ' +
    'I build production-ready e-commerce platforms and business web applications ' +
    'for US and EU clients. Remote, async-first.',
  keywords: [
    'Next.js developer',
    'full-stack developer',
    'TypeScript developer',
    'Supabase developer',
    'e-commerce developer',
    'remote developer',
    'freelance web developer',
    'Next.js',
  ],
  authors: [{ name: 'Adrian Oliver', url: 'https://adrianoliver.dev' }],
  creator: 'Adrian Oliver',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://adrianoliver.dev',
    siteName: 'Adrian Oliver',
    title: 'Adrian Oliver — Full-Stack Developer',
    description:
      'Production-ready e-commerce and business web apps. ' +
      'Next.js · TypeScript · Supabase. Remote, async-first.',
    images: [
      {
        url: 'https://adrianoliver.dev/icon.png',
        width: 400,
        height: 400,
        alt: 'Adrian Oliver',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrian Oliver — Full-Stack Developer',
    description:
      'Production-ready e-commerce and business web apps. ' +
      'Next.js · TypeScript · Supabase.',
    images: ['/icon.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon.png', type: 'image/png', sizes: '400x400' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: [
      { url: '/apple-icon.png', type: 'image/png', sizes: '400x400' },
    ],
    shortcut: '/icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${instrumentSerif.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <ClientSideProviders>
          <Suspense fallback={null}>
            <CustomCursor />
          </Suspense>
          <Navbar />
          <main>
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
          <Suspense fallback={null}>
            <ChatWidget />
          </Suspense>
        </ClientSideProviders>
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
        <MicrosoftClarity />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                '@context': 'https://schema.org',
                '@type': 'Person',
                name: 'Adrian Oliver',
                url: 'https://adrianoliver.dev',
                email: 'hello@adrianoliver.dev',
                jobTitle: 'E-Commerce & Inventory Systems Developer',
                description: 'Full-stack developer building e-commerce platforms and inventory management systems for apparel and retail brands. Available for US and EU remote projects.',
                sameAs: [
                  'https://github.com/adrianoliver-dev',
                  'https://www.linkedin.com/in/adrianoliver-dev',
                  'https://x.com/adrianoliver_',
                  'https://www.upwork.com/freelancers/~0144ace41cb9797f02',
                  'https://adrianoliver.dev',
                ],
                knowsAbout: [
                  'Next.js',
                  'TypeScript',
                  'Supabase',
                  'PostgreSQL',
                  'E-Commerce Development',
                  'Inventory Management Systems',
                  'React',
                  'Tailwind CSS',
                ],
                worksFor: {
                  '@type': 'Organization',
                  name: 'Freelance',
                },
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Santa Cruz de la Sierra',
                  addressCountry: 'BO',
                },
              },
              {
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                name: 'Adrian Oliver — E-Commerce & Inventory Systems',
                url: 'https://adrianoliver.dev',
                description: 'Custom e-commerce platforms and inventory management systems for apparel and retail brands. Built on Next.js and Supabase.',
                image: 'https://adrianoliver.dev/icon.png',
                email: 'hello@adrianoliver.dev',
                founder: {
                  '@type': 'Person',
                  name: 'Adrian Oliver',
                },
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Santa Cruz de la Sierra',
                  addressCountry: 'BO',
                },
                geo: {
                  '@type': 'GeoCoordinates',
                  latitude: -17.7833,
                  longitude: -63.1821,
                },
                openingHoursSpecification: {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday',
                  ],
                  opens: '09:00',
                  closes: '18:00',
                },
                priceRange: '$$$',
                areaServed: ['US', 'EU', 'Worldwide'],
                serviceType: [
                  'E-Commerce Development',
                  'Inventory System Architecture',
                  'POS System Development',
                  'Technical Consulting',
                ],
                hasOfferCatalog: {
                  '@type': 'OfferCatalog',
                  name: 'Development Services',
                  itemListElement: [
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Custom E-Commerce Platform',
                        description: 'Full-stack storefront with real-time inventory, multiple checkout methods, and automated notifications.',
                      },
                    },
                    {
                      '@type': 'Offer',
                      itemOffered: {
                        '@type': 'Service',
                        name: 'Inventory Management System',
                        description: 'Custom ERP and POS for multi-location retail with RBAC, audit trail, and financial reporting.',
                      },
                    },
                  ],
                },
              },
            ]),
          }}
        />
      </body>
    </html>
  )
}
