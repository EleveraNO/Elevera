import type { Metadata } from "next";
import Link from "next/link";
import HomeNav from "../../components/home/HomeNav";
import "../../components/blog.css";
import HomeFooter from "../../components/home/HomeFooter";

export const metadata: Metadata = {
  title: "Markedsføringsbyrå i Ålesund – Hva bør du se etter (2026) | Elevera",
  description:
    "Leter du etter et markedsføringsbyrå i Ålesund? Her er hva du bør se etter, hva det koster, og hva som skiller et godt byrå fra resten.",
  alternates: { canonical: "https://elevera.no/blogg/markedsforingsbyraa-alesund" },
  openGraph: {
    title: "Markedsføringsbyrå i Ålesund – Hva bør du se etter (2026)",
    description:
      "Leter du etter et markedsføringsbyrå i Ålesund? Her er hva du bør se etter, hva det koster, og hva som skiller et godt byrå fra resten.",
    url: "https://elevera.no/blogg/markedsforingsbyraa-alesund",
    type: "article",
  },
};

const faqs = [
  {
    q: "Hva koster det å bruke et markedsføringsbyrå i Ålesund?",
    a: "Prisen varierer etter hva du trenger. En nettside koster typisk mellom 8 000 og 30 000 kr. Digital annonsering (Facebook/Google) koster gjerne 3 000–8 000 kr/mnd i administrasjonshonorar, i tillegg til annonsebudsjettet. Foto- og videoproduksjon starter fra 4 000–5 000 kr per produksjonsdag. De fleste lokale byråer i Ålesund tilbyr pakkeløsninger.",
  },
  {
    q: "Hva er et digitalbyrå?",
    a: "Et digitalbyrå er en bedrift som hjelper andre bedrifter å vokse på nett. Tjenestene inkluderer typisk nettside, digital annonsering (Facebook Ads, Google Ads), foto og video, og søkemotoroptimalisering (SEO). Et lokalt digitalbyrå i Ålesund har i tillegg kunnskap om det lokale markedet og kan hjelpe med markedsføring rettet mot kunder i Ålesund og på Sunnmøre.",
  },
  {
    q: "Trenger jeg et lokalt byrå, eller kan jeg bruke et hvilket som helst?",
    a: "For digital annonsering og SEO spiller det liten rolle. Men for foto, video og dronevideo er et lokalt byrå i Ålesund praktisk å foretrekke – de kjenner områdene, er tilgjengelige for produksjonsdager, og forstår det lokale markedet. Et lokalt byrå er også lettere å holde kontinuerlig kontakt med.",
  },
  {
    q: "Hva er forskjellen på annonsering og SEO?",
    a: "Annonsering (betalt markedsføring) gir resultater raskt – innen dager – men koster penger løpende og stopper å virke når du slutter å betale. SEO (søkemotoroptimalisering) tar lenger tid (3–6 måneder) men gir langsiktig, organisk trafikk uten løpende annonsekostnader. De fleste bedrifter i Ålesund tjener på å kombinere begge.",
  },
  {
    q: "Hva bør jeg se etter når jeg velger markedsføringsbyrå?",
    a: "Se etter dokumenterte resultater (cases og kundehistorier), tydelig kommunikasjon om hva som er inkludert og hva det koster, og et byrå som spesialiserer seg på det du faktisk trenger. Vær forsiktig med byråer som lover spesifikke plasseringer i Google eller garantert ROAS – ingen kan garantere dette.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Markedsføringsbyrå i Ålesund – Hva bør du se etter (2026)",
  description:
    "Leter du etter et markedsføringsbyrå i Ålesund? Her er hva du bør se etter, hva det koster, og hva som skiller et godt byrå fra resten.",
  author: {
    "@type": "Person",
    name: "Marius Teigen Tverbakk",
    jobTitle: "Daglig leder",
    worksFor: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  },
  publisher: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  datePublished: "2026-03-24",
  dateModified: "2026-03-24",
  url: "https://elevera.no/blogg/markedsforingsbyraa-alesund",
  about: [
    { "@type": "Thing", name: "Markedsføring" },
    { "@type": "Thing", name: "Digitalbyrå" },
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
    { "@type": "ListItem", position: 3, name: "Markedsføringsbyrå i Ålesund", item: "https://elevera.no/blogg/markedsforingsbyraa-alesund" },
  ],
};

export default function MarkedsforingsByraaPage() {
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
                  Markedsføring
                </span>
                <span className="text-xs text-[var(--stone-500)]">24. mars 2026</span>
                <span className="text-xs text-[var(--stone-500)]">8 min lesetid</span>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-[var(--black)] sm:text-4xl md:text-5xl">
                Markedsføringsbyrå i Ålesund – hva bør du se etter?
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--stone-700)]">
                Et godt markedsføringsbyrå i Ålesund hjelper bedriften din å bli synlig på nett, gjennom nettside, annonsering, foto og video. Her er hva du bør vite før du velger.
              </p>
              <p className="mt-3 text-sm text-[var(--stone-500)]">
                Skrevet av Marius Teigen Tverbakk, daglig leder i Elevera · 24. mars 2026
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-12 text-[var(--stone-700)] leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva gjør et markedsføringsbyrå?</h2>
                <p>
                  Et markedsføringsbyrå, også kalt digitalbyrå, er en bedrift som hjelper andre bedrifter å nå ut til kunder på nett. De vanligste tjenestene er nettside, digital annonsering (Facebook Ads og Google Ads), foto og video, og søkemotoroptimalisering (SEO).
                </p>
                <p className="mt-4">
                  For bedrifter i Ålesund og på Sunnmøre betyr det å ha et lokalt byrå tilgang til noen som kjenner markedet, kan stille opp for produksjonsdager, og forstår hva som treffer kunder i regionen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Tjenester du kan forvente fra et byrå i Ålesund</h2>
                <p>De fleste lokale digitalbyrå tilbyr en eller flere av disse tjenestene:</p>
                <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--stone-300)]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--stone-300)] bg-[var(--stone-50)]">
                        <th className="px-5 py-3 text-left font-semibold text-[var(--black)]">Tjeneste</th>
                        <th className="px-5 py-3 text-left font-semibold text-[var(--black)]">Hva det innebærer</th>
                        <th className="px-5 py-3 text-left font-semibold text-[var(--black)]">Typisk pris</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {[
                        { tjeneste: "Nettside", hva: "Design, utvikling og lansering av bedriftsnettside", pris: "8 000–30 000 kr" },
                        { tjeneste: "Facebook & Instagram Ads", hva: "Oppsett og administrasjon av betalt annonsering", pris: "3 000–8 000 kr/mnd" },
                        { tjeneste: "Google Ads", hva: "Søkeannonser som vises øverst i Google", pris: "3 000–6 000 kr/mnd" },
                        { tjeneste: "Foto & video", hva: "Profesjonelle bilder og film for bedriften", pris: "4 000–12 000 kr/dag" },
                        { tjeneste: "Dronevideo", hva: "Luftopptak av eiendommer, anlegg eller omgivelser", pris: "3 000–8 000 kr" },
                        { tjeneste: "SEO", hva: "Optimalisering for organiske søkeresultater i Google", pris: "3 000–10 000 kr/mnd" },
                      ].map((row, i) => (
                        <tr key={i} className="text-[var(--stone-700)]">
                          <td className="px-5 py-3 font-medium text-[var(--stone-700)]">{row.tjeneste}</td>
                          <td className="px-5 py-3">{row.hva}</td>
                          <td className="px-5 py-3 text-[var(--forest)]">{row.pris}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="mt-4 text-xs text-[var(--stone-600)]">
                  Prisene er veiledende for norske digitalbyrå i 2026. Prisen avhenger av omfang og kompleksitet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva skiller et godt byrå fra et dårlig?</h2>
                <p>
                  Det er enkelt å love resultater. Det som faktisk teller er om de kan vise til dokumenterte resultater fra tidligere kunder, ikke bare flotte tall, men konkrete eksempler med kontekst.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Se etter", items: ["Kundehistorier med faktiske resultater", "Tydelig prismodell uten skjulte kostnader", "Spesialisering på det du faktisk trenger", "Jevnlig rapportering og kommunikasjon"] },
                    { label: "Vær forsiktig med", items: ["Garantert #1 i Google (ingen kan love det)", "Pakker uten tydelig spesifikasjon", "Byråer som ikke kan vise til referanser", "Kontrakter med lang bindingstid uten resultatkrav"] },
                  ].map((col, i) => (
                    <div key={i} className="rounded-2xl border border-[var(--stone-300)] bg-[var(--stone-50)] p-5">
                      <div className="mb-3 text-sm font-semibold text-[var(--black)]">{col.label}</div>
                      <ul className="space-y-2">
                        {col.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-sm text-[var(--stone-700)]">
                            <span className="mt-0.5 text-[var(--forest)]">{i === 0 ? "✓" : "✗"}</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Annonsering eller SEO – hva lønner seg?</h2>
                <p>
                  Betalt annonsering (Facebook Ads, Google Ads) gir resultater raskt, typisk innen 1–2 uker, men koster penger løpende og stopper å virke når du slutter å betale. Ifølge Google opplever annonsører i gjennomsnitt 2 kr i omsetning per krone brukt på Google Ads.
                </p>
                <p className="mt-4">
                  SEO tar lengre tid (3–6 måneder for å se resultater) men gir langsiktig synlighet som ikke krever løpende annonseutgifter. For lokale bedrifter i Ålesund er Google Business Profile (tidl. Google My Business) det første stedet å optimalisere, det er gratis og svært effektivt for lokale søk.
                </p>
                <p className="mt-4">
                  De fleste bedrifter i Ålesund og på Sunnmøre tjener på å kombinere begge: annonsering for å komme i gang raskt, og SEO for langsiktig vekst.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Foto og video – hvorfor det er viktigere enn noen gang</h2>
                <p>
                  Ifølge HubSpot (2024) konverterer sider med profesjonelle bilder 94 % bedre enn sider med kun tekst. Video øker sjansen for at besøkende tar kontakt med 80 %. For lokale bedrifter i Ålesund er profesjonelt bildemateriale avgjørende for å skille seg ut, spesielt i bransjer som reiseliv, håndverk, restaurant og faghandel.
                </p>
                <p className="mt-4">
                  Dronevideo er særlig effektivt for bedrifter i Ålesund, der de spektakulære omgivelsene, fjord, åser og by, gir et unikt visuelt uttrykk som ikke kan gjenskapes fra bakkenivå.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-6">Vanlige spørsmål om markedsføringsbyrå i Ålesund</h2>
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
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Om Elevera – lokalt digitalbyrå i Ålesund</h2>
                <p>
                  Elevera er et digitalbyrå i Ålesund som tilbyr nettside, digital annonsering, foto og video, og dronevideo til bedrifter i Ålesund og på Sunnmøre. Vi spesialiserer oss på å hjelpe lokale bedrifter å bli synlige og konvertere besøkende til kunder, med enkle pakkepriser og tydelig kommunikasjon.
                </p>
                <p className="mt-4">
                  Vi har jobbet med bedrifter innen trafikkskole, matproduksjon, gårdsturisme og håndverk. Se gjerne prosjektene våre for eksempler på hva vi har levert.
                </p>
              </section>

            </div>

            <div className="mt-16 rounded-3xl border border-[var(--forest)]/20 bg-[var(--forest)]/06 p-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-[var(--black)]">Vil du vite hva Elevera kan gjøre for din bedrift?</h3>
              <p className="mb-6 text-[var(--stone-700)]">
                Book et gratis 30-minutters møte. Vi ser på hva din bedrift trenger og gir deg et konkret tilbud uten forpliktelser.
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
                  href="/tjenester/annonsering-alesund"
                  className="btn btn-ghost"
                >
                  Se annonsering-tjenesten
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
