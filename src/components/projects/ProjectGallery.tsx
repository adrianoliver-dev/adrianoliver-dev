import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

interface ProjectGalleryProps {
  images: {
    src: string;
    alt: string;
    colSpan?: "col-span-1" | "col-span-2" | "col-span-1 lg:col-span-2";
    aspectRatio?: "aspect-square" | "aspect-video" | "aspect-auto" | "aspect-[3/4]";
  }[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <FadeUp>
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h3 className="text-3xl font-instrument-serif text-[var(--color-text-primary)]">Gallery</h3>
          <p className="text-sm font-mono text-[var(--color-text-secondary)] uppercase tracking-widest">
            {images.length} Captures
          </p>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <FadeUp key={idx} delay={idx * 0.1}>
            <div
              className={`relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden group ${
                img.colSpan || "col-span-1"
              } ${img.aspectRatio || "aspect-square"}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={90}
                className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-sm font-medium text-[var(--color-text-primary)] drop-shadow-md pointer-events-none">
                {img.alt}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
