"use client";

import { useMemo, useState } from "react";

type ServiceKey = "website" | "app" | "shop" | "automation" | "support" | "seo";

type Step = 0 | 1 | 2 | 3 | 4; // 0=Startauswahl, dann 1..4

type AppForm = {
  service: ServiceKey | null;
  // Step 1
  platform?: "ios" | "android" | "both";
  // Step 2
  appType?: "business" | "social" | "shop" | "other";
  otherType?: string;
  // Step 3
  features?: string[]; // push, login, camera, maps, chat, …
  // Step 4
  budget?: "u5" | "u10" | "o10";
  name?: string;
  email?: string;
  phone?: string;
  // meta
  notes?: string;
};

const SERVICE_TILES: { key: ServiceKey; title: string; subtitle?: string; icon: string; outline?: boolean }[] = [
  { key: "website", title: "Webseite erstellen", subtitle: "ab 1.500 €", icon: "🌐" },
  { key: "app", title: "App entwickeln", subtitle: "ab 3.000 €", icon: "📱" },
  { key: "shop", title: "Online-Shop", subtitle: "in 4 Wochen lieferbar", icon: "🛒" },
  { key: "automation", title: "Automatisierung", subtitle: "Prozessoptimierung", icon: "⚡" },
  { key: "support", title: "Support & Wartung", subtitle: "24/7 Service", icon: "🛠️" },
  { key: "seo", title: "SEO-Optimierung", subtitle: "Besser gefunden werden", icon: "📈", outline: true },
];

const FEATURE_LIST = ["Push", "Login", "Kamera", "Karten/Standort", "Chat"];

