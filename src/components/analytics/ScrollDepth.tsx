'use client'
import { useEffect, useRef } from 'react'
import { trackEvent } from '@/lib/analytics'

const THRESHOLDS = [25, 50, 75, 100] as const

export default function ScrollDepth(): null {
  const fired = useRef(new Set<number>())

  useEffect(() => {
    function onScroll() {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      const percent = Math.round((scrolled / total) * 100)

      for (const threshold of THRESHOLDS) {
        if (percent >= threshold && !fired.current.has(threshold)) {
          fired.current.add(threshold)
          trackEvent({ action: 'scroll_depth', percent: threshold })
        }
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return null
}
