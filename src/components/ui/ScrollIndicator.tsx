'use client'
import { useEffect, useState } from 'react'

export default function ScrollIndicator() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)

  const hide = () => {
    setFading(true)
    setTimeout(() => setVisible(false), 700)
  }

  useEffect(() => {
    const timer = setTimeout(hide, 4000)
    const onScroll = () => { if (window.scrollY > 100) hide() }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  if (!visible) return null

  return (
    <div
      className="flex flex-col items-center gap-2 mt-16 transition-opacity
        duration-700"
      style={{ opacity: fading ? 0 : 1 }}
      aria-hidden="true"
    >
      <span className="font-mono text-[10px] uppercase tracking-widest text-[#78716C]">
        scroll
      </span>
      <div className="w-px h-8 relative overflow-hidden bg-[#1C1C1C]">
        <div className="absolute top-0 left-0 w-full h-1/2 scroll-line bg-accent" />
      </div>
    </div>
  )
}
