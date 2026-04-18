import type { Metadata } from "next";
import HomeNav from "../../components/home/HomeNav";
import HomeFooter from "../../components/home/HomeFooter";
import ServicePageLayout from "../../components/ServicePageLayout";

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

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Videoproduksjon Ålesund",
  description: "Profesjonell videoproduksjon for bedrifter i Ålesund. Reklamefilmer, produktvideoer og innhold til sosiale medier.",
  provider: { "@type": "LocalBusiness", name: "Elevera", url: "https://elevera.no" },
  areaServed: { "@type": "City", name: "Ålesund" },
  url: "https://elevera.no/tjenester/videoproduksjon-alesund",
};

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
    { "@type": "ListItem", position: 3, name: "Videoproduksjon i Ålesund", item: "https://elevera.no/tjenester/videoproduksjon-alesund" },
  ],
};

export default function VideoProduksjonPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <HomeNav />
      <main>
        <ServicePageLayout
          badge="Videoproduksjon — Ålesund"
          title="Profesjonell"
          titleAccent="videoproduksjon"
          titleSuffix="i Ålesund"
          description="Vi produserer videoer som stopper scrollingen, bygger merkevaren din og konverterer seere til kunder – alt fra en partner i Ålesund."
          includedLabel="Tjenester"
          includedHeading="Hva vi tilbyr"
          includedSubtext="Tilpasset dine behov og din bedrift."
          included={[
            "Reklamevideo for nett og sosiale medier",
            "Produktvideo og demonstrasjonsfilm",
            "Bedriftspresentasjon og profilfilm",
            "Kortformat video for Instagram og TikTok",
            "Dronevideo og luftopptak",
            "Manus og konseptutvikling",
            "Profesjonell lyd og musikk",
            "Fargekorrigering og etterarbeid",
          ]}
          whyTitle="Hvorfor investere i videoproduksjon?"
          whyText={[
            "Video er det mest engasjerende innholdsformatet på nett. Bedrifter som bruker profesjonell video i markedsføringen sin opplever høyere engasjement, flere leads og sterkere merkevaregjenkjenning.",
            "Som lokalt byrå i Ålesund kjenner vi markedet og vet hva som resonerer med målgruppen din i regionen. Vi produserer innhold som faktisk fungerer – ikke bare ser bra ut. Vi tilbyr også dronevideo og luftopptak for spektakulære bilder av Ålesund og omegn.",
          ]}
          stats={[
            { stat: "80%", label: "Høyere konvertering med video på landingssider" },
            { stat: "3x", label: "Mer engasjement enn bilder på sosiale medier" },
            { stat: "93%", label: "Av markedsførere sier video gir god ROI" },
            { stat: "1min", label: "Video er verdt 1,8 millioner ord" },
          ]}
          faqs={faqs}
          ctaHeading="Klar for profesjonell video?"
          aiSummary="Elevera produserer profesjonell video for bedrifter i Ålesund. Vi lager reklamefilm, produktvideo, bedriftspresentasjoner og kortformat video for Instagram og TikTok. Alt inkluderer manus, filming og ferdig redigering."
        />
        </main>
      <HomeFooter />
    </>
  );
}
