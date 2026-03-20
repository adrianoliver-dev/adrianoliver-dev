"use client"

import { useState, useEffect, useSyncExternalStore } from "react"
import Link from "next/link"
import * as m from "framer-motion/m"
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import BrandMark from "@/components/ui/BrandMark"

const navLinks = [
  { label: "Work", href: "/#projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

function useReducedMotion() {
  return useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)")
      mq.addEventListener("change", callback)
      return () => mq.removeEventListener("change", callback)
    },
    () => typeof window !== "undefined" ? window.matchMedia("(prefers-reduced-motion: reduce)").matches : false,
    () => false // SSR default
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const shouldReduceMotion = useReducedMotion()
  const pathname = usePathname()

  // Lock scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => setIsOpen(false)

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      // Use Lenis if available, fallback to native
      const lenis = (window as unknown as { __lenis?: { scrollTo: (target: number | string | HTMLElement, options?: Record<string, unknown>) => void } }).__lenis
      if (lenis) {
        lenis.scrollTo(0, { immediate: false, duration: 1.2 })
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    closeMenu()
  }

  const menuVariants = {
    initial: { x: "100%" },
    animate: { 
      x: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1] as const
      }
    },
    exit: { 
      x: "100%",
      transition: { 
        duration: 0.25, 
        ease: [0.42, 0, 1, 1] as const // easeIn
      }
    }
  }

  const reducedMotionVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-6xl px-6 py-5 flex items-center justify-between">
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center group decoration-transparent relative z-[60]"
        >
          <BrandMark size={26} />
          <div className="hidden md:block w-[1px] h-[14px] bg-[var(--color-border)] mx-[12px]" />
          <span className="hidden md:block font-sans text-[14px] text-[var(--color-text-primary)]">
            Adrian Oliver<span className="text-[var(--color-accent)]">.</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5 focus:outline-none"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          <m.span
            animate={isOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[1.5px] bg-[var(--color-text-primary)] origin-center"
          />
          <m.span
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="w-6 h-[1.5px] bg-[var(--color-text-primary)]"
          />
          <m.span
            animate={isOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-6 h-[1.5px] bg-[var(--color-text-primary)] origin-center"
          />
        </button>
      </nav>

      {/* Mobile Overlay */}
      <AnimatePresence mode="wait">
        {isOpen && (
          <m.div
            variants={shouldReduceMotion ? reducedMotionVariants : menuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 z-50 bg-[rgba(12,12,12,0.92)] backdrop-blur-[16px] md:hidden flex flex-col px-8 py-24"
          >
            {/* Amber vertical accent line */}
            <m.div 
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: 0.2, duration: 0.35 }}
              className="absolute left-0 top-[20%] w-[1px] h-[60%] bg-[var(--color-accent)] opacity-60 origin-top"
            />

            {/* Menu Links */}
            <div className="flex flex-col gap-8 mt-12">
              {navLinks.map((link, i) => (
                <m.div
                  key={link.href}
                  initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.07 * i + 0.1, duration: 0.35 }}
                >
                  <Link
                    href={link.href}
                    onClick={closeMenu}
                    className="font-serif text-[32px] text-[var(--color-text-primary)] hover:text-[var(--color-accent)] transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}
            </div>

            {/* Bottom brand line */}
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4 }}
              className="mt-auto flex items-center gap-3"
            >
              <BrandMark size={20} />
              <span className="font-mono text-[11px] text-[var(--color-text-secondary)] tracking-tight">
                @adrianoliver_dev
              </span>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </header>
  )
}
