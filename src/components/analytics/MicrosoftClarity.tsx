'use client'
import { useEffect } from 'react'

const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID

export default function MicrosoftClarity() {
  useEffect(() => {
    if (!CLARITY_ID) return
    // Dynamic import to prevent clarity-js accessing window during SSR
    import('clarity-js').then(({ clarity }) => {
      clarity.start({ projectId: CLARITY_ID })
    })
  }, [])

  return null
}
