import type { MetadataRoute } from "next";
import { CITIES, slugifyCity } from "@/lib/cities";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://antrieb2punkt0.de";

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/services`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/projects`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/contact`, changeFrequency: "monthly", priority: 0.5 }
  ];

  const cityPages: MetadataRoute.Sitemap = CITIES.map((c) => ({
    url: `${base}/city/${slugifyCity(c)}`,
    changeFrequency: "weekly",
    priority: 0.7
  }));

  return [...staticPages, ...cityPages];
}