// src/app/services/page.tsx
import Link from "next/link";
import Image from "next/image";
import { SERVICES, type ServiceItem } from "@/data/services";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import HeroMultiStepTrigger from "@/components/HeroMultiStepTrigger";

export const metadata = {
  title: "Digitale Dienstleistungen & Services | Antrieb 2.0",
  description:
    "Professionelle digitale Dienstleistungen: Strategieberatung, Softwareentwicklung, Cloud, KI, Website, App & E-Commerce.",
};

const ServicesPage = () => {
  const services = SERVICES;

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-b from-zinc-50 to-white py-16 md:py-24">
          <div className="container mx-auto px-4">
            <header className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm text-blue-700 font-medium">
                ⚡ Unsere Dienstleistungen
              </span>
              <h1 className="mt-6 text-4xl md:text-6xl font-extrabold tracking-tight">
                Digitale Lösungen, die Ihr Business <span className="text-blue-600">voranbringen</span>
              </h1>
              <p className="mt-5 text-lg text-zinc-600 leading-relaxed">
                Von der Strategie bis zur Umsetzung – wir entwickeln maßgeschneiderte digitale Produkte mit echtem Business-Impact.
              </p>
              <div className="mt-8">
                <HeroMultiStepTrigger />
              </div>
            </header>
          </div>
        </section>

        {/* Trust-Signale */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-zinc-600">
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✓</span>
                <span className="font-medium">Über 50 zufriedene Kunden</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✓</span>
                <span className="font-medium">Kostenlose Erstberatung</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✓</span>
                <span className="font-medium">Transparente Preise</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-green-600 text-xl">✓</span>
                <span className="font-medium">Agile Arbeitsweise</span>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Unsere Services im Detail</h2>
              <p className="mt-3 text-zinc-600 max-w-2xl mx-auto">
                Wählen Sie den Service, der zu Ihren Zielen passt – oder lassen Sie sich von uns beraten, welche Lösung optimal ist.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s: ServiceItem) => typeof s.href === "string")
                .map((s: ServiceItem) => (
                <Link
                  key={s.slug}
                  href={s.href as string}
                  className="group relative overflow-hidden rounded-2xl border bg-white hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  {s.heroImage && (
                    <div className="relative h-40 w-full">
                      <Image
                        src={s.heroImage}
                        alt={s.title}
                        fill
                        sizes="(min-width: 768px) 33vw, 100vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent opacity-80" />
                    </div>
                  )}
                  <div className="p-6">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
                      {s.icon}
                    </div>
                    <h2 className="mt-4 text-xl font-bold">{s.title}</h2>
                    <p className="mt-2 text-sm text-zinc-600 leading-relaxed">{s.description}</p>
                    {s.highlights && s.highlights.length > 0 && (
                      <ul className="mt-4 space-y-1">
                        {s.highlights.slice(0, 3).map((h, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-zinc-500">
                            <span className="text-blue-600 mt-0.5">→</span>
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    <span className="mt-5 inline-flex items-center gap-1 text-sm text-blue-700 font-semibold group-hover:gap-2 transition-all">
                      Mehr erfahren
                      <svg width="16" height="16" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M5 12h12m-4-6 6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Warum Antrieb 2.0? */}
        <section className="bg-gradient-to-b from-zinc-50 to-white py-16 md:py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold">Warum Antrieb 2.0?</h2>
                <p className="mt-3 text-zinc-600">Was uns von anderen Agenturen unterscheidet</p>
              </div>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <div className="text-4xl mb-4">🎯</div>
                  <h3 className="font-bold text-lg mb-2">Individuelle Lösungen</h3>
                  <p className="text-sm text-zinc-600">Keine Templates, keine Massenware. Jedes Projekt wird individuell auf Ihre Bedürfnisse zugeschnitten.</p>
                </div>
                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <div className="text-4xl mb-4">⚡</div>
                  <h3 className="font-bold text-lg mb-2">Schnelle Umsetzung</h3>
                  <p className="text-sm text-zinc-600">Agile Arbeitsweise mit kurzen Feedback-Zyklen. Sie sehen schnell erste Ergebnisse.</p>
                </div>
                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <div className="text-4xl mb-4">🤝</div>
                  <h3 className="font-bold text-lg mb-2">Persönlicher Support</h3>
                  <p className="text-sm text-zinc-600">Ein fester Ansprechpartner für Ihr Projekt. Keine Ticketsysteme, keine Warteschleifen.</p>
                </div>
                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <div className="text-4xl mb-4">💰</div>
                  <h3 className="font-bold text-lg mb-2">Faire Preise</h3>
                  <p className="text-sm text-zinc-600">Transparente Kalkulation ohne versteckte Kosten. Sie wissen vorher genau, was Sie bekommen.</p>
                </div>
                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <div className="text-4xl mb-4">🔒</div>
                  <h3 className="font-bold text-lg mb-2">Datenschutz & Sicherheit</h3>
                  <p className="text-sm text-zinc-600">DSGVO-konform, sichere Infrastruktur und vertraulicher Umgang mit Ihren Daten.</p>
                </div>
                <div className="bg-white rounded-xl border p-6 shadow-sm">
                  <div className="text-4xl mb-4">📈</div>
                  <h3 className="font-bold text-lg mb-2">Messbare Erfolge</h3>
                  <p className="text-sm text-zinc-600">Wir liefern Ergebnisse, die Sie messen können. Keine leeren Versprechen.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-br from-blue-600 to-indigo-700 py-16 md:py-20 text-white">
          <div className="container mx-auto max-w-3xl px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Bereit für Ihr nächstes Projekt?</h2>
            <p className="mb-8 text-lg text-blue-100 leading-relaxed">
              Lassen Sie uns in einem kostenlosen Erstgespräch über Ihre Ziele sprechen. 
              Wir zeigen Ihnen, wie wir Ihr Business digital voranbringen können.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <HeroMultiStepTrigger />
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
                <span>Unverbindlich</span>
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
};

export default ServicesPage;

