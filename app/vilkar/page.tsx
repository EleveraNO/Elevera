import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Vilkår for bruk – Elevera",
  description: "Les Eleveras vilkår for bruk av nettstedet og tjenester.",
  alternates: { canonical: "https://elevera.no/vilkar" },
  robots: { index: false, follow: false },
};

export default function Vilkar() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-4xl font-bold mb-2">Vilkår for bruk</h1>
          <p className="text-white/40 text-sm mb-12">Sist oppdatert: mars 2025</p>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">1. Om disse vilkårene</h2>
            <p className="text-white/60 leading-relaxed">
              Ved å bruke elevera.no aksepterer du disse vilkårene. Elevera forbeholder seg retten
              til å oppdatere vilkårene ved behov. Fortsatt bruk av nettstedet etter endringer
              anses som aksept av de oppdaterte vilkårene.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">2. Tjenester</h2>
            <p className="text-white/60 leading-relaxed">
              Elevera tilbyr digitale tjenester inkludert webutvikling, foto og video, og betalt
              annonsering. Omfang, pris og leveringstid avtales skriftlig per oppdrag. Elevera
              forbeholder seg retten til å avvise oppdrag uten begrunnelse.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">3. Betaling</h2>
            <p className="text-white/60 leading-relaxed">
              Betaling skjer i henhold til avtalt faktureringsplan. Forfalt faktura som ikke
              betales innen fristen kan medføre stans i leveransen. Ved forsinket betaling
              forbeholder Elevera seg retten til å kreve forsinkelsesrente.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">4. Immaterielle rettigheter</h2>
            <p className="text-white/60 leading-relaxed">
              Alt innhold på elevera.no, inkludert tekst, bilder og design, tilhører Elevera og
              er beskyttet av opphavsretten. Innholdet kan ikke kopieres eller brukes uten
              skriftlig tillatelse. Når et oppdrag er fullbetalt, overdras rettighetene til
              levert materiale til kunden.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">5. Ansvarsbegrensning</h2>
            <p className="text-white/60 leading-relaxed">
              Elevera er ikke ansvarlig for indirekte tap eller følgeskader som følge av bruk av
              våre tjenester. Vårt ansvar er under enhver omstendighet begrenset til verdien av
              det aktuelle oppdraget.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-xl font-semibold mb-3">6. Kontakt</h2>
            <p className="text-white/60 leading-relaxed">
              Spørsmål om vilkårene kan rettes til{" "}
              <a href="mailto:tverbakk@elevera.no" className="text-[#7c3aed] hover:underline">
                tverbakk@elevera.no
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
