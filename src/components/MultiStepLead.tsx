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
  { key: "website", title: "Website erstellen", subtitle: "ab 1.500 €", icon: "🌐" },
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
        <div className="w-full h-1 bg-zinc-100 rounded-full mb-6 overflow-hidden">
          <div className="h-full bg-black transition-all" style={{ width: `${progress}%` }} />
        </div>
      )}

      {/* Head */}
      <div className="text-center mb-6">
  {step === 0 && <h2 className="text-xl md:text-2xl font-semibold">Was möchten Sie tun?</h2>}
        {step === 1 && <h2 className="text-xl md:text-2xl font-semibold">1. Plattform</h2>}
        {step === 2 && <h2 className="text-xl md:text-2xl font-semibold">2. App-Typ</h2>}
        {step === 3 && <h2 className="text-xl md:text-2xl font-semibold">3. Wichtige Funktionen</h2>}
        {step === 4 && <h2 className="text-xl md:text-2xl font-semibold">4. Budget & Kontakt</h2>}
  {step > 0 && <p className="text-sm text-muted-foreground mt-1">Bitte wählen Sie aus und klicken Sie „Weiter“.</p>}
      </div>

      {/* Step 0: Service-Tiles */}
      {step === 0 && (
        <div>
          <div className="rounded-2xl border p-4 md:p-6 shadow-sm">
            <div className="hero-search flex items-center gap-3">
              <span className="pl-2 pr-1 text-zinc-400">🔎</span>
              <input
                className="flex-1 bg-transparent py-2 px-2"
                placeholder="Ich möchte gerne: …"
                onFocus={() => {}}
              />
              <button className="rounded-xl border px-4 py-2 bg-blue-600 text-white">Absenden</button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mt-4">
              {SERVICE_TILES.map((t) => (
                <button
                  key={t.key}
                  onClick={() => {
                    setData((d) => ({ ...d, service: t.key }));
                    setStep(1);
                  }}
                  className={`text-left rounded-2xl p-4 border ${t.outline ? "bg-white" : "bg-blue-50/40"} hover:shadow-md transition`}
                >
                  <div className={`w-10 h-10 grid place-items-center rounded-full ${t.outline ? "bg-white border" : "bg-white"}`}>{t.icon}</div>
                  <div className="mt-3 font-medium">{t.title}</div>
                  {t.subtitle && <div className="text-sm text-muted-foreground">{t.subtitle}</div>}
                </button>
              ))}
            </div>

            <div className="text-center mt-5">
              <div className="text-xs uppercase tracking-wide text-blue-600 font-semibold">Beliebte Anfragen</div>
              <div className="mt-2 flex flex-wrap gap-2 justify-center">
                {["Website erstellen", "App entwickeln"].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => {
                      const chosen = chip.startsWith("App") ? "app" : "website";
                      setData((d) => ({ ...d, service: chosen as ServiceKey }));
                      setStep(1);
                    }}
                    className="px-4 py-2 rounded-full border bg-white hover:bg-zinc-50 text-sm"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Step 1: Plattform (nur wenn App) */}
      {step === 1 && (data.service === "app" ? (
        <div>
          <fieldset>
            <legend className="sr-only">Plattform</legend>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {[
                { key: "ios", label: "iOS" },
                { key: "android", label: "Android" },
                { key: "both", label: "Beides" },
              ].map((o) => (
                <button
                  key={o.key}
                  onClick={() => setData((d) => ({ ...d, platform: o.key as any }))}
                  className={`rounded-xl border px-4 py-3 ${data.platform === o.key ? "bg-black text-white" : "bg-white hover:bg-zinc-50"}`}
                >
                  {o.label}
                </button>
              ))}
            </div>
          </fieldset>
        </div>
      ) : (
        // Für andere Services kannst du hier alternative Step-1 Inhalte einfügen.
  <div className="text-center text-muted-foreground">Bitte lassen Sie „App entwickeln“ ausgewählt – weitere Services folgen in Kürze.</div>
      ))}

      {/* Step 2: App-Typ */}
      {step === 2 && data.service === "app" && (
        <div className="space-y-4">
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
                className={`rounded-xl border px-4 py-3 ${data.appType === o.key ? "bg-blue-50 border-blue-300" : "bg-white hover:bg-zinc-50"}`}
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
        </div>
      )}

      {/* Step 3: Funktionen */}
      {step === 3 && data.service === "app" && (
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
                className={`rounded-xl border px-4 py-3 text-left ${active ? "bg-black text-white" : "bg-white hover:bg-zinc-50"}`}
              >
                {f}
              </button>
            );
          })}
        </div>
      )}

      {/* Step 4: Budget & Kontakt */}
      {step === 4 && (
        <div className="space-y-5">
          <fieldset className="space-y-3">
            <legend className="text-sm font-medium">Budget</legend>
            {[
              { key: "u5", label: "Bis 5.000 €" },
              { key: "u10", label: "5.000–10.000 €" },
              { key: "o10", label: "Über 10.000 €" },
            ].map((b) => (
              <label key={b.key} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="budget"
                  checked={data.budget === b.key}
                  onChange={() => setData((d) => ({ ...d, budget: b.key as any }))}
                />
                {b.label}
              </label>
            ))}
          </fieldset>

          <div className="grid gap-3">
            <input
              className="rounded-xl border px-4 py-3"
              placeholder="Ihr Name *"
              value={data.name ?? ""}
              onChange={(e) => setData((d) => ({ ...d, name: e.target.value }))}
              required
            />
            <input
              className="rounded-xl border px-4 py-3"
              placeholder="Ihre E-Mail *"
              value={data.email ?? ""}
              onChange={(e) => setData((d) => ({ ...d, email: e.target.value }))}
              required
              type="email"
            />
            <input
              className="rounded-xl border px-4 py-3"
              placeholder="Ihre Telefonnummer (optional)"
              value={data.phone ?? ""}
              onChange={(e) => setData((d) => ({ ...d, phone: e.target.value }))}
            />
          </div>

          {success === "ok" && <p className="text-sm text-green-600">Vielen Dank! Wir melden uns zeitnah bei Ihnen.</p>}
          {success === "err" && <p className="text-sm text-red-600">Upps, etwas ist schiefgelaufen.</p>}
        </div>
      )}

      {/* Footer Actions */}
      <div className="mt-6 flex items-center justify-between">
        <button
          onClick={back}
          disabled={step === 0}
          className="px-4 py-2 rounded-lg border bg-white disabled:opacity-50"
        >
          ← Zurück
        </button>

        {step < 4 ? (
          <button
            onClick={next}
            disabled={
              (step === 1 && data.service === "app" && !data.platform) ||
              (step === 2 && data.service === "app" && !data.appType)
            }
            className="px-4 py-2 rounded-lg border bg-black text-white disabled:opacity-50"
          >
            Weiter →
          </button>
        ) : (
          <button
            onClick={submit}
            disabled={busy || !data.name || !data.email}
            className="px-4 py-2 rounded-lg border bg-black text-white disabled:opacity-50"
          >
            {busy ? "Sende…" : "Absenden ✓"}
          </button>
        )}
      </div>
    </div>
  );
}