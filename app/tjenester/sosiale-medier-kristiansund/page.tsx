import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ServicePageLayout from "../../components/ServicePageLayout";
import { kristiansund } from "../_locations/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sosiale medier i Kristiansund | Strategi – Elevera",
  description:
    "Vi poster for deg — hver uke. Sosiale medier for bedrifter i Kristiansund. Innhold, strategi og synlighet på Instagram, Facebook og LinkedIn.",
  alternates: { canonical: "https://elevera.no/tjenester/sosiale-medier-kristiansund" },
  openGraph: {
    title: "Sosiale medier i Kristiansund – Elevera",
    description: "Profesjonell innholdsproduksjon og sosiale medier-strategi for bedrifter i Kristiansund og Nordmøre.",
    url: "https://elevera.no/tjenester/sosiale-medier-kristiansund",
  },
};

const faqs = [
  {
    q: "Jobber dere med bedrifter i Kristiansund?",
    a: `Absolutt. Vi holder til i Ålesund (${kristiansund.distance}), men samarbeider digitalt med bedrifter i hele Nordmøre. Du godkjenner innhold digitalt, og vi tar oss av resten.`,
  },
  {
    q: "Må vi lage innholdet selv?",
    a: "Nei — det er hele poenget. Vi lager alt: tekst, grafikk og planlegging. Du trenger bare å godkjenne. Sender du oss bilder eller video fra hverdagen, bruker vi det gjerne som ekstra materiale.",
  },
  {
    q: "Hva om vi bare trenger hjelp med én plattform?",
    a: "Det går fint. Mange starter med én kanal (f.eks. Instagram eller LinkedIn) og utvider etter hvert. Vi tilpasser pakken til ditt behov — ingen unødvendige tillegg.",
  },
  {
    q: "Hvor raskt ser vi resultater?",
    a: "Du får innhold ute fra uke 1. Synlig vekst i følgere og engasjement tar typisk 2–3 måneder med konsekvent innsats. De som holder ut ser det sterkeste resultatet etter 6 måneder.",
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
  name: "Sosiale medier Kristiansund",
  serviceType: "Social Media Management",
  description: "Sosiale medier-håndtering for bedrifter i Kristiansund. Innholdsproduksjon, publisering og strategi.",
  provider: {
    "@type": "LocalBusiness",
    name: "Elevera",
    url: "https://elevera.no",
    telephone: "+4794974165",
    address: { "@type": "PostalAddress", addressLocality: "Ålesund", addressCountry: "NO" },
  },
  areaServed: { "@type": "City", name: "Kristiansund" },
  url: "https://elevera.no/tjenester/sosiale-medier-kristiansund",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://elevera.no/tjenester" },
    { "@type": "ListItem", position: 3, name: "Sosiale medier i Kristiansund", item: "https://elevera.no/tjenester/sosiale-medier-kristiansund" },
  ],
};

export default function SosialeMedierKristiansundPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <main className="min-h-screen" style={{ background: "#131312" }}>
        <Navbar />
        <ServicePageLayout
          badge={`Sosiale medier — ${kristiansund.name}`}
          title="Vi poster for deg."
          titleAccent="Hver uke."
          description={`${kristiansund.localRef} har bedrifter som fortjener å synes. Men sosiale medier krever konsistens — og det tar tid ingen har. Vi tar over kontoen din og sørger for at bedriften din er synlig, relevant og top-of-mind i Kristiansund.`}
          includedLabel="Tjenester"
          includedHeading="Hva vi tilbyr"
          includedSubtext="Tilpasset dine behov og din bedrift."
          included={[
            "Innholdsstrategi — skreddersydd plan for din bransje og by",
            "Visuelt innhold — design og grafikk som stopper scrollingen",
            "Tekst og storytelling — autentiske tekster som bygger tillit",
            "Fast publisering — 3–5 innlegg per uke på dine kanaler",
            "Engasjement — vi svarer følgere og bygger relasjoner",
            "Innholdskalender — full oversikt, godkjenning før publisering",
            "Rapportering — månedlige tall på vekst og engasjement",
            "Strategisk rådgivning — vi justerer basert på hva som fungerer",
          ]}
          whyTitle="Hvorfor sliter bedrifter i Kristiansund med sosiale medier?"
          whyText={[
            `Det er ikke mangel på vilje — det er mangel på tid. Bedrifter i Kristiansund er opptatt med kunder, prosjekter og daglig drift. Sosiale medier havner nederst på listen, og profilen ser forlatt ut. Potensielle kunder legger merke til det.`,
            `Når du overlater det til oss, får du konsekvent synlighet uten å løfte en finger. I en by der mange konkurrenter poster sporadisk eller ikke i det hele tatt, gir jevn tilstedeværelse en overraskende stor effekt.`,
          ]}
          stats={[
            { stat: "4.9t", label: "Daglig tid på sosiale medier for norske voksne" },
            { stat: "71%", label: "Handler basert på anbefalinger de ser i SoMe" },
            { stat: "3–5", label: "Ukentlige innlegg for å holde momentum" },
            { stat: "6 mnd", label: "Konsekvent innsats for sterkest resultat" },
          ]}
          faqs={faqs}
          ctaHeading="Klar for synlige sosiale medier?"
        />

        {/* Andre tjenester i Kristiansund */}
        <section className="mx-auto max-w-2xl px-6 pb-20 text-center">
          <h2 className="mb-4 text-lg font-semibold" style={{ color: "#e5e2de" }}>
            Andre tjenester i {kristiansund.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tjenester/nettside-kristiansund" className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-white/5" style={{ borderColor: "rgba(77,70,53,0.3)", color: "#99907c" }}>
              Nettside i Kristiansund
            </Link>
            <Link href="/tjenester/annonsering-kristiansund" className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-white/5" style={{ borderColor: "rgba(77,70,53,0.3)", color: "#99907c" }}>
              Annonsering i Kristiansund
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
