// src/app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

// Beispiel-Datenstruktur und Funktionen (bitte ggf. anpassen)
import type { ReactNode } from "react";
export type ServiceItem = {
  slug: string;
  title: string;
  description: string;
  longDescription?: string;
  heroImage?: string;
  highlights?: string[];
  gallery?: string[];
  caseStudies?: { title: string; summary: string; href?: string }[];
  faqs?: { q: string; a: string }[];
  icon?: ReactNode;
  href?: string;
  process?: string[]; // Ablauf in Schritten
  targetGroups?: string[]; // Zielgruppen
  examples?: string[]; // Anwendungsbeispiele
};

const services: ServiceItem[] = [
  {
    slug: "softwareentwicklung",
    title: "Softwareentwicklung",
    description: "Individuelle Softwarelösungen für Ihr Unternehmen.",
    longDescription: "Wir entwickeln maßgeschneiderte Software, die Ihre Prozesse digitalisiert und Ihr Business voranbringt – von der Analyse bis zum Go-Live.",
    heroImage: "/images/Rakete.png",
    highlights: [
      "Web- & Desktop-Anwendungen",
      "Schnittstellen & Automatisierung",
      "Agile Entwicklung & Beratung"
    ],
    gallery: ["/images/software1.jpg"],
    caseStudies: [
      { title: "ERP-System für Mittelstand", summary: "Effizientere Abläufe durch individuelle Software." }
    ],
    faqs: [
      { q: "Welche Technologien nutzen Sie?", a: "Wir setzen auf moderne Frameworks wie React, Node.js, .NET und mehr." }
    ],
    icon: "�️",
    href: "/services/softwareentwicklung"
  },
  {
    slug: "app-development",
    title: "App-Development",
    description: "Mobile Apps für iOS & Android – nativ oder hybrid.",
    longDescription: "Wir entwickeln performante und nutzerfreundliche Apps, die Ihre Zielgruppe begeistern – von der Idee bis zum Launch.",
    heroImage: "/images/Rakete.png",
    highlights: [
      "Flutter, React Native, Swift, Kotlin",
      "App-Design & Prototyping",
      "App Store Launch & Wartung"
    ],
    gallery: ["/images/app1.jpg"],
    caseStudies: [
      { title: "Startup MVP", summary: "Schnelle Markteinführung einer neuen App-Idee." }
    ],
    faqs: [
      { q: "Bieten Sie auch Wartung an?", a: "Ja, wir begleiten Sie langfristig." }
    ],
    icon: "�",
    href: "/services/app-development"
  },
  {
    slug: "offline-marketing",
    title: "Offline-Marketing",
    description: "Klassische Werbung, Events & Print für Ihre Zielgruppe.",
    longDescription: "Wir unterstützen Sie bei der Planung und Umsetzung von Offline-Marketingmaßnahmen – von der Anzeige bis zum Messeauftritt.",
    heroImage: "/images/Rakete.png",
    highlights: [
      "Print, Plakat, Radio & Events",
      "Strategie & Konzeption",
      "Crossmediale Kampagnen"
    ],
    gallery: ["/images/offline1.jpg"],
    caseStudies: [
      { title: "Eventkampagne", summary: "Steigerung der Markenbekanntheit durch regionale Events." }
    ],
    faqs: [
      { q: "Welche Kanäle bieten Sie an?", a: "Alle klassischen Werbekanäle sowie Eventmarketing." }
    ],
    icon: "�",
    href: "/services/offline-marketing"
  },
  {
    slug: "webdesigning",
    title: "Webdesigning",
    description: "Modernes Webdesign für starke Markenauftritte.",
    longDescription: "Wir gestalten ansprechende und nutzerfreundliche Websites, die Ihre Marke digital erlebbar machen.",
    heroImage: "/images/Rakete.png",
    highlights: [
      "Responsive Design",
      "UX/UI-Optimierung",
      "Individuelle Gestaltung"
    ],
    gallery: ["/images/webdesign1.jpg"],
    caseStudies: [
      { title: "Relaunch für Dienstleister", summary: "Mehr Anfragen durch neues Design und bessere Usability." }
    ],
    faqs: [
      { q: "Kann ich das Design mitgestalten?", a: "Ja, wir arbeiten eng mit Ihnen zusammen." }
    ],
    icon: "🎨",
    href: "/services/webdesigning"
  },
  {
    slug: "digitale-transformation",
    title: "Digitale Transformation",
    description: "Ihr Weg in die digitale Zukunft – wir begleiten Sie.",
    longDescription: "Wir analysieren Ihre Prozesse, beraten zu Digitalisierungspotenzialen und setzen gemeinsam mit Ihnen innovative Lösungen um.",
    heroImage: "/images/Rakete.png",
    highlights: [
      "Digitalisierungsberatung",
      "Change Management",
      "Prozessautomatisierung"
    ],
    gallery: ["/images/digital1.jpg"],
    caseStudies: [
      { title: "Digitalstrategie für KMU", summary: "Erfolgreiche Transformation durch individuelle Roadmap." }
    ],
    faqs: [
      { q: "Wie läuft ein Digitalprojekt ab?", a: "Von der Analyse bis zur Umsetzung begleiten wir Sie ganzheitlich." }
    ],
    icon: "�",
    href: "/services/digitale-transformation"
  }
];
export const SERVICES = services;

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return services.find((s) => s.slug === slug);
}

