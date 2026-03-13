import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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
  author: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  publisher: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  datePublished: "2026-03-13",
  url: "https://elevera.no/blogg/instagram-lokale-kunder",
};

export default function BloggInnlegg() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="min-h-screen bg-[#0a0a0a]">
        <Navbar />

        <article className="px-6 pt-32 pb-20">
          <div className="mx-auto max-w-3xl">

            {/* Tilbake */}
            <Link
              href="/blogg"
              className="mb-10 inline-flex items-center gap-2 text-sm text-white/40 hover:text-white/70 transition-colors"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tilbake til blogg
            </Link>

            {/* Header */}
            <div className="mb-12">
              <div className="mb-4 flex items-center gap-3">
                <span className="rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-3 py-1 text-xs font-medium text-[#a78bfa]">
                  Sosiale medier
                </span>
                <span className="text-xs text-white/30">13. mars 2026</span>
                <span className="text-xs text-white/30">6 min lesetid</span>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Slik bruker du Instagram til å få flere kunder lokalt
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/60">
                Mange lokale bedrifter er på Instagram, men få bruker det på en måte som faktisk gir kunder. Det handler ikke om å poste mest mulig. Det handler om å poste riktig.
              </p>
            </div>

            {/* Innhold */}
            <div className="prose prose-invert max-w-none space-y-10 text-white/70 leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Profilen din er visitkortet</h2>
                <p>
                  Første stopp for de fleste nye følgere er profilen din. Navn, profilbilde og bio er det de ser på under ett sekund. Bruk bedriftsnavnet som brukernavn, et tydelig logo eller ansikt som profilbilde, og en bio som forklarer hva du gjør og hvem du gjør det for.
                </p>
                <p className="mt-4">
                  Legg inn en handlingsknapp eller lenke i bio. Det kan være booking, nettside eller et kontaktskjema. Folk som er interessert klikker ikke vilkårlig rundt, så gjør det enkelt for dem å ta neste steg.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Stedsmarkering er gratis synlighet</h2>
                <p>
                  Tagge Ålesund, Sunnmøre eller konkrete steder i hvert innlegg er noe av det enkleste du kan gjøre. Folk søker på steder, og innlegg med stedstagging dukker opp i de søkene. Det koster ingenting og tar to sekunder.
                </p>
                <p className="mt-4">
                  Det samme gjelder hashtags. Bruk en blanding av brede og lokale tags. #frisørÅlesund, #ålesund, #sunnmøre fungerer bedre for deg enn #frisør med 50 millioner innlegg der du aldri blir funnet.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Reels gir rekkevidde. Bilder bygger tillit.</h2>
                <p>
                  Reels vises til folk som ikke følger deg fra før. Det er der du henter nye øyne. Bilder og karuseller er der de som allerede følger deg blir minnet på at du eksisterer og hva du tilbyr.
                </p>
                <p className="mt-4">
                  En god strategi er å bruke begge. En reel per uke for å nå nye folk, og jevnlige bilder for å holde kontakten med dem som allerede er interessert. Du trenger ikke poste hver dag for å se resultater.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Vis mennesker, ikke bare produkter</h2>
                <p>
                  Lokale kunder handler med folk de kjenner og liker. Bilder av teamet, bak kulissene, eller hverdagen på jobb bygger en relasjon som et produktbilde aldri gjør. Folk vil se hvem som er på andre siden.
                </p>
                <p className="mt-4">
                  Det betyr ikke at du må dele alt. Men en ansatt som smiler til kamera, et gjennomført arbeid eller en morsom situasjon fra hverdagen gir deg et ansikt utad. Det er den typen innhold folk husker.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Svar på kommentarer og meldinger</h2>
                <p>
                  Instagram belønner kontoer som har aktivitet. Hvis folk kommenterer og du svarer, prioriterer algoritmen innholdet ditt høyere. Det er også bare god folkeskikk, og noe som skiller deg fra bedrifter som bruker Instagram som en enveiskanal.
                </p>
                <p className="mt-4">
                  Det tar fem minutter om dagen. Sett av tid til det, og du vil merke at innholdet ditt rekker lenger.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Konsistens slår perfeksjon</h2>
                <p>
                  Mange bedrifter starter med tre innlegg i uken, slutter etter to måneder, og starter på nytt seks måneder senere. Det er verre enn å poste én gang i uken konsekvent gjennom hele året.
                </p>
                <p className="mt-4">
                  Algoritmen foretrekker kontoer som er aktive over tid. Velg en frekvens du klarer å holde, og hold den. En produksjonsdag i måneden med Elevera kan gi deg nok innhold til å poste jevnlig i fire til seks uker uten å måtte tenke på det resten av måneden.
                </p>
              </section>

            </div>

            {/* CTA */}
            <div className="mt-16 rounded-3xl border border-[#7c3aed]/30 bg-[#7c3aed]/10 p-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-white">Vil du ha innhold som faktisk fungerer?</h3>
              <p className="mb-6 text-white/60">
                Vi hjelper bedrifter i Ålesund og på Sunnmøre med foto og video som gir resultater på Instagram og andre kanaler.
              </p>
              <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#7c3aed] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:bg-[#6d28d9] hover:-translate-y-0.5"
                >
                  Book gratis møte
                </a>
                <Link
                  href="/tjenester/foto-og-video-alesund"
                  className="rounded-full border border-white/20 px-8 py-3.5 font-semibold text-white transition-all hover:border-white/40 hover:bg-white/5"
                >
                  Se foto & video-tjenesten
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
