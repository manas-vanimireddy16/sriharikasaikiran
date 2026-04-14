import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [gallery1, gallery2, gallery3, gallery4, gallery5, gallery6];
const captions = [
  "Together forever",
  "A walk in the garden",
  "Beautiful mehndi",
  "Hand in hand",
  "The ceremony awaits",
  "Our special day",
];

const GallerySection = () => {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
  const next = () => setLightboxIndex((i) => (i !== null ? (i + 1) % images.length : null));

  return (
    <section id="gallery" className="px-5 py-10">
      <AnimatedSection>
        <p className="ornament text-lg mb-2">✦</p>
        <h2 className="section-title text-center mb-2">Our Story in Frames</h2>
        <p className="text-center text-xs text-muted-foreground mb-6">
          A few quiet moments together
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-2 gap-3">
        {images.map((src, i) => (
          <AnimatedSection key={i} delay={i * 100}>
            <button
              onClick={() => openLightbox(i)}
              className="group relative w-full overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-300"
              style={{ aspectRatio: "1/1" }}
            >
              <img
                src={src}
                alt={captions[i]}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </button>
          </AnimatedSection>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center animate-fade-slide-up"
          onClick={closeLightbox}
        >
          <button
            onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
            className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
          >
            <X className="h-6 w-6" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10"
          >
            <ChevronRight className="h-8 w-8" />
          </button>
          <div className="max-w-[90vw] max-h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <img
              src={images[lightboxIndex]}
              alt={captions[lightboxIndex]}
              className="max-w-full max-h-[75vh] object-contain rounded-xl"
            />
            <p className="text-center text-white/60 text-sm mt-3 font-serif">
              {captions[lightboxIndex]}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
