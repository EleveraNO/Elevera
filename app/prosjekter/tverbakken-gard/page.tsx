"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageCTA from "../../components/PageCTA";
import { FadeUp } from "../../components/animations";

const ACCENT = "#f59e0b";
const ACCENT_DIM = "rgba(245,158,11,0.12)";
const ACCENT_BORDER = "rgba(245,158,11,0.25)";
const ACCENT_GLOW = "rgba(245,158,11,0.15)";

const photos = [
  { src: "/images/tverbakken-gard/sau-paa-fjell.jpg",     label: "Sau på fjell",       w: 1656, h: 2208 },
  { src: "/images/tverbakken-gard/sau-med-landskap.jpg",  label: "Sau i landskap",     w: 1536, h: 2048 },
  { src: "/images/tverbakken-gard/saueskinn-farget.jpg",  label: "Farget saueskinn",   w: 825,  h: 1024 },
  { src: "/images/tverbakken-gard/personlig-sau.jpg",     label: "Personlig sau",      w: 1536, h: 2048 },
  { src: "/images/tverbakken-gard/personlig-lam.jpg",     label: "Personlig lam",      w: 1536, h: 2048 },
];

const deliverables = [
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Responsiv nettside",
    desc: "Fungerer like bra på mobil som desktop — kundene kan bestille uansett hvor de er.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
    title: "Produktsider",
    desc: "Én side per produkt med tydelige bilder, pris og bestillingsskjema. Ingen forvirring.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "E-post bestilling",
    desc: "Kunden fyller inn skjema — Roger får e-post. Ingen system å lære, ingen mellomledd.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "\"Rå Nordisk\" design",
    desc: "Naturbilder, klassiske fonter og jordfarger som matcher gårdens karakter — ikke et generisk nettsidetema.",
  },
];

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Prosjekter", item: "https://elevera.no/prosjekter" },
    { "@type": "ListItem", position: 3, name: "Tverbakken Gård", item: "https://elevera.no/prosjekter/tverbakken-gard" },
  ],
};

