import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "Nettside i Ålesund | Webutvikling & Webdesign – Elevera",
  description:
    "Profesjonell nettside i Ålesund. Vi designer og utvikler raske, konverterende nettsider og nettbutikker for bedrifter i Ålesund og omegn.",
  alternates: { canonical: "https://elevera.no/tjenester/nettside-alesund" },
  openGraph: {
    title: "Nettside i Ålesund – Elevera",
    description: "Profesjonell webutvikling og webdesign for bedrifter i Ålesund og omegn.",
    url: "https://elevera.no/tjenester/nettside-alesund",
  },
};

const included = [
  "Moderne og responsivt webdesign",
  "Rask lasting på alle enheter",
  "SEO-optimalisert fra bunn",
  "Eget foto & video til siden",
  "SSL-sertifikat og sikkerhet",
  "Google Analytics integrasjon",
  "Løpende support og vedlikehold",
];

const faqs = [
  {
    q: "Hvor lang tid tar det å lage en nettside?",
    a: "En standard bedriftsnettside tar 2–4 uker fra oppstart til lansering, avhengig av innhold og kompleksitet.",
  },
  {
    q: "Får jeg profesjonelt innhold til siden?",
    a: "Ja! Vi produserer foto og video til nettsiden din som en del av leveransen – slik at du får et helhetlig uttrykk som faktisk konverterer besøkende til kunder.",
  },
  {
    q: "Hva koster en nettside i Ålesund?",
    a: "Nettside inngår i våre månedlige pakker fra 3 490 kr/mnd, eller som et enkeltstående prosjekt. Kontakt oss for et skreddersydd tilbud.",
  },
];

export default function NettsidesPage() {
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
              nettside
            </span>{" "}
            i Ålesund
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
            Vi designer og utvikler raske, konverterende nettsider som rangerer høyt på
            Google og gir din bedrift i Ålesund en sterk digital tilstedeværelse.
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
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Hva er inkludert?</h2>
            <p className="mt-4 text-white/50">Alt du trenger for en profesjonell nettside.</p>
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

      {/* Why */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Hvorfor investere i en profesjonell nettside?
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Din nettside er bedriftens viktigste salgsverktøy. En treg, utdatert eller
                  uprofesjonell nettside koster deg kunder hver eneste dag.
                </p>
                <p>
                  Vi bygger nettsider med Next.js – teknologien bak noen av verdens raskeste
                  nettsider – slik at du rangerer høyere på Google og gir besøkende en
                  opplevelse som konverterer.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "53%", label: "Forlater siden hvis den bruker over 3 sekunder å laste" },
                { stat: "75%", label: "Bedømmer bedriftens troverdighet på nettsidedesign" },
                { stat: "200%", label: "Bedre konvertering med mobiltilpasset nettside" },
                { stat: "Top 3", label: "Mål for Google-rangering med riktig SEO" },
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
            Vanlige spørsmål om nettside
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

      <PageCTA heading="Klar for en ny nettside?" />

      <Footer />
    </main>
  );
}
