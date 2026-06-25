import { BLOG_POSTS } from "../../lib/blog-content";

/**
 * /llms-full.txt, all primary content concatenated as one markdown file
 * for LLM consumption. Used by AI crawlers and chat assistants that want
 * to ingest the whole site in a single fetch.
 */

export const dynamic = "force-static";

const SITE = "https://elevera.no";

export async function GET() {
  const posts = [...BLOG_POSTS].sort((a, b) =>
    b.publishedDate.localeCompare(a.publishedDate)
  );

  const header = `# Elevera, Vekstbyrå i Ålesund

Lokalt vekstbyrå på Sunnmøre. Foto, video, nettside, SEO og digital annonsering for lokale bedrifter, alt fra én person.

- **Nettsted:** ${SITE}
- **E-post:** tverbakk@elevera.no
- **Telefon:** +47 949 74 165
- **Sted:** Ålesund, Norge

## Verdiløfte

Vi bygger hele markedsføringen fra én partner, så alle kanaler snakker samme språk. Foto, sosiale medier, nettside, SEO og annonser bygges sammen, og måles sammen. Målt i resultater, ikke estetikk.

## Tjenester

1. **Foto og video**, Bedriftsfoto, produktfoto, dronefoto, reklamefilm, innhold til sosiale medier
2. **Sosiale medier**, Strategi, innholdsproduksjon, publisering, community management
3. **Nettside**, Design, utvikling, SEO-grunnlag, mobiloptimalisering
4. **SEO**, Teknisk, innhold, Google Business Profile, lokal søk
5. **Digital annonsering**, Meta (Facebook/Instagram) og Google Ads

## Pakker og priser

- **Start**, fra 9 900 kr/mnd. Nettside (inntil 5 sider), bilder, grunnleggende SEO, Google Business Profile.
- **Vekst**, fra 18 900 kr/mnd. Alt i Start + 4 videoer + 8 bilder per måned, publisering 3x/uke, innholdsstrategi, aktiv SEO. *Mest populær.*
- **Partner**, fra 27 900 kr/mnd. Alt i Vekst + 6 videoer + 12 bilder per måned, publisering 5x/uke, annonsering på Meta og Google, dronevideo, strategi.

Prisene er utgangspunkt og tilpasses behovet. Alle priser eks. mva. Ingen bindingstid. Oppstart faktureres separat.

## Case-studier

### Drive Trafikkskule, TikTok-vekst uten betalte annonser
Drive trengte å nå flere folk som vurderer å ta BE-lappen. Vi bygget en innholdspakke for sosiale medier med videoer som både stopper scrollingen og bygger tillit. Resultat første uke: **200 000 visninger, 1 000 nye følgere, 0 kr i annonsekostnad**.

### Cut O' Clock, frisørsalong i Ålesund
Profesjonelle bilder og innhold for en ny frisørsalong som skulle sette seg i markedet.

### Tverbakken Gård, e-handel fra null
Komplett nettside med nettbutikk for 10. generasjons gård på Kjerringøy. Rå Nordisk-design, bestilling via e-post, egen SEO.

---

# Blogginnlegg

`;

  const body = posts
    .map(
      (p) => `## ${p.title}

**Kategori:** ${p.category}
**Publisert:** ${p.displayDate}
**Lesetid:** ${p.readTime}
**Forfatter:** ${p.author}
**URL:** ${SITE}/blogg/${p.slug}

> ${p.description}

${p.body}

---
`
    )
    .join("\n");

  const footer = `
# Om denne filen

Denne filen følger llms.txt-spesifikasjonen (${SITE}/llms.txt) og er ment for AI-verktøy som vil hente hele nettstedets hovedinnhold i én fetch. Oppdatert automatisk med bloggen.

For individuelle blogginnlegg i ren markdown, bruk ${SITE}/blogg/{slug}/md.
`;

  return new Response(header + body + footer, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
