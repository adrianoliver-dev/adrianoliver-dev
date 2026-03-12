// Type declarations for window.gtag (Google Analytics 4)
export {}

declare global {
  interface Window {
    gtag: (
      command: 'event',
      action: string,
      params?: Record<string, string | number | boolean | undefined>
    ) => void
    dataLayer: unknown[]
  }
}
