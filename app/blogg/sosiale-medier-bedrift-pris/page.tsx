import type { Metadata } from "next";
import Link from "next/link";
import HomeNav from "../../components/home/HomeNav";
import "../../components/blog.css";
import HomeFooter from "../../components/home/HomeFooter";

export const metadata: Metadata = {
  title: "Hva koster sosiale medier-styring for bedrifter? Priser i 2026 | Elevera",
  description:
    "Hva koster det egentlig å la noen styre sosiale medier for bedriften din? Her er prisene, hva som er inkludert, og hva du bør passe på.",
  alternates: { canonical: "https://elevera.no/blogg/sosiale-medier-bedrift-pris" },
  openGraph: {
    title: "Hva koster sosiale medier-styring for bedrifter? (2026)",
    description:
      "Hva koster det egentlig å la noen styre sosiale medier for bedriften din? Her er prisene, hva som er inkludert, og hva du bør passe på.",
    url: "https://elevera.no/blogg/sosiale-medier-bedrift-pris",
    type: "article",
  },
};

const faqs = [
  {
    q: "Hva koster det å sette ut sosiale medier til et byrå?",
    a: "De fleste norske byråer tar mellom 5 000 og 15 000 kr per måned for sosiale medier-styring. Prisen avhenger av antall plattformer, publiseringsfrekvens og om innholdsproduksjon (foto/video) er inkludert. Noen tilbyr også enkelttjenester fra rundt 3 000 kr per måned.",
  },
  {
    q: "Hvor ofte bør en bedrift poste på sosiale medier?",
    a: "Minimum 3 ganger per uke for å bygge synlighet og holde følgerne engasjert. Under det begynner algoritmene å nedprioritere kontoen din. De beste resultatene ser vi hos bedrifter som poster 4–5 ganger per uke med en miks av bilder, video og stories.",
  },
  {
    q: "Kan jeg styre sosiale medier selv istedenfor å bruke et byrå?",
    a: "Ja, men det tar mer tid enn de fleste forventer. Regn med 8–15 timer per uke for å gjøre det skikkelig — inkludert innholdsproduksjon, tekstskriving, publisering, svar på meldinger og analyse. For de fleste bedriftseiere er det mer lønnsomt å bruke den tiden på kundene sine.",
  },
  {
    q: "Hvilke plattformer bør bedriften min være på?",
    a: "Det avhenger av målgruppen. Instagram fungerer for de fleste bedrifter. Facebook er viktig for lokal synlighet og annonser. TikTok treffer yngre målgrupper og gir ofte bedre organisk rekkevidde. LinkedIn er relevant for B2B. Vi anbefaler å starte med 2 plattformer og gjøre dem skikkelig, fremfor å være halvveis på 5.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hva koster sosiale medier-styring for bedrifter? Priser i 2026",
  description:
    "Hva koster det egentlig å la noen styre sosiale medier for bedriften din? Her er prisene, hva som er inkludert, og hva du bør passe på.",
  author: {
    "@type": "Person",
    name: "Marius Teigen Tverbakk",
    jobTitle: "Daglig leder",
    worksFor: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  },
  publisher: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  datePublished: "2026-04-12",
  dateModified: "2026-04-12",
  url: "https://elevera.no/blogg/sosiale-medier-bedrift-pris",
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
    { "@type": "ListItem", position: 3, name: "Sosiale medier pris", item: "https://elevera.no/blogg/sosiale-medier-bedrift-pris" },
  ],
};

