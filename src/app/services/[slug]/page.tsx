              <div className="md:col-span-6 flex items-center justify-center">
                <div className="relative h-64 md:h-80 w-full max-w-md rounded-2xl overflow-hidden border bg-white flex items-center justify-center">
                  <Image
                    src="/images/Rakete.png"
                    alt="Rakete"
                    fill
                    className="object-contain p-6"
                    sizes="(min-width: 768px) 50vw, 100vw"
                    priority
                  />
                </div>
              </div>
// src/app/services/[slug]/page.tsx
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import styles from "./slug-hero.module.css";
import { getAllServiceSlugs, getServiceBySlug } from "@/data/services";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import MultiStepLead from "@/components/MultiStepLead";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const s = getServiceBySlug(params.slug);
  return {
    title: s ? `${s.title} | Antrieb 2.0` : "Service | Antrieb 2.0",
    description: s?.description,
  };
}

export default function ServiceDetailPage({ params }: Props) {
  const service = getServiceBySlug(params.slug);
  if (!service) return notFound();

  return (
    <>
      <main>
        <Navbar />
        {/* Hero */}
        <section className="relative overflow-hidden border-b">
          {/* Rakete als Hintergrund */}
          <Image
            src="/images/Rakete.png"
            alt="Rakete"
            width={1200}
            height={1200}
            className={styles["bg-rocket"]}
            aria-hidden
            priority
          />
          <div className="container mx-auto px-4 py-12 md:py-16">
            <div className={styles["hero-content-bg"]}>
            <nav className="text-sm text-zinc-500">
              <Link href="/services" className="hover:underline">
                Dienstleistungen
              </Link>
              <span className="mx-2">/</span>
              <span className="text-zinc-700">{service.title}</span>
            </nav>
            <div className="mt-4 grid gap-8 md:grid-cols-12 items-center">
              <div className="md:col-span-6">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                  {service.icon}
                </div>
                <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
                  {service.title}
                </h1>
                <p className="mt-3 text-zinc-600">
                  {service.longDescription ?? service.description}
                </p>
                {service.highlights?.length ? (
                  <ul className="mt-5 grid gap-2 text-sm text-zinc-800">
                    {service.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2">
                        <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/10 text-blue-700">
                          ✓
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}

                {/* Ablauf */}
                {service.process?.length ? (
                  <div className="mt-8">
                    <h3 className="font-semibold text-lg mb-2">Ablauf</h3>
                    <ol className="list-decimal ml-6 text-zinc-700 space-y-1">
                      {service.process.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ol>
                  </div>
                ) : null}

                {/* Zielgruppen */}
                {service.targetGroups?.length ? (
                  <div className="mt-8">
                    <h3 className="font-semibold text-lg mb-2">Für wen geeignet?</h3>
                    <ul className="list-disc ml-6 text-zinc-700 space-y-1">
                      {service.targetGroups.map((group, i) => (
                        <li key={i}>{group}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {/* Anwendungsbeispiele */}
                {service.examples?.length ? (
                  <div className="mt-8">
                    <h3 className="font-semibold text-lg mb-2">Anwendungsbeispiele</h3>
                    <ul className="list-disc ml-6 text-zinc-700 space-y-1">
                      {service.examples.map((ex, i) => (
                        <li key={i}>{ex}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                <div className="mt-6">
                  <MultiStepLead />
                </div>
              </div>
              {/* Kein extra Bild mehr, Rakete ist jetzt Hintergrund */}
            </div>
            </div>
          </div>
        </section>
  {/* Galerie entfernt */}
        {/* FAQs */}
        {service.faqs?.length ? (
          <section className="container mx-auto px-4 py-10 md:py-14">
            <h2 className="text-xl font-semibold">Häufige Fragen</h2>
            <div className="mt-4 space-y-3">
              {service.faqs.map((f, i) => (
                <details key={i} className="rounded-xl border p-4 open:bg-zinc-50">
                  <summary className="cursor-pointer select-none font-medium text-zinc-900">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-zinc-700">{f.a}</p>
                </details>
              ))}
            </div>
          </section>
        ) : null}
        {/* Case-Studies */}
        {service.caseStudies?.length ? (
          <section className="container mx-auto px-4 py-10 md:py-14">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Case-Studies</h2>
              <Link href="/references" className="text-sm text-blue-700 hover:underline">
                Alle Referenzen
              </Link>
            </div>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {service.caseStudies.map((c) => (
                <div key={c.title} className="rounded-2xl border p-5 hover:shadow-md transition">
                  <h3 className="font-semibold">{c.title}</h3>
                  <p className="mt-1 text-sm text-zinc-600">{c.summary}</p>
                  {c.href && (
                    <Link href={c.href} className="mt-3 inline-flex items-center gap-1 text-sm text-blue-700">
                      Mehr lesen
                      <svg width="16" height="16" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5 12h12m-4-6 6 6-6 6" />
                      </svg>
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </section>
        ) : null}
        {/* Lead-Section */}
        <section className="bg-gradient-to-br from-blue-50 to-white py-16 border-t mt-10">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-800">Jetzt unverbindlich beraten lassen!</h2>
            <p className="mb-6 text-lg text-zinc-700">Nutze unser interaktives Anfrage-Formular und sichere dir ein kostenloses Erstgespräch. Wir melden uns innerhalb von 24h persönlich bei dir!</p>
            <a
              href="/contact"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 rounded-xl text-lg shadow-lg transition-all"
            >
              Kontakt aufnehmen
            </a>
            <div className="mt-8 text-zinc-500 text-xs">* Alle Anfragen sind unverbindlich & vertraulich.</div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
