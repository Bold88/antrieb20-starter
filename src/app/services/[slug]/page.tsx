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
                <p className="mt-3 text-zinc-600 text-lg">
                  {service.longDescription ?? service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <MultiStepLead />
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-300 bg-white px-6 py-3 text-sm font-semibold text-zinc-800 hover:bg-zinc-50 transition shadow-sm"
                  >
                    Kostenlose Beratung
                  </Link>
                </div>

                {/* Trust-Signale */}
                <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-zinc-600">
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Kostenlose Erstberatung</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Transparente Preise</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-600 text-xl">✓</span>
                    <span>Schnelle Umsetzung</span>
                  </div>
                </div>

                {service.highlights?.length ? (
                  <ul className="mt-6 grid gap-2 text-sm text-zinc-800">
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
              </div>
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
            </div>
            </div>
          </div>
        </section>

        {/* Problem-Lösung-Benefit Sektion */}
        <section className="bg-gradient-to-b from-zinc-50 to-white py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-10">
                <h2 className="text-2xl md:text-3xl font-bold">Warum {service.title}?</h2>
                <p className="mt-3 text-zinc-600">Die Vorteile auf einen Blick</p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="font-semibold text-lg mb-2">Schneller Erfolg</h3>
                  <p className="text-sm text-zinc-600">Erste Ergebnisse sehen Sie bereits in den ersten Wochen. Wir arbeiten agil und liefern kontinuierlich.</p>
                </div>
                <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition">
                  <div className="text-3xl mb-3">💰</div>
                  <h3 className="font-semibold text-lg mb-2">Faire Preise</h3>
                  <p className="text-sm text-zinc-600">Transparente Kalkulation ohne versteckte Kosten. Sie wissen vorher genau, was Sie bekommen.</p>
                </div>
                <div className="bg-white rounded-xl border p-6 shadow-sm hover:shadow-md transition">
                  <div className="text-3xl mb-3">🎯</div>
                  <h3 className="font-semibold text-lg mb-2">Maßgeschneidert</h3>
                  <p className="text-sm text-zinc-600">Keine Template-Lösungen. Wir entwickeln individuell für Ihre Anforderungen und Ziele.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ablauf */}
        {service.process?.length ? (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Unser bewährter Prozess</h2>
                <div className="space-y-6">
                  {service.process.map((step, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
                        {i + 1}
                      </div>
                      <div className="flex-1 bg-white rounded-xl border p-5 shadow-sm">
                        <p className="text-zinc-800">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* Zielgruppen */}
        {service.targetGroups?.length ? (
          <section className="bg-zinc-50 py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Perfekt für Sie, wenn...</h2>
                <p className="text-center text-zinc-600 mb-10">Diese Unternehmen profitieren besonders von {service.title}</p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.targetGroups.map((group, i) => (
                    <div key={i} className="bg-white rounded-xl border p-5 shadow-sm flex items-start gap-3">
                      <span className="text-blue-600 text-xl mt-1">→</span>
                      <p className="text-zinc-800">{group}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* Anwendungsbeispiele */}
        {service.examples?.length ? (
          <section className="py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Konkrete Anwendungsfälle</h2>
                <div className="grid gap-4 sm:grid-cols-2">
                  {service.examples.map((ex, i) => (
                    <div key={i} className="bg-gradient-to-br from-blue-50 to-white rounded-xl border p-5 shadow-sm hover:shadow-md transition">
                      <div className="flex items-start gap-3">
                        <span className="text-2xl">💡</span>
                        <p className="text-zinc-800 font-medium">{ex}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}
        {/* FAQs */}
        {service.faqs?.length ? (
          <section className="container mx-auto px-4 py-12 md:py-16 bg-white">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-3">Häufig gestellte Fragen</h2>
              <p className="text-center text-zinc-600 mb-10">Alles, was Sie über {service.title} wissen müssen</p>
              <div className="space-y-3">
                {service.faqs.map((f, i) => (
                  <details key={i} className="rounded-xl border p-5 open:bg-zinc-50 group">
                    <summary className="cursor-pointer select-none font-medium text-zinc-900 flex items-center justify-between">
                      <span>{f.q}</span>
                      <span className="ml-4 text-zinc-400 group-open:rotate-180 transition">▼</span>
                    </summary>
                    <p className="mt-3 text-zinc-700 leading-relaxed">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {/* Social Proof - Case Studies */}
        {service.caseStudies?.length ? (
          <section className="bg-gradient-to-b from-zinc-50 to-white py-12 md:py-16">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <div className="text-center mb-10">
                  <h2 className="text-2xl md:text-3xl font-bold">Erfolgsgeschichten</h2>
                  <p className="mt-3 text-zinc-600">So haben wir anderen Unternehmen geholfen</p>
                  <Link href="/referenzen" className="mt-2 inline-flex items-center gap-1 text-sm text-blue-700 hover:underline">
                    Alle Referenzen ansehen →
                  </Link>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {service.caseStudies.map((c) => (
                    <div key={c.title} className="bg-white rounded-2xl border p-6 shadow-sm hover:shadow-lg transition">
                      <div className="text-3xl mb-3">🏆</div>
                      <h3 className="font-bold text-lg mb-2">{c.title}</h3>
                      <p className="text-zinc-600 leading-relaxed">{c.summary}</p>
                      {c.href && (
                        <Link href={c.href} className="mt-4 inline-flex items-center gap-1 text-sm text-blue-700 font-medium hover:underline">
                          Mehr erfahren
                          <svg width="16" height="16" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M5 12h12m-4-6 6 6-6 6" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ) : null}

        {/* Garantien & Vertrauensaufbau */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">Darauf können Sie sich verlassen</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <div className="text-center p-6">
                  <div className="text-4xl mb-3">🤝</div>
                  <h3 className="font-semibold mb-2">Persönlicher Ansprechpartner</h3>
                  <p className="text-sm text-zinc-600">Sie haben immer einen festen Ansprechpartner – kein Ticket-System, keine Warteschleifen.</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl mb-3">⚡</div>
                  <h3 className="font-semibold mb-2">Schnelle Reaktion</h3>
                  <p className="text-sm text-zinc-600">Wir antworten innerhalb von 24 Stunden – oft deutlich schneller.</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl mb-3">🔒</div>
                  <h3 className="font-semibold mb-2">Datenschutz & Sicherheit</h3>
                  <p className="text-sm text-zinc-600">DSGVO-konform, sichere Infrastruktur und vertraulicher Umgang mit Ihren Daten.</p>
                </div>
                <div className="text-center p-6">
                  <div className="text-4xl mb-3">🎯</div>
                  <h3 className="font-semibold mb-2">Ergebnisorientiert</h3>
                  <p className="text-sm text-zinc-600">Wir liefern messbare Ergebnisse, keine leeren Versprechen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dringlichkeit & Call-to-Action */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 md:py-20 text-white">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur rounded-full px-4 py-2 text-sm mb-6">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Noch Kapazitäten verfügbar
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Starten Sie jetzt Ihr Projekt!</h2>
            <p className="mb-8 text-lg text-blue-100 leading-relaxed">
              Nutzen Sie unser interaktives Anfrage-Formular und sichern Sie sich ein kostenloses Erstgespräch. 
              Wir melden uns innerhalb von 24 Stunden persönlich bei Ihnen!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <MultiStepLead />
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold py-4 px-10 rounded-xl text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
              >
                Kontakt aufnehmen
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-blue-100">
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Kostenlose Beratung</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Unverbindlich & vertraulich</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-400">✓</span>
                <span>Antwort in 24h</span>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
