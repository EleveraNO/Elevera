import type { Metadata } from "next";
import Link from "next/link";
import HomeNav from "../../components/home/HomeNav";
import "../../components/blog.css";
import HomeFooter from "../../components/home/HomeFooter";

export const metadata: Metadata = {
  title: "Hva koster dronevideo? Priser og hva du faktisk får (2026) | Elevera",
  description:
    "Dronevideo priser varierer mye. Her er hva du faktisk betaler for, hva som påvirker prisen, og hva du bør spørre om før du bestiller.",
  alternates: { canonical: "https://elevera.no/blogg/dronevideo-pris" },
  openGraph: {
    title: "Hva koster dronevideo? Priser og hva du faktisk får (2026)",
    description:
      "Dronevideo priser varierer mye. Her er hva du faktisk betaler for, hva som påvirker prisen, og hva du bør spørre om før du bestiller.",
    url: "https://elevera.no/blogg/dronevideo-pris",
    type: "article",
  },
};

const faqs = [
  {
    q: "Hva koster dronevideo i Norge?",
    a: "En halvdag med droneopptak (2–4 timer) koster typisk 2 500–5 000 kr. En hel produksjonsdag med opptak, redigering og ferdig video koster 5 000–12 000 kr avhengig av kompleksitet og antall leveranser. Enkle oppdrag som én redigeringsfri råfil kan komme ned i 1 500–2 000 kr.",
  },
  {
    q: "Trenger man tillatelse for å fly drone i Norge?",
    a: "Ja. I Norge er det krav om at piloter som flyr drone kommersielt (mot betaling) må ha godkjent dronepilotsertifikat. I tillegg gjelder regler fra Luftfartstilsynet om hvor og på hvilke betingelser man kan fly. Seriøse leverandører er alltid sertifisert og forsikret.",
  },
  {
    q: "Hva påvirker prisen på dronevideo?",
    a: "De viktigste faktorene er: antall timer opptak, antall redigerte videoer eller stillbilder, reiseavstand til opptakssted, kompleksitet (krevende vær, bemannede luftromsoner, nattopptak) og om du trenger musikk, tekst og fargekorrigering i editeringen.",
  },
  {
    q: "Hva brukes dronevideo til?",
    a: "Vanlige bruksområder er eiendomsmarkedsføring, reklamefilm for bedrifter, dokumentasjon av anleggsprosjekter, reiselivs- og destinasjonsinnhold, arrangementsdokumentasjon og innhold til sosiale medier. Dronevideo er spesielt effektivt når man vil vise omgivelser, størrelse eller beliggenhet.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hva koster dronevideo? Priser og hva du faktisk får (2026)",
  description:
    "Dronevideo priser varierer mye. Her er hva du faktisk betaler for, hva som påvirker prisen, og hva du bør spørre om før du bestiller.",
  author: {
    "@type": "Person",
    name: "Marius Teigen Tverbakk",
    jobTitle: "Daglig leder",
    worksFor: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  },
  publisher: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  datePublished: "2026-03-18",
  dateModified: "2026-03-18",
  url: "https://elevera.no/blogg/dronevideo-pris",
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
    { "@type": "ListItem", position: 3, name: "Hva koster dronevideo", item: "https://elevera.no/blogg/dronevideo-pris" },
  ],
};

