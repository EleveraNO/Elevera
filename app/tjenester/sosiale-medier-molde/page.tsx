import type { Metadata } from "next";
import HomeNav from "../../components/home/HomeNav";
import HomeFooter from "../../components/home/HomeFooter";
import ServicePageLayout from "../../components/ServicePageLayout";
import { molde } from "../_locations/data";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sosiale medier i Molde | Innhold & Strategi – Elevera",
  description:
    "Vi poster for deg, hver uke. Profesjonell håndtering av sosiale medier for bedrifter i Molde. Innhold, strategi og vekst på Instagram, Facebook og LinkedIn.",
  alternates: { canonical: "https://elevera.no/tjenester/sosiale-medier-molde" },
  openGraph: {
    title: "Sosiale medier i Molde – Elevera",
    description: "Innholdsproduksjon og strategi for sosiale medier. Vi hjelper bedrifter i Molde å bli synlige og relevante.",
    url: "https://elevera.no/tjenester/sosiale-medier-molde",
  },
};

const faqs = [
  {
    q: "Jobber dere med bedrifter i Molde?",
    a: `Ja! Vi samarbeider med bedrifter i hele Møre og Romsdal. Vi sitter i Ålesund (${molde.distance}), men håndterer alt digitalt, innholdsplanlegging, publisering og rapportering.`,
  },
  {
    q: "Hvilke plattformer dekker dere?",
    a: "Vi jobber med Instagram, Facebook, LinkedIn og TikTok. Vi anbefaler plattformene som gir mest verdi for akkurat din bedrift og målgruppe, ikke alle trenger å være overalt.",
  },
  {
    q: "Lager dere innholdet også?",
    a: "Ja. Vi lager tekst, grafikk og enkle videoer. Du godkjenner innholdet før det publiseres. Vi kan også jobbe med materiale du sender oss fra hverdagen i bedriften.",
  },
  {
    q: "Hvor ofte publiserer dere?",
    a: "Typisk 3–5 innlegg per uke, avhengig av pakke og plattform. Konsistens er viktigere enn volum, vi sørger for at du alltid er synlig og relevant.",
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
  name: "Sosiale medier Molde",
  serviceType: "Social Media Management",
  description: "Profesjonell håndtering av sosiale medier for bedrifter i Molde. Innholdsproduksjon, strategi og vekst.",
  provider: {
    "@type": "LocalBusiness",
    name: "Elevera",
    url: "https://elevera.no",
    telephone: "+4794974165",
    address: { "@type": "PostalAddress", addressLocality: "Ålesund", addressCountry: "NO" },
  },
  areaServed: { "@type": "City", name: "Molde" },
  url: "https://elevera.no/tjenester/sosiale-medier-molde",
};

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Tjenester", item: "https://elevera.no/tjenester" },
    { "@type": "ListItem", position: 3, name: "Sosiale medier i Molde", item: "https://elevera.no/tjenester/sosiale-medier-molde" },
  ],
};

export default function SosialeMedierMoldePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <HomeNav />
      <main>
        <ServicePageLayout
          badge={`Sosiale medier · ${molde.name}`}
          title="Vi poster for deg."
          titleAccent="Hver uke."
          description={`Bedrifter i ${molde.localRef} vet at synlighet betyr alt. Men hvem har tid til å poste konsekvent? Vi tar over, med innhold som bygger tillit, engasjerer følgere og tiltrekker kunder i Molde og Romsdal.`}
          includedLabel="Tjenester"
          includedHeading="Hva vi tilbyr"
          includedSubtext="Tilpasset dine behov og din bedrift."
          included={[
            "Innholdsstrategi, vi planlegger hva som skal postes og når",
            "Grafisk design, profesjonelle innlegg som skiller seg ut",
            "Copywriting, tekster som engasjerer og konverterer",
            "Publisering, vi poster for deg på alle valgte plattformer",
            "Community management, vi svarer på kommentarer og meldinger",
            "Innholdskalender, du ser alt planlagt innhold på forhånd",
            "Månedlig rapport, rekkevidde, engasjement og vekst",
            "Strategimøte, månedlig gjennomgang og justering",
          ]}
          whyTitle="Hvorfor henger mange bedrifter i Molde etter på sosiale medier?"
          whyText={[
            `De fleste vet at sosiale medier er viktig. Men mellom kunder, drift og hundre andre ting blir det sjelden til at man poster konsekvent. Resultatet? En profil som ser forlatt ut, og potensielle kunder som scroller videre.`,
            `Vi løser det for deg. Med fast innhold hver uke bygger du gradvis synlighet, tillit og en kanal som faktisk sender kunder din vei. Spesielt i Molde, der mange konkurrenter ikke poster aktivt, gir konsistens en stor fordel.`,
          ]}
          stats={[
            { stat: "4.9t", label: "Norske voksne bruker på sosiale medier daglig i snitt" },
            { stat: "78%", label: "Undersøker bedrifter på SoMe før de tar kontakt" },
            { stat: "3–5", label: "Innlegg per uke for konsekvent synlighet" },
            { stat: "2–3 mnd", label: "Før du ser tydelig vekst i engasjement" },
          ]}
          faqs={faqs}
          ctaHeading="Klar for synlige sosiale medier?"
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
            <Link href="/tjenester/annonsering-molde" className="rounded-full border px-4 py-2 text-sm transition-colors hover:bg-white/5" style={{ borderColor: "rgba(77,70,53,0.3)", color: "#99907c" }}>
              Annonsering i Molde
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
