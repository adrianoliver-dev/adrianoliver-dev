'use client'

import React from 'react'
import BrandMark from '@/components/ui/BrandMark'

interface ChatTriggerProps {
  isOpen: boolean
  onToggle: () => void
}

export default function ChatTrigger({ isOpen, onToggle }: ChatTriggerProps) {
  return (
    <button
      onClick={onToggle}
      className={`
        flex items-center gap-2 px-4 py-2.5 rounded-full
        border transition-all duration-300 shadow-2xl
        hover:scale-105 active:scale-95 group
      `}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9000,
        background: 'var(--color-surface)',
        borderColor: isOpen
          ? 'var(--color-accent)'
          : 'var(--color-border)',
      }}
      aria-label={isOpen ? 'Close chat' : 'Ask anything'}
    >
      {isOpen ? (
        <svg 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none"
          stroke="currentColor" 
          strokeWidth="2"
          className="text-[var(--color-text-primary)] transition-transform duration-300 group-hover:rotate-90"
        >
          <path d="M18 6L6 18M6 6l12 12"/>
        </svg>
      ) : (
        <>
          <BrandMark size={18} className="transition-transform duration-300 group-hover:rotate-12" />
          <span 
            className="font-mono text-xs uppercase tracking-widest transition-colors group-hover:text-[var(--color-text-primary)]"
            style={{ color: 'var(--color-text-secondary)' }}
          >
            Ask anything
          </span>
        </>
      )}
    </button>
  )
}
