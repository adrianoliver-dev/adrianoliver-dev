'use client'
import { useEffect } from 'react'

/**
 * Tiny client utility to force scroll to top on mount.
 * Used in App Router pages to resolve scroll position conflicts with Lenis.
 */
export default function ScrollToTop() {
  useEffect(() => { 
    // Small delay to ensure Lenis is initialized before scrolling
    const timer = setTimeout(() => {
      // Try Lenis first (stored on window by SmoothScrollProvider)
      const lenis = window.__lenis
      if (lenis) {
        lenis.scrollTo(0, { immediate: true })
      } else {
        // Fallback to native scroll
        window.scrollTo({ top: 0, behavior: 'instant' })
      }
    }, 50)
    
    return () => clearTimeout(timer)
  }, [])
  
  return null
}
