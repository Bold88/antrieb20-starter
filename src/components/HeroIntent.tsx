"use client";

import { useState } from "react";
import IntentModal from "./IntentModal";
import MultiStepLead from "./MultiStepLead";

export default function HeroIntent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="hero-search flex items-center gap-2" onClick={() => setOpen(true)}>
        <span className="pl-3 pr-1 text-zinc-400">🔍</span>
        <input
          className="flex-1 bg-transparent py-2 px-2 cursor-pointer"
          placeholder="Ich möchte gerne: …"
          readOnly
        />
        <button className="rounded-xl border px-4 py-2 bg-blue-600 text-white">Absenden</button>
      </div>

      <IntentModal
        open={open}
        onClose={() => setOpen(false)}
        title={undefined}
        maxWidth="max-w-4xl"
      >
        <MultiStepLead onDone={() => { /* optional: setOpen(false) */ }} />
      </IntentModal>
    </>
  );
}