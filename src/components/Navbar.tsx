// src/components/Navbar.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function cx(...cls: Array<string | false | null | undefined>) {
  return cls.filter(Boolean).join(" ");
}

// ✅ Korrigierte/vervollständigte Links zu euren Service-Slugs
const services = [
  {
    label: "Softwareentwicklung",
    href: "/services/softwareentwicklung",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" className="text-blue-600">
        <rect x="3" y="5" width="18" height="14" rx="3" fill="#e0e7ff" />
        <path d="M8 9l-3 3 3 3M16 9l3 3-3 3" stroke="#2563eb" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    label: "App-Development",
    href: "/services/app-development",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" className="text-blue-600">
        <rect x="6" y="2" width="12" height="20" rx="3" fill="#e0e7ff" />
        <rect x="9" y="18" width="6" height="2" rx="1" fill="#2563eb" />
        <rect x="9" y="4" width="6" height="10" rx="2" fill="#fff" />
      </svg>
    ),
  },
  {
    label: "Offline-Marketing",
    href: "/services/offline-marketing",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" className="text-blue-600">
        <rect x="2" y="4" width="20" height="6" rx="2" fill="#e0e7ff" />
        <rect x="5" y="12" width="14" height="8" rx="2" fill="#2563eb" />
        <rect x="9" y="2" width="6" height="2" rx="1" fill="#2563eb" />
      </svg>
    ),
  },
  {
    label: "Webdesigning",
    href: "/services/webdesigning",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" className="text-blue-600">
        <circle cx="12" cy="12" r="10" fill="#e0e7ff" />
        <path d="M4 12h16" stroke="#2563eb" strokeWidth="2" />
        <path d="M12 4a16 16 0 0 1 0 16" stroke="#2563eb" strokeWidth="2" />
        <path d="M12 4a16 16 0 0 0 0 16" stroke="#2563eb" strokeWidth="2" />
      </svg>
    ),
  },
  {
    label: "PDF-Form",
    href: "/pdf-form",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" className="text-blue-600">
        <rect x="4" y="2" width="16" height="20" rx="3" fill="#e0e7ff" />
        <rect x="7" y="6" width="10" height="2" rx="1" fill="#2563eb" />
        <rect x="7" y="10" width="10" height="2" rx="1" fill="#2563eb" />
        <rect x="7" y="14" width="6" height="2" rx="1" fill="#2563eb" />
        <rect x="7" y="18" width="4" height="1.5" rx="0.75" fill="#2563eb" />
      </svg>
    ),
  },
  {
    label: "Digitale Transformation",
    href: "/services/digitale-transformation",
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" className="text-blue-600">
        <rect x="4" y="4" width="16" height="16" rx="4" fill="#e0e7ff" />
        <path d="M8 8h8v8H8z" fill="#2563eb" />
        <path d="M12 2v4M12 18v4M2 12h4M18 12h4" stroke="#2563eb" strokeWidth="2" />
      </svg>
    ),
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const linkBase =
    "relative px-3 py-2 text-sm font-medium text-zinc-700 hover:text-zinc-900 transition";
  const activeUnderline =
    "after:absolute after:left-3 after:right-3 after:-bottom-1 after:h-[2px] after:rounded-full after:bg-blue-600 after:content-['']";

  return (
    <header
      className={cx(
        "sticky top-0 z-50 isolate", // 👈 isolate für sauberen Stacking-Context
        "border-b",
        scrolled
          ? "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60"
          : "bg-white/60 backdrop-blur-sm",
      )}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center group" aria-label="Antrieb 2.0 – Startseite">
            <Image
              src="/images/antriebslogo.svg"
              alt="Antrieb 2.0 Logo"
              width={56}
              height={56}
              priority
              className="transition-transform group-hover:scale-105"
            />
          </Link>
        </div>

        {/* Center: Primary nav (desktop) */}
        <div className="hidden md:flex items-center gap-1">
          <Link
            href="/"
            className={cx(linkBase, pathname === "/" && "text-blue-700", pathname === "/" && activeUnderline)}
          >
            Startseite
          </Link>

          {/* Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => {
              if (closeTimeout.current) clearTimeout(closeTimeout.current);
              setServicesOpen(true);
            }}
            onMouseLeave={() => {
              closeTimeout.current = setTimeout(() => setServicesOpen(false), 200);
            }}
          >
            <button
              className={cx(
                linkBase,
                "inline-flex items-center gap-1 rounded-md",
                servicesOpen && "ring-2 ring-blue-200/60",
              )}
              aria-haspopup="menu"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
            >
              <span>Dienstleistungen</span>
              <svg width="16" height="16" viewBox="0 0 24 24" className={cx("transition", servicesOpen && "rotate-180")}>
                <path fill="currentColor" d="M7 10l5 5 5-5z" />
              </svg>
            </button>

            {/* Dropdown panel */}
            <div
              className={cx(
                "absolute left-0 mt-2 w-[320px] rounded-2xl border bg-white shadow-xl p-2",
                "origin-top transition",
                servicesOpen
                  ? "opacity-100 scale-100 pointer-events-auto z-[80]"
                  : "opacity-0 scale-95 pointer-events-none",
              )}
              role="menu"
              onMouseEnter={() => {
                if (closeTimeout.current) clearTimeout(closeTimeout.current);
                setServicesOpen(true);
              }}
              onMouseLeave={() => {
                closeTimeout.current = setTimeout(() => setServicesOpen(false), 200);
              }}
            >
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  onClick={() => setServicesOpen(false)}
                  className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-zinc-50 transition"
                  role="menuitem"
                >
                  <span className="shrink-0 grid place-items-center w-8 h-8 rounded-full bg-zinc-100">
                    {s.icon}
                  </span>
                  <span className="text-sm text-zinc-800">{s.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link
            href="/referenzen"
            className={cx(linkBase, pathname?.startsWith("/referenzen") && activeUnderline)}
          >
            Referenzen
          </Link>
          <Link
            href="/about"
            className={cx(linkBase, pathname?.startsWith("/about") && activeUnderline)}
          >
            Über uns
          </Link>
        </div>

        {/* Right: CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl border px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50 transition"
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.5l-10 6L2 6.5V6Zm0 3.8V18a2 2 0 002 2h16a2 2 0 002-2V9.8l-9.2 5.5a2 2 0 01-2 0L2 9.8Z" />
            </svg>
            Kontakt
          </Link>

          <button
            type="button"
            className={cx(
              "inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white",
              "bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-100 transition",
            )}
            onClick={() => {
              if (typeof window !== "undefined" && window.location.pathname === "/") {
                const trigger = document.querySelector('.hero-search');
                if (trigger) (trigger as HTMLElement).click();
              } else {
                window.location.href = "/#wunsch";
                setTimeout(() => {
                  const trigger = document.querySelector('.hero-search');
                  if (trigger) (trigger as HTMLElement).click();
                }, 400);
              }
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24">
              <path fill="currentColor" d="M7 2a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1Zm12 8H5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1Z"/>
            </svg>
            Wunsch äußern
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg border bg-white active:scale-95 transition"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Menü öffnen"
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path fill="currentColor" d="M18.3 5.7L12 12l6.3 6.3l-1.4 1.4L10.6 13.4L4.3 19.7L2.9 18.3L9.2 12L2.9 5.7L4.3 4.3L10.6 10.6L16.9 4.3z"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24">
              <path fill="currentColor" d="M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={cx(
          "md:hidden border-t bg-white/95 backdrop-blur",
          "transition-[max-height] overflow-hidden",
          mobileOpen ? "max-h-[80vh]" : "max-h-0",
        )}
      >
        <div className="px-4 py-3 space-y-1">
          <Link href="/" className="block px-3 py-2 rounded-lg hover:bg-zinc-50">Startseite</Link>

          {/* Services mobile */}
          <details className="group rounded-lg">
            <summary className="list-none px-3 py-2 rounded-lg hover:bg-zinc-50 cursor-pointer flex items-center justify-between">
              <span>Dienstleistungen</span>
              <svg width="16" height="16" viewBox="0 0 24 24" className="transition group-open:rotate-180">
                <path fill="currentColor" d="M7 10l5 5 5-5z" />
              </svg>
            </summary>
            <div className="mt-1 pl-2 space-y-1">
              {services.map((s) => (
                <Link
                  key={s.href}
                  href={s.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-zinc-50"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="w-8 h-8 grid place-items-center rounded-md bg-zinc-100">{s.icon}</span>
                  <span>{s.label}</span>
                </Link>
              ))}
            </div>
          </details>

          <Link href="/referenzen" className="block px-3 py-2 rounded-lg hover:bg-zinc-50">
            Referenzen
          </Link>
          <Link href="/about" className="block px-3 py-2 rounded-lg hover:bg-zinc-50">
            Über uns
          </Link>

          <div className="pt-2 flex gap-2">
            <Link
              href="/contact"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm text-zinc-800 hover:bg-zinc-50"
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="currentColor" d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v.5l-10 6L2 6.5V6Zm0 3.8V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.8l-9.2 5.5a2 2 0 0 1-2 0L2 9.8Z" />
              </svg>
              Kontakt
            </Link>
            <Link
              href="/book"
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600"
              onClick={() => setMobileOpen(false)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="currentColor" d="M7 2a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3h-1V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1Zm12 8H5v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1Z"/>
              </svg>
              Termin
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}