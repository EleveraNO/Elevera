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
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">
              Blogg
            </p>
            <h1 className="text-4xl font-bold text-white sm:text-5xl">
              Tips og innsikt
            </h1>
            <p className="mt-4 text-white/50 max-w-xl">
              Artikler om foto, video, nettside og digital markedsføring for bedrifter i Ålesund og på Sunnmøre.
            </p>
          </div>

          <div className="space-y-6">
            {innlegg.map((post) => (
              <Link
                key={post.slug}
                href={`/blogg/${post.slug}`}
                className="group block rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-[#7c3aed]/40 hover:bg-white/8"
              >
                <div className="mb-3 flex items-center gap-3">
                  <span className="rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-3 py-1 text-xs font-medium text-[#a78bfa]">
                    {post.kategori}
                  </span>
                  <span className="text-xs text-white/30">{post.dato}</span>
                  <span className="text-xs text-white/30">{post.lesetid}</span>
                </div>
                <h2 className="mb-3 text-xl font-bold text-white group-hover:text-[#a78bfa] transition-colors">
                  {post.tittel}
                </h2>
                <p className="text-sm leading-relaxed text-white/50">{post.ingress}</p>
                <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[#7c3aed]">
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
