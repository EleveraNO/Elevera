import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Hva koster en nettside til bedriften? Ærlige priser (2026) | Elevera",
  description:
    "Prisen på en bedriftsnettside varierer fra 0 til 150 000 kr. Her er hva du faktisk trenger, hva det bør koste, og når du betaler for mye.",
  alternates: { canonical: "https://elevera.no/blogg/nettside-bedrift-pris" },
  openGraph: {
    title: "Hva koster en nettside til bedriften? Ærlige priser (2026)",
    description:
      "Prisen på en bedriftsnettside varierer fra 0 til 150 000 kr. Her er hva du faktisk trenger, hva det bør koste, og når du betaler for mye.",
    url: "https://elevera.no/blogg/nettside-bedrift-pris",
    type: "article",
  },
};

const faqs = [
  {
    q: "Hva koster en nettside til en liten bedrift?",
    a: "For de fleste små bedrifter i Norge er 8 000–20 000 kr en realistisk pris for en profesjonell nettside. Det dekker design, utvikling og lansering. Løpende kostnader som domene (200–400 kr/år) og hosting (100–400 kr/mnd) kommer i tillegg.",
  },
  {
    q: "Kan jeg lage nettsiden selv?",
    a: "Ja — verktøy som Wix, Squarespace og WordPress gjør det mulig uten teknisk bakgrunn. Det er et godt alternativ for bedrifter med veldig begrenset budsjett. Ulempen er at det tar tid, resultatet er sjelden like gjennomarbeidet som en skreddersydd løsning, og konverteringsraten er typisk lavere.",
  },
  {
    q: "Hva er forskjellen på WordPress og Next.js?",
    a: "WordPress er et innholdsstyringssystem (CMS) som er enkelt å oppdatere selv, men kan være tregt og har mange sikkerhetsproblemer. Next.js er et moderne rammeverk som gir raske, sikre nettsider, men krever utvikler for oppdateringer. For bedrifter som ønsker rask lastehastighet og god SEO er Next.js et godt valg.",
  },
  {
    q: "Bør jeg betale månedlig eller engangsbeløp for nettsiden?",
    a: "Det finnes begge modeller. Engangsbeløp gir deg full eierskap og forutsigbare kostnader. Månedlig abonnement (ofte 1 000–3 000 kr/mnd) inkluderer typisk hosting, oppdateringer og support, men du betaler mer over tid og eier ikke nettsiden selv. Hvilken som lønner seg avhenger av budsjettet og om du vil ha noen å ringe ved problemer.",
  },
  {
    q: "Hva er inkludert i prisen for en nettside?",
    a: "Det varierer veldig mellom leverandører. Et seriøst byrå inkluderer design, utvikling, testing, SEO-grunnoppsett og opplæring. Spør alltid om: domene og hosting er inkludert, hvem som eier koden, hva prisen for endringer er i etterkant, og om det er bindingstid.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hva koster en nettside til bedriften? Ærlige priser (2026)",
  description:
    "Prisen på en bedriftsnettside varierer fra 0 til 150 000 kr. Her er hva du faktisk trenger, hva det bør koste, og når du betaler for mye.",
  author: {
    "@type": "Person",
    name: "Marius Teigen Tverbakk",
    jobTitle: "Daglig leder",
    worksFor: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  },
  publisher: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  datePublished: "2026-03-31",
  dateModified: "2026-03-31",
  url: "https://elevera.no/blogg/nettside-bedrift-pris",
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
    { "@type": "ListItem", position: 3, name: "Hva koster en nettside", item: "https://elevera.no/blogg/nettside-bedrift-pris" },
  ],
};

