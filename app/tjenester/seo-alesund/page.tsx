import type { Metadata } from "next";
import HomeNav from "../../components/home/HomeNav";
import HomeFooter from "../../components/home/HomeFooter";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "SEO Ålesund · Søkemotoroptimalisering som gir kunder",
  description:
    "Lokalt SEO-byrå i Ålesund. Vi hjelper bedrifter på Sunnmøre å rangere høyere på Google og få flere henvendelser, uten å betale per klikk.",
  alternates: { canonical: "https://elevera.no/tjenester/seo-alesund" },
  openGraph: {
    title: "SEO Ålesund · Søkemotoroptimalisering som gir kunder",
    description:
      "Lokalt SEO-byrå i Ålesund. Vi hjelper bedrifter på Sunnmøre å rangere høyere på Google og få flere henvendelser, uten å betale per klikk.",
    url: "https://elevera.no/tjenester/seo-alesund",
  },
};

const faqs = [
  {
    q: "Hvor lang tid tar det å se resultater?",
    a: "De første forbedringene ser du etter 4–8 uker. Varige resultater, der du konsekvent rangerer på side 1, tar 3–6 måneder. Men i motsetning til annonser, forsvinner ikke trafikken når du pauser.",
  },
  {
    q: "Hva koster SEO i Ålesund?",
    a: "SEO inngår i pakkene våre fra 14 900 kr/mnd (Vekst). Trenger du bare SEO som enkelttjeneste, ligger en typisk månedsleveranse på 3 000–8 000 kr/mnd avhengig av omfang, konkurranse og hvor mye innhold som skal produseres. Vi gir alltid tilbud etter en gjennomgang av siden din.",
  },
  {
    q: "Kan dere garantere førsteplass på Google?",
    a: "Nei, og du bør være skeptisk til de som lover det. Google rangerer over 200 signaler, og posisjonene endrer seg. Det vi garanterer er ærlig arbeid med dokumenterte forbedringer du kan måle i Google Search Console hver måned.",
  },
  {
    q: "Hva er forskjellen på SEO og Google Ads?",
    a: "Google Ads gir synlighet med én gang, men du betaler for hvert klikk. SEO tar lengre tid, men trafikken er gratis når du først rangerer. De fleste kundene våre bruker begge: annonser for å komme raskt i gang, SEO for langsiktig vekst.",
  },
  {
    q: "Må vi lage ny nettside?",
    a: "Ikke nødvendigvis. Vi starter med en gjennomgang av siden du har. Noen ganger holder det med justeringer, andre ganger gir en ny nettside mye bedre resultater. Vi er ærlige om hva som trengs.",
  },
  {
    q: "Hva er lokal SEO?",
    a: "Det handler om å dukke opp når folk i nærheten søker, for eksempel «rørlegger Ålesund» eller «frisør Moa». Lokal SEO kombinerer optimalisering av nettsiden, Google Business-profilen og lokale referanser, slik at du vises både i søkeresultatene og i kartet.",
  },
  {
    q: "Hva er Google Business Profile, og hvor viktig er det?",
    a: "Google Business Profile (tidl. Google My Business) er den gratis bedriftsprofilen som dukker opp i kartet og i lokale søk. For bedrifter i Ålesund er den ofte det første og enkleste stedet å hente trafikk. Vi setter den opp, optimaliserer beskrivelser og sørger for jevnlige innlegg og bilder.",
  },
  {
    q: "Trenger jeg blogg for å rangere?",
    a: "Ikke alltid, men ofte. En blogg lar deg dekke spørsmål kundene faktisk søker på, som «hva koster en taktekker i Ålesund» eller «slik velger du tannlege». Det bygger autoritet hos Google og hjelper deg å rangere på flere søk enn bare bedriftsnavnet ditt.",
  },
  {
    q: "Hvor ofte måler dere resultater?",
    a: "Hver måned får du en rapport med posisjon, klikk, visninger og konvertering, hentet rett fra Google Search Console og Google Analytics. Vi går gjennom rapporten sammen og bestemmer neste steg ut fra hva tallene viser.",
  },
  {
    q: "Hva er forskjellen på lokal SEO i Ålesund og nasjonal SEO?",
    a: "Lokal SEO handler om å rangere på «tjeneste + sted»-søk (f.eks. «elektriker Spjelkavik»), og krever Google Business-profil, lokale referanser og innhold som nevner stedsnavn. Nasjonal SEO retter seg mot generelle søk uten geografi (f.eks. «beste regnskapsprogram») og er typisk tyngre å konkurrere på. De fleste lokale bedrifter har klart størst nytte av lokal SEO.",
  },
  {
    q: "Hva med konkurrentene mine i Ålesund?",
    a: "Vi starter alltid med en konkurrentanalyse: hvem rangerer på dine viktigste søk, hva gjør de bra, og hvor er det åpninger. Mange lokale konkurrenter har gjort lite eller ingenting med SEO, og det er ofte raskere å klatre forbi dem enn folk tror.",
  },
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "SEO Ålesund",
  serviceType: "Search Engine Optimization",
  description: "Søkemotoroptimalisering for bedrifter i Ålesund. Teknisk SEO, innholdsstrategi og lokal synlighet på Google.",
  provider: {
    "@type": "LocalBusiness",
    name: "Elevera",
    url: "https://elevera.no",
    telephone: "+4794974165",
    address: { "@type": "PostalAddress", addressLocality: "Ålesund", addressCountry: "NO" },
  },
  areaServed: { "@type": "City", name: "Ålesund" },
  url: "https://elevera.no/tjenester/seo-alesund",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://elevera.no/tjenester" },
    { "@type": "ListItem", position: 3, name: "SEO i Ålesund", item: "https://elevera.no/tjenester/seo-alesund" },
  ],
};

