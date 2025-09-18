
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Impressum | Antrieb 2.0 | Antrieb2.0",
  description: "Impressum und rechtliche Informationen von Antrieb 2.0",
};

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto pt-32 pb-16 px-4 sm:px-8 mt-32">
        {/* ...Seiteninhalt unverändert... */}
        <h1 className="text-4xl font-extrabold mb-8">Impressum</h1>
        <section className="mb-8">
          <div className="font-bold text-lg mb-1">Antrieb 2.0 UG (haftungsbeschränkt)</div>
          <div>Hauptstraße 136</div>
          <div>33647 Bielefeld</div>
          <div>Nordrhein-Westfalen</div>
          <div>Deutschland</div>
          <div className="mt-1 text-muted-foreground">antrieb2punkt0.de</div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Kontakt</h2>
          <div>Telefon: <a href="tel:01735785281" className="hover:text-primary underline">0173 5785281</a></div>
          <div>E-Mail: <a href="mailto:info@antrieb2punkt0.de" className="hover:text-primary underline">info@antrieb2punkt0.de</a></div>
          <div>Website: <a href="https://antrieb2punkt0.de" className="hover:text-primary underline">antrieb2punkt0.de</a></div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Vertreten durch</h2>
          <div>Geschäftsführer: <span className="font-medium">Bold Molor</span></div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Haftungsausschluss</h2>
          <div className="mb-1 font-semibold">Haftung für Inhalte</div>
          <p className="mb-4 text-muted-foreground">Die Inhalte unserer Seiten wurden sorgfältig erstellt. Für deren Aktualität, Richtigkeit und Vollständigkeit können wir jedoch keine Gewähr übernehmen.</p>
          <div className="mb-1 font-semibold">Haftung für Links</div>
          <p className="text-muted-foreground">Unsere Seiten enthalten Links zu externen Websites Dritter. Für deren Inhalte sind wir nicht verantwortlich und übernehmen keine Haftung.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Urheberrecht</h2>
          <p className="text-muted-foreground">Die durch Antrieb 2.0 UG erstellten Inhalte auf dieser Website sind urheberrechtlich geschützt. Beiträge Dritter sind als solche gekennzeichnet. Jegliche Nutzung – insbesondere Vervielfältigung, Bearbeitung oder Verbreitung – bedarf der vorherigen schriftlichen Zustimmung des Urhebers.</p>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Pflichtangaben gem. § 5 TMG</h2>
          <div className="mb-1">Unternehmensname: <span className="font-medium">Antrieb 2.0 UG (haftungsbeschränkt)</span></div>
          <div className="mb-1">Rechtsform: Unternehmergesellschaft (haftungsbeschränkt)</div>
          <div className="mb-1">Sitz: Bielefeld</div>
          <div className="mb-1">Geschäftsführer: <span className="font-medium">Bold Molor</span></div>
          <div className="mb-1">Handelsregister: HRB 45885</div>
          <div className="mb-1">Amtsgericht: Bielefeld</div>
        </section>
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Hinweise & Empfehlungen</h2>
          <ul className="list-disc pl-6 text-muted-foreground space-y-1">
            <li>USt‑ID: Falls vorhanden, bitte ebenfalls ergänzen.</li>
            <li>Öffnungszeiten: Nicht zwingend erforderlich, können aber als zusätzlicher Service ergänzt werden.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
