import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Adrian Oliver — Full-Stack Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0C0C0C',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
        }}
      >
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '14px',
            color: '#D97706',
            marginBottom: '24px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          Full-Stack Developer
        </div>
        <div
          style={{
            fontSize: '72px',
            color: '#F5F0E8',
            fontWeight: '400',
            lineHeight: 1.1,
            marginBottom: '32px',
          }}
        >
          Adrian Oliver
        </div>
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '18px',
            color: '#78716C',
            marginBottom: '48px',
          }}
        >
          Next.js · TypeScript · Supabase · Vercel
        </div>
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '14px',
            color: '#D97706',
          }}
        >
          adrianoliver.dev
        </div>
      </div>
    ),
    { ...size }
  )
}
