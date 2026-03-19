'use client'

import dynamic from 'next/dynamic'
import { LazyMotion, domAnimation } from 'framer-motion'
import SpotlightProvider from "@/components/ui/SpotlightProvider"

const SmoothScrollProvider = dynamic(
  () => import('./SmoothScrollProvider'),
  { ssr: false }
)

export default function ClientSideProviders({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <SpotlightProvider />
      <SmoothScrollProvider>
        {children}
      </SmoothScrollProvider>
    </LazyMotion>
  )
}
