import type { Metadata } from "next";
import HomeNav from "../../components/home/HomeNav";
import HomeFooter from "../../components/home/HomeFooter";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "Nettside i Ålesund | Webutvikling & Webdesign – Elevera",
  description:
    "Profesjonell nettside i Ålesund. Vi designer og utvikler raske, konverterende nettsider og nettbutikker for bedrifter i Ålesund og omegn.",
  alternates: { canonical: "https://elevera.no/tjenester/nettside-alesund" },
  openGraph: {
    title: "Nettside i Ålesund – Elevera",
    description: "Profesjonell webutvikling og webdesign for bedrifter i Ålesund og omegn.",
    url: "https://elevera.no/tjenester/nettside-alesund",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Nettside Ålesund",
  description: "Profesjonell nettsideutvikling for bedrifter i Ålesund.",
  provider: { "@type": "LocalBusiness", name: "Elevera", url: "https://elevera.no" },
  areaServed: { "@type": "City", name: "Ålesund" },
  url: "https://elevera.no/tjenester/nettside-alesund",
  offers: { "@type": "AggregateOffer", priceCurrency: "NOK", lowPrice: "990", highPrice: "22900", offerCount: "3" },
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://elevera.no/tjenester" },
    { "@type": "ListItem", position: 3, name: "Nettside i Ålesund", item: "https://elevera.no/tjenester/nettside-alesund" },
  ],
};

export default function NettsidesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <HomeNav />
      <main>
        <ServicePageLayout
          badge="Nettside — Ålesund"
          title="Profesjonell"
          titleAccent="nettside"
          titleSuffix="i Ålesund"
          description="Vi designer og utvikler raske, konverterende nettsider som rangerer høyt på Google og gir din bedrift en sterk digital tilstedeværelse."
          includedLabel="Tjenester"
          includedHeading="Hva vi tilbyr"
          includedSubtext="Tilpasset dine behov og din bedrift."
          included={[
            "Moderne og responsivt webdesign",
            "Rask lasting på alle enheter",
            "SEO-optimalisert fra bunn",
            "Eget foto og video til siden",
            "SSL-sertifikat og sikkerhet",
            "Google Analytics integrasjon",
            "Løpende support og vedlikehold",
            "Kontaktskjema med varsling",
          ]}
          whyTitle="Hvorfor investere i en profesjonell nettside?"
          whyText={[
            "Din nettside er bedriftens viktigste salgsverktøy. En treg, utdatert eller uprofesjonell nettside koster deg kunder hver eneste dag.",
            "Vi bygger nettsider som laster raskt, ser profesjonelle ut og faktisk får besøkende til å ta kontakt.",
          ]}
          stats={[
            { stat: "53%", label: "Forlater siden hvis den bruker over 3 sekunder å laste" },
            { stat: "75%", label: "Bedømmer troverdighet basert på nettsidedesign" },
            { stat: "200%", label: "Bedre konvertering med mobiltilpasset nettside" },
            { stat: "Top 3", label: "Mål for Google-rangering med riktig SEO" },
          ]}
          faqs={[
            { q: "Hvor lang tid tar det å lage en nettside?", a: "En standard bedriftsnettside tar 2–4 uker fra oppstart til lansering, avhengig av innhold og kompleksitet." },
            { q: "Får jeg profesjonelt innhold til siden?", a: "Ja. Vi produserer foto og video til nettsiden din som en del av leveransen — slik at du får et helhetlig uttrykk som konverterer besøkende til kunder." },
            { q: "Hva koster en nettside?", a: "Nettside inngår i våre månedlige pakker fra 7 900 kr/mnd, eller som enkelttjeneste fra 990 kr/mnd. Ta kontakt for et tilbud." },
          ]}
          ctaHeading="Klar for en ny nettside?"
          aiSummary="Elevera er et digitalbyrå i Ålesund som designer og utvikler nettsider for lokale bedrifter. Tjenesten inkluderer webdesign, SEO-optimalisering, profesjonelle bilder og løpende vedlikehold. Priser starter fra 990 kr/mnd for enkelttjeneste eller fra 7 900 kr/mnd som del av en fast pakke."
        />
        </main>
      <HomeFooter />
    </>
  );
}
