'use client'
import { useRef } from 'react'
import { useInView, m } from 'framer-motion'

export default function FadeUp({ 
  children, 
  delay = 0,
  className 
}: { 
  children: React.ReactNode
  delay?: number
  className?: string 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })
  
  return (
    <m.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={className}
    >
      {children}
    </m.div>
  )
}
