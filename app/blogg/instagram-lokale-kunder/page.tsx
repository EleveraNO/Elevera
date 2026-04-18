import type { Metadata } from "next";
import Link from "next/link";
import HomeNav from "../../components/home/HomeNav";
import "../../components/blog.css";
import HomeFooter from "../../components/home/HomeFooter";

export const metadata: Metadata = {
  title: "Slik bruker du Instagram til å få flere kunder lokalt | Elevera",
  description:
    "Instagram er et av de beste verktøyene for lokale bedrifter, men bare hvis du bruker det riktig. Her er det som faktisk fungerer.",
  alternates: { canonical: "https://elevera.no/blogg/instagram-lokale-kunder" },
  openGraph: {
    title: "Slik bruker du Instagram til å få flere kunder lokalt",
    description:
      "Instagram er et av de beste verktøyene for lokale bedrifter, men bare hvis du bruker det riktig.",
    url: "https://elevera.no/blogg/instagram-lokale-kunder",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Slik bruker du Instagram til å få flere kunder lokalt",
  description:
    "Instagram er et av de beste verktøyene for lokale bedrifter, men bare hvis du bruker det riktig.",
  author: {
    "@type": "Person",
    name: "Marius Teigen Tverbakk",
    jobTitle: "Daglig leder",
    worksFor: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  },
  publisher: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  datePublished: "2026-03-13",
  dateModified: "2026-03-13",
  url: "https://elevera.no/blogg/instagram-lokale-kunder",
};

export default function BloggInnlegg() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HomeNav />
      <main className="blog-article">

        <article className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-3xl">

            {/* Tilbake */}
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
                <span className="text-xs text-[var(--stone-500)]">13. mars 2026</span>
                <span className="text-xs text-[var(--stone-500)]">6 min lesetid</span>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-[var(--black)] sm:text-4xl md:text-5xl">
                Slik bruker du Instagram til å få flere kunder lokalt
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-[var(--stone-700)]">
                Mange lokale bedrifter er på Instagram, men få bruker det på en måte som faktisk gir kunder. Det handler ikke om å poste mest mulig. Det handler om å poste riktig.
              </p>
              <p className="mt-3 text-sm text-[var(--stone-500)]">
                Skrevet av Marius Teigen Tverbakk, daglig leder i Elevera · 13. mars 2026
              </p>
            </div>

            {/* Innhold */}
            <div className="prose prose-invert max-w-none space-y-10 text-[var(--stone-700)] leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Profilen din er visitkortet</h2>
                <p>
                  Første stopp for de fleste nye følgere er profilen din. Navn, profilbilde og bio er det de ser på under ett sekund. Bruk bedriftsnavnet som brukernavn, et tydelig logo eller ansikt som profilbilde, og en bio som forklarer hva du gjør og hvem du gjør det for.
                </p>
                <p className="mt-4">
                  Legg inn en handlingsknapp eller lenke i bio. Det kan være booking, nettside eller et kontaktskjema. Folk som er interessert klikker ikke vilkårlig rundt, så gjør det enkelt for dem å ta neste steg.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Stedsmarkering er gratis synlighet</h2>
                <p>
                  Tagge Ålesund, Sunnmøre eller konkrete steder i hvert innlegg er noe av det enkleste du kan gjøre. Folk søker på steder, og innlegg med stedstagging dukker opp i de søkene. Det koster ingenting og tar to sekunder.
                </p>
                <p className="mt-4">
                  Det samme gjelder hashtags. Bruk en blanding av brede og lokale tags. #frisørÅlesund, #ålesund, #sunnmøre fungerer bedre for deg enn #frisør med 50 millioner innlegg der du aldri blir funnet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Reels gir rekkevidde. Bilder bygger tillit.</h2>
                <p>
                  Reels vises til folk som ikke følger deg fra før. Det er der du henter nye øyne. Bilder og karuseller er der de som allerede følger deg blir minnet på at du eksisterer og hva du tilbyr.
                </p>
                <p className="mt-4">
                  En god strategi er å bruke begge. En reel per uke for å nå nye folk, og jevnlige bilder for å holde kontakten med dem som allerede er interessert. Du trenger ikke poste hver dag for å se resultater.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Vis mennesker, ikke bare produkter</h2>
                <p>
                  Lokale kunder handler med folk de kjenner og liker. Bilder av teamet, bak kulissene, eller hverdagen på jobb bygger en relasjon som et produktbilde aldri gjør. Folk vil se hvem som er på andre siden.
                </p>
                <p className="mt-4">
                  Det betyr ikke at du må dele alt. Men en ansatt som smiler til kamera, et gjennomført arbeid eller en morsom situasjon fra hverdagen gir deg et ansikt utad. Det er den typen innhold folk husker.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Svar på kommentarer og meldinger</h2>
                <p>
                  Instagram belønner kontoer som har aktivitet. Hvis folk kommenterer og du svarer, prioriterer algoritmen innholdet ditt høyere. Det er også bare god folkeskikk, og noe som skiller deg fra bedrifter som bruker Instagram som en enveiskanal.
                </p>
                <p className="mt-4">
                  Det tar fem minutter om dagen. Sett av tid til det, og du vil merke at innholdet ditt rekker lenger.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-[var(--black)] mb-4">Konsistens slår perfeksjon</h2>
                <p>
                  Mange bedrifter starter med tre innlegg i uken, slutter etter to måneder, og starter på nytt seks måneder senere. Det er verre enn å poste én gang i uken konsekvent gjennom hele året.
                </p>
                <p className="mt-4">
                  Algoritmen foretrekker kontoer som er aktive over tid. Velg en frekvens du klarer å holde, og hold den. En produksjonsdag i måneden med Elevera kan gi deg nok innhold til å poste jevnlig i fire til seks uker uten å måtte tenke på det resten av måneden.
                </p>
              </section>

            </div>

            {/* CTA */}
            <div className="mt-16 rounded-3xl border border-[var(--forest)]/20 bg-[var(--forest)]/06 p-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-[var(--black)]">Vil du ha innhold som faktisk fungerer?</h3>
              <p className="mb-6 text-[var(--stone-700)]">
                Vi hjelper bedrifter i Ålesund og på Sunnmøre med foto og video som gir resultater på Instagram og andre kanaler.
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
                  href="/tjenester/foto-og-video-alesund"
                  className="btn btn-ghost"
                >
                  Se foto & video-tjenesten
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
