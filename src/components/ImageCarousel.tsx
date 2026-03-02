import { useState, useEffect } from 'react';
import './ImageCarousel.css';

interface ImageCarouselProps {
  images: string[];
  /** Optional captions per image (same length as images or empty) */
  captions?: string[];
  /** Auto-advance interval in ms; 0 to disable */
  interval?: number;
  /** Aspect ratio for slide area, e.g. "16/9" or "4/3" */
  ratio?: string;
}

export default function ImageCarousel({ images, captions = [], interval = 5000, ratio = '4/3' }: ImageCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (interval <= 0 || images.length <= 1) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  if (!images.length) return null;

  const goPrev = () => setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  const goNext = () => setActiveIndex((prev) => (prev + 1) % images.length);

  return (
    <section className="image-carousel-section" aria-label="Awards carousel">
      <div className="image-carousel-container">
        <div className="image-carousel-wrapper">
          <button
            type="button"
            className="image-carousel-btn image-carousel-btn-prev"
            onClick={goPrev}
            aria-label="Previous slide"
          >
            ‹
          </button>
          <div className="image-carousel-track" style={{ aspectRatio: ratio } as React.CSSProperties}>
            {images.map((src, idx) => (
              <div
                key={idx}
                className={`image-carousel-slide ${idx === activeIndex ? 'active' : ''}`}
              >
                <img src={src} alt={captions[idx] || `Slide ${idx + 1}`} loading="lazy" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                {captions[idx] && (
                  <span className="image-carousel-caption">{captions[idx]}</span>
                )}
              </div>
            ))}
          </div>
          <button
            type="button"
            className="image-carousel-btn image-carousel-btn-next"
            onClick={goNext}
            aria-label="Next slide"
          >
            ›
          </button>
        </div>
        <div className="image-carousel-dots">
          {images.map((_, idx) => (
            <button
              key={idx}
              type="button"
              className={`image-carousel-dot ${idx === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
