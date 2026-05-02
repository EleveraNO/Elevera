import type { Metadata } from "next";
import Link from "next/link";
import HomeNav from "../components/home/HomeNav";
import HomeFooter from "../components/home/HomeFooter";
import "../components/blog.css";

export const metadata: Metadata = {
  title: "Blogg, Tips og innsikt om digital markedsføring | Elevera",
  description:
    "Artikler om foto, video, nettside og digital markedsføring for bedrifter i Ålesund og på Sunnmøre.",
  alternates: { canonical: "https://elevera.no/blogg" },
};

const innlegg = [
  {
    slug: "google-business-profile-guide",
    tittel:
      "Google Business Profile for lokale bedrifter, komplett 2026-guide",
    ingress:
      "Den gratis Google-tjenesten som ofte gir mer trafikk enn nettsiden. De fleste lokale bedrifter har den satt opp halvveis, eller ikke i det hele tatt.",
    dato: "18. april 2026",
    kategori: "Lokal SEO",
    lesetid: "10 min",
  },
  {
    slug: "sosiale-medier-bedrift-pris",
    tittel: "Hva koster sosiale medier-styring for bedrifter?",
    ingress:
      "Du vet du burde poste oftere. Men hva koster det å la noen andre gjøre det? Her er de ærlige prisene, og hva du bør passe på.",
    dato: "12. april 2026",
    kategori: "Sosiale medier",
    lesetid: "9 min",
  },
  {
    slug: "markedsforingsbyraa-alesund",
    tittel: "Markedsføringsbyrå i Ålesund, hva bør du se etter?",
    ingress:
      "Hva gjør et markedsføringsbyrå, hva koster det, og hva skiller et godt byrå fra resten? En praktisk guide for bedrifter i Ålesund.",
    dato: "24. mars 2026",
    kategori: "Markedsføring",
    lesetid: "8 min",
  },
  {
    slug: "dronevideo-pris",
    tittel: "Hva koster dronevideo? Prisene og hva du faktisk betaler for",
    ingress:
      "En halvdag, en hel dag, råfiler eller ferdig redigert video? Vi rydder opp i prisforvirringen og forteller deg hva som faktisk påvirker prisen.",
    dato: "18. mars 2026",
    kategori: "Dronevideo",
    lesetid: "7 min",
  },
  {
    slug: "nettside-bedrift-pris",
    tittel: "Hva koster en nettside til bedriften? Ærlige priser",
    ingress:
      "Fra null kroner til 150 000 kr, prisen på en bedriftsnettside varierer enormt. Her er hva du faktisk trenger, og når du betaler for mye.",
    dato: "31. mars 2026",
    kategori: "Nettside",
    lesetid: "9 min",
  },
  {
    slug: "facebook-annonser-tips",
    tittel: "Facebook-annonser for småbedrifter, hva som faktisk fungerer",
    ingress:
      "Mange lokale bedrifter kaster bort penger på Facebook-annonser. Her er de vanligste feilene, og hva du bør gjøre i stedet.",
    dato: "1. april 2026",
    kategori: "Annonsering",
    lesetid: "8 min",
  },
  {
    slug: "instagram-lokale-kunder",
    tittel: "Slik bruker du Instagram til å få flere kunder lokalt",
    ingress:
      "Mange lokale bedrifter er på Instagram, men få bruker det på en måte som faktisk gir kunder. Her er det som fungerer.",
    dato: "13. mars 2026",
    kategori: "Sosiale medier",
    lesetid: "6 min",
  },
  {
    slug: "profesjonelle-bilder-bedrift",
    tittel: "Hvorfor trenger bedriften din profesjonelle bilder?",
    ingress:
      "Bilder er ofte det første potensielle kunder ser av bedriften din. Her er hvorfor investeringen i profesjonell foto lønner seg.",
    dato: "13. mars 2026",
    kategori: "Foto & Video",
    lesetid: "5 min",
  },
];

export default function BloggPage() {
  return (
    <>
      <HomeNav />
      <main className="blog-index">
        <div className="wrap">
          <header className="blog-index-head">
            <span className="section-label">Blogg</span>
            <h1>Tips og innsikt.</h1>
            <p>
              Artikler om foto, video, nettside og digital markedsføring for
              lokale bedrifter på Sunnmøre.
            </p>
          </header>

          <div className="blog-index-grid">
            {innlegg.map((post) => (
              <Link
                key={post.slug}
                href={`/blogg/${post.slug}`}
                className="blog-card"
              >
                <div className="blog-card-meta">
                  <span className="blog-card-category">{post.kategori}</span>
                  <span className="blog-card-dot" aria-hidden="true">·</span>
                  <span>{post.dato}</span>
                  <span className="blog-card-dot" aria-hidden="true">·</span>
                  <span>{post.lesetid}</span>
                </div>
                <h2>{post.tittel}</h2>
                <p>{post.ingress}</p>
                <span className="blog-card-cta">
                  Les artikkel
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <HomeFooter />
    </>
  );
}
