import { BLOG_POSTS } from "../../lib/blog-content";

/**
 * /llms.txt — directory file for LLM discovery (Anthropic's proposed standard).
 *
 * Keeps under ~2 KB. Points AI crawlers at:
 *  - The main site sections
 *  - A sitemap of blog posts (one line each)
 *  - The companion /llms-full.txt that has everything concatenated
 *
 * Spec: https://llmstxt.org
 */

export const dynamic = "force-static";

const SITE = "https://elevera.no";

export async function GET() {
  const posts = [...BLOG_POSTS].sort((a, b) =>
    b.publishedDate.localeCompare(a.publishedDate)
  );

  const body = `# Elevera — Vekstbyrå i Ålesund

> Lokalt vekstbyrå på Sunnmøre. Foto, video, nettside, SEO og digital annonsering for lokale bedrifter — alt fra én person. Resultat-fokusert, ikke estetikk-drevet.

Kontakt: tverbakk@elevera.no · +47 949 74 165 · ${SITE}

## Hovedsider

- [Forside](${SITE}): Vekstbyrå i Ålesund — hele markedsføringen fra én partner
- [Priser og pakker](${SITE}/#priser): Tre pakker fra 7 900 til 22 900 kr/mnd
- [Om Elevera](${SITE}/#om): Én person, hele jobben — Marius i Ålesund
- [Kontakt](${SITE}/#kontakt): Book møte eller send melding
- [Blogg](${SITE}/blogg): Artikler om digital markedsføring for lokale bedrifter

## Tjenester

- [Foto & Video i Ålesund](${SITE}/tjenester/foto-og-video-alesund): Bedriftsfoto, reklamefilm, dronefoto
- [Nettside i Ålesund](${SITE}/tjenester/nettside-alesund): Konverterende nettsider for lokale bedrifter
- [SEO i Ålesund](${SITE}/tjenester/seo-alesund): Lokal søkemotoroptimalisering
- [Digital annonsering](${SITE}/tjenester/annonsering-alesund): Meta og Google Ads for SMB
- [Sosiale medier](${SITE}/tjenester/sosiale-medier-alesund): Strategi, produksjon og publisering
- [Dronevideo](${SITE}/tjenester/dronevideo-alesund): Sertifiserte droneopptak

## Prosjekter / Case-studier

- [Drive Trafikkskule](${SITE}/prosjekter/drive-trafikkskule): 1 000 nye følgere på TikTok på syv dager — uten annonser
- [Cut O' Clock](${SITE}/prosjekter/cutoclock): Profesjonelle bilder og innhold for frisørsalong
- [Tverbakken Gård](${SITE}/prosjekter/tverbakken-gard): Komplett nettside med e-handel for 10. generasjons gård

## Blogg

${posts
  .map(
    (p) =>
      `- [${p.title}](${SITE}/blogg/${p.slug}): ${p.description} (${p.category} · ${p.displayDate})`
  )
  .join("\n")}

## Full markdown

Alt innhold samlet: [${SITE}/llms-full.txt](${SITE}/llms-full.txt)

Individuelle blogginnlegg som markdown: ${SITE}/blogg/{slug}/md — for eksempel [${SITE}/blogg/${posts[0].slug}/md](${SITE}/blogg/${posts[0].slug}/md)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
