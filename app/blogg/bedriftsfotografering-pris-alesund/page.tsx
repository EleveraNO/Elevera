import type { Metadata } from "next";
import Link from "next/link";
import HomeNav from "../../components/home/HomeNav";
import "../../components/blog.css";
import HomeFooter from "../../components/home/HomeFooter";

export const metadata: Metadata = {
  title: "Bedriftsfotografering i Ålesund: Hva koster det? | Elevera",
  description:
    "Hva koster bedriftsfotografering i Ålesund, hva er inkludert, og hvilke bilder trenger du til nettside, LinkedIn, Google Business og annonser? Praktisk prisguide.",
  alternates: { canonical: "https://elevera.no/blogg/bedriftsfotografering-pris-alesund" },
  openGraph: {
    title: "Bedriftsfotografering i Ålesund: Hva koster det?",
    description:
      "Prisnivåer for bedriftsfotografering i Ålesund, og hvilke bilder du faktisk trenger til de digitale flatene dine.",
    url: "https://elevera.no/blogg/bedriftsfotografering-pris-alesund",
    type: "article",
  },
};

const faqs = [
  {
    q: "Hva koster bedriftsfotografering i Ålesund?",
    a: "En kort kom i gang-økt ligger typisk på 5 000–9 000 kr. En halvdag med portretter og noen miljøbilder ligger på 7 000–13 000 kr, og en heldag med full dekning av flere ansatte og lokasjoner på 13 000–22 000 kr. Ved mange ansattportretter brukes ofte en pakkepris per person.",
  },
  {
    q: "Hva er inkludert i prisen?",
    a: "Som regel opptak, et avtalt antall ferdig redigerte bilder, og bruksrett til egne digitale flater. Be om å få spesifisert hvor mange bilder du får, hvor mye retusj som inngår, og om du kan bruke bildene fritt i annonser og på sosiale medier.",
  },
  {
    q: "Hvor mange bilder trenger en vanlig bedrift?",
    a: "De fleste klarer seg lenge med et portrett av hver ansatt, 5–10 miljøbilder fra arbeidshverdagen, og noen få bilder av lokaler eller produkter. Det dekker nettside, LinkedIn, Google Business og de fleste annonser.",
  },
  {
    q: "Bør jeg bruke en frittstående fotograf eller et byrå?",
    a: "En frittstående fotograf er ofte rimeligst hvis du bare trenger bilder. Et digitalbyrå med fotograf koster gjerne litt mer, men sørger for at bildene faktisk passer der de skal brukes, på nettside, i annonser og på sosiale medier.",
  },
  {
    q: "Hvor lenge kan jeg bruke bildene?",
    a: "Det avhenger av avtalen om bruksrett. Avklar alltid om du eier bildene eller har tidsbegrenset lisens, og om bruken er begrenset til visse flater. For en bedrift er en bred, varig bruksrett som regel verdt litt høyere pris.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Bedriftsfotografering i Ålesund: Hva koster det?",
  description:
    "Prisnivåer for bedriftsfotografering i Ålesund, og hvilke bilder du faktisk trenger til de digitale flatene dine.",
  author: {
    "@type": "Person",
    name: "Marius Teigen Tverbakk",
    jobTitle: "Daglig leder",
    worksFor: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  },
  publisher: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  datePublished: "2026-05-16",
  dateModified: "2026-05-16",
  url: "https://elevera.no/blogg/bedriftsfotografering-pris-alesund",
  about: [
    { "@type": "Thing", name: "Bedriftsfotografering" },
    { "@type": "Thing", name: "Profesjonelle bilder" },
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
    { "@type": "ListItem", position: 3, name: "Bedriftsfotografering i Ålesund: Hva koster det", item: "https://elevera.no/blogg/bedriftsfotografering-pris-alesund" },
  ],
};

export default function BedriftsfotograferingPrisAlesundPage() {
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
                  Foto
                </span>
                <span className="text-xs text-[var(--stone-500)]">16. mai 2026</span>
                <span className="text-xs text-[var(--stone-500)]">8 min lesetid</span>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-[var(--black)] sm:text-4xl md:text-5xl">
                Bedriftsfotografering i Ålesund: Hva koster det, og hva bruker du bildene til?
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--stone-700)]">
                Bildene dine er ofte det første en kunde ser, på nettsiden, på LinkedIn og i Google. Likevel er det få som vet hva bedriftsfoto koster, eller hva de egentlig trenger. Her er prisene, og en enkel oversikt over hvilke bilder du faktisk bør bestille.
              </p>
              <p className="mt-3 text-sm text-[var(--stone-500)]">
                Skrevet av Marius Teigen Tverbakk, daglig leder i Elevera · 16. mai 2026
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-12 text-[var(--stone-700)] leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hvorfor bildene betyr mer enn du tror</h2>
                <p>
                  En kunde danner seg et inntrykk av bedriften på sekunder. Skarpe, ekte bilder av folka og lokalene signaliserer at dere er seriøse. Slitne mobilbilder eller gratis arkivbilder gjør det motsatte, uansett hvor god tjenesten egentlig er. Vi har skrevet mer om <Link href="/blogg/profesjonelle-bilder-bedrift" className="underline">hvorfor bedriften din trenger profesjonelle bilder</Link>. Dette innlegget handler om hva det koster og hva du bør bestille.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva er inkludert i en bedriftsfotografering?</h2>
                <p>
                  En typisk fotografering for bedrift dekker noen eller alle av disse:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Ansattportretter:</strong> like, profesjonelle bilder av alle, til nettside, LinkedIn og e-postsignatur.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Miljøbilder:</strong> folk i arbeid, som viser hvordan dere faktisk jobber.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Lokasjonsbilder:</strong> lokaler, butikk eller verksted, til Google Business og nettside.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Produktbilder:</strong> det dere selger, vist rent og tydelig.</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva koster bedriftsfotografering i Ålesund?</h2>
                <p>
                  Dette er reelle prisnivåer i Ålesund og på Sunnmøre i 2026:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Kom i gang-økt:</strong> 5 000–9 000 kr. Kort økt, noen portretter og et utvalg miljøbilder.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Halvdag:</strong> 7 000–13 000 kr. Portretter av flere ansatte pluss miljøbilder fra arbeidshverdagen.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Heldag:</strong> 13 000–22 000 kr. Full dekning av mange ansatte, flere lokasjoner og produkter.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Ansattportretter i serie:</strong> ofte pakkepris per person ved mange ansatte, lavere stykkpris jo flere.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Produktfoto:</strong> fra noen hundre kroner per bilde, eller pakkepris for mange produkter.</span></li>
                </ul>
                <p className="mt-4">
                  Det som flytter prisen mest er antall personer, antall lokasjoner, hvor mye retusj som inngår, og hvor bred bruksrett du får. Hastelevering og behov for sminke eller stylist kommer som tillegg.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hvilke bilder trenger du, og hvor?</h2>
                <p>
                  Tenk på hvor bildene skal brukes før du bestiller. Da unngår du å betale for bilder du ikke får brukt:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Nettside:</strong> ett sterkt forsidebilde, portretter og miljøbilder. Bildene bør passe layouten på <Link href="/tjenester/nettside-alesund" className="underline">nettsiden</Link>, både stående og liggende.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">LinkedIn:</strong> portretter med lik stil, og noen bilder fra arbeidshverdagen til innlegg.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Google Business:</strong> bilder av lokaler, skilt og folk. Dette er ofte det første nye kunder ser.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Annonser:</strong> rene bilder med plass til tekst, gjerne i flere format. Les mer om <Link href="/tjenester/annonsering-alesund" className="underline">annonsering i Ålesund</Link>.</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Frittstående fotograf eller digitalbyrå med fotograf?</h2>
                <p>
                  Trenger du bare bilder, er en frittstående fotograf ofte rimeligst, og det finnes flere dyktige i Ålesund. Forskjellen med et digitalbyrå er at bildene blir bestilt ut fra hvor de skal brukes. Vi vet hvilke format nettsiden trenger, hva som fungerer i en annonse, og hvilke bilder Google Business faktisk belønner. Da blir bildene en del av markedsføringen, ikke bare en fin mappe på en harddisk.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Slik gjør du bildene klare til bruk</h2>
                <p>
                  Når bildene er levert, er det tre ting du bør sjekke:
                </p>
                <ol className="mt-4 space-y-3 list-decimal list-inside">
                  <li><strong className="text-[var(--black)]">Format og størrelse.</strong> Be om bildene i både stående og liggende, og i en nettvennlig størrelse så de ikke gjør siden treg.</li>
                  <li><strong className="text-[var(--black)]">Filnavn.</strong> Beskrivende filnavn hjelper på SEO. Et bilde som heter «rorlegger-alesund.jpg» sier mer til Google enn «IMG_4821.jpg».</li>
                  <li><strong className="text-[var(--black)]">Bruksrett.</strong> Få skriftlig hva du kan bruke bildene til, og hvor lenge.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Slik ser en fotodag ut hos Elevera</h2>
                <p>
                  Vi avklarer først hvor bildene skal brukes og hvor mange du trenger, så du betaler for det du faktisk får bruk for. På fotodagen tar vi portretter og miljøbilder effektivt, slik at det forstyrrer driften minst mulig. Du får et utvalg ferdig redigerte bilder i riktige format, klare til nettside, sosiale medier og annonser.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-6">Vanlige spørsmål om pris på bedriftsfoto</h2>
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
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Om Elevera, foto for bedrifter i Ålesund</h2>
                <p>
                  Elevera er et digitalbyrå i Ålesund som tilbyr <Link href="/tjenester/fotografering-alesund" className="underline">fotografering for bedrifter i Ålesund og på Sunnmøre</Link>, sammen med video, nettside og digital markedsføring. Vi bestiller alltid bildene ut fra hvor de skal brukes, slik at de gjør jobben sin der kundene faktisk ser dem.
                </p>
              </section>

            </div>

            <div className="mt-16 rounded-3xl border border-[var(--forest)]/20 bg-[var(--forest)]/06 p-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-[var(--black)]">Trenger bedriften din bedre bilder?</h3>
              <p className="mb-6 text-[var(--stone-700)]">
                Book en kort, uforpliktende prat. Vi hjelper deg å finne ut hvilke bilder du faktisk trenger, og gir deg et konkret prisbilde.
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
                  href="/tjenester/fotografering-alesund"
                  className="btn btn-ghost"
                >
                  Se fototjenesten
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
