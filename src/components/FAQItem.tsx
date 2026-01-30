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
    <article className="faq-item">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="faq-item-trigger"
        aria-expanded={open}
      >
        <h3 className="faq-item-question">{question}</h3>
        <span
          className="faq-item-icon"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
          aria-hidden
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
            <path d="M2.5 4.5L6 8L9.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>
      <div
        className="faq-item-panel"
        style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
        aria-hidden={!open}
      >
        <div className="overflow-hidden">
          <div className="faq-item-content">
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
