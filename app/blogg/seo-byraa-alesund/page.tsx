import type { Metadata } from "next";
import Link from "next/link";
import HomeNav from "../../components/home/HomeNav";
import "../../components/blog.css";
import HomeFooter from "../../components/home/HomeFooter";

export const metadata: Metadata = {
  title: "Slik velger du SEO-byrå i Ålesund (2026) | Elevera",
  description:
    "Skal du velge SEO-byrå i Ålesund? Slik finner du et som faktisk leverer, hva det bør koste, og røde flagg du må unngå.",
  alternates: { canonical: "https://elevera.no/blogg/seo-byraa-alesund" },
  openGraph: {
    title: "Slik velger du SEO-byrå i Ålesund (2026)",
    description:
      "Skal du velge SEO-byrå i Ålesund? Slik finner du et som faktisk leverer, hva det bør koste, og røde flagg du må unngå.",
    url: "https://elevera.no/blogg/seo-byraa-alesund",
    type: "article",
  },
};

const faqs = [
  {
    q: "Hva koster et SEO-byrå i Ålesund?",
    a: "For en typisk lokal bedrift i Ålesund ligger månedlige SEO-leveranser på 3 000–8 000 kr/mnd. Større prosjekter med mye innhold og teknisk arbeid kan ligge på 10 000–15 000 kr/mnd. Engangs-tjenester som teknisk SEO-audit eller GBP-oppsett ligger gjerne mellom 5 000 og 15 000 kr.",
  },
  {
    q: "Hvor lang tid tar det å se resultater fra SEO?",
    a: "De første forbedringene (klikk på Google Business, økt synlighet i kart) ser du gjerne innen 4–8 uker. Varig rangering på side 1 av Google for konkurranseutsatte søk tar 3–6 måneder. Vær skeptisk til byråer som lover raskere resultater.",
  },
  {
    q: "Bør jeg velge et SEO-byrå i Ålesund eller et nasjonalt byrå?",
    a: "For lokal SEO (de fleste bedrifter i Ålesund og på Sunnmøre) er et lokalt byrå ofte best. De forstår markedet, kjenner til lokale søkemønstre, og kan møtes fysisk. For ren nasjonal SEO eller nettbutikker som selger over hele landet, kan et større nasjonalt byrå også være et godt valg.",
  },
  {
    q: "Kan et SEO-byrå garantere førsteplass på Google?",
    a: "Nei, og du bør være skeptisk til de som lover det. Google rangerer over 200 signaler, og posisjonene endrer seg løpende. Det et seriøst byrå kan garantere er ærlig arbeid, dokumenterte forbedringer, og månedlige rapporter du kan etterprøve i Google Search Console.",
  },
  {
    q: "Hva er forskjellen på SEO og Google Ads?",
    a: "Google Ads gir umiddelbar synlighet, men du betaler for hvert klikk. SEO tar lengre tid (3–6 måneder), men trafikken er gratis når du først rangerer. De fleste bedrifter i Ålesund tjener på å kombinere begge: annonser for å komme raskt i gang, SEO for langsiktig vekst.",
  },
  {
    q: "Trenger jeg en blogg for å rangere på Google?",
    a: "Ikke alltid, men ofte. En blogg lar deg dekke spørsmål kundene faktisk søker på (for eksempel «hva koster en taktekker i Ålesund»). Det bygger autoritet hos Google og hjelper deg å rangere på flere søk enn bare bedriftsnavnet ditt.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Slik velger du SEO-byrå i Ålesund (2026)",
  description:
    "Skal du velge SEO-byrå i Ålesund? Slik finner du et som faktisk leverer, hva det bør koste, og røde flagg du må unngå.",
  author: {
    "@type": "Person",
    name: "Marius Teigen Tverbakk",
    jobTitle: "Daglig leder",
    worksFor: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  },
  publisher: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  datePublished: "2026-05-10",
  dateModified: "2026-05-10",
  url: "https://elevera.no/blogg/seo-byraa-alesund",
  about: [
    { "@type": "Thing", name: "Søkemotoroptimalisering" },
    { "@type": "Thing", name: "SEO-byrå" },
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
    { "@type": "ListItem", position: 3, name: "Slik velger du SEO-byrå i Ålesund", item: "https://elevera.no/blogg/seo-byraa-alesund" },
  ],
};

export default function SeoByraaAlesundPage() {
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
                <span className="text-xs text-[var(--stone-500)]">10 min lesetid</span>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-[var(--black)] sm:text-4xl md:text-5xl">
                Slik velger du SEO-byrå i Ålesund (2026)
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--stone-700)]">
                Mange SEO-byråer lover topplassering, raske resultater og garantert ROI. De fleste leverer ingen av delene. Her er hvordan du finner et byrå som faktisk kan flytte bedriften din opp på Google, hva det bør koste, og hva du må passe på.
              </p>
              <p className="mt-3 text-sm text-[var(--stone-500)]">
                Skrevet av Marius Teigen Tverbakk, daglig leder i Elevera · 10. mai 2026
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-12 text-[var(--stone-700)] leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva gjør et SEO-byrå egentlig?</h2>
                <p>
                  SEO (søkemotoroptimalisering) er arbeidet med å gjøre nettsiden din mer synlig i Google. Et seriøst SEO-byrå jobber typisk med fire områder samtidig:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Teknisk SEO:</strong> hastighet, mobiltilpasning, indeksering, struktur og strukturerte data slik at Google kan lese siden riktig.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Innholds-SEO:</strong> sider og blogginnlegg som dekker spørsmålene kundene dine faktisk søker på.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Lokal SEO:</strong> Google Business Profile, lokale referanser og innhold som matcher «tjeneste + sted»-søk.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Lenkebygging:</strong> få andre relevante nettsteder til å lenke til deg, slik at Google ser deg som en autoritet.</span></li>
                </ul>
                <p className="mt-4">
                  Ulike byråer har ulik vekt på disse fire. For en lokal bedrift i Ålesund vil typisk lokal SEO og innhold være viktigst, mens en nettbutikk med nasjonalt nedslagsfelt har mer nytte av teknisk SEO og lenkebygging. For bransje-spesifikke vinklinger har vi en egen guide til <Link href="/blogg/lokal-seo-trafikkskole-alesund" className="underline">lokal SEO for trafikkskoler i Ålesund</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">6 ting som skiller et godt SEO-byrå fra et dårlig</h2>
                <p>
                  Det er stor variasjon i kvalitet blant byråer som tilbyr SEO. Disse seks tegnene skiller de seriøse fra resten:
                </p>

                <div className="mt-6 space-y-5">
                  <div>
                    <h3 className="font-semibold text-[var(--black)] mb-2">1. De forklarer hvordan suksess måles</h3>
                    <p>Et godt byrå viser deg fra dag én hvilke målepunkter de bruker (organisk trafikk, posisjon, klikk fra Google Business, henvendelser) og hvordan du selv kan logge inn og se de samme tallene i Google Search Console og Google Analytics. Hvis byrået unngår spørsmål om måling, er det et dårlig tegn.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[var(--black)] mb-2">2. De forklarer hva de faktisk gjør</h3>
                    <p>SEO er ikke magisk. Et seriøst byrå kan forklare hver enkelt aktivitet i klart språk, og koble den til et resultat. «Vi optimaliserer for Google» er ikke et svar. «Vi skriver om sidetitlene slik at de matcher hva folk faktisk søker på, og legger til strukturerte data slik at Google viser stjerne-rating» er et svar.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[var(--black)] mb-2">3. De har dokumenterte cases</h3>
                    <p>Be om konkrete eksempler: «vis meg en kunde dere har jobbet med, hvor lang tid det tok, og hvilke resultater dere oppnådde». Et byrå som har levert vil dele dette gjerne, gjerne med skjermbilder fra Search Console eller Analytics. Hvis de ikke kan vise noe, har de sannsynligvis ikke noe å vise.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[var(--black)] mb-2">4. De har lokal kunnskap (hvis du er lokal)</h3>
                    <p>For en bedrift i Ålesund er lokal SEO ofte det viktigste. Et byrå som forstår markedet på Sunnmøre, vet hvilke søk som faktisk har volum (og hvilke som er bortkastet), og kjenner til lokale samarbeidspartnere som kan gi deg verdifulle backlinks, har en stor fordel over et generisk Oslo-byrå.</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[var(--black)] mb-2">5. De er ærlige om tidshorisont</h3>
                    <p>SEO er en langtidsinvestering. De første forbedringene kommer etter 4–8 uker, men varige resultater tar typisk 3–6 måneder. Et byrå som lover «topplassering på 4 uker» lyver, eller bruker svarte hatter (teknikker som virker kortsiktig men kan få deg sparket ut av Google).</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[var(--black)] mb-2">6. Du eier arbeidet</h3>
                    <p>Når kontrakten avsluttes, skal alt arbeidet være ditt: innholdet, optimaliseringene, Google-kontoene, dataene. Vær forsiktig med byråer som «eier» Google Business-profilen din eller setter opp ting i sin egen konto. Du skal alltid ha full tilgang og full eierskap.</p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva bør et SEO-byrå koste i Ålesund?</h2>
                <p>
                  Prisene varierer mer enn de fleste tror. Her er reelle pristegn for SEO-tjenester i Ålesund og på Sunnmøre i 2026:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Engangs-audit (teknisk gjennomgang):</strong> 5 000–15 000 kr. Du får en rapport over hva som bør fikses, gjerne kombinert med en prioritert liste.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Google Business Profile-oppsett:</strong> 3 000–8 000 kr som engangsleveranse. Inkluderer kategorier, beskrivelser, bilder og første innlegg.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Månedlig SEO-leveranse, liten bedrift:</strong> 3 000–5 000 kr/mnd. Egnet for enkeltstående tjenestebedrifter med 1–5 ansatte.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Månedlig SEO-leveranse, mellomstor:</strong> 6 000–12 000 kr/mnd. Inkluderer typisk innholdsproduksjon, teknisk vedlikehold, lenkebygging og månedlig rapportering.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Stor SEO-satsing:</strong> 15 000 kr/mnd og oppover. Aktuelt for bedrifter med stort søkevolum, mange tjenester eller flere lokasjoner.</span></li>
                </ul>
                <p className="mt-4">
                  Hvis tilbudet ditt ligger under 2 000 kr/mnd, er sjansene store for at du får svært lite. SEO krever faktisk arbeidsinnsats, og det går ikke å levere noe meningsfylt under en viss timepris. Hvis tilbudet ligger over 20 000 kr/mnd uten en tydelig forklaring, betaler du sannsynligvis for mye.
                </p>
                <p className="mt-4">
                  Hos oss inngår <Link href="/tjenester/seo-alesund" className="underline">søkemotoroptimalisering for Ålesund-bedrifter</Link> i pakkene fra 18 900 kr/mnd, eller fra 3 000 kr/mnd som enkelttjeneste.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">5 røde flagg å se etter</h2>
                <p>Hvis byrået gjør noe av dette, gå videre:</p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Lover spesifikk plassering på Google.</strong> Ingen kan garantere posisjon nummer 1. Garantier av denne typen er enten en bløff eller en ansvarsfraskrivelse pakket inn i fagsjargong.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Tilbyr «massive lenkepakker».</strong> 1 000 backlinks for 2 000 kr betyr at lenkene kommer fra spam-sider. Det kan gi deg en straff fra Google, ikke høyere rangering.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Vil ikke vise konkrete resultater.</strong> «Vi har gjort dette i mange år» er ikke et svar. Be om navn på kunder, før- og etter-tall, og tilgang til Google Search Console-skjermbilder.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Bindingstid på 12+ måneder.</strong> Et seriøst byrå tør å levere så bra at du blir værende uten kontrakt. 3–6 måneder oppstart er greit, men lenger bindingstid bør gi deg pause.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Ingen månedlig rapport.</strong> Hvis du ikke får tall hver måned, vet du ikke om du får det du betaler for. Rapporten skal vise posisjon, klikk, visninger og henvendelser.</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">7 spørsmål du bør stille før du signerer</h2>
                <p>Bruk disse spørsmålene som sjekkliste i et tilbudsmøte:</p>
                <ol className="mt-4 space-y-3 list-decimal list-inside">
                  <li>Hvilke konkrete resultater har dere oppnådd for kunder som ligner min bedrift?</li>
                  <li>Hvor lang tid pleier det å ta før jeg ser bevegelse på Google?</li>
                  <li>Hvilke målepunkter rapporterer dere på, og hvor ofte?</li>
                  <li>Hva skjer med arbeidet hvis jeg avslutter samarbeidet?</li>
                  <li>Hvor mye tid bruker dere faktisk på min konto i måneden, og hvem gjør jobben?</li>
                  <li>Hvordan finner dere ut hvilke søk vi skal gå etter?</li>
                  <li>Kan jeg få tilgang til arbeidet underveis, eller går alt gjennom dere?</li>
                </ol>
                <p className="mt-4">
                  Et godt SEO-byrå svarer rett ut på alle sju. Et dårlig byrå snakker rundt grøten på minst tre.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Lokalt eller nasjonalt SEO-byrå?</h2>
                <p>
                  For en bedrift i Ålesund som leverer til lokale kunder (håndverkere, helse, restaurant, frisør, bygg, faghandel), er et lokalt byrå nesten alltid et bedre valg enn et stort Oslo- eller Bergen-byrå. Grunnene er enkle:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Et lokalt byrå kjenner søkemønsteret i området, hvilke ord folk faktisk bruker (Moa eller Spjelkavik kan slå Ålesund i visse bransjer).</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Lokale relasjoner gir lokale backlinks. Næringsforening, lokal-presse, samarbeidspartnere er lettere å nå med en lokal kontakt.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Du kan møtes fysisk for strategi-økter, ikke bare Teams.</span></li>
                </ul>
                <p className="mt-4">
                  Et nasjonalt byrå kan være riktig hvis du selger til hele landet, har et stort budsjett, eller jobber i en nisje hvor det ikke finnes lokal ekspertise. For ren <Link href="/tjenester/seo-alesund" className="underline">lokal SEO i Ålesund</Link> er fordelen sjelden stor nok til å rettferdiggjøre høyere timepris.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Slik kommer du i gang</h2>
                <p>
                  Tre steg for å finne riktig SEO-byrå. Før du går i gang, er det også nyttig å sjekke om du allerede gjør noen av <Link href="/blogg/seo-feil-bedrifter-alesund" className="underline">de vanligste SEO-feilene bedrifter i Ålesund gjør</Link>. Mange av dem kan du fikse på en ettermiddag, før du i det hele tatt henter inn et byrå.
                </p>
                <ol className="mt-4 space-y-3 list-decimal list-inside">
                  <li><strong className="text-[var(--black)]">Bestem målet.</strong> Vil du flere telefoner? Mer trafikk til en spesifikk tjeneste? Bedre konvertering? Et tydelig mål gjør det lettere for byrået å lage en konkret plan.</li>
                  <li><strong className="text-[var(--black)]">Hent inn 2–3 tilbud.</strong> Sammenlign hva som inngår, tidshorisont, pris og tilbakemeldinger fra tidligere kunder. Spør de samme spørsmålene til alle.</li>
                  <li><strong className="text-[var(--black)]">Start med en kort periode.</strong> Mange byråer (vi inkludert) tilbyr 3 måneder uten lang bindingstid. Du får tid til å se om kjemien stemmer og om resultatene begynner å materialisere seg.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-6">Vanlige spørsmål om SEO-byrå i Ålesund</h2>
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
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Om Elevera, lokalt SEO-byrå i Ålesund</h2>
                <p>
                  Elevera er et digitalbyrå i Ålesund som tilbyr <Link href="/tjenester/seo-alesund" className="underline">SEO-tjenester for bedrifter i Ålesund og på Sunnmøre</Link>, sammen med nettside, digital annonsering og innholdsproduksjon. Vi er ærlige om hva vi kan og ikke kan, og leverer månedlige rapporter du selv kan etterprøve.
                </p>
                <p className="mt-4">
                  Vi har jobbet med bedrifter innen trafikkskole, frisør, gårdsturisme og håndverk. Se gjerne prosjektene våre for konkrete eksempler.
                </p>
              </section>

            </div>

            <div className="mt-16 rounded-3xl border border-[var(--forest)]/20 bg-[var(--forest)]/06 p-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-[var(--black)]">Vil du vurdere SEO for din bedrift?</h3>
              <p className="mb-6 text-[var(--stone-700)]">
                Book et gratis 30-minutters møte. Vi ser på hva som rangerer for deg i dag, hva som kan flyttes, og gir deg et konkret tilbud uten forpliktelser.
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
