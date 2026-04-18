import type { Metadata } from "next";
import HomeNav from "../../components/home/HomeNav";
import HomeFooter from "../../components/home/HomeFooter";
import ServicePageLayout from "../../components/ServicePageLayout";

export const metadata: Metadata = {
  title: "SEO i Ålesund | Søkemotoroptimalisering – Elevera",
  description:
    "Profesjonell SEO i Ålesund. Vi hjelper bedriften din å bli funnet på Google gjennom teknisk SEO, innholdsstrategi og lokal søkemotoroptimalisering.",
  alternates: { canonical: "https://elevera.no/tjenester/seo-alesund" },
  openGraph: {
    title: "SEO i Ålesund – Elevera",
    description: "Søkemotoroptimalisering for bedrifter i Ålesund og omegn. Bli funnet av kundene dine på Google.",
    url: "https://elevera.no/tjenester/seo-alesund",
  },
};

const faqs = [
  {
    q: "Hvor lang tid tar det?",
    a: "De første forbedringene ser du etter 4–8 uker. Varige resultater — der du konsekvent rangerer på side 1 — tar 3–6 måneder. Men i motsetning til annonser, forsvinner ikke trafikken når du pauser.",
  },
  {
    q: "Hva er forskjellen på SEO og Google Ads?",
    a: "Google Ads gir synlighet med én gang, men du betaler for hvert klikk. SEO tar lengre tid, men trafikken er gratis når du først rangerer. De fleste kundene våre bruker begge.",
  },
  {
    q: "Må vi lage ny nettside?",
    a: "Ikke nødvendigvis. Vi starter med en gjennomgang av siden du har. Noen ganger holder det med justeringer, andre ganger gir en ny nettside mye bedre resultater. Vi er ærlige om hva som trengs.",
  },
  {
    q: "Hva er lokal SEO?",
    a: "Det handler om å dukke opp når folk i nærheten søker — for eksempel «rørlegger Ålesund» eller «frisør i Volda». Vi setter opp Google Business-profilen din og sørger for at du vises i kartet.",
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
  name: "SEO Ålesund",
  serviceType: "Search Engine Optimization",
  description: "Søkemotoroptimalisering for bedrifter i Ålesund. Teknisk SEO, innholdsstrategi og lokal synlighet på Google.",
  provider: {
    "@type": "LocalBusiness",
    name: "Elevera",
    url: "https://elevera.no",
    telephone: "+4794974165",
    address: { "@type": "PostalAddress", addressLocality: "Ålesund", addressCountry: "NO" },
  },
  areaServed: { "@type": "City", name: "Ålesund" },
  url: "https://elevera.no/tjenester/seo-alesund",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://elevera.no/tjenester" },
    { "@type": "ListItem", position: 3, name: "SEO i Ålesund", item: "https://elevera.no/tjenester/seo-alesund" },
  ],
};

export default function SeoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <HomeNav />
      <main>
        <ServicePageLayout
          badge="SEO — Ålesund"
          title="Bli funnet når kundene"
          titleAccent="søker"
          titleSuffix="etter deg"
          description="Folk i Ålesund googler det du tilbyr — hver dag. Vi sørger for at det er din bedrift som dukker opp, ikke konkurrentens."
          includedLabel="Tjenester"
          includedHeading="Hva vi tilbyr"
          includedSubtext="Alt som trengs for å klatre til toppen av Google."
          included={[
            "Teknisk gjennomgang — vi finner og fikser det som holder deg nede",
            "Søkeordanalyse — vi finner ordene kundene dine faktisk bruker",
            "Innhold som rangerer — blogginnlegg og sider Google elsker",
            "Lenkebygging — vi bygger autoriteten din hos Google",
            "Lokal SEO og Google Business — bli synlig i kartet",
            "Månedlig rapport — du ser nøyaktig hvor du rangerer",
            "Hastighetsoptimalisering — raskere side, bedre rangering",
            "Konkurrentanalyse — vi viser deg hva de gjør og hvordan du slår dem",
          ]}
          whyTitle="Hvorfor dukker konkurrentene opp før deg?"
          whyText={[
            "Når noen i Ålesund søker etter det du tilbyr og finner konkurrenten din istedenfor deg — da taper du en kunde du aldri visste om. Det skjer hver eneste dag.",
            "SEO fikser det. Og i motsetning til annonser, betaler du ikke per klikk. Når du først rangerer høyt, får du en jevn strøm av henvendelser — uten å øke budsjettet.",
          ]}
          stats={[
            { stat: "93%", label: "Av alle nettopplevelser starter med et Google-søk" },
            { stat: "75%", label: "Klikker aldri forbi første side" },
            { stat: "14.6%", label: "Konverterer fra organisk søk (vs. 1.7% fra annonser)" },
            { stat: "< 6 mnd", label: "Til du ser varige resultater" },
          ]}
          faqs={faqs}
          ctaHeading="Klar for å dukke opp på Google?"
          aiSummary="Elevera leverer søkemotoroptimalisering (SEO) for bedrifter i Ålesund. Tjenesten dekker teknisk SEO, innholdsstrategi, lenkebygging og lokal SEO med Google Business. De fleste bedrifter ser varige resultater innen 3–6 måneder."
        />
        </main>
      <HomeFooter />
    </>
  );
}
