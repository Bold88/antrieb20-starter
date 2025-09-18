"use client";

import { useEffect } from "react";

export default function IntentModal({
  open,
  onClose,
  children,
  maxWidth = "max-w-3xl",
  title,
}: {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
  title?: string;
}) {
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    if (open) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />
  <div className="absolute inset-0 flex items-center justify-center p-4 md:p-6">
        <div className={`w-full ${maxWidth} rounded-2xl bg-white shadow-2xl border overflow-hidden`}>
          <div className="flex items-center justify-between px-4 py-3 border-b">
            <h3 className="text-lg font-semibold">{title}</h3>
            <button
              onClick={onClose}
              className="w-8 h-8 grid place-items-center rounded-full hover:bg-zinc-100"
              aria-label="Schließen"
            >
              ✕
            </button>
          </div>
          <div className="p-4 md:p-6">{children}</div>
        </div>
      </div>
    </div>
  );
}