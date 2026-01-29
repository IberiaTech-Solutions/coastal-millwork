"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)]/80 bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        <Link href="/" className="shrink-0" aria-label="Coastal Millwork and Supply – Home">
          <Image
            src="/logo_CMS.png"
            alt="Coastal Millwork and Supply"
            width={240}
            height={80}
            className="h-12 w-auto object-contain object-left sm:h-14"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium tracking-wide text-[var(--muted)] transition hover:text-[var(--foreground)]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center text-[var(--foreground)] lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <nav className="border-t border-[var(--border)] bg-[var(--background)] px-4 py-6 lg:hidden">
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="block py-3 text-lg font-medium text-[var(--foreground)] hover:opacity-70"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
