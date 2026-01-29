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
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-[var(--foreground)]">Contact Us</h1>

      <p className="mt-6 text-[var(--muted)] leading-relaxed">
        Please fill out the brief form below and expect a response within one business day. We thank you for considering Coastal Millwork and Supply LLC.
      </p>

      <div className="mt-10">
        <ContactForm />
      </div>

      <section className="mt-14 border-t border-[var(--border)] pt-12">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">Address &amp; phone</h2>
        <div className="mt-4 space-y-2 text-[var(--muted)]">
          <p>
            <strong className="text-[var(--foreground)]">Address</strong><br />
            1025 W 5th N Street<br />
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

      <section id="maps" className="mt-10 scroll-mt-24">
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
