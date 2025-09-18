// src/components/QuickRequest.tsx
"use client";

import { useState } from "react";
import RequestWizard from "./RequestWizard";

export default function QuickRequest() {
  const [open, setOpen] = useState(false);
  const [intent, setIntent] = useState("");

  return (
    <>
      {/* Suchleiste */}
      <div
        className="hero-search flex items-center gap-2 rounded-full bg-white/80 backdrop-blur cursor-text"
        onClick={() => setOpen(true)}
        role="button"
        aria-label="Lead-Wizard öffnen"
      >
        <span className="pl-3 pr-1 text-zinc-400">🔍</span>
        <input
          className="flex-1 bg-transparent px-2 py-2 outline-none"
          placeholder="Ich möchte gerne: …"
          value={intent}
          onChange={(e) => setIntent(e.target.value)}
          onFocus={() => setOpen(true)}
        />
        <button
          type="button"
          className="mr-1 rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white"
        >
          Absenden
        </button>
      </div>

      {/* Wizard */}
      <RequestWizard
        open={open}
        onClose={() => setOpen(false)}
        prefill={{ intent }}
      />
    </>
  );
}