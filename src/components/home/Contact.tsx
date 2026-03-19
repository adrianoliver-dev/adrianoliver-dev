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
                Ready to build <em>something?</em>
              </h2>
              <p className="text-text-secondary text-lg">
                Tell me what you&apos;re working on.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8">
              <MagneticButton
                href="/contact"
                className="bg-accent text-black px-8 py-4 text-sm font-medium hover:bg-amber-500 transition-all duration-300 shadow-[0_0_40px_#D9770630] hover:shadow-[0_0_60px_#D9770650]"
              >
                Start a project →
              </MagneticButton>

              <div className="flex items-center gap-3 px-5 py-3 rounded-full border border-border bg-surface">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-code-green opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-code-green" />
                </span>
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-primary">
                  Available for new projects
                </span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
