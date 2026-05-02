"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import HomeNav from "../../components/home/HomeNav";
import HomeFooter from "../../components/home/HomeFooter";
import PageCTA from "../../components/PageCTA";
import { FadeUp } from "../../components/animations";

const ACCENT = "#2F5F3F";
const ACCENT_DIM = "rgba(47,95,63,0.10)";
const ACCENT_BORDER = "rgba(47,95,63,0.28)";

const deliverables = [
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    title: "Visuelt designspråk",
    desc: "Mørk og taktil stemning som matcher musikken. Cormorant i italic, gylden accent mot dyp blågrønn, og luftig typografi.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Responsiv hjemmeside",
    desc: "Fungerer like bra på mobil som desktop. Optimalisert for delinger, sosial preview og rask innlasting.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Kontaktskjema",
    desc: "Bookingforespørsler kommer rett i innboksen, uten skjemaverktøy eller mellomledd.",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke={ACCENT} strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    title: "Sosiale plattformer integrert",
    desc: "Spotify, YouTube, Instagram og Facebook samlet på ett sted, der publikum lett finner musikken.",
  },
];

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const jsonLdBreadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Hjem", item: "https://elevera.no" },
    { "@type": "ListItem", position: 2, name: "Prosjekter", item: "https://elevera.no/prosjekter" },
    { "@type": "ListItem", position: 3, name: "Mathilde Teigen", item: "https://elevera.no/prosjekter/mathilde-teigen" },
  ],
};

