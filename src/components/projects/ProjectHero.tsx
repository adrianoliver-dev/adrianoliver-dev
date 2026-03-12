"use client";

import * as m from "framer-motion/m";
import { instrumentSerif } from "@/lib/fonts";

interface ProjectHeroProps {
  title: string;
  italicWord: string;
  description: string;
  metadata: {
    label: string;
    value: string;
  }[];
  liveUrl?: string;
  repoUrl?: string;
}

export default function ProjectHero({
  title,
  italicWord,
  description,
  metadata,
  liveUrl,
  repoUrl,
}: ProjectHeroProps) {
  return (
    <section className="relative pt-48 pb-32 px-6 lg:px-12 overflow-hidden border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto relative z-10">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col"
        >
          {/* Label */}
          <m.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--color-accent)] mb-8"
          >
            Case Study Portfolio
          </m.span>

          {/* Title */}
          <h1 className={`${instrumentSerif.className} text-7xl md:text-9xl lg:text-[10rem] text-[var(--color-text-primary)] leading-[0.85] tracking-tight mb-16`}>
            {title}<br />
            <m.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="italic font-light text-[var(--color-text-secondary)] opacity-50"
            >
              {italicWord}
            </m.span>
          </h1>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-start">
            <div className="lg:col-span-7">
              <p className="text-xl md:text-2xl text-[var(--color-text-primary)] leading-[1.6] max-w-2xl font-light">
                {description}
              </p>
              
              {/* Links - High Contrast & Prominent */}
              <div className="flex flex-wrap gap-8 mt-12">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center gap-4 text-[var(--color-text-primary)] group"
                  >
                    <div className="w-14 h-14 rounded-full bg-[var(--color-accent)] flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_0_30px_rgba(217,119,6,0.2)]">
                      <svg className="w-6 h-6 text-[var(--color-background)] transition-transform group-hover:rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                    <span className="font-mono text-sm uppercase tracking-widest border-b border-[var(--color-accent)] pb-1">Live Deployment</span>
                  </a>
                )}
                {repoUrl && (
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm uppercase tracking-widest text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors py-4 border-b border-[var(--color-border)] hover:border-[var(--color-accent)]"
                  >
                    Source Code
                  </a>
                )}
              </div>
            </div>
            
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="lg:col-span-5 grid grid-cols-2 gap-x-12 gap-y-12"
            >
              {metadata.map((item, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[var(--color-text-secondary)] font-mono">
                    {item.label}
                  </span>
                  <span className="text-sm md:text-base text-[var(--color-text-primary)] font-medium">
                    {item.value}
                  </span>
                </div>
              ))}
            </m.div>
          </div>
        </m.div>
      </div>

      {/* Background Gradients */}
      <div className="absolute top-0 right-0 -z-10 w-[80%] h-full bg-[radial-gradient(circle_at_top_right,var(--color-accent-glow),transparent_60%)] opacity-40" />
      <div className="absolute bottom-0 left-0 -z-10 w-full h-px bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
    </section>
  );
}
