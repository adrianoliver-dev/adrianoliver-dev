'use client'
import { useActionState, useEffect, useRef, useState } from 'react'
import { sendContactEmail, type ContactFormState } from '@/app/actions/contact'
import { trackEvent } from '@/lib/analytics'

const initialState: ContactFormState = { status: 'idle' }

const budgetOptions = [
  { value: 'under-3k', label: 'Under $3,000' },
  { value: '3k-10k',  label: '$3,000 – $10,000' },
  { value: '10k+',    label: '$10,000+' },
  { value: 'other',    label: 'Other / Consulting' },
]

export default function ContactForm() {
  const [state, action, pending] = useActionState(sendContactEmail, initialState)
  const [selectedBudget, setSelectedBudget] = useState<string | undefined>(undefined)
  const formStarted = useRef(false)
  const prevStatus = useRef<string>('idle')

  // Track form success / error state transitions
  useEffect(() => {
    if (state.status === prevStatus.current) return
    prevStatus.current = state.status

    if (state.status === 'success') {
      trackEvent({ action: 'contact_form_success', budget: selectedBudget })
    } else if (state.status === 'error') {
      trackEvent({ action: 'contact_form_error' })
    }
  }, [state.status, selectedBudget])

  function handleFirstFocus() {
    if (!formStarted.current) {
      formStarted.current = true
      trackEvent({ action: 'contact_form_start' })
    }
  }

  // Track submit click (fires before server action runs)
  function handleSubmitClick() {
    trackEvent({ action: 'contact_form_submit', budget: selectedBudget })
  }

  if (state.status === 'success') {
    return (
      <div className="p-8 rounded-2xl border border-code-green/30 
        bg-code-green/5 text-center">
        <p className="font-mono text-code-green text-sm mb-1">
          ✓ Message received
        </p>
        <p className="text-text-secondary text-sm">{state.message}</p>
      </div>
    )
  }

  return (
    <form action={action} onFocus={handleFirstFocus} className="flex flex-col gap-5">
      {/* Name + Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label className="font-mono text-xs text-text-secondary 
            uppercase tracking-widest">
            Name
          </label>
          <input
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="bg-surface border border-border rounded-lg px-4 py-3 
              text-sm text-text-primary placeholder:text-text-secondary/50
              focus:outline-none focus:border-accent transition-colors"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="font-mono text-xs text-text-secondary 
            uppercase tracking-widest">
            Email
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="you@company.com"
            className="bg-surface border border-border rounded-lg px-4 py-3 
              text-sm text-text-primary placeholder:text-text-secondary/50
              focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      {/* Budget */}
      <div className="flex flex-col gap-2">
        <label className="font-mono text-xs text-text-secondary 
          uppercase tracking-widest">
          Project budget
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
          {budgetOptions.map(({ value, label }) => (
            <label key={value} className="relative cursor-pointer">
              <input
                type="radio"
                name="budget"
                value={value}
                className="peer sr-only"
                required
                onChange={() => setSelectedBudget(value)}
              />
              <span className="block text-center font-mono text-xs 
                border border-border rounded-lg py-2.5 px-2
                text-text-secondary bg-surface
                peer-checked:border-accent peer-checked:text-accent 
                peer-checked:bg-accent/5
                hover:border-accent/50 transition-colors">
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label className="font-mono text-xs text-text-secondary 
          uppercase tracking-widest">
          Tell me about your project
        </label>
        <textarea
          name="message"
          required
          rows={5}
          placeholder="What are you building? What's the main problem you need solved?"
          className="bg-surface border border-border rounded-lg px-4 py-3 
            text-sm text-text-primary placeholder:text-text-secondary/50
            focus:outline-none focus:border-accent transition-colors 
            resize-none"
        />
      </div>

      {/* Error state */}
      {state.status === 'error' && (
        <p className="font-mono text-xs text-red-400 bg-red-400/5 
          border border-red-400/20 rounded-lg px-4 py-3">
          {state.message}
        </p>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={pending}
        onClick={handleSubmitClick}
        className="self-start inline-flex items-center gap-2 bg-accent 
          text-black font-mono text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-lg
          shadow-[0_0_40px_#D9770630] hover:shadow-[0_0_60px_#D9770650]
          disabled:opacity-50 disabled:cursor-not-allowed
          transition-all duration-300">
        {pending ? 'Sending...' : 'Start a Conversation →'}
      </button>
    </form>
  )
}