export default function SeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <HomeNav />
      <main>
        <ServicePageLayout
          badge="SEO · Ålesund"
          title="Søkemotoroptimalisering i"
          titleAccent="Ålesund"
          description="Bedrifter på Sunnmøre googler det du tilbyr, hver dag. Vi sørger for at det er din bedrift som dukker opp på Google, ikke konkurrentens."
          includedLabel="Tjenester"
          includedHeading="Hva vi tilbyr"
          includedSubtext="Alt som trengs for å klatre til toppen av Google."
          included={[
            "Teknisk gjennomgang, vi finner og fikser det som holder deg nede",
            "Søkeordanalyse, vi finner ordene kundene dine faktisk bruker",
            "Innhold som rangerer, blogginnlegg og sider Google elsker",
            "Lenkebygging, vi bygger autoriteten din hos Google",
            "Lokal SEO og Google Business, bli synlig i kartet",
            "Månedlig rapport, du ser nøyaktig hvor du rangerer",
            "Hastighetsoptimalisering, raskere side, bedre rangering",
            "Konkurrentanalyse, vi viser deg hva de gjør og hvordan du slår dem",
          ]}
          whyTitle="Hvorfor dukker konkurrentene opp før deg?"
          whyText={[
            "Når noen i Ålesund søker etter det du tilbyr og finner konkurrenten din istedenfor deg, da taper du en kunde du aldri visste om. Det skjer hver eneste dag.",
            "SEO fikser det. Og i motsetning til annonser, betaler du ikke per klikk. Når du først rangerer høyt, får du en jevn strøm av henvendelser, uten å øke budsjettet.",
          ]}
          stats={[
            { stat: "93%", label: "Av alle nettopplevelser starter med et Google-søk" },
            { stat: "75%", label: "Klikker aldri forbi første side" },
            { stat: "14.6%", label: "Konverterer fra organisk søk (vs. 1.7% fra annonser)" },
            { stat: "< 6 mnd", label: "Til du ser varige resultater" },
          ]}
          faqs={faqs}
          ctaHeading="Klar for å dukke opp på Google?"
          aiSummary="Elevera leverer søkemotoroptimalisering (SEO) for bedrifter i Ålesund og på Sunnmøre. Tjenesten dekker teknisk SEO, lokal SEO med Google Business Profile, innholdsstrategi, lenkebygging og månedlig rapportering. SEO inngår i pakkene fra 14 900 kr/mnd, eller fra 3 000 kr/mnd som enkelttjeneste. De fleste bedrifter ser varige resultater innen 3–6 måneder."
        >
          {/* Local context */}
          <section className="svc-section">
            <div className="wrap">
              <div className="svc-section-head">
                <div>
                  <span className="section-label">Lokalt</span>
                  <h2>SEO i Ålesund i praksis</h2>
                </div>
                <p className="lead">
                  Hva lokal søkemotoroptimalisering betyr for en bedrift i Ålesund eller på Sunnmøre.
                </p>
              </div>

              <div className="svc-local-grid">
                <div>
                  <h3>Områdene vi jobber i</h3>
                  <p>
                    Vi hjelper bedrifter med å bli synlige i lokale søk i hele Ålesund: Sentrum, Moa, Spjelkavik, Borgund, Hessa, Volsdalen, Ellingsøy og Hatlane. På Sunnmøre dekker vi blant annet Sula, Giske, Ørsta, Volda, Ulsteinvik og Hareid.
                  </p>
                </div>
                <div>
                  <h3>Bransjene vi ser sterkest effekt for</h3>
                  <p>
                    Lokal SEO virker best for bedrifter som leverer tjenester eller produkter til folk i nærheten. Vi har god erfaring med håndverkere (rørlegger, elektriker, taktekker), helse (tannlege, kiropraktor), restaurant og servering, frisør og skjønnhet, eiendom, bygg og lokale faghandler.
                  </p>
                </div>
                <div>
                  <h3>Lokal vs. nasjonal SEO</h3>
                  <p>
                    Lokal SEO handler om å rangere på «tjeneste + sted»-søk, som «rørlegger Ålesund» eller «frisør Spjelkavik». Det krever en sterk Google Business-profil, lokale referanser og innhold som kjenner igjen stedsnavn. Nasjonal SEO er typisk tyngre konkurranse uten geografi, og passer bedre for nettbutikker eller programvare.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 5-step guide */}
          <section className="svc-section">
            <div className="wrap">
              <div className="svc-section-head">
                <div>
                  <span className="section-label">Slik gjør vi det</span>
                  <h2>5 steg til første side i Ålesund</h2>
                </div>
                <p className="lead">
                  Slik bygger vi synlighet for en lokal bedrift, fra null til topp 5 på Google.
                </p>
              </div>

              <ol className="svc-steps">
                <li>
                  <span className="svc-step-num" aria-hidden="true">1</span>
                  <div>
                    <h3>Google Business Profile først</h3>
                    <p>
                      Det enkleste, raskeste vinneren for lokale bedrifter. Vi setter opp eller optimaliserer profilen din med riktige kategorier, beskrivelser, åpningstider, bilder og innlegg. Mange ser bevegelse i kartsøk innen 2–4 uker.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="svc-step-num" aria-hidden="true">2</span>
                  <div>
                    <h3>Søkeordanalyse for ditt område</h3>
                    <p>
                      Vi finner ut hvor mange som søker etter det du tilbyr i Ålesund og omegn, hvilke ord de bruker, og hvor sterke konkurrentene dine er. Du får en konkret liste med 10–30 søk å gå etter, og vi prioriterer de med best forhold mellom volum og konkurranse.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="svc-step-num" aria-hidden="true">3</span>
                  <div>
                    <h3>Teknisk og strukturell SEO</h3>
                    <p>
                      Hastighet, mobiltilpasning, intern struktur, indeksering og strukturerte data. Vi fikser feilene som holder siden din nede, og sørger for at Google forstår hva siden handler om.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="svc-step-num" aria-hidden="true">4</span>
                  <div>
                    <h3>Lokalt innhold og lenker</h3>
                    <p>
                      Sider og blogginnlegg som dekker spørsmålene kundene faktisk søker på, kombinert med lenker fra lokale aktører som næringsforening, samarbeidspartnere og bransje-sider. Det er dette som flytter deg fra side 2 til topp 5.
                    </p>
                  </div>
                </li>
                <li>
                  <span className="svc-step-num" aria-hidden="true">5</span>
                  <div>
                    <h3>Måling og iterasjon</h3>
                    <p>
                      Hver måned ser vi på posisjon, klikk og henvendelser i Google Search Console og Analytics. Det som virker doser vi opp, det som ikke virker justerer vi. SEO er en prosess, ikke en engangs-leveranse.
                    </p>
                  </div>
                </li>
              </ol>
            </div>
          </section>
        </ServicePageLayout>
        </main>
      <HomeFooter />
    </>
  );
}
