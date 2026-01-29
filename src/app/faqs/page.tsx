const FAQS = [
  {
    q: "What size projects do you specialize in?",
    a: "CMS provide full service contracting for projects ranging from $5,000.00 to $4.5 million in size. CMS has successfully completed projects over $3.5 million and dozens in the $1.5 to $2.5 million range. Managing the logistics and scope of large projects is our area of expertise.",
  },
  {
    q: "What geographic region does Coastal Millwork operate?",
    a: "While we don't like to limit any location, but our primary area of operation is all of South Carolina, Northern and Eastern Georgia, and Southern North Carolina. However, we have provided services from New York to Colorado pending the project.",
  },
  {
    q: "What is meant by \"full service\"?",
    a: "CMS has a very professional staff of educated and experienced employees. We offer the full range of support starting with design assist/build engineering through installation.",
  },
  {
    q: "Is CMS commercial construction only?",
    a: "Yes. CMS operates only within the commercial market with some cross over for assisted living facilities and long-term care projects or similar.",
  },
  {
    q: "What are your certifications?",
    a: "CMS is certified by following entities:",
    list: [
      "AWI-QCP Premium certification in all QSIs",
      "FCS Chain of Custody certification",
      "Multiple staff members are LEED AP certified",
    ],
  },
  {
    q: "What is your bond rate?",
    a: "CMS has a very high bond ability index, while over $5 million at any one time and a bond rate of 2.5%.",
  },
];

const HIGHLIGHTS = [
  "Largest Architectural Design Engineering Staff in the Southeast",
  "Focusing On Premium, High-Expectation Commercial Projects",
  "Specializing In Large-Scope Projects … Up to $20 Million in Contract Value",
  "Providing a Complete Scope of Wood, Laminates, Finishes, Decorative Metals & Glass, Polymers, and Stone Packages",
  "Complete Design, Development and Construction Integration Consulting",
  "Highly Proactive, Collaborative Driven, Project Design & Management Protocols",
  "AWI-QCP Premium Certified – All Fabrication and Installation QSIs",
];

export default function FAQsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-[var(--foreground)]">Frequently Asked Questions</h1>

      <div className="mt-10 space-y-10">
        {FAQS.map((faq) => (
          <article key={faq.q} className="border-b border-[var(--border)] pb-10 last:border-0 last:pb-0">
            <h2 className="text-lg font-semibold text-[var(--foreground)]">
              {faq.q}
            </h2>
            <div className="mt-3 text-[var(--muted)] leading-relaxed">
              <p>{faq.a}</p>
              {"list" in faq && faq.list && (
                <ul className="mt-3 list-disc space-y-1 pl-6">
                  {faq.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </article>
        ))}
      </div>

      <section className="mt-14 border-t border-[var(--border)] pt-12">
        <ul className="grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
