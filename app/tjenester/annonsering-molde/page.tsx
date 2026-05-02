import type { Metadata } from "next";
import HomeNav from "../../components/home/HomeNav";
import HomeFooter from "../../components/home/HomeFooter";
import ServicePageLayout from "../../components/ServicePageLayout";
import { molde } from "../_locations/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Annonsering i Molde | Google & Meta Ads – Elevera",
  description:
    "Digital annonsering for bedrifter i Molde. Vi kjører Google Ads og Meta-annonser som gir deg flere kunder, med full kontroll på budsjett og resultater.",
  alternates: { canonical: "https://elevera.no/tjenester/annonsering-molde" },
  openGraph: {
    title: "Annonsering i Molde – Elevera",
    description: "Google Ads og Meta-annonsering for bedrifter i Molde og Romsdal. Målrettet, målbart og lønnsomt.",
    url: "https://elevera.no/tjenester/annonsering-molde",
  },
};

const faqs = [
  {
    q: "Jobber dere med bedrifter i Molde?",
    a: `Ja. Vi holder til i Ålesund (${molde.distance}), men samarbeider tett med bedrifter i hele Romsdal. Alt skjer digitalt, du får samme kvalitet uansett hvor du sitter.`,
  },
  {
    q: "Hvor mye bør jeg bruke på annonser?",
    a: "Det avhenger av bransje og mål. De fleste kundene våre starter med 5 000–15 000 kr/mnd i annonsebudsjett. Vi hjelper deg finne riktig nivå og skalerer opp når resultatene er der.",
  },
  {
    q: "Hvilke plattformer annonserer dere på?",
    a: "Primært Google Ads (Søk, Display, YouTube) og Meta (Facebook og Instagram). Vi velger kanal basert på hvor kundene dine faktisk er, ikke hva som er trendy.",
  },
  {
    q: "Når ser jeg resultater?",
    a: "De første resultatene kan komme allerede etter noen dager. Etter 2–4 uker med optimalisering treffer vi normalt en stabil rytme med forutsigbar kostnad per henvendelse.",
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
  name: "Digital annonsering Molde",
  serviceType: "Digital Advertising",
  description: "Google Ads og Meta-annonsering for bedrifter i Molde. Målrettet annonsering som gir målbare resultater.",
  provider: {
    "@type": "LocalBusiness",
    name: "Elevera",
    url: "https://elevera.no",
    telephone: "+4794974165",
    address: { "@type": "PostalAddress", addressLocality: "Ålesund", addressCountry: "NO" },
  },
  areaServed: { "@type": "City", name: "Molde" },
  url: "https://elevera.no/tjenester/annonsering-molde",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://elevera.no/tjenester" },
    { "@type": "ListItem", position: 3, name: "Annonsering i Molde", item: "https://elevera.no/tjenester/annonsering-molde" },
  ],
};

export default function AnnonseringMoldePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <HomeNav />
      <main>
        <ServicePageLayout
          badge={`Annonsering · ${molde.name}`}
          title="Digital"
          titleAccent="annonsering"
          titleSuffix={`i ${molde.name}`}
          description={`${molde.marketNote} Med digital annonsering når du kundene dine akkurat når de leter, enten det er på Google eller i sosiale medier. Vi styrer kampanjene, du får henvendelsene.`}
          includedLabel="Tjenester"
          includedHeading="Hva vi tilbyr"
          includedSubtext="Tilpasset dine behov og din bedrift."
          included={[
            "Google Ads, søkeannonser som treffer folk med kjøpsintensjon",
            "Meta Ads, målrettede annonser på Facebook og Instagram",
            "Kampanjestrategi, vi velger riktig kanal for ditt mål",
            "Annonsetekst og kreativ, vi lager det som konverterer",
            "Landingssider, optimaliserte sider annonsene peker til",
            "Konverteringssporing, du ser nøyaktig hva som virker",
            "Månedlig rapportering, klare tall, ingen fluff",
          ]}
          whyTitle="Hvorfor annonsere digitalt i Molde?"
          whyText={[
            `Molde er en by med et aktivt næringsliv og kunder som søker på nett. Men mange bedrifter i Romsdal kaster penger på annonser som ikke er optimalisert, eller annonserer ikke i det hele tatt og overlater kundene til konkurrentene.`,
            `Med riktig oppsett og løpende optimalisering kan selv et moderat budsjett gi jevne, lønnsomme resultater. Vi har sett det gang på gang: bedrifter i Molde som går fra «prøvd det, fungerte ikke» til forutsigbar vekst.`,
          ]}
          stats={[
            { stat: "200%", label: "Gjennomsnittlig ROAS på Google Ads for våre kunder" },
            { stat: "63%", label: "Av folk klikker heller på Google-annonser enn organiske" },
            { stat: "4–7×", label: "Avkastning på annonsekroner med riktig strategi" },
            { stat: "< 1 uke", label: "Til de første henvendelsene kommer" },
          ]}
          faqs={faqs}
          ctaHeading="Klar for lønnsom annonsering?"
        />

        {/* Andre tjenester i Molde */}
        <section className="mx-auto max-w-2xl px-6 pb-20 text-center">
          <h2 className="mb-4 text-lg font-semibold" style={{ color: "#e5e2de" }}>
            Andre tjenester i {molde.name}
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/tjenester/nettside-molde" className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-white/5" style={{ borderColor: "rgba(77,70,53,0.3)", color: "#99907c" }}>
              Nettside i Molde
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
