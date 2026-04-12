import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicePageLayout from "../../components/ServicePageLayout";
import { kristiansund } from "../_locations/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nettside i Kristiansund | Webdesign – Elevera",
  description:
    "Vi lager profesjonelle nettsider for bedrifter i Kristiansund. Moderne design, rask lasting og bygget for å tiltrekke kunder fra Nordmøre og hele Norge.",
  alternates: { canonical: "https://elevera.no/tjenester/nettside-kristiansund" },
  openGraph: {
    title: "Nettside i Kristiansund – Elevera",
    description: "Webdesign og utvikling for bedrifter i Kristiansund. Nettsider som synes, selger og rangerer.",
    url: "https://elevera.no/tjenester/nettside-kristiansund",
  },
};

const faqs = [
  {
    q: "Kan dere lage nettside for bedrifter i Kristiansund?",
    a: `Ja! Vi samarbeider med bedrifter i hele Nordmøre. Vi holder til i Ålesund (${kristiansund.distance}), men alt foregår digitalt — videomøter, delt designskisse og rask kommunikasjon.`,
  },
  {
    q: "Hva slags nettsider lager dere?",
    a: "Alt fra enkle bedriftssider til mer avanserte løsninger med booking, nettbutikk eller kundeportal. Vi tilpasser alltid løsningen til ditt behov og budsjett.",
  },
  {
    q: "Får jeg eierskap over nettsiden?",
    a: "Selvfølgelig. Du eier alt — design, kode og innhold. Vi låser deg aldri inne i en plattform du ikke kan ta med deg videre.",
  },
  {
    q: "Hjelper dere med tekst og bilder også?",
    a: "Ja. Vi hjelper med copywriting tilpasset din målgruppe, og kan sette opp profesjonelle stockbilder eller koordinere fotografering lokalt i Kristiansund.",
  },
];

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nettside Kristiansund",
  serviceType: "Web Design and Development",
  description: "Webdesign og utvikling for bedrifter i Kristiansund. Moderne nettsider bygget for konvertering og synlighet.",
  provider: {
    "@type": "LocalBusiness",
    name: "Elevera",
    url: "https://elevera.no",
    telephone: "+4794974165",
    address: { "@type": "PostalAddress", addressLocality: "Ålesund", addressCountry: "NO" },
  },
  areaServed: { "@type": "City", name: "Kristiansund" },
  url: "https://elevera.no/tjenester/nettside-kristiansund",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://elevera.no/tjenester" },
    { "@type": "ListItem", position: 3, name: "Nettside i Kristiansund", item: "https://elevera.no/tjenester/nettside-kristiansund" },
  ],
};

export default function NettsideKristiansundPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <main className="min-h-screen" style={{ background: "#131312" }}>
        <Navbar />
        <ServicePageLayout
          badge={`Nettside — ${kristiansund.name}`}
          title="Profesjonell"
          titleAccent="nettside"
          titleSuffix={`i ${kristiansund.name}`}
          description={`${kristiansund.localRef} har et næringsliv som fortjener digital synlighet. ${kristiansund.marketNote} Vi bygger nettsider som hjelper deg å skille deg ut — og bli funnet.`}
          includedLabel="Tjenester"
          includedHeading="Hva vi tilbyr"
          includedSubtext="Tilpasset dine behov og din bedrift."
          included={[
            "Skreddersydd design — reflekterer din merkevare og appellerer til kundene dine",
            "Mobiltilpasset — perfekt på telefon, nettbrett og desktop",
            "Ytelsesoptimalisert — rask lasting som holder besøkende på siden",
            "Søkemotoroptimalisert grunnlag — klar til å rangere lokalt",
            "Konverteringsfokusert struktur — CTA-er som driver handling",
            "Innholdsstøtte — vi hjelper med tekst som treffer din målgruppe",
            "Integrasjoner — booking, skjema, chat eller det du trenger",
            "Driftsavtale — trygg hosting, backup og oppdateringer",
          ]}
          whyTitle="Hvorfor trenger din bedrift i Kristiansund en ny nettside?"
          whyText={[
            `${kristiansund.marketNote} Men mange bedrifter på Nordmøre har utdaterte nettsider som verken imponerer besøkende eller Google. Det betyr tapte kunder — hver eneste dag.`,
            `En moderne nettside bygget for konvertering gir deg en konkret fordel. Spesielt i Kristiansund, der konkurransen digitalt fortsatt er overkommelig, kan en god nettside alene gi deg et stort forsprang.`,
          ]}
          stats={[
            { stat: "94%", label: "Av førsteinntrykk er designrelatert" },
            { stat: "88%", label: "Kommer aldri tilbake etter en dårlig opplevelse" },
            { stat: "70%", label: "Av lokale søk fører til handling innen én dag" },
            { stat: "2–4 uker", label: "Fra oppstart til lansering" },
          ]}
          faqs={faqs}
          ctaHeading="Klar for en ny nettside?"
        />

        {/* Andre tjenester i Kristiansund */}
        <section className="mx-auto max-w-2xl px-6 pb-20 text-center">
          <h2 className="mb-4 text-lg font-semibold" style={{ color: "#e5e2de" }}>
            Andre tjenester i {kristiansund.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tjenester/annonsering-kristiansund" className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-white/5" style={{ borderColor: "rgba(77,70,53,0.3)", color: "#99907c" }}>
              Annonsering i Kristiansund
            </Link>
            <Link href="/tjenester/sosiale-medier-kristiansund" className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-white/5" style={{ borderColor: "rgba(77,70,53,0.3)", color: "#99907c" }}>
              Sosiale medier i Kristiansund
            </Link>
            <Link href="/tjenester/seo-kristiansund" className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-white/5" style={{ borderColor: "rgba(77,70,53,0.3)", color: "#99907c" }}>
              SEO i Kristiansund
            </Link>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
