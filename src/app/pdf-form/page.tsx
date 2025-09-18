import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';
import PdfLottie from '@/components/PdfLottie';

export const metadata = {
  title: 'Antrieb 2.0 | PDF Editor',
  description: 'Automatisierung für dein Unternehmen – Erkunde, wie automatisierte Prozesse dein Business effizienter und skalierbarer machen. Unsere Lösungen helfen dir, Zeit zu sparen und Wachstum voranzutreiben.',
  openGraph: {
    title: 'Antrieb 2.0 | PDF Editor',
    description: 'Automatisierung für dein Unternehmen – Erkunde, wie automatisierte Prozesse dein Business effizienter und skalierbarer machen. Unsere Lösungen helfen dir, Zeit zu sparen und Wachstum voranzutreiben.',
    url: 'https://forms-pdf.antrieb2punkt0.de/',
    siteName: 'DocuSeal',
    images: [
      {
        url: 'https://forms-pdf.antrieb2punkt0.de/packs/static/images/preview-af2864e86d25c67ec9e9.png',
        width: 800,
        height: 800,
        alt: 'PDF Editor Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Antrieb 2.0 | PDF Editor',
    description: 'Automatisierung für dein Unternehmen – Erkunde, wie automatisierte Prozesse dein Business effizienter und skalierbarer machen. Unsere Lösungen helfen dir, Zeit zu sparen und Wachstum voranzutreiben.',
    creator: '@docusealco',
    site: '@docusealco',
    images: [
      'https://forms-pdf.antrieb2punkt0.de/packs/static/images/preview-af2864e86d25c67ec9e9.png',
    ],
  },
};

export default function PdfFormPage() {
  // ...entferne den doppelten Return, verwende nur den vollständigen JSX-Block...
  return (
    <>
      <Navbar />
      <main className="main-wrapper min-h-screen bg-background pt-16">
        {/* Hero Section */}
        <section className="free-guide-header py-16 bg-gradient-to-b from-blue-100 to-white">
          <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#1e3a8a] leading-tight">Verträge digital unterschreiben – <span className="text-primary">in Sekunden</span> statt Tagen!</h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-700">PDF-Form: Die einfachste Lösung für digitale Unterschriften, die wirklich jeder versteht.</h2>
              <ul className="mb-8 text-xl text-blue-900 font-medium space-y-2">
                <li>✅ Kein Papierkram mehr – spare Zeit, Geld und Nerven</li>
                <li>✅ Unterschreiben auf jedem Gerät – sogar mit dem Finger am Handy</li>
                <li>✅ Sofort startklar, keine Installation, 100% DSGVO-konform</li>
              </ul>
              <a href="#preise" className="inline-block bg-primary text-[#1e3a8a] font-extrabold py-6 px-12 rounded-2xl shadow-2xl text-2xl hover:bg-primary/90 transition-colors mt-6 mb-10 border-4 border-blue-300 animate-pulse">Jetzt kostenlos testen</a>
            </div>
            <div className="flex-1 flex flex-col items-center">
              <img src="https://cdn.prod.website-files.com/61cc8e61cd0e3c3dc2f8a75a/61cdc2d980bba059a9014d49_Free%20guide%20mock%20up.jpg" alt="PDF Guide Mockup" className="rounded-2xl shadow-2xl w-96 mb-6" />
              <div className="badge bg-primary text-white px-4 py-2 rounded-full text-lg font-bold animate-pulse">Jetzt starten!</div>
            </div>
          </div>
        </section>
        {/* Info Section */}
        <section className="info-section py-20 bg-muted">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="flex flex-col md:flex-row gap-16 items-center">
              <div className="flex-1">
                <div className="text-style-muted mb-3 text-lg uppercase tracking-wider text-blue-700 font-bold">Warum PDF-Form?</div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6 text-blue-900">Schluss mit Papierkram – digitalisiere deine Unterschriften!</h2>
                <p className="mb-8 text-lg text-blue-900">Ob Angebot, Vertrag oder Freigabe: Mit PDF-Form unterschreibst du Dokumente in Sekunden – von überall, auf jedem Gerät. Spare dir Drucker, Scanner und Post – und begeistere deine Kunden mit einem modernen Workflow.</p>
                <ul className="mb-8 space-y-2 text-blue-800 text-base md:text-lg">
                  <li>• <b>Rechtsgültig & sicher</b> – 100% DSGVO-konform</li>
                  <li>• <b>Intuitiv</b> – keine Schulung nötig, sofort loslegen</li>
                  <li>• <b>Flexibel</b> – für Einzelunternehmer, Teams & große Unternehmen</li>
                </ul>
                <div className="mt-8">
                  <a href="#preise" className="inline-block bg-blue-700 text-white font-bold py-3 px-8 rounded-lg shadow hover:bg-blue-800 transition-colors text-lg">Jetzt Angebot sichern</a>
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center">
                {/* Lottie Animation: PDF Signatur */}
                <PdfLottie />
                <div className="badge bg-primary text-white px-4 py-2 rounded-full text-lg font-bold mt-6">Antrieb 2.0</div>
              </div>
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="guide-cta py-16">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-blue-900">Starte jetzt mit <span className="text-primary">digitalen Unterschriften</span> und bring dein Business auf Autopilot!</h2>
            <p className="mb-8 text-lg text-blue-800 font-medium">
              Schluss mit Papierkram, Wartezeiten und Stress: Mit PDF-Form unterschreibst du Verträge, Angebote und Formulare in Sekunden – überall, jederzeit, auf jedem Gerät. Spare Zeit, Geld und Nerven – und begeistere deine Kunden mit einem modernen Workflow!
            </p>
            <a href="mailto:willkommen@antrieb2punkt0.de" className="inline-block bg-gradient-to-r from-blue-600 via-primary to-blue-400 text-white font-extrabold py-5 px-10 rounded-2xl shadow-2xl text-xl hover:scale-105 hover:shadow-primary/60 transition-all mb-8 border-4 border-blue-300 animate-bounce">Jetzt ein Konto sichern</a>
            <div className="mt-8">
              <div className="text-style-muted mb-2">Mehr als 150+ 5 Sterne Bewertungen</div>
              <div className="flex justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <img key={i} src="https://cdn.prod.website-files.com/61cc8e61cd0e3c3dc2f8a75a/61cde8f3d89a5015ac3bca41_Star.svg" alt="Star" className="w-6 h-6" />
                ))}
              </div>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <img src="https://cdn.prod.website-files.com/61cc8e61cd0e3c3dc2f8a75a/61ccc5898d42bd061553d575_Lana.jpg" alt="Avatar 4" className="rounded-full w-20 h-20 object-cover" />
              <img src="https://cdn.prod.website-files.com/66f6ab1fb4d21458da10b89f/66f6b3b219bbce9d645ff97c_1487362.png" alt="Avatar 3" className="rounded-full w-20 h-20 object-cover" />
              <img src="https://cdn.prod.website-files.com/66f6ab1fb4d21458da10b89f/66f6b389017e54ef8f300565_11223016.png" alt="Avatar 1" className="rounded-full w-20 h-20 object-cover" />
            </div>
          </div>
        </section>
        {/* So funktioniert es Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-14 text-blue-900">So einfach geht's</h2>
            <div className="grid md:grid-cols-4 gap-12">
              {/* Schritt 1 */}
              <div className="flex flex-col items-center text-center">
                <img src="/images/Services/PDF-Form/H Test Beispiel Ausführung Seite 1.png" alt="PDF-Form Schritt 1" className="w-[384px] h-[384px] md:w-[504px] md:h-[504px] object-contain mb-10 rounded-3xl shadow-2xl" />
                <h3 className="font-bold text-xl md:text-2xl mb-3">1. PDF hochladen & Felder einfügen</h3>
                <p className="text-base md:text-lg text-zinc-700">Lade deine PDF hoch und platziere mit wenigen Klicks alle Felder, die du brauchst – <b>ganz ohne Vorkenntnisse</b>.</p>
              </div>
              {/* Schritt 2 */}
              <div className="flex flex-col items-center text-center">
                <img src="/images/Services/PDF-Form/H Test Beispiel Ausführung Seite 2.png" alt="PDF-Form Schritt 2" className="w-[384px] h-[384px] md:w-[504px] md:h-[504px] object-contain mb-10 rounded-3xl shadow-2xl" />
                <h3 className="font-bold text-xl md:text-2xl mb-3">2. Link zum Ausfüllen erhalten</h3>
                <p className="text-base md:text-lg text-zinc-700">Mit einem Klick erhältst du einen Link, den du sofort an Kunden, Kollegen oder Partner verschicken kannst.</p>
              </div>
              {/* Schritt 3 */}
              <div className="flex flex-col items-center text-center">
                <img src="/images/Services/PDF-Form/Seitenbild 1.png" alt="PDF-Form Schritt 3" className="w-[384px] h-[384px] md:w-[504px] md:h-[504px] object-contain mb-10 rounded-3xl shadow-2xl" />
                <h3 className="font-bold text-xl md:text-2xl mb-3">3. Ausfüllen & Signieren auf jedem Gerät</h3>
                <p className="text-base md:text-lg text-zinc-700">Jeder kann das Dokument <b>sofort</b> auf jedem Gerät ausfüllen und mit dem Finger unterschreiben – <span className="text-primary font-bold">egal ob Smartphone, Tablet oder PC</span>. Keine App, kein Stress!</p>
                <span className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded-full text-sm font-bold animate-bounce">Highlight: Touch-Signatur auf allen Geräten!</span>
              </div>
              {/* Schritt 4 */}
              <div className="flex flex-col items-center text-center">
                <img src="/images/Services/PDF-Form/Wie man seine e.signatur setzt.png" alt="PDF-Form Schritt 4" className="w-[384px] h-[384px] md:w-[504px] md:h-[504px] object-contain mb-10 rounded-3xl shadow-2xl" />
                <h3 className="font-bold text-xl md:text-2xl mb-3">4. Fertig!</h3>
                <p className="text-base md:text-lg text-zinc-700">Das unterschriebene PDF steht dir sofort zum Download bereit – oder du teilst es direkt weiter. <b>Fertig!</b></p>
              </div>
            </div>
          </div>
        </section>
        {/* Login Button & Pricing Section */}
        <section id="preise" className="py-20 bg-gradient-to-b from-blue-50 to-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="flex justify-end mb-6">
              <a
                href="https://forms-pdf.antrieb2punkt0.de/sign_in"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-2.5 text-white font-semibold shadow hover:bg-blue-700 transition text-base"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeWidth="1.5" d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm0 0c-4.418 0-8 2.015-8 4.5V20h16v-3.5c0-2.485-3.582-4.5-8-4.5Z"/></svg>
                Login
              </a>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-4 text-blue-900">PDF-Form Preise</h2>
            <p className="text-center text-xl text-blue-800 mb-12 font-semibold">Starte jetzt – alle Pakete sind monatlich kündbar, DSGVO-konform und sofort einsatzbereit!</p>
            <p className="text-center text-base text-blue-700 mb-8">
              <a href="/pdf-form/agb" className="underline text-blue-700 hover:text-blue-900 font-bold" target="_blank" rel="noopener noreferrer">Hier findest du die AGB speziell für PDF-Form</a>
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {/* 3 Monate */}
              <div className="relative flex flex-col rounded-2xl border bg-white shadow-lg p-8 items-center transition hover:scale-105 hover:shadow-2xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-200 text-zinc-700 px-4 py-1 rounded-full text-xs font-semibold">3 Monate</div>
                <div className="mt-6 mb-2 text-4xl font-extrabold text-blue-700">90€<span className="text-lg font-normal text-zinc-500">/3 Monate</span></div>
                <ul className="mb-8 space-y-2 text-zinc-700 text-base">
                  <li><b>Zugang zur PDF-Bearbeitungssoftware</b></li>
                  <li><b>1 Benutzer</b></li>
                  <li><b>Unbegrenzte PDFs & Seiten</b></li>
                  <li>Digitale Unterschrift auf jedem Gerät</li>
                  <li>DSGVO-konform & sicher</li>
                  <li>E-Mail Support</li>
                  <li className="text-xs text-zinc-500 mt-2">Einrichtungsgebühr: 50€ einmalig</li>
                  <li className="text-xs text-zinc-500">Laufzeit: 3 Monate</li>
                  <li className="text-xs text-zinc-500">Zahlung im Voraus per SEPA-Lastschrift</li>
                </ul>
                <a href="mailto:willkommen@antrieb2punkt0.de?subject=PDF-Form%203%20Monate%20Buchung" className="w-full inline-block text-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition">Jetzt buchen</a>
              </div>
              {/* 6 Monate */}
              <div className="relative flex flex-col rounded-2xl border-2 border-blue-600 bg-white shadow-xl p-8 items-center scale-105 z-10">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold animate-bounce">Meist gewählt</div>
                <div className="mt-6 mb-2 text-4xl font-extrabold text-blue-700">160€<span className="text-lg font-normal text-zinc-500">/6 Monate</span></div>
                <ul className="mb-8 space-y-2 text-zinc-700 text-base">
                  <li><b>Zugang zur PDF-Bearbeitungssoftware</b></li>
                  <li><b>1 Benutzer</b></li>
                  <li><b>Unbegrenzte PDFs & Seiten</b></li>
                  <li>Digitale Unterschrift auf jedem Gerät</li>
                  <li>DSGVO-konform & sicher</li>
                  <li>E-Mail Support</li>
                  <li className="text-xs text-zinc-500 mt-2">Einrichtungsgebühr: 50€ einmalig</li>
                  <li className="text-xs text-zinc-500">Laufzeit: 6 Monate</li>
                  <li className="text-xs text-zinc-500">Zahlung halbjährlich im Voraus per SEPA-Lastschrift</li>
                </ul>
                <a href="mailto:willkommen@antrieb2punkt0.de?subject=PDF-Form%206%20Monate%20Buchung" className="w-full inline-block text-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition">Jetzt buchen</a>
              </div>
              {/* 12 Monate */}
              <div className="relative flex flex-col rounded-2xl border bg-white shadow-lg p-8 items-center transition hover:scale-105 hover:shadow-2xl">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-zinc-200 text-zinc-700 px-4 py-1 rounded-full text-xs font-semibold">12 Monate</div>
                <div className="mt-6 mb-2 text-4xl font-extrabold text-blue-700">290€<span className="text-lg font-normal text-zinc-500">/12 Monate</span></div>
                <ul className="mb-8 space-y-2 text-zinc-700 text-base">
                  <li><b>Zugang zur PDF-Bearbeitungssoftware</b></li>
                  <li><b>1 Benutzer</b></li>
                  <li><b>Unbegrenzte PDFs & Seiten</b></li>
                  <li>Digitale Unterschrift auf jedem Gerät</li>
                  <li>DSGVO-konform & sicher</li>
                  <li>E-Mail Support</li>
                  <li className="text-xs text-zinc-500 mt-2">Einrichtungsgebühr: 50€ einmalig</li>
                  <li className="text-xs text-zinc-500">Laufzeit: 12 Monate</li>
                  <li className="text-xs text-zinc-500">Zahlung jährlich im Voraus per SEPA-Lastschrift</li>
                </ul>
                <a href="mailto:willkommen@antrieb2punkt0.de?subject=PDF-Form%2012%20Monate%20Buchung" className="w-full inline-block text-center bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg shadow hover:bg-blue-700 transition">Jetzt buchen</a>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
