"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const ROTATE_INTERVAL_MS = 5000;

type HeroProps = {
  taglines: string[];
  images: string[];
  /** Small caps eyebrow above the headline (e.g. location or certification). */
  subtitle?: string;
  /** Single powerful metric line below the headline — "this is who we are." */
  metric?: string;
  /** ID of the element to scroll to when the down arrow is clicked. */
  scrollToId?: string;
};

const DEFAULT_METRIC = "800+ architectural projects · 20+ years · AWI-QCP Premium Certified";

export default function Hero({
  taglines,
  images,
  subtitle,
  metric = DEFAULT_METRIC,
  scrollToId = "featured",
}: HeroProps) {
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
      className="relative min-h-[320px] w-full overflow-hidden border-b border-[var(--border)]"
      style={{ minHeight: "calc(100dvh - 100px)" }}
      aria-label="Hero"
    >
      {/* Background images – fill section, very slow pan */}
      <div className="absolute inset-0 bg-[var(--background)]">
        {images.map((src, i) => (
          <div
            key={src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === imageIndex ? 1 : 0 }}
          >
            <div className="hero-bg-pan relative h-full w-full">
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

      {/* Subtle grain overlay – depth, not noise */}
      <div className="hero-grain" aria-hidden />

      {/* Content – ONE line dominant, secondary text reduced */}
      <div className="relative flex h-full flex-col justify-center px-4 py-28 text-center">
        <div className="hero-content-load mx-auto max-w-4xl">
          {subtitle && (
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/85 sm:text-[10px]">
              {subtitle}
            </p>
          )}
          <div className="mt-4 min-h-[3.5rem] sm:min-h-[4.5rem] lg:min-h-[5.5rem]">
            <h1
              key={lineIndex}
              className="animate-fade-in text-4xl font-bold leading-[1.06] tracking-tight text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.4)] sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[4.25rem]"
            >
              {taglines[lineIndex]}
            </h1>
          </div>
          <p className="hero-data-rail mt-10 text-xs font-medium tracking-[0.14em] text-white/85 sm:mt-12 lg:mt-14">
            {metric}
          </p>
        </div>
      </div>

      {/* Scroll cue */}
      {scrollToId && (
        <button
          type="button"
          onClick={handleScrollDown}
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 rounded-full p-2 text-white/90 transition hover:text-white focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent"
          aria-label="Scroll to next section"
        >
          <span className="animate-bounce-down text-3xl leading-none" aria-hidden>
            ↓
          </span>
        </button>
      )}
    </section>
  );
}
