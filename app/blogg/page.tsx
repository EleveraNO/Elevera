import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Blogg – Tips og innsikt om digital markedsføring | Elevera",
  description:
    "Les artikler og tips om foto, video, nettside og digital markedsføring for bedrifter i Ålesund og på Sunnmøre.",
  alternates: { canonical: "https://elevera.no/blogg" },
};

const innlegg = [
  {
    slug: "markedsforingsbyraa-alesund",
    tittel: "Markedsføringsbyrå i Ålesund – hva bør du se etter?",
    ingress:
      "Hva gjør et markedsføringsbyrå, hva koster det, og hva skiller et godt byrå fra resten? En praktisk guide for bedrifter i Ålesund.",
    dato: "24. mars 2026",
    kategori: "Markedsføring",
    lesetid: "8 min",
  },
  {
    slug: "dronevideo-pris",
    tittel: "Hva koster dronevideo? Her er prisene — og hva du faktisk betaler for",
    ingress:
      "En halvdag, en hel dag, råfiler eller ferdig redigert video? Vi rydder opp i prisforvirringen og forteller deg hva som faktisk påvirker prisen.",
    dato: "18. mars 2026",
    kategori: "Dronevideo",
    lesetid: "7 min",
  },
  {
    slug: "nettside-bedrift-pris",
    tittel: "Hva koster en nettside til bedriften? Her er de ærlige prisene",
    ingress:
      "Fra null kroner til 150 000 kr — prisen på en bedriftsnettside varierer enormt. Her er hva du faktisk trenger, og når du betaler for mye.",
    dato: "31. mars 2026",
    kategori: "Nettside",
    lesetid: "9 min",
  },
  {
    slug: "facebook-annonser-tips",
    tittel: "Facebook-annonser for småbedrifter — hva som faktisk fungerer",
    ingress:
      "Mange lokale bedrifter kaster bort penger på Facebook-annonser. Her er de vanligste feilene vi ser — og hva du bør gjøre i stedet.",
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
    <main className="min-h-screen bg-[#131312]">
      <Navbar />

      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#f2ca50]">
              Blogg
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Tips og innsikt
            </h1>
            <p className="mt-4 text-[#99907c] max-w-xl">
              Artikler om foto, video, nettside og digital markedsføring for bedrifter i Ålesund og på Sunnmøre.
            </p>
          </div>

          <div className="space-y-6">
            {innlegg.map((post) => (
              <Link
                key={post.slug}
                href={`/blogg/${post.slug}`}
                className="group block rounded-2xl border border-[rgba(77,70,53,0.2)] bg-white/5 p-8 transition-all hover:border-[#f2ca50]/40 hover:bg-white/8"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full border border-[#f2ca50]/30 bg-[#f2ca50]/10 px-3 py-1 text-xs font-medium text-[#f2ca50]">
                    {post.kategori}
                  </span>
                  <span className="text-xs text-white/30">{post.dato}</span>
                  <span className="text-xs text-white/30">{post.lesetid}</span>
                </div>
                <h2 className="mb-3 text-xl font-bold text-white group-hover:text-white transition-colors">
                  {post.tittel}
                </h2>
                <p className="text-sm leading-relaxed text-[#99907c]">{post.ingress}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#f2ca50]">
                  Les artikkel
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
