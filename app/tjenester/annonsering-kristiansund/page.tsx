import type { Metadata } from "next";
import HomeNav from "../../components/home/HomeNav";
import HomeFooter from "../../components/home/HomeFooter";
import ServicePageLayout from "../../components/ServicePageLayout";
import { kristiansund } from "../_locations/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Annonsering i Kristiansund | Google & Meta – Elevera",
  description:
    "Lønnsom digital annonsering for bedrifter i Kristiansund. Google Ads og Meta-kampanjer som gir deg flere kunder — med målbar avkastning fra dag én.",
  alternates: { canonical: "https://elevera.no/tjenester/annonsering-kristiansund" },
  openGraph: {
    title: "Annonsering i Kristiansund – Elevera",
    description: "Målrettet digital annonsering for bedrifter i Kristiansund og på Nordmøre. Resultater du kan måle.",
    url: "https://elevera.no/tjenester/annonsering-kristiansund",
  },
};

const faqs = [
  {
    q: "Jobber dere med bedrifter i Kristiansund?",
    a: `Ja, vi gjør det. Vi sitter i Ålesund (${kristiansund.distance}), men jobber digitalt med kunder i hele regionen. Du får tett oppfølging gjennom videomøter og delt dashboard.`,
  },
  {
    q: "Hva er forskjellen på Google Ads og Facebook-annonser?",
    a: "Google Ads fanger folk som aktivt søker etter det du tilbyr — høy kjøpsintensjon. Meta (Facebook/Instagram) treffer folk basert på interesser og atferd — bra for synlighet og merkevarebygging. Vi anbefaler ofte en kombinasjon.",
  },
  {
    q: "Trenger jeg en ny nettside for å annonsere?",
    a: "Ikke nødvendigvis, men landingssiden annonsene peker til er avgjørende for resultatet. Vi vurderer siden din først og lager dedikerte landingssider om det trengs.",
  },
  {
    q: "Kan jeg styre budsjettet selv?",
    a: "Du bestemmer alltid totalbudsjettet. Vi gir råd om hva som er realistisk for din bransje og skalerer opp eller ned basert på resultater. Ingen bindingstid.",
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
  name: "Digital annonsering Kristiansund",
  serviceType: "Digital Advertising",
  description: "Google Ads og Meta-annonsering for bedrifter i Kristiansund. Målrettet annonsering med målbar avkastning.",
  provider: {
    "@type": "LocalBusiness",
    name: "Elevera",
    url: "https://elevera.no",
    telephone: "+4794974165",
    address: { "@type": "PostalAddress", addressLocality: "Ålesund", addressCountry: "NO" },
  },
  areaServed: { "@type": "City", name: "Kristiansund" },
  url: "https://elevera.no/tjenester/annonsering-kristiansund",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://elevera.no/tjenester" },
    { "@type": "ListItem", position: 3, name: "Annonsering i Kristiansund", item: "https://elevera.no/tjenester/annonsering-kristiansund" },
  ],
};

export default function AnnonseringKristiansundPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <HomeNav />
      <main>
        <ServicePageLayout
          badge={`Annonsering — ${kristiansund.name}`}
          title="Digital"
          titleAccent="annonsering"
          titleSuffix={`i ${kristiansund.name}`}
          description={`${kristiansund.localRef} har bedrifter som fortjener flere kunder. ${kristiansund.marketNote} Digital annonsering lar deg nå dem som aktivt leter — og de som ennå ikke vet at de trenger deg.`}
          includedLabel="Tjenester"
          includedHeading="Hva vi tilbyr"
          includedSubtext="Tilpasset dine behov og din bedrift."
          included={[
            "Google Ads — fang søkere med høy kjøpsintensjon",
            "Meta Ads — nå kunder på Facebook og Instagram",
            "Remarketing — følg opp folk som allerede har vist interesse",
            "Annonsekreativ — tekst, bilder og video som konverterer",
            "Kampanjeoptimalisering — kontinuerlig testing og forbedring",
            "Konverteringssporing — full oversikt over hva som gir resultater",
            "Rapportering — månedlig gjennomgang med klare tall",
          ]}
          whyTitle="Hvorfor fungerer digital annonsering så godt i Kristiansund?"
          whyText={[
            `Kristiansund har et solid næringsliv, men mange bedrifter på Nordmøre annonserer fortsatt kun i lokalaviser eller ikke i det hele tatt digitalt. Det betyr lavere konkurranse på Google og billigere klikk for deg.`,
            `Med riktig strategi kan du dominere de lokale søkeresultatene i Kristiansund for en brøkdel av hva det koster i større byer. Vi setter opp kampanjer som gir målbar avkastning — ikke bare klikk, men faktiske henvendelser.`,
          ]}
          stats={[
            { stat: "4–7×", label: "Typisk avkastning på annonsebudsjettet" },
            { stat: "80%", label: "Av forbrukere googler før de kjøper lokalt" },
            { stat: "50%", label: "Lavere CPC i mindre byer vs. storbyene" },
            { stat: "< 1 uke", label: "Til du ser de første resultatene" },
          ]}
          faqs={faqs}
          ctaHeading="Klar for lønnsom annonsering?"
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
            <Link href="/tjenester/sosiale-medier-kristiansund" className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-white/5" style={{ borderColor: "rgba(77,70,53,0.3)", color: "#99907c" }}>
              Sosiale medier i Kristiansund
            </Link>
            <Link href="/tjenester/seo-kristiansund" className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-white/5" style={{ borderColor: "rgba(77,70,53,0.3)", color: "#99907c" }}>
              SEO i Kristiansund
            </Link>
          </div>
        </section>

        </main>
      <HomeFooter />
    </>
  );
}
