'use client'
import Link from 'next/link'
import TiltCard from '@/components/ui/TiltCard'
import { trackEvent } from '@/lib/analytics'

interface ProjectCardProps {
  title: string
  tagline: string
  description: string
  tags: string[]
  href: string
  status: "live" | "case-study"
  featured?: boolean
  className?: string
}

export default function ProjectCard({
  title,
  tagline,
  description,
  tags,
  href,
  status,
  featured = false,
  className = "",
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
        className={`relative overflow-hidden rounded-2xl bg-surface p-6 flex flex-col gap-4 group transition-colors duration-300 block h-full`}
      >
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
            className="font-mono text-xs bg-border text-text-secondary px-2 py-1 rounded"
          >
            {tag}
          </span>
        ))}
      </div>

      {featured && (
        <div className="mt-auto pt-4 border-t border-border grid grid-cols-3 gap-2 text-center">
          <div>
            <p className="font-mono text-accent text-sm font-medium">100/100</p>
            <p className="font-mono text-text-secondary text-xs">Performance</p>
          </div>
          <div>
            <p className="font-mono text-accent text-sm font-medium">Next.js</p>
            <p className="font-mono text-text-secondary text-xs">Modern Stack</p>
          </div>
          <div>
            <p className="font-mono text-accent text-sm font-medium">Full</p>
            <p className="font-mono text-text-secondary text-xs">Stack</p>
          </div>
        </div>
      )}
      </Link>
    </TiltCard>
  )
}
