import TerminalCard from './TerminalCard'
import StackGrid from './StackGrid'
import FadeUp from '@/components/ui/FadeUp'

export default function About() {
  return (
    <section className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <FadeUp>
          <div className="mb-16">
            <p className="font-mono text-xs text-text-secondary uppercase 
               tracking-widest mb-3">
              The person behind the commits
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-text-primary 
               max-w-xl">
              Economics background.{' '}
              <em>Self-taught engineer.</em>
            </h2>
          </div>
        </FadeUp>

        {/* 2-col grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left — Terminal */}
          <FadeUp delay={0.1}>
            <TerminalCard />
          </FadeUp>

          {/* Right — Copy + Stack */}
          <FadeUp delay={0.2}>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-4">
                <p className="text-text-secondary leading-relaxed">
                  I came from Economics — systems thinking, 
                  constraint-based reasoning, understanding why 
                  things fail. That background shapes how I approach 
                  engineering: every decision has a cost, every 
                  abstraction has a tradeoff.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  I didn&apos;t take a bootcamp. I picked a real problem, 
                  built two production systems with zero prior 
                  experience, and documented everything I broke along 
                  the way. That&apos;s still how I work.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Based in Santa Cruz de la Sierra, Bolivia. 
                  Available for remote projects with US/EU teams. 
                  Async-first, documented decisions, weekly milestones.
                </p>
              </div>

              {/* Stack */}
              <div>
                <p className="font-mono text-xs text-text-secondary 
                   uppercase tracking-widest mb-4">
                  Current stack
                </p>
                <StackGrid />
              </div>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
