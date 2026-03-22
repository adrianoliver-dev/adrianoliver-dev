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

// Clean URL regex — stops at space, ), ], common trailing punctuation
// but allows dots in the middle of URLs
const URL_REGEX = /((?:https?:\/\/)?adrianoliver\.dev\/[^\s\)\]\.,\)]+(?:\.[^\s\)\]\.,]+)*|https?:\/\/[^\s\)\]\.,]+(?:\.[^\s\)\]\.,]+)*)/g

function renderTextWithLinks(text: string): React.ReactNode[] {
  const parts = text.split(URL_REGEX)
  return parts.map((part, i) => {
    // Internal link
    const internalMatch = part.match(/^(?:https?:\/\/)?adrianoliver\.dev(\/[^\s]*)/)
    if (internalMatch) {
      return (
        <Link
          key={i}
          href={internalMatch[1] || '/'}
          className="underline decoration-dotted hover:no-underline font-mono text-xs"
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
          key={i}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted hover:no-underline font-mono text-xs"
          style={{ color: 'var(--color-accent)' }}
        >
          {part}
        </a>
      )
    }
    // Bold: **text**
    const boldParts = part.split(/\*\*(.*?)\*\*/g)
    if (boldParts.length > 1) {
      return boldParts.map((bp, j) =>
        j % 2 === 1 ? <strong key={`${i}-${j}`}>{bp}</strong> : bp
      )
    }
    return part
  })
}

function parseMarkdown(content: string): React.ReactNode[] {
  const lines = content.split('\n')
  const result: React.ReactNode[] = []
  let listBuffer: React.ReactNode[] = []
  let isNumbered = false

  const flushList = () => {
    if (listBuffer.length === 0) return
    if (isNumbered) {
      result.push(
        <ol key={result.length} style={{ paddingLeft: '1.25rem', margin: '4px 0', listStyleType: 'decimal' }}>
          {listBuffer}
        </ol>
      )
    } else {
      result.push(
        <ul key={result.length} style={{ paddingLeft: '1.25rem', margin: '4px 0', listStyleType: 'disc' }}>
          {listBuffer}
        </ul>
      )
    }
    listBuffer = []
  }

  lines.forEach((line, i) => {
    // Heading ### 
    if (line.startsWith('### ')) {
      flushList()
      result.push(
        <p key={i} className="font-mono uppercase tracking-widest mt-3 mb-1"
          style={{ fontSize: '10px', color: 'var(--color-accent)' }}>
          {line.slice(4)}
        </p>
      )
      return
    }
    // Numbered list
    const numberedMatch = line.match(/^(\d+)\.\s(.*)/)
    if (numberedMatch) {
      isNumbered = true
      listBuffer.push(
        <li key={i} style={{ marginBottom: '2px' }}>
          {renderTextWithLinks(numberedMatch[2])}
        </li>
      )
      return
    }
    // Bullet list
    const bulletMatch = line.match(/^[\*\-]\s+(.*)/)
    if (bulletMatch) {
      if (isNumbered) { flushList(); isNumbered = false }
      listBuffer.push(
        <li key={i} style={{ marginBottom: '2px' }}>
          {renderTextWithLinks(bulletMatch[1])}
        </li>
      )
      return
    }
    // Empty line
    if (line.trim() === '') {
      flushList()
      result.push(<div key={i} style={{ height: '6px' }} />)
      return
    }
    // Normal line
    flushList()
    result.push(
      <p key={i} style={{ margin: '2px 0', lineHeight: '1.6' }}>
        {renderTextWithLinks(line)}
      </p>
    )
  })

  flushList()
  return result
}

export default function ChatMessage({ message }: { message: Message }) {
  const isAssistant = message.role === 'assistant'

  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex w-full \${isAssistant ? 'justify-start' : 'justify-end'}`}
    >
      <div
        className="max-w-[85%] px-4 py-3 text-sm"
        style={{
          background: isAssistant
            ? 'var(--color-background)'
            : 'color-mix(in srgb, var(--color-accent) 12%, transparent)',
          border: `1px solid \${isAssistant
            ? 'var(--color-border)'
            : 'color-mix(in srgb, var(--color-accent) 35%, transparent)'}`,
          borderRadius: isAssistant ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
          color: 'var(--color-text-primary)',
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
        {parseMarkdown(message.content)}
        {message.streaming && message.content === '' && (
          <span className="inline-block w-2 h-4 align-middle animate-pulse"
            style={{ background: 'var(--color-accent)', borderRadius: '1px' }} />
        )}
        {message.streaming && message.content !== '' && (
          <span className="inline-block ml-0.5 w-1.5 h-3.5 align-middle animate-pulse"
            style={{ background: 'var(--color-accent)', borderRadius: '1px' }} />
        )}
      </div>
    </m.div>
  )
}

export function TypingIndicator() {
  return (
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex justify-start w-full"
    >
      <div
        className="px-4 py-3"
        style={{
          background: 'var(--color-background)',
          border: '1px solid var(--color-border)',
          borderRadius: '16px 16px 16px 4px',
        }}
      >
        <div className="flex gap-1 items-center h-4">
          {[0, 1, 2].map((i) => (
            <m.span
              key={i}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ repeat: Infinity, duration: 1.4, delay: i * 0.2 }}
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: 'var(--color-text-secondary)' }}
            />
          ))}
        </div>
      </div>
    </m.div>
  )
}
