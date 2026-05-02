import type { Metadata } from "next";
import Link from "next/link";
import HomeNav from "../../components/home/HomeNav";
import "../../components/blog.css";
import HomeFooter from "../../components/home/HomeFooter";

export const metadata: Metadata = {
  title:
    "Google Business Profile for lokale bedrifter, komplett 2026-guide | Elevera",
  description:
    "Den gratis Google-tjenesten de fleste lokale bedrifter glemmer, og som ofte gir mer trafikk enn nettsiden. Slik setter du opp Google Business Profile riktig i 2026.",
  alternates: {
    canonical: "https://elevera.no/blogg/google-business-profile-guide",
  },
  openGraph: {
    title:
      "Google Business Profile for lokale bedrifter, komplett 2026-guide",
    description:
      "Den gratis Google-tjenesten som ofte gir mer trafikk enn nettsiden. Slik setter du den opp riktig.",
    url: "https://elevera.no/blogg/google-business-profile-guide",
    type: "article",
  },
};

const faqs = [
  {
    q: "Koster Google Business Profile noe?",
    a: "Nei. Det er helt gratis. Google tjener penger på Google Ads, og GBP er deres måte å holde lokal søketrafikk hos seg. Du betaler null kroner, uansett hvor mange som finner deg via profilen.",
  },
  {
    q: "Hvor lang tid tar det å sette opp en profil?",
    a: "Selve oppsettet tar 15–20 minutter. Verifiseringen (at du faktisk eier bedriften) kan ta fra én dag til et par uker avhengig av metode. De fleste små bedrifter i Norge får verifiseringspostkort innen 5–7 virkedager.",
  },
  {
    q: "Trenger jeg en nettside for å ha Google Business Profile?",
    a: "Nei. Du kan ha en profil uten nettside. Men hvis du har én, bør den være koblet til profilen, og profilen bør peke dit. De to jobber sammen.",
  },
  {
    q: "Hvor ofte bør jeg oppdatere profilen?",
    a: "Minst én post i måneden for å vise at profilen er aktiv. Helst én i uken. I tillegg bør du svare på alle anmeldelser (gode og dårlige) innen 48 timer, og legge til nye bilder hver andre måned.",
  },
  {
    q: "Hva gjør jeg hvis noen skriver en dårlig anmeldelse?",
    a: "Svar rolig, innen 48 timer. Takk for tilbakemeldingen, beklag det som ikke fungerte, og tilby en vei videre. Ikke bli defensiv. Folk leser svarene dine mer enn selve anmeldelsen, det sier mye om hvordan du faktisk driver bedriften.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline:
    "Google Business Profile for lokale bedrifter, komplett 2026-guide",
  description:
    "Den gratis Google-tjenesten de fleste lokale bedrifter glemmer, og som ofte gir mer trafikk enn nettsiden. Slik setter du opp profilen riktig.",
  author: {
    "@type": "Person",
    name: "Marius Teigen Tverbakk",
    jobTitle: "Daglig leder",
    worksFor: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  },
  publisher: {
    "@type": "Organization",
    name: "Elevera",
    url: "https://elevera.no",
  },
  datePublished: "2026-04-18",
  dateModified: "2026-04-18",
  url: "https://elevera.no/blogg/google-business-profile-guide",
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
    {
      "@type": "ListItem",
      position: 3,
      name: "Google Business Profile-guide",
      item: "https://elevera.no/blogg/google-business-profile-guide",
    },
  ],
};

export default function GoogleBusinessProfileGuidePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }}
      />
      <HomeNav />
      <main className="blog-article">
        <article className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-3xl">
            <Link
              href="/blogg"
              className="mb-10 inline-flex items-center gap-2 text-sm text-[var(--stone-600)] hover:text-[var(--stone-700)] transition-colors"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Tilbake til blogg
            </Link>

            {/* Header */}
            <div className="mb-12">
              <div className="mb-4 flex items-center gap-3 flex-wrap">
                <span className="rounded-full border border-[var(--forest)]/25 bg-[var(--forest)]/08 px-3 py-1 text-xs font-medium text-[var(--forest)]">
                  Lokal SEO
                </span>
                <span className="text-xs text-[var(--stone-500)]">
                  18. april 2026
                </span>
                <span className="text-xs text-[var(--stone-500)]">
                  10 min lesetid
                </span>
              </div>
              <h1>
                Google Business Profile for lokale bedrifter, komplett 2026-guide
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--stone-700)]">
                Det finnes et gratis Google-verktøy som ofte gir mer trafikk enn
                selve nettsiden. De fleste lokale bedrifter i Ålesund har det
                enten ignorert, satt opp halvveis, eller glemt at det finnes.
                Her er alt du trenger å vite for å fikse det i 2026.
              </p>
              <p className="mt-3 text-sm text-[var(--stone-500)]">
                Skrevet av Marius Teigen Tverbakk, daglig leder i Elevera · 18.
                april 2026
              </p>
            </div>

            {/* Content */}
            <div className="space-y-12 leading-relaxed text-[var(--stone-700)]">
              <section>
                <h2>Det korte svaret</h2>
                <p>
                  Google Business Profile (tidligere Google My Business) er den
                  gratis kortversjonen av bedriften din som dukker opp i Google
                  Maps og i søkeresultater. Når noen googler &quot;frisør
                  Ålesund&quot;, er det de tre profilene i det lokale
                  Maps-kartet som får mesteparten av klikkene, ikke
                  nettsidene under.
                </p>
                <p>
                  Hvis du driver en lokal bedrift og ikke har en fullstendig
                  profil, taper du kunder hver dag. Det er gratis å fikse, det
                  tar 20 minutter å sette opp, og det er sannsynligvis den
                  største forskjellen du kan gjøre for synligheten din i år.
                </p>
              </section>

              <section>
                <h2>Hvorfor GBP er det første du bør fikse</h2>
                <p>
                  Før du bruker penger på annonser, SEO eller ny nettside, bør
                  profilen være ryddig. Her er hvorfor:
                </p>
                <ul>
                  <li>
                    <strong>Det er gratis.</strong> Du betaler null for å dukke
                    opp i Maps. Det er den eneste Google-tjenesten hvor en liten
                    bedrift stiller likt med store aktører.
                  </li>
                  <li>
                    <strong>Det gir lokalt fokus.</strong> Når noen søker fra
                    Ålesund, prioriterer Google bedrifter i Ålesund. En
                    Oslo-basert konkurrent kan ha bedre SEO globalt, men slår
                    deg ikke i lokal-pakken.
                  </li>
                  <li>
                    <strong>Det tar kjøpsklar trafikk.</strong> Folk som søker
                    &quot;rørlegger Spjelkavik&quot; vil ikke lese en bloggpost.
                    De vil ringe noen i dag. GBP lar dem ringe direkte fra
                    søkeresultatet.
                  </li>
                  <li>
                    <strong>Det gir deg data du ellers ikke får.</strong> Du ser
                    hvor mange som fant deg via Maps, hvor mange som ringte,
                    hvor mange som ba om veibeskrivelse. Ingen av det får du
                    fra en vanlig nettside.
                  </li>
                </ul>
              </section>

              <section>
                <h2>Slik setter du opp profilen fra scratch</h2>
                <p>
                  Hvis du ikke har en profil ennå, er oppsettet rett fram.
                  Regn med 15–20 minutter på selve registreringen, pluss
                  verifisering som kan ta noen dager.
                </p>
                <ol>
                  <li>
                    Gå til{" "}
                    <a
                      href="https://business.google.com"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      business.google.com
                    </a>{" "}
                    og logg inn med en Google-konto. Bruk en konto du faktisk
                    eier langsiktig, ikke en ansatt som slutter neste år.
                  </li>
                  <li>
                    Søk opp bedriften din. Hvis Google har registrert den fra
                    før (som de ofte har), &quot;claimer&quot; du bare eierskap.
                    Hvis ikke, klikker du &quot;Legg til bedriften din&quot; og
                    registrerer den selv.
                  </li>
                  <li>
                    Velg kategori. Dette er viktigere enn folk tror,
                    hovedkategorien din bestemmer hvilke søk du dukker opp på.
                    Velg den mest spesifikke som passer. &quot;Frisør&quot; er
                    bedre enn &quot;Skjønnhet og velvære&quot;.
                  </li>
                  <li>
                    Legg inn adresse hvis kundene kommer til deg. Hvis du
                    reiser til kundene (rørlegger, fotograf), velg
                    &quot;tjenesteområde&quot; i stedet for adresse, da kan
                    du dekke f.eks. hele Sunnmøre uten å eksponere
                    hjemmeadressen din.
                  </li>
                  <li>
                    Legg inn telefon, nettside, åpningstider.
                  </li>
                  <li>
                    Bekreft. Google sender enten en SMS, ringer deg, eller
                    sender et fysisk postkort med en kode. For de fleste små
                    norske bedrifter blir det postkortet, kommer innen 5–7
                    virkedager. Tålmodighet.
                  </li>
                </ol>
                <p>
                  Profilen er ikke levende før verifiseringen er fullført. Når
                  du får koden, logger du inn igjen og skriver den inn.
                </p>
              </section>

              <section>
                <h2>De 7 feltene som faktisk flytter nåla</h2>
                <p>
                  Når profilen er oppe, er det fristende å stoppe der. Ikke
                  gjør det. Det er stor forskjell mellom en profil som finnes
                  og en profil som fungerer.
                </p>

                <h3>1. Bedriftsnavn, skriv det som folk sier det</h3>
                <p>
                  Ikke legg til søkeord du ikke heter. &quot;Pettersen VVS
                  AS&quot; er riktig. &quot;Pettersen VVS Ålesund, Rørlegger og
                  Baderomsservice&quot; er både imot Googles retningslinjer og
                  skurrer for kundene.
                </p>

                <h3>2. Kategori, det mest avgjørende ene valget</h3>
                <p>
                  Du kan velge én hovedkategori og flere underkategorier. Bruk
                  underkategoriene. En frisørsalong kan ha &quot;Frisør&quot; som
                  hovedkategori, og legge til &quot;Barberer&quot;,
                  &quot;Hårfargesalong&quot; og &quot;Spa&quot; som
                  underkategorier. Hver ekstra kategori åpner et nytt søk du
                  kan dukke opp på.
                </p>

                <h3>3. Beskrivelse, 750 tegn, bruk alle</h3>
                <p>
                  Skriv konkret om hva du gjør, hvem du gjør det for, og hvor.
                  Nevn byen/kommunen minst to ganger. Ingen floskler. Folk
                  leser dette mens de bestemmer seg, ikke skriv som en
                  pressemelding.
                </p>

                <h3>4. Tjenester, legg inn alt du tilbyr</h3>
                <p>
                  Hver tjeneste du legger inn er et ekstra søk du kan dukke
                  opp på. Hvis du er tømrer, legg inn &quot;Påbygg&quot;,
                  &quot;Garasje&quot;, &quot;Terrasse&quot;, &quot;Kjøkken&quot;
                  som separate oppføringer. Prisen kan du oppgi som &quot;fra X
                  kr&quot; eller &quot;på forespørsel&quot;, ingen tvang.
                </p>

                <h3>5. Bilder, det første folk ser</h3>
                <p>
                  Profiler med minst 10 gode bilder får dobbelt så mange klikk
                  som profiler uten. Legg til:
                </p>
                <ul>
                  <li>Logo</li>
                  <li>Cover-bilde som viser bedriften utenfra</li>
                  <li>5–8 bilder av innsiden eller produktene</li>
                  <li>Portrett av deg og eventuelle ansatte</li>
                  <li>Bilder av ferdige jobber (tømrer, frisør, håndverker)</li>
                </ul>
                <p>
                  Ikke bruk stock-bilder. Folk ser forskjellen med én gang.
                  Ærlige mobilbilder er bedre enn fine stock-bilder.
                </p>

                <h3>6. Åpningstider, inkluder helligdager</h3>
                <p>
                  Feil åpningstider er en av de største klagene i Google-anmeldelser.
                  Gå inn i påsken, julen og 17. mai og oppdater.
                  Google spør deg før helligdager, bruk 10 sekunder på å svare.
                </p>

                <h3>7. Anmeldelser, start i dag</h3>
                <p>
                  Dette er det viktigste feltet etter kategorien. En profil med
                  20+ anmeldelser og gjennomsnitt over 4.5 stjerner gjør det
                  bedre enn en profil med 500 anmeldelser og 4.1 stjerner.
                  Kvalitet og respons slår volum.
                </p>
                <p>
                  Mer om anmeldelser lenger ned.
                </p>
              </section>

              <section>
                <h2>Vanlige feil jeg ser hos lokale bedrifter</h2>
                <p>
                  Jeg jobber mest med bedrifter som allerede har en profil, men
                  hvor den ikke er satt opp riktig. Her er de vanligste feilene:
                </p>
                <ul>
                  <li>
                    <strong>Ingen bilder, eller kun logo.</strong> En tom
                    profil ser forlatt ut. Google prioriterer aktive profiler.
                  </li>
                  <li>
                    <strong>Utdaterte åpningstider.</strong> En kunde som kjører
                    forbi en stengt butikk med &quot;åpen&quot; på Google, kommer
                    ikke tilbake.
                  </li>
                  <li>
                    <strong>Ubesvarte anmeldelser.</strong> Spesielt de dårlige.
                    Folk leser svarene dine før de bestemmer seg.
                  </li>
                  <li>
                    <strong>Feil kategori.</strong> Jeg har sett bilverksteder
                    med kategori &quot;Bilforhandler&quot; og restauranter med
                    &quot;Kafé&quot;. Det flytter deg ut av de riktige søkene.
                  </li>
                  <li>
                    <strong>Ingen posts.</strong> GBP har en posts-funksjon som
                    99% av norske bedrifter aldri bruker. Mer om det nedenfor.
                  </li>
                  <li>
                    <strong>Nettside-lenke som peker til forsiden, uansett
                    tjeneste.</strong> Hvis du har en tjeneste-side for
                    &quot;Dronevideo Ålesund&quot;, lenk dit. Ikke til forsiden.
                  </li>
                </ul>
              </section>

              <section>
                <h2>Slik får du flere anmeldelser uten å plage folk</h2>
                <p>
                  Anmeldelser er den største vekstdriveren på GBP, men de
                  kommer ikke av seg selv. Du må spørre.
                </p>
                <p>
                  Det enkleste som fungerer: Send en kort SMS eller e-post 24
                  timer etter at jobben er gjort. Noe i retning av:
                </p>
                <blockquote>
                  &quot;Hei [navn], takk for at du valgte oss. Hvis du ble
                  fornøyd, setter jeg stor pris på en kort anmeldelse på Google
                 , det hjelper oss å nå flere folk i nærområdet. Her er
                  lenken: [direkte lenke]. Tusen takk.&quot;
                </blockquote>
                <p>
                  Du får en direkte anmeldelses-lenke inne i GBP-adminen
                  (&quot;Be om anmeldelser&quot;). Bruk den. Ellers havner folk
                  på profilen din og finner ikke hvor de skal klikke.
                </p>
                <p>
                  <strong>Svar på alle anmeldelser innen 48 timer.</strong>
                  Gode, dårlige, middels. Google ser at du er aktiv, og
                  potensielle kunder ser hvordan du behandler folk. Svarene
                  dine er offentlig markedsføring.
                </p>
              </section>

              <section>
                <h2>Posts-funksjonen ingen bruker</h2>
                <p>
                  GBP lar deg publisere små &quot;posts&quot; direkte på
                  profilen din, litt som Facebook, bare at det dukker opp i
                  søkeresultatene. De fleste norske bedrifter har aldri lagt ut
                  én.
                </p>
                <p>
                  Det du kan poste:
                </p>
                <ul>
                  <li>Tilbud og kampanjer (gir en knapp på profilen)</li>
                  <li>Ny tjeneste eller produkt</li>
                  <li>Arrangement (webinar, åpen dag, kurs)</li>
                  <li>Generell oppdatering med bilde</li>
                </ul>
                <p>
                  Jeg anbefaler minst én post i måneden. Ikke fordi den får
                  massevis av klikk, men fordi Google registrerer at profilen
                  er aktiv. Aktive profiler rangerer bedre.
                </p>
                <p>
                  Posts er synlige i 7 dager før de arkiveres, så hyppigere er
                  bedre. Én post i uken holder profilen levende uten at det
                  krever mer enn 10 minutter.
                </p>
              </section>

              <section>
                <h2>Hvor ofte bør du oppdatere profilen?</h2>
                <p>
                  Her er en realistisk rytme for en lokal bedrift som ikke vil
                  drukne i digital vedlikehold:
                </p>
                <ul>
                  <li>
                    <strong>Ukentlig:</strong> Sjekk meldinger og svar
                    anmeldelser.
                  </li>
                  <li>
                    <strong>Månedlig:</strong> Publiser én post. Sjekk at
                    åpningstidene stemmer (spesielt foran helligdager).
                  </li>
                  <li>
                    <strong>Kvartalsvis:</strong> Legg til 3–5 nye bilder fra
                    de siste månedene. Se gjennom statistikken (hvor mange
                    søk, klikk, anrop).
                  </li>
                  <li>
                    <strong>Årlig:</strong> Gå gjennom tjenestelisten og
                    beskrivelsen. Slett det som ikke stemmer lenger, legg til
                    det som er nytt.
                  </li>
                </ul>
                <p>
                  Total tidsbruk: rundt 1 time i måneden. Mindre hvis du får
                  hjelp.
                </p>
              </section>

              <section>
                <h2>Hva GBP ikke kan gjøre</h2>
                <p>
                  GBP er kraftig, men det er ikke hele markedsføringen din. Det
                  som profilen ikke dekker:
                </p>
                <ul>
                  <li>
                    Dybde. Profilen viser en kort beskrivelse. Nettsiden din er
                    fortsatt hovedstedet for detaljer, priser, case-studier.
                  </li>
                  <li>
                    Salg. GBP sender folk til deg, men selve kjøpsprosessen
                    skjer på nettsiden eller i butikken.
                  </li>
                  <li>
                    Søkerangering utenfor lokalt. Hvis du vil nå folk i hele
                    Norge, trenger du SEO-arbeid på nettsiden i tillegg.
                  </li>
                  <li>
                    Annonsering. Hvis du vil betale for ekstra synlighet i
                    Maps, må du gjøre det via Google Ads, GBP er den gratis
                    delen.
                  </li>
                </ul>
                <p>
                  Tenk på GBP som grunnmuren. Nettside, SEO og eventuelle
                  annonser bygger på toppen.
                </p>
              </section>

              <section>
                <h2>Vanlige spørsmål</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div
                      key={i}
                      className="rounded-2xl border border-[var(--stone-300)] bg-[var(--stone-50)] px-6 py-5"
                    >
                      <h3 className="mb-2 font-semibold text-[var(--black)]">
                        {faq.q}
                      </h3>
                      <p className="text-sm leading-relaxed text-[var(--stone-600)]">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* CTA */}
            <div className="mt-16 rounded-3xl border border-[var(--forest)]/20 bg-[var(--forest)]/06 p-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-[var(--black)]">
                Vil du at vi fikser Google Business Profile for deg?
              </h3>
              <p className="mb-6 text-[var(--stone-700)]">
                GBP-oppsett er en del av alle pakkene våre. Book et gratis
                møte, så viser vi deg hvordan profilen din ser ut i dag, og
                hva som mangler.
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
                <Link href="/tjenester/seo-alesund" className="btn btn-ghost">
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
