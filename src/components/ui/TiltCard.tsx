'use client'
import { useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

interface TiltCardProps {
  children: React.ReactNode
  className?: string
}

export default function TiltCard({ children, className }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const el = ref.current
    if (!el) return
    VanillaTilt.init(el, {
      max: 8,
      speed: 400,
      glare: true,
      'max-glare': 0.08,
      perspective: 1000,
    })
    return () => {
      const vanillaEl = el as HTMLDivElement & { vanillaTilt?: { destroy: () => void } };
      if (vanillaEl && vanillaEl.vanillaTilt) {
        vanillaEl.vanillaTilt.destroy();
      }
    }
  }, [])
  
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
