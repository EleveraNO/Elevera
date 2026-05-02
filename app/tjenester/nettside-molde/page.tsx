import type { Metadata } from "next";
import HomeNav from "../../components/home/HomeNav";
import HomeFooter from "../../components/home/HomeFooter";
import ServicePageLayout from "../../components/ServicePageLayout";
import { molde } from "../_locations/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nettside i Molde | Webdesign & Utvikling – Elevera",
  description:
    "Profesjonell nettside for bedrifter i Molde. Vi designer og utvikler nettsider som konverterer besøkende til kunder, tilpasset ditt marked i Romsdal.",
  alternates: { canonical: "https://elevera.no/tjenester/nettside-molde" },
  openGraph: {
    title: "Nettside i Molde – Elevera",
    description: "Moderne nettsider for bedrifter i Molde og Romsdal. Rask, mobilvennlig og bygget for å konvertere.",
    url: "https://elevera.no/tjenester/nettside-molde",
  },
};

const faqs = [
  {
    q: "Kan dere lage nettside for bedrifter i Molde?",
    a: `Absolutt. Vi jobber med bedrifter i hele Møre og Romsdal, inkludert Molde. Selv om vi sitter i Ålesund (${molde.distance}), gjør vi alt digitalt, med videomøter, delte skisser og tett dialog hele veien.`,
  },
  {
    q: "Hvor lang tid tar det å lage en nettside?",
    a: "En typisk bedriftsnettside tar 2–4 uker fra oppstart til lansering. Mer komplekse løsninger med nettbutikk eller booking kan ta 4–6 uker. Vi holder deg oppdatert underveis.",
  },
  {
    q: "Hva koster en nettside?",
    a: "Det avhenger av omfanget. En enkel, profesjonell nettside starter fra 15 000 kr. Vi gir alltid et fast pristilbud etter en gratis samtale, ingen overraskelser.",
  },
  {
    q: "Kan dere hjelpe med drift og oppdateringer etterpå?",
    a: "Ja. Vi tilbyr løpende driftsavtaler som inkluderer hosting, sikkerhetskopier, oppdateringer og innholdsendringer. Du slipper å tenke på det tekniske.",
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
  name: "Nettside Molde",
  serviceType: "Web Design and Development",
  description: "Profesjonell webdesign og utvikling for bedrifter i Molde. Moderne, raske nettsider som konverterer.",
  provider: {
    "@type": "LocalBusiness",
    name: "Elevera",
    url: "https://elevera.no",
    telephone: "+4794974165",
    address: { "@type": "PostalAddress", addressLocality: "Ålesund", addressCountry: "NO" },
  },
  areaServed: { "@type": "City", name: "Molde" },
  url: "https://elevera.no/tjenester/nettside-molde",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://elevera.no/tjenester" },
    { "@type": "ListItem", position: 3, name: "Nettside i Molde", item: "https://elevera.no/tjenester/nettside-molde" },
  ],
};

export default function NettsideMoldePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <HomeNav />
      <main>
        <ServicePageLayout
          badge={`Nettside · ${molde.name}`}
          title="Profesjonell"
          titleAccent="nettside"
          titleSuffix={`i ${molde.name}`}
          description={`${molde.localRef} fortjener nettsider som gjør inntrykk. ${molde.marketNote} Vi bygger nettsider som gir deg et forsprang, uansett bransje.`}
          includedLabel="Tjenester"
          includedHeading="Hva vi tilbyr"
          includedSubtext="Tilpasset dine behov og din bedrift."
          included={[
            "Eget design tilpasset din merkevare og ditt marked i Romsdal",
            "Mobilvennlig og responsivt, ser bra ut på alle enheter",
            "Rask lasting, optimalisert ytelse som Google belønner",
            "SEO-grunnlag, bygget for å bli funnet i lokale søk",
            "Innholdsstrategi, vi hjelper deg skrive tekst som selger",
            "Kontaktskjema og CTA, gjør besøkende til henvendelser",
            "Analyse og sporing, Google Analytics ferdig oppsatt",
            "Løpende support, vi er tilgjengelige etter lansering",
          ]}
          whyTitle="Hvorfor trenger bedrifter i Molde en bedre nettside?"
          whyText={[
            `${molde.marketNote} Men mange bedrifter i Molde har fortsatt nettsider som ble laget for fem år siden, trege, umoderne og vanskelige å finne på Google.`,
            `En profesjonell nettside er ikke bare et visittkort. Den er din beste selger, tilgjengelig 24/7, også for kunder som søker «tjeneste + Molde» på mobilen. Vi lager nettsider som faktisk konverterer.`,
          ]}
          stats={[
            { stat: "75%", label: "Dømmer troverdigheten din basert på nettsiden" },
            { stat: "53%", label: "Forlater en side som bruker over 3 sekunder på å laste" },
            { stat: "70%", label: "Av lokale søk fører til handling innen 24 timer" },
            { stat: "2–4 uker", label: "Fra oppstart til ferdig nettside" },
          ]}
          faqs={faqs}
          ctaHeading="Klar for en ny nettside?"
        />

        {/* Andre tjenester i Molde */}
        <section className="mx-auto max-w-2xl px-6 pb-20 text-center">
          <h2 className="mb-4 text-lg font-semibold" style={{ color: "#e5e2de" }}>
            Andre tjenester i {molde.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tjenester/annonsering-molde" className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-white/5" style={{ borderColor: "rgba(77,70,53,0.3)", color: "#99907c" }}>
              Annonsering i Molde
            </Link>
            <Link href="/tjenester/sosiale-medier-molde" className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-white/5" style={{ borderColor: "rgba(77,70,53,0.3)", color: "#99907c" }}>
              Sosiale medier i Molde
            </Link>
            <Link href="/tjenester/seo-molde" className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-white/5" style={{ borderColor: "rgba(77,70,53,0.3)", color: "#99907c" }}>
              SEO i Molde
            </Link>
          </div>
        </section>

        </main>
      <HomeFooter />
    </>
  );
}
