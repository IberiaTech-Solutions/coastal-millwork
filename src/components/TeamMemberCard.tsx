"use client";

import Image from "next/image";
import { useState } from "react";

export type TeamMemberCardProps = {
  name: string;
  title: string;
  image: string;
  blurb: string;
  bio: string;
  certifications?: string;
};

export default function TeamMemberCard({
  name,
  title,
  image,
  blurb,
  bio,
  certifications,
}: TeamMemberCardProps) {
  const [bioOpen, setBioOpen] = useState(false);

  return (
    <article className="team-member-card group/card flex h-full flex-col overflow-hidden rounded-lg border border-[var(--border)] bg-white pt-5 sm:pt-6">
      <div className="team-member-portrait relative mx-auto aspect-square w-full max-w-[160px] overflow-hidden rounded-full bg-[var(--border)] sm:max-w-[180px]">
        <Image
          src={image}
          alt={name}
          width={135}
          height={180}
          className="h-full w-full object-cover object-top"
          sizes="(max-width: 640px) 160px, 180px"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-base font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-lg">
          {name}
        </h3>
        <p className="mt-0.5 text-sm text-[var(--muted)]">
          {title}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-[var(--foreground)]/85 line-clamp-3">
          {blurb}
        </p>
        {certifications && (
          <p className="mt-2 text-xs font-medium uppercase tracking-wider text-[var(--muted)]">
            {certifications}
          </p>
        )}
        {bio && (
          <div className="team-member-bio-wrap mt-auto pt-4">
            <span className="team-member-bio-rule block h-px w-full max-w-12 bg-[var(--line-hairline)] opacity-0 transition-opacity duration-200 group-hover/card:opacity-100" aria-hidden />
            <button
              type="button"
              onClick={() => setBioOpen((o) => !o)}
              className="team-member-bio-trigger mt-3 block text-left text-xs font-medium text-[var(--muted)] opacity-50 transition-opacity duration-200 hover:text-[var(--accent)] hover:underline focus:opacity-100 focus:outline-none focus:underline group-hover/card:opacity-100"
              aria-expanded={bioOpen}
            >
              Full bio
            </button>
            <div
              className="grid transition-[grid-template-rows] duration-300 ease-out"
              style={{ gridTemplateRows: bioOpen ? "1fr" : "0fr" }}
              aria-hidden={!bioOpen}
            >
              <div className="overflow-hidden">
                <p className="mt-3 border-t border-[var(--line-hairline)] pt-3 text-sm leading-relaxed text-[var(--muted)]">
                  {bio}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </article>
  );
}
