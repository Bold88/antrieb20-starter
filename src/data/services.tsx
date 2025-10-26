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
    longDescription: "Schluss mit Software von der Stange! Wir entwickeln maßgeschneiderte Lösungen, die Ihre Prozesse nicht nur digitalisieren, sondern revolutionieren. Von der ersten Analyse bis zum erfolgreichen Go-Live begleiten wir Sie – damit Ihr Business endlich die Technologie bekommt, die es verdient.",
    heroImage: "/images/Rakete.png",
    highlights: [
      "Web- & Desktop-Anwendungen nach Maß",
      "Nahtlose Schnittstellen & intelligente Automatisierung",
      "Agile Entwicklung mit kurzen Feedback-Zyklen",
      "Persönliche Beratung auf Augenhöhe",
      "Wartung & Support auch nach Go-Live"
    ],
    process: [
      "Analyse Ihrer Anforderungen und Prozesse",
      "Konzeption der optimalen Lösung",
      "Agile Entwicklung mit regelmäßigen Updates",
      "Testing & Qualitätssicherung",
      "Go-Live und Schulung Ihres Teams",
      "Langfristige Betreuung & Wartung"
    ],
    targetGroups: [
      "Mittelständische Unternehmen mit individuellen Anforderungen",
      "Startups, die eine skalierbare Tech-Basis brauchen",
      "Konzerne mit komplexen Legacy-Systemen",
      "Dienstleister, die ihre Abläufe optimieren wollen"
    ],
    examples: [
      "Verwaltungssoftware für Bildungsträger",
      "CRM-Systeme mit individuellen Workflows",
      "Automatisierte Prozesse für Buchhaltung & Controlling",
      "Schnittstellen zwischen ERP, CRM und E-Commerce"
    ],
    gallery: ["/images/software1.jpg"],
    caseStudies: [
      { title: "ERP-System für Mittelstand", summary: "50% schnellere Abläufe und 30% weniger Fehler durch maßgeschneiderte Software." },
      { title: "Verwaltungssoftware für Bildungsbranche", summary: "Über 15 Standorte nutzen unsere Lösung täglich – mit 99,9% Uptime." }
    ],
    faqs: [
      { q: "Welche Technologien nutzen Sie?", a: "Wir setzen auf moderne, zukunftssichere Frameworks wie React, Next.js, Node.js, .NET, Python und PostgreSQL. Die Wahl richtet sich immer nach Ihren Anforderungen." },
      { q: "Wie lange dauert so ein Projekt?", a: "Das hängt vom Umfang ab. Kleine Tools sind in 4-6 Wochen fertig, komplexe Systeme benötigen 3-6 Monate. Wir arbeiten agil, sodass Sie schon früh erste Ergebnisse sehen." },
      { q: "Was kostet individuelle Software?", a: "Projekte starten ab 15.000€. Im kostenlosen Erstgespräch kalkulieren wir transparent Ihren individuellen Aufwand." },
      { q: "Bieten Sie auch Wartung an?", a: "Ja, auf Wunsch übernehmen wir langfristig Wartung, Updates und Support – damit Ihre Software immer aktuell und sicher bleibt." }
    ],
    icon: "💻",
    href: "/services/softwareentwicklung"
  },
  {
    slug: "app-development",
    title: "App-Development",
    description: "Mobile Apps für iOS & Android – nativ oder hybrid.",
    longDescription: "Ihre App-Idee verdient mehr als ein Template! Wir entwickeln performante und nutzerfreundliche Apps, die Ihre Zielgruppe wirklich begeistern. Vom ersten Prototyp bis zum erfolgreichen Launch im App Store – wir sind Ihr Partner für mobilen Erfolg.",
    heroImage: "/images/Rakete.png",
    highlights: [
      "Native & Cross-Platform: Flutter, React Native, Swift, Kotlin",
      "Nutzerzentriertes App-Design & Prototyping",
      "App Store Optimization & Launch-Support",
      "Backend-Integration & API-Entwicklung",
      "Kontinuierliche Updates & Wartung"
    ],
    process: [
      "Workshop: Ihre Vision verstehen",
      "Prototyping & UX-Design",
      "Entwicklung in Sprints mit regelmäßigen Reviews",
      "Testing auf allen Geräten",
      "App Store Launch & Marketing-Support",
      "Monitoring, Updates & Feature-Erweiterungen"
    ],
    targetGroups: [
      "Startups mit innovativen App-Ideen",
      "Unternehmen, die ihre Services mobil anbieten wollen",
      "E-Commerce-Händler für bessere Conversion",
      "Dienstleister mit Buchungs- und Verwaltungsbedarf"
    ],
    examples: [
      "Buchungs-Apps für Dienstleister",
      "E-Learning & Trainings-Apps",
      "E-Commerce Apps mit Payment-Integration",
      "Interne Tools für Field Service & Logistik"
    ],
    gallery: ["/images/app1.jpg"],
    caseStudies: [
      { title: "Startup MVP in 8 Wochen", summary: "Von der Idee zum App Store Launch – mit über 5.000 Downloads im ersten Monat." },
      { title: "E-Commerce App für Fashion-Brand", summary: "30% höhere Conversion-Rate gegenüber der mobilen Webseite." }
    ],
    faqs: [
      { q: "Native oder Cross-Platform?", a: "Das hängt von Ihren Anforderungen ab. Für maximale Performance empfehlen wir Native (Swift/Kotlin), für schnelle und kostengünstige Entwicklung Cross-Platform (Flutter/React Native)." },
      { q: "Wie lange dauert die Entwicklung einer App?", a: "Ein MVP ist in 6-12 Wochen realisierbar. Komplexe Apps mit Backend benötigen 3-6 Monate." },
      { q: "Was kostet eine App?", a: "MVPs starten ab 20.000€, umfangreiche Apps ab 50.000€. Im Erstgespräch erstellen wir Ihnen ein individuelles Angebot." },
      { q: "Bieten Sie auch Wartung an?", a: "Ja, wir begleiten Sie langfristig mit Updates, Bug-Fixes und neuen Features – damit Ihre App immer State of the Art bleibt." }
    ],
    icon: "📱",
    href: "/services/app-development"
  },
  {
    slug: "offline-marketing",
    title: "Offline-Marketing",
    description: "Klassische Werbung, Events & Print für Ihre Zielgruppe.",
    longDescription: "Digital ist nicht alles! Klassisches Marketing funktioniert – wenn es richtig gemacht wird. Wir entwickeln crossmediale Kampagnen, die Ihre Zielgruppe dort erreichen, wo sie sind: auf der Straße, auf Events und in der Hand.",
    heroImage: "/images/Rakete.png",
    highlights: [
      "Print-Kampagnen: Flyer, Plakate, Broschüren",
      "Eventmarketing & Messeauftritte",
      "Radio- & Out-of-Home-Werbung",
      "Crossmediale Strategien (Online + Offline)",
      "Konzeption, Design & Produktion aus einer Hand"
    ],
    process: [
      "Zielgruppen-Analyse & Strategie",
      "Kreative Konzeption & Design",
      "Produktion & Qualitätskontrolle",
      "Verteilung & Kampagnen-Management",
      "Erfolgsmessung & Optimierung"
    ],
    targetGroups: [
      "Lokale Unternehmen & Einzelhändler",
      "Event-Veranstalter & Messeanbieter",
      "Regionale Dienstleister",
      "Marken mit älterer Zielgruppe"
    ],
    examples: [
      "Plakat-Kampagnen für lokale Events",
      "Flyer-Aktionen für Neueröffnungen",
      "Messestand-Konzepte mit Giveaways",
      "Radio-Spots für regionale Awareness"
    ],
    gallery: ["/images/offline1.jpg"],
    caseStudies: [
      { title: "Eventkampagne für Startup-Festival", summary: "Über 2.000 Teilnehmer durch gezielte Offline-Werbung in der Region." },
      { title: "Plakatkampagne für Einzelhandel", summary: "25% mehr Laufkundschaft während der 4-wöchigen Kampagne." }
    ],
    faqs: [
      { q: "Welche Kanäle bieten Sie an?", a: "Wir decken alle klassischen Werbekanäle ab: Print (Flyer, Plakate, Broschüren), Radio, Out-of-Home und Eventmarketing." },
      { q: "Macht Offline-Marketing noch Sinn?", a: "Absolut! Gerade für lokale Unternehmen und ältere Zielgruppen ist Offline-Marketing oft effektiver als rein digitale Maßnahmen. Am besten funktioniert eine Kombination." },
      { q: "Übernehmen Sie auch die Produktion?", a: "Ja, wir managen den kompletten Prozess – von der Idee über Design und Druck bis zur Verteilung." },
      { q: "Was kostet eine Offline-Kampagne?", a: "Das hängt vom Umfang ab. Kleine Flyer-Aktionen starten ab 2.000€, größere Kampagnen ab 10.000€. Wir beraten Sie gerne im Detail." }
    ],
    icon: "📢",
    href: "/services/offline-marketing"
  },
  {
    slug: "webdesigning",
    title: "Webdesigning",
    description: "Modernes Webdesign für starke Markenauftritte.",
    longDescription: "Ihre Webseite ist Ihr digitales Aushängeschild – und der erste Eindruck zählt! Wir gestalten ansprechende, nutzerfreundliche und conversion-optimierte Webseiten, die Ihre Marke digital erlebbar machen und Besucher zu Kunden verwandeln.",
    heroImage: "/images/Rakete.png",
    highlights: [
      "Responsive Design für alle Geräte (Mobile First)",
      "UX/UI-Optimierung für bessere Conversion",
      "SEO-freundliche Struktur & Performance",
      "Barrierefreiheit nach WCAG-Standards",
      "CMS-Integration für einfache Pflege (WordPress, Contentful, etc.)"
    ],
    process: [
      "Briefing & Zielgruppen-Analyse",
      "Wireframes & Design-Konzept",
      "Feedback-Runden & Feinschliff",
      "Entwicklung & CMS-Integration",
      "Testing auf allen Geräten & Browsern",
      "Go-Live & Schulung"
    ],
    targetGroups: [
      "Unternehmen mit veralteter oder fehlender Online-Präsenz",
      "Startups, die professionell auftreten wollen",
      "E-Commerce-Händler für höhere Conversion",
      "Dienstleister, die mehr Anfragen generieren wollen"
    ],
    examples: [
      "Corporate Websites für B2B-Unternehmen",
      "Portfolio-Seiten für Kreative & Agenturen",
      "Landing Pages für Marketing-Kampagnen",
      "E-Commerce Shops mit Shopify oder WooCommerce"
    ],
    gallery: ["/images/webdesign1.jpg"],
    caseStudies: [
      { title: "Relaunch für Dienstleister", summary: "3x mehr Anfragen durch neues Design und optimierte User Experience." },
      { title: "E-Commerce Rebranding", summary: "45% höhere Conversion-Rate nach Design-Optimierung." }
    ],
    faqs: [
      { q: "Kann ich das Design mitgestalten?", a: "Absolut! Wir arbeiten eng mit Ihnen zusammen und holen regelmäßig Feedback ein, damit das Ergebnis zu 100% Ihren Vorstellungen entspricht." },
      { q: "Wie lange dauert ein Webdesign-Projekt?", a: "Einfache Webseiten sind in 3-4 Wochen fertig, komplexere Projekte benötigen 6-12 Wochen." },
      { q: "Kann ich die Webseite später selbst bearbeiten?", a: "Ja! Wir integrieren ein CMS (z.B. WordPress), sodass Sie Texte und Bilder selbstständig ändern können. Wir schulen Sie natürlich ein." },
      { q: "Was kostet ein professionelles Webdesign?", a: "Projekte starten ab 5.000€ für einfache Websites. Umfangreiche Shops oder Corporate Sites ab 15.000€. Im Erstgespräch kalkulieren wir transparent." }
    ],
    icon: "🎨",
    href: "/services/webdesigning"
  },
  {
    slug: "digitale-transformation",
    title: "Digitale Transformation",
    description: "Ihr Weg in die digitale Zukunft – wir begleiten Sie.",
    longDescription: "Digitalisierung ist kein Buzzword – es ist Ihre Zukunftssicherung! Wir analysieren Ihre Prozesse, identifizieren Optimierungspotenziale und setzen gemeinsam mit Ihnen innovative Lösungen um. Vom ersten Workshop bis zur erfolgreichen Implementierung sind wir Ihr Partner für echten digitalen Fortschritt.",
    heroImage: "/images/Rakete.png",
    highlights: [
      "Digitalisierungsberatung & Prozessanalyse",
      "Change Management & Team-Enablement",
      "Prozessautomatisierung mit modernen Tools",
      "Cloud-Migration & digitale Infrastruktur",
      "Langfristige Begleitung & Schulungen"
    ],
    process: [
      "IST-Analyse: Wo stehen Sie heute?",
      "Potenzialanalyse: Was kann digitalisiert werden?",
      "Roadmap-Entwicklung: Schritt für Schritt zum Ziel",
      "Implementierung der ersten Quick Wins",
      "Change Management & Team-Training",
      "Kontinuierliche Optimierung & Skalierung"
    ],
    targetGroups: [
      "Mittelständische Unternehmen ohne Digitalisierungsstrategie",
      "Traditionelle Branchen mit Nachholbedarf",
      "Wachsende Unternehmen, die skalieren wollen",
      "Firmen mit ineffizienten, manuellen Prozessen"
    ],
    examples: [
      "Digitalisierung von Papierprozessen",
      "Automatisierung von Buchhaltung & Controlling",
      "Einführung von Cloud-Lösungen (Microsoft 365, Google Workspace)",
      "Integration von CRM, ERP und Marketing-Tools"
    ],
    gallery: ["/images/digital1.jpg"],
    caseStudies: [
      { title: "Digitalstrategie für KMU", summary: "60% Zeitersparnis durch Automatisierung manueller Prozesse." },
      { title: "Cloud-Migration für Handwerksbetrieb", summary: "Standort-übergreifendes Arbeiten erstmals möglich – Effizienzsteigerung von 40%." }
    ],
    faqs: [
      { q: "Wie läuft ein Digitalprojekt ab?", a: "Von der Analyse bis zur Umsetzung begleiten wir Sie ganzheitlich. Wir starten mit Workshops, entwickeln eine Roadmap und setzen dann Schritt für Schritt um – mit messbaren Erfolgen." },
      { q: "Brauchen wir dafür eine IT-Abteilung?", a: "Nein! Wir übernehmen die komplette technische Umsetzung und schulen Ihr Team. Sie brauchen keine eigene IT-Abteilung." },
      { q: "Was kostet Digitalisierung?", a: "Das hängt vom Umfang ab. Kleine Automatisierungsprojekte starten ab 5.000€, umfassende Transformationen ab 25.000€. Im Erstgespräch kalkulieren wir individuell." },
      { q: "Wie lange dauert so ein Projekt?", a: "Erste Quick Wins sehen Sie bereits nach 2-4 Wochen. Eine vollständige Transformation benötigt je nach Umfang 3-12 Monate." }
    ],
    icon: "🚀",
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