'use client'
import { useEffect, useState, useRef } from 'react'
import { useInView } from 'framer-motion'

const LINES = [
  { prefix: '~', command: 'whoami', delay: 0 },
  { prefix: null, output: 'adrian oliver — full-stack developer, santa cruz, bolivia', delay: 600 },
  { prefix: '~', command: 'cat background.txt', delay: 1400 },
  { prefix: null, output: 'economics → self-taught dev. started with zero code knowledge.', delay: 2000 },
  { prefix: null, output: 'built two production systems in ~23 days. learning in public.', delay: 2600 },
  { prefix: '~', command: 'cat approach.txt', delay: 3400 },
  { prefix: null, output: 'i don\'t build templates. i build systems that solve real problems.', delay: 4000 },
  { prefix: null, output: 'server-first. type-safe. shipped, not staged.', delay: 4600 },
  { prefix: '~', command: 'cat availability.txt', delay: 5400 },
  { prefix: null, output: 'open to new projects — GMT-4 timezone, async-first.', delay: 6000 },
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
