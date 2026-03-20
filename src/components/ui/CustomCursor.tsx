'use client'
import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const pos = useRef({ x: 0, y: 0 })
  const target = useRef({ x: 0, y: 0 })

  useEffect(() => {
    // Hide only on devices that strictly do not support hover (touch-only)
    const canHover = window.matchMedia('(hover: hover)').matches
    if (!canHover) return

    const cursor = cursorRef.current
    if (!cursor) return

    let hasMovedOnce = false
    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY }
      if (!hasMovedOnce) {
        hasMovedOnce = true
        if (cursor) cursor.style.opacity = '1'
      }
    }

    const onEnterInteractive = () => cursor.classList.add('cursor-expand')
    const onLeaveInteractive = () => cursor.classList.remove('cursor-expand')

    document.addEventListener('mousemove', onMove)
    document.documentElement.classList.add('custom-cursor-active')

    // Add expand class on interactive elements
    const updateInteractives = () => {
      const interactives = document.querySelectorAll(
        'a, button, [data-cursor-expand], .interactive'
      )
      interactives.forEach(el => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
        el.addEventListener('mouseenter', onEnterInteractive)
        el.addEventListener('mouseleave', onLeaveInteractive)
      })
    }

    updateInteractives()
    
    // Periodically check for new interactive elements (e.g. after page transitions)
    const observer = new MutationObserver(updateInteractives)
    observer.observe(document.body, { childList: true, subtree: true })

    let raf: number
    const animate = () => {
      const lerp = 0.12
      pos.current.x += (target.current.x - pos.current.x) * lerp
      pos.current.y += (target.current.y - pos.current.y) * lerp
      if (cursor) {
        cursor.style.transform =
          `translate(${pos.current.x - 16}px, ${pos.current.y - 16}px)`
      }
      raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.documentElement.classList.remove('custom-cursor-active')
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      id="custom-cursor"
      className="cursor-dot"
      style={{ willChange: 'transform', opacity: 0, pointerEvents: 'none' }}
      aria-hidden="true"
    />
  )
}
