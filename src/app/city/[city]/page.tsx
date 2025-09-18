import type { Metadata } from "next";
import Link from "next/link";
import { findCityBySlug, slugifyCity } from "@/lib/cities";

export const revalidate = 86400;
export const dynamicParams = true;

// 👉 params ist jetzt ein *Promise*
type Props = { params: Promise<{ city: string }> };

// Hilfen
function unslugToTitle(slug: string) {
  const s = slug.replace(/-/g, " ");
  return s
    .replace(/\b\w/g, (m) => m.toUpperCase())
    .replace(/ A /g, " a ")
    .replace(/ Im /g, " im ")
    .replace(/ Am /g, " am ");
}

function CityJsonLd({ city }: { city: string }) {
  const json = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: `Antrieb2.0 – Marketing & IT in ${city}`,
    url: `https://antrieb2punkt0.de/city/${slugifyCity(city)}`,
    areaServed: city,
    sameAs: ["https://antrieb2punkt0.de"],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

// ✅ generateMetadata muss async sein und params awaiten
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { city } = await params;
  const cityName = findCityBySlug(city) ?? unslugToTitle(city);

  const title = `Marketing-Agentur in ${cityName} | Antrieb2.0`;
  const description =
    `Digitale Lösungen und Marketing-Services in ${cityName}: ` +
    `Strategie, Websites, Web-Apps & E-Commerce — maßgeschneidert für Ihren Geschäftserfolg.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://antrieb2punkt0.de/city/${city}`,
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
    alternates: { canonical: `/city/${city}` },
  };
}

// ✅ Auch die Page selbst muss async sein und params awaiten
export default async function CityPage({ params }: Props) {
  const { city } = await params;
  const cityName = findCityBySlug(city) ?? unslugToTitle(city);

  return (
    <main className="container mx-auto px-4 py-16">
      <CityJsonLd city={cityName} />

      <nav className="text-sm text-muted-foreground mb-6">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <span>Stadt</span>
        <span className="mx-2">/</span>
        <span className="text-foreground">{cityName}</span>
      </nav>

      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          Marketing & digitale Lösungen in {cityName}
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Wir begleiten Unternehmen in {cityName} von der Strategie bis zur Umsetzung:
          performante Websites & Landingpages, individuelle Web-Apps, E-Commerce und laufende Optimierung.
        </p>

        <div className="mt-6 flex gap-3">
          <Link href="/contact" className="rounded-2xl border px-5 py-3 font-medium shadow-sm hover:bg-zinc-50">
            Kostenloses Erstgespräch
          </Link>
          <Link href="/services" className="rounded-2xl border px-5 py-3 font-medium shadow-sm hover:bg-zinc-50">
            Leistungen
          </Link>
        </div>
      </header>

      <section className="mt-12 grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Websites, die konvertieren</h2>
          <p className="mt-2 text-muted-foreground">
            Klare Informationsarchitektur, starke UX und messbare Conversions – optimiert für {cityName}.
          </p>
          <ul className="mt-4 list-disc ml-5 space-y-1 text-sm">
            <li>Lightning-fast mit Next.js</li>
            <li>Saubere On-Page-SEO (Meta, Schema.org, sitemaps)</li>
            <li>Headless CMS optional</li>
          </ul>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Individuelle Web-Apps</h2>
          <p className="mt-2 text-muted-foreground">
            Prozesse digitalisieren: Portale, Dashboards, Integrationen – exakt für Ihren Use Case in {cityName}.
          </p>
          <ul className="mt-4 list-disc ml-5 space-y-1 text-sm">
            <li>API-Design & Integrationen</li>
            <li>Authentication, Rollen & Rechte</li>
            <li>Tracking & QA-Pipelines</li>
          </ul>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">E-Commerce & CRO</h2>
          <p className="mt-2 text-muted-foreground">
            Shops, Checkout-Optimierung und A/B-Tests – mehr Umsatz für Marken in {cityName}.
          </p>
          <ul className="mt-4 list-disc ml-5 space-y-1 text-sm">
            <li>Headless Commerce</li>
            <li>Performance & Core Web Vitals</li>
            <li>Experimentation & Analytics</li>
          </ul>
        </div>

        <div className="rounded-2xl border p-6">
          <h2 className="text-xl font-semibold">Langfristige Betreuung</h2>
          <p className="mt-2 text-muted-foreground">
            Iteratives Arbeiten mit klaren KPIs, regelmäßigen Releases und transparentem Reporting.
          </p>
          <ul className="mt-4 list-disc ml-5 space-y-1 text-sm">
            <li>Roadmap & Priorisierung</li>
            <li>Monitoring & Alerts</li>
            <li>Security & Updates</li>
          </ul>
        </div>
      </section>

      <section className="mt-12">
        <div className="rounded-3xl border p-8 md:p-10 text-center">
          <h3 className="text-2xl md:text-3xl font-semibold">
            Projekt in {cityName} geplant?
          </h3>
          <p className="mt-3 text-muted-foreground">
            Wir liefern pragmatische Lösungen – schnell, messbar, skalierbar.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/contact" className="rounded-2xl border px-5 py-3 font-medium shadow-sm hover:bg-zinc-50">
              Unverbindlich anfragen
            </Link>
            <Link href="/projects" className="rounded-2xl border px-5 py-3 font-medium shadow-sm hover:bg-zinc-50">
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}