import Link from "next/link";
import Image from "next/image";

const CERTIFICATIONS = [
  {
    name: "Veteran Owned Business",
    src: "/VOB-logo_bw.png",
    href: null,
  },
  {
    name: "LEED – U.S. Green Building Council",
    src: "/LEED-logo_bw.png",
    href: "https://www.usgbc.org/leed",
  },
  {
    name: "AWI Quality Certification Program",
    src: "/QCP-logo_bw.png",
    href: "https://awiqcp.org/",
  },
  {
    name: "Architectural Woodwork Institute",
    src: "/AWI-logo_bw.png",
    href: "https://awinet.org/",
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-paper)] text-[var(--foreground)]">
      {/* Certifications – prominent band */}
      <section className="border-b border-[var(--border)] px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <p className="section-label section-label-with-rule text-center">
            Certifications & affiliations
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 sm:gap-12 lg:gap-16">
            {CERTIFICATIONS.map((cert) => {
              const content = (
                <span className="flex flex-col items-center gap-3">
                  <span className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-[var(--border)] bg-white shadow-sm transition hover:shadow-md sm:h-24 sm:w-24">
                    <Image
                      src={cert.src}
                      alt={cert.name}
                      width={80}
                      height={80}
                      className="h-14 w-14 object-contain p-2 sm:h-16 sm:w-16"
                    />
                  </span>
                  <span className="max-w-[140px] text-center text-[11px] leading-tight text-[var(--muted)] sm:max-w-[160px] sm:text-xs">
                    {cert.name}
                  </span>
                </span>
              );
              if (cert.href) {
                return (
                  <a
                    key={cert.name}
                    href={cert.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group focus:outline-none focus:ring-2 focus:ring-[var(--foreground)]/20 focus:ring-offset-2 focus:ring-offset-[var(--bg-paper)] rounded-xl"
                    title={cert.name}
                  >
                    {content}
                  </a>
                );
              }
              return (
                <span key={cert.name} className="rounded-xl" title={cert.name}>
                  {content}
                </span>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main footer content */}
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Coastal Millwork & Supply
            </h3>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              An award-winning, non-traditional, full-service millwork contractor. An active member of the Architectural Woodwork Institute. AWI-QCP Premium Certified fabricator and installer.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Contact
            </h3>
            <p className="mt-5 text-sm text-[var(--foreground)]">
              1025 W 5th N Street<br />
              Summerville, SC 29483
            </p>
            <p className="mt-3 text-sm text-[var(--muted)]">
              Ph: <a href="tel:+18438739192" className="hover:text-[var(--foreground)] transition">843.873.9192</a>
              <br />
              Fax: 843.873.9296
            </p>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Links
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-[var(--muted)] sm:grid-cols-1">
              <li><Link href="/about" className="hover:text-[var(--foreground)] transition">About</Link></li>
              <li><Link href="/team" className="hover:text-[var(--foreground)] transition">Team</Link></li>
              <li><Link href="/products" className="hover:text-[var(--foreground)] transition">Products</Link></li>
              <li><Link href="/services" className="hover:text-[var(--foreground)] transition">Services</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--foreground)] transition">Projects</Link></li>
              <li><Link href="/faqs" className="hover:text-[var(--foreground)] transition">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--foreground)] transition">Contact</Link></li>
              <li><Link href="/maps" className="hover:text-[var(--foreground)] transition">Maps / Directions</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--border)] px-4 py-6">
        <p className="text-center text-xs text-[var(--muted)]">
          © 2009–2025 Coastal Millwork and Supply LLC. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
