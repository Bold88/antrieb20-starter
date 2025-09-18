import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "AGB | Antrieb2.0 | Antrieb2.0",
  description: "Allgemeine Geschäftsbedingungen der Antrieb2.0",
};

export default function AgbPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col pt-16">
        <section className="relative w-full py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-scale w-8 h-8 text-primary"><path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z"/><path d="M7 21h10"/><path d="M12 3v18"/><path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2"/></svg>
              </div>
              <h1 className="text-4xl font-bold mb-4">Allgemeine Geschäftsbedingungen</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Gültig ab 01.03.2024</p>
            </div>
            {/* §1 Allgemeines */}
            <div className="glass-morphism p-8 rounded-2xl mb-12 border-2 border-primary/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-check w-6 h-6 text-primary"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m9 15 2 2 4-4"/></svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">§1 Allgemeines</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Diese Allgemeinen Geschäftsbedingungen gelten für alle Geschäftsbeziehungen zwischen der Antrieb 2.0 UG (nachfolgend "Antrieb 2.0") und ihren Kunden. Sie regeln die Bedingungen für die Erbringung von Dienstleistungen im Bereich der digitalen Transformation und Prozessoptimierung.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* §2 Leistungen */}
            <div className="glass-morphism p-8 rounded-2xl mb-12 border-2 border-primary/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check w-6 h-6 text-primary"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">§2 Leistungen</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2 p-4 rounded-lg bg-primary/5"><div className="w-2 h-2 rounded-full bg-primary" /><span>Digitale Transformation</span></div>
                      <div className="flex items-center gap-2 p-4 rounded-lg bg-primary/5"><div className="w-2 h-2 rounded-full bg-primary" /><span>Prozessoptimierung</span></div>
                      <div className="flex items-center gap-2 p-4 rounded-lg bg-primary/5"><div className="w-2 h-2 rounded-full bg-primary" /><span>Beratungsleistungen</span></div>
                      <div className="flex items-center gap-2 p-4 rounded-lg bg-primary/5"><div className="w-2 h-2 rounded-full bg-primary" /><span>Implementierung</span></div>
                      <div className="flex items-center gap-2 p-4 rounded-lg bg-primary/5"><div className="w-2 h-2 rounded-full bg-primary" /><span>Schulungen</span></div>
                      <div className="flex items-center gap-2 p-4 rounded-lg bg-primary/5"><div className="w-2 h-2 rounded-full bg-primary" /><span>Support</span></div>
                    </div>
                    <p className="text-muted-foreground mt-6">Der genaue Umfang der Leistungen wird im jeweiligen Einzelvertrag festgelegt.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* §4 Zahlungsbedingungen */}
            <div className="glass-morphism p-8 rounded-2xl mb-12 border-2 border-primary/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert w-6 h-6 text-primary"><circle cx="12" cy="12" r="10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">§4 Zahlungsbedingungen</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-4 rounded-lg bg-primary/5">
                        <h3 className="font-semibold mb-2">Rechnungsstellung</h3>
                        <p className="text-sm text-muted-foreground">Die Rechnungsstellung erfolgt monatlich zum Monatsende. Die Zahlung ist innerhalb von 14 Tagen nach Rechnungserhalt fällig.</p>
                      </div>
                      <div className="p-4 rounded-lg bg-primary/5">
                        <h3 className="font-semibold mb-2">Verzug</h3>
                        <p className="text-sm text-muted-foreground">Bei Zahlungsverzug behält sich Antrieb 2.0 das Recht vor, die Leistungserbringung bis zum Ausgleich der offenen Forderungen einzustellen.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* §5 Haftung */}
            <div className="glass-morphism p-8 rounded-2xl mb-12 border-2 border-primary/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-ban w-6 h-6 text-primary"><circle cx="12" cy="12" r="10"/><path d="m4.9 4.9 14.2 14.2"/></svg>
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-semibold mb-4">§5 Haftung</h2>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Antrieb 2.0 haftet für Vorsatz und grobe Fahrlässigkeit. Die Haftung für leichte Fahrlässigkeit ist ausgeschlossen, soweit es sich nicht um die Verletzung einer wesentlichen Vertragspflicht handelt.</p>
                    <p>Die Haftung ist der Höhe nach auf den vertragstypischen, vorhersehbaren Schaden begrenzt.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* §6 Schlussbestimmungen */}
            <div className="glass-morphism p-8 rounded-2xl mb-12 border-2 border-primary/10">
              <div className="flex items-start gap-4">
                <div>
                  <h2 className="text-2xl font-semibold mb-4">§6 Schlussbestimmungen</h2>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 gap-4">
                      <div className="p-4 rounded-lg bg-primary/5">
                        <h3 className="font-semibold mb-2">Gerichtsstand</h3>
                        <p className="text-sm text-muted-foreground">Gerichtsstand ist Bielefeld, Deutschland.</p>
                      </div>
                      <div className="p-4 rounded-lg bg-primary/5">
                        <h3 className="font-semibold mb-2">Salvatorische Klausel</h3>
                        <p className="text-sm text-muted-foreground">Sollten einzelne Bestimmungen dieser AGB unwirksam sein, berührt dies die Gültigkeit der übrigen Bestimmungen nicht.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
