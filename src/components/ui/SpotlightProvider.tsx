'use client'
import { useEffect } from 'react'

export default function SpotlightProvider() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.card-spotlight')
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect()
        const x = ((e.clientX - rect.left) / rect.width) * 100
        const y = ((e.clientY - rect.top) / rect.height) * 100
        ;(card as HTMLElement).style.setProperty('--mouse-x', `${x}%`)
        ;(card as HTMLElement).style.setProperty('--mouse-y', `${y}%`)
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])
  
  return null
}
