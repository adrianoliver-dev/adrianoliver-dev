'use client'

import React from 'react'
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
      >
        <div className="whitespace-pre-wrap leading-relaxed">
          {renderContent(message.content)}
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

function renderContent(content: string) {
  const parts = content.split(/(adrianoliver\\.dev\\/[^\\s]+)/g)
  return parts.map((part, i) => {
    if (part.match(/^adrianoliver\\.dev\\//)) {
      return (
        <a
          key={i}
          href={`https://\${part}`}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted hover:no-underline transition-all"
          style={{ color: 'var(--color-accent)' }}
        >
          {part}
        </a>
      )
    }
    return <span key={i}>{part}</span>
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
