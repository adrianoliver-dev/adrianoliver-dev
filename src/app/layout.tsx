import type { Metadata } from "next"
import { dmSans, instrumentSerif, jetbrainsMono } from "@/lib/fonts"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import SpotlightProvider from "@/components/ui/SpotlightProvider"
import PageTransition from "@/components/layout/PageTransition"
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
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
  alternates: {
    canonical: 'https://adrianoliver.dev',
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
        <SpotlightProvider />
        <Navbar />
        <main>
          <PageTransition>
            {children}
          </PageTransition>
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Adrian Oliver',
              url: 'https://adrianoliver.dev',
              jobTitle: 'Full-Stack Developer',
              description:
                'Full-stack developer specializing in Next.js 15, TypeScript, and Supabase. ' +
                'Building production-ready e-commerce and business web applications.',
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
              sameAs: [
                'https://github.com/adrianoliver-dev',
              ],
              offers: {
                '@type': 'Offer',
                description:
                  'Full-stack web development services: e-commerce platforms, ' +
                  'business web applications, and technical consulting.',
                areaServed: ['US', 'EU'],
                availableLanguage: 'English',
              },
            }),
          }}
        />
      </body>
    </html>
  )
}
