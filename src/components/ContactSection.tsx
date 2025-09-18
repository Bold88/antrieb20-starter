"use client";

import { useState } from "react";

type Props = {
  eyebrow?: string;
  title?: string;
  subtitle?: string;
  onSecondaryClick?: () => void;
};

export default function ContactSection({
  eyebrow = "Starten Sie jetzt",
  title = "Bereit für Ihre digitale Transformation?",
  subtitle = "Vereinbaren Sie ein unverbindliches Beratungsgespräch mit unseren Experten und erfahren Sie, wie wir Ihr Unternehmen in die digitale Zukunft führen können.",
  onSecondaryClick,
}: Props) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    botfield: "", // Honeypot
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | { ok: boolean; msg: string }>(null);

  const canSubmit =
    form.name.trim() && /\S+@\S+\.\S+/.test(form.email) && form.message.trim() && !loading;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    setLoading(true);
    setStatus(null);
    try {
      // Hit your API from earlier (/api/lead). Payload keys match our route.
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company || undefined,
          message: form.message,
          // Extra meta for your email:
          context: "Kontaktformular Startseite",
          source: "homepage-contact",
        }),
      });

      if (!res.ok) throw new Error(await res.text());
      setStatus({ ok: true, msg: "Danke! Wir melden uns zeitnah bei Ihnen." });
      setForm({ name: "", email: "", company: "", message: "", botfield: "" });
    } catch (err: any) {
      setStatus({
        ok: false,
        msg:
          "Ups, das hat nicht geklappt. Bitte prüfen Sie Ihre Angaben oder versuchen Sie es später erneut.",
      });
    } finally {
      setLoading(false);
    }
  }

  const labelCls = "block text-sm font-medium text-zinc-700";
  const inputCls =
    "mt-1 w-full rounded-md border border-zinc-200 bg-white px-3 py-2 outline-none ring-0 focus:border-zinc-300 focus:ring-2 focus:ring-black/5 placeholder:text-zinc-400";
  const cardCls =
    "rounded-2xl border border-zinc-100 bg-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)] p-5 md:p-6 relative";

  return (
    <section className="relative overflow-hidden">
      {/* sanfter Verlauf im Hintergrund */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_10%_10%,rgba(0,0,0,0.04),transparent_60%)]" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-start">
          {/* LEFT: Textblock */}
          <div>
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700">
              {eyebrow}
            </span>

            <h2 className="mt-4 text-3xl md:text-4xl font-extrabold leading-tight text-zinc-900">
              {title}
            </h2>

            <p className="mt-4 max-w-xl text-zinc-600">{subtitle}</p>

            {/* Bullets */}
            <ul className="mt-6 space-y-3 text-zinc-700">
              {[
                "Maßgeschneiderte Digitalisierungsstrategie",
                "Agile Entwicklung & schnelle Implementierung",
                "Langfristige Betreuung & Support",
                "Skalierbare Lösungen für Ihr Wachstum",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300 text-zinc-700">
                    {/* check icon */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 16.2 4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4z" />
                    </svg>
                  </span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-zinc-900 px-4 py-2.5 text-white shadow transition hover:bg-zinc-800"
              >
                Beratungsgespräch vereinbaren
                <svg className="ml-2" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M5 12h12M13 6l6 6-6 6" />
                </svg>
              </a>
              <button
                type="button"
                onClick={onSecondaryClick}
                className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white px-4 py-2.5 text-zinc-700 shadow-sm transition hover:bg-zinc-50"
              >
                Mehr erfahren
              </button>
            </div>
          </div>

          {/* RIGHT: Formular-Karte */}
          <div id="contact" className="relative">
            <div className={cardCls} aria-labelledby="contact-title">
              {/* kleine Sprechblase oben rechts */}
              <span className="absolute -right-3 -top-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 text-white shadow-lg">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4h16v12H7l-3 3z" />
                </svg>
              </span>

              <h3 id="contact-title" className="mb-4 text-lg font-semibold text-zinc-900">
                Kontaktieren Sie uns
              </h3>

              {/* Honeypot (unsichtbar für Menschen) */}
              <input
                type="text"
                name="company-website"
                value={form.botfield}
                onChange={(e) => setForm((f) => ({ ...f, botfield: e.target.value }))}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
              />

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <div>
                    <label className={labelCls} htmlFor="name">
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      autoComplete="name"
                      className={inputCls}
                      placeholder="Ihr Name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      required
                    />
                  </div>
                  <div>
                    <label className={labelCls} htmlFor="email">
                      E-Mail
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className={inputCls}
                      placeholder="ihre.email@beispiel.de"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className={labelCls} htmlFor="company">
                    Unternehmen
                  </label>
                  <input
                    id="company"
                    name="company"
                    className={inputCls}
                    placeholder="Ihr Unternehmen"
                    value={form.company}
                    onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
                  />
                </div>

                <div>
                  <label className={labelCls} htmlFor="message">
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className={inputCls + " min-h-[120px] resize-y"}
                    placeholder="Wie können wir Ihnen helfen?"
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={!canSubmit}
                  className="w-full rounded-md bg-zinc-900 px-4 py-3 text-white shadow transition hover:bg-zinc-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Senden…" : "Anfrage senden"}
                </button>
              </form>

              {/* Status */}
              {status && (
                <div
                  className={`mt-3 rounded-md px-3 py-2 text-sm ${
                    status.ok
                      ? "bg-green-50 text-green-700 border border-green-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {status.msg}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}