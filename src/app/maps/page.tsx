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
      <section className="border-b border-[var(--border)] bg-intro px-4 py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-label section-label-with-rule">Location</p>
          <h1 className="mt-4 text-3xl font-semibold tracking-[-0.025em] text-[var(--foreground)] sm:text-4xl">
            Map & Directions
          </h1>
          <p className="mt-4 text-sm text-[var(--muted)] leading-relaxed">
            Our facility in Summerville—and where we serve.
          </p>
        </div>
      </section>

      {/* Operational footprint – quiet intro panel */}
      <section className="border-b border-[var(--border)] bg-subtle px-4 py-14 sm:py-16" aria-label="Operational footprint">
        <div className="mx-auto max-w-2xl">
          <div className="intro-panel rounded-lg border border-[var(--border-drafting)] bg-[var(--background)] px-5 py-6 sm:px-6 sm:py-7">
            <h2 className="section-label text-[var(--foreground)]/80">Operational footprint</h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--muted)] sm:text-base">
              Southeast focus—South Carolina, Georgia, North Carolina, and beyond. Design, fabrication, and engineering are based at our Summerville facility.
            </p>
          </div>
        </div>
      </section>

      {/* Address, contact, facility usage */}
      <section className="border-b border-[var(--border)] bg-[var(--bg-paper)] px-4 py-18 sm:py-24">
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
          <p className="mt-6 text-sm text-[var(--muted)]">
            Visits and deliveries by appointment only. Please contact our team before visiting the facility.
          </p>
        </div>
      </section>

      {/* Directions – map supports, not dominates; context above, de-emphasized map, more padding */}
      <section className="border-b border-[var(--border)] bg-subtle px-4 py-20 sm:py-28" aria-label="Directions and map">
        <div className="mx-auto max-w-2xl">
          <h2 className="section-label text-[var(--foreground)]/90">Directions</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--foreground)]/90">
            Use the map below to get a sense of our location—or open in Google Maps for turn-by-turn directions.
          </p>
          <p className="mt-4 text-sm text-[var(--muted)]">
            <a
              href="https://www.google.com/maps/search/1025+W+5th+N+St+Summerville+SC+29483"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--accent)] hover:underline"
            >
              Open in Google Maps →
            </a>
          </p>
          <div className="map-wrapper map-embed mt-10">
            <div className="aspect-video w-full max-w-xl mx-auto overflow-hidden rounded-lg border border-[var(--border-drafting)] bg-[var(--border)]/30 shadow-none">
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

      {/* Capabilities at a glance – calmer list */}
      <section className="mx-auto max-w-3xl border-t border-[var(--border)] px-4 py-18 pb-24 sm:py-20 sm:pb-28" aria-label="Capabilities at a glance">
        <h2 className="section-label text-[var(--foreground)]/80">Capabilities at a glance</h2>
        <ul className="mt-4 grid gap-2.5 text-[0.9375rem] leading-relaxed text-[var(--muted)] sm:grid-cols-2 sm:gap-3">
          {HIGHLIGHTS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}