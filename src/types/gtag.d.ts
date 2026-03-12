// Type declarations for Google Analytics 4 (gtag.js)
// Extends the global Window interface so window.gtag is typed everywhere.
export {}

declare global {
  // eslint-disable-next-line no-unused-vars
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'set' | 'js',
      targetIdOrAction: string | Date,
      params?: Record<string, string | number | boolean | undefined>
    ) => void
    dataLayer: unknown[]
  }
}
