// src/components/Hero.tsx
import Image from "next/image";
import Link from "next/link";
import styles from "./hero.module.css"; // <-- eigenes CSS-Module für Animationen

export default function Hero() {
  return (
    <section className={`${styles.wrap} bg-grid relative overflow-hidden`}>
      {/* Hintergrund-Effekte */}
      <div className={styles.decors}>
        <div className={styles.glow} />
        <div className={styles.particles} />
        <Image
          src="/images/Rakete.png"
          alt="Rakete"
          width={1200}
          height={1200}
          className={styles.rocket}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 md:py-28">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left: Copy */}
          <div className="md:col-span-6">
            <span className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium text-zinc-700 bg-white/70 backdrop-blur">
              <svg width="14" height="14" viewBox="0 0 24 24" className="text-blue-600">
                <path fill="currentColor" d="M5 12h12M13 6l6 6l-6 6"/>
              </svg>
              Ready to launch
            </span>

            <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
              Wir zünden Ihren <span className="text-gradient">digitalen Raketenstart</span>
            </h1>

            <p className="mt-4 text-base md:text-lg text-zinc-600 max-w-xl">
              Strategie, Design und Entwicklung aus einer Hand – damit Ihre Ideen schneller abheben,
              messbar performen und nachhaltig wachsen.
            </p>

            {/* Bullets */}
            <ul className="mt-6 space-y-2 text-zinc-700">
              {[
                "Go-to-Market in Wochen statt Monaten",
                "Maßgeschneiderte Software & Websites",
                "Data-driven E-Commerce & Apps",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 items-center justify-center rounded-full bg-blue-600/10 text-blue-700">
                    ✓
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/book"
                className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-sm hover:shadow-md hover:scale-[1.02] active:scale-100 transition"
              >
                🚀 Kostenloses Erstgespräch
              </Link>

              <Link
                href="#leistungen"
                className="inline-flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm text-zinc-800 hover:bg-zinc-50 transition"
              >
                Mehr erfahren →
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-zinc-500">
              <span className="inline-flex items-center gap-1">
                ⭐️⭐️⭐️⭐️⭐️ <span className="ml-1">5.0 Kundenzufriedenheit</span>
              </span>
              <span>•</span>
              <span>Schnelles Projekt-Onboarding</span>
              <span>•</span>
              <span>Made in OWL</span>
            </div>
          </div>

          {/* Right: Mini-card */}
          <div className="md:col-span-6">
            <div className="mx-auto max-w-md rounded-2xl border bg-white/80 backdrop-blur p-5 shadow-lg">
              <h3 className="font-semibold">Projekt in 14 Tagen startklar</h3>
              <p className="mt-1 text-sm text-zinc-600">
                Wir auditieren Ihre Idee, definieren Roadmap & MVP – und bringen Sie schnell in die Umsetzung.
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                {[
                  { k: "Ø Time-to-MVP", v: "6–8 Wochen" },
                  { k: "relaunch CTR", v: "+37%" },
                  { k: "Pagespeed", v: "95–100" },
                ].map((i) => (
                  <div key={i.k} className="rounded-xl border bg-white p-3">
                    <div className="text-xs text-zinc-500">{i.k}</div>
                    <div className="mt-1 font-semibold">{i.v}</div>
                  </div>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-5 inline-flex w-full items-center justify-center rounded-xl bg-black text-white px-4 py-2.5 text-sm font-medium hover:opacity-95 active:opacity-100 transition"
              >
                Unverbindlich anfragen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}