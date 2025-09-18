import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import React from 'react';

export const metadata = {
  title: 'AGB PDF-Form | Antrieb 2.0',
  description: 'Allgemeine Geschäftsbedingungen für die Nutzung der PDF-Bearbeitungssoftware von Antrieb 2.0',
};

export default function PdfFormAgbPage() {
  return (
    <>
      <Navbar />
      <main className="main-wrapper min-h-screen bg-background pt-16 pb-16">
        <section className="container mx-auto px-4 max-w-3xl py-12">
          <h1 className="text-4xl font-extrabold mb-8 text-center">AGB für PDF-Form (alle Preismodelle)</h1>
          <div className="prose prose-lg max-w-none">
            <h2>1. Vertragsgegenstand</h2>
            <p>Der Dienstleister (Antrieb 2.0 UG, Hauptstraße 136, 33647 Bielefeld) stellt dem Kunden eine Software zur Verfügung, die es ermöglicht, PDFs online zu bearbeiten, zu signieren und fertigzustellen. Die Leistungen und Preise richten sich nach dem jeweils gebuchten Paket (Basic, Pro, Enterprise).</p>
            <h2>2. Vertragslaufzeit</h2>
            <p>Die Vertragslaufzeit beträgt je nach gewähltem Paket sechs (6) oder zwölf (12) Monate, beginnend ab Wirksamkeitsdatum. Die genaue Laufzeit ergibt sich aus dem jeweiligen Vertrag.</p>
            <h2>3. Leistungen des Dienstleisters</h2>
            <ul>
              <li>Zugang zur PDF-Bearbeitungssoftware gemäß gebuchtem Paket (Basic, Pro, Enterprise).</li>
              <li>Bearbeiten, signieren und fertigstellen von PDFs gemäß Leistungsumfang des Pakets.</li>
              <li>Weitere Leistungen wie Benutzeranzahl, Branding, Workflows und Support richten sich nach dem gewählten Paket.</li>
            </ul>
            <h2>4. Vergütung</h2>
            <ul>
              <li>Die Preise und Gebühren (z.B. Einrichtungsgebühr, monatliche oder jährliche Gebühren) ergeben sich aus der jeweils aktuellen Preisliste und dem gebuchten Paket.</li>
              <li>Die Jahresgebühr wird halbjährlich im Voraus fällig, sofern nicht anders vereinbart.</li>
            </ul>
            <h2>5. Zahlungsbedingungen</h2>
            <ul>
              <li>Die Einrichtungsgebühr wird sofort nach Vertragsabschluss fällig.</li>
              <li>Die laufenden Gebühren werden gemäß Vertrag im Voraus fällig.</li>
              <li>Die Zahlungen erfolgen per SEPA-Lastschriftverfahren. Gläubiger-ID: DE11ZZZ00002736044</li>
              <li>Der Betrag wird am 1. oder 15. des Monats abgebucht.</li>
              <li>Bei Rücklastschrift werden 10,00 € Bankgebühr und 5,00 € Bearbeitungsgebühr erhoben. Der fällige Betrag wird 15 Tage nach der ersten Abbuchung erneut eingezogen.</li>
            </ul>
            <h2>6. Pflichten des Kunden</h2>
            <ul>
              <li>Die Software ausschließlich für den vorgesehenen Zweck nutzen.</li>
              <li>Zugangsdaten vertraulich behandeln und vor dem Zugriff Dritter schützen.</li>
            </ul>
            <h2>7. Gewährleistung und Haftung</h2>
            <ul>
              <li>Der Dienstleister gewährleistet, dass die Software im Wesentlichen wie beschrieben funktioniert.</li>
              <li>Keine Haftung für Schäden durch unsachgemäße Nutzung der Software durch den Kunden.</li>
            </ul>
            <h2>8. Vertragsbeendigung</h2>
            <p>Der Vertrag kann von beiden Parteien mit einer Frist von drei (3) Monaten zum Ende der Laufzeit schriftlich gekündigt werden.</p>
            <h2>9. Verzicht auf Widerruf</h2>
            <p>Der Kunde verzichtet ausdrücklich auf das gesetzliche Widerrufsrecht gemäß § 356 Abs. 5 BGB, sobald der Dienstleister mit der Ausführung der Dienstleistung begonnen hat.</p>
            <h2>10. Vertraulichkeit</h2>
            <p>Beide Parteien verpflichten sich, alle vertraulichen Informationen, die im Rahmen dieses Vertrags ausgetauscht werden, geheim zu halten und nicht an Dritte weiterzugeben.</p>
            <h2>11. Schlussbestimmungen</h2>
            <ul>
              <li>Änderungen und Ergänzungen dieses Vertrags bedürfen der Schriftform.</li>
              <li>Sollten einzelne Bestimmungen dieses Vertrags unwirksam sein oder werden, bleibt die Wirksamkeit des übrigen Vertrags unberührt.</li>
              <li>Es gilt das Recht der Bundesrepublik Deutschland.</li>
            </ul>
            <h2>12. Gerichtsstand</h2>
            <p>Für alle Streitigkeiten aus oder im Zusammenhang mit diesem Vertrag ist der Gerichtsstand Bielefeld.</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
