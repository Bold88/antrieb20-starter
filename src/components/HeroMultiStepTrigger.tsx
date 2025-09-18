"use client";
import React, { useState, useEffect } from "react";
import IntentModal from "@/components/IntentModal";
import MultiStepLead from "@/components/MultiStepLead";

export default function HeroMultiStepTrigger() {
  const [open, setOpen] = useState(false);
  // Ermöglicht Anker-Link von Navbar
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#wunsch") {
      setOpen(true);
      window.location.hash = "";
    }
  }, []);
  return (
    <>
      <div className="mt-8 max-w-2xl mx-auto hero-search flex items-center gap-2" onClick={() => setOpen(true)} id="wunsch">
        <span className="pl-3 pr-1 text-zinc-400">🔍</span>
        <input
          className="flex-1 bg-transparent py-2 px-2 cursor-pointer"
          placeholder="Ich möchte gerne: …"
          readOnly
        />
  <button className="rounded-xl border px-4 py-2 bg-blue-600 text-white">Absenden</button>
      </div>
      <IntentModal open={open} onClose={() => setOpen(false)} maxWidth="max-w-2xl">
        <MultiStepLead onDone={() => setOpen(false)} />
      </IntentModal>
    </>
  );
}
