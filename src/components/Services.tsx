// src/components/Services.tsx
"use client";

import Link from "next/link";
import type { ReactNode } from "react";

export type ServiceItem = {
  title: string;
  description?: string;
  href?: string;     // optional: Link zur Detailseite
  icon?: ReactNode;  // optional: eigenes Icon
};

type ServicesProps = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  items: ServiceItem[];
  columns?: 2 | 3 | 4;
  cta?: { label: string; href: string } | null;
};

export default function Services({
  eyebrow = "Digitale Lösungen für Ihren Erfolg",
  title = "Entdecken Sie unsere Top-Dienstleistungen",
  subtitle = "Wir führen Ihr Unternehmen mit Strategie, Design und Technologie in die digitale Zukunft.",
  items,
  columns = 3,
  cta = { label: "Kostenloses Erstgespräch", href: "/contact" },
}: ServicesProps) {
  const colClass =
    columns === 4
      ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
      : columns === 2
      ? "grid-cols-1 md:grid-cols-2"
      : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

  return (
    <section className="relative py-20 bg-white">
      {/* dezentes Hintergrund-Glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 0%, rgba(59,130,246,0.08), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium">
            <span className="i">✨</span> {eyebrow}
          </span>
          <h2 className="mt-4 text-3xl md:text-4xl font-bold tracking-tight">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-3 text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <div className={`mt-12 grid ${colClass} gap-6`}>
          {items.map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>

        {/* CTA */}
        {cta && (
          <div className="mt-12 text-center">
            <Link
              href={cta.href}
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 bg-blue-600 text-white font-medium shadow-lg shadow-blue-600/20 hover:bg-blue-700 transition"
            >
              {cta.label}
              <svg width="16" height="16" viewBox="0 0 24 24" className="-mr-0.5">
                <path fill="currentColor" d="M5 12h12m-6-6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

function ServiceCard({
  title,
  description,
  href,
  icon,
}: ServiceItem) {
  const Container = href ? Link : "div";
  const containerProps = href
    ? { href, className: cardClass }
    : { className: cardClass };

  return (
    // @ts-expect-error: polymorpher Container
    <Container {...containerProps}>
      <div className="flex items-start gap-4">
        <div className="shrink-0 w-11 h-11 rounded-xl bg-blue-50 text-blue-700 grid place-items-center">
          {icon ?? <DefaultIcon />}
        </div>
        <div>
          <h3 className="font-semibold text-lg">{title}</h3>
          {description && (
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </div>

      {href && (
        <div className="mt-4 flex items-center gap-1 text-sm text-blue-700">
          Mehr erfahren
          <svg width="14" height="14" viewBox="0 0 24 24">
            <path fill="currentColor" d="M5 12h12m-6-6l6 6-6 6" />
          </svg>
        </div>
      )}
    </Container>
  );
}

const cardClass =
  [
    "group relative rounded-2xl border bg-white/80 backdrop-blur",
    "p-5 shadow-sm hover:shadow-md hover:border-blue-200 transition",
    "before:absolute before:inset-0 before:rounded-2xl before:bg-gradient-to-br",
    "before:from-blue-50 before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition",
  ].join(" ");

function DefaultIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M4 7a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3zm3-1a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1z"
      />
    </svg>
  );
}