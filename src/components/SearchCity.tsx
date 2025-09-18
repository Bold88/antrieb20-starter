"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { slugifyCity } from "@/lib/cities";

export default function SearchCity() {
  const [q, setQ] = useState("");
  const router = useRouter();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const slug = slugifyCity(q);
        if (slug) router.push(`/city/${slug}`);
      }}
      className="mt-8 flex gap-3 max-w-xl"
    >
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Stadt eingeben… (z. B. Bielefeld)"
        className="flex-1 rounded-xl border px-4 py-3 outline-none"
      />
      <button className="rounded-xl border px-5 py-3 font-medium shadow-sm hover:bg-zinc-50" type="submit">
        Finden
      </button>
    </form>
  );
}
