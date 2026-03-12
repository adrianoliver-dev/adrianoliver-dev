"use client"
import { useEffect, useRef } from "react"
import { LazyMotion, domAnimation, m } from "framer-motion"
import Link from "next/link"

const CHARSET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%"
const ORIGINAL = "Adrian Oliver"

export default function HeroAnimations() {
  const nameRef = useRef<HTMLSpanElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

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

        // 800ms total at 40ms interval means 20 frames total. 
        // 13 characters / 20 = 0.65 chars per frame
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

  // Cursor glow
  useEffect(() => {
    if (window.innerWidth < 768) return
    const glow = glowRef.current
    if (!glow) return
    
    // Initial state out of bounds
    glow.style.transform = `translate(-50%, -50%)`
    glow.style.left = `-100vw`
    glow.style.top = `-100vh`

    const handleMove = (e: MouseEvent) => {
      glow.style.left = `${e.clientX}px`
      glow.style.top = `${e.clientY}px`
    }
    window.addEventListener("mousemove", handleMove)
    return () => window.removeEventListener("mousemove", handleMove)
  }, [])

  return (
    <LazyMotion features={domAnimation}>
      {/* cursor glow div */}
      <div 
        ref={glowRef} 
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9997,
          width: '400px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(217,119,6,0.08) 0%, transparent 70%)',
          transition: 'transform 0.1s ease-out'
        }}
      />
      
      {/* h1 with glitch */}
      <m.h1 
        className="font-serif text-[clamp(4rem,8vw,7rem)] leading-none text-text-primary mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, ease: "easeOut" }}
        aria-label="Adrian Oliver"
      >
        <span ref={nameRef} aria-hidden="true" className="hover:drop-shadow-[0_0_20px_#D9770660] transition-all duration-300 inline-block">{ORIGINAL}</span>
      </m.h1>
      
      {/* subtitle */}
      <m.p 
        className="mt-6 text-xl md:text-2xl leading-tight"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.5, ease: "easeOut" }}
      >
        <span className="font-serif text-text-secondary block">I build e-commerce and business web apps</span>
        <span className="font-serif italic text-accent block mt-1">for growing companies — fast, clean, production-ready.</span>
      </m.p>
      
      {/* bio */}
      <m.p 
        className="font-mono text-text-secondary text-xs mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.5, ease: "easeOut" }}
      >
        Next.js 15 · TypeScript · Supabase · Tailwind v4 — Working globally with US/EU teams.
      </m.p>
      
      {/* CTAs */}
      <m.div 
        className="mt-8 gap-4 flex flex-wrap"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
      >
        <Link 
          href="/#projects"
          className="bg-accent text-black px-6 py-3 text-sm font-medium hover:bg-amber-500 transition-all duration-300 shadow-[0_0_40px_#D9770630] hover:shadow-[0_0_60px_#D9770650]"
        >
          View My Work
        </Link>
        <Link 
          href="/contact"
          className="border border-border text-text-primary px-6 py-3 text-sm hover:border-accent hover:text-accent transition-colors duration-200"
        >
          Get In Touch
        </Link>
      </m.div>
    </LazyMotion>
  )
}
