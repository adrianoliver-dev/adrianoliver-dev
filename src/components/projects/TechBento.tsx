"use client";

import * as m from "framer-motion/m";

interface Feature {
  title: string;
  description: string;
  icon?: React.ReactNode;
  colSpan?: "col-span-1" | "col-span-2";
}

interface TechBentoProps {
  features: Feature[];
  sectionTitle?: string;
}

export default function TechBento({ features, sectionTitle }: TechBentoProps) {
  return (
    <section className="py-24 px-6 lg:px-12 bg-[var(--color-surface)]">
      <div className="max-w-7xl mx-auto">
        {sectionTitle && (
          <m.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl text-[var(--color-text-primary)] mb-16 font-instrument-serif"
          >
            {sectionTitle}
          </m.h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <m.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-3xl bg-[var(--color-background)] border border-[var(--color-border)] hover:border-[var(--color-accent)] transition-colors group relative overflow-hidden ${feature.colSpan || "col-span-1"}`}
            >
              {feature.icon && (
                <div className="mb-6 text-[var(--color-accent)] group-hover:scale-110 transition-transform duration-500">
                  {feature.icon}
                </div>
              )}
              <h3 className="text-xl font-medium text-[var(--color-text-primary)] mb-3">
                {feature.title}
              </h3>
              <p className="text-[var(--color-text-secondary)] leading-relaxed">
                {feature.description}
              </p>
              
              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--color-accent-glow),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
