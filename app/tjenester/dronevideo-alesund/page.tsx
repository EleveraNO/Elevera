import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Dronevideo i Ålesund | Profesjonelle Luftopptak – Elevera",
  description:
    "Profesjonell dronevideo og dronefoto i Ålesund. Vi produserer spektakulære luftopptak for bedrifter, eiendom, event og reklame i Ålesund og på Sunnmøre.",
  alternates: { canonical: "https://elevera.no/tjenester/dronevideo-alesund" },
  openGraph: {
    title: "Dronevideo i Ålesund – Elevera",
    description: "Spektakulære luftopptak med drone for bedrifter i Ålesund og omegn.",
    url: "https://elevera.no/tjenester/dronevideo-alesund",
  },
};

const faqs = [
  {
    q: "Trenger dere tillatelse for å fly drone i Ålesund?",
    a: "Ja, vi opererer alltid i henhold til gjeldende regelverk fra Luftfartstilsynet og innhenter nødvendige tillatelser der det kreves.",
  },
  {
    q: "Hva brukes dronevideo til?",
    a: "Dronevideo egner seg perfekt til å presentere bedriftslokaler, eiendommer, events, turistattraksjoner og naturomgivelser på Sunnmøre – perspektiver du ikke får fra bakken.",
  },
  {
    q: "Kan dere kombinere dronevideo med vanlig video?",
    a: "Absolutt! Vi anbefaler å kombinere luftopptak med bakkeopptakene i samme produksjon for et helhetlig og profesjonelt resultat.",
  },
  {
    q: "Hva koster dronevideo i Ålesund?",
    a: "Dronevideo kan bestilles som del av en videoproduksjon eller som eget oppdrag. Ta kontakt for et uforpliktende tilbud tilpasset ditt behov.",
  },
];

const jsonLdService = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Dronevideo Ålesund",
  description: "Profesjonell dronevideo og dronefoto i Ålesund og på Sunnmøre. Spektakulære luftopptak for bedrifter, eiendom og event.",
  provider: { "@type": "LocalBusiness", name: "Elevera", url: "https://elevera.no" },
  areaServed: { "@type": "City", name: "Ålesund" },
  url: "https://elevera.no/tjenester/dronevideo-alesund",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://elevera.no/tjenester" },
    { "@type": "ListItem", position: 3, name: "Dronevideo i Ålesund", item: "https://elevera.no/tjenester/dronevideo-alesund" },
  ],
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

export default function DronevideoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdService) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <main className="min-h-screen" style={{ background: "#131312" }}>
        <Navbar />
        <ServicePageLayout
          badge="Dronevideo — Ålesund"
          title="Profesjonell"
          titleAccent="dronevideo"
          titleSuffix="i Ålesund"
          description="Spektakulære luftopptak som gir bedriften din et perspektiv ingen kan ignorere. Vi produserer profesjonell dronevideo og dronefoto i Ålesund og på Sunnmøre."
          included={[
            "Luftvideo i høy kvalitet (4K)",
            "Dronefoto og stillbilder fra luften",
            "Redigering og etterarbeid inkludert",
            "Kombineres med bakkefoto og video",
            "Egnet for eiendom, bedrift og event",
            "Levering av ferdige klipp og bilder",
          ]}
          whyTitle="Hvorfor dronevideo for bedriften din?"
          whyText={[
            "Luftopptak gir et unikt perspektiv som skiller seg ut i mengden. Enten du vil vise frem bedriftslokaler, en eiendom eller de spektakulære omgivelsene på Sunnmøre — dronevideo leverer innhold ingen kan ignorere.",
            "Vi kombinerer gjerne dronevideo med bakkeopptakene for å gi deg en komplett videoproduksjon som forteller hele historien om bedriften din.",
          ]}
          stats={[
            { stat: "4K", label: "Luftopptak i høyeste kvalitet" },
            { stat: "3x", label: "Mer engasjement med luftperspektiv" },
            { stat: "1 dag", label: "Kombinert med bakkeproduksjon" },
            { stat: "100%", label: "Lokalt – vi kjenner Ålesund og Sunnmøre" },
          ]}
          faqs={faqs}
          ctaHeading="Klar for luftopptak?"
          aiSummary="Elevera tilbyr profesjonell dronevideo i Ålesund og omegn. Vi produserer luftopptak med 4K-kvalitet for bedrifter, eiendom og arrangementer. Tjenesten inkluderer flyvning, filming og ferdig redigert video fra 4 000 kr."
        />
        <Footer />
      </main>
    </>
  );
}
