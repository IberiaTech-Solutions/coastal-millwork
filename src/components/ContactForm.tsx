"use client";

import { useState } from "react";

const INQUIRY_TYPES = [
  { value: "pre-construction", label: "Pre-construction / Budgeting", guidance: "For early project inquiries" },
  { value: "active-project", label: "Active project coordination", guidance: "For project coordination" },
  { value: "general", label: "General inquiries", guidance: "For general questions" },
] as const;

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [inquiryType, setInquiryType] = useState<(typeof INQUIRY_TYPES)[number]["value"]>("pre-construction");
  const selectedGuidance = INQUIRY_TYPES.find((t) => t.value === inquiryType)?.guidance ?? "";

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: wire to Formspree, API route, or server action
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-white/80 p-8 text-center">
        <p className="text-lg font-medium text-[var(--foreground)]">
          Thank you for your message.
        </p>
        <p className="mt-2 text-[var(--muted)]">
          We&apos;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <p className="text-sm text-[var(--muted)]">* Required</p>

      {/* Type of inquiry + contextual guidance */}
      <div>
        <label htmlFor="inquiry-type" className="block text-sm font-medium text-[var(--foreground)]">
          Type of inquiry
        </label>
        <select
          id="inquiry-type"
          name="inquiryType"
          value={inquiryType}
          onChange={(e) => setInquiryType(e.target.value as (typeof INQUIRY_TYPES)[number]["value"])}
          className="mt-1 w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--foreground)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          aria-label="Type of inquiry"
        >
          {INQUIRY_TYPES.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
        {selectedGuidance && (
          <p className="mt-2 text-xs font-medium text-[var(--muted)]">
            {selectedGuidance}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-[var(--foreground)]">
          * Name:
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 text-[var(--foreground)] placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          placeholder="Your name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[var(--foreground)]">
          * Email:
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 text-[var(--foreground)] placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-[var(--foreground)]">
          Phone:
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          inputMode="numeric"
          pattern="[0-9]{10}"
          maxLength={10}
          className="mt-1 w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 text-[var(--foreground)] placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          placeholder="10 digits only (no hyphens or braces)"
        />
        <p className="mt-1 text-xs text-[var(--muted)]">
          10 digits only (no hyphens or braces)
        </p>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-[var(--foreground)]">
          Company:
        </label>
        <input
          id="company"
          name="company"
          type="text"
          className="mt-1 w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 text-[var(--foreground)] placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          placeholder="Name of business or organization"
        />
      </div>

      <div>
        <label htmlFor="subject" className="block text-sm font-medium text-[var(--foreground)]">
          * Subject:
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          required
          className="mt-1 w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 text-[var(--foreground)] placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          placeholder="Subject"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-[var(--foreground)]">
          * Message:
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="mt-1 w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 text-[var(--foreground)] placeholder:text-[var(--muted)]/70 focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)]"
          placeholder="Your message"
        />
      </div>

      <p className="text-xs leading-relaxed text-[var(--muted)]">
        Inquiries go directly to our project team. We respond within one business day.
      </p>
      <p className="text-xs text-[var(--muted)]">
        Disclaimer: Under no circumstances will your information ever be given to or sold to any other individual, business, or entity.
      </p>

      <button
        type="submit"
        className="rounded-md bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[var(--accent-hover)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2"
      >
        Send message
      </button>

    </form>
  );
}
