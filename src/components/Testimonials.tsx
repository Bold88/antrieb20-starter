// src/components/Testimonials.tsx
"use client";


import React, { useEffect, useMemo, useState } from "react";

export type Testimonial = {
  quote: string;
  author: string;
  role?: string;
  company?: string;
  logo?: string;      // optional: Pfad zu Kundenlogo (z.B. /images/but-lernfoerderung.png)
  avatar?: string;    // optional: Portrait
  rating?: number;    // 1..5
  href?: string;      // optional: Link zur Kundenwebsite
};

type Props = {
  title?: string;
  subtitle?: string;
  items: Testimonial[];
  variant?: "grid" | "carousel";
  columns?: 2 | 3;
  autoPlayMs?: number;
};

function Stars({ rating = 5 }: { rating?: number }) {
  const r = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="mt-2 flex items-center gap-0.5 text-amber-500" aria-label={`${r} von 5 Sternen`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill={i < r ? "currentColor" : "none"}
          stroke="currentColor"
          className={i < r ? "" : "text-amber-300"}
          aria-hidden
        >
          <path strokeWidth="1.4" d="M12 3.7 14.8 9l5.7.6-4.2 3.8 1.2 5.6L12 16.8 6.5 19l1.2-5.6L3.5 9.6 9.2 9 12 3.7Z" />
        </svg>
      ))}
    </div>
  );
}

function SpotlightCard({ t }: { t: Testimonial }) {
  return (
    <figure
      className={[
        "relative overflow-hidden rounded-2xl",
        "bg-white/80 backdrop-blur-sm shadow-[0_10px_40px_rgba(0,0,0,0.06)]",
        "ring-1 ring-zinc-900/5",
        "p-6 md:p-7"
      ].join(" ")}
    >
      {/* Glow / Akzent */}
      <div
        className="pointer-events-none absolute -inset-1 -z-10 bg-[radial-gradient(60%_40%_at_0%_0%,rgba(59,130,246,0.14),transparent),radial-gradient(60%_40%_at_100%_0%,rgba(139,92,246,0.12),transparent)]"
        aria-hidden
      />
      {/* Logo/Avatar */}
      {t.logo && (
        <div className="mb-4 flex items-center gap-3">
          <div className="flex items-center justify-center h-14 w-14 rounded-full bg-zinc-50 shadow-inner border border-zinc-200">
            {t.href ? (
              <a href={t.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={t.logo}
                  alt={t.company || t.author}
                  className="h-10 w-10 object-contain"
                  loading="lazy"
                />
              </a>
            ) : (
              <img
                src={t.logo}
                alt={t.company || t.author}
                className="h-10 w-10 object-contain"
                loading="lazy"
              />
            )}
          </div>
          <div className="font-semibold text-base text-zinc-700">{t.company}</div>
        </div>
      )}
      {/* Zitat */}
      <blockquote className="mt-4 text-zinc-800 leading-relaxed">
        <span className="mr-1 text-3xl align-[-10px] text-zinc-300">“</span>
        {t.quote}
        <span className="ml-1 text-3xl align-[-10px] text-zinc-300">”</span>
      </blockquote>
      {/* Sterne / Footer */}
      {typeof t.rating === "number" && <Stars rating={t.rating} />}
    </figure>
  );
}

export default function Testimonials({
  title = "Kundenrezensionen",
  subtitle = "Echte Stimmen – kurze Wege, starke Ergebnisse.",
  items,
  variant = "grid",
  columns = 3,
}: Props) {
  // Fallback falls keine Testimonials übergeben werden
  if (!items || items.length === 0) return null;

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 md:py-24">
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-zinc-900 md:text-4xl">{title}</h2>
        <p className="mt-2 text-lg text-zinc-600">{subtitle}</p>
      </div>
      <div
        className={
          variant === "grid"
            ? `grid gap-8 md:grid-cols-${columns}`
            : "flex flex-col items-center"
        }
      >
        {items.map((t, i) => (
          <SpotlightCard key={i} t={t} />
        ))}
      </div>
    </section>
  );
}