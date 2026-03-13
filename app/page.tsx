import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problems from "./components/Problems";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import WhyElevera from "./components/WhyElevera";
import Portfolio from "./components/Portfolio";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Marquee from "./components/Marquee";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Elevera",
  description:
    "Digitalbyrå i Ålesund som hjelper lokale bedrifter å vokse på nett med nettside, foto & video og betalt annonsering.",
  url: "https://elevera.no",
  telephone: "+4794974165",
  email: "tverbakk@elevera.no",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ålesund",
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
      <main className="min-h-screen bg-[#0a0a0a]">
        <Navbar />
        <Hero />
        <Marquee />
        <Problems />
        <Services />
        <Pricing />
        <WhyElevera />
        <Portfolio />
        <FAQ />
        <CTA />
<Footer />
      </main>
    </>
  );
}
