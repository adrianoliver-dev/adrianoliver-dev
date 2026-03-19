import React from 'react'

interface BrandMarkProps {
  size?: number
}

export default function BrandMark({ size = 26 }: BrandMarkProps) {
  const isSmall = size <= 20

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 80 80"
      aria-label="Adrian Oliver"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Amber polygon (upper-right sector) */}
      <polygon points="40,8 72,40 51,61 19,29" fill="#D97706" />

      {/* Dark polygon (lower-left sector) */}
      <polygon points="19,29 51,61 40,72 8,40" fill="var(--color-background)" />

      {/* Diamond outline */}
      <polygon
        points="40,8 72,40 40,72 8,40"
        fill="none"
        stroke="var(--color-border)"
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
            stroke="#D97706"
            strokeWidth="1.2"
            opacity="0.35"
          />

          {/* Node 1 (split start — full amber) */}
          <circle cx="19" cy="29" r="3" fill="#D97706" />

          {/* Node 2 (split end — amber 50% opacity) */}
          <circle cx="51" cy="61" r="3" fill="#D97706" opacity="0.5" />
        </>
      )}
    </svg>
  )
}
