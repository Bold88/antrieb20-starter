// src/components/RequestWizard.tsx
"use client";

import { useEffect, useMemo, useState } from "react";

type StepId = "intent" | "need" | "features" | "design" | "budget";

type FormState = {
  // Einstieg
  intent?: string; // Website erstellen / App entwickeln / Online-Shop / ...
  // Schritt 1
  need?: "Webseite" | "Online-Shop" | "Landingpage" | "Sonstiges";
  needOther?: string;
  // Schritt 2
  features: string[];
  // Schritt 3
  design: string[];
  colors?: string;
  // Schritt 4
  budget?: "≤1000" | "1000-3000" | "3000-5000" | "≥5000";
  name?: string;
  email?: string;
  phone?: string;
};

function Chip({
  children,
  active,
  onClick,
  className = "",
}: {
  children: React.ReactNode;
  active?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "w-full rounded-xl border px-4 py-3 text-center transition",
        active
          ? "border-blue-500 bg-blue-50/70 ring-2 ring-blue-200"
          : "hover:bg-zinc-50",
        className,
      ].join(" ")}
    >
      {children}
    </button>
  );
}

function DotProgress({ step }: { step: number }) {
  return (
    <div className="mx-auto mb-3 h-1 w-11/12 overflow-hidden rounded-full bg-zinc-200">
      <div
        className="h-1 bg-blue-600 transition-[width]"
        style={{ width: `${step * 25}%` }}
      />
    </div>
  );
}

