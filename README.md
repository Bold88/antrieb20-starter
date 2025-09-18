# Antrieb2.0 Starter (Next.js + Tailwind v4)

## Schnellstart
```bash
npm i
npm run dev
```

## Städte-Seiten
- Städte in `src/lib/cities.ts` pflegen (ca. 350 Einträge).
- Suche auf der Startseite führt zu `/city/<slug>`.
- Seiten werden beim **ersten Aufruf erzeugt** und danach **24h revalidiert**.

## Ordnerstruktur
- `src/app/page.tsx` – Startseite
- `src/app/city/[city]/page.tsx` – dynamische Städte-Seite
- `src/components/SearchCity.tsx` – Suchfeld
- `src/lib/cities.ts` – Städte-Liste + Slugify
- `public/` – Assets
