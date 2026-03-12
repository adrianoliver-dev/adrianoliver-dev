"use client";

import * as m from "framer-motion/m";
import { jetbrainsMono } from "@/lib/fonts";

interface TechnicalSnippetProps {
  title: string;
  subtitle?: string;
  code: string;
  language?: string;
}

export default function TechnicalSnippet({ title, subtitle, code, language = "sql" }: TechnicalSnippetProps) {
  return (
    <div className="py-24 px-6 lg:px-12 bg-[var(--color-surface)] border-y border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <m.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl font-instrument-serif italic text-[var(--color-text-primary)]"
          >
            {title}
          </m.h3>
          {subtitle && (
            <m.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[var(--color-text-secondary)] mt-2 font-mono text-sm uppercase tracking-widest"
            >
              {subtitle}
            </m.p>
          )}
        </div>

        <m.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Decorative code bar */}
          <div className="absolute -top-3 left-6 flex gap-1.5 z-10">
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
            <div className="w-2.5 h-2.5 rounded-full bg-[var(--color-border)]" />
          </div>

          <pre className={`${jetbrainsMono.className} p-8 pt-10 rounded-2xl bg-[var(--color-background)] border border-[var(--color-border)] overflow-x-auto text-sm md:text-base leading-relaxed text-[var(--color-text-primary)] shadow-2xl`}>
            <code className={`language-${language}`}>
              {code}
            </code>
          </pre>

          {/* Subtle amber glow around the code block */}
          <div className="absolute inset-0 -z-10 bg-[var(--color-accent)] opacity-0 group-hover:opacity-5 blur-3xl transition-opacity duration-1000" />
        </m.div>
      </div>
    </div>
  );
}
