import React from 'react'
import BrandExportCard from '@/components/ui/BrandExportCard'

export const metadata = {
  title: 'Brand Assets | Adrian Oliver',
  description: 'Download the Adrian Oliver geometric brand mark in standard PNG sizes.',
  robots: { index: false } // Internal utility page
}

export default function BrandPage() {
  return (
    <div className="min-h-screen bg-[#0C0C0C] pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-[#F5F0E8] mb-4">
            Brand Assets
          </h1>
          <p className="text-[#78716C] max-w-xl text-lg">
            Geometric brand mark exports at standard sizes. Each asset is converted 
            browser-side from SVG to high-quality PNG.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <BrandExportCard
            label="Profile Picture (Small)"
            width={400}
            height={400}
            fileName="brand-mark-400.png"
            description="Ideal for social media profiles (LinkedIn, X, GitHub)."
          />
          <BrandExportCard
            label="Profile Picture (Large)"
            width={800}
            height={800}
            fileName="brand-mark-800.png"
            description="High-resolution version for retina displays or banners."
          />
          <BrandExportCard
            label="OG Image / Banner"
            width={1200}
            height={630}
            fileName="brand-mark-1200x630.png"
            description="Standard aspect ratio for Open Graph images and website headers."
          />
          <BrandExportCard
            label="Favicon Preview"
            width={32}
            height={32}
            fileName="brand-mark-32.png"
            description="Simplified version for small sizes (no detail nodes)."
          />
        </div>

        <footer className="mt-16 pt-8 border-t border-[#1C1C1C]">
          <p className="text-[#78716C] text-sm font-mono">
            Generated on demand &bull; No compression applied &bull; sRGB color space
          </p>
        </footer>
      </div>
    </div>
  )
}
