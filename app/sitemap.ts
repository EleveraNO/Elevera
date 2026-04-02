import type { MetadataRoute } from "next";

const today = new Date("2026-04-02");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://elevera.no",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://elevera.no/tjenester/foto-og-video-alesund",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://elevera.no/tjenester/videoproduksjon-alesund",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://elevera.no/tjenester/fotografering-alesund",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://elevera.no/tjenester/nettside-alesund",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://elevera.no/tjenester/annonsering-alesund",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://elevera.no/tjenester/dronevideo-alesund",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://elevera.no/prosjekter/tverbakken-gard",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://elevera.no/prosjekter/drive-trafikkskule",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://elevera.no/prosjekter/cutoclock",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: "https://elevera.no/kalkulator",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://elevera.no/blogg",
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://elevera.no/blogg/instagram-lokale-kunder",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://elevera.no/blogg/profesjonelle-bilder-bedrift",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: "https://elevera.no/personvern",
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: "https://elevera.no/vilkar",
      lastModified: today,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
