import Link from "next/link";
import ContactForm from "@/components/ContactForm";

const HIGHLIGHTS = [
  "Largest Architectural Design Engineering Staff in the Southeast",
  "Focusing On Premium, High-Expectation Commercial Projects",
  "Specializing In Large-Scope Projects … Up to $20 Million in Contract Value",
  "Providing a Complete Scope of Wood, Laminates, Finishes, Decorative Metals & Glass, Polymers, and Stone Packages",
  "Complete Design, Development and Construction Integration Consulting",
  "Highly Proactive, Collaborative Driven, Project Design & Management Protocols",
  "AWI-QCP Premium Certified – All Fabrication and Installation QSIs",
];

export default function ContactPage() {
  return (
    <div>
      {/* Hero – same pattern as other pages */}
      <section className="border-b border-[var(--border)] bg-intro px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-with-rule">Contact</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl">
            When and why to reach us
          </h1>
        </div>
      </section>

      {/* Context before form – qualify without rejecting */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-medium leading-relaxed text-[var(--foreground)] sm:text-lg">
            We typically engage during pre-construction and early design phases.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
            Early coordination helps reduce field issues and schedule risk.
          </p>
        </div>
      </section>

      {/* Form – slight background contrast, more whitespace */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-paper)] px-4 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl">
          <div className="rounded-lg border border-[var(--border)] bg-white px-6 py-8 shadow-sm sm:px-8 sm:py-10">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl border-t border-[var(--border)] px-4 pt-14 pb-16 sm:pt-16 sm:pb-20">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">Address &amp; phone</h2>
        <div className="mt-4 space-y-2 text-[var(--muted)]">
          <p>
            <strong className="text-[var(--foreground)]">Address</strong><br />
            1025 W 5th N St<br />
            Summerville, SC 29483
          </p>
          <p>
            <strong className="text-[var(--foreground)]">Phone</strong><br />
            <a href="tel:8438739192" className="hover:text-[var(--accent)]">843.873.9192</a>
          </p>
          <p>
            <strong className="text-[var(--foreground)]">Fax</strong><br />
            843.873.9296
          </p>
        </div>
      </section>

      <section id="maps" className="mx-auto max-w-3xl mt-12 scroll-mt-24 px-4">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">Maps / Directions</h2>
        <p className="mt-2 text-[var(--muted)]">
          <a
            href="https://www.google.com/maps/search/1025+W+5th+N+Street+Summerville+SC+29483"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            Open in Google Maps →
          </a>
          {" · "}
          <Link href="/maps" className="font-medium text-[var(--accent)] hover:underline">
            Map/Directions page →
          </Link>
        </p>
        <div className="mt-4 aspect-video w-full max-w-2xl rounded-lg bg-[var(--border)] flex items-center justify-center text-sm text-[var(--muted)]">
          [ Map embed or directions ]
        </div>
      </section>

      <section className="mx-auto max-w-3xl border-t border-[var(--border)] px-4 pt-14 pb-16 sm:pb-20">
        <ul className="grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
