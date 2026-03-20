import { ImageResponse } from 'next/og'
import { getPostBySlug } from '@/lib/blog'

export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const post = getPostBySlug(resolvedParams.slug)
  const title = post?.title ?? 'Blog — Adrian Oliver'
  const date = post?.date ?? ''

  return new ImageResponse(
    (
      <div
        style={{
          background: '#0C0C0C',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Top: amber accent line */}
        <div style={{
          width: '60px',
          height: '3px',
          background: '#D97706',
          marginBottom: '48px',
        }} />

        {/* Title */}
        <div style={{
          fontSize: title.length > 50 ? '52px' : '64px',
          fontWeight: 400,
          color: '#F5F0E8',
          lineHeight: 1.15,
          maxWidth: '900px',
          flex: 1,
          display: 'flex',
          alignItems: 'center',
        }}>
          {title}
        </div>

        {/* Bottom: author + date */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: '48px',
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}>
            {/* Brand mark — simplified diamond */}
            <div style={{
              width: '32px',
              height: '32px',
              background: '#D97706',
              transform: 'rotate(45deg)',
            }} />
            <span style={{
              fontSize: '20px',
              color: '#F5F0E8',
              fontWeight: 500,
            }}>
              Adrian Oliver
            </span>
          </div>
          <span style={{
            fontSize: '18px',
            color: '#78716C',
            fontFamily: 'monospace',
          }}>
            {date}
          </span>
        </div>
      </div>
    ),
    { ...size }
  )
}
