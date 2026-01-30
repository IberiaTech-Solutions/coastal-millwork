"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ROTATE_INTERVAL_MS = 5000;

type HeroProps = {
  taglines: string[];
  images: string[];
  subtitle?: string;
  /** ID of the element to scroll to when the down arrow is clicked (e.g. "featured") */
  scrollToId?: string;
};

export default function Hero({ taglines, images, subtitle, scrollToId = "featured" }: HeroProps) {
  const [lineIndex, setLineIndex] = useState(0);
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const lineTimer = setInterval(() => {
      setLineIndex((i) => (i + 1) % taglines.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(lineTimer);
  }, [taglines.length]);

  useEffect(() => {
    if (images.length <= 1) return;
    const imageTimer = setInterval(() => {
      setImageIndex((i) => (i + 1) % images.length);
    }, ROTATE_INTERVAL_MS);
    return () => clearInterval(imageTimer);
  }, [images.length]);

  const handleScrollDown = () => {
    const el = document.getElementById(scrollToId);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="slideshow"
      className="relative h-[calc(100vh-120px)] w-full overflow-hidden border-b border-[var(--border)] min-h-[280px]"
      style={{ height: "calc(100dvh - 120px)" }}
      aria-label="Hero slideshow"
    >
      {/* Background images – fill section height */}
      <div className="absolute inset-0 bg-[var(--background)]">
        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === imageIndex ? 1 : 0 }}
          >
            <div className="relative h-full w-full">
              <Image
                src={src}
                alt=""
                fill
                className="object-cover object-center"
                sizes="100vw"
                priority={i === 0}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dark overlay for text contrast */}
      <div className="absolute inset-0 bg-black/50" aria-hidden />

      {/* Content – centered in viewport */}
      <div className="relative flex h-full flex-col justify-center px-4 py-24 text-center">
        <div className="mx-auto max-w-4xl">
          {subtitle && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/90 sm:text-sm">
              {subtitle}
            </p>
          )}
          <div className="mt-6 min-h-[4.5rem] sm:min-h-[5rem] lg:min-h-[6rem]">
            <h1
              key={lineIndex}
              className="animate-fade-in text-3xl font-semibold leading-tight tracking-tight text-white drop-shadow-md sm:text-4xl lg:text-5xl lg:leading-[1.15]"
            >
              {taglines[lineIndex]}
            </h1>
          </div>
        </div>
      </div>

      {/* Bouncy down arrow – scroll to next section */}
      {scrollToId && (
        <button
          type="button"
          onClick={handleScrollDown}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/90 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent rounded-full p-2"
          aria-label={`Scroll to next section`}
        >
          <span className="animate-bounce-down text-3xl leading-none" aria-hidden>
            ↓
          </span>
        </button>
      )}
    </section>
  );
}
