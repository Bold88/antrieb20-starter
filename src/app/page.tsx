// src/app/page.tsx
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import HeroMultiStepTrigger from "@/components/HeroMultiStepTrigger";
import Stats from "@/components/Stats";
import Clients from "@/components/Clients";
import { CLIENTS } from "@/data/clients";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import { TESTIMONIALS } from "@/data/testimonials";
import ContactSection from "@/components/ContactSection";

// — Meta-Daten für die Startseite —
export const metadata: Metadata = {
  title: "Antrieb 2.0 – Digitale Lösungen, die wirken",
  description:
    "Strategie, Design & Entwicklung: Wir bauen digitale Produkte, die Ihr Unternehmen wirklich voranbringen.",
  keywords:
    "digitale transformation, softwareentwicklung, webdesign, app development, pdf-formulare, agentur, deutschland",
  robots: "index, follow",
  openGraph: {
    title: "Antrieb 2.0 – Digitale Lösungen, die wirken",
    description:
      "Von der Idee bis zum Go-Live: Wir entwickeln Software, Apps und Webseiten mit echtem Business-Impact.",
    url: "https://antrieb2punkt0.de",
    siteName: "Antrieb 2.0",
    type: "website",
    locale: "de_DE",
  },
  alternates: { canonical: "https://antrieb2punkt0.de" },
};

export default function HomePage() {
  // — Aggregate Rating JSON-LD (optional, falls Testimonials vorhanden) —
  const safeTestimonials = Array.isArray(TESTIMONIALS) ? TESTIMONIALS : [];
  const ratings = safeTestimonials
    .map((t: any) => (typeof t?.rating === "number" ? t.rating : null))
    .filter((v: number | null): v is number => v !== null);

  const ratingCount = ratings.length;
  const averageRating =
    ratingCount > 0
      ? Number((ratings.reduce((a, b) => a + b, 0) / ratingCount).toFixed(1))
      : undefined;

  const reviewLd =
    averageRating && ratingCount
      ? {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Antrieb 2.0",
          url: "https://antrieb2punkt0.de",
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: averageRating,
            reviewCount: ratingCount,
            bestRating: 5,
            worstRating: 1,
          },
        }
      : null;

  return (
    <>
      <Navbar />

      {/* HERO */}
      <main className="relative min-h-screen bg-transparent">
        <Hero />

        {/* Intro / Badge / CTA / KPIs */}
        <section className="relative overflow-hidden bg-grid">
          <div className="container mx-auto px-4 pt-24 pb-20 text-center relative z-10">
            <div className="flex justify-center">
              <span className="badge-chip">
                <span>●</span> Digitale Innovation
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  className="ml-1"
                  aria-hidden
                >
                  <path fill="currentColor" d="M5 12h12M13 6l6 6-6 6" />
                </svg>
              </span>
            </div>

            <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.05]">
              Ihr nächster Schritt in die{" "}
              <span className="text-gradient">digitale Zukunft</span>
            </h1>

            <p className="mt-5 max-w-2xl mx-auto text-base md:text-lg text-muted-foreground">
              Wir entwickeln Lösungen, die Ihr Unternehmen groß machen – mit
              messbarem Impact statt Buzzwords.
            </p>

            {/* Multi-Step Lead-Form als Modal-Trigger */}
            <HeroMultiStepTrigger />

            {/* KPIs */}
            <div className="mt-10">
              <Stats />
            </div>
          </div>
        </section>

        {/* Kunden/Partner */}
        <section className="bg-transparent">
          <Clients clients={CLIENTS} variant="marquee" speed={30} />
        </section>

        {/* Leistungen */}
        <section id="leistungen" className="bg-transparent">
          <Services
            eyebrow="Digitale Lösungen für Ihren Erfolg"
            title="Entdecken Sie unsere Top-Dienstleistungen"
            subtitle="Mit Strategie, Design und Technologie machen wir Ihr Unternehmen zukunftsfähig."
            items={[
              {
                title: "Softwareentwicklung",
                description: "Individuelle Softwarelösungen für Ihr Business.",
                href: "/services/softwareentwicklung",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    className="text-zinc-700"
                  >
                    <path fill="currentColor" d="M8 5 3 12l5 7M16 5l5 7-5 7" />
                  </svg>
                ),
              },
              {
                title: "App-Development",
                description:
                  "Mobile Apps für iOS & Android – von der Idee bis zum Launch.",
                href: "/services/app-development",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    className="text-zinc-700"
                  >
                    <path
                      fill="currentColor"
                      d="M7 2h10a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm0 4h10v12H7z"
                    />
                  </svg>
                ),
              },
              {
                title: "Offline-Marketing",
                description:
                  "Kreative Print- und Werbekampagnen für Ihre Zielgruppe.",
                href: "/services/offline-marketing",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    className="text-zinc-700"
                  >
                    <path
                      fill="currentColor"
                      d="M2 4h20v6H2zM5 12h14v8H5zM9 2h6v2H9z"
                    />
                  </svg>
                ),
              },
              {
                title: "Webdesign",
                description:
                  "Modernes Webdesign für einen starken Online-Auftritt.",
                href: "/services/webdesigning",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    className="text-zinc-700"
                  >
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                    />
                    <path
                      fill="currentColor"
                      d="M4 12h16M12 4a16 16 0 0 1 0 16M12 4a16 16 0 0 0 0 16"
                    />
                  </svg>
                ),
              },
              {
                title: "PDF-Form",
                description:
                  "Digitale PDF-Formulare – einfach, sicher und individuell.",
                href: "/pdf-form",
                icon: (
                  <svg viewBox="0 0 24 24" width="32" height="32">
                    <rect x="4" y="2" width="16" height="20" rx="3" />
                    <rect x="7" y="6" width="10" height="2" rx="1" />
                    <rect x="7" y="10" width="10" height="2" rx="1" />
                    <rect x="7" y="14" width="6" height="2" rx="1" />
                    <rect x="7" y="18" width="4" height="1.5" rx="0.75" />
                  </svg>
                ),
              },
              {
                title: "Digitale Transformation",
                description:
                  "Ihr Weg in die digitale Zukunft – wir begleiten Sie.",
                href: "/services/digitale-transformation",
                icon: (
                  <svg
                    viewBox="0 0 24 24"
                    width="32"
                    height="32"
                    className="text-zinc-700"
                  >
                    <path
                      fill="currentColor"
                      d="M10 2v3H5v5H2v7h7v-3h5v-5h3V2zM9 10H7V8h2zm8-3h-3V4h3zM6 18H4v-3h2zm8-5h-3v-2h3z"
                    />
                  </svg>
                ),
              },
            ]}
            columns={3}
            cta={null}
          />

          <div className="mt-12 flex justify-center">
            <HeroMultiStepTrigger />
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-transparent">
          <Testimonials
            title="Kundenrezensionen"
            subtitle="Lernförderung-OWL, Mini-Lernkreis & unsere Verwaltungssoftware im Einsatz."
            items={safeTestimonials}
            variant="grid"
            columns={3}
          />
        </section>

        {/* Kontakt */}
        <section className="bg-transparent">
          <ContactSection />
        </section>

        {/* JSON-LD */}
        {reviewLd && (
          <script
            type="application/ld+json"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewLd) }}
          />
        )}
      </main>

      <Footer />
    </>
  );
}