// src/components/Clients.tsx
"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export type Client = {
  name: string;
  logoSrc: string;       // z. B. "/logos/db.svg"
  href?: string;         // optional: Link zur Case Study/Webseite
  className?: string;    // optional: individuelle Breite/Höhe des Logos
};

type ClientsProps = {
  title?: string;
  subtitle?: string;
  clients: Client[];
  variant?: "grid" | "marquee";
  // Grid-Options
  columns?: 3 | 4 | 5 | 6;
  // Marquee-Options
  speed?: number; // px/s
};

export default function Clients({
  title = "Vertrauen von starken Marken & Unternehmen",
  subtitle = "Unsere Kunden. Unsere Motivation.",
  clients,
  variant = "grid",
  columns = 5,
  speed = 20,
}: ClientsProps) {
  if (!clients?.length) return null;

  return (
    <section className="py-16 bg-white border-b">
      <div className="container mx-auto px-4">
        {/* Intro */}
        <div className="text-center">
          {subtitle && (
            <div className="text-base text-blue-600 font-medium mb-2">
              {subtitle}
            </div>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              {title}
            </h2>
          )}
        </div>

        {variant === "grid" ? (
          <ClientsGrid clients={clients} columns={columns} />
        ) : (
          <ClientsMarquee clients={clients} speed={speed} />
        )}
      </div>
    </section>
  );
}

/* ---------------- GRID ---------------- */

function ClientsGrid({
  clients,
  columns = 5,
}: {
  clients: Client[];
  columns?: 3 | 4 | 5 | 6;
}) {
  const colClass =
    columns === 6
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
      : columns === 5
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
      : columns === 4
      ? "grid-cols-2 sm:grid-cols-3 md:grid-cols-4"
      : "grid-cols-2 sm:grid-cols-3"; // 3

  return (
    <div className={`grid ${colClass} gap-x-10 gap-y-8 items-center justify-items-center`}>
      {clients.map((c) => (
        <LogoTile key={c.name} client={c} />
      ))}
    </div>
  );
}

/* --------------- MARQUEE --------------- */

function ClientsMarquee({
  clients,
  speed = 40,
}: {
  clients: Client[];
  speed?: number; // px/s
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2; // wir duplizieren unten
    const duration = totalWidth / speed; // sekunden
    track.style.setProperty("--marquee-duration", `${duration}s`);
  }, [speed]);

  // Um nahtlos zu scrollen, duplizieren wir die Logos
  const doubled = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden">
      <div
        ref={trackRef}
        className="flex items-center gap-10 animate-[marquee_linear_infinite]"
        style={{
          // CSS via inline custom property (Tailwind-agnostisch)
          animationDuration: "var(--marquee-duration, 30s)",
        }}
      >
        {doubled.map((c, i) => (
          <LogoTile key={`${c.name}-${i}`} client={c} />
        ))}
      </div>

      {/* leichte Fade-Ränder */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}

/* --------------- LOGO TILE --------------- */

function LogoTile({ client }: { client: Client }) {
  const content = (
    <div
      className="h-20 flex items-center"
      title={client.name}
      aria-label={client.name}
    >
      <Image
        src={client.logoSrc}
        alt={client.name}
        width={240}
        height={80}
        className={[
          "h-20 w-auto object-contain",
          "grayscale hover:grayscale-0 transition-all duration-300",
          "opacity-70 hover:opacity-100",
          client.className ?? "",
        ].join(" ")}
      />
    </div>
  );

  return client.href ? (
    <a
      href={client.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block"
      aria-label={`${client.name} – Link öffnen`}
    >
      {content}
    </a>
  ) : (
    content
  );/* --------------- MARQUEE --------------- */
function ClientsMarquee({
  clients,
  speed = 40,
}: {
  clients: Client[];
  speed?: number; // px/s
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const totalWidth = track.scrollWidth / 2; // wir duplizieren unten
    const duration = totalWidth / speed; // sekunden
    track.style.setProperty("--marquee-duration", `${duration}s`);
  }, [speed]);

  const doubled = [...clients, ...clients];

  return (
    <div className="relative overflow-hidden">
      <div
        ref={trackRef}
        className="flex items-center gap-10 animate-[marquee_linear_infinite]"
        style={{
          animationDuration: "var(--marquee-duration, 30s)",
        }}
      >
        {doubled.map((c, i) => (
          <LogoTile key={`${c.name}-${i}`} client={c} />
        ))}
      </div>

      {/* Fade-Effekt links & rechts */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white to-transparent" />

      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%); /* Start rechts */
          }
          100% {
            transform: translateX(-50%); /* Durchlauf nach links */
          }
        }
      `}</style>
    </div>
  );
}
}