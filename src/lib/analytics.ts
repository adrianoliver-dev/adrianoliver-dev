/**
 * Analytics utility — centralizes all GA4 custom event calls.
 * Never call window.gtag directly in components; use this helper.
 */

type GTagEventParams = Record<string, string | number | boolean | undefined>

interface GTagEvent extends GTagEventParams {
  action: string
}

export function trackEvent({ action, ...params }: GTagEvent): void {
  if (typeof window === 'undefined') return
  if (typeof window.gtag !== 'function') return
  window.gtag('event', action, params)
}
