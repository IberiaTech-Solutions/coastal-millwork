import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-6xl px-4 py-16 lg:px-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
              Coastal Millwork & Supply
            </h3>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
              Award-winning, AWI QCP premium-certified, full-service commercial interior architectural woodwork and adjacent finishes contractor.
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
              Contact
            </h3>
            <p className="mt-4 text-sm text-[var(--foreground)]">
              1025 W 5th N Street<br />
              Summerville, SC 29483
            </p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              <a href="tel:8438739192" className="hover:text-[var(--foreground)]">843.873.9192</a><br />
              Fax 843.873.9296
            </p>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
              Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-[var(--muted)]">
              <li><Link href="/about" className="hover:text-[var(--foreground)]">About</Link></li>
              <li><Link href="/team" className="hover:text-[var(--foreground)]">Team</Link></li>
              <li><Link href="/products" className="hover:text-[var(--foreground)]">Products</Link></li>
              <li><Link href="/services" className="hover:text-[var(--foreground)]">Services</Link></li>
              <li><Link href="/projects" className="hover:text-[var(--foreground)]">Projects</Link></li>
              <li><Link href="/faqs" className="hover:text-[var(--foreground)]">FAQs</Link></li>
              <li><Link href="/contact" className="hover:text-[var(--foreground)]">Contact</Link></li>
              <li><Link href="/maps" className="hover:text-[var(--foreground)]">Maps / Directions</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--muted)]">
              Certifications
            </h3>
            <div className="mt-4 flex flex-wrap gap-3" aria-label="Certification and partner logos">
              <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white border border-[var(--border)]" title="Veteran Owned Business">
                <Image src="/VOB-logo_bw.png" alt="Veteran Owned Business" width={44} height={44} className="object-contain p-1" />
              </span>
              <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white border border-[var(--border)]" title="U.S. Green Building Council LEED">
                <Image src="/LEED-logo_bw.png" alt="LEED" width={44} height={44} className="object-contain p-1" />
              </span>
              <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white border border-[var(--border)]" title="AWI Quality Certification Program">
                <Image src="/QCP-logo_bw.png" alt="AWI Quality Certification Program" width={44} height={44} className="object-contain p-1" />
              </span>
              <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white border border-[var(--border)]" title="Architectural Woodwork Institute">
                <Image src="/AWI-logo_bw.png" alt="Architectural Woodwork Institute" width={44} height={44} className="object-contain p-1" />
              </span>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-[var(--border)] pt-8 text-center text-sm text-[var(--muted)]">
          <p>© 2009–2025 Coastal Millwork and Supply LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
