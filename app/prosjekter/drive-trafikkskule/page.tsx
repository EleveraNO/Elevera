"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageCTA from "../../components/PageCTA";
import { FadeUp, StaggerContainer, StaggerItem } from "../../components/animations";

// ─── Components ───────────────────────────────────────────────────────────────

function MutedVideo({ src, className = "" }: { src: string; className?: string }) {
  return (
    <video
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className={`h-full w-full object-cover ${className}`}
    />
  );
}

// ─── Reels carousel ───────────────────────────────────────────────────────────

const reels = [
  { src: "/videos/drive-trafikkskule/rundkjoring-fram.mp4",    poster: "/images/drive-trafikkskule/poster-rundkjoring-fram.jpg",    label: "Rundkjøring framover" },
  { src: "/videos/drive-trafikkskule/koble-pa-henger.mp4",     poster: "/images/drive-trafikkskule/poster-koble-pa-henger.jpg",     label: "Koble på henger" },
  { src: "/videos/drive-trafikkskule/lyssjekk.mp4",            poster: "/images/drive-trafikkskule/poster-lyssjekk.jpg",            label: "Lyssjekk" },
  { src: "/videos/drive-trafikkskule/rundkjoring-hoyre.mp4",   poster: "/images/drive-trafikkskule/poster-rundkjoring-hoyre.jpg",   label: "Rundkjøring høyre" },
  { src: "/videos/drive-trafikkskule/rundkjoring-venstre.mp4", poster: "/images/drive-trafikkskule/poster-rundkjoring-venstre.jpg", label: "Rundkjøring venstre" },
  { src: "/videos/drive-trafikkskule/kan-du-kjore-med-henger.mp4", poster: "/images/drive-trafikkskule/poster-kan-du-kjore-med-henger.jpg", label: "Kan du kjøre med henger?" },
];

