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
              The engineer behind the system
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-text-primary 
               max-w-xl">
              Systems thinking.{' '}
              <em>Production-first engineer.</em>
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
                  I approach engineering the way analysts approach systems — 
                  every decision has a cost, every abstraction has a tradeoff. 
                  That discipline shapes how I scope, build, and ship.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  I&apos;ve shipped two production systems solo: a full e-commerce 
                  platform with WhatsApp Meta API checkout and a multi-role 
                  POS inventory system with real-time sync across locations. 
                  Both are live. Both are documented.
                </p>
                <p className="text-text-secondary leading-relaxed">
                  Available for remote projects with US and EU teams. 
                  Synchronized overlap — async-first workflow, weekly milestones, 
                  and every technical decision documented in writing.
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
