import ProjectLocationsMap from "@/components/ProjectLocationsMap";

/** Address and map query – single source for links and embeds. */
const ADDRESS = {
  line1: "1025 W 5th N St",
  city: "Summerville",
  state: "SC",
  zip: "29483",
  query: "1025 W 5th N St Summerville SC 29483",
  googleMapsSearch: "1025+W+5th+N+St+Summerville+SC+29483",
};

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
          <p className="mt-4 text-[var(--muted)] text-base sm:text-lg">
            Our facility in Summerville and where we serve.
          </p>
        </div>
      </section>

      {/* Operational footprint – quiet intro panel */}
      <section className="border-b border-[var(--border)] bg-subtle px-4 py-14 sm:py-16" aria-label="Operational footprint">
        <div className="mx-auto max-w-2xl">
          <div className="intro-panel rounded-lg border border-[var(--border-drafting)] bg-[var(--background)] px-5 py-6 sm:px-6 sm:py-7">
            <h2 className="section-label text-[var(--foreground)]/80">Operational footprint</h2>
            <p className="mt-3 text-[0.9375rem] leading-relaxed text-[var(--muted)] sm:text-base">
              Southeast focus South Carolina, Georgia, North Carolina, and beyond. Design, fabrication, and engineering are based at our Summerville facility.
            </p>
          </div>
        </div>
      </section>

      {/* Where we've worked – US map with project locations from projects data – where we’re located in the Southeast */}
      <section className="border-b border-[var(--border)] bg-white px-4 py-16 sm:py-20" aria-label="Where we have worked">
        <div className="mx-auto max-w-4xl">
          <h2 className="section-label text-[var(--foreground)]/90 text-center">Where we&apos;ve worked</h2>
          <p className="mt-2 text-center text-sm text-[var(--muted)]">
            Project locations across the Southeast
          </p>
          <div className="mt-8 overflow-hidden rounded-lg border border-[var(--border-drafting)] bg-[var(--background)] shadow-sm">
            <ProjectLocationsMap />
          </div>
        </div>
      </section>

      {/* Directions – Summerville facility, street map, and Google Maps link */}
      <section className="border-b border-[var(--border)] bg-subtle px-4 py-20 sm:py-28" aria-label="Directions and map">
        <div className="mx-auto max-w-2xl">
          <h2 className="section-label text-[var(--foreground)]/90">Directions</h2>
          <p className="mt-3 text-base leading-relaxed text-[var(--foreground)]/90">
            Our facility is in Summerville, South Carolina. Use the map below to get a sense of our location or open in Google Maps for turn-by-turn directions.
          </p>
          <p className="mt-2 text-sm text-[var(--muted)]">
            Visits and deliveries by appointment only. Please contact our team before visiting the facility.
          </p>
          <p className="mt-4 text-sm text-[var(--muted)]">
            <a
              href={`https://www.google.com/maps/search/${ADDRESS.googleMapsSearch}`}
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
                title={`Map: ${ADDRESS.line1}, ${ADDRESS.city}, ${ADDRESS.state} ${ADDRESS.zip}`}
                src={`https://maps.google.com/maps?q=${ADDRESS.googleMapsSearch}&z=15&output=embed`}
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