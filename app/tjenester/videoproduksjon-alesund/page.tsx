import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Videoproduksjon i Ålesund | Reklamevideo & Innhold – Elevera",
  description:
    "Profesjonell videoproduksjon i Ålesund. Vi produserer reklamefilmer, produktvideoer og innhold til sosiale medier som stopper scrollingen og skaper resultater.",
  alternates: { canonical: "https://elevera.no/tjenester/videoproduksjon-alesund" },
  openGraph: {
    title: "Videoproduksjon i Ålesund – Elevera",
    description: "Profesjonell videoproduksjon for bedrifter i Ålesund og omegn.",
    url: "https://elevera.no/tjenester/videoproduksjon-alesund",
  },
};

const included = [
  "Reklamevideo for nett og sosiale medier",
  "Produktvideo og demonstrasjonsfilm",
  "Bedriftspresentasjon og profilfilm",
  "Kortformat video for Instagram og TikTok",
  "Dronevideo og luftopptak",
  "Manus og konseptutvikling",
  "Profesjonell lyd og musikk",
  "Fargekorrigering og etterarbeid",
];

const faqs = [
  {
    q: "Hvor lang tid tar en videoproduksjon?",
    a: "En standard reklamevideo tar vanligvis 1–2 uker fra oppstart til ferdig produkt, avhengig av kompleksitet og omfang.",
  },
  {
    q: "Hva koster videoproduksjon i Ålesund?",
    a: "Prisen varierer etter type og lengde. Vi tilbyr videoproduksjon som del av våre månedlige pakker, eller som enkeltstående prosjekter. Ta kontakt for et uforpliktende tilbud.",
  },
  {
    q: "Kan dere hjelpe med innhold til sosiale medier?",
    a: "Ja! Vi spesialiserer oss på kortformat videoinnhold tilpasset Instagram Reels, TikTok og Facebook – formater som faktisk gir rekkevidde.",
  },
];

export default function VideoProduksjonPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/20 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#7c3aed]" />
            <span className="text-sm font-medium text-[#a78bfa]">Ålesund og omegn</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Profesjonell{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#60a5fa] bg-clip-text text-transparent">
              videoproduksjon
            </span>{" "}
            i Ålesund
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
            Vi produserer videoer som stopper scrollingen, bygger merkevaren din og
            konverterer seere til kunder – alt fra én partner i Ålesund.
          </p>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY" target="_blank" rel="noopener noreferrer"
            className="rounded-full bg-[#7c3aed] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:bg-[#6d28d9] hover:-translate-y-0.5"
          >
            Få et gratis tilbud
          </a>
        </div>
      </section>

      {/* What's included */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Hva er inkludert?
            </h2>
            <p className="mt-4 text-white/50">
              Alt du trenger for å produsere profesjonelt videoinnhold.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                <svg className="h-5 w-5 flex-shrink-0 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why video */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Hvorfor investere i videoproduksjon?
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Video er det mest engasjerende innholdsformatet på nett. Bedrifter som bruker
                  profesjonell video i markedsføringen sin opplever høyere engasjement, flere
                  leads og sterkere merkevaregjenkjenning.
                </p>
                <p>
                  Som lokalt byrå i Ålesund kjenner vi markedet og vet hva som resonerer
                  med målgruppen din i regionen. Vi produserer innhold som faktisk fungerer –
                  ikke bare ser bra ut. Vi tilbyr også dronevideo og luftopptak for spektakulære
                  bilder av Ålesund og omegn.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "80%", label: "Høyere konvertering med video på landingssider" },
                { stat: "3x", label: "Mer engasjement enn bilder på sosiale medier" },
                { stat: "93%", label: "Av markedsførere sier video gir god ROI" },
                { stat: "1min", label: "Video er verdt 1,8 millioner ord" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="text-2xl font-bold text-[#7c3aed] mb-1">{item.stat}</div>
                  <div className="text-xs text-white/50 leading-relaxed">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">
            Vanlige spørsmål om videoproduksjon
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
                <h3 className="mb-2 font-semibold text-white">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-white/50">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-3xl border border-[#7c3aed]/30 bg-[#7c3aed]/10 p-12">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Klar for profesjonell video?
            </h2>
            <p className="mb-8 text-white/60">
              Book et gratis møte og hør hva vi kan gjøre for din bedrift i Ålesund.
            </p>
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY" target="_blank" rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#7c3aed] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:bg-[#6d28d9]"
            >
              Book gratis møte
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
