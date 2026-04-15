import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useState } from 'react';

type ImageSliderProps = {
  images: string[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [active, setActive] = useState(0);
  const total = images.length;
  const prev = () => setActive((i) => (i - 1 + total) % total);
  const next = () => setActive((i) => (i + 1) % total);

  return (
    <div
      className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0d0d0d]"
      style={{ aspectRatio: '16/12' }}
    >
      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${active * 100}%)` }}
      >
        {images.map((src, idx) => (
          <div key={idx} className="h-full w-full shrink-0 bg-white/5">
            {src ? (
              <img
                src={src}
                alt={`Slide ${idx + 1}`}
                className="h-full w-full object-cover"
              />
            ) : (
              /* placeholder */
              <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-white/20">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <circle cx="8.5" cy="8.5" r="1.5" />
                  <polyline points="21 15 16 10 5 21" />
                </svg>
                <span className="text-sm">Image {idx + 1}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Prev / Next */}
      {total > 1 && (
        <>
          <button
            type="button"
            onClick={prev}
            className="absolute top-1/2 left-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
            aria-label="Previous slide"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            type="button"
            onClick={next}
            className="absolute top-1/2 right-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur transition hover:bg-black/70"
            aria-label="Next slide"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </>
      )}

      {/* Dots */}
      {total > 1 && (
        <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActive(idx)}
              className={`h-1.5 rounded-full transition-all ${idx === active ? 'w-5 bg-white' : 'w-1.5 bg-white/30'}`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
