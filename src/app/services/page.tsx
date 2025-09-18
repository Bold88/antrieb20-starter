// src/app/services/page.tsx
import Link from "next/link";
import Image from "next/image";
import { SERVICES, type ServiceItem } from "@/data/services";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Digitale Dienstleistungen & Services | Antrieb 2.0",
  description:
    "Professionelle digitale Dienstleistungen: Strategieberatung, Softwareentwicklung, Cloud, KI, Website, App & E-Commerce.",
};

const ServicesPage = () => {
  const services = SERVICES;

  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <header className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-sm text-zinc-700">
            Leistungen
          </span>
          <h1 className="mt-4 text-3xl md:text-5xl font-extrabold tracking-tight">
            Digitale Dienstleistungen – von Strategie bis Umsetzung
          </h1>
          <p className="mt-3 text-zinc-600">
            Expertise • Innovation • Erfolg – wir planen, bauen und betreiben digitale Lösungen, die wachsen.
          </p>
        </header>

        <section className="mt-10 grid gap-6 md:gap-8 md:grid-cols-3">
          {services
            .filter((s: ServiceItem) => typeof s.href === "string")
            .map((s: ServiceItem) => (
            <Link
              key={s.slug}
              href={s.href as string}
              className="group relative overflow-hidden rounded-2xl border bg-white hover:shadow-md transition"
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
              <div className="p-5">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700">
                  {s.icon}
                </div>
                <h2 className="mt-3 text-lg font-semibold">{s.title}</h2>
                <p className="mt-1 text-sm text-zinc-600">{s.description}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm text-blue-700">
                  Mehr erfahren
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M5 12h12m-4-6 6 6-6 6" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ServicesPage;

