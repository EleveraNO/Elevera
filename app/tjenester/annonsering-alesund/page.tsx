import type { Metadata } from "next";
import HomeNav from "../../components/home/HomeNav";
import HomeFooter from "../../components/home/HomeFooter";
import ServicePageLayout from "../../components/ServicePageLayout";

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
  name: "Digital annonsering Ålesund",
  description: "Facebook-annonsering, Instagram-annonsering og Google Ads for bedrifter i Ålesund. Målrettet markedsføring som gir resultater.",
  provider: { "@type": "LocalBusiness", name: "Elevera", url: "https://elevera.no" },
  areaServed: { "@type": "City", name: "Ålesund" },
  url: "https://elevera.no/tjenester/annonsering-alesund",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://elevera.no/tjenester" },
    { "@type": "ListItem", position: 3, name: "Digital annonsering i Ålesund", item: "https://elevera.no/tjenester/annonsering-alesund" },
  ],
};

export default function AnnonseringPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <HomeNav />
      <main>
        <ServicePageLayout
          badge="Annonsering — Ålesund"
          title="Digital"
          titleAccent="annonsering"
          titleSuffix="i Ålesund"
          description="Vi administrerer Facebook Ads, Instagram Ads og Google Ads som faktisk gir avkastning – datadrevet og optimalisert for bedrifter i Ålesund og omegn."
          includedLabel="Tjenester"
          includedHeading="Hva vi tilbyr"
          includedSubtext="Tilpasset dine behov og din bedrift."
          included={[
            "Facebook og Instagram annonsering",
            "Google Ads og Shopping",
            "Målgruppeanalyse og segmentering",
            "Annonsekreativer og tekst",
            "A/B-testing av annonser",
            "Løpende optimalisering",
            "Månedlig rapport med resultater",
          ]}
          whyTitle="Hvorfor profesjonell annonsering?"
          whyText={[
            "Mange bedrifter kaster bort penger på annonser fordi de ikke har riktig målretting, kreativt eller strategi. Vi sørger for at hver krone du bruker jobber for deg.",
            "Som lokalt byrå i Ålesund kjenner vi markedet og målgruppene i regionen. Det gir oss et fortrinn når vi setter opp annonsering som treffer riktig person til riktig tid.",
          ]}
          stats={[
            { stat: "2,5x", label: "Gjennomsnittlig ROAS for våre kunder" },
            { stat: "4,1mill", label: "Nordmenn er aktive på sosiale medier daglig" },
            { stat: "63%", label: "Av bedrifter øker annonsebudsjettet hvert år" },
            { stat: "Top 3", label: "Google-annonser vises øverst i søkeresultatene" },
          ]}
          faqs={faqs}
          ctaHeading="Klar for lønnsom annonsering?"
          aiSummary="Elevera tilbyr digital annonsering for bedrifter i Ålesund og omegn. Vi administrerer Facebook Ads, Instagram Ads og Google Ads med løpende optimalisering og månedlig rapportering. Administrasjon starter fra 3 500 kr/mnd, annonsebudsjett kommer i tillegg."
        />
        </main>
      <HomeFooter />
    </>
  );
}
