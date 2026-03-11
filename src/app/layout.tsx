import type { Metadata } from "next"
import { dmSans, instrumentSerif, jetbrainsMono } from "@/lib/fonts"
import "./globals.css"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://adrianoliver.dev"),
  title: {
    default: "Adrian Oliver — Full-Stack Developer",
    template: "%s | Adrian Oliver",
  },
  description:
    "Full-stack developer specializing in high-performance e-commerce and business systems. Built in Bolivia, working with US/EU clients.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://adrianoliver.dev",
    siteName: "Adrian Oliver",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
