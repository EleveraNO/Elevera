import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Problems from "./components/Problems";
import Services from "./components/Services";
import Process from "./components/Process";
import Portfolio from "./components/Portfolio";
import MidCTA from "./components/MidCTA";
import Testimonials from "./components/Testimonials";
import WhyElevera from "./components/WhyElevera";
import Pricing from "./components/Pricing";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Elevera",
  description:
    "Digitalbyrå i Ålesund som hjelper lokale bedrifter å vokse på nett med nettside, foto & video og betalt annonsering.",
  url: "https://elevera.no",
  image: "https://elevera.no/opengraph-image",
  telephone: "+4794974165",
  email: "tverbakk@elevera.no",
  priceRange: "NOK 3490–14990",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ålesund",
    addressRegion: "Møre og Romsdal",
    addressCountry: "NO",
  },
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 62.4722,
      longitude: 6.1549,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Tjenester",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nettside Ålesund", url: "https://elevera.no/tjenester/nettside-alesund" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Foto & video Ålesund", url: "https://elevera.no/tjenester/foto-og-video-alesund" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Dronevideo Ålesund", url: "https://elevera.no/tjenester/dronevideo-alesund" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital annonsering Ålesund", url: "https://elevera.no/tjenester/annonsering-alesund" } },
    ],
  },
  sameAs: [
    "https://www.instagram.com/elevera_no/",
    "https://www.facebook.com/profile.php?id=61582956691309",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen" style={{ background: "#09090B" }}>
        <Navbar />
        <Hero />
        <Marquee />
        {/* Problem → Solution flow */}
        <Problems />
        <Services />
        <Process />
        <Portfolio />
        <MidCTA />
        <Testimonials />
        <WhyElevera />
        <Pricing />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </>
  );
}
