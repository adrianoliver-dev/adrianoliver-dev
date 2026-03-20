'use client'

import { useState } from 'react'

export default function CopyLinkButton() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  return (
    <button
      onClick={copy}
      className="font-mono text-[10px] uppercase tracking-[0.2em] transition-colors duration-200 flex items-center gap-2 group"
      style={{
        color: copied
          ? 'var(--color-code-green)'
          : 'var(--color-text-secondary)'
      }}
      aria-label="Copy post link"
    >
      <span 
        className="inline-block w-4 h-[1px] transition-all duration-300 group-hover:w-6"
        style={{ background: 'currentColor' }} 
      />
      {copied ? 'Link copied' : 'Copy link'}
    </button>
  )
}
