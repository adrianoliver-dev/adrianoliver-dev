/**
 * Analytics utility — centralizes all GA4 custom event calls.
 * Never import window.gtag directly in components; use this helper.
 */

type GTagEvent = {
  action: string
  category?: string
  label?: string
  value?: number
  [key: string]: string | number | boolean | undefined
}

export function trackEvent({ action, ...params }: GTagEvent): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', action, params)
}
