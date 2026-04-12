import type { MetadataRoute } from "next";

const today = new Date("2026-04-12");

// Programmatic location pages
const locationPages = [
  "nettside-molde", "nettside-kristiansund",
  "annonsering-molde", "annonsering-kristiansund",
  "sosiale-medier-molde", "sosiale-medier-kristiansund",
];

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
      url: "https://elevera.no/tjenester/seo-alesund",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://elevera.no/tjenester/sosiale-medier-alesund",
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
      url: "https://elevera.no/blogg",
      lastModified: today,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: "https://elevera.no/blogg/markedsforingsbyraa-alesund",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://elevera.no/blogg/dronevideo-pris",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://elevera.no/blogg/nettside-bedrift-pris",
      lastModified: today,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: "https://elevera.no/blogg/facebook-annonser-tips",
      lastModified: today,
      changeFrequency: "monthly",
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
    // Programmatic location pages
    ...locationPages.map((slug) => ({
      url: `https://elevera.no/tjenester/${slug}`,
      lastModified: today,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
