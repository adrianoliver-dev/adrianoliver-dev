import React from 'react'

interface BrandMarkProps {
  size?: number
  width?: number
  height?: number
  exportMode?: boolean
  className?: string
}

export default function BrandMark({ 
  size = 26, 
  width, 
  height, 
  exportMode = false,
  className
}: BrandMarkProps) {
  const w = width ?? size
  const h = height ?? size
  const minDim = Math.min(w, h)
  const isSmall = minDim <= 20

  // SVG-to-Canvas requires hex colors as it can't resolve CSS variables
  const colors = {
    background: exportMode ? '#0C0C0C' : 'var(--color-background)',
    border: exportMode ? '#1C1C1C' : 'var(--color-border)',
    amber: '#D97706'
  }

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 80 80"
      aria-label="Adrian Oliver"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Amber polygon (upper-right sector) */}
      <polygon points="40,8 72,40 51,61 19,29" fill={colors.amber} />

      {/* Dark polygon (lower-left sector) */}
      <polygon points="19,29 51,61 40,72 8,40" fill={colors.background} />

      {/* Diamond outline */}
      <polygon
        points="40,8 72,40 40,72 8,40"
        fill="none"
        stroke={colors.border}
        strokeWidth={isSmall ? 1.8 : 1.2}
      />

      {!isSmall && (
        <>
          {/* Detail line (apex accent — subtle) */}
          <line
            x1="37"
            y1="8"
            x2="43"
            y2="8"
            stroke={colors.amber}
            strokeWidth="1.2"
            opacity="0.35"
          />

          {/* Node 1 (split start — full amber) */}
          <circle cx="19" cy="29" r="3" fill={colors.amber} />

          {/* Node 2 (split end — amber 50% opacity) */}
          <circle cx="51" cy="61" r="3" fill={colors.amber} opacity="0.5" />
        </>
      )}
    </svg>
  )
}
