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
                Potensielle kunder tar avgjørelser raskt. Ofte før de har lest et eneste ord. Bildene dine jobber hele tiden, enten de jobber for deg eller mot deg. Her er hva vi har sett gang på gang hos bedriftene vi jobber med.
              </p>
            </div>

            {/* Innhold */}
            <div className="prose prose-invert max-w-none space-y-10 text-white/70 leading-relaxed">

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Folk bestemmer seg før de leser</h2>
                <p>
                  Forskning viser at folk danner seg et inntrykk av en nettside på under 50 millisekunder. Det er bildene som gjør jobben, ikke teksten. Uskarpe, mørke eller telefonfotograferte bilder signaliserer at bedriften er uprofesjonell, uansett hvor god tjenesten egentlig er.
                </p>
                <p className="mt-4">
                  Profesjonelle bilder viser at du tar bedriften din på alvor. Det er et signal kunden plukker opp umiddelbart, uten å tenke over det.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Tekst forklarer. Bilder overbeviser.</h2>
                <p>
                  Du kan skrive nok så godt om hvor dyktig du er. Men et bilde av det ferdige arbeidet sier mer. En frisørsalong med profesjonelle bilder av lokalet, teamet og ferdig arbeid vil alltid konvertere bedre enn en som kun har tekst og et generisk stockbilde fra nettet.
                </p>
                <p className="mt-4">
                  For lokale bedrifter i Ålesund er dette spesielt viktig. Folk handler med folk de kjenner og stoler på. Bilder av det ekte teamet og det ekte lokalet ditt er det nærmeste du kommer et håndtrykk før første møte.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Algoritmene favoriserer godt innhold</h2>
                <p>
                  Instagram, Facebook og TikTok gir mer rekkevidde til innhold folk stopper opp ved. Profesjonelle bilder og videoer stopper scrollen. Telefonbilder gjør det sjelden.
                </p>
                <p className="mt-4">
                  Kvalitetsinnhold deles også mer. En fornøyd kunde som deler et godt bilde av produktet ditt er gratis markedsføring som rekker langt utover din egen følgerskare.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Siden din selger bedre</h2>
                <p>
                  Nettsider med profesjonelle bilder får flere til å ta kontakt, bestille time eller kjøpe. Det er ikke en mening, det er målbart. Å investere i en god nettside og så fylle den med dårlige bilder er litt som å kjøpe en fin butikk og la det ligge rot i vinduet.
                </p>
                <p className="mt-4">
                  Innhold og design må jobbe sammen. Gjør de det, merker du det på henvendelsene.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">De fleste konkurrentene dine bruker telefon</h2>
                <p>
                  Sjekk konkurrentene dine på Instagram eller på nettsiden deres. Mange bruker fortsatt telefonfoto. Det er faktisk en fordel for deg. Profesjonelle bilder av din bedrift, ditt team og ditt arbeid er unike for deg og kan ikke kopieres av noen andre.
                </p>
                <p className="mt-4">
                  Når mange tilbyr lignende tjenester til lignende priser, er den visuelle presentasjonen ofte det som vipper avgjørelsen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-white mb-4">Du bruker innholdet lenge</h2>
                <p>
                  En produksjonsdag gir deg bilder og videoer du kan bruke i mange måneder. På nettsiden, i annonser, i sosiale medier og i tilbud til kunder. Regnet per bruk er det svært kostnadseffektivt sammenlignet med alternativet, som for mange er å ikke ha noe brukbart innhold i det hele tatt.
                </p>
                <p className="mt-4">
                  Hos Cut O' Clock i Ålesund gikk vi fra én produksjonsdag til innhold som holdt Instagram aktiv i over en måned. Det er den typen avkastning vi sikter mot for alle vi jobber med.
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
