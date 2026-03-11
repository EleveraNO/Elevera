import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Fotografering i Ålesund | Bedriftsfoto & Produktfoto – Elevera",
  description:
    "Profesjonell fotografering i Ålesund for bedrifter. Vi tar bedriftsfoto, produktfoto og innholdsbilder som bygger tillit og selger mer.",
  alternates: { canonical: "https://elevera.no/tjenester/fotografering-alesund" },
  openGraph: {
    title: "Fotografering i Ålesund – Elevera",
    description: "Profesjonell bedriftsfotografering og produktfoto i Ålesund og omegn.",
    url: "https://elevera.no/tjenester/fotografering-alesund",
  },
};

const included = [
  "Bedriftsfoto og teambilder",
  "Produktfotografering",
  "Portrettfoto av ansatte",
  "Innholdsbilder til nettside og sosiale medier",
  "Bilder til Google Business Profile",
  "Redigering og bildebehandling",
  "Levering i høy oppløsning",
];

const faqs = [
  {
    q: "Hvor foregår fotograferingen?",
    a: "Vi fotograferer hos deg, på din arbeidsplass eller på location i Ålesund og omegn – alt etter hva som gir best resultat for din bedrift.",
  },
  {
    q: "Hva koster bedriftsfotografering i Ålesund?",
    a: "Fotografering inngår i våre månedlige pakker, eller kan bestilles som et enkeltstående oppdrag. Ta kontakt for et uforpliktende tilbud tilpasset dine behov.",
  },
  {
    q: "Hvor mange bilder får jeg?",
    a: "Det varierer etter type oppdrag, men du får alltid et solid utvalg ferdig redigerte bilder klare for bruk på nett, sosiale medier og trykk.",
  },
];

export default function FotograferingPage() {
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
              fotografering
            </span>{" "}
            i Ålesund
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
            Bilder som representerer bedriften din på best mulig måte. Vi tar profesjonelle
            bedriftsfoto, produktbilder og innholdsbilder som bygger tillit og selger mer.
          </p>
          <a
            href="/#kontakt"
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
            <p className="mt-4 text-white/50">Alt du trenger for et profesjonelt visuelt inntrykk.</p>
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

      {/* Why professional photos */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Hvorfor profesjonelle bilder?
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Førsteinntrykket teller. Potensielle kunder vurderer bedriften din på
                  millisekunder basert på det visuelle inntrykket. Profesjonelle bilder
                  signaliserer kvalitet, pålitelighet og seriøsitet.
                </p>
                <p>
                  Som lokal fotograf i Ålesund kjenner vi omgivelsene og vet hvordan vi
                  best presenterer din bedrift – enten det er ute i naturen, i bybildet
                  eller i dine egne lokaler.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "94%", label: "Av førsteinntrykk er basert på visuelt innhold" },
                { stat: "67%", label: "Av kunder sier bildekvalitet påvirker kjøpsbeslutning" },
                { stat: "3x", label: "Mer engasjement med profesjonelle bilder" },
                { stat: "40%", label: "Høyere konvertering med kvalitetsbilder" },
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
            Vanlige spørsmål om fotografering
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
            <h2 className="mb-4 text-3xl font-bold text-white">Klar for profesjonelle bilder?</h2>
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
