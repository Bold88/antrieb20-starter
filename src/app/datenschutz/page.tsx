
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Datenschutzerklärung | Antrieb2.0 | Antrieb2.0",
  description: "Informationen zum Datenschutz und zur Verarbeitung Ihrer Daten bei Antrieb2.0",
};

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col pt-16">
        <section className="relative w-full py-16">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl relative">
            <div className="text-center mb-16">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield w-8 h-8 text-primary"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
              </div>
              <h1 className="text-4xl font-bold mb-4">Datenschutzerklärung</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Ihre Privatsphäre ist uns wichtig</p>
              <p className="text-sm text-muted-foreground mt-2">Stand: März 2024</p>
            </div>
            {/* Löschung von Daten */}
            <div className="glass-morphism p-8 rounded-2xl mb-12 border-2 border-primary/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-lock w-6 h-6 text-primary"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Löschung von Daten</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Der für die Verarbeitung Verantwortliche verarbeitet und speichert personenbezogene Daten der betroffenen Person nur für den Zeitraum, der zur Erreichung des Speicherungszwecks erforderlich ist oder sofern dies durch den Europäischen Richtlinien- und Verordnungsgeber oder einen anderen Gesetzgeber in Gesetzen oder Vorschriften, welchen der für die Verarbeitung Verantwortliche unterliegt, vorgesehen wurde.</p>
                    <p>Entfällt der Speicherungszweck oder läuft eine vom Europäischen Richtlinien- und Verordnungsgeber oder einem anderen zuständigen Gesetzgeber vorgeschriebene Speicherfrist ab, werden die personenbezogenen Daten routinemäßig und entsprechend den gesetzlichen Vorschriften gelöscht.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Ihre Rechte */}
            <div className="glass-morphism p-8 rounded-2xl mb-12 border-2 border-primary/10">
              <div className="flex items-start gap-4 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-key w-6 h-6 text-primary"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4" /><path d="m21 2-9.6 9.6" /><circle cx="7.5" cy="15.5" r="5.5" /></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Ihre Rechte</h3>
                  <p className="text-muted-foreground mb-6">Als betroffene Person haben Sie folgende Rechte:</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h4 className="font-semibold mb-2">Recht auf Bestätigung</h4>
                  <p className="text-sm text-muted-foreground">Sie können eine Bestätigung über die Verarbeitung Ihrer Daten verlangen.</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h4 className="font-semibold mb-2">Recht auf Auskunft</h4>
                  <p className="text-sm text-muted-foreground">Sie haben das Recht auf kostenlose Information über Ihre gespeicherten Daten.</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h4 className="font-semibold mb-2">Recht auf Berichtigung</h4>
                  <p className="text-sm text-muted-foreground">Sie können die Berichtigung unrichtiger Daten verlangen.</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h4 className="font-semibold mb-2">Recht auf Löschung</h4>
                  <p className="text-sm text-muted-foreground">Sie haben das Recht auf Löschung Ihrer gespeicherten Daten.</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h4 className="font-semibold mb-2">Recht auf Einschränkung</h4>
                  <p className="text-sm text-muted-foreground">Sie können die Einschränkung der Datenverarbeitung verlangen.</p>
                </div>
                <div className="p-6 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <h4 className="font-semibold mb-2">Recht auf Datenübertragbarkeit</h4>
                  <p className="text-sm text-muted-foreground">Sie haben das Recht, Ihre Daten in einem strukturierten Format zu erhalten.</p>
                </div>
              </div>
            </div>
            {/* Kontaktformular */}
            <div className="glass-morphism p-8 rounded-2xl mb-12 border-2 border-primary/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-6 h-6 text-primary"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Kontaktformular</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Die Internetseite der Antrieb 2.0 enthält aufgrund von gesetzlichen Vorschriften Angaben, die eine schnelle elektronische Kontaktaufnahme zu unserem Unternehmen sowie eine unmittelbare Kommunikation mit uns ermöglichen, was ebenfalls eine allgemeine Adresse der sogenannten elektronischen Post (E-Mail-Adresse) umfasst.</p>
                    <p>Sofern eine betroffene Person über E-Mail oder ein Kontaktformular den Kontakt mit uns aufnimmt, werden die von der betroffenen Person übermittelten personenbezogenen Daten automatisch gespeichert. Eine Übermittlung solcher personenbezogenen Daten an Dritte erfolgt nicht.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Datensicherheit */}
            <div className="glass-morphism p-8 rounded-2xl mb-12 border-2 border-primary/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert w-6 h-6 text-primary"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Datensicherheit</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Im Rahmen der Nutzung unserer Website werden Ihre Daten durch technische und organisatorische Maßnahmen geschützt. Wir verwenden Verschlüsselungsverfahren, um Ihre Daten bei der Übertragung zu schützen.</p>
                    <p>Unsere Mitarbeiter werden regelmäßig im Umgang mit personenbezogenen Daten geschult und sind zur Einhaltung der Datenschutzbestimmungen verpflichtet.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Aktualisierungen */}
            <div className="glass-morphism p-8 rounded-2xl mb-12 border-2 border-primary/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bell w-6 h-6 text-primary"><path d="M10.268 21a2 2 0 0 0 3.464 0" /><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326" /></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Aktualisierungen der Datenschutzerklärung</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer Services.</p>
                    <p>Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Kontakt Datenschutz */}
            <div className="glass-morphism p-8 rounded-2xl mb-12 border-2 border-primary/10">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-building2 w-6 h-6 text-primary"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" /><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" /><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" /><path d="M10 6h4" /><path d="M10 10h4" /><path d="M10 14h4" /><path d="M10 18h4" /></svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Kontakt für Datenschutz</h3>
                  <div className="space-y-4 text-muted-foreground">
                    <p>Bei Fragen zur Erhebung, Verarbeitung oder Nutzung Ihrer personenbezogenen Daten, bei Auskünften, Berichtigung, Sperrung oder Löschung von Daten wenden Sie sich bitte an:</p>
                    <div className="mt-4 space-y-2">
                      <p>Antrieb 2.0 UG</p>
                      <p>Hauptstraße 136</p>
                      <p>33647 Bielefeld</p>
                      <p>Telefon: +49 157 54918486</p>
                      <p>E-Mail: Willkommen@antrieb2punkt0.de</p>
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
