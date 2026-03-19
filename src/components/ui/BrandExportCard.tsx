'use client'

import React, { useRef } from 'react'
import BrandMark from './BrandMark'

interface BrandExportCardProps {
  label: string
  width: number
  height: number
  fileName: string
  description?: string
}

export default function BrandExportCard({
  label,
  width,
  height,
  fileName,
  description
}: BrandExportCardProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const handleDownload = () => {
    if (!containerRef.current) return

    const svgElement = containerRef.current.querySelector('svg')
    if (!svgElement) return

    // Clone the SVG to manipulate it for export
    const clonedSvg = svgElement.cloneNode(true) as SVGSVGElement
    clonedSvg.setAttribute('width', width.toString())
    clonedSvg.setAttribute('height', height.toString())

    // Serialize SVG to string
    const serializer = new XMLSerializer()
    let svgString = serializer.serializeToString(clonedSvg)

    // Ensure xmlns is present for cross-browser canvas rendering
    if (!svgString.includes('http://www.w3.org/2000/svg')) {
      svgString = svgString.replace('<svg', '<svg xmlns="http://www.w3.org/2000/svg"')
    }

    // Create Canvas
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Load SVG into Image
    const img = new Image()
    const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' })
    const url = URL.createObjectURL(svgBlob)

    img.onload = () => {
      // Draw to canvas
      ctx.clearRect(0, 0, width, height)
      ctx.drawImage(img, 0, 0, width, height)
      
      // Convert to PNG and download
      try {
        const pngUrl = canvas.toDataURL('image/png')
        const downloadLink = document.createElement('a')
        downloadLink.href = pngUrl
        downloadLink.download = fileName
        document.body.appendChild(downloadLink)
        downloadLink.click()
        document.body.removeChild(downloadLink)
      } catch (err) {
        console.error('Export failed:', err)
        alert('Export failed. Please try a modern browser.')
      } finally {
        URL.revokeObjectURL(url)
      }
    }

    img.onerror = () => {
      console.error('Image load failed')
      URL.revokeObjectURL(url)
    }

    img.src = url
  }

  return (
    <div className="flex flex-col gap-4 p-6 bg-[#141414] border border-[#1C1C1C] rounded-xl hover:border-[#D9770640] transition-colors duration-300">
      <div className="flex flex-col gap-1">
        <h3 className="text-[#F5F0E8] font-medium text-base">{label}</h3>
        <p className="text-[#78716C] text-xs font-mono uppercase tracking-wider">
          {width} × {height} PX — {fileName}
        </p>
        {description && (
          <p className="text-[#78716C] text-xs mt-1 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      <div 
        className="relative group bg-[#0C0C0C] border border-[#1C1C1C] rounded-lg overflow-hidden flex items-center justify-center p-8 min-h-[180px]"
      >
        <div ref={containerRef} className="w-full flex items-center justify-center">
          <BrandMark 
            width={width} 
            height={height} 
            exportMode={true} 
            // Scale rendering for preview while keeping original aspect ratio
            className="max-w-full max-h-full w-auto h-auto object-contain shadow-2xl"
          />
        </div>
      </div>

      <button
        onClick={handleDownload}
        className="w-full py-3 bg-[#D97706] hover:bg-[#F59E0B] text-[#0C0C0C] font-semibold text-sm rounded-lg transition-all transform active:scale-[0.98] shadow-lg shadow-[#D9770620]"
      >
        Download PNG
      </button>
    </div>
  )
}

// Add className to BrandMark interface if needed - updating BrandMark.tsx next to support it
interface BrandMarkProps {
  size?: number
  width?: number
  height?: number
  exportMode?: boolean
  className?: string
}
