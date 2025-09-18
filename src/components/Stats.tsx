// src/components/Stats.tsx
export default function Stats() {
  const stats = [
    { value: "15+", label: "Erfolgreiche Projekte" },
    { value: "10+",  label: "Zufriedene Kunden" },
    { value: "100%",  label: "Kundenzufriedenheit" },
    { value: "10+",  label: "Jahre Erfahrung" }
  ];
  return (
    <section className="mt-14">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {stats.map(s => (
          <div key={s.label} className="card-stat text-center">
            <div className="text-2xl font-semibold">{s.value}</div>
            <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}