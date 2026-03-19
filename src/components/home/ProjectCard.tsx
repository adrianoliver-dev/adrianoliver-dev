'use client'
import Image from 'next/image'
import Link from 'next/link'
import TiltCard from '@/components/ui/TiltCard'
import { trackEvent } from '@/lib/analytics'

interface Metric {
  value: string
  label: string
}

interface ProjectCardProps {
  title: string
  tagline: string
  description: string
  tags: string[]
  href: string
  status: "live" | "case-study"
  featured?: boolean
  imageSrc?: string
  className?: string
  metrics?: Metric[]
}

export default function ProjectCard({
  title,
  tagline,
  description,
  tags,
  href,
  status,
  featured = false,
  imageSrc,
  className = "",
  metrics,
}: ProjectCardProps) {
  function handleClick() {
    trackEvent({
      action: 'project_card_click',
      project_name: title,
      link_type: status,
    })
  }

  return (
    <TiltCard className={`block card-spotlight rounded-2xl ${className}`}>
      <Link 
        href={href}
        onClick={handleClick}
        className={`relative overflow-hidden rounded-2xl bg-surface flex flex-col group transition-colors duration-300 block h-full`}
      >
      {/* Thumbnail */}
      {imageSrc && (
        <div className="relative aspect-video overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-60" />
        </div>
      )}

      <div className="p-6 flex flex-col gap-4 flex-1">
        <div className="flex items-center justify-between">
          {status === "live" ? (
            <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full font-mono text-xs">
              ● Live
            </span>
          ) : (
            <span className="bg-accent/10 text-accent border border-accent/20 px-2 py-0.5 rounded-full font-mono text-xs">
              ◆ Case Study
            </span>
          )}
          <svg 
            className="w-4 h-4 text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </div>

        <div className="flex flex-col gap-1">
          <h3 className="font-serif text-xl text-text-primary">{title}</h3>
          <p className="font-mono text-xs text-accent">{tagline}</p>
        </div>

        <p className={`text-sm text-text-secondary leading-relaxed ${featured ? 'line-clamp-3' : 'line-clamp-2'}`}>
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span 
              key={tag}
              className="font-mono text-[10px] uppercase tracking-wider bg-white/5 text-text-secondary px-2 py-1 rounded border border-white/5 group-hover:border-accent/20 group-hover:text-accent/80 transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {featured && metrics && metrics.length > 0 && (
          <div
            className="mt-auto pt-6 border-t border-border grid gap-2 text-center"
            style={{ gridTemplateColumns: `repeat(${metrics.length}, 1fr)` }}
          >
            {metrics.map((metric) => (
              <div key={metric.label}>
                <p className="font-mono text-accent text-sm font-medium">{metric.value}</p>
                <p className="font-mono text-text-secondary text-[10px] uppercase tracking-wider">{metric.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
      </Link>
    </TiltCard>
  )
}
