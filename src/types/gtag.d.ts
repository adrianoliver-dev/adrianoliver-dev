// Type declarations for window.gtag (Google Analytics 4)
declare function gtag(
  command: 'event',
  action: string,
  params?: Record<string, string | number | boolean | undefined>
): void
declare function gtag(
  command: 'config',
  targetId: string,
  params?: Record<string, string | number | boolean | undefined>
): void
declare function gtag(command: 'js', date: Date): void

interface Window {
  gtag: typeof gtag
  dataLayer: unknown[]
}
