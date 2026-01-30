"use client";

import { useState } from "react";

type FAQItemProps = {
  question: string;
  answer: string;
  list?: string[];
};

export default function FAQItem({ question, answer, list }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="border-b border-[var(--border)] py-6 first:pt-0 last:border-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-start justify-between gap-4 text-left focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/20 focus:ring-offset-2 focus:ring-offset-[var(--background)] rounded"
        aria-expanded={open}
      >
        <h2 className="text-base font-semibold tracking-tight text-[var(--foreground)] sm:text-lg">
          {question}
        </h2>
        <span
          className="shrink-0 text-[var(--muted)] transition-transform duration-200 ease-out"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden
        >
          ▼
        </span>
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-200 ease-out"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <div className="pt-3 text-[var(--muted)] leading-relaxed">
            <p>{answer}</p>
            {list && list.length > 0 && (
              <ul className="mt-3 list-disc space-y-1 pl-6">
                {list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
