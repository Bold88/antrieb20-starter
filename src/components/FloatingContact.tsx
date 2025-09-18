// src/components/FloatingContact.tsx
"use client";

import { useState } from "react";

type Props = {
  name: string;
  role?: string;
  phone?: string;       // z.B. "+49 171 2047941" oder "0171 204 79 41"
  email?: string;       // z.B. "willkommen@antrieb2punkt0.de"
  bookingUrl?: string;  // z.B. "/contact" oder externer Link
};

export default function FloatingContact({
  name,
  role = "Inhaber",
  phone,
  email,
  bookingUrl = "/contact",
}: Props) {
  const [open, setOpen] = useState(false);

  // Für Tel-Links: nur Ziffern/Plus
  const telHref = phone ? `tel:${phone.replace(/[^\d+]/g, "")}` : undefined;
  const mailHref = email ? `mailto:${email}` : undefined;

  return (
    <div
      className="fixed right-4 bottom-4 md:top-1/2 md:-translate-y-1/2 z-40"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(e) => {
        // schließt wenn Fokus komplett rausgeht
        if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(false);
      }}
    >
      {/* Icon-Leiste */}
      <div className="flex flex-col items-center gap-3">
        {/* Profil-Button (öffnet/schließt auf Mobile per Tap) */}
        <button
          className="w-11 h-11 rounded-full bg-blue-600 text-white grid place-items-center shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          aria-label={open ? "Kontakt schließen" : "Kontakt öffnen"}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Person-Icon */}
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" fill="currentColor" />
            <path d="M3 20a9 9 0 0 1 18 0Z" fill="currentColor" />
          </svg>
        </button>

        {/* Telefon */}
        {phone && (
          <a
            href={telHref}
            className="w-11 h-11 rounded-full bg-white text-blue-600 grid place-items-center border shadow hover:bg-blue-50 transition"
            aria-label="Anrufen"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.9 11.9 0 0 0 3.7.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A18 18 0 0 1 3 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.9 11.9 0 0 0 .6 3.7 1 1 0 0 1-.24 1Z" />
            </svg>
          </a>
        )}

        {/* Mail */}
        {email && (
          <a
            href={mailHref}
            className="w-11 h-11 rounded-full bg-white text-blue-600 grid place-items-center border shadow hover:bg-blue-50 transition"
            aria-label="E-Mail schreiben"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20 4H4a2 2 0 0 0-2 2v1l10 6 10-6V6a2 2 0 0 0-2-2Zm0 6.3-8.5 5.1a1 1 0 0 1-1 0L2 10.3V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"/>
            </svg>
          </a>
        )}

        {/* Kalender */}
        {bookingUrl && (
          <a
            href={bookingUrl}
            className="w-11 h-11 rounded-full bg-white text-blue-600 grid place-items-center border shadow hover:bg-blue-50 transition"
            aria-label="Beratungstermin buchen"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7 2a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v1h20V7a3 3 0 0 0-3-3h-1V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1Zm15 8H2v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3Z"/>
            </svg>
          </a>
        )}
      </div>

      {/* Kontaktkarte */}
      <div
        className={[
          "absolute right-14 top-0",
          "transition-all duration-200",
          open ? "opacity-100 translate-x-0" : "opacity-0 pointer-events-none translate-x-2",
        ].join(" ")}
      >
        <div className="w-72 rounded-2xl bg-white/95 backdrop-blur border shadow-xl p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white grid place-items-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z" />
                <path d="M3 20a9 9 0 0 1 18 0Z" />
              </svg>
            </div>
            <div>
              <div className="font-medium">{name}</div>
              <div className="text-sm text-zinc-500">{role}</div>
            </div>
          </div>

          <div className="mt-4 space-y-3 text-sm">
            {phone && (
              <a href={telHref} className="flex items-center gap-3 hover:underline">
                <span className="w-6 h-6 grid place-items-center text-blue-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.24 11.9 11.9 0 0 0 3.7.6 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A18 18 0 0 1 3 7a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1 11.9 11.9 0 0 0 .6 3.7 1 1 0 0 1-.24 1Z" />
                  </svg>
                </span>
                {phone}
              </a>
            )}
            {email && (
              <a href={mailHref} className="flex items-center gap-3 hover:underline break-all">
                <span className="w-6 h-6 grid place-items-center text-blue-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4a2 2 0 0 0-2 2v1l10 6 10-6V6a2 2 0 0 0-2-2Zm0 6.3-8.5 5.1a1 1 0 0 1-1 0L2 10.3V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z"/>
                  </svg>
                </span>
                {email}
              </a>
            )}
            {bookingUrl && (
              <a href={bookingUrl} className="flex items-center gap-3 hover:underline">
                <span className="w-6 h-6 grid place-items-center text-blue-600">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2a1 1 0 0 0-1 1v1H5a3 3 0 0 0-3 3v1h20V7a3 3 0 0 0-3-3h-1V3a1 1 0 1 0-2 0v1H8V3a1 1 0 0 0-1-1Zm15 8H2v9a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3Z"/>
                  </svg>
                </span>
                Beratungstermin buchen
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}