export default function MathildeTeigen() {
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
      <main className="min-h-screen bg-[var(--cream)]" style={{ overflowX: "clip" }}>
        <HomeNav />

        {/* ── Hero: split layout — tekst venstre, screenshot høyre ── */}
        <section className="relative flex min-h-screen items-center overflow-hidden px-6 pb-16 pt-28">

          {/* Ambient glow bak screenshot (høyre side) */}
          <div
            className="pointer-events-none absolute"
            style={{
              right: "-5%", top: "50%",
              width: 700, height: 700,
              transform: "translateY(-50%)",
              background: "radial-gradient(circle, rgba(47,95,63,0.12) 0%, rgba(47,95,63,0.04) 40%, transparent 70%)",
              borderRadius: "50%",
            }}
          />

          <div className="relative z-10 mx-auto w-full max-w-6xl">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-8">

              {/* ── Venstre: tekst ── */}
              <div className="w-full lg:w-[46%]">

                <motion.div
                  className="mb-6 inline-flex items-center gap-2.5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease }}
                >
                  <span className="h-1.5 w-1.5 rounded-full" style={{ background: ACCENT }} />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                    Casestudie · Artistside
                  </span>
                </motion.div>

                <motion.h1
                  className="mb-4 font-extrabold leading-[1.0] tracking-tight text-[var(--black)]"
                  style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.08, ease }}
                >
                  Mathilde
                  <br />
                  <em
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      fontStyle: "italic",
                      fontWeight: 700,
                      color: ACCENT,
                    }}
                  >
                    Teigen
                  </em>
                </motion.h1>

                <motion.p
                  className="mb-8 text-sm tracking-wide"
                  style={{ color: "var(--stone-500)" }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.18, ease }}
                >
                  Trøndelag og Nordland · Artist, låtskriver, dirigent
                </motion.p>

                <motion.div
                  className="mb-8 flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.26, ease }}
                >
                  {["Nettside", "Design", "Kontaktskjema"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded border px-3 py-1 text-xs font-medium"
                      style={{ borderColor: ACCENT_BORDER, background: ACCENT_DIM, color: ACCENT }}
                    >
                      {tag}
                    </span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.34, ease }}
                >
                  <a
                    href="https://mathildeteigen.no"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                    style={{ background: ACCENT, color: "var(--cream)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#234A30")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = ACCENT)}
                  >
                    Se nettsiden live
                    <svg width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </motion.div>
              </div>

              {/* ── Høyre: screenshot med floating ── */}
              <motion.div
                className="relative w-full lg:w-[54%]"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.12, ease }}
              >
                <div
                  className="pointer-events-none absolute blur-3xl"
                  style={{
                    inset: "-15% -8%",
                    background: "radial-gradient(ellipse at 55% 60%, rgba(47,95,63,0.22) 0%, transparent 65%)",
                  }}
                />
                <motion.div
                  animate={{ y: [0, -14, 0] }}
                  transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <Image
                    src="/images/mathilde-teigen/hero-screenshot.png"
                    alt="Mathilde Teigen nettside"
                    width={1440}
                    height={900}
                    className="relative w-full h-auto rounded-2xl"
                    style={{
                      filter: "drop-shadow(0 48px 80px rgba(15,15,14,0.25)) drop-shadow(0 0 50px rgba(47,95,63,0.18))",
                    }}
                    sizes="(max-width: 768px) 95vw, 55vw"
                    priority
                  />
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── Stats-stripe ── */}
        <section className="border-y border-[var(--stone-200)]" style={{ background: "var(--cream)" }}>
          <div className="mx-auto max-w-5xl px-6">
            <div className="grid grid-cols-3 divide-x divide-[var(--stone-200)]">
              {[
                { val: "6", label: "Tjenester" },
                { val: "1", label: "Hjemmeside" },
                { val: "Live", label: "Status", dot: true },
              ].map(({ val, label, dot }) => (
                <div key={label} className="px-6 py-7 text-center sm:px-10">
                  <div className="flex items-center justify-center gap-2">
                    {dot && (
                      <span
                        className="inline-block h-1.5 w-1.5 rounded-full"
                        style={{ background: "#4ade80" }}
                      />
                    )}
                    <p
                      className="text-2xl font-black leading-none tracking-tight"
                      style={{ color: dot ? "var(--black)" : ACCENT }}
                    >
                      {val}
                    </p>
                  </div>
                  <p className="mt-1.5 text-[11px] uppercase tracking-widest" style={{ color: "var(--stone-500)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Om prosjektet ── */}
        <section className="px-6 py-24">
          <div className="mx-auto max-w-5xl">
            <FadeUp>
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.2em]" style={{ color: ACCENT }}>
                  Om prosjektet
                </span>
                <div className="h-px flex-1" style={{ background: "var(--stone-300)" }} />
              </div>
            </FadeUp>

            <div className="grid gap-12 md:grid-cols-[1fr_1.1fr] md:gap-16 md:items-start">
              <FadeUp>
                <h2
                  className="leading-[1.05] text-[var(--black)]"
                  style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.8rem)", fontWeight: 800 }}
                >
                  En artist trengte
                  <br />
                  <em
                    style={{
                      fontFamily: "var(--font-fraunces), Georgia, serif",
                      fontStyle: "italic",
                      fontWeight: 400,
                      color: ACCENT,
                      fontSize: "0.9em",
                    }}
                  >
                    en hjemmeside som matchet uttrykket hennes.
                  </em>
                </h2>
              </FadeUp>

              <FadeUp delay={0.1}>
                <div
                  className="space-y-5 text-base leading-relaxed"
                  style={{ borderLeft: "2px solid var(--stone-300)", paddingLeft: "1.5rem" }}
                >
                  <p style={{ color: "var(--stone-700)" }}>
                    Mathilde er artist, låtskriver og dirigent, med et sterkt bånd til natur, stemmer og det organiske.
                    Hjemmesiden hennes manglet det visuelle uttrykket musikken bærer.
                  </p>
                  <p style={{ color: "var(--stone-600)" }}>
                    Vi bygde en mørk, taktil hjemmeside hvor bilder og typografi får bære stemningen.
                    Cormorant i italic, gylden accent mot dyp blågrønn, og store fotografier med god luft.
                  </p>
                  <p style={{ color: "var(--stone-500)" }}>
                    Resultatet er en side som ikke bare lister hva hun gjør. Den ligner på henne.
                  </p>
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
                <h2 className="text-5xl font-extrabold text-[var(--black)]">
                  Én visuell hjemmeside.<br />
                  <span className="text-[var(--stone-500)]">Komplett.</span>
                </h2>
                <p className="max-w-xs text-sm leading-relaxed text-[var(--stone-500)] sm:text-right">
                  Design, kode og kontaktflyt. Alt på plass.
                </p>
              </div>
            </FadeUp>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {deliverables.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  className="rounded-2xl p-6"
                  style={{
                    background: "var(--stone-50)",
                    border: "1px solid var(--stone-200)",
                  }}
                >
                  <div
                    className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{ background: ACCENT_DIM, border: `1px solid ${ACCENT_BORDER}` }}
                  >
                    {item.icon}
                  </div>
                  <h3 className="mb-2 font-bold text-[var(--black)]">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-[var(--stone-500)]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Nettside scroll-visning ── */}
        <section
          ref={scrollRef}
          className="relative px-6"
          style={{ height: `calc(100vh + ${travel + 320}px)` }}
        >
          <div className="sticky top-20 mx-auto max-w-5xl pt-6 pb-12">

            <motion.div className="mb-10" style={{ y: headerY }}>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest" style={{ color: ACCENT }}>
                Nettsiden
              </p>
              <h2 className="text-4xl font-extrabold text-[var(--black)]">
                Se den i sin helhet
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="relative overflow-hidden rounded-2xl"
              style={{
                height: VIEWPORT_H,
                border: "1px solid var(--stone-200)",
                boxShadow: "0 40px 100px rgba(15,15,14,0.18), 0 0 0 0.5px var(--stone-200)",
              }}
            >
              <motion.div
                className="pointer-events-none absolute inset-x-0 top-0 z-10 h-20"
                style={{
                  opacity: topMaskOpacity,
                  background: "linear-gradient(to bottom, rgba(10,10,10,0.7) 0%, transparent 100%)",
                }}
              />
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
                src="/images/mathilde-teigen/fullpage.png"
                alt="Mathilde Teigen nettside (full lengde)"
                className="block w-full"
                style={{ y: imgY }}
              />
            </motion.div>

            <div
              className="mt-3 h-[2px] overflow-hidden rounded-full"
              style={{ background: "var(--stone-200)" }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ width: progressWidth, background: ACCENT }}
              />
            </div>

            <motion.div
              className="mt-4 flex items-center justify-center gap-2"
              style={{ opacity: hintOpacity }}
            >
              <p className="text-xs" style={{ color: "var(--stone-500)" }}>
                Scroll for å se hele nettsiden
              </p>
              <motion.svg
                width="10" height="10" viewBox="0 0 24 24"
                fill="none" stroke="var(--stone-500)" strokeWidth="2"
                animate={{ y: [0, 3, 0] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              >
                <path d="M6 10l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </motion.svg>
            </motion.div>
          </div>
        </section>

        {/* ── Stack & tech ── */}
        <section className="px-6 py-16">
          <div className="mx-auto max-w-6xl">
            <FadeUp>
              <div
                className="rounded-2xl px-8 py-10"
                style={{ background: "var(--stone-50)", border: "1px solid var(--stone-200)" }}
              >
                <div className="grid gap-8 md:grid-cols-3">
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--stone-500)]">Stack</p>
                    <p className="font-semibold text-[var(--black)]">Next.js · TypeScript · Tailwind v4</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--stone-500)]">Integrasjoner</p>
                    <p className="font-semibold text-[var(--black)]">Vercel · Resend</p>
                  </div>
                  <div>
                    <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[var(--stone-500)]">Design</p>
                    <p className="font-semibold text-[var(--black)]">Cormorant · DM Sans · Mørk editorial</p>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        <PageCTA heading="Vil du også ha et nettsted som ligner deg?" />
        <HomeFooter />
      </main>
    </>
  );
}
