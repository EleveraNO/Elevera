import type { Metadata } from "next";
import Link from "next/link";
import HomeNav from "../../components/home/HomeNav";
import "../../components/blog.css";
import HomeFooter from "../../components/home/HomeFooter";

export const metadata: Metadata = {
  title: "5 vanligste SEO-feil bedrifter i Ålesund gjør (2026) | Elevera",
  description:
    "Disse fem feilene koster bedrifter i Ålesund kunder hver dag. Slik finner du dem på din egen side, og slik fikser du dem.",
  alternates: { canonical: "https://elevera.no/blogg/seo-feil-bedrifter-alesund" },
  openGraph: {
    title: "5 vanligste SEO-feil bedrifter i Ålesund gjør (2026)",
    description:
      "Disse fem feilene koster bedrifter i Ålesund kunder hver dag. Slik finner du dem på din egen side, og slik fikser du dem.",
    url: "https://elevera.no/blogg/seo-feil-bedrifter-alesund",
    type: "article",
  },
};

const faqs = [
  {
    q: "Hvor ofte bør jeg sjekke SEO-en på siden min?",
    a: "For en aktiv bedrift bør du se på Google Search Console minst én gang i måneden. Da fanger du opp endringer i posisjon, dropp i klikk, eller sider som plutselig får visninger på nye søk. For mindre aktive sider er hver 2-3 måned tilstrekkelig.",
  },
  {
    q: "Kan jeg fikse disse SEO-feilene selv?",
    a: "De fleste kan løses uten utvikler-kunnskap. Tittel og meta-beskrivelse kan endres i de fleste CMS-er (WordPress, Squarespace, Shopify). Google Business Profile er gratis å sette opp. Tekniske feil som hastighet eller manglende strukturerte data trenger ofte hjelp fra en utvikler eller et SEO-byrå.",
  },
  {
    q: "Hvor mye trafikk kan jeg forvente å få ved å fikse disse feilene?",
    a: "Det avhenger av bransje, konkurranse og utgangspunkt. For en lokal bedrift i Ålesund som starter med svake titler og uten GBP, kan du realistisk doble eller tredoble organisk trafikk innen 3–6 måneder ved å fikse grunnleggende feil.",
  },
  {
    q: "Er teknisk SEO viktigere enn innhold?",
    a: "Innhold er viktigst for de fleste, men teknisk SEO er fundamentet. En treg side eller en side Google ikke kan indeksere vil aldri rangere godt, uansett hvor bra innholdet er. Start med teknisk gjennomgang, deretter innhold.",
  },
  {
    q: "Hvor lang tid tar det før jeg ser effekten av endringer?",
    a: "Tittel og meta-beskrivelse kan gi CTR-effekt innen 2–4 uker etter at Google har re-indeksert siden. Innholdsforbedringer og strukturelle endringer tar typisk 6–12 uker før de slår ut i posisjon. Lenkebygging tar lengst, ofte 3–6 måneder.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "5 vanligste SEO-feil bedrifter i Ålesund gjør (2026)",
  description:
    "Disse fem feilene koster bedrifter i Ålesund kunder hver dag. Slik finner du dem på din egen side, og slik fikser du dem.",
  author: {
    "@type": "Person",
    name: "Marius Teigen Tverbakk",
    jobTitle: "Daglig leder",
    worksFor: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  },
  publisher: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  datePublished: "2026-05-10",
  dateModified: "2026-05-10",
  url: "https://elevera.no/blogg/seo-feil-bedrifter-alesund",
  about: [
    { "@type": "Thing", name: "Søkemotoroptimalisering" },
    { "@type": "Thing", name: "SEO-feil" },
    { "@type": "Place", name: "Ålesund" },
  ],
};

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Blogg", item: "https://elevera.no/blogg" },
    { "@type": "ListItem", position: 3, name: "5 vanligste SEO-feil bedrifter i Ålesund gjør", item: "https://elevera.no/blogg/seo-feil-bedrifter-alesund" },
  ],
};

