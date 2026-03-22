import { Metadata } from "next"
import FadeUp from "@/components/ui/FadeUp"
import TerminalCard from "@/components/home/TerminalCard"
import MagneticButton from "@/components/ui/MagneticButton"
import SectionDivider from "@/components/ui/SectionDivider"

export const metadata: Metadata = {
  title: "About | Adrian Oliver",
  description: "Full-stack developer building e-commerce and inventory systems for apparel and retail brands. Based in Bolivia, available for remote, async-first projects.",
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
                  I transitioned from Economics to full-stack engineering with one
                  focus: building systems that solve real operational problems for
                  retail and e-commerce businesses. Based in Santa Cruz, Bolivia — available for remote projects worldwide,
                  async-first.
                </p>
              </div>
            </div>
          </FadeUp>
        </section>

        <SectionDivider />

        {/* Section 2: Terminal + Engagement */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <FadeUp>
              <TerminalCard />
            </FadeUp>
            <FadeUp delay={0.1}>
              <div className="flex flex-col gap-8 h-full justify-center">
                <ul className="space-y-5">
                  <li
                    className="flex items-start gap-3 text-lg font-light"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span
                      className="mt-1 text-sm flex-shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    >
                      →
                    </span>
                    Async-first. Every decision documented in writing.
                  </li>
                  <li
                    className="flex items-start gap-3 text-lg font-light"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span
                      className="mt-1 text-sm flex-shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    >
                      →
                    </span>
                    Weekly Loom walkthrough + written milestone update.
                  </li>
                  <li
                    className="flex items-start gap-3 text-lg font-light"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    <span
                      className="mt-1 text-sm flex-shrink-0"
                      style={{ color: "var(--color-accent)" }}
                    >
                      →
                    </span>
                    60-day post-launch support included on all projects.
                  </li>
                </ul>
              </div>
            </FadeUp>
          </div>
        </section>

        <SectionDivider />

        {/* Section 3: CTA */}
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
