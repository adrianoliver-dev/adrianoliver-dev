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

export const metadata: Metadata = {
  metadataBase: new URL('https://adrianoliver.dev'),
  title: {
    default: 'Adrian Oliver — Full-Stack Developer',
    template: '%s | Adrian Oliver',
  },
  description:
    'Full-stack developer specializing in Next.js 15, TypeScript, and Supabase. ' +
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
    'Next.js 15',
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
      'Next.js 15 · TypeScript · Supabase. Remote, async-first.',
    images: [
      {
        url: '/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Adrian Oliver — Full-Stack Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adrian Oliver — Full-Stack Developer',
    description:
      'Production-ready e-commerce and business web apps. ' +
      'Next.js 15 · TypeScript · Supabase.',
    images: ['/opengraph-image'],
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
          <Navbar />
          <main>
            <PageTransition>
              {children}
            </PageTransition>
          </main>
          <Footer />
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
                jobTitle: 'Full-Stack Developer',
                description:
                  'Full-stack developer specializing in Next.js 15, TypeScript, and Supabase. Building production-ready e-commerce and business web applications.',
                knowsAbout: [
                  'Next.js',
                  'TypeScript',
                  'Supabase',
                  'PostgreSQL',
                  'React',
                  'Tailwind CSS',
                  'E-commerce Development',
                  'Full-Stack Web Development',
                ],
                sameAs: ['https://github.com/adrianoliver-dev'],
              },
              {
                '@context': 'https://schema.org',
                '@type': 'ProfessionalService',
                name: 'Adrian Oliver — Dev & Freelance',
                image: 'https://adrianoliver.dev/opengraph-image',
                '@id': 'https://adrianoliver.dev',
                url: 'https://adrianoliver.dev',
                telephone: '',
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
                  ],
                  opens: '09:00',
                  closes: '18:00',
                },
                priceRange: '$$$',
                offers: {
                  '@type': 'Offer',
                  itemOffered: {
                    '@type': 'Service',
                    name: 'Full-Stack Web Development',
                    description: 'E-commerce platforms and business web applications.',
                  },
                  areaServed: ['US', 'EU'],
                },
              },
            ]),
          }}
        />
      </body>
    </html>
  )
}
