import { Metadata } from "next"
import FadeUp from "@/components/ui/FadeUp"
import TerminalCard from "@/components/home/TerminalCard"
import StackGrid from "@/components/home/StackGrid"
import MagneticButton from "@/components/ui/MagneticButton"
import SectionDivider from "@/components/ui/SectionDivider"

export const metadata: Metadata = {
  title: "About | Adrian Oliver",
  description: "Full-stack developer building e-commerce and inventory systems for apparel and retail brands. Based in Bolivia, available for US/EU remote projects.",
}

export default function AboutPage() {
  return (
    <main className="pt-32 pb-24 px-6 overflow-hidden">
      <div className="mx-auto max-w-6xl flex flex-col gap-24">
        
        {/* Section 1: Hero */}
        <section>
          <FadeUp>
            <div className="max-w-3xl">
              <p className="font-mono text-xs text-text-secondary uppercase tracking-[0.2em] mb-6">
                About
              </p>
              <h1 className="font-serif text-5xl md:text-6xl text-text-primary mb-8 leading-[1.1]">
                The engineer behind <br />
                <em>the system.</em>
              </h1>
              <div className="flex flex-col gap-6 text-lg text-text-secondary leading-relaxed">
                <p>
                  I approach engineering the way analysts approach systems — 
                  every decision has a cost, every abstraction has a tradeoff. 
                  That discipline shapes how I scope, build, and ship.
                </p>
                <p>
                  I&apos;ve shipped two production systems solo: a full e-commerce 
                  platform with WhatsApp Meta API checkout and a multi-role 
                  POS inventory system with real-time sync across locations. 
                  Both are live. Both are documented.
                </p>
                <p>
                  Available for remote projects with US and EU teams. 
                  Synchronized overlap — async-first workflow, weekly milestones, 
                  and every technical decision documented in writing.
                </p>
              </div>
            </div>
          </FadeUp>
        </section>

        <SectionDivider />

        {/* Section 2: Terminal */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeUp>
              <TerminalCard />
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-6 h-full justify-center">
                <h2 className="font-serif text-3xl text-text-primary">
                  Systems-first <em>mindset.</em>
                </h2>
                <p className="text-text-secondary leading-relaxed">
                  I don&apos;t just write code; I design architectures that scale without 
                  unnecessary complexity. From database schema optimization to 
                  Type-safe API contracts, every layer is built for reliability.
                </p>
              </div>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* Section 3: Stack */}
        <section>
          <FadeUp>
            <div className="mb-12">
              <p className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-4">
                Current technical stack
              </p>
              <h2 className="font-serif text-3xl md:text-4xl text-text-primary">
                Modern tools for <em>high performance.</em>
              </h2>
            </div>
            <StackGrid />
          </FadeUp>
        </section>

        <SectionDivider />

        {/* Section 4: CTA */}
        <section className="py-12">
          <FadeUp>
            <div className="flex flex-col items-center text-center gap-10">
              <MagneticButton
                href="/contact"
                className="bg-accent text-black px-8 py-4 text-sm font-medium hover:bg-amber-500 transition-all duration-300 shadow-[0_0_40px_#D9770630] hover:shadow-[0_0_60px_#D9770650]"
              >
                Start a project →
              </MagneticButton>
            </div>
          </FadeUp>
        </section>

      </div>
    </main>
  )
}
