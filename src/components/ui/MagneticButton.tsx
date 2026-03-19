'use client'
import { useRef, MouseEvent } from 'react'

export default function MagneticButton({
  children,
  className,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: React.ReactNode
}) {
  const ref = useRef<HTMLAnchorElement>(null)

  function handleMouseMove(e: MouseEvent<HTMLAnchorElement>) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`
  }

  function handleMouseLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0px, 0px)'
    el.style.transition = 'transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  }

  function handleMouseEnter() {
    const el = ref.current
    if (!el) return
    el.style.transition = 'transform 0.15s cubic-bezier(0.215, 0.61, 0.355, 1)'
  }

  return (
    <a
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      {...props}
    >
      {children}
    </a>
  )
}
