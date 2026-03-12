"use client";

import * as m from "framer-motion/m";

interface Metric {
  label: string;
  value: string;
  suffix?: string;
}

interface ProjectMetricProps {
  metrics: Metric[];
}

export default function ProjectMetric({ metrics }: ProjectMetricProps) {
  return (
    <div className="flex flex-wrap gap-12 py-16">
      {metrics.map((metric, index) => (
        <m.div
          key={index}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2 }}
          className="flex flex-col"
        >
          <span className="text-5xl md:text-7xl font-instrument-serif text-[var(--color-text-primary)]">
            {metric.value}
            {metric.suffix && <span className="text-2xl ml-1 text-[var(--color-accent)]">{metric.suffix}</span>}
          </span>
          <span className="text-sm uppercase tracking-widest text-[var(--color-text-secondary)] font-mono mt-2">
            {metric.label}
          </span>
        </m.div>
      ))}
    </div>
  );
}
