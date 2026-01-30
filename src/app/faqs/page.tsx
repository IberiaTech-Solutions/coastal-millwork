import FAQsSection from "@/components/FAQsSection";

const FAQ_GROUPS = [
  {
    title: "Working With CMS",
    faqs: [
      {
        q: "What geographic region does Coastal Millwork operate?",
        a: "While we don't like to limit any location, but our primary area of operation is all of South Carolina, Northern and Eastern Georgia, and Southern North Carolina. However, we have provided services from New York to Colorado pending the project.",
      },
      {
        q: "What is meant by \"full service\"?",
        a: "CMS has a very professional staff of educated and experienced employees. We offer the full range of support starting with design assist/build engineering through installation. Early involvement and coordination from design through install is how we reduce risk and keep projects on track.",
      },
      {
        q: "Is CMS commercial construction only?",
        a: "Yes. CMS operates only within the commercial market with some cross over for assisted living facilities and long-term care projects or similar.",
      },
    ],
  },
  {
    title: "Process",
    faqs: [
      {
        q: "What size projects do you specialize in?",
        a: "CMS provide full service contracting for projects ranging from $5,000.00 to $4.5 million in size. CMS has successfully completed projects over $3.5 million and dozens in the $1.5 to $2.5 million range. Managing the logistics and scope of large projects is our area of expertise. We emphasize early coordination to reduce schedule and field risk.",
      },
    ],
  },
  {
    title: "Certifications",
    faqs: [
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
    ],
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
    <div>
      {/* Hero – thoughtful, not defensive */}
      <section className="border-b border-[var(--border)] bg-intro px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-with-rule">FAQs</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-4 text-[var(--muted)] text-base sm:text-lg">
            Answers to common questions—so you can focus on the project.
          </p>
        </div>
      </section>

      {/* Intro – inviting, not defensive */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-12 sm:py-14">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            Working with us, our process, and our credentials.
          </p>
        </div>
      </section>

      {/* FAQ groups – search, accordions, more spacing between groups */}
      <FAQsSection groups={FAQ_GROUPS} />

      <section className="mx-auto max-w-3xl border-t border-[var(--border)] px-4 py-18 pb-24 sm:py-20 sm:pb-28">
        <ul className="grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}