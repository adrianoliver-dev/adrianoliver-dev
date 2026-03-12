'use client'
import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const LINES = [
  { prefix: '~', command: 'whoami', delay: 0 },
  { prefix: null, output: 'adrian oliver — full-stack developer', delay: 600 },
  { prefix: '~', command: 'cat focus.txt', delay: 1400 },
  { prefix: null, output: 'e-commerce systems · business web apps · inventory platforms', delay: 2000 },
  { prefix: '~', command: 'cat stack.txt', delay: 2800 },
  { prefix: null, output: 'next.js 15 · typescript · supabase · tailwind v4', delay: 3400 },
  { prefix: '~', command: 'cat delivery.txt', delay: 4200 },
  { prefix: null, output: 'two production systems shipped solo. zero downtime. documented.', delay: 4800 },
  { prefix: '~', command: 'cat availability.txt', delay: 5400 },
  { prefix: null, output: 'available for remote projects — async-first, weekly milestones.', delay: 6000 },
  { prefix: '~', command: '', delay: 6800, cursor: true },
]

export default function TerminalCard() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    if (!isInView) return
    LINES.forEach((line, i) => {
      setTimeout(() => {
        setVisibleLines(i + 1)
      }, line.delay)
    })
  }, [isInView])

  return (
    <div
      ref={ref}
      className="rounded-xl border border-border bg-surface overflow-hidden"
    >
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
        <span className="w-3 h-3 rounded-full bg-red-500/60" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
        <span className="w-3 h-3 rounded-full bg-green-500/60" />
        <span className="font-mono text-xs text-text-secondary ml-2">
          adrian@portfolio:~
        </span>
      </div>
      {/* Terminal body */}
      <div className="p-5 font-mono text-sm space-y-1 min-h-[280px]">
        {LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex gap-2">
            {line.prefix !== null ? (
              <>
                <span className="text-accent select-none">{line.prefix} $</span>
                <span className="text-code-green">{line.command}</span>
              </>
            ) : (
              <span className="text-text-secondary pl-4">{line.output}</span>
            )}
            {line.cursor && i === visibleLines - 1 && (
              <span className="text-accent animate-pulse">▋</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
