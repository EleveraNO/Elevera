import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Foto & Video i Ålesund | Fotografering og Videoproduksjon – Elevera",
  description:
    "Profesjonell foto og videoproduksjon i Ålesund. Vi produserer bedriftsfoto, produktfoto, dronefoto, reklamefilm og innhold til sosiale medier for bedrifter i Ålesund og omegn.",
  alternates: { canonical: "https://elevera.no/tjenester/foto-og-video-alesund" },
  openGraph: {
    title: "Foto & Video i Ålesund – Elevera",
    description: "Profesjonell fotografering og videoproduksjon for bedrifter i Ålesund og omegn.",
    url: "https://elevera.no/tjenester/foto-og-video-alesund",
  },
};

const fotoServices = [
  "Bedriftsfoto og teambilder",
  "Produktfotografering",
  "Portrettfoto av ansatte",
  "Dronefoto og luftfoto",
  "Innholdsbilder til nettside og sosiale medier",
  "Bilder til Google Business Profile",
];

const videoServices = [
  "Reklamevideo for nett og sosiale medier",
  "Produktvideo og demonstrasjonsfilm",
  "Bedriftspresentasjon og profilfilm",
  "Dronevideo og luftopptak",
  "Kortformat video for Instagram og TikTok",
  "Manus, konseptutvikling og etterarbeid",
];

const faqs = [
  {
    q: "Kan jeg bestille både foto og video i samme oppdrag?",
    a: "Ja, og det anbefaler vi! Å kombinere foto og video i én produksjonsdag er kostnadseffektivt og gir et helhetlig visuelt uttrykk for merkevaren din.",
  },
  {
    q: "Tilbyr dere dronefoto og dronevideo?",
    a: "Ja, vi tilbyr profesjonelle drone-opptak som gir spektakulære luftperspektiver av din bedrift, eiendom eller lokasjon i Ålesund og omegn.",
  },
  {
    q: "Hvor lang tid tar en produksjon?",
    a: "En kombinert foto- og videoproduksjon tar vanligvis én fotograferingsdag, pluss 1–2 uker etterarbeid. Enkle fotojobber kan leveres raskere.",
  },
  {
    q: "Hva koster foto og video i Ålesund?",
    a: "Foto og video inngår i våre månedlige pakker, eller kan bestilles som enkeltstående oppdrag. Ta kontakt for et uforpliktende tilbud tilpasset dine behov.",
  },
];

export default function FotoOgVideoPage() {
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
              foto & video
            </span>{" "}
            i Ålesund
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
            Vi produserer profesjonelt visuelt innhold som stopper scrollingen, bygger
            merkevaren din og konverterer seere til kunder – alt fra én partner i Ålesund.
          </p>
          <a
            href="/#kontakt"
            className="rounded-full bg-[#7c3aed] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:bg-[#6d28d9] hover:-translate-y-0.5"
          >
            Få et gratis tilbud
          </a>
        </div>
      </section>

      {/* Foto & Video seksjoner */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 md:grid-cols-2">

            {/* Foto */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#7c3aed]/20 bg-[#7c3aed]/10">
                <svg className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h2 className="mb-2 text-xl font-bold text-white">Fotografering</h2>
              <p className="mb-6 text-sm leading-relaxed text-white/50">
                Profesjonelle bilder som representerer bedriften din på best mulig måte –
                inkludert dronefoto fra luften.
              </p>
              <ul className="space-y-2">
                {fotoServices.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 flex-shrink-0 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Video */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[#7c3aed]/20 bg-[#7c3aed]/10">
                <svg className="h-6 w-6 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.68v6.64a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                </svg>
              </div>
              <h2 className="mb-2 text-xl font-bold text-white">Videoproduksjon</h2>
              <p className="mb-6 text-sm leading-relaxed text-white/50">
                Videoer som stopper scrollingen og konverterer – fra reklamfilm til
                dronevideo og kortformat innhold.
              </p>
              <ul className="space-y-2">
                {videoServices.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <svg className="h-4 w-4 flex-shrink-0 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-white/70">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Hvorfor velge Elevera for foto og video?
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Som lokalt byrå i Ålesund kjenner vi omgivelsene, lyset og
                  mulighetene regionen byr på. Vi vet hvordan vi best utnytter
                  de spektakulære omgivelsene i Ålesund og på Sunnmøre.
                </p>
                <p>
                  Å kombinere foto og video i én produksjon er kostnadseffektivt
                  og gir et helhetlig visuelt uttrykk – perfekt for bedrifter som
                  vil ha alt innhold klart på én gang.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "1 dag", label: "Kan gi deg alt innholdet du trenger" },
                { stat: "80%", label: "Høyere konvertering med profesjonelt innhold" },
                { stat: "3x", label: "Mer engasjement med video vs. bilder" },
                { stat: "100%", label: "Lokalt byrå – vi kjenner Ålesund" },
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
            Vanlige spørsmål
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
              Klar for profesjonelt innhold?
            </h2>
            <p className="mb-8 text-white/60">
              Book et gratis møte og hør hva vi kan gjøre for din bedrift i Ålesund.
            </p>
            <a
              href="/#kontakt"
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
