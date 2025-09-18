import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Referenzen | Antrieb2.0",
  description:
    "Entdecken Sie unsere erfolgreichen Projekte und Kundenreferenzen. Von digitalen Transformationen bis hin zu innovativen Web-Lösungen.",
  keywords:
    "digital transformation,business solutions,IT consulting,software development,Germany,innovation,technology consulting,digital strategy",
  authors: [{ name: "Antrieb2.0" }],
  creator: "Antrieb2.0",
  publisher: "Antrieb2.0",
  robots: "index, follow",
  openGraph: {
    title: "Referenzen | Antrieb2.0",
    description:
      "Entdecken Sie unsere erfolgreichen Projekte und Referenzen aus verschiedenen Branchen. Von digitaler Transformation bis zu KI-Lösungen.",
    locale: "de_DE",
    type: "website",
  },
};

const LOGOS = [
  { src: "/images/services/lflogo.png", alt: "lf-logo" },
  { src: "/images/partners/bba-logo.svg", alt: "bba-logo" },
  { src: "/images/partners/db-logo.svg", alt: "db-logo" },
  { src: "/images/partners/dh-logo.svg", alt: "dh-logo" },
  { src: "/images/partners/evo-logo.svg", alt: "evo-logo" },
  { src: "/images/partners/jsp-logo.svg", alt: "jsp-logo" },
  { src: "/images/partners/afs-logo.svg", alt: "afs-logo" },
  { src: "/images/partners/mlk-logo.svg", alt: "mlk-logo" },
  { src: "/images/partners/mlk-s-logo.svg", alt: "mlk-s-logo" },
  { src: "/images/partners/nv-logo.svg", alt: "nv-logo" },
  { src: "/images/partners/qn-logo.svg", alt: "qn-logo" },
];

export default function ReferenzenPage() {
  return (
    <>
      <Navbar />
      <div className="bg-background min-h-screen flex flex-col">
        <section className="py-16 bg-white border-b">
          <div className="container mx-auto text-center">
            <div className="text-lg text-primary font-semibold mb-2">
              Unsere Kunden. Unsere Motivation.
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Vertrauen von starken Marken & Unternehmen
            </h2>
            <div className="flex flex-wrap justify-center items-center gap-10">
              {LOGOS.map((logo) => (
                <Image
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={48}
                  className="h-12 transition"
                />
              ))}
            </div>
          </div>
        </section>
        <main className="flex-1" id="referenzen-grid">
          {/* Hier können weitere Projekt-Referenzen als Grid ergänzt werden */}
        </main>
        <section className="bg-primary/5 py-16 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              Bereit für Ihr eigenes Erfolgsprojekt?
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Lassen Sie uns gemeinsam Ihre digitale Transformation starten. Wir beraten Sie unverbindlich und individuell.
            </p>
            <Link href="/contact">
              <button className="inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-white shadow hover:bg-blue-700 h-12 rounded-md text-lg px-8 py-4">
                Jetzt Kontakt aufnehmen
              </button>
            </Link>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
