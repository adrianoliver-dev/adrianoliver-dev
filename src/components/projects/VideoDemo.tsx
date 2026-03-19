"use client";

import { useState } from "react";
import FadeUp from "@/components/ui/FadeUp";
import Image from "next/image";

interface VideoDemoProps {
  videoUrl?: string; // Optional if you are just putting a placeholder for now
  posterImage?: string;
  title?: string;
}

export default function VideoDemo({ videoUrl, posterImage, title = "System Demonstration" }: VideoDemoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  if (!videoUrl) {
    return (
      <section className="py-24 px-6 lg:px-12 max-w-5xl mx-auto">
        <FadeUp>
          <style dangerouslySetInnerHTML={{__html: `
            @keyframes videoPulse {
              0%, 100% { opacity: 1; }
              50% { opacity: 0.55; }
            }
            .video-pulse-circle {
              animation: videoPulse 3s ease-in-out infinite;
            }
            @media (prefers-reduced-motion: reduce) {
              .video-pulse-circle {
                animation: none !important;
              }
            }
          `}} />
          <div 
            className="w-full min-h-[280px] flex flex-col items-center justify-center gap-4 bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl"
          >
            <div className="video-pulse-circle w-16 h-16 border-[1.5px] border-[var(--color-accent)] rounded-full flex items-center justify-center">
              <svg viewBox="0 0 36 32" className="w-8 h-8 fill-[var(--color-accent)] opacity-80" aria-hidden="true">
                <path d="M10,6 L10,26 L26,16 Z" />
              </svg>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="font-sans text-[14px] text-[var(--color-text-secondary)] tracking-[0.02em]">
                Video walkthrough
              </span>
              <span className="font-mono text-[11px] text-[var(--color-accent)] opacity-65 uppercase tracking-[0.08em]">
                Coming soon
              </span>
            </div>
          </div>
        </FadeUp>
      </section>
    );
  }

  return (
    <section className="py-24 px-6 lg:px-12 max-w-5xl mx-auto">
      <FadeUp>
        <div className="mb-12">
          <h3 className="text-3xl font-instrument-serif text-[var(--color-text-primary)] mb-4">{title}</h3>
          <p className="text-[var(--color-text-secondary)]">Narrated walkthrough (60-90s)</p>
        </div>
        
        <div className="relative aspect-video bg-[var(--color-surface)] border border-[var(--color-border)] rounded-3xl overflow-hidden group">
          {videoUrl && isPlaying ? (
            <video 
              src={videoUrl}
              className="w-full h-full object-cover"
              controls
              autoPlay
              controlsList="nodownload"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              {posterImage && (
                <Image src={posterImage} alt="Video Poster" fill className="object-cover opacity-50" />
              )}
              {/* Fake Play Button for placeholder / poster state */}
              <button 
                onClick={() => videoUrl && setIsPlaying(true)}
                className="relative z-10 w-20 h-20 rounded-full bg-[var(--color-background)]/80 backdrop-blur-md border border-[var(--color-border)] flex items-center justify-center text-[var(--color-text-primary)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all transform hover:scale-110"
                aria-label="Play video"
              >
                <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </FadeUp>
    </section>
  );
}
