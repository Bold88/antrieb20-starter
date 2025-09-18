// src/components/FABQuickContact.tsx
"use client";
import Link from "next/link";

export default function FABQuickContact() {
  const items = [
    { href: "/contact#form", label: "Kontakt", icon: "👤" },
    { href: "tel:+49-0000-0000", label: "Anruf", icon: "📞" },
    { href: "mailto:info@antrieb2punkt0.de", label: "E-Mail", icon: "✉️" },
    { href: "/contact#termin", label: "Termin", icon: "📅" }
  ];
  return (
    <div className="fixed right-4 md:right-6 top-1/3 z-40 flex flex-col gap-3">
      {items.map(i => (
        <Link
          key={i.label}
          href={i.href}
          className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-white border shadow-md grid place-items-center hover:shadow-lg"
          title={i.label}
        >
          <span className="text-lg">{i.icon}</span>
        </Link>
      ))}
    </div>
  );
}