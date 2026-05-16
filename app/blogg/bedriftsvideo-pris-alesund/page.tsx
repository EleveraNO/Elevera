import type { Metadata } from "next";
import Link from "next/link";
import HomeNav from "../../components/home/HomeNav";
import "../../components/blog.css";
import HomeFooter from "../../components/home/HomeFooter";

export const metadata: Metadata = {
  title: "Hva koster en bedriftsvideo i Ålesund? Prisguide 2026 | Elevera",
  description:
    "Hva koster bedriftsvideo i Ålesund? Prisnivåer for bedriftspresentasjon, rekrutteringsvideo, produktvideo og animasjon, og hva som faktisk driver prisen.",
  alternates: { canonical: "https://elevera.no/blogg/bedriftsvideo-pris-alesund" },
  openGraph: {
    title: "Hva koster en bedriftsvideo i Ålesund? Prisguide 2026",
    description:
      "Prisnivåer for ulike typer bedriftsvideo i Ålesund, og hva som driver prisen opp og ned.",
    url: "https://elevera.no/blogg/bedriftsvideo-pris-alesund",
    type: "article",
  },
};

const faqs = [
  {
    q: "Hva koster en enkel bedriftsvideo i Ålesund?",
    a: "En kort video til nettside eller sosiale medier, filmet på én lokasjon og redigert til 30–60 sekunder, ligger typisk på 8 000–20 000 kr. En full bedriftspresentasjon med én opptaksdag og 1–2 minutter ferdig film ligger oftere på 20 000–45 000 kr.",
  },
  {
    q: "Hvorfor spriker videoprisene så mye?",
    a: "Fordi en video kan være alt fra én times opptak på kontoret til en produksjon med flere opptaksdager, manus, medvirkende, animasjon og musikklisens. Det er antall opptaksdager, lokasjoner og etterarbeid som flytter prisen mest.",
  },
  {
    q: "Er dronevideo dyrere enn vanlig bedriftsvideo?",
    a: "Ikke nødvendigvis. Ren dronevideo kan være rimeligere fordi det er mindre rigg og færre medvirkende. Men kombinasjonen drone pluss bakkeopptak pluss redigering blir gjerne dyrere enn én av delene alene. Vi har en egen guide til hva dronevideo koster.",
  },
  {
    q: "Hva er ikke inkludert i en standard videopris?",
    a: "Vanlige tillegg er ekstra klippeversjoner og formater, undertekster, musikklisens utover standard, manusarbeid, skuespillere eller stemmelegging, og hastelevering. Be alltid om hva som inngår og hva som faktureres ekstra.",
  },
  {
    q: "Lønner det seg med et abonnement på jevnlig video?",
    a: "Hvis du trenger innhold løpende, for eksempel til sosiale medier hver måned, blir prisen per video som regel lavere med en fast avtale enn med enkeltbestillinger. Jevnlige avtaler starter gjerne rundt 10 000 kr/mnd avhengig av volum.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hva koster en bedriftsvideo i Ålesund? Prisguide 2026",
  description:
    "Prisnivåer for ulike typer bedriftsvideo i Ålesund, og hva som driver prisen opp og ned.",
  author: {
    "@type": "Person",
    name: "Marius Teigen Tverbakk",
    jobTitle: "Daglig leder",
    worksFor: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  },
  publisher: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  datePublished: "2026-05-16",
  dateModified: "2026-05-16",
  url: "https://elevera.no/blogg/bedriftsvideo-pris-alesund",
  about: [
    { "@type": "Thing", name: "Videoproduksjon" },
    { "@type": "Thing", name: "Bedriftsvideo" },
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
    { "@type": "ListItem", position: 3, name: "Hva koster en bedriftsvideo i Ålesund", item: "https://elevera.no/blogg/bedriftsvideo-pris-alesund" },
  ],
};

export default function BedriftsvideoPrisAlesundPage() {
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
                  Video
                </span>
                <span className="text-xs text-[var(--stone-500)]">16. mai 2026</span>
                <span className="text-xs text-[var(--stone-500)]">8 min lesetid</span>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-[var(--black)] sm:text-4xl md:text-5xl">
                Hva koster en bedriftsvideo i Ålesund?
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--stone-700)]">
                Du vet at video gjør mer inntrykk enn tekst og bilder. Men «bedriftsvideo» kan koste alt fra 8 000 til over 100 000 kr, så hva er rett for deg? Her er prisnivåene for de vanligste typene, og hva som faktisk styrer prisen.
              </p>
              <p className="mt-3 text-sm text-[var(--stone-500)]">
                Skrevet av Marius Teigen Tverbakk, daglig leder i Elevera · 16. mai 2026
              </p>
            </div>

            <div className="prose prose-invert max-w-none space-y-12 text-[var(--stone-700)] leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva brukes en bedriftsvideo til?</h2>
                <p>
                  «Bedriftsvideo» er ikke én ting. Det er en samlebetegnelse for video du bruker til å selge, forklare eller bygge tillit. De vanligste i Ålesund er:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Bedriftspresentasjon:</strong> hvem dere er og hva dere leverer, til forsiden av nettsiden eller et salgsmøte.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Rekrutteringsvideo:</strong> vis hvordan det er å jobbe hos dere, for å tiltrekke folk i et stramt arbeidsmarked.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Produktvideo:</strong> vis produktet i bruk, ofte rett inn i annonser og produktsider.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Kortvideo til sosiale medier:</strong> korte klipp filmet for Instagram, Facebook og LinkedIn.</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Prisoversikt for bedriftsvideo i Ålesund</h2>
                <p>
                  Dette er reelle prisnivåer for videoproduksjon i Ålesund og på Sunnmøre i 2026. Tallene er hele produksjoner, fra opptak til ferdig redigert film:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Kort video til sosiale medier:</strong> 8 000–20 000 kr. Én lokasjon, kort opptak, 30–60 sekunder ferdig.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Bedriftspresentasjon:</strong> 20 000–45 000 kr. Én opptaksdag, intervju og miljøbilder, 1–2 minutter ferdig.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Rekrutteringsvideo:</strong> 25 000–60 000 kr. Flere ansatte, flere lokasjoner, mer regi.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Produktvideo:</strong> 10 000–35 000 kr per produkt, avhengig av hvor avansert visningen skal være.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Animasjon eller forklaringsvideo:</strong> 15 000–50 000 kr. Pris følger lengde og hvor detaljert animasjonen er.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Jevnlig innhold på avtale:</strong> fra rundt 10 000 kr/mnd. Lavere pris per video når det produseres løpende.</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva påvirker prisen?</h2>
                <p>
                  To videoer som ser like lange ut kan koste svært forskjellig. Det er disse postene som styrer:
                </p>
                <ul className="mt-4 space-y-3">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Antall opptaksdager.</strong> Den største enkeltposten. En halv dag mot to dager er en stor prisforskjell.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Antall lokasjoner.</strong> Flere steder betyr mer rigg, mer reise og mer tid.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Manus og regi.</strong> En gjennomtenkt fortelling tar tid å planlegge, men gir som regel en film som faktisk virker.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Etterarbeid.</strong> Klipping, fargejustering, lyd, grafikk og teksting. Ofte like mye arbeid som selve opptaket.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span><strong className="text-[var(--black)]">Antall versjoner og formater.</strong> Én lang film pluss flere korte klipp til sosiale medier koster mer enn én leveranse.</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva er ikke inkludert?</h2>
                <p>
                  Be alltid om hva som inngår, og hva som faktureres som tillegg. Vanlige ekstraposter er:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Ekstra klippeversjoner og formater utover det avtalte.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Undertekster, og spesielt teksting på flere språk.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Musikklisens utover et standard bibliotek.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Skuespillere, stemmelegging eller programleder.</span></li>
                  <li className="flex gap-3"><span className="text-[var(--forest)] font-semibold">·</span> <span>Hastelevering med kort frist.</span></li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Hva skiller dronevideo fra vanlig bedriftsvideo?</h2>
                <p>
                  Ren dronevideo kan faktisk være rimeligere enn en full bedriftsfilm, fordi det er mindre rigg, færre medvirkende og kortere etterarbeid. Det som driver prisen opp er kombinasjonen: drone pluss bakkeopptak pluss intervju pluss redigering blir mer enn hver del for seg. Skal du primært ha luftbilder, har vi en egen <Link href="/blogg/dronevideo-pris" className="underline">prisguide for dronevideo</Link>, og du kan lese mer om <Link href="/tjenester/dronevideo-alesund" className="underline">dronevideo i Ålesund</Link> som egen tjeneste.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Slik er prosessen fra brief til ferdig film</h2>
                <p>
                  Hos oss følger en videoproduksjon fire steg, og du vet prisen før vi starter:
                </p>
                <ol className="mt-4 space-y-3 list-decimal list-inside">
                  <li><strong className="text-[var(--black)]">Brief.</strong> Vi blir enige om mål, målgruppe, hvor videoen skal brukes og budsjett. Du får et fast tilbud.</li>
                  <li><strong className="text-[var(--black)]">Plan.</strong> Vi setter opp innspillingsdag, lokasjoner og en enkel plan for hva som skal filmes.</li>
                  <li><strong className="text-[var(--black)]">Opptak.</strong> Selve filmingen, som regel én dag for en standard bedriftsvideo.</li>
                  <li><strong className="text-[var(--black)]">Redigering og levering.</strong> Du får et utkast, gir tilbakemelding, og vi leverer ferdig film i de formatene du trenger.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-6">Vanlige spørsmål om pris på bedriftsvideo</h2>
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
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Om Elevera, videoproduksjon i Ålesund</h2>
                <p>
                  Elevera er et digitalbyrå i Ålesund som leverer <Link href="/tjenester/videoproduksjon-alesund" className="underline">videoproduksjon for bedrifter i Ålesund og på Sunnmøre</Link>, sammen med foto, nettside og digital markedsføring. Vi gir deg fast pris før vi starter, slik at du vet nøyaktig hva du betaler for.
                </p>
              </section>

            </div>

            <div className="mt-16 rounded-3xl border border-[var(--forest)]/20 bg-[var(--forest)]/06 p-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-[var(--black)]">Vil du vite hva din video ville kostet?</h3>
              <p className="mb-6 text-[var(--stone-700)]">
                Book en kort, uforpliktende prat. Fortell oss hva videoen skal brukes til, så gir vi deg et konkret prisbilde og forslag til hva som passer budsjettet.
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
                  href="/tjenester/videoproduksjon-alesund"
                  className="btn btn-ghost"
                >
                  Se videoproduksjon
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
