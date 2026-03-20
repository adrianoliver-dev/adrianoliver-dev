import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string; // Optional to avoid build errors from legacy pages
  featured?: boolean;
  // Temporary: Allow legacy props to avoid build errors from page files
  colSpan?: string;
  aspectRatio?: string;
}

interface ProjectGalleryProps {
  images: GalleryImage[];
  className?: string;
}

export default function ProjectGallery({ images, className = "" }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <section className={`py-24 px-6 lg:px-12 max-w-7xl mx-auto ${className}`}>
      <FadeUp>
        <div className="mb-12">
          <h3 className="text-3xl font-instrument-serif text-[var(--color-text-primary)]">
            Project <span className="italic opacity-60">Gallery</span>
          </h3>
        </div>
      </FadeUp>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {images.map((img, idx) => {
          let colSpan = "col-span-1";
          
          // Logic: 
          // 0, 1 = col-span-1
          // 2+ = col-span-2 if featured, else col-span-1
          // Last image if total count is odd = always col-span-2
          const isLast = idx === images.length - 1;
          const isOddTotal = images.length % 2 !== 0;

          if (isLast && isOddTotal) {
            colSpan = "md:col-span-2";
          } else if (idx >= 2 && img.featured) {
            colSpan = "md:col-span-2";
          }

          return (
            <FadeUp key={idx} delay={idx * 0.08} className={colSpan}>
              <div className="group relative overflow-hidden rounded-md border border-[var(--color-border)] aspect-video">
                {/* Image layer */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 80vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay - CSS only */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease pointer-events-none"
                  style={{ background: 'linear-gradient(transparent 40%, rgba(12,12,12,0.82))' }}
                />

                {/* Caption Reveal - CSS transitions */}
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-250 ease-out delay-50 pointer-events-none">
                  {/* Amber accent line */}
                  <div className="w-6 h-px mb-2 bg-[var(--color-accent)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200 ease" />
                  
                  {/* Caption text */}
                  <p className="font-sans text-[13px] text-[var(--color-text-primary)] line-clamp-2">
                    {img.caption || img.alt}
                  </p>
                </div>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
