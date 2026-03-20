import FadeUp from '@/components/ui/FadeUp'
import MagneticButton from '@/components/ui/MagneticButton'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div className="flex flex-col items-center text-center gap-10">
            <div className="flex flex-col gap-4">
              <h2 className="font-serif text-4xl md:text-5xl text-text-primary">
                Have a retail or e-commerce problem that{' '}
                <em>spreadsheets can&apos;t solve?</em>
              </h2>
              <p className="text-text-secondary text-lg">
                Tell me what you&apos;re building.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8">
              <MagneticButton
                href="/contact"
                className="bg-accent text-black px-8 py-4 text-sm font-medium hover:bg-amber-500 transition-all duration-300 shadow-[0_0_40px_#D9770630] hover:shadow-[0_0_60px_#D9770650]"
              >
                Start a project →
              </MagneticButton>
            </div>
          </div>
        </FadeUp>

        {/* SLA Strip */}
        <FadeUp delay={0.2}>
          <div className="bg-surface border border-border rounded-2xl p-8 mt-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
              <div className="flex flex-col text-center md:text-left">
                <div className="font-mono text-3xl text-accent font-bold">{"< 30 min"}</div>
                <div className="font-mono text-[10px] text-text-primary uppercase tracking-widest mt-2">Response time</div>
                <div className="font-mono text-[10px] text-text-secondary uppercase mt-1">during business hours (GMT-4)</div>
              </div>
              
              <div className="flex flex-col text-center md:text-left">
                <div className="font-mono text-3xl text-accent font-bold">Weekly</div>
                <div className="font-mono text-[10px] text-text-primary uppercase tracking-widest mt-2">Milestones</div>
                <div className="font-mono text-[10px] text-text-secondary uppercase mt-1">Loom + written update</div>
              </div>
              
              <div className="flex flex-col text-center md:text-left">
                <div className="font-mono text-3xl text-accent font-bold">60 days</div>
                <div className="font-mono text-[10px] text-text-primary uppercase tracking-widest mt-2">Post-launch</div>
                <div className="font-mono text-[10px] text-text-secondary uppercase mt-1">included support</div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
