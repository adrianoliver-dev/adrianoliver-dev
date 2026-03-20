'use client'
import { useEffect } from 'react'

/**
 * Tiny client utility to force scroll to top on mount.
 * Used in App Router pages to resolve scroll position conflicts with Lenis.
 */
export default function ScrollToTop() {
  useEffect(() => { 
    window.scrollTo(0, 0) 
  }, [])
  
  return null
}