export default function TverbakkenGard() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const VIEWPORT_H = 580;
  const [travel, setTravel] = useState(4800);

  useEffect(() => {
    const measure = () => {
      if (imgRef.current) {
        setTravel(Math.max(0, imgRef.current.offsetHeight - VIEWPORT_H));
      }
    };
    const img = imgRef.current;
    if (img?.complete) measure();
    else img?.addEventListener("load", measure);
    window.addEventListener("resize", measure);
    return () => {
      img?.removeEventListener("load", measure);
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });
  const imgY = useTransform(scrollYProgress, [0.03, 0.97], [0, -travel]);
  const progressWidth = useTransform(scrollYProgress, [0.03, 0.97], ["0%", "100%"]);
  const hintOpacity = useTransform(scrollYProgress, [0, 0.07], [1, 0]);
  const headerY = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const topMaskOpacity = useTransform(scrollYProgress, [0.03, 0.12], [0, 1]);
  const bottomMaskOpacity = useTransform(scrollYProgress, [0.88, 0.97], [1, 0]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative flex min-h-screen items-end overflow-hidden pb-24 pt-32">
        <Image
          src="/images/tverbakken-gard/hero.jpg"
          alt="Tverbakken Gård"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/30 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-[#0a0a0a]/30" />

        <div className="relative z-10 w-full px-6">
          <div className="mx-auto max-w-4xl">
            <FadeUp>
              <div className="mb-6 flex flex-wrap gap-2">
                <span
                  className="inline-block rounded-full border px-4 py-1.5 text-sm font-semibold"
                  style={{ borderColor: ACCENT_BORDER, background: ACCENT_DIM, color: ACCENT }}
                >
                  Retainer
                </span>
              </div>
              <h1 className="mb-3 text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl md:text-7xl">
                Tverbakken<br />Gård
              </h1>
              <p className="mb-6 text-sm tracking-wide text-white/40">
                Kjerringøy, Nordland · Gård siden 1755
              </p>
              <div className="flex flex-wrap gap-2">
                {["Nettside", "Design", "E-post integrasjon"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded border px-3 py-1 text-sm"
                    style={{ borderColor: "rgba(245,158,11,0.25)", background: "rgba(245,158,11,0.10)", color: "#fbbf24" }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Om prosjektet ── */}
      <section className="relative px-6 py-24" style={{ overflow: "visible" }}>


        <div className="relative z-20 mx-auto max-w-6xl" style={{ overflow: "visible" }}>
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center md:gap-8" style={{ overflow: "visible" }}>

            {/* Tekst */}
            <FadeUp>
              <div className="mb-6 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>Om prosjektet</span>
                <div className="h-px w-8" style={{ background: "rgba(245,158,11,0.35)" }} />
              </div>

              <h2 className="mb-8 leading-[1.05] text-white" style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 800 }}>
                10 generasjoner.<br />
                <span
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontStyle: "italic",
                    fontWeight: 400,
                    color: ACCENT,
                    fontSize: "0.92em",
                  }}
                >
                  Én nettside.
                </span>
              </h2>

              <div className="mb-10 space-y-4" style={{ borderLeft: "2px solid rgba(245,158,11,0.25)", paddingLeft: "1.25rem" }}>
                <p className="text-base leading-relaxed" style={{ color: "rgba(242,237,230,0.65)" }}>
                  Roger Tverbakk driver gård i Kjerringøy — et sted familien har holdt til siden 1755. Han selger saueskinn med sjel, men manglet en nettside som fortalte den historien.
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(242,237,230,0.45)" }}>
                  Vi bygde «Rå Nordisk» — et designspråk som matcher gårdens karakter. Naturbilder, klassiske fonter og jordfarger. En bestillingsflyt som fungerer uten at Roger trenger å løfte en finger.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {[
                  { val: "1755", label: "Grunnlagt", accent: true },
                  { val: "10", label: "Generasjoner", accent: true },
                  { val: "Pågår", label: "Status", accent: false, dot: true },
                ].map(({ val, label, accent, dot }) => (
                  <div
                    key={label}
                    className="rounded-xl px-5 py-3"
                    style={{
                      background: accent ? "rgba(245,158,11,0.08)" : "rgba(255,255,255,0.04)",
                      border: `1px solid ${accent ? "rgba(245,158,11,0.2)" : "rgba(255,255,255,0.08)"}`,
                    }}
                  >
                    <div className="flex items-center gap-2">
                      {dot && <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#4ade80" }} />}
                      <p className="text-lg font-black leading-none" style={{ color: accent ? ACCENT : "#F2EDE6" }}>{val}</p>
                    </div>
                    <p className="mt-1.5 text-xs" style={{ color: "rgba(242,237,230,0.3)" }}>{label}</p>
                  </div>
                ))}
              </div>
            </FadeUp>

            {/* MacBook mockup — overflows column intentionally */}
            <FadeUp delay={0.15}>
              <div
                className="relative"
                style={{
                  overflow: "visible",
                  marginRight: "-15%",
                  marginTop: "-4%",
                  marginBottom: "-4%",
                }}
              >
                <div
                  className="pointer-events-none absolute blur-3xl"
                  style={{
                    inset: "-20% -10%",
                    background: "radial-gradient(ellipse at 60% 55%, rgba(245,158,11,0.18) 0%, transparent 65%)",
                  }}
                />
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/tverbakken-gard/heromockup.png"
                    alt="Tverbakken Gård nettside på MacBook"
                    width={1440}
                    height={1080}
                    className="relative w-full h-auto"
                    style={{ filter: "drop-shadow(0 48px 80px rgba(0,0,0,0.75)) drop-shadow(0 0 40px rgba(245,158,11,0.15))" }}
                    sizes="(max-width: 768px) 100vw, 60vw"
                  />
                </motion.div>
              </div>
            </FadeUp>

          </div>
        </div>
      </section>

      {/* ── Leveransen ── */}
      <section className="relative px-6 py-20">
        <div className="relative z-10 mx-auto max-w-6xl">

          <FadeUp className="mb-14">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
              Leveransen
            </p>
            <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-5xl font-extrabold text-white">
                Én nettside.<br />
                <span className="text-white/35">Komplett.</span>
              </h2>
              <p className="max-w-xs text-sm leading-relaxed text-white/40 sm:text-right">
                Design, kode og bestillingssystem — alt på plass. Roger trengte ikke å gjøre noe.
              </p>
            </div>
          </FadeUp>

          {/* Deliverables grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {deliverables.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                className="group rounded-2xl p-6"
                style={{
                  background: "#0e0e12",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                <div
                  className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                  style={{ background: ACCENT_DIM, border: `1px solid ${ACCENT_BORDER}` }}
                >
                  {item.icon}
                </div>
                <h3 className="mb-2 font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Live link */}
          <FadeUp className="mt-8">
            <div
              className="flex flex-col items-start gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between"
              style={{
                background: "linear-gradient(135deg, rgba(245,158,11,0.08) 0%, rgba(245,158,11,0.03) 100%)",
                border: `1px solid ${ACCENT_BORDER}`,
              }}
            >
              <div>
                <p className="mb-1 font-bold text-white">Se det ferdige resultatet</p>
                <p className="text-sm text-white/45">
                  Nettsiden er oppe og klar på{" "}
                  <span style={{ color: ACCENT }}>tverbakkengard.no</span>.
                </p>
              </div>
              <a
                href="https://tverbakkengard.no"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex flex-shrink-0 items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: ACCENT, color: "#0a0a0a" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#d97706")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = ACCENT)}
              >
                Se nettsiden
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Nettside scroll-visning (scroll-drevet) ── */}
      <section
        ref={scrollRef}
        className="relative px-6"
        style={{ height: `calc(100vh + ${travel + 320}px)` }}
      >
        <div className="sticky top-20 mx-auto max-w-5xl pt-6 pb-12">

          {/* Parallax header */}
          <motion.div className="mb-10" style={{ y: headerY }}>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
              Nettsiden
            </p>
            <h2 className="text-4xl font-extrabold text-white">
              Se den i sin helhet
            </h2>
          </motion.div>

          {/* Screenshot container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative overflow-hidden rounded-2xl"
            style={{
              height: VIEWPORT_H,
              border: "1px solid rgba(255,255,255,0.10)",
              boxShadow: "0 40px 100px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(255,255,255,0.04)",
            }}
          >
            {/* Top gradient mask — appears once scrolled past start */}
            <motion.div
              className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20"
              style={{
                opacity: topMaskOpacity,
                background: "linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, transparent 100%)",
              }}
            />
            {/* Bottom gradient mask — disappears near end */}
            <motion.div
              className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-20"
              style={{
                opacity: bottomMaskOpacity,
                background: "linear-gradient(to top, rgba(10,10,10,0.7) 0%, transparent 100%)",
              }}
            />

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <motion.img
              ref={imgRef}
              src="/images/tverbakken-gard/fullpage.png"
              alt="Tverbakken Gård nettside"
              className="block w-full"
              style={{ y: imgY }}
            />
          </motion.div>

          {/* Progress bar */}
          <div
            className="mt-3 h-[2px] overflow-hidden rounded-full"
            style={{ background: "rgba(255,255,255,0.06)" }}
          >
            <motion.div
              className="h-full rounded-full"
              style={{ width: progressWidth, background: ACCENT }}
            />
          </div>

          {/* Scroll hint — fades out once scrolling begins */}
          <motion.div
            className="mt-4 flex items-center justify-center gap-2"
            style={{ opacity: hintOpacity }}
          >
            <p className="text-xs" style={{ color: "rgba(255,255,255,0.22)" }}>
              Scroll for å se hele nettsiden
            </p>
            <motion.svg
              width="10" height="10" viewBox="0 0 24 24"
              fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="2"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              <path d="M6 10l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </motion.svg>
          </motion.div>

        </div>
      </section>

      {/* ── Bildegalleri ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">

          <FadeUp className="mb-10">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
                  Gården
                </p>
                <h2 className="text-4xl font-extrabold text-white">
                  Historien bak produktet
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-relaxed sm:text-right" style={{ color: "rgba(255,255,255,0.35)" }}>
                Kjerringøy, Nordland — et sted familien<br className="hidden sm:block" /> har holdt til siden 1755.
              </p>
            </div>
          </FadeUp>

          {/* Masonry columns — bilder i opprinnelig proporsjoner */}
          <div className="columns-2 gap-3 md:columns-3 md:gap-4">
            {photos.map((photo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: i * 0.08, ease: "easeOut" }}
                className="group relative mb-3 break-inside-avoid overflow-hidden rounded-xl md:mb-4"
              >
                <Image
                  src={photo.src}
                  alt={photo.label}
                  width={photo.w}
                  height={photo.h}
                  className="block w-full h-auto transition-transform duration-700 group-hover:scale-[1.03]"
                  sizes="(max-width: 640px) 50vw, 33vw"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, transparent 55%)" }}
                />
                <p
                  className="absolute bottom-0 left-0 right-0 translate-y-1 px-4 py-3 text-xs font-semibold tracking-wide text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                >
                  {photo.label}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ── Stack & tech ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div
              className="rounded-2xl px-8 py-10"
              style={{ background: "#0e0e12", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <div className="grid gap-8 md:grid-cols-3">
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/30">Stack</p>
                  <p className="font-semibold text-white">Next.js 16 · TypeScript · Tailwind</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/30">Integrasjoner</p>
                  <p className="font-semibold text-white">Resend · Vercel</p>
                </div>
                <div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-white/30">Design</p>
                  <p className="font-semibold text-white">Cormorant Garamond · Lora · Rå Nordisk</p>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Footer navigation ── */}
      <div className="mx-auto max-w-6xl border-t border-white/10 px-6 pt-8 mt-8 mb-4">
        <div className="flex items-center justify-between">
          <a href="/#prosjekter" className="text-sm text-white/40 transition-colors hover:text-white">
            ← Tilbake til prosjekter
          </a>
          <a href="/#kontakt" className="text-sm font-semibold transition-colors hover:text-white" style={{ color: "#fbbf24" }}>
            Book et møte →
          </a>
        </div>
      </div>

      <PageCTA heading="Din bedrift har en historie. La oss fortelle den." />
      <Footer />
    </main>
    </>
  );
}
