"use client";

import { useState } from "react";
import ImageReveal from "@/components/ImageReveal";

type AwardCardProps = {
  name: string;
  image?: string;
  /** When true, same height as other cards (4/3), image centered on white bg */
  fullWidthImage?: boolean;
  /** For fixed-aspect cards: align image to "center" (default) or "top" */
  objectPosition?: "center" | "top";
};

export default function AwardCard({ name, image, fullWidthImage, objectPosition = "center" }: AwardCardProps) {
  const [imageError, setImageError] = useState(false);
  const showImage = image && !imageError;

  return (
    <figure className="award-card group flex flex-col overflow-hidden rounded-lg border border-[var(--border)]/80 bg-white">
      <div
        className={`relative w-full overflow-hidden aspect-[4/3] ${
          fullWidthImage ? "flex justify-center items-start bg-white" : "bg-[var(--border)]/50"
        }`}
      >
        {showImage ? (
          <>
            {fullWidthImage ? (
              <ImageReveal className="h-full w-full flex justify-center items-start bg-white">
                {/* On mobile (1 col): image full card width; on larger screens: centered contain */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={name}
                  className="w-full h-auto max-h-full object-contain object-top opacity-90 transition opacity duration-200 group-hover:opacity-100 sm:w-auto sm:max-w-full"
                  onError={() => setImageError(true)}
                />
              </ImageReveal>
            ) : (
              <ImageReveal className="absolute inset-0 h-full w-full">
                {/* Fixed aspect: image fills card with object-cover */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={name}
                  className={`h-full w-full object-cover opacity-90 transition opacity duration-200 group-hover:opacity-100 ${objectPosition === "top" ? "object-top" : "object-center"}`}
                  onError={() => setImageError(true)}
                />
              </ImageReveal>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent pt-10 pb-3 px-3 text-left">
              <figcaption className="text-xs font-medium text-white/90 tracking-wide sm:text-sm">
                {name}
              </figcaption>
            </div>
          </>
        ) : fullWidthImage ? null : (
          <div className="flex h-full w-full flex-col items-center justify-center px-4 text-center">
            <span className="text-sm font-medium text-[var(--muted)]">
              {name}
            </span>
          </div>
        )}
      </div>
    </figure>
  );
}
