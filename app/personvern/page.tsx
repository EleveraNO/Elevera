import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Personvernerklæring – Elevera",
  description: "Les om hvordan Elevera behandler personopplysninger og bruker informasjonskapsler.",
  alternates: { canonical: "https://elevera.no/personvern" },
  robots: { index: false, follow: false },
};

export default function Personvern() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold mb-2">Personvernerklæring</h1>
          <p className="text-white/40 text-sm mb-12">Sist oppdatert: mars 2025</p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">1. Behandlingsansvarlig</h2>
            <p className="text-white/60 leading-relaxed">
              Elevera er behandlingsansvarlig for personopplysninger som samles inn via dette nettstedet.
              Har du spørsmål, ta kontakt på{" "}
              <a href="mailto:hei@elevera.no" className="text-[#7c3aed] hover:underline">
                hei@elevera.no
              </a>
              .
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">2. Hvilke opplysninger samler vi inn?</h2>
            <p className="text-white/60 leading-relaxed mb-3">
              Vi samler kun inn opplysninger du selv oppgir, for eksempel navn og e-postadresse via
              kontaktskjema eller bookingforespørsel.
            </p>
            <p className="text-white/60 leading-relaxed">
              Dersom du samtykker til informasjonskapsler, bruker vi Google Analytics for å analysere
              anonym trafikk på nettstedet (sidevisninger, enhet, kilde). Ingen personidentifiserbare
              opplysninger deles med Google Analytics.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">3. Formål og rettslig grunnlag</h2>
            <ul className="text-white/60 leading-relaxed space-y-2 list-disc list-inside">
              <li>Besvare henvendelser – grunnlag: berettiget interesse</li>
              <li>Analysere nettstedstrafikk – grunnlag: samtykke</li>
            </ul>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">4. Informasjonskapsler (cookies)</h2>
            <p className="text-white/60 leading-relaxed">
              Vi bruker kun nødvendige informasjonskapsler og, ved samtykke, analysecookies fra Google
              Analytics. Du kan til enhver tid trekke samtykket tilbake ved å slette
              informasjonskapslene i nettleseren din.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">5. Dine rettigheter</h2>
            <p className="text-white/60 leading-relaxed">
              Du har rett til innsyn, retting og sletting av dine personopplysninger. Ta kontakt på{" "}
              <a href="mailto:hei@elevera.no" className="text-[#7c3aed] hover:underline">
                hei@elevera.no
              </a>{" "}
              for å utøve dine rettigheter. Du kan også klage til{" "}
              <a
                href="https://www.datatilsynet.no"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#7c3aed] hover:underline"
              >
                Datatilsynet
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
