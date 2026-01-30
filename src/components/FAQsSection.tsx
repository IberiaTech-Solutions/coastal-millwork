"use client";

import { useState, useMemo } from "react";
import FAQItem from "@/components/FAQItem";

export type FAQEntry = {
  q: string;
  a: string;
  list?: string[];
};

export type FAQGroup = {
  title: string;
  faqs: FAQEntry[];
};

type FAQsSectionProps = {
  groups: FAQGroup[];
};

function matchesSearch(entry: FAQEntry, query: string): boolean {
  const lower = query.toLowerCase().trim();
  if (!lower) return true;
  const text = [entry.q, entry.a, ...(entry.list ?? [])].join(" ").toLowerCase();
  return lower.split(/\s+/).every((word) => text.includes(word));
}

export default function FAQsSection({ groups }: FAQsSectionProps) {
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return groups;
    return groups
      .map((group) => ({
        ...group,
        faqs: group.faqs.filter((faq) => matchesSearch(faq, search)),
      }))
      .filter((group) => group.faqs.length > 0);
  }, [groups, search]);

  return (
    <section className="border-b border-[var(--border)] bg-subtle px-4 py-20 sm:py-28" aria-label="FAQ by topic">
      <div className="mx-auto max-w-3xl">
        <div className="mb-12 sm:mb-14">
          <label htmlFor="faq-search" className="sr-only">
            Search FAQs
          </label>
          <input
            id="faq-search"
            type="search"
            placeholder="Search FAQs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="input-underline w-full max-w-xs"
            aria-label="Search FAQs"
          />
        </div>
        <div className="space-y-24">
          {filtered.map((group) => (
            <div key={group.title} className="faq-group">
              <header className="faq-group-header">
                <h2 className="faq-group-title">{group.title}</h2>
                <hr className="rule-design rule-design--thick mt-3 mb-0" aria-hidden />
              </header>
              <div className="faq-group-list">
                {group.faqs.map((faq) => (
                  <FAQItem
                    key={faq.q}
                    question={faq.q}
                    answer={faq.a}
                    list={faq.list}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {filtered.length === 0 && (
          <p className="py-12 text-center text-sm text-[var(--muted)]">
            No FAQs match your search.
          </p>
        )}
      </div>
    </section>
  );
}
