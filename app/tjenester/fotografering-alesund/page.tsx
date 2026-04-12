import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicePageLayout from "../../components/ServicePageLayout";

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

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Fotografering Ålesund",
  description: "Profesjonell bedriftsfotografering og produktfoto i Ålesund og omegn. Bilder som bygger tillit og selger mer.",
  provider: { "@type": "LocalBusiness", name: "Elevera", url: "https://elevera.no" },
  areaServed: { "@type": "City", name: "Ålesund" },
  url: "https://elevera.no/tjenester/fotografering-alesund",
};

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

const jsonLdFaq = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.q,
    acceptedAnswer: { "@type": "Answer", text: faq.a },
  })),
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://elevera.no/tjenester" },
    { "@type": "ListItem", position: 3, name: "Fotografering i Ålesund", item: "https://elevera.no/tjenester/fotografering-alesund" },
  ],
};

export default function FotograferingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <main className="min-h-screen" style={{ background: "#131312" }}>
        <Navbar />
        <ServicePageLayout
          badge="Fotografering — Ålesund"
          title="Profesjonell"
          titleAccent="fotografering"
          titleSuffix="i Ålesund"
          description="Bilder som representerer bedriften din på best mulig måte. Vi tar profesjonelle bedriftsfoto, produktbilder og innholdsbilder som bygger tillit og selger mer."
          includedLabel="Tjenester"
          includedHeading="Hva vi tilbyr"
          includedSubtext="Tilpasset dine behov og din bedrift."
          included={[
            "Bedriftsfoto og teambilder",
            "Produktfotografering",
            "Portrettfoto av ansatte",
            "Innholdsbilder til nettside og sosiale medier",
            "Dronefoto og luftfoto",
            "Bilder til Google Business Profile",
            "Redigering og bildebehandling",
            "Levering i høy oppløsning",
          ]}
          whyTitle="Hvorfor profesjonelle bilder?"
          whyText={[
            "Førsteinntrykket teller. Potensielle kunder vurderer bedriften din på millisekunder basert på det visuelle inntrykket. Profesjonelle bilder signaliserer kvalitet, pålitelighet og seriøsitet.",
            "Som lokalt byrå i Ålesund kjenner vi omgivelsene og vet hvordan vi best presenterer din bedrift – enten det er ute i naturen, i bybildet eller i dine egne lokaler. Vi tilbyr også dronefoto og luftfoto for unike perspektiver av din bedrift, eiendom eller lokasjon.",
          ]}
          stats={[
            { stat: "94%", label: "Av førsteinntrykk er basert på visuelt innhold" },
            { stat: "67%", label: "Av kunder sier bildekvalitet påvirker kjøpsbeslutning" },
            { stat: "3x", label: "Mer engasjement med profesjonelle bilder" },
            { stat: "40%", label: "Høyere konvertering med kvalitetsbilder" },
          ]}
          faqs={faqs}
          ctaHeading="Klar for profesjonelle bilder?"
          aiSummary="Elevera tilbyr profesjonell bedriftsfotografering i Ålesund. Vi tar produktbilder, portretter, bedriftsfoto og innholdsbilder til nettside og sosiale medier. Alle bilder leveres ferdig redigert i høy oppløsning."
        />
        <Footer />
      </main>
    </>
  );
}
