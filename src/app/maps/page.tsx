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
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-semibold text-[var(--foreground)]">Map/Directions</h1>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">Address</h2>
        <p className="mt-3 text-[var(--muted)] leading-relaxed">
          1025 W 5th N Street<br />
          Summerville, SC 29483
        </p>
        <p className="mt-4 text-[var(--muted)]">
          Phone: <a href="tel:8438739192" className="font-medium text-[var(--accent)] hover:underline">843.873.9192</a>
          <br />
          Fax: 843.873.9296
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-xl font-semibold text-[var(--foreground)]">Directions</h2>
        <p className="mt-3 text-[var(--muted)]">
          <a
            href="https://www.google.com/maps/search/1025+W+5th+N+Street+Summerville+SC+29483"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-[var(--accent)] hover:underline"
          >
            Open in Google Maps →
          </a>
        </p>
        <div className="mt-6 aspect-video w-full max-w-2xl rounded-lg bg-[var(--border)] flex items-center justify-center text-sm text-[var(--muted)]">
          [ Map embed ]
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
