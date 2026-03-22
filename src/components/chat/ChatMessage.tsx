'use client'

import React from 'react'
import Link from 'next/link'
import * as m from 'framer-motion/m'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  streaming?: boolean
}

interface ChatMessageProps {
  message: Message
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isAssistant = message.role === 'assistant'

  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.2 }}
      className={`flex \${isAssistant ? 'justify-start' : 'justify-end'} w-full`}
    >
      <div
        className={`
          max-w-[85%] px-4 py-3 text-sm
          \${isAssistant 
            ? 'bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text-secondary)] rounded-2xl rounded-bl-sm font-sans' 
            : 'bg-[color-mix(in_srgb,var(--color-accent)_10%,transparent)] border border-[color-mix(in_srgb,var(--color-accent)_30%,transparent)] text-[var(--color-text-primary)] rounded-2xl rounded-br-sm font-sans'
          }
        `}
        style={{ wordBreak: 'break-word', overflowWrap: 'break-word' }}
      >
        <div className="whitespace-pre-wrap leading-relaxed">
          {renderMarkdown(message.content)}
          {message.streaming && (
            <m.span
              animate={{ opacity: [1, 0] }}
              transition={{ repeat: Infinity, duration: 0.8 }}
              className="inline-block ml-0.5 w-1.5 h-4 bg-[var(--color-accent)] align-middle"
            >
              ▋
            </m.span>
          )}
        </div>
      </div>
    </m.div>
  )
}

function renderMarkdown(text: string) {
  // Split into lines and process
  return text.split('\n').map((line, lineIdx) => {
    // Bold: **text**
    const boldParsed = line.split(/\*\*(.*?)\*\*/g).map((part, i) =>
      i % 2 === 1 ? <strong key={i} className="font-bold text-[var(--color-text-primary)]">{part}</strong> : 
        // Italic: *text*
        part.split(/\*(.*?)\*/g).map((p, j) =>
          j % 2 === 1 ? <em key={j} className="italic">{p}</em> : 
            renderLinks(p, `${lineIdx}-${i}-${j}`)
        )
    )
    
    // Detect list items
    if (line.match(/^[\*\-]\s/)) {
      return (
        <li key={lineIdx} className="ml-4 list-disc mb-1 text-[var(--color-text-secondary)]">
          {boldParsed}
        </li>
      )
    }
    if (line.match(/^\d+\.\s/)) {
      return (
        <li key={lineIdx} className="ml-4 list-decimal mb-1 text-[var(--color-text-secondary)]">
          {boldParsed}
        </li>
      )
    }
    // Heading
    if (line.startsWith('### ')) {
      return (
        <p key={lineIdx} className="font-mono text-[10px] uppercase tracking-widest mt-4 mb-2 first:mt-0"
          style={{ color: 'var(--color-accent)' }}>
          {line.slice(4)}
        </p>
      )
    }
    // Empty line = spacer
    if (line.trim() === '') {
      return <div key={lineIdx} className="h-2" />
    }
    return <p key={lineIdx} className="mb-2 last:mb-0 text-[var(--color-text-secondary)]">{boldParsed}</p>
  })
}

function renderLinks(text: string, key: string) {
  // Clean URL regex — stops at common trailing punctuation
  const urlRegex = /((?:https?:\/\/)?adrianoliver\.dev\/[^\s\)\]\.,]+|https?:\/\/[^\s\)\]\.,]+)/g
  const parts = text.split(urlRegex)
  
  return parts.map((part, i) => {
    // Internal portfolio link
    const internalMatch = part.match(/^(?:https?:\/\/)?adrianoliver\.dev(\/[^\s]*)/)
    if (internalMatch) {
      const path = internalMatch[1] || '/'
      return (
        <Link
          key={`${key}-${i}`}
          href={path}
          className="underline decoration-dotted hover:no-underline transition-all"
          style={{ color: 'var(--color-accent)' }}
        >
          {part}
        </Link>
      )
    }
    // External link
    if (part.match(/^https?:\/\//)) {
      return (
        <a
          key={`${key}-${i}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted hover:no-underline transition-all"
          style={{ color: 'var(--color-accent)' }}
        >
          {part}
        </a>
      )
    }
    return <span key={`${key}-${i}`}>{part}</span>
  })
}

export function TypingIndicator() {
  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start w-full"
    >
      <div className="bg-[var(--color-background)] border border-[var(--color-border)] rounded-2xl rounded-bl-sm px-4 py-3">
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map((i) => (
            <m.span
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ 
                repeat: Infinity, 
                duration: 1.4, 
                delay: i * 0.2,
                ease: "easeInOut"
              }}
              className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-secondary)]"
            />
          ))}
        </div>
      </div>
    </m.div>
  )
}