// --- Static params for SSG ---
export function generateStaticParams() {
  return getAllServiceSlugs().map((slug: string) => ({ slug }));
}

// --- SEO per Service ---
export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const s = getServiceBySlug(params.slug);
  if (!s) return {};
  return {
    title: `${s.title} | Antrieb 2.0`,
    description: s.longDescription ?? s.description,
    alternates: { canonical: `/services/${s.slug}` },
    openGraph: {
      title: s.title,
      description: s.longDescription ?? s.description,
      images: s.heroImage ? [{ url: s.heroImage }] : undefined,
    },
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* zarter Verlauf im Hintergrund */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-b from-zinc-50 via-white to-white" />

        {/* Optionales Bild rechts als leichtes Deko-Motiv */}
        {service.heroImage && (
          <div className="absolute inset-y-0 right-0 -z-10 opacity-20">
            <Image
              src={service.heroImage}
              alt=""
              fill
              sizes="100vw"
              className="object-contain object-right"
              priority
            />
          </div>
        )}

        <div className="container mx-auto px-4 pt-20 pb-12 md:pt-28 md:pb-16">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs text-zinc-700 bg-white/70 backdrop-blur">
              Dienstleistung
            </span>
            <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
              {service.title}
            </h1>
            <p className="mt-3 text-zinc-600 text-base md:text-lg">
              {service.longDescription ?? service.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm hover:shadow-md transition"
              >
                Kostenloses Erstgespräch
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm text-zinc-800 hover:bg-zinc-50 transition"
              >
                Alle Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      {service.highlights?.length ? (
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold">Was Sie bekommen</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.highlights.map((h: string) => (
                <div
                  key={h}
                  className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
                >
                  <div className="font-medium">{h}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* GALLERY (optional) */}
      {service.gallery?.length ? (
        <section className="py-6 md:py-10">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold">Einblicke</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {service.gallery.map((src: string, i: number) => (
                <div key={src + i} className="overflow-hidden rounded-2xl border bg-white">
                  <img src={src} alt="" className="w-full h-56 object-cover" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* CASE STUDIES */}
      {service.caseStudies?.length ? (
        <section className="py-10 md:py-14">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold">Ausgewählte Ergebnisse</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2">
              {service.caseStudies.map((c: { title: string; summary: string; href?: string }, i: number) => (
                <article
                  key={i}
                  className="rounded-2xl border bg-white p-5 shadow-sm hover:shadow-md transition"
                >
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{c.summary}</p>
                  {c.href && (
                    <Link
                      href={c.href}
                      className="mt-3 inline-block text-sm text-blue-700 hover:underline"
                    >
                      Mehr erfahren
                    </Link>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* FAQ */}
      {service.faqs?.length ? (
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-xl md:text-2xl font-bold">Häufige Fragen</h2>
            <div className="mt-6 divide-y rounded-2xl border bg-white">
              {service.faqs.map((f: { q: string; a: string }, i: number) => (
                <details key={i} className="group p-5">
                  <summary className="cursor-pointer list-none font-medium flex items-center justify-between">
                    {f.q}
                    <span className="ml-4 text-zinc-400 group-open:rotate-180 transition">▼</span>
                  </summary>
                  <p className="mt-3 text-zinc-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* Bottom CTA */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl border bg-gradient-to-r from-zinc-50 to-white p-6 md:p-8 text-center">
            <h3 className="text-xl md:text-2xl font-semibold">
              Bereit, {service.title.toLowerCase()} anzugehen?
            </h3>
            <p className="mt-2 text-zinc-600">
              Lassen Sie uns in einem kurzen Gespräch Ziele & Roadmap klären.
            </p>
            <div className="mt-5 flex justify-center gap-3">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700"
              >
                Termin vereinbaren
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm text-zinc-800 hover:bg-zinc-50"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}