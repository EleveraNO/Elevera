import type { Metadata } from "next";
import HomeNav from "../components/home/HomeNav";
import HomeFooter from "../components/home/HomeFooter";
import "../components/legal.css";

export const metadata: Metadata = {
  title: "Personvernerklæring – Elevera",
  description:
    "Les om hvordan Elevera behandler personopplysninger og bruker informasjonskapsler.",
  alternates: { canonical: "https://elevera.no/personvern" },
  robots: { index: false, follow: false },
};

export default function Personvern() {
  return (
    <>
      <HomeNav />
      <main className="legal-page">
        <div className="legal-inner">
          <span className="legal-label">Juridisk</span>
          <h1>Personvernerklæring</h1>
          <p className="legal-meta">Sist oppdatert: april 2026</p>

          <section className="legal-section">
            <h2>1. Behandlingsansvarlig</h2>
            <p>
              Elevera er behandlingsansvarlig for personopplysninger som samles
              inn via dette nettstedet. Har du spørsmål, ta kontakt på{" "}
              <a href="mailto:tverbakk@elevera.no">tverbakk@elevera.no</a>.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Hvilke opplysninger samler vi inn?</h2>
            <p>
              Vi samler kun inn opplysninger du selv oppgir, for eksempel navn
              og e-postadresse via kontaktskjema eller bookingforespørsel.
            </p>
            <p>
              Dersom du samtykker til informasjonskapsler, bruker vi Google
              Analytics for å analysere anonym trafikk på nettstedet
              (sidevisninger, enhet, kilde). Ingen personidentifiserbare
              opplysninger deles med Google Analytics.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Formål og rettslig grunnlag</h2>
            <ul>
              <li>Besvare henvendelser, grunnlag: berettiget interesse</li>
              <li>Analysere nettstedstrafikk, grunnlag: samtykke</li>
            </ul>
          </section>

          <section className="legal-section">
            <h2>4. Informasjonskapsler (cookies)</h2>
            <p>
              Vi bruker kun nødvendige informasjonskapsler og, ved samtykke,
              analysecookies fra Google Analytics. Du kan til enhver tid trekke
              samtykket tilbake ved å slette informasjonskapslene i nettleseren
              din.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Dine rettigheter</h2>
            <p>
              Du har rett til innsyn, retting og sletting av dine
              personopplysninger. Ta kontakt på{" "}
              <a href="mailto:tverbakk@elevera.no">tverbakk@elevera.no</a> for
              å utøve dine rettigheter. Du kan også klage til{" "}
              <a
                href="https://www.datatilsynet.no"
                target="_blank"
                rel="noopener noreferrer"
              >
                Datatilsynet
              </a>
              .
            </p>
          </section>
        </div>
      </main>
      <HomeFooter />
    </>
  );
}
