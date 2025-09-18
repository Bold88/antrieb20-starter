// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-zinc-50 text-zinc-700 text-sm">
      <div className="container mx-auto px-4 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <strong>Antrieb 2.0 UG (haftungsbeschränkt)</strong><br />
          Hauptstraße 136<br />
          33647 Bielefeld<br />
          Nordrhein-Westfalen, Deutschland<br />
          <a href="https://antrieb2punkt0.de" className="underline" target="_blank" rel="noopener noreferrer">antrieb2punkt0.de</a>
        </div>
        <div>
          <strong>Kontakt</strong><br />
          E-Mail: <a href="mailto:info@antrieb2punkt0.de" className="underline">willkommen@antrieb2punkt0.de</a><br />
          Website: <a href="https://antrieb2punkt0.de" className="underline" target="_blank" rel="noopener noreferrer">antrieb2punkt0.de</a>
        </div>
        <div>
          <strong>Impressum & Rechtliches</strong><br />
          Geschäftsführer: Bold Molor<br />
          Handelsregister: HRB 45885
          Amtsgericht Bielefeld<br />
          Unternehmensname: Antrieb 2.0 UG (haftungsbeschränkt)<br />
          Sitz: Bielefeld<br />
          {/* USt‑ID: Falls vorhanden, bitte ergänzen. */}
          <Link href="/impressum" className="underline block mt-2">Impressum</Link>
          <Link href="/datenschutz" className="underline block mt-2">Datenschutz</Link>
          <Link href="/agb" className="underline block mt-2">AGB</Link>
          <Link href="/cookies" className="underline block mt-2">Cookies</Link>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-6 text-xs text-zinc-500 flex flex-col md:flex-row justify-between items-center gap-2">
        <span>© {new Date().getFullYear()} Antrieb 2.0 UG (haftungsbeschränkt). Alle Rechte vorbehalten.</span>
        <span>Haftungsausschluss: Für Inhalte und Links keine Gewähr. Urheberrecht beachten.</span>
      </div>
    </footer>
  );
}
