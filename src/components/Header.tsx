"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
];

const SCROLL_HIDE_THRESHOLD = 60;

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [topBarHidden, setTopBarHidden] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const hide = typeof window !== "undefined" && window.scrollY > SCROLL_HIDE_THRESHOLD;
      setTopBarHidden(hide);
      document.body.classList.toggle("top-bar-hidden", hide);
    };
    onScroll(); // run once in case we're already scrolled
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.body.classList.remove("top-bar-hidden");
    };
  }, []);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-[var(--border)]/80 bg-[var(--background)]/90 backdrop-blur-md">
      {/* Top bar – hides on scroll */}
      <div
        className="overflow-hidden border-b border-[var(--border)]/60 bg-[var(--background)] transition-[max-height,opacity] duration-300 ease-out"
        style={{ maxHeight: topBarHidden ? 0 : 48, opacity: topBarHidden ? 0 : 1 }}
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-4 py-2 text-xs text-[var(--muted)] lg:px-8">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <a href="/maps" className="hover:text-[var(--foreground)]">
              1025 W 5th N Street, Summerville, SC 29483
            </a>
            <span className="hidden sm:inline" aria-hidden>·</span>
            <span className="flex items-center gap-x-3">
              <a href="tel:+18438739192" className="hover:text-[var(--foreground)]">Ph: 843.873.9192</a>
              <span className="hidden sm:inline">Fax: 843.873.9296</span>
            </span>
          </div>
          <p className="hidden font-medium text-[var(--foreground)]/90 md:block">
            Award-winning, full-service millwork contractor · AWI-QCP Premium Certified
          </p>
        </div>
      </div>
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
