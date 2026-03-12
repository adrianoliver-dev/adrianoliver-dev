'use client'
import { useEffect, useRef, type ReactNode } from 'react'
import { trackEvent } from '@/lib/analytics'

interface SectionTrackerProps {
  name: string
  children: ReactNode
  threshold?: number
}

export default function SectionTracker({
  name,
  children,
  threshold = 0.3,
}: SectionTrackerProps) {
  const ref = useRef<HTMLDivElement>(null)
  const tracked = useRef(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !tracked.current) {
          tracked.current = true
          trackEvent({ action: 'section_viewed', section_name: name })
          observer.disconnect()
        }
      },
      { threshold }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [name, threshold])

  return <div ref={ref}>{children}</div>
}
