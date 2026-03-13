import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "Annonsering i Ålesund | Facebook Ads & Google Ads – Elevera",
  description:
    "Profesjonell digital annonsering i Ålesund. Vi administrerer Facebook Ads, Instagram Ads og Google Ads som gir målbare resultater for bedrifter i Ålesund og omegn.",
  alternates: { canonical: "https://elevera.no/tjenester/annonsering-alesund" },
  openGraph: {
    title: "Digital annonsering i Ålesund – Elevera",
    description: "Facebook Ads, Instagram Ads og Google Ads for bedrifter i Ålesund og omegn.",
    url: "https://elevera.no/tjenester/annonsering-alesund",
  },
};

const included = [
  "Facebook og Instagram annonsering",
  "Google Ads og Shopping",
  "Målgruppeanalyse og segmentering",
  "Annonsekreativer og tekst",
  "A/B-testing av annonser",
  "Løpende optimalisering",
  "Månedlig rapport med resultater",
];

const faqs = [
  {
    q: "Hvor mye bør jeg bruke på annonsering?",
    a: "Vi anbefaler et minimumsbudsjett på 3 000–5 000 kr/mnd for å se gode resultater. Dette er annonsekostnadene som kommer i tillegg til vår administrasjonspris.",
  },
  {
    q: "Hvor raskt ser jeg resultater?",
    a: "De første resultatene ser du gjerne innen 1–2 uker, men vi trenger 4–8 uker for å optimalisere kampanjene fullt ut og skalere det som fungerer.",
  },
  {
    q: "Hva er forskjellen på Facebook Ads og Google Ads?",
    a: "Facebook Ads er bra for å nå folk som ikke aktivt søker etter deg, men som passer målgruppen din. Google Ads fanger opp folk som aktivt søker etter det du tilbyr. Vi anbefaler ofte en kombinasjon.",
  },
];

export default function AnnonseringPage() {
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
            Digital{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#60a5fa] bg-clip-text text-transparent">
              annonsering
            </span>{" "}
            i Ålesund
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
            Vi administrerer Facebook Ads, Instagram Ads og Google Ads som faktisk gir
            avkastning – datadrevet og optimalisert for bedrifter i Ålesund og omegn.
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
            <p className="mt-4 text-white/50">Alt du trenger for lønnsom digital annonsering.</p>
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
                Hvorfor profesjonell annonsering?
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Mange bedrifter kaster bort penger på annonser fordi de ikke har riktig
                  målretting, kreativt eller strategi. Vi sørger for at hver krone du
                  bruker jobber for deg.
                </p>
                <p>
                  Som lokalt byrå i Ålesund kjenner vi markedet og målgruppene i regionen.
                  Det gir oss et fortrinn når vi setter opp annonsering som treffer riktig
                  person til riktig tid.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "2,5x", label: "Gjennomsnittlig ROAS for våre kunder" },
                { stat: "4,2mrd", label: "Nordmenn er aktive på sosiale medier daglig" },
                { stat: "63%", label: "Av bedrifter øker annonsebudsjettet hvert år" },
                { stat: "Top 3", label: "Google-annonser vises øverst i søkeresultatene" },
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
            Vanlige spørsmål om annonsering
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

      <PageCTA heading="Klar for lønnsom annonsering?" />

      <Footer />
    </main>
  );
}
