'use client'

import dynamic from 'next/dynamic'
import SpotlightProvider from "@/components/ui/SpotlightProvider"

const SmoothScrollProvider = dynamic(
  () => import('./SmoothScrollProvider'),
  { ssr: false }
)

export default function ClientSideProviders({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SpotlightProvider />
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </>
  )
}
