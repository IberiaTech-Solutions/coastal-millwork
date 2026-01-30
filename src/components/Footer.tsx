import Link from "next/link";
import Image from "next/image";
import Certifications from "@/components/Certifications";

export default function Footer() {
  return (
    <footer className="bg-[var(--bg-paper)] text-[var(--foreground)]">
      {/* Certifications – prominent band */}
      <div className="border-b border-[var(--border)] px-4 py-12 sm:py-16">
        <div className="mx-auto max-w-6xl">
          <Certifications title="Certifications & affiliations" />
        </div>
      </div>

      {/* Main footer content */}
      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-8 lg:py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          <div>
            <Link href="/" className="inline-block" aria-label="Coastal Millwork and Supply – Home">
              <Image
                src="/logo_CMS.png"
                alt="Coastal Millwork and Supply"
                width={200}
                height={67}
                className="h-12 w-auto object-contain object-left sm:h-14"
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
              An award-winning, non-traditional, full-service millwork contractor. An active member of the Architectural Woodwork Institute. AWI-QCP Premium Certified fabricator and installer.
            </p>
          </div>
          <div>
            <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
              Contact
            </h3>
            <p className="mt-5 text-sm text-[var(--foreground)]">
              1025 W 5th N St<br />
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

      {/* Closing statement – end memorably */}
      <div className="border-t border-[var(--border)] px-4 py-10 sm:py-12">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium leading-relaxed text-[var(--foreground)]/90 sm:text-base">
            We are committed to &ldquo;not being the concern&rdquo; for any General Contractor or Design Team.
          </p>
          <Link
            href="/contact"
            className="mt-4 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
          >
            Get in touch →
          </Link>
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