export default function RequestWizard({
  open,
  onClose,
  prefill,
}: {
  open: boolean;
  onClose: () => void;
  prefill?: Partial<FormState>;
}) {
  const [step, setStep] = useState<StepId>("intent");
  const [submitting, setSubmitting] = useState(false);

  const [data, setData] = useState<FormState>({
    features: [],
    design: [],
    ...prefill,
  });

  // reset bei erneuter Öffnung
  useEffect(() => {
    if (open) {
      setStep("intent");
      setData((d) => ({ ...d, ...prefill, features: d.features ?? [], design: d.design ?? [] }));
    }
  }, [open, prefill]);

  const canNext = useMemo(() => {
    switch (step) {
      case "intent":
        return !!data.intent;
      case "need":
        return !!data.need || !!data.needOther?.trim();
      case "features":
        return data.features.length > 0;
      case "design":
        return data.design.length > 0;
      case "budget":
        return !!data.budget && !!data.name?.trim() && !!data.email?.trim();
      default:
        return false;
    }
  }, [step, data]);

  function toggleIn<K extends keyof FormState>(
    key: K,
    value: string,
    max?: number
  ) {
    setData((d) => {
      const arr = new Set<string>((d[key] as string[]) ?? []);
      if (arr.has(value)) arr.delete(value);
      else {
        if (max && arr.size >= max) return d;
        arr.add(value);
      }
      return { ...d, [key]: Array.from(arr) } as FormState;
    });
  }

  // ── NEW: E-Mail Versand über /api/send-mail ───────────────────────────────
  async function handleSubmit() {
    if (!canNext || submitting) return;
    setSubmitting(true);
    try {
      const payload = {
        // Abbildung auf die API-Struktur
        step1: { need: data.need || "", other: data.needOther || null },
        step2: { features: data.features },
        step3: { styles: data.design, colors: data.colors || null },
        budget: data.budget || null,
        name: data.name?.trim() || "",
        email: data.email?.trim() || "",
        phone: data.phone?.trim() || "",
        message: data.intent ? `Ich möchte gerne: ${data.intent}` : null,
        honeypot: null, // optionales Bot-Feld (nicht verwendet)
      };

      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (!res.ok || !json?.ok) throw new Error(json?.error || "send_failed");

      alert("Danke! Deine Anfrage wurde versendet. ✅");
      onClose();
    } catch (err) {
      console.error(err);
      alert("Uups, das hat nicht geklappt. Bitte später erneut versuchen.");
    } finally {
      setSubmitting(false);
    }
  }
  // ──────────────────────────────────────────────────────────────────────────

  if (!open) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      className="fixed inset-0 z-[70] flex items-start justify-center p-4"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative z-10 w-full max-w-3xl rounded-2xl border bg-white p-4 md:p-6 shadow-2xl">
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-lg border hover:bg-zinc-50"
          aria-label="Schließen"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18.3 5.7 12 12l6.3 6.3-1.4 1.4L10.6 13.4 4.3 19.7 2.9 18.3 9.2 12 2.9 5.7 4.3 4.3l6.3 6.3 6.3-6.3z"
            />
          </svg>
        </button>

        {/* Progress */}
        <DotProgress
          step={
            step === "intent"
              ? 1
              : step === "need"
              ? 2
              : step === "features"
              ? 3
              : step === "design"
              ? 4
              : 5
          }
        />

        {/* Content */}
        {step === "intent" && (
          <div>
            <h2 className="text-center text-2xl font-bold">
              Was möchtest du tun?
            </h2>

            <div className="mt-5 rounded-xl border p-3">
              <input
                value={data.intent ?? ""}
                onChange={(e) =>
                  setData((d) => ({ ...d, intent: e.target.value }))
                }
                placeholder="Ich möchte gerne: …"
                className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
              />
            </div>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {[
                { label: "Webseite erstellen", sub: "ab 1.500 €" },
                { label: "App entwickeln", sub: "ab 3.000 €" },
                { label: "Online-Shop", sub: "in 4 Wochen lieferbar" },
                { label: "Automatisierung", sub: "Prozessoptimierung" },
                { label: "Support & Wartung", sub: "24/7 Service" },
                { label: "SEO-Optimierung", sub: "Besser gefunden werden" },
              ].map((o) => {
                const active = data.intent === o.label;
                return (
                  <Chip
                    key={o.label}
                    active={active}
                    onClick={() =>
                      setData((d) => ({ ...d, intent: o.label }))
                    }
                    className="py-4"
                  >
                    <div className="font-medium">{o.label}</div>
                    <div className="text-xs text-zinc-500">{o.sub}</div>
                  </Chip>
                );
              })}
            </div>

            <div className="mt-6 flex justify-end">
              <button
                disabled={!canNext}
                onClick={() => setStep("need")}
                className="inline-flex items-center gap-2 rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
              >
                Weiter
                <svg width="16" height="16" viewBox="0 0 24 24">
                  <path fill="currentColor" d="M5 12h12m-4-6 6 6-6 6" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {step === "need" && (
          <div>
            <h2 className="text-center text-2xl font-bold">
              1. Was brauchst du?
            </h2>
            <p className="mt-1 text-center text-sm text-zinc-500">
              Wähle aus, was du benötigst.
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["Webseite", "Online-Shop", "Landingpage", "Sonstiges"].map(
                (label) => (
                  <Chip
                    key={label}
                    active={data.need === (label as any)}
                    onClick={() =>
                      setData((d) => ({
                        ...d,
                        need: label as any,
                      }))
                    }
                  >
                    {label}
                  </Chip>
                )
              )}
            </div>

            {data.need === "Sonstiges" && (
              <input
                className="mt-4 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Sonstiges (optional)"
                value={data.needOther ?? ""}
                onChange={(e) =>
                  setData((d) => ({ ...d, needOther: e.target.value }))
                }
              />
            )}

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep("intent")}
                className="rounded-xl border px-4 py-2.5 text-sm"
              >
                Zurück
              </button>
              <button
                disabled={!canNext}
                onClick={() => setStep("features")}
                className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
              >
                Weiter
              </button>
            </div>
          </div>
        )}

        {step === "features" && (
          <div>
            <h2 className="text-center text-2xl font-bold">
              2. Welche Funktionen?
            </h2>
            <p className="mt-1 text-center text-sm text-zinc-500">
              Was soll die Seite können?
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                "Kontaktformular",
                "Galerie",
                "Blog/News",
                "Shop",
                "Buchung/Termin",
                "Newsletter",
                "Mehrsprachig",
                "Benutzer-Login",
              ].map((f) => (
                <Chip
                  key={f}
                  active={data.features.includes(f)}
                  onClick={() => toggleIn("features", f)}
                >
                  {f}
                </Chip>
              ))}
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep("need")}
                className="rounded-xl border px-4 py-2.5 text-sm"
              >
                Zurück
              </button>
              <button
                disabled={!canNext}
                onClick={() => setStep("design")}
                className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
              >
                Weiter
              </button>
            </div>
          </div>
        )}

        {step === "design" && (
          <div>
            <h2 className="text-center text-2xl font-bold">
              3. Design-Vorlieben?
            </h2>
            <p className="mt-1 text-center text-sm text-zinc-500">
              Wie soll die Seite wirken?
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {["Modern", "Seriös", "Verspielt", "Minimalistisch"].map((dsg) => (
                <Chip
                  key={dsg}
                  active={data.design.includes(dsg)}
                  onClick={() => toggleIn("design", dsg, 3)}
                >
                  {dsg}
                </Chip>
              ))}
            </div>

            <input
              value={data.colors ?? ""}
              onChange={(e) =>
                setData((d) => ({ ...d, colors: e.target.value }))
              }
              placeholder="Farben (optional)"
              className="mt-4 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
            />

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep("features")}
                className="rounded-xl border px-4 py-2.5 text-sm"
              >
                Zurück
              </button>
              <button
                disabled={!canNext}
                onClick={() => setStep("budget")}
                className="rounded-xl bg-black px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
              >
                Weiter
              </button>
            </div>
          </div>
        )}

        {step === "budget" && (
          <div>
            <h2 className="text-center text-2xl font-bold">4. Budget & Kontakt</h2>
            <p className="mt-1 text-center text-sm text-zinc-500">
              Wie hoch ist das Budget und wie können wir dich erreichen?
            </p>

            {/* Budget */}
            <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                { k: "≤1000", label: "Bis 1.000 €" },
                { k: "1000-3000", label: "1.000–3.000 €" },
                { k: "3000-5000", label: "3.000–5.000 €" },
                { k: "≥5000", label: "Über 5.000 €" },
              ].map((b) => (
                <label
                  key={b.k}
                  className={[
                    "flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3",
                    data.budget === b.k ? "ring-2 ring-blue-300 bg-blue-50/60" : "hover:bg-zinc-50",
                  ].join(" ")}
                >
                  <input
                    type="radio"
                    name="budget"
                    className="accent-blue-600"
                    checked={data.budget === (b.k as any)}
                    onChange={() =>
                      setData((d) => ({ ...d, budget: b.k as any }))
                    }
                  />
                  <span>{b.label}</span>
                </label>
              ))}
            </div>

            {/* Kontakt */}
            <div className="mt-4 space-y-3">
              <input
                required
                placeholder="Name *"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
                value={data.name ?? ""}
                onChange={(e) =>
                  setData((d) => ({ ...d, name: e.target.value }))
                }
              />
              <input
                required
                placeholder="E-Mail *"
                type="email"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
                value={data.email ?? ""}
                onChange={(e) =>
                  setData((d) => ({ ...d, email: e.target.value }))
                }
              />
              <input
                placeholder="Telefon (optional)"
                className="w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-blue-300"
                value={data.phone ?? ""}
                onChange={(e) =>
                  setData((d) => ({ ...d, phone: e.target.value }))
                }
              />
            </div>

            <div className="mt-6 flex justify-between">
              <button
                onClick={() => setStep("design")}
                className="rounded-xl border px-4 py-2.5 text-sm"
              >
                Zurück
              </button>
              <button
                disabled={!canNext || submitting}
                onClick={handleSubmit}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white disabled:opacity-40"
              >
                {submitting ? "Senden…" : "Absenden"}
                {!submitting && (
                  <svg width="16" height="16" viewBox="0 0 24 24">
                    <path fill="currentColor" d="M5 12h12m-4-6 6 6-6 6" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}