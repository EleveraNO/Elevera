import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Hvorfor trenger bedriften din profesjonelle bilder? | Elevera",
  description:
    "Profesjonelle bilder bygger tillit, øker konvertering og skiller deg fra konkurrentene. Les hvorfor bedriftsfoto er en av de beste investeringene du kan gjøre.",
  alternates: { canonical: "https://elevera.no/blogg/profesjonelle-bilder-bedrift" },
  openGraph: {
    title: "Hvorfor trenger bedriften din profesjonelle bilder?",
    description:
      "Profesjonelle bilder bygger tillit, øker konvertering og skiller deg fra konkurrentene.",
    url: "https://elevera.no/blogg/profesjonelle-bilder-bedrift",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Hvorfor trenger bedriften din profesjonelle bilder?",
  description:
    "Profesjonelle bilder bygger tillit, øker konvertering og skiller deg fra konkurrentene.",
  author: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  publisher: { "@type": "Organization", name: "Elevera", url: "https://elevera.no" },
  datePublished: "2026-03-13",
  url: "https://elevera.no/blogg/profesjonelle-bilder-bedrift",
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
                  Foto & Video
                </span>
                <span className="text-xs text-white/30">13. mars 2026</span>
                <span className="text-xs text-white/30">5 min lesetid</span>
              </div>
              <h1 className="text-3xl font-bold leading-tight text-white sm:text-4xl md:text-5xl">
                Hvorfor trenger bedriften din profesjonelle bilder?
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-white/60">
                I en verden der potensielle kunder tar avgjørelser på sekunder, kan bildene dine være forskjellen mellom et klikk og et bortfall. Her er hvorfor profesjonell foto er en av de smarteste investeringene du kan gjøre for bedriften din.
              </p>
            </div>

            {/* Innhold */}
            <div className="prose prose-invert max-w-none space-y-10 text-white/70 leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Førsteinntrykket skapes på millisekunder</h2>
                <p>
                  Forskning viser at folk danner seg et inntrykk av en nettside på under 50 millisekunder. Det er raskere enn et øyeblikk — og det er bildene som gjør jobben. Uskarpe, mørke eller amatørmessige bilder signaliserer at bedriften er uprofesjonell, uansett hvor god tjenesten egentlig er.
                </p>
                <p className="mt-4">
                  Profesjonelle bilder derimot forteller en historie: at du tar bedriften din på alvor, at du bryr deg om detaljer, og at kunden kan stole på deg.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Bilder bygger tillit — raskere enn ord</h2>
                <p>
                  Tekst kan forklare hva du gjør. Bilder viser det. Og det er en stor forskjell. En frisørsalong med profesjonelle bilder av lokalet, teamet og ferdig arbeid vil alltid konvertere bedre enn en som kun har tekst og et generisk stockbilde.
                </p>
                <p className="mt-4">
                  For lokale bedrifter i Ålesund er dette ekstra viktig. Folk kjøper fra folk de kjenner og stoler på — og bilder av det ekte teamet ditt og det ekte lokalet ditt er det nærmeste du kommer et håndtrykk før første møte.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Sosiale medier belønner kvalitetsinnhold</h2>
                <p>
                  Instagram, Facebook og TikTok favoriserer innhold som folk stopper opp ved. Profesjonelle bilder og videoer får rett og slett mer rekkevidde — og mer rekkevidde betyr flere potensielle kunder som ser bedriften din.
                </p>
                <p className="mt-4">
                  Innhold med høy kvalitet deles også oftere. En fornøyd kunde som deler et profesjonelt bilde av produktet ditt er gratis markedsføring som rekker langt.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Nettsiden din konverterer bedre</h2>
                <p>
                  Nettsider med profesjonelle bilder har høyere konverteringsrate. Det vil si at flere av de som besøker siden faktisk tar kontakt, bestiller time eller kjøper. Studier viser at produktbilder av høy kvalitet kan øke konverteringen med opptil 40%.
                </p>
                <p className="mt-4">
                  For en lokal bedrift i Ålesund som investerer i en profesjonell nettside, er det bortkastet å fylle den med dårlige bilder. Innholdet og designet må jobbe sammen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Du skiller deg ut fra konkurrentene</h2>
                <p>
                  Mange av konkurrentene dine bruker fortsatt telefonfoto eller generiske stockbilder. Det er din mulighet. Profesjonelle bilder som viser din bedrift, ditt team og ditt arbeid er unike for deg — de kan ikke kopieres.
                </p>
                <p className="mt-4">
                  I et marked der mange tilbyr lignende tjenester, er visuell identitet en av de sterkeste differensiatorene du har.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Det er en investering, ikke en kostnad</h2>
                <p>
                  En profesjonell fotosesjon gir deg innhold du kan bruke i måneder: på nettsiden, i sosiale medier, i annonser, i e-poster og i presentasjoner. Regnet per bruk er det svært kostnadseffektivt.
                </p>
                <p className="mt-4">
                  En enkelt profesjonell bildeserie kan gi deg innhold til Instagram i 2–3 måneder, forbedre konverteringsraten på nettsiden din, og brukes i annonser som treffer nye kunder — alt fra én produksjonsdag.
                </p>
              </section>

            </div>

            {/* CTA */}
            <div className="mt-16 rounded-3xl border border-[#7c3aed]/30 bg-[#7c3aed]/10 p-10 text-center">
              <h3 className="mb-3 text-2xl font-bold text-white">Klar for profesjonelle bilder?</h3>
              <p className="mb-6 text-white/60">
                Vi hjelper bedrifter i Ålesund og på Sunnmøre med foto og video som faktisk gir resultater.
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
