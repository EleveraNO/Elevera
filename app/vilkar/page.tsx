import type { Metadata } from "next";
import HomeNav from "../components/home/HomeNav";
import HomeFooter from "../components/home/HomeFooter";
import "../components/legal.css";

export const metadata: Metadata = {
  title: "Vilkår for bruk – Elevera",
  description: "Les Eleveras vilkår for bruk av nettstedet og tjenester.",
  alternates: { canonical: "https://elevera.no/vilkar" },
  robots: { index: false, follow: false },
};

export default function Vilkar() {
  return (
    <>
      <HomeNav />
      <main className="legal-page">
        <div className="legal-inner">
          <span className="legal-label">Juridisk</span>
          <h1>Vilkår for bruk</h1>
          <p className="legal-meta">Sist oppdatert: april 2026</p>

          <section className="legal-section">
            <h2>1. Om disse vilkårene</h2>
            <p>
              Ved å bruke elevera.no aksepterer du disse vilkårene. Elevera
              forbeholder seg retten til å oppdatere vilkårene ved behov.
              Fortsatt bruk av nettstedet etter endringer anses som aksept av
              de oppdaterte vilkårene.
            </p>
          </section>

          <section className="legal-section">
            <h2>2. Tjenester</h2>
            <p>
              Elevera tilbyr digitale tjenester inkludert webutvikling, foto og
              video, og betalt annonsering. Omfang, pris og leveringstid
              avtales skriftlig per oppdrag. Elevera forbeholder seg retten til
              å avvise oppdrag uten begrunnelse.
            </p>
          </section>

          <section className="legal-section">
            <h2>3. Betaling</h2>
            <p>
              Betaling skjer i henhold til avtalt faktureringsplan. Forfalt
              faktura som ikke betales innen fristen kan medføre stans i
              leveransen. Ved forsinket betaling forbeholder Elevera seg retten
              til å kreve forsinkelsesrente.
            </p>
          </section>

          <section className="legal-section">
            <h2>4. Immaterielle rettigheter</h2>
            <p>
              Alt innhold på elevera.no, inkludert tekst, bilder og design,
              tilhører Elevera og er beskyttet av opphavsretten. Innholdet kan
              ikke kopieres eller brukes uten skriftlig tillatelse. Når et
              oppdrag er fullbetalt, overdras rettighetene til levert materiale
              til kunden.
            </p>
          </section>

          <section className="legal-section">
            <h2>5. Ansvarsbegrensning</h2>
            <p>
              Elevera er ikke ansvarlig for indirekte tap eller følgeskader som
              følge av bruk av våre tjenester. Vårt ansvar er under enhver
              omstendighet begrenset til verdien av det aktuelle oppdraget.
            </p>
          </section>

          <section className="legal-section">
            <h2>6. Kontakt</h2>
            <p>
              Spørsmål om vilkårene kan rettes til{" "}
              <a href="mailto:tverbakk@elevera.no">tverbakk@elevera.no</a>.
            </p>
          </section>
        </div>
      </main>
      <HomeFooter />
    </>
  );
}
