"use client";

import Image from "next/image";
import { useState, useCallback } from "react";

interface CarouselImage {
  src: string;
  alt: string;
  caption?: string;
}

export function ImageCarousel({ images }: { images: CarouselImage[] }) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(
    () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)),
    [images.length],
  );
  const next = useCallback(
    () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)),
    [images.length],
  );

  return (
    <div className="group relative">
      <Image
        src={images[current].src}
        alt={images[current].alt}
        width={600}
        height={400}
        className="h-48 w-full object-cover transition-opacity duration-300"
        unoptimized
      />

      {/* Caption */}
      {images[current].caption && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-6 pt-8">
          <p className="text-xs font-medium text-white/90">
            {images[current].caption}
          </p>
        </div>
      )}

      {/* Arrows — visible on hover */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover:opacity-100"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-1.5 text-white opacity-0 transition-opacity hover:bg-black/70 group-hover:opacity-100"
      >
        <svg
          className="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              i === current
                ? "w-4 bg-white"
                : "w-1.5 bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
