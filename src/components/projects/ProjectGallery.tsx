import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
  featured?: boolean | "mobile" | string;
  colSpan?: "col-span-1" | "col-span-2" | "col-span-1 lg:col-span-2" | string;
  aspectRatio?: "aspect-square" | "aspect-video" | "aspect-auto" | "aspect-[3/4]" | string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
      <FadeUp>
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <h3 className="text-3xl font-instrument-serif text-[var(--color-text-primary)]">Gallery</h3>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, idx) => (
          <FadeUp key={idx} delay={idx * 0.1}>
            <div
              className={`relative bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl overflow-hidden group ${
                img.colSpan || "col-span-1"
              } ${
                img.aspectRatio || (img.featured === true || img.featured === 'mobile' ? "aspect-[9/19] max-w-[280px] mx-auto" : "aspect-[4/3]")
              }`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                quality={90}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:opacity-100 opacity-90 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-background)]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0 text-sm font-medium text-[var(--color-text-primary)] drop-shadow-md pointer-events-none">
                {img.caption || img.alt}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
