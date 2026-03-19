"use client"
import { useEffect, useRef } from "react"
import { m } from "framer-motion"
import MagneticButton from "@/components/ui/MagneticButton"

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%"
const ORIGINAL = "Adrian Oliver"

export default function HeroAnimations() {
  const nameRef = useRef<HTMLSpanElement>(null)

  // Glitch effect
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReduced || !nameRef.current) return

    let iteration = 0
    let interval: NodeJS.Timeout

    const startGlitch = () => {
      clearInterval(interval)
      
      interval = setInterval(() => {
        if (!nameRef.current) return

        nameRef.current.innerText = ORIGINAL.split("")
          .map((letter, index) => {
            if (index < iteration) {
              return ORIGINAL[index]
            }
            return CHARSET[Math.floor(Math.random() * CHARSET.length)]
          })
          .join("")

        iteration += 0.65

        if (iteration >= ORIGINAL.length) {
          clearInterval(interval)
          if (nameRef.current) {
            nameRef.current.innerText = ORIGINAL
          }
        }
      }, 40)
    }

    startGlitch()

    return () => clearInterval(interval)
  }, [])

  return (
    <>
      {/* Static amber ambient — hero only */}
      <div
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '800px',
          height: '500px',
          background:
            'radial-gradient(ellipse at 50% 0%, rgba(217,119,6,0.13) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <m.div
        className="absolute left-0 select-none pointer-events-none overflow-hidden"
        style={{ top: '40%', zIndex: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 1.2 }}
      >
        <span
          className="font-serif text-[20vw] leading-none text-text-primary select-none"
          style={{ opacity: 0.025 }}
        >
          Engineer
        </span>
      </m.div>
      
      {/* h1 with glitch */}
      <m.h1 
        className="font-serif text-[clamp(5rem,11vw,9.5rem)] leading-[0.9] tracking-tight text-text-primary mt-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        aria-label="Adrian Oliver"
      >
        <span ref={nameRef} aria-hidden="true" className="hover:drop-shadow-[0_0_20px_#D9770660] transition-all duration-300 inline-block">{ORIGINAL}</span>
      </m.h1>
      
      {/* subtitle */}
      <m.p 
        className="mt-6 text-xl md:text-2xl leading-tight relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
      >
        <span className="font-serif text-text-secondary block">I build e-commerce and inventory systems</span>
        <span className="font-serif italic text-accent block mt-1">for apparel and retail brands — fast, clean, production-ready.</span>
      </m.p>
      
      {/* bio */}
      <m.p 
        className="font-mono text-text-secondary text-xs mt-4 relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
      >
        Next.js 15 · TypeScript · Supabase · Tailwind v4 — Available for US/EU remote projects · GMT-4
      </m.p>
      
      {/* CTAs */}
      <m.div 
        className="mt-8 gap-4 flex flex-wrap relative z-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
      >
        <MagneticButton
          href="#projects"
          className="bg-accent text-black px-6 py-3 text-sm font-medium hover:bg-amber-500 transition-all duration-300 shadow-[0_0_40px_#D9770630] hover:shadow-[0_0_60px_#D9770650]"
        >
          View My Work
        </MagneticButton>
        <MagneticButton
          href="#contact"
          className="border border-border text-text-primary px-6 py-3 text-sm hover:border-accent hover:text-accent transition-colors duration-200"
        >
          Get In Touch
        </MagneticButton>
      </m.div>
    </>
  )
}
