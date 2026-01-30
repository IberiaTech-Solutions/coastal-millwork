const HIGHLIGHTS = [
  "Largest Architectural Design Engineering Staff in the Southeast",
  "Focusing On Premium, High-Expectation Commercial Projects",
  "Specializing In Large-Scope Projects … Up to $20 Million in Contract Value",
  "Providing a Complete Scope of Wood, Laminates, Finishes, Decorative Metals & Glass, Polymers, and Stone Packages",
  "Complete Design, Development and Construction Integration Consulting",
  "Highly Proactive, Collaborative Driven, Project Design & Management Protocols",
  "AWI-QCP Premium Certified – All Fabrication and Installation QSIs",
];

export default function MapsPage() {
  return (
    <div>
      {/* Hero – same pattern as other pages */}
      <section className="border-b border-[var(--border)] bg-intro px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-with-rule">Location</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl">
            Map & Directions
          </h1>
        </div>
      </section>

      {/* Framing sentence – statement of reach */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-10 sm:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-base font-medium leading-relaxed text-[var(--foreground)] sm:text-lg">
            Based in Summerville, serving projects throughout the Southeast.
          </p>
          <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
            Our fabrication and engineering teams operate from our Summerville facility.
          </p>
        </div>
      </section>

      {/* Address, contact, visit note */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-paper)] px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="section-label text-[var(--foreground)]/90">Address</h2>
          <p className="mt-3 text-[var(--foreground)] leading-relaxed">
            1025 W 5th N St<br />
            Summerville, SC 29483
          </p>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Phone: <a href="tel:8438739192" className="font-medium text-[var(--accent)] hover:underline">843.873.9192</a>
            {" · "}
            Fax: 843.873.9296
          </p>
          <p className="mt-6 text-xs font-medium text-[var(--muted)]">
            Deliveries and site visits by appointment. Please contact our team before visiting the facility.
          </p>
        </div>
      </section>

      {/* Directions – map de-emphasized (padding, reduced contrast) */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-14 sm:py-20">
        <div className="mx-auto max-w-2xl">
          <h2 className="section-label text-[var(--foreground)]/90">Directions</h2>
          <p className="mt-3 text-sm text-[var(--muted)]">
            <a
              href="https://www.google.com/maps/search/1025+W+5th+N+St+Summerville+SC+29483"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--accent)] hover:underline"
            >
              Open in Google Maps →
            </a>
          </p>
          <div className="mt-8 rounded-lg border border-[var(--border)]/80 bg-[var(--border)]/30 p-4 sm:p-6">
            <div className="aspect-video w-full overflow-hidden rounded-md bg-[var(--border)]/50">
              <iframe
                title="Map: 1025 W 5th N St, Summerville, SC 29483"
                src="https://maps.google.com/maps?q=1025+W+5th+N+St+Summerville+SC+29483&z=15&output=embed"
                className="h-full w-full border-0"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl border-t border-[var(--border)] px-4 py-14 pb-20 sm:py-16 sm:pb-24">
        <ul className="grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
          {HIGHLIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}