export default function MultiStepLead({ onDone }: { onDone?: () => void }) {
  const [step, setStep] = useState<Step>(0);
  const [busy, setBusy] = useState(false);
  const [success, setSuccess] = useState<null | "ok" | "err">(null);
  const [data, setData] = useState<AppForm>({ service: null, features: [] });

  const maxStep = useMemo<Step>(() => 4, []);
  const progress = ((step > 0 ? step : 0) / maxStep) * 100;

  function next() {
    if (step < maxStep) setStep((s) => (s + 1) as Step);
  }
  function back() {
    if (step > 0) setStep((s) => (s - 1) as Step);
  }

  async function submit() {
    setBusy(true);
    setSuccess(null);
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ type: "multi-step-lead", payload: data }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setSuccess("ok");
      onDone?.();
    } catch {
      setSuccess("err");
    } finally {
      setBusy(false);
    }
  }

  // === RENDER ===
  return (
    <div>
      {/* Progress */}
      {step > 0 && (
        <div className="w-full h-1.5 bg-zinc-100 rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 ease-out" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* Head */}
      <div className="text-center mb-6">
  {step === 0 && <h2 className="text-xl md:text-2xl font-semibold">Was möchten Sie tun?</h2>}
                {step === 1 && (
          <h2 className="text-xl md:text-2xl font-semibold">
            1. {data.service === "app" ? "Plattform" : data.service === "website" ? "Webseiten-Typ" : data.service === "shop" ? "Shop-Plattform" : "Beschreibung"}
          </h2>
        )}
        {step === 2 && <h2 className="text-xl md:text-2xl font-semibold">2. App-Typ</h2>}
        {step === 3 && <h2 className="text-xl md:text-2xl font-semibold">3. Wichtige Funktionen</h2>}
        {step === 4 && <h2 className="text-xl md:text-2xl font-semibold">4. Budget & Kontakt</h2>}
  {step > 0 && <p className="text-sm text-muted-foreground mt-1">Bitte wählen Sie aus und klicken Sie „Weiter“.</p>}
      </div>

      {/* Step 0: Service-Tiles */}
      {step === 0 && (
        <div>
          <div className="rounded-2xl border p-4 md:p-6 shadow-sm bg-white">
            <div className="hero-search flex items-center gap-3">
              <span className="pl-2 pr-1 text-zinc-400">🔎</span>
              <input
                className="flex-1 bg-transparent py-2 px-2 outline-none"
                placeholder="Ich möchte gerne: …"
                onFocus={() => {}}
              />
              <button className="rounded-xl border border-blue-600 px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition font-medium">Absenden</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
              {SERVICE_TILES.map((t) => (
                <button
                  key={t.key}
                  onClick={() => {
                    setData((d) => ({ ...d, service: t.key }));
                    setStep(1);
                  }}
                  className={`text-left rounded-2xl p-4 border ${t.outline ? "bg-white hover:bg-zinc-50" : "bg-blue-50/50 hover:bg-blue-100/50"} hover:shadow-md transition`}
                >
                  <div className={`w-10 h-10 grid place-items-center rounded-full ${t.outline ? "bg-white border" : "bg-white"} text-xl`}>{t.icon}</div>
                  <div className="mt-3 font-medium text-zinc-900">{t.title}</div>
                  {t.subtitle && <div className="text-sm text-zinc-600">{t.subtitle}</div>}
                </button>
              ))}
            </div>

            <div className="text-center mt-5">
              <div className="text-xs uppercase tracking-wide text-blue-600 font-semibold">Beliebte Anfragen</div>
              <div className="mt-2 flex flex-wrap gap-2 justify-center">
                {["Webseite erstellen", "App entwickeln"].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => {
                      const chosen = chip.startsWith("App") ? "app" : "website";
                      setData((d) => ({ ...d, service: chosen as ServiceKey }));
                      setStep(1);
                    }}
                    className="px-4 py-2 rounded-full border border-zinc-300 bg-white hover:bg-blue-50 hover:border-blue-300 text-sm transition"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 1: Plattform (nur wenn App) oder Alternative */}
      {step === 1 && (
        <div>
          <fieldset>
            <legend className="sr-only">
              {data.service === "app" ? "Plattform" : data.service === "website" ? "Website-Typ" : data.service === "shop" ? "Shop-Plattform" : "Beschreibung"}
            </legend>
            {data.service === "app" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { key: "ios", label: "iOS" },
                  { key: "android", label: "Android" },
                  { key: "both", label: "Beides" },
                ].map((o) => (
                  <button
                    key={o.key}
                    onClick={() => setData((d) => ({ ...d, platform: o.key as any }))}
                    className={`rounded-xl border px-4 py-3 font-medium transition ${
                      data.platform === o.key 
                        ? "bg-blue-600 text-white border-blue-600 shadow-md" 
                        : "bg-white hover:bg-blue-50 border-zinc-300 hover:border-blue-300"
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            )}
            {data.service === "website" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { key: "landing", label: "Landing Page" },
                  { key: "business", label: "Unternehmens-Webseite" },
                  { key: "portfolio", label: "Portfolio/Blog" },
                ].map((o) => (
                  <button
                    key={o.key}
                    onClick={() => setData((d) => ({ ...d, platform: o.key as any }))}
                    className={`rounded-xl border px-4 py-3 font-medium transition ${
                      data.platform === o.key 
                        ? "bg-blue-600 text-white border-blue-600 shadow-md" 
                        : "bg-white hover:bg-blue-50 border-zinc-300 hover:border-blue-300"
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            )}
            {data.service === "shop" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {[
                  { key: "shopify", label: "Shopify" },
                  { key: "woocommerce", label: "WooCommerce" },
                  { key: "custom", label: "Individuell" },
                ].map((o) => (
                  <button
                    key={o.key}
                    onClick={() => setData((d) => ({ ...d, platform: o.key as any }))}
                    className={`rounded-xl border px-4 py-3 font-medium transition ${
                      data.platform === o.key 
                        ? "bg-blue-600 text-white border-blue-600 shadow-md" 
                        : "bg-white hover:bg-blue-50 border-zinc-300 hover:border-blue-300"
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
            )}
            {(data.service === "automation" || data.service === "support" || data.service === "seo") && (
              <textarea
                className="w-full rounded-xl border px-4 py-3 min-h-[120px]"
                placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                value={data.notes ?? ""}
                onChange={(e) => setData((d) => ({ ...d, notes: e.target.value, platform: "custom" as any }))}
              />
            )}
          </fieldset>
        </div>
      )}

      {/* Step 2: Details */}
      {step === 2 && (
        <div className="space-y-4">
          {data.service === "app" ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                {[
                  { key: "business", label: "Business" },
                  { key: "social", label: "Social" },
                  { key: "shop", label: "Shop" },
                  { key: "other", label: "Sonstiges" },
                ].map((o) => (
                  <button
                    key={o.key}
                    onClick={() => setData((d) => ({ ...d, appType: o.key as any }))}
                    className={`rounded-xl border px-4 py-3 font-medium transition ${
                      data.appType === o.key 
                        ? "bg-blue-600 text-white border-blue-600 shadow-md" 
                        : "bg-white hover:bg-blue-50 border-zinc-300 hover:border-blue-300"
                    }`}
                  >
                    {o.label}
                  </button>
                ))}
              </div>
              {data.appType === "other" && (
                <input
                  className="w-full rounded-xl border px-4 py-3"
                  placeholder="Sonstiges (optional)"
                  value={data.otherType ?? ""}
                  onChange={(e) => setData((d) => ({ ...d, otherType: e.target.value }))}
                />
              )}
            </>
          ) : (
            <textarea
              className="w-full rounded-xl border px-4 py-3 min-h-[120px]"
              placeholder="Weitere Details zu Ihrem Projekt..."
              value={data.notes ?? ""}
              onChange={(e) => setData((d) => ({ ...d, notes: e.target.value, appType: "other" as any }))}
            />
          )}
        </div>
      )}

      {/* Step 3: Funktionen / Anforderungen */}
      {step === 3 && (
        data.service === "app" ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {FEATURE_LIST.map((f) => {
              const active = data.features?.includes(f);
              return (
                <button
                  key={f}
                  onClick={() =>
                    setData((d) => {
                      const set = new Set(d.features ?? []);
                      if (set.has(f)) set.delete(f);
                      else set.add(f);
                      return { ...d, features: Array.from(set) };
                    })
                  }
                  className={`rounded-xl border px-4 py-3 text-left font-medium transition ${
                    active 
                      ? "bg-blue-600 text-white border-blue-600 shadow-md" 
                      : "bg-white hover:bg-blue-50 border-zinc-300 hover:border-blue-300"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    {active && <span className="text-white">✓</span>}
                    <span>{f}</span>
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="space-y-3">
            <label className="block">
              <span className="text-sm font-medium">Welche Anforderungen haben Sie?</span>
              <textarea
                className="mt-2 w-full rounded-xl border border-zinc-300 px-4 py-3 min-h-[150px] focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
                placeholder="z.B. Design-Vorstellungen, besondere Funktionen, Zeitrahmen..."
                value={data.notes ?? ""}
                onChange={(e) => setData((d) => ({ ...d, notes: e.target.value }))}
              />
            </label>
          </div>
        )
      )}

      {/* Step 4: Budget & Kontakt */}
      {step === 4 && (
        <div className="space-y-5">
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium mb-3">Budget (optional)</legend>
            <div className="grid grid-cols-1 gap-2">
              {[
                { key: "u5", label: "Bis 5.000 €" },
                { key: "u10", label: "5.000–10.000 €" },
                { key: "o10", label: "Über 10.000 €" },
              ].map((b) => (
                <label key={b.key} className={`flex items-center gap-3 rounded-xl border px-4 py-3 cursor-pointer transition ${
                  data.budget === b.key 
                    ? "bg-blue-50 border-blue-300" 
                    : "bg-white hover:bg-zinc-50 border-zinc-300"
                }`}>
                  <input
                    type="radio"
                    name="budget"
                    checked={data.budget === b.key}
                    onChange={() => setData((d) => ({ ...d, budget: b.key as any }))}
                    className="w-4 h-4 text-blue-600"
                  />
                  <span className="font-medium">{b.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="grid gap-3">
            <input
              className="rounded-xl border border-zinc-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              placeholder="Ihr Name *"
              value={data.name ?? ""}
              onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
              required
            />
            <input
              className="rounded-xl border border-zinc-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              placeholder="Ihre E-Mail *"
              value={data.email ?? ""}
              onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
              required
              type="email"
            />
            <input
              className="rounded-xl border border-zinc-300 px-4 py-3 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition"
              placeholder="Ihre Telefonnummer (optional)"
              value={data.phone ?? ""}
              onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
            />
          </div>

          {success === "ok" && (
            <div className="rounded-xl bg-green-50 border border-green-200 p-4">
              <p className="text-sm text-green-700 font-medium">✓ Vielen Dank! Wir melden uns zeitnah bei Ihnen.</p>
            </div>
          )}
          {success === "err" && (
            <div className="rounded-xl bg-red-50 border border-red-200 p-4">
              <p className="text-sm text-red-700 font-medium">⚠ Upps, etwas ist schiefgelaufen. Bitte versuchen Sie es erneut.</p>
            </div>
          )}
        </div>
      )}

      {/* Footer Actions */}
      <div className="mt-6 flex items-center justify-between gap-3">
        <button
          onClick={back}
          disabled={step === 0}
          className="px-5 py-2.5 rounded-xl border border-zinc-300 bg-white hover:bg-zinc-50 disabled:opacity-40 disabled:cursor-not-allowed transition font-medium text-zinc-700"
        >
          ← Zurück
        </button>

        {step < 4 ? (
          <button
            onClick={next}
            disabled={
              (step === 1 && !data.platform) ||
              (step === 2 && data.service === "app" && !data.appType)
            }
            className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white disabled:opacity-40 disabled:cursor-not-allowed transition font-medium shadow-sm hover:shadow-md"
          >
            Weiter →
          </button>
        ) : (
          <button
            onClick={submit}
            disabled={busy || !data.name || !data.email}
            className="px-6 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 text-white disabled:opacity-40 disabled:cursor-not-allowed transition font-medium shadow-sm hover:shadow-md"
          >
            {busy ? "Sende…" : "Absenden ✓"}
          </button>
        )}
      </div>
    </div>
  );
}