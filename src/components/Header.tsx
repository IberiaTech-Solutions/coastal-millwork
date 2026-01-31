"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { href: "/about", label: "About" },
  { href: "/team", label: "Team" },
  { href: "/products", label: "Products" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/faqs", label: "FAQs" },
  { href: "/contact", label: "Contact" },
  { href: "/maps", label: "Maps / Directions" },
];

const SCROLL_HIDE_THRESHOLD = 60;

export default function Header() {
  const pathname = usePathname();
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
        style={{ maxHeight: topBarHidden ? 0 : 40, opacity: topBarHidden ? 0 : 1 }}
      >
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-4 gap-y-1.5 px-4 py-1.5 text-xs tracking-tight text-[var(--muted)] sm:text-[11px] lg:px-8">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
            <a href="/maps" className="hover:text-[var(--foreground)]">
              1025 W 5th N St, Summerville, SC 29483
            </a>
            <span className="hidden sm:inline" aria-hidden>·</span>
            <span className="flex items-center gap-x-2">
              <a href="tel:+18438739192" className="hover:text-[var(--foreground)]">Ph: 843.873.9192</a>
              <span className="hidden sm:inline">Fax: 843.873.9296</span>
            </span>
          </div>
          <p className="hidden text-[var(--foreground)]/80 md:block">
            Award-winning, full-service millwork contractor · AWI-QCP Premium Certified
          </p>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-2.5 lg:px-6">
        <Link href="/" className="shrink-0" aria-label="Coastal Millwork and Supply – Home">
          <Image
            src="/logo_CMS.png"
            alt="Coastal Millwork and Supply"
            width={280}
            height={93}
            className="h-16 w-auto object-contain object-left sm:h-20"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href || (href !== "/" && pathname?.startsWith(href));
            return (
              <Link
                key={href}
                href={href}
                className={`pb-0.5 text-sm font-medium tracking-[0.05em] transition hover:text-[var(--foreground)] ${
                  isActive ? "border-b border-[var(--foreground)]/30 text-[var(--foreground)]" : "text-[var(--muted)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="flex h-14 w-14 items-center justify-center text-[var(--foreground)] lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="text-3xl">{menuOpen ? "✕" : "☰"}</span>
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
