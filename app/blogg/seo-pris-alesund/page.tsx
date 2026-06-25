import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HomeNav from "../../components/home/HomeNav";
import "../../components/blog.css";
import HomeFooter from "../../components/home/HomeFooter";

export const metadata: Metadata = {
  title: "Hva koster lokal SEO i Ålesund? Ærlig prisguide 2026 | Elevera",
  description:
    "Hva koster lokal SEO for en bedrift i Ålesund? Reelle prisnivåer per måned, hva som er inkludert, hva som driver prisen, og hva du bør kreve av rapportering.",
  alternates: { canonical: "https://elevera.no/blogg/seo-pris-alesund" },
  openGraph: {
    title: "Hva koster lokal SEO i Ålesund? Ærlig prisguide 2026",
    description:
      "Reelle prisnivåer på lokal SEO for Ålesund-bedrifter, hva som er inkludert, og hva du bør kreve igjen for pengene.",
    url: "https://elevera.no/blogg/seo-pris-alesund",
    type: "article",
  },
};

const faqs = [
  {
    q: "Hva koster lokal SEO per måned i Ålesund?",
    a: "For en typisk liten bedrift på Sunnmøre ligger månedlige SEO-leveranser på 3 000–5 000 kr/mnd. Mellomstore bedrifter med mer innhold og teknisk arbeid ligger på 6 000–12 000 kr/mnd. Engangs-tjenester som teknisk audit eller oppsett av Google Business Profile ligger gjerne mellom 3 000 og 15 000 kr.",
  },
  {
    q: "Hvorfor varierer SEO-prisen så mye?",
    a: "Prisen følger arbeidsmengden. Konkurransen i bransjen din, hvor mange søk du vil rangere på, tilstanden på nettsiden i dag og hvor mye innhold som må produseres, avgjør timene. En rørlegger i Ålesund som vil opp på fem lokale søk er en helt annen jobb enn en nettbutikk som selger til hele landet.",
  },
  {
    q: "Hvor lang bindingstid bør jeg godta?",
    a: "3–6 måneder oppstart er rimelig, fordi SEO tar tid å vise resultater. Lengre bindingstid enn det bør gi deg en pause. Et byrå som leverer tør å beholde deg uten lang kontrakt.",
  },
  {
    q: "Kan jeg gjøre noe av SEO-arbeidet selv?",
    a: "Ja. Du kan holde Google Business Profile oppdatert, samle inn anmeldelser, og skrive om tjenestene dine i et språk kundene faktisk bruker. Det tekniske, innholdsstrukturen og lenkebyggingen lønner det seg som regel å leie inn.",
  },
  {
    q: "Når ser jeg resultater av SEO?",
    a: "De første tegnene (flere visninger og klikk fra Google Business, bedre synlighet i kart) kommer gjerne innen 4–8 uker. Varig rangering på side 1 for konkurranseutsatte søk tar 3–6 måneder. Vær skeptisk til de som lover raskere.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hva koster lokal SEO i Ålesund? Ærlig prisguide 2026",
  description:
    "Reelle prisnivåer på lokal SEO for Ålesund-bedrifter, hva som er inkludert, og hva du bør kreve igjen for pengene.",
  author: {
    "@type": "Person",
    name: "Marius Teigen Tverbakk",
    jobTitle: "Daglig leder",
    worksFor: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  },
  publisher: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  datePublished: "2026-05-16",
  dateModified: "2026-05-16",
  url: "https://elevera.no/blogg/seo-pris-alesund",
  about: [
    { "@type": "Thing", name: "Søkemotoroptimalisering" },
    { "@type": "Thing", name: "Lokal SEO" },
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
    { "@type": "ListItem", position: 3, name: "Hva koster lokal SEO i Ålesund", item: "https://elevera.no/blogg/seo-pris-alesund" },
  ],
};

export default function SeoPrisAlesundPage() {
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
                <span className="text-xs text-[var(--stone-500)]">16. mai 2026</span>
                <span className="text-xs text-[var(--stone-500)]">9 min lesetid</span>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-[var(--black)] sm:text-4xl md:text-5xl">
                Hva koster lokal SEO i Ålesund? Ærlig prisguide for 2026
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--stone-700)]">
                Du vet at bedriften bør være synlig når folk googler tjenesten din. Men hva koster det egentlig å jobbe med SEO, og hva betaler du faktisk for? Her er reelle prisnivåer for lokale bedrifter på Sunnmøre, uten tåkeprat.
              </p>
              <div className="mt-5 flex items-center gap-3">
                <Image
                  src="/images/marius.jpg"
                  alt="Marius Teigen Tverbakk, daglig leder i Elevera"
                  width={1200}
                  height={1607}
                  className="h-11 w-11 rounded-full object-cover object-top"
                  sizes="44px"
                />
                <span className="text-sm text-[var(--stone-500)]">
                  Skrevet av Marius Teigen Tverbakk, daglig leder i Elevera · 16. mai 2026
                </span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none space-y-12 text-[var(--stone-700)] leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Først: hva er lokal SEO?</h2>
                <p>
                  SEO (søkemotoroptimalisering) er arbeidet med å gjøre nettsiden din synlig i Google. Lokal SEO er den delen som handler om å bli funnet av folk i nærområdet, altså de som søker «rørlegger Ålesund», «frisør Moa» eller «taktekker Sunnmøre».
                </p>
                <p className="mt-4">
                  For de fleste bedrifter i Ålesund er det den lokale delen som betyr mest. Det handler om Google Business Profile, anmeldelser, og innhold som matcher «tjeneste pluss sted»-søk. Vil du forstå hva som ligger bak før du ser på pris, har vi en egen guide til <Link href="/blogg/seo-byraa-alesund" className="underline">hvordan du velger SEO-byrå i Ålesund</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva påvirker prisen?</h2>
                <img
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1100&auto=format&fit=crop"
                  alt="Analyseverktøy med søkedata på en skjerm"
                  loading="lazy"
                  className="not-prose mb-5 w-full rounded-2xl border border-[var(--stone-300)] object-cover aspect-[16/10] md:float-right md:ml-7 md:mb-3 md:w-[42%]"
                />
                <p>
                  SEO koster ikke det samme for to bedrifter, fordi arbeidsmengden er forskjellig. Fire ting avgjør hvor mange timer som trengs:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Konkurranse i bransjen.</strong> Er det fem eller femti aktører som vil opp på samme søk i Ålesund? Jo flere, jo mer arbeid kreves for å komme forbi dem.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Bransje og søkevolum.</strong> En bransje med mange søk og høy kjøpsverdi tåler og krever mer enn en smal nisje med få søk i måneden.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Tilstanden på nettsiden i dag.</strong> En rask, ryddig side trenger lite teknisk arbeid. En treg side bygget for ti år siden trenger mer før innholdet i det hele tatt får effekt.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Hvor mye innhold som må lages.</strong> Skal du rangere på flere tjenester og steder, må det skrives sider og artikler. Det er ofte den største posten over tid.</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Typiske prisnivåer for lokal SEO i Ålesund</h2>
                <p>
                  Her er reelle pristegn for SEO-tjenester i Ålesund og på Sunnmøre i 2026:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Teknisk SEO-audit (engangs):</strong> 5 000–15 000 kr. Du får en gjennomgang av hva som bør fikses, med en prioritert liste.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Google Business Profile-oppsett (engangs):</strong> 3 000–8 000 kr. Kategorier, beskrivelser, bilder og første innlegg på plass.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Månedlig leveranse, liten bedrift:</strong> 3 000–5 000 kr/mnd. Passer en tjenestebedrift med 1–5 ansatte og lokalt nedslagsfelt.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Månedlig leveranse, mellomstor:</strong> 6 000–12 000 kr/mnd. Inkluderer typisk innholdsproduksjon, teknisk vedlikehold, lenkebygging og rapportering.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Stor satsing:</strong> 15 000 kr/mnd og oppover. Aktuelt ved stort søkevolum, mange tjenester eller flere lokasjoner.</span></li>
                </ul>
                <p className="mt-4">
                  Ligger tilbudet under 2 000 kr/mnd, får du sannsynligvis svært lite reelt arbeid. Ligger det over 20 000 kr/mnd uten en tydelig forklaring på hva timene går til, betaler du trolig for mye. Hos oss inngår <Link href="/tjenester/seo-alesund" className="underline">søkemotoroptimalisering for Ålesund-bedrifter</Link> i pakkene fra 18 900 kr/mnd, eller fra 3 000 kr/mnd som enkelttjeneste.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva er inkludert i en SEO-pakke?</h2>
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1100&auto=format&fit=crop"
                  alt="Digitalt dashboard med SEO- og trafikkstatistikk"
                  loading="lazy"
                  className="not-prose mb-5 w-full rounded-2xl border border-[var(--stone-300)] object-cover aspect-[16/10] md:float-left md:mr-7 md:mb-3 md:w-[42%]"
                />
                <p>
                  En seriøs månedlig leveranse består som regel av fire deler. Be om å få spesifisert hvor mye tid som går til hver:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Teknisk SEO:</strong> hastighet, mobiltilpasning, indeksering og strukturerte data slik at Google kan lese siden riktig.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Innhold:</strong> tjeneste- og lokasjonssider, og artikler som svarer på det kundene faktisk søker på.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Lokal SEO:</strong> Google Business Profile, anmeldelser og lokale referanser. Ofte det som gir raskest effekt for en lokal bedrift. Vi har en egen <Link href="/blogg/google-business-profile-guide" className="underline">komplett guide til Google Business Profile</Link>.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Lenkebygging:</strong> få relevante nettsteder til å lenke til deg, slik at Google ser deg som en autoritet i området.</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva du bør kreve av resultater og rapportering</h2>
                <img
                  src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1100&auto=format&fit=crop"
                  alt="Person som ser på en SEO-rapport på en laptop"
                  loading="lazy"
                  className="not-prose mb-5 w-full rounded-2xl border border-[var(--stone-300)] object-cover aspect-[16/10] md:float-right md:ml-7 md:mb-3 md:w-[42%]"
                />
                <p>
                  Du betaler for arbeid du ikke ser direkte, derfor er rapportering ikke et tillegg, men en del av leveransen. Et seriøst byrå gir deg hver måned:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Posisjoner på de søkene dere ble enige om å gå etter.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Klikk og visninger fra Google, hentet fra Google Search Console som du selv har tilgang til.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Hva som faktisk ble gjort i perioden, i klart språk.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Hva som er planen neste måned.</span></li>
                </ul>
                <p className="mt-4">
                  Får du ikke tall du kan etterprøve selv, vet du ikke om du får det du betaler for.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva kan du gjøre selv, og hva bør du leie inn?</h2>
                <p>
                  Du trenger ikke betale for alt. Dette kan du fint gjøre på egen hånd:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Holde Google Business Profile oppdatert med åpningstider, bilder og innlegg.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Be fornøyde kunder om en anmeldelse, jevnt og over tid.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Skrive om tjenestene dine i ord kundene bruker, ikke interne fagtermer.</span></li>
                </ul>
                <p className="mt-4">
                  Det tekniske, innholdsstrukturen og lenkebyggingen lønner det seg som regel å leie inn, fordi det tar tid å lære og enda lengre tid å gjøre godt. Vil du ha hjelp til å se hele bildet, ikke bare SEO, har vi skrevet om <Link href="/blogg/markedsforingsbyraa-alesund" className="underline">hva du bør se etter i et markedsføringsbyrå i Ålesund</Link>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Slik jobber Elevera med SEO for lokale bedrifter</h2>
                <p>
                  Vi starter med en gjennomgang av hva som rangerer for deg i dag, og hva som realistisk kan flyttes. Så setter vi et tydelig mål, for eksempel flere telefoner på en bestemt tjeneste, og jobber mot det med teknisk SEO, innhold og lokal synlighet. Du får månedlig rapport med tall du selv kan logge inn og se.
                </p>
                <p className="mt-4">
                  SEO og nettside henger tett sammen. En treg eller uoversiktlig side trekker ned alt det andre arbeidet, så noen ganger er første steg en bedre <Link href="/tjenester/nettside-alesund" className="underline">nettside for bedriften</Link> før vi går videre med SEO.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-6">Vanlige spørsmål om SEO-pris i Ålesund</h2>
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
                  Elevera er et digitalbyrå i Ålesund som tilbyr <Link href="/tjenester/seo-alesund" className="underline">SEO for bedrifter i Ålesund og på Sunnmøre</Link>, sammen med nettside, digital annonsering og innholdsproduksjon. Vi er ærlige om hva vi kan og ikke kan, og leverer månedlige rapporter du selv kan etterprøve.
                </p>
              </section>

            </div>

            <div className="mt-16 rounded-3xl border border-[var(--forest)]/20 bg-[var(--forest)]/06 p-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-[var(--black)]">Lurer du på hva SEO ville kostet for din bedrift?</h3>
              <p className="mb-6 text-[var(--stone-700)]">
                Book en gratis, uforpliktende prat på 30 minutter. Vi ser på hva som rangerer for deg i dag, og gir deg et konkret prisbilde tilpasset bedriften din.
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
