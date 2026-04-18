import type { Metadata } from "next";
import HomeNav from "../../components/home/HomeNav";
import HomeFooter from "../../components/home/HomeFooter";
import ServicePageLayout from "../../components/ServicePageLayout";

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
  name: "Foto og video Ålesund",
  description: "Profesjonell foto- og videoproduksjon for bedrifter i Ålesund og på Sunnmøre. Innhold til nettside, sosiale medier og markedsføring.",
  provider: { "@type": "LocalBusiness", name: "Elevera", url: "https://elevera.no" },
  areaServed: { "@type": "City", name: "Ålesund" },
  url: "https://elevera.no/tjenester/foto-og-video-alesund",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://elevera.no/tjenester" },
    { "@type": "ListItem", position: 3, name: "Foto & video i Ålesund", item: "https://elevera.no/tjenester/foto-og-video-alesund" },
  ],
};

export default function FotoOgVideoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <HomeNav />
      <main>
        <ServicePageLayout
          badge="Foto & Video — Ålesund"
          title="Profesjonell"
          titleAccent="foto & video"
          titleSuffix="i Ålesund"
          description="Vi produserer profesjonelt visuelt innhold som stopper scrollingen, bygger merkevaren din og konverterer seere til kunder – alt fra en partner i Ålesund."
          included={[
            "Bedriftsfoto og teambilder",
            "Produktfotografering",
            "Portrettfoto av ansatte",
            "Dronefoto og luftfoto",
            "Reklamevideo for nett og sosiale medier",
            "Produktvideo og demonstrasjonsfilm",
            "Bedriftspresentasjon og profilfilm",
            "Dronevideo og luftopptak",
            "Kortformat video for Instagram og TikTok",
            "Manus, konseptutvikling og etterarbeid",
            "Innholdsbilder til nettside og sosiale medier",
            "Bilder til Google Business Profile",
          ]}
          whyTitle="Hvorfor velge Elevera for foto og video?"
          whyText={[
            "Som lokalt byrå i Ålesund kjenner vi omgivelsene, lyset og mulighetene regionen byr på. Vi vet hvordan vi best utnytter de spektakulære omgivelsene i Ålesund og på Sunnmøre.",
            "Å kombinere foto og video i en produksjon er kostnadseffektivt og gir et helhetlig visuelt uttrykk – perfekt for bedrifter som vil ha alt innhold klart på en gang.",
          ]}
          stats={[
            { stat: "1 dag", label: "Kan gi deg alt innholdet du trenger" },
            { stat: "80%", label: "Høyere konvertering med profesjonelt innhold" },
            { stat: "3x", label: "Mer engasjement med video vs. bilder" },
            { stat: "100%", label: "Lokalt byrå – vi kjenner Ålesund" },
          ]}
          faqs={faqs}
          ctaHeading="Klar for profesjonelt innhold?"
          aiSummary="Elevera produserer profesjonelt foto og video for bedrifter i Ålesund. Vi tilbyr produktfotografering, bedriftsvideo, reklamevideo og dronevideo. En halvdag med fotograf eller videograf starter fra 5 000 kr."
        />
        </main>
      <HomeFooter />
    </>
  );
}