function ReelsCarousel() {
  const [active, setActive] = useState(0);
  const [direction, setDirection] = useState(1);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const touchStartX = useRef<number | null>(null);

  const isTouch = () => typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;

  function startInterval() {
    if (isTouch()) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setDirection(1);
      setActive((i) => (i + 1) % reels.length);
    }, 3000);
  }

  function stopInterval() {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  useEffect(() => {
    startInterval();
    return () => stopInterval();
  }, []);

  function select(i: number) {
    setDirection(i > active ? 1 : -1);
    setActive(i);
    startInterval();
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }

  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      const prevIdx = (active - 1 + reels.length) % reels.length;
      const nextIdx = (active + 1) % reels.length;
      if (dx < 0) { setDirection(1); setActive(nextIdx); }
      else         { setDirection(-1); setActive(prevIdx); }
    }
    touchStartX.current = null;
  }

  const variants = {
    enter: (dir: number) => ({ x: dir * 320, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({ x: -dir * 320, opacity: 0 }),
  };

  const prevIdx = (active - 1 + reels.length) % reels.length;
  const nextIdx = (active + 1) % reels.length;

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="group relative inline-flex justify-center overflow-hidden rounded-2xl reels-container touch-pan-y"
        onMouseEnter={stopInterval}
        onMouseLeave={startInterval}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="popLayout" custom={direction}>
          <motion.div
            key={active}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            whileHover={{ scale: 1.08, zIndex: 50 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="absolute inset-0 overflow-hidden rounded-2xl reels-video"
            style={{ cursor: "zoom-in" }}
          >
            <video src={reels[active].src} poster={reels[active].poster} autoPlay muted loop playsInline className="h-full w-full object-cover" />
          </motion.div>
        </AnimatePresence>

        {/* Pil venstre — alltid synlig på mobil */}
        <button
          type="button"
          onClick={() => select(prevIdx)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        {/* Pil høyre — alltid synlig på mobil */}
        <button
          type="button"
          onClick={() => select(nextIdx)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/60 text-white transition-opacity duration-200 md:opacity-0 md:group-hover:opacity-100"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Prikk-indikatorer */}
      <div className="flex gap-2">
        {reels.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => select(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${i === active ? "w-5 bg-white" : "w-1.5 bg-white/30"}`}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Photo data ───────────────────────────────────────────────────────────────

const photos = [
  "/images/drive-trafikkskule/foto-1.jpg",
  "/images/drive-trafikkskule/foto-2.jpg",
  "/images/drive-trafikkskule/foto-3.jpg",
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DriveTrafikkskule() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <style>{`
        .reels-container { height: 480px; aspect-ratio: 9/16; }
        .reels-video    { height: 480px; aspect-ratio: 9/16; }
        @media (min-width: 768px) {
          .reels-container { height: 680px; }
          .reels-video    { height: 680px; }
        }
        .status-carousel { height: 320px; }
        @media (min-width: 768px) {
          .status-carousel { height: 600px; }
        }
      `}</style>

      <Navbar />

      {/* ── Hero med carousel-bakgrunn ── */}
      <section className="relative flex min-h-screen items-center overflow-hidden">
        <video
          src="/videos/drive-trafikkskule/hero-carousel.mp4"
          autoPlay muted loop playsInline preload="auto"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-transparent to-[#0a0a0a]" />

        <div className="relative z-10 w-full px-6 pt-32 pb-24">
          <div className="mx-auto max-w-4xl">
            <FadeUp>
              <div className="mb-6">
                <span className="inline-block rounded-full border border-[#fbbf24]/25 bg-[#fbbf24]/10 px-4 py-1.5 text-sm font-semibold text-[#fbbf24]">
                  Prosjekt pågår
                </span>
              </div>
              <h1 className="mb-3 text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl md:text-7xl">
                Drive<br />Trafikkskule
              </h1>
              <p className="mb-6 text-sm tracking-wide text-white/40">
                Volda &amp; Ulsteinvik · Trafikkskule
              </p>
              <div className="flex flex-wrap gap-2">
                {["Foto", "Video & Dronevideo", "Annonsering"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-[#7c3aed]/30 bg-[#7c3aed]/15 px-3 py-1 text-sm text-[#a78bfa]"
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
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:items-center">
            {/* Tekst */}
            <FadeUp>
              <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">Om prosjektet</p>
              <h2 className="mb-6 text-3xl font-extrabold text-white sm:text-4xl">
                Fylle kurs og bygge troverdighet
              </h2>
              <p className="mb-4 text-base leading-relaxed text-white/60">
                Drive Trafikkskule ville nå flere folk som vurderer å ta BE-lappen, og overbevise dem om at Drive er det rette valget. Utfordringen var å skape innhold som både stopper scrollingen og bygger tillit.
              </p>
              <p className="text-base leading-relaxed text-white/60">
                Elevera tok på seg å produsere en innholdspakke skreddersydd for sosiale medier, med videoer designet for å gi folk troen på at de faktisk kan kjøre, og lyst til å melde seg på kurs.
              </p>
            </FadeUp>

            {/* Video-aksent */}
            <FadeUp>
              <div className="relative aspect-[9/16] w-full max-w-[320px] mx-auto overflow-hidden rounded-2xl">
                <MutedVideo src="/videos/drive-trafikkskule/skaldutalappen.mp4" />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* ── Hva vi lagde ── */}
      <section className="relative overflow-hidden px-6 py-16">
        {/* Bakgrunnsatmosfære — purple glow + filmstripe */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 65% 90% at 90% 50%, rgba(124,58,237,0.18) 0%, transparent 65%), radial-gradient(ellipse 40% 50% at 5% 80%, rgba(124,58,237,0.09) 0%, transparent 60%)"
          }} />
          <div className="absolute inset-0 opacity-[0.035]" style={{
            backgroundImage: "repeating-linear-gradient(45deg, white 0px, white 1px, transparent 1px, transparent 18px)"
          }} />
          <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl">
          <FadeUp className="mb-12">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">Leveransen</p>
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Hva vi lagde</h2>
          </FadeUp>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">

            {/* Venstre — tekst */}
            <FadeUp>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">Leveransen</p>
              <h2 className="mb-2 text-7xl font-black leading-none text-white">6</h2>
              <h3 className="mb-6 text-3xl font-extrabold text-white/60">Reels</h3>
              <div className="mb-8 h-px w-12 bg-[#7c3aed]/50" />
              <p className="mb-8 text-base leading-relaxed text-white/50">
                Videoer optimalisert for Reels og Facebook, designet for å stoppe thumben og bygge troverdighet hos folk som vurderer å ta BE-lappen.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Kamera", "Drone", "GoPro", "Tutorial-format"].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs text-white/40">{t}</span>
                ))}
              </div>
            </FadeUp>

            {/* Høyre — carousel */}
            <FadeUp>
              <div className="flex justify-center lg:justify-end">
                <ReelsCarousel />
              </div>
            </FadeUp>

          </div>

        </div>
      </section>

      {/* ── Bilder ── */}
      <section className="relative overflow-hidden px-6 py-8">
        {/* Bakgrunnsatmosfære — amber glow + dot matrix */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0" style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 55%, rgba(251,191,36,0.09) 0%, transparent 70%), radial-gradient(ellipse 40% 40% at 90% 20%, rgba(251,191,36,0.06) 0%, transparent 60%)"
          }} />
          <div className="absolute inset-0 opacity-[0.045]" style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "22px 22px"
          }} />
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0a0a0a] to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl">
          {/* Header */}
          <FadeUp className="mb-8">
            <div className="flex items-end justify-between">
              <div>
                <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">Leveransen</p>
                <h2 className="mb-2 text-7xl font-black leading-none text-white">10</h2>
                <h3 className="mb-6 text-3xl font-extrabold text-white/60">Bilder</h3>
              </div>
              <div className="flex gap-2">
                {["Portrett", "Redigering", "Lokasjon"].map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/40">{t}</span>
                ))}
              </div>
            </div>
          </FadeUp>

          {/* Bilder — naturlig format */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
            {photos.map((foto, i) => (
              <FadeUp key={i}>
                <div className="overflow-hidden rounded-2xl">
                  <Image
                    src={foto}
                    alt="Drive Trafikkskule"
                    width={0}
                    height={0}
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="w-full h-auto transition-transform duration-500 hover:scale-[1.02]"
                  />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── Der vi er nå ── */}
      <section className="relative overflow-hidden py-24 min-h-screen flex items-center">

        {/* Bakgrunnsvideo */}
        <video
          src="/videos/drive-trafikkskule/Rundkj%C3%B8ring.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/75" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-transparent to-[#0a0a0a]" />

        {/* Fremdrift */}
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <FadeUp>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">Status</p>
            <h2 className="mb-10 text-3xl font-extrabold text-white sm:text-4xl">Der vi er nå</h2>

            <div className="space-y-6">
              {[
                { label: "Produksjon", desc: "6 reels og bilder, ferdig produsert og klart.", done: true },
                { label: "Publisering", desc: "Innholdet publiseres på sosiale medier.", done: false },
                { label: "Annonsering", desc: "Betalt distribusjon for å nå flere potensielle kursdeltakere.", done: false },
              ].map((step, i) => (
                <div key={step.label} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 text-xs font-bold ${step.done ? "border-[#7c3aed] bg-[#7c3aed] text-white" : "border-white/20 bg-transparent text-white/30"}`}>
                      {step.done ? (
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                      ) : (i + 1)}
                    </div>
                    {i < 2 && <div className={`mt-1 w-px flex-1 ${step.done ? "bg-[#7c3aed]/40" : "bg-white/10"}`} style={{ minHeight: "2rem" }} />}
                  </div>
                  <div className="pb-6">
                    <p className={`mb-1 font-semibold ${step.done ? "text-white" : "text-white/40"}`}>{step.label}</p>
                    <p className="text-sm text-white/30">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Resultater (låst) ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="rounded-xl border border-dashed border-white/10 bg-white/5 px-6 py-10 text-center">
              <div className="mb-3 flex items-center justify-center gap-2">
                <svg className="h-4 w-4 text-white/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-sm font-semibold text-white/30">Resultater &amp; tall</p>
              </div>
              <p className="text-sm text-white/20">
                Innsikt og kampanjeresultater publiseres når prosjektet er ferdig
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Footer navigation ── */}
      <div className="mx-auto max-w-6xl border-t border-white/10 px-6 pt-8 mt-16">
        <div className="flex items-center justify-between">
          <a href="/#prosjekter" className="text-sm text-white/40 transition-colors hover:text-white">
            ← Tilbake til prosjekter
          </a>
          <a href="/#kontakt" className="text-sm font-semibold text-[#a78bfa] transition-colors hover:text-white">
            Book et møte →
          </a>
        </div>
      </div>

      <PageCTA heading="Vil du ha lignende resultater?" />
      <Footer />
    </main>
  );
}