export default function NettsidePrisPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <main className="min-h-screen bg-[#0a0a0a]">
        <Navbar />

        <article className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-3xl">

            <Link
              href="/blogg"
              className="mb-10 inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tilbake til blogg
            </Link>

            <div className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-[#2DD4BF]/25 bg-[#2DD4BF]/08 px-3 py-1 text-xs font-medium text-[#2DD4BF]">
                  Nettside
                </span>
                <span className="text-xs text-white/30">31. mars 2026</span>
                <span className="text-xs text-white/30">9 min lesetid</span>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Hva koster en nettside til bedriften? Her er de ærlige prisene
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/60">
                Prisen på en bedriftsnettside kan være alt fra null kroner til 150 000 kr. Ingen av ytterpunktene er nødvendigvis riktig svar for deg. Her er hva som faktisk skiller dem fra hverandre.
              </p>
              <p className="mt-3 text-sm text-white/30">
                Skrevet av Marius Teigen Tverbakk, daglig leder i Elevera · 31. mars 2026
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-12 text-white/70 leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Prisbildet — hva er hva?</h2>
                <p>
                  La oss starte med å rydde opp. En nettside er ikke bare én ting. Wix og en skreddersydd Next.js-løsning er begge «nettsider», akkurat som en brukt Dacia og en ny BMW begge er «biler». Prisen forteller deg hvilken kategori du er i.
                </p>
                <div className="mt-6 overflow-x-auto rounded-2xl border border-white/10">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-white/10 bg-white/5">
                        <th className="px-5 py-3 text-left font-semibold text-white">Løsning</th>
                        <th className="px-5 py-3 text-left font-semibold text-white">Pris</th>
                        <th className="px-5 py-3 text-left font-semibold text-white">Hvem passer det?</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      {[
                        { type: "Wix / Squarespace (selv)", pris: "0–400 kr/mnd", hvem: "Soloselbedrift, minimal nettilstedeværelse" },
                        { type: "WordPress-mal via byrå", pris: "5 000–15 000 kr", hvem: "Bedrift med enkle behov og begrenset budsjett" },
                        { type: "Skreddersydd WordPress", pris: "15 000–40 000 kr", hvem: "Bedrifter som vil oppdatere innhold selv" },
                        { type: "Next.js / moderne rammeverk", pris: "10 000–30 000 kr", hvem: "Bedrifter som vil ha rask, moderne nettside" },
                        { type: "Enterprise-løsning", pris: "50 000–150 000+ kr", hvem: "Nettbutikk, kompleks logikk, stor integrasjon" },
                      ].map((row, i) => (
                        <tr key={i} className="text-white/60">
                          <td className="px-5 py-3 font-medium text-white/80">{row.type}</td>
                          <td className="px-5 py-3 text-[#2DD4BF]">{row.pris}</td>
                          <td className="px-5 py-3">{row.hvem}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Hva de fleste bedrifter faktisk trenger</h2>
                <p>
                  Sannheten er at 80 % av bedrifter i Ålesund og Norge for øvrig ikke trenger en avansert løsning. De trenger en nettside som ser profesjonell ut, laster raskt, er lett å finne i Google og gjør det enkelt for potensielle kunder å ta kontakt eller bestille.
                </p>
                <p className="mt-4">
                  Det er fullt mulig å oppnå med en nettside i prisklassen 8 000–20 000 kr — hvis den er godt gjennomtenkt. Det vi ser dreper konverteringen er dårlige bilder, uklar struktur og tekst som er skrevet for Google, ikke for mennesker.
                </p>
                <p className="mt-4">
                  En nettside som ser moderne og troverdig ut, har tydelig CTA (ta kontakt / bestill / ring oss) og laster på under 2 sekunder vil gjøre mer for de fleste bedrifter enn en avansert løsning til tre ganger prisen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Hva du faktisk betaler for</h2>
                <p>
                  Når et byrå gir deg et tilbud på 15 000 kr for en nettside, lurer du kanskje på hva som egentlig koster så mye. Her er en realistisk fordeling:
                </p>
                <ul className="mt-4 space-y-3">
                  {[
                    { punkt: "Design og struktur", forklaring: "Å bestemme layout, farger, typografi og brukervei tar tid. Et gjennomarbeidet design er ikke et valg fra en mal — det er tilpasset bedriftens tone og mål." },
                    { punkt: "Utvikling", forklaring: "Å bygge siden teknisk, sette opp responsivt design (fungerer på mobil), og integrere eventuelle skjemaer, kart eller booking." },
                    { punkt: "Innholdsjobb", forklaring: "Tekst, bilder og struktur. Mange byråer inkluderer ikke dette i grunnprisen — spør alltid." },
                    { punkt: "SEO-grunnoppsett", forklaring: "Sidetitler, metabeskrivelser, hastighetsoptimalisering og teknisk SEO slik at Google faktisk finner deg." },
                    { punkt: "Testing og lansering", forklaring: "Teste på ulike enheter og nettlesere, sette opp domene og hosting, og forsikre seg om at alt fungerer." },
                  ].map((item, i) => (
                    <li key={i} className="rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="mb-1 font-semibold text-white">{item.punkt}</div>
                      <div className="text-sm text-white/55">{item.forklaring}</div>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Løpende kostnader — det alle glemmer</h2>
                <p>
                  Prisen for selve nettsiden er én ting. I tillegg kommer:
                </p>
                <ul className="mt-4 space-y-2 text-white/70">
                  <li className="flex gap-2"><span className="text-[#2DD4BF]">—</span> <span><strong className="text-white">Domene:</strong> 200–400 kr/år. Nødvendig.</span></li>
                  <li className="flex gap-2"><span className="text-[#2DD4BF]">—</span> <span><strong className="text-white">Hosting:</strong> 100–500 kr/mnd avhengig av løsning. Nødvendig.</span></li>
                  <li className="flex gap-2"><span className="text-[#2DD4BF]">—</span> <span><strong className="text-white">Vedlikehold og oppdateringer:</strong> 0 kr (gjør det selv) til 2 000 kr/mnd (via byrå). Valgfritt.</span></li>
                  <li className="flex gap-2"><span className="text-[#2DD4BF]">—</span> <span><strong className="text-white">SSL-sertifikat:</strong> Gratis via de fleste hostingleverandører i dag.</span></li>
                </ul>
                <p className="mt-4">
                  Regn med 300–800 kr/mnd i løpende kostnader for en typisk bedriftsnettside etter lansering.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Når betaler du for mye?</h2>
                <p>
                  Du betaler for mye hvis tilbudet ikke spesifiserer hva som er inkludert. «Nettside til 30 000 kr» uten detaljert beskrivelse er et dårlig tilbud, uansett om summen høres riktig ut.
                </p>
                <p className="mt-4">
                  Du betaler også for mye hvis du betaler månedlig for noe du aldri trenger — for eksempel support på en statisk nettside som aldri endres. Og du betaler for mye hvis byrået locker deg inn i en plattform de eier, slik at du ikke kan ta med deg nettsiden hvis du vil bytte leverandør.
                </p>
                <p className="mt-4">
                  En god leverandør gir deg full eierskap til koden, klart definerte leveranser og en pris du forstår.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-6">Vanlige spørsmål om nettside og pris</h2>
                <div className="space-y-4">
                  {faqs.map((faq, i) => (
                    <div key={i} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
                      <h3 className="mb-2 font-semibold text-white">{faq.q}</h3>
                      <p className="text-sm leading-relaxed text-white/55">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </section>

            </div>

            <div className="mt-16 rounded-3xl border border-[#2DD4BF]/20 bg-[#2DD4BF]/06 p-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-white">Vil du ha et konkret tilbud på nettside?</h3>
              <p className="mb-6 text-white/60">
                Vi lager nettsider til bedrifter i Ålesund og på Sunnmøre. Book et gratis møte så gir vi deg en pris uten skjulte kostnader.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#2DD4BF] px-8 py-3.5 font-semibold text-[#09090B] transition-all hover:bg-[#14B8A6] hover:-translate-y-0.5"
                >
                  Book gratis møte
                </a>
                <Link
                  href="/tjenester/nettside-alesund"
                  className="rounded-full border border-white/20 px-8 py-3.5 font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
                >
                  Se nettside-tjenesten
                </Link>
              </div>
            </div>

          </div>
        </article>

        <Footer />
      </main>
    </>
  );
}