export default function SeoFeilPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <HomeNav />
      <main className="blog-article">

        <article className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-3xl">

            <Link
              href="/blogg"
              className="mb-10 inline-flex items-center gap-2 text-sm text-[var(--stone-600)] hover:text-[var(--stone-700)] transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tilbake til blogg
            </Link>

            <div className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-[var(--forest)]/25 bg-[var(--forest)]/08 px-3 py-1 text-xs font-medium text-[var(--forest)]">
                  SEO
                </span>
                <span className="text-xs text-[var(--stone-500)]">10. mai 2026</span>
                <span className="text-xs text-[var(--stone-500)]">8 min lesetid</span>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-[var(--black)] sm:text-4xl md:text-5xl">
                5 vanligste SEO-feil bedrifter i Ålesund gjør (2026)
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--stone-700)]">
                Vi har sett gjennom hundrevis av nettsider for bedrifter på Sunnmøre. De fleste sliter med de samme fem feilene, og alle er fikse. Slik kjenner du dem igjen, og slik retter du dem opp.
              </p>
              <p className="mt-3 text-sm text-[var(--stone-500)]">
                Skrevet av Marius Teigen Tverbakk, daglig leder i Elevera · 10. mai 2026
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-12 text-[var(--stone-700)] leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Feil 1: Google Business Profile er ikke satt opp (eller bare halvveis)</h2>
                <p>
                  Den vanligste, og mest kostbare, feilen vi ser. Google Business Profile (tidl. Google My Business) er gratis, og er det første resultatet folk i Ålesund møter når de søker etter en lokal tjeneste. Likevel har mange bedrifter den enten ikke satt opp, eller den ligger med tomme felt og bilder fra 2018.
                </p>
                <p className="mt-4">
                  <strong className="text-[var(--black)]">Slik fikser du det:</strong> Gå til <a href="https://business.google.com" target="_blank" rel="noopener" className="underline">business.google.com</a> og sett opp profilen. Fyll inn riktige kategorier, åpningstider, beskrivelse, og last opp minst 10 bilder. Be tilfredse kunder om Google-anmeldelser. Legg ut korte innlegg månedlig (Google premierer aktivitet). For en grundigere gjennomgang, se vår <Link href="/blogg/google-business-profile-guide" className="underline">komplette GBP-guide</Link>.
                </p>
                <p className="mt-4 text-sm italic text-[var(--stone-600)]">
                  Effekt: De fleste bedrifter ser bevegelse i kart-resultater innen 2–4 uker. Noen kunder vi har jobbet med har gått fra 5 til 50 telefoner i måneden bare på dette tiltaket.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Feil 2: Sidetittel og meta-beskrivelse er generiske</h2>
                <p>
                  Sidetittelen er den blå linken Google viser i søkeresultatene. Meta-beskrivelsen er teksten under. Begge påvirker direkte hvor mange som klikker på siden din når den dukker opp.
                </p>
                <p className="mt-4">
                  Vi ser stadig titler som «Hjem | Bedriftsnavn» eller «Velkommen til oss». Det forteller Google ingenting om hva siden handler om, og det får ingen til å klikke. Et bedre alternativ er noe som beskriver tilbudet og inkluderer geografi: «Rørlegger i Ålesund og Sunnmøre, døgnvakt | Bedriftsnavn».
                </p>
                <p className="mt-4">
                  <strong className="text-[var(--black)]">Slik fikser du det:</strong> Sjekk hver av de viktigste sidene dine (hjem, tjenester, kontakt). Tittelen bør være under 60 tegn og inneholde det folk søker på. Meta-beskrivelsen bør være under 155 tegn og selge klikket: «Hva får jeg her, og hvorfor bør jeg klikke?».
                </p>
                <p className="mt-4 text-sm italic text-[var(--stone-600)]">
                  Effekt: CTR (klikkfrekvens) kan ofte dobles eller tredobles ved å bytte fra generisk til konkret tittel.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Feil 3: Innholdet nevner ikke hvor du jobber</h2>
                <p>
                  Mange bedrifter på Sunnmøre har en flott hjemmeside som beskriver tjenestene godt, men aldri nevner Ålesund, Sula, Giske, Spjelkavik eller andre lokale stedsnavn. For Google er det da ikke åpenbart at bedriften er lokal, og du dukker ikke opp på «tjeneste + Ålesund»-søk.
                </p>
                <p className="mt-4">
                  Det handler ikke om å spamme stedsnavn. Det handler om at innholdet faktisk skal kjenne igjen at du er en lokal aktør: «Vi har jobbet med bedrifter i Ålesund sentrum, Moa og Spjelkavik siden 2015» er nyttig informasjon, både for besøkende og for Google.
                </p>
                <p className="mt-4">
                  <strong className="text-[var(--black)]">Slik fikser du det:</strong> Gå gjennom hjemmesiden og tjenestesidene. Inkluder konkrete stedsnavn der det er naturlig. Lag en «Områder vi jobber i»-seksjon. Hvis du har kontorer i flere kommuner, vurder en egen side for hver. Les mer om hvordan du jobber strategisk med <Link href="/tjenester/seo-alesund" className="underline">lokal SEO i Ålesund</Link>.
                </p>
                <p className="mt-4 text-sm italic text-[var(--stone-600)]">
                  Effekt: Begynn å rangere på lokal-spesifikke søk innen 6–10 uker.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Feil 4: Siden laster tregt på mobil</h2>
                <p>
                  Over 70 % av lokale søk skjer på mobil. Hvis siden din bruker mer enn 3 sekunder på å lastes, mister du de fleste besøkende før de i det hele tatt har sett hva du tilbyr. Google straffer også trege sider med dårligere rangering.
                </p>
                <p className="mt-4">
                  De vanligste synderne: store ukomprimerte bilder, gamle WordPress-temaer med 30 plugins, ingen caching, og videoer som spilles av automatisk i bakgrunnen uten optimalisering.
                </p>
                <p className="mt-4">
                  <strong className="text-[var(--black)]">Slik fikser du det:</strong> Test siden din på <a href="https://pagespeed.web.dev" target="_blank" rel="noopener" className="underline">pagespeed.web.dev</a>. Hvis du får under 70 i score på mobil, har du en jobb å gjøre. Komprimer bilder (bruk webp/avif), reduser plugins, vurder å bytte til en moderne plattform hvis WordPress-siden din er treg uansett hva du gjør.
                </p>
                <p className="mt-4 text-sm italic text-[var(--stone-600)]">
                  Effekt: Sider som går fra 5 sek til 1,5 sek lastetid ser typisk 20–40 % økning i konverteringsrate.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Feil 5: Ingen interne lenker eller en kaotisk struktur</h2>
                <p>
                  Interne lenker er linker fra én side på nettstedet ditt til en annen. De forteller Google hvilke sider som er viktigst, og de hjelper besøkende å navigere. Vi ser stadig nettsider hvor blogg-innleggene aldri lenker til tjenestesidene, eller hvor tjenestesidene aldri lenker til hverandre.
                </p>
                <p className="mt-4">
                  Resultatet er at Google ikke forstår hvilke sider som skal rangeres høyt for hva, og du sprer din egen «autoritet» tynt utover for mange sider.
                </p>
                <p className="mt-4">
                  <strong className="text-[var(--black)]">Slik fikser du det:</strong> Bestem deg for hvilke 3–5 sider er viktigst for bedriften (typisk hovedtjenester eller pris-side). Sørg for at hver blogg-post og hver tjenestesidene lenker til minst én av disse, med relevant ankertekst. Bruk varierte ankertekster (ikke «klikk her» 50 ganger).
                </p>
                <p className="mt-4 text-sm italic text-[var(--stone-600)]">
                  Effekt: Sider du «pumper» autoritet inn i begynner å rangere bedre innen 8–12 uker.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Slik finner du dine egne SEO-feil</h2>
                <p>Du trenger ikke være ekspert for å oppdage de vanligste problemene:</p>
                <ol className="mt-4 space-y-3 list-decimal list-inside">
                  <li><strong className="text-[var(--black)]">Sett opp Google Search Console</strong> (gratis). Den viser nøyaktig hvilke søk du dukker opp på, hvilke posisjoner du har, og hvilke sider som får visninger.</li>
                  <li><strong className="text-[var(--black)]">Søk på bedriften din i en privat fane</strong> i Chrome. Hva ser du? Er Google Business Profile fyldig? Er sidetittelen meningsfull?</li>
                  <li><strong className="text-[var(--black)]">Test hastighet</strong> på pagespeed.web.dev. Mobil-score er viktigst.</li>
                  <li><strong className="text-[var(--black)]">Les sidene dine som om du var kunde.</strong> Står det hvor du jobber? Forstår man hva du tilbyr på 5 sekunder?</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-6">Vanlige spørsmål om SEO-feil</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="rounded-2xl border border-[var(--stone-300)] bg-[var(--stone-50)] px-6 py-5">
                      <h3 className="mb-2 font-semibold text-[var(--black)]">{faq.q}</h3>
                      <p className="text-sm leading-relaxed text-[var(--stone-600)]">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Trenger du hjelp til å fikse disse?</h2>
                <p>
                  Vi har gjort SEO-gjennomganger for bedrifter på Sunnmøre i flere år, og finner stadig de samme feilene. En gjennomgang fra oss inkluderer hva som er feil, hva som bør prioriteres, og en konkret plan du kan kjøre selv eller la oss kjøre for deg. Les mer om <Link href="/tjenester/seo-alesund" className="underline">vår SEO-tjeneste for bedrifter i Ålesund</Link>.
                </p>
              </section>

            </div>

            <div className="mt-16 rounded-3xl border border-[var(--forest)]/20 bg-[var(--forest)]/06 p-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-[var(--black)]">Få en gratis SEO-gjennomgang</h3>
              <p className="mb-6 text-[var(--stone-700)]">
                30-minutters møte hvor vi går gjennom siden din live og peker ut de tre viktigste tingene å fikse. Ingen forpliktelser.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Book gratis møte
                </a>
                <Link
                  href="/tjenester/seo-alesund"
                  className="btn btn-ghost"
                >
                  Se SEO-tjenesten
                </Link>
              </div>
            </div>

          </div>
        </article>

        </main>
      <HomeFooter />
    </>
  );
}