export default function DroneVideoPrisPage() {
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
                  Dronevideo
                </span>
                <span className="text-xs text-[var(--stone-500)]">18. mars 2026</span>
                <span className="text-xs text-[var(--stone-500)]">7 min lesetid</span>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-[var(--black)] sm:text-4xl md:text-5xl">
                Hva koster dronevideo? Her er prisene, og hva du faktisk betaler for
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--stone-700)]">
                Dronevideo er et av de spørsmålene vi oftest får. Prisen varierer veldig, og det er ikke alltid lett å forstå hvorfor. Jeg skal forsøke å gi deg et ærlig bilde.
              </p>
              <p className="mt-3 text-sm text-[var(--stone-500)]">
                Skrevet av Marius Teigen Tverbakk, daglig leder i Elevera · 18. mars 2026
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-12 text-[var(--stone-700)] leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva koster dronevideo i 2026?</h2>
                <p>
                  La oss starte med det konkrete. En halvdag med droneopptak, si to til fire timer, koster typisk mellom 2 500 og 5 000 kr hos norske leverandører. Trenger du en hel produksjonsdag med opptak og ferdig redigert video, er du oppe i 5 000 til 12 000 kr.
                </p>
                <p className="mt-4">
                  Det er stor forskjell, og årsaken er like enkel som den er viktig: det er redigeringen som tar tid. Rå droneopptak er et par timers jobb. En ferdig film med klipping, fargekorrigering, musikk og undertekster kan ta to til tre ganger så lang tid etterpå.
                </p>
                <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--stone-300)]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--stone-300)] bg-[var(--stone-50)]">
                        <th className="px-5 py-3 text-left font-semibold text-[var(--black)]">Type oppdrag</th>
                        <th className="px-5 py-3 text-left font-semibold text-[var(--black)]">Hva du får</th>
                        <th className="px-5 py-3 text-left font-semibold text-[var(--black)]">Typisk pris</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {[
                        { type: "Enkelt opptak", hva: "Råfiler uten redigering, 1–2 timer", pris: "1 500–2 500 kr" },
                        { type: "Halvdagsproduksjon", hva: "Opptak + enkel klipping, 2–4 timer", pris: "2 500–5 000 kr" },
                        { type: "Heldagsproduksjon", hva: "Opptak + ferdig redigert video", pris: "5 000–9 000 kr" },
                        { type: "Full produksjon", hva: "Manus, opptak, redigering, musikk, grafikk", pris: "9 000–15 000 kr" },
                      ].map((row, i) => (
                        <tr key={i} className="text-[var(--stone-700)]">
                          <td className="px-5 py-3 font-medium text-[var(--stone-700)]">{row.type}</td>
                          <td className="px-5 py-3">{row.hva}</td>
                          <td className="px-5 py-3 text-[var(--forest)]">{row.pris}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva du faktisk betaler for</h2>
                <p>
                  Dronen i seg selv er ikke det dyreste. En god drone koster 15 000–30 000 kr, men det er ikke utstyret som definerer prisen, det er kompetansen bak. En sertifisert pilot med øye for komposisjon og lys, som vet hvordan han skal fortelle noe visuelt fra lufta, er en annen vare enn noen som bare sender opp en drone og trykker på record.
                </p>
                <p className="mt-4">
                  I tillegg er det verdt å merke seg at kommersielle droneopptak i Norge krever godkjent pilotsertifikat fra Luftfartstilsynet. Det er ikke en formalitet, det er et krav. Uforsikrete og usertifiserte piloter er billigere, men de kan ikke lovlig ta betalt for arbeidet, og du som oppdragsgiver kan i verste fall bli holdt ansvarlig.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Ålesund er perfekt for dronevideo</h2>
                <p>
                  Jeg sier ikke dette bare fordi vi holder til her. Ålesund og Sunnmøre er objektivt sett blant de mest fotogene stedene i landet for luftopptak. Du har fjord, øyer, åser og by i nær kombinasjon, og lyset her er noe annet enn i flatbygdene.
                </p>
                <p className="mt-4">
                  Vi har gjort dronevideo for alt fra gårdsbruk i Kjerringøy til bedrifter i Ålesund sentrum. Felles for dem er at omgivelsene løfter innholdet på en måte som er umulig å gjenskape fra bakken. En bedrift som er fin på bakkenivå blir imponerende fra lufta, spesielt her på Vestlandet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Når er dronevideo verdt det, og når er det ikke det?</h2>
                <p>
                  Dronevideo er ikke svaret på alt. For en frisørsalong midt i sentrum er det trolig ikke behovet, da er det teamet og atmosfæren innendørs som selger. Men for en eiendom, et anlegg, et hotell, en gård, et bygg under oppføring eller en bedrift med flott beliggenhet er dronevideo nesten alltid verdt investeringen.
                </p>
                <p className="mt-4">
                  Spør deg selv: er det noe ved det jeg selger som ser bedre ut fra oven, eller i sammenheng med omgivelsene rundt? Hvis svaret er ja, er dronevideo sannsynligvis riktig.
                </p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {[
                    {
                      label: "Godt egnet for dronevideo",
                      items: ["Eiendom og hytter", "Hotell og overnatting", "Gård og natur", "Anleggsprosjekter", "Destinasjoner og reiseliv", "Store bedriftsbygg"],
                    },
                    {
                      label: "Sjelden nødvendig",
                      items: ["Innendørs butikk eller kontor", "Personlig tjenesteyting", "Rene produktvideoer", "Testimonials og intervjuer"],
                    },
                  ].map((col, i) => (
                    <div key={i} className="rounded-2xl border border-[var(--stone-300)] bg-[var(--stone-50)] p-5">
                      <div className="mb-3 text-sm font-semibold text-[var(--black)]">{col.label}</div>
                      <ul className="space-y-1.5">
                        {col.items.map((item, j) => (
                          <li key={j} className="flex items-center gap-2 text-sm text-[var(--stone-700)]">
                            <span className="text-[var(--forest)]">{i === 0 ? "✓" : "–"}</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva du bør spørre om før du bestiller</h2>
                <p>Ikke alle dronevideoleverandører er like åpne om hva som er inkludert. Her er spørsmålene som avslører om de vet hva de holder på med:</p>
                <ul className="mt-4 space-y-3">
                  {[
                    "Er du sertifisert pilot og er oppdraget forsikret?",
                    "Hva er inkludert, bare opptak, eller ferdig redigert video?",
                    "Hvor mange ferdigklipte videoer eller bilder leverer du?",
                    "Hva skjer hvis det er dårlig vær på opptaksdagen?",
                    "I hvilket format leverer du materialet?",
                  ].map((q, i) => (
                    <li key={i} className="flex items-start gap-3 text-[var(--stone-700)]">
                      <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-[var(--forest)]/40 text-xs text-[var(--forest)]">{i + 1}</span>
                      {q}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-6">Vanlige spørsmål om dronevideo</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="rounded-2xl border border-[var(--stone-300)] bg-[var(--stone-50)] px-6 py-5">
                      <h3 className="mb-2 font-semibold text-[var(--black)]">{faq.q}</h3>
                      <p className="text-sm leading-relaxed text-[var(--stone-600)]">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            <div className="mt-16 rounded-3xl border border-[var(--forest)]/20 bg-[var(--forest)]/06 p-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-[var(--black)]">Vil du ha dronevideo til bedriften din?</h3>
              <p className="mb-6 text-[var(--stone-700)]">
                Vi tar dronevideo i Ålesund og på Sunnmøre. Book et gratis møte, så ser vi på hva som passer for deg.
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
                  href="/tjenester/dronevideo-alesund"
                  className="btn btn-ghost"
                >
                  Se dronevideo-tjenesten
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
