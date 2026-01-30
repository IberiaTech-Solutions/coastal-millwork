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
    <figure className="card-float group flex flex-col overflow-hidden rounded-lg">
      <div
        className={`relative w-full overflow-hidden aspect-[4/3] ${
          fullWidthImage ? "flex justify-center items-start bg-white" : "bg-[var(--border)]"
        }`}
      >
        {showImage ? (
          <>
            {fullWidthImage ? (
              <ImageReveal className="h-full w-full flex justify-center items-start bg-white">
                {/* Same height as other cards: image at top, white bg */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image}
                  alt={name}
                  className="max-h-full max-w-full w-auto h-auto object-contain object-top transition group-hover:scale-105"
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
                  className={`h-full w-full object-cover transition group-hover:scale-105 ${objectPosition === "top" ? "object-top" : "object-center"}`}
                  onError={() => setImageError(true)}
                />
              </ImageReveal>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent pt-12 pb-3 px-3 text-left">
              <figcaption className="text-sm font-medium text-white drop-shadow">
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
