import FadeUp from '@/components/ui/FadeUp'

export default function ProcessSteps() {
  const steps = [
    {
      num: "1",
      title: "Discovery Call (30 min)",
      desc: "We define scope, constraints, and success criteria. You get a written technical brief within 24 hours."
    },
    {
      num: "2",
      title: "Architecture Proposal",
      desc: "Full system design document: stack justification, data model, component map, and delivery timeline. Milestone-based pricing."
    },
    {
      num: "3",
      title: "Sprint Execution",
      desc: "Weekly milestones. GitHub PR reviews. Loom walkthrough every Friday. Staging environment before any production deploy."
    },
    {
      num: "4",
      title: "Handoff & Documentation",
      desc: "Full technical documentation, deployment runbook, and a 60-day support window. You own everything — code, infra, and docs."
    }
  ]

  return (
    <div className="border-t border-border mt-16 pt-16">
      <FadeUp delay={0.1}>
        <p className="font-mono text-xs text-text-secondary uppercase tracking-widest mb-3">
          How it works
        </p>
        <h3 className="font-serif text-2xl text-text-primary mb-12">
          A structured engagement, <em>not a guessing game.</em>
        </h3>

        <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex-1 flex items-start gap-0 w-full">
              <div className="flex-1">
                <div className="font-mono text-accent text-4xl font-bold">{step.num}</div>
                <h4 className="font-serif text-lg text-text-primary mt-2 mb-2">{step.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed lg:pr-6">{step.desc}</p>
              </div>
              {i < steps.length - 1 && (
                <div className="hidden lg:block h-px bg-border flex-1 mt-8 mr-6" />
              )}
            </div>
          ))}
        </div>
      </FadeUp>
    </div>
  )
}
