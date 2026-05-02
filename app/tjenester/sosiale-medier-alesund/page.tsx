import type { Metadata } from "next";
import HomeNav from "../../components/home/HomeNav";
import HomeFooter from "../../components/home/HomeFooter";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Sosiale medier i Ålesund | Instagram & TikTok – Elevera",
  description:
    "Vi tar over sosiale medier for bedriften din i Ålesund. Strategi, innholdsproduksjon og publisering på Instagram, TikTok og Facebook.",
  alternates: { canonical: "https://elevera.no/tjenester/sosiale-medier-alesund" },
  openGraph: {
    title: "Sosiale medier i Ålesund – Elevera",
    description: "Profesjonell styring av sosiale medier for bedrifter i Ålesund og omegn.",
    url: "https://elevera.no/tjenester/sosiale-medier-alesund",
  },
};

const faqs = [
  {
    q: "Hvilke plattformer bør vi være på?",
    a: "Instagram og Facebook fungerer for de fleste. TikTok treffer yngre målgrupper. LinkedIn er relevant for B2B. Vi hjelper deg å velge, og du slipper å være på alt selv.",
  },
  {
    q: "Hvor ofte poster dere?",
    a: "Minimum 3 ganger per uke. Vi lager alt innholdet og publiserer for deg. Du godkjenner før det går ut, men trenger ikke gjøre noe selv.",
  },
  {
    q: "Lager dere alt innholdet?",
    a: "Ja. Vi kommer til deg, tar bilder og video, skriver tekster og designer grafikk. Vi kan også bruke materiale du allerede har.",
  },
  {
    q: "Svarer dere på meldinger for oss?",
    a: "Ja. Vi svarer på kommentarer og direktemeldinger på vegne av bedriften din. Vi avtaler tone og retningslinjer på forhånd, slik at det alltid høres ut som deg.",
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
  name: "Sosiale medier Ålesund",
  serviceType: "Social Media Management",
  description: "Profesjonell styring av sosiale medier for bedrifter i Ålesund. Strategi, innholdsproduksjon og publisering på Instagram, TikTok og Facebook.",
  provider: {
    "@type": "LocalBusiness",
    name: "Elevera",
    url: "https://elevera.no",
    telephone: "+4794974165",
    address: { "@type": "PostalAddress", addressLocality: "Ålesund", addressCountry: "NO" },
  },
  areaServed: { "@type": "City", name: "Ålesund" },
  url: "https://elevera.no/tjenester/sosiale-medier-alesund",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://elevera.no/tjenester" },
    { "@type": "ListItem", position: 3, name: "Sosiale medier i Ålesund", item: "https://elevera.no/tjenester/sosiale-medier-alesund" },
  ],
};

export default function SosialeMedierPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <HomeNav />
      <main>
        <ServicePageLayout
          badge="Sosiale medier · Ålesund"
          title="Vi poster for deg."
          titleAccent="Hver uke."
          description="Vi tar over Instagram, Facebook og TikTok. Du godkjenner innholdet, vi poster, svarer på meldinger og bygger følgerskaren. Vi gjør hele jobben."
          includedLabel="Tjenester"
          includedHeading="Hva vi tilbyr"
          includedSubtext="Fra idé til publisering, vi tar hele jobben."
          included={[
            "Strategi og redaksjonsplan for din bedrift",
            "Vi lager alt innholdet, foto, video og grafikk",
            "Publisering 3–5x per uke på Instagram, Facebook og TikTok",
            "Vi svarer på kommentarer og meldinger for deg",
            "Stories og Reels som faktisk engasjerer",
            "Månedlig rapport, du ser hva som virker og hvorfor",
            "Vi finner riktig målgruppe og riktig tidspunkt",
            "Vi holder øye med hva konkurrentene gjør",
          ]}
          whyTitle="Kundene dine scroller akkurat nå"
          whyText={[
            "4 millioner nordmenn er på sosiale medier, hver dag. Når de scroller forbi en tom eller utdatert profil, tenker de: er denne bedriften fortsatt aktiv? Første inntrykk skjer online, lenge før noen ringer deg.",
            "Du vet du burde poste oftere. Men mellom kunder, drift og alt annet, blir det aldri tid. Vi tar den jobben, og gjør den bedre enn du ville gjort selv.",
          ]}
          stats={[
            { stat: "4.1M", label: "Nordmenn er på sosiale medier daglig" },
            { stat: "3x/uke", label: "Vi poster for deg, minimum" },
            { stat: "80%", label: "Av forbrukere sjekker bedrifter på Instagram før de kjøper" },
            { stat: "0 timer", label: "Tid du bruker, vi gjør alt" },
          ]}
          faqs={faqs}
          ctaHeading="Klar for å bli synlig på sosiale medier?"
          aiSummary="Elevera styrer sosiale medier for bedrifter i Ålesund. Vi lager innhold, publiserer 3–5 ganger per uke på Instagram, Facebook og TikTok, og svarer på meldinger. Tjenesten starter fra 6 000 kr/mnd som enkelttjeneste."
        />
        </main>
      <HomeFooter />
    </>
  );
}
