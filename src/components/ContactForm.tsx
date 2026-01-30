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

      {/* Type of inquiry – segmented control + contextual guidance */}
      <div>
        <label id="inquiry-type-label" className="block text-sm font-medium text-[var(--foreground)]">
          Type of inquiry
        </label>
        <input type="hidden" name="inquiryType" value={inquiryType} />
        <div
          className="mt-2 segmented-control segmented-control--form"
          role="group"
          aria-labelledby="inquiry-type-label"
        >
          {INQUIRY_TYPES.map(({ value, label }) => (
            <button
              key={value}
              type="button"
              onClick={() => setInquiryType(value)}
              aria-pressed={inquiryType === value}
              aria-label={label}
            >
              {label}
            </button>
          ))}
        </div>
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
          className="form-field mt-2"
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
          className="form-field mt-2"
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
          className="form-field mt-2"
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
          className="form-field mt-2"
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
          className="form-field mt-2"
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
          className="form-field form-field-textarea mt-2"
          placeholder="Your message"
        />
      </div>

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
