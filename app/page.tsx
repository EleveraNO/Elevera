import "./components/home/home.css";
import HomeNav from "./components/home/HomeNav";
import HomeHero from "./components/home/HomeHero";
import HomeServices from "./components/home/HomeServices";
import HomeCaseStudy from "./components/home/HomeCaseStudy";
import HomeMoreCases from "./components/home/HomeMoreCases";
import HomeAbout from "./components/home/HomeAbout";
import HomeProcess from "./components/home/HomeProcess";
import HomePricing from "./components/home/HomePricing";
import HomeContact from "./components/home/HomeContact";
import HomeFooter from "./components/home/HomeFooter";
import HomeRevealObserver from "./components/home/HomeRevealObserver";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Elevera",
  description:
    "Vekstbyrå i Ålesund. Innhold, sosialt, nettside, SEO og markedsføring for lokale bedrifter på Sunnmøre.",
  url: "https://elevera.no",
  image: "https://elevera.no/opengraph-image",
  telephone: "+4794974165",
  email: "tverbakk@elevera.no",
  priceRange: "NOK 9900–27900",
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
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Foto & Video Ålesund", url: "https://elevera.no/tjenester/foto-og-video-alesund" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Sosiale medier Ålesund", url: "https://elevera.no/tjenester/sosiale-medier-alesund" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Nettside Ålesund", url: "https://elevera.no/tjenester/nettside-alesund" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO Ålesund", url: "https://elevera.no/tjenester/seo-alesund" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital annonsering Ålesund", url: "https://elevera.no/tjenester/annonsering-alesund" } },
    ],
  },
  sameAs: [
    "https://www.instagram.com/elevera_no/",
    "https://www.facebook.com/profile.php?id=61582956691309",
  ],
};

const jsonLdOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Elevera",
  url: "https://elevera.no",
  logo: "https://elevera.no/favicon.svg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+4794974165",
    contactType: "customer service",
    areaServed: "NO",
    availableLanguage: "Norwegian",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }}
      />
      <HomeNav />
      <main>
        <HomeHero />
        <HomeServices />
        <HomeCaseStudy />
        <HomeMoreCases />
        <HomeAbout />
        <HomeProcess />
        <HomePricing />
        <HomeContact />
      </main>
      <HomeFooter />
      <HomeRevealObserver />
    </>
  );
}
