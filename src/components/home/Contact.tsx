import FadeUp from '@/components/ui/FadeUp'
import ContactForm from './ContactForm'

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 border-t border-border">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 
          items-start">

          {/* Left — copy */}
          <FadeUp>
            <div className="flex flex-col gap-8">
              <div>
                <p className="font-mono text-xs text-text-secondary 
                  uppercase tracking-widest mb-3">
                  Start a project
                </p>
                <h2 className="font-serif text-3xl md:text-4xl 
                  text-text-primary max-w-sm">
                  Let&apos;s build something{' '}
                  <em>that ships.</em>
                </h2>
              </div>

              <p className="text-text-secondary leading-relaxed">
                I take on a limited number of projects to ensure 
                full focus on each engagement. If you have a 
                production timeline, tell me now.
              </p>

              {/* Availability indicator */}
              <div className="flex items-center gap-3 p-4 rounded-xl 
                border border-border bg-surface">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex 
                    h-full w-full rounded-full bg-code-green 
                    opacity-75" />
                  <span className="relative inline-flex rounded-full 
                    h-2.5 w-2.5 bg-code-green" />
                </span>
                <div>
                  <p className="font-mono text-xs text-text-primary">
                    Available for new projects
                  </p>
                  <p className="font-mono text-xs text-text-secondary">
                    GMT-4 · Async-first · Next availability: now
                  </p>
                </div>
              </div>

              {/* Direct email fallback */}
              <p className="font-mono text-xs text-text-secondary">
                Prefer email?{' '}
                <a
                  href="mailto:hello@adrianoliver.dev"
                  className="text-accent hover:underline">
                  hello@adrianoliver.dev
                </a>
              </p>
            </div>
          </FadeUp>

          {/* Right — form */}
          <FadeUp delay={0.15}>
            <ContactForm />
          </FadeUp>

        </div>
      </div>
    </section>
  )
}