export default function SosialeMedierPrisPage() {
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

            {/* Header */}
            <div className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-[var(--forest)]/25 bg-[var(--forest)]/08 px-3 py-1 text-xs font-medium text-[var(--forest)]">
                  Sosiale medier
                </span>
                <span className="text-xs text-[var(--stone-500)]">12. april 2026</span>
                <span className="text-xs text-[var(--stone-500)]">9 min lesetid</span>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-[var(--black)] sm:text-4xl md:text-5xl">
                Hva koster sosiale medier-styring for bedrifter?
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--stone-700)]">
                Du vet at bedriften din burde vært mer aktiv på Instagram. Kanskje TikTok også. Men hvem har tid? Og hva koster det egentlig å la noen andre gjøre det? Jeg prøver å gi deg et ærlig svar.
              </p>
              <p className="mt-3 text-sm text-[var(--stone-500)]">
                Skrevet av Marius Teigen Tverbakk, daglig leder i Elevera · 12. april 2026
              </p>
            </div>

            {/* Content */}
            <div className="prose prose-invert max-w-none space-y-12 text-[var(--stone-700)] leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Det korte svaret</h2>
                <p>
                  Regn med 5 000 til 15 000 kr per måned hos et norsk byrå. Det er spennet de fleste opererer i. Under 5 000 kr er det sjelden nok timer til å gjøre en skikkelig jobb. Over 15 000 kr er du inn i pakker der annonsering, fotoshoots og strategi er inkludert.
                </p>
                <p className="mt-4">
                  Hos oss starter enkelttjenesten på 6 000 kr/mnd. Da poster vi for deg 3 ganger i uken, lager innholdet og svarer på meldinger. Trenger du mer, har vi pakker fra 7 900 kr/mnd der sosiale medier er en del av en større helhet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva prisene faktisk betyr i praksis</h2>
                <p>
                  Problemet med å bare se på månedsprisen er at det som er inkludert varierer enormt. Et byrå som tar 4 000 kr per måned gir deg kanskje 8 ferdige poster — men de har ikke tatt bildene, de har ikke skrevet tekstene for deg, og de svarer ikke på meldinger. Du ender opp med å gjøre halvparten av jobben selv.
                </p>
                <p className="mt-4">
                  Et byrå som tar 10 000 kr per måned kommer kanskje til deg, tar bilder, lager videoer, skriver alle tekster, publiserer, svarer på kommentarer og sender deg en rapport i slutten av måneden. Du gjør ingenting.
                </p>
                <p className="mt-4">
                  Forskjellen er ikke prisen — det er hva du faktisk slipper å gjøre.
                </p>
                <div className="mt-6 overflow-x-auto rounded-2xl border border-[var(--stone-300)]">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-[var(--stone-300)] bg-[var(--stone-50)]">
                        <th className="px-5 py-3 text-left font-semibold text-[var(--black)]">Prisnivå</th>
                        <th className="px-5 py-3 text-left font-semibold text-[var(--black)]">Hva du typisk får</th>
                        <th className="px-5 py-3 text-left font-semibold text-[var(--black)]">Din innsats</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {[
                        { pris: "3 000–5 000 kr/mnd", hva: "Strategi og rådgivning. Du lager og poster innholdet selv.", din: "Mye" },
                        { pris: "5 000–8 000 kr/mnd", hva: "Ferdig innhold 2–3x/uke. Du godkjenner og de poster.", din: "Litt" },
                        { pris: "8 000–12 000 kr/mnd", hva: "Alt over + fotoshoot, stories, community management.", din: "Nesten ingenting" },
                        { pris: "12 000–20 000 kr/mnd", hva: "Alt over + annonsering, video, strategi, rapportering.", din: "Ingenting" },
                      ].map((row, i) => (
                        <tr key={i} className="text-[var(--stone-700)]">
                          <td className="px-5 py-3 font-medium text-[var(--forest)] whitespace-nowrap">{row.pris}</td>
                          <td className="px-5 py-3">{row.hva}</td>
                          <td className="px-5 py-3 text-[var(--stone-600)]">{row.din}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Kan du gjøre det selv?</h2>
                <p>
                  Ja. Det er fullt mulig å styre sosiale medier selv. Mange gjør det, og noen gjør det bra. Men la meg være ærlig om hva det krever.
                </p>
                <p className="mt-4">
                  For å poste 3 ganger i uken med godt innhold trenger du å ta bilder eller video, skrive tekster, planlegge tidspunkter, svare på kommentarer og meldinger, følge med på hva som fungerer og justere kursen. Regn med 8–15 timer per uke.
                </p>
                <p className="mt-4">
                  For en bedriftseier som allerede jobber 50 timer i uken er det 8–15 timer du ikke har. Og det merkes: kontoen poster ujevnt, bildene er tatt med mobil mellom to møter, og meldinger fra potensielle kunder ligger ubesvart i tre dager.
                </p>
                <p className="mt-4">
                  Det er ikke et spørsmål om du <em className="text-[var(--black)]">kan</em> gjøre det selv. Det er et spørsmål om du <em className="text-[var(--black)]">bør</em> bruke tiden din på det.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva du bør se etter i et byrå</h2>
                <p>
                  Det er mange som tilbyr sosiale medier-tjenester. Noen er veldig gode. Noen er ikke det. Her er hva jeg ville sett etter:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    { title: "Lager de innholdet selv?", desc: "Mange byråer forventer at du leverer bilder og tekst. Da betaler du egentlig bare for noen som trykker \"publiser\". Finn et byrå som tar bildene, skriver tekstene og lager videoene." },
                    { title: "Poster de for deg, eller bare planlegger?", desc: "Strategi og innholdsplan er fint — men det som teller er at ting faktisk blir publisert. Hver uke. Uten at du trenger å gjøre noe." },
                    { title: "Svarer de på meldinger?", desc: "Community management er halvparten av jobben. Hvis en potensiell kunde sender en DM og ingen svarer på to dager, har du tapt dem." },
                    { title: "Får du se resultater?", desc: "Månedlig rapport med tall. Ikke bare \"det gikk bra denne måneden\" — men konkrete tall på rekkevidde, engasjement og følgervekst." },
                    { title: "Kjenner de bransjen din?", desc: "Et byrå som har jobbet med lokale bedrifter forstår at du ikke trenger viralt innhold — du trenger innhold som treffer folk i nærområdet ditt." },
                  ].map((item, i) => (
                    <li key={i} className="rounded-2xl border border-[var(--stone-300)] bg-[var(--stone-50)] px-6 py-4">
                      <div className="mb-1 font-semibold text-[var(--black)]">{item.title}</div>
                      <p className="text-sm text-[var(--stone-700)]">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Er det verdt pengene?</h2>
                <p>
                  Det spørsmålet er egentlig feil stilt. Det riktige spørsmålet er: hva koster det å <em className="text-[var(--black)]">ikke</em> ha profesjonelle sosiale medier?
                </p>
                <p className="mt-4">
                  80 prosent av forbrukere sjekker en bedrifts Instagram før de tar kontakt. Hvis de finner en konto som ikke har postet på tre uker, med bilder tatt i dårlig lys og ingen svar på kommentarer — hva tror du de gjør? De går videre. Til konkurrenten som ser mer profesjonell ut.
                </p>
                <p className="mt-4">
                  Du trenger ikke gå viralt. Du trenger bare å se aktiv, profesjonell og tilgjengelig ut. Det er det du betaler for.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva vi tar for det</h2>
                <p>
                  Hos Elevera starter sosiale medier-styring fra 6 000 kr/mnd som enkelttjeneste. Da tar vi oss av innholdsproduksjon, tekster, publisering 3 ganger per uke og svar på meldinger. Du godkjenner innholdet — ellers gjør vi alt.
                </p>
                <p className="mt-4">
                  Trenger du mer — for eksempel annonsering, fotoshoot eller flere plattformer — har vi pakker fra 7 900 til 22 900 kr/mnd der sosiale medier er en del av helheten.
                </p>
                <p className="mt-4">
                  Vi er et lite byrå i Ålesund. Vi tar ikke inn hundre kunder. Men de vi tar inn, følger vi opp skikkelig.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-6">Vanlige spørsmål</h2>
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

            {/* CTA */}
            <div className="mt-16 rounded-3xl border border-[var(--forest)]/20 bg-[var(--forest)]/06 p-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-[var(--black)]">Vil du at noen tar over sosiale medier for deg?</h3>
              <p className="mb-6 text-[var(--stone-700)]">
                Book et gratis møte. Vi ser på kontoen din og forteller deg hva vi ville gjort — uforpliktende.
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
                  href="/tjenester/sosiale-medier-alesund"
                  className="btn btn-ghost"
                >
                  Se tjenesten
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
