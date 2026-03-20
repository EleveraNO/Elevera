"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageCTA from "../../components/PageCTA";
import { FadeUp, StaggerContainer, StaggerItem } from "../../components/animations";

// ─── Types ────────────────────────────────────────────────────────────────────

type PhotoItem = {
  type: "photo";
  src: string;
  alt: string;
  span: "wide" | "normal";
};

type VideoItem = {
  type: "video";
  src: string;
  alt: string;
  poster: string;
  label?: string;
  span: "wide" | "normal";
};

type MediaItem = PhotoItem | VideoItem;

// ─── Media data ───────────────────────────────────────────────────────────────
// Replace src/poster values with real paths once assets are placed in:
//   /public/images/drive-trafikkskule/
//   /public/videos/drive-trafikkskule/

const media: MediaItem[] = [
  // Row 1
  { type: "video", src: "/videos/drive-trafikkskule/kan-du-kjore-med-henger.mp4", alt: "Drive Trafikkskule – kan du kjøre med henger?", poster: "/images/drive-trafikkskule/poster-kan-du-kjore-med-henger.jpg", label: "Kan du kjøre med henger?", span: "wide" },
  { type: "photo", src: "/images/drive-trafikkskule/foto-1.jpg", alt: "Drive Trafikkskule – foto 1", span: "normal" },
  // Row 2
  { type: "video", src: "/videos/drive-trafikkskule/koble-pa-henger.mp4", alt: "Drive Trafikkskule – koble på henger", poster: "/images/drive-trafikkskule/poster-koble-pa-henger.jpg", label: "Koble på henger", span: "normal" },
  { type: "video", src: "/videos/drive-trafikkskule/lyssjekk.mp4", alt: "Drive Trafikkskule – lyssjekk", poster: "/images/drive-trafikkskule/poster-lyssjekk.jpg", label: "Lyssjekk", span: "normal" },
  { type: "photo", src: "/images/drive-trafikkskule/foto-2.jpg", alt: "Drive Trafikkskule – foto 2", span: "normal" },
  // Row 3
  { type: "photo", src: "/images/drive-trafikkskule/foto-3.jpg", alt: "Drive Trafikkskule – foto 3", span: "normal" },
  { type: "video", src: "/videos/drive-trafikkskule/rundkjoring-fram.mp4", alt: "Drive Trafikkskule – rundkjøring framover", poster: "/images/drive-trafikkskule/poster-rundkjoring-fram.jpg", label: "Rundkjøring framover", span: "wide" },
  // Row 4
  { type: "video", src: "/videos/drive-trafikkskule/rundkjoring-hoyre.mp4", alt: "Drive Trafikkskule – rundkjøring høyre", poster: "/images/drive-trafikkskule/poster-rundkjoring-hoyre.jpg", label: "Rundkjøring høyre", span: "normal" },
  { type: "video", src: "/videos/drive-trafikkskule/rundkjoring-venstre.mp4", alt: "Drive Trafikkskule – rundkjøring venstre", poster: "/images/drive-trafikkskule/poster-rundkjoring-venstre.jpg", label: "Rundkjøring venstre", span: "wide" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DriveTrafikkskule() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function prevItem() {
    setLightboxIndex((i) => (i - 1 + media.length) % media.length);
  }

  function nextItem() {
    setLightboxIndex((i) => (i + 1) % media.length);
  }

  // Body scroll lock
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  // Keyboard navigation + focus trap
  useEffect(() => {
    if (!lightboxOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setLightboxOpen(false);
        return;
      }
      if (e.key === "ArrowLeft") {
        setLightboxIndex((i) => (i - 1 + media.length) % media.length);
        return;
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((i) => (i + 1) % media.length);
        return;
      }
      if (e.key === "Tab") {
        // Collect all focusable elements in the lightbox
        const modal = document.querySelector('[role="dialog"]');
        if (!modal) return;
        const focusable = Array.from(
          modal.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute("disabled"));
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            last.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  // Focus close button when lightbox opens
  useEffect(() => {
    if (lightboxOpen) {
      closeBtnRef.current?.focus();
    }
  }, [lightboxOpen]);

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32">
        {/* Purple glow blob */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <FadeUp>
            {/* "Prosjekt pågår" badge */}
            <div className="mb-6">
              <span className="inline-block rounded-full border border-[#fbbf24]/25 bg-[#fbbf24]/10 px-4 py-1.5 text-sm font-semibold text-[#fbbf24]">
                Prosjekt pågår
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-3 font-fraunces text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl md:text-7xl">
              Drive<br />Trafikkskule
            </h1>

            {/* Subtitle */}
            <p className="mb-6 text-sm tracking-wide text-white/40">
              Volda &amp; Ulsteinvik · Trafikkskule
            </p>

            {/* Service tags */}
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
      </section>

      {/* ── Innhold (masonry grid) ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeUp className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">Innhold</p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 gap-3 md:grid-cols-6">
            {media.map((item, index) => {
              const isWide = item.span === "wide";
              const colSpan = isWide ? "md:col-span-4" : "md:col-span-2";
              const aspectClass = isWide ? "aspect-video" : "aspect-[4/3]";
              const sizes = isWide
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 33vw";

              return (
                <StaggerItem key={item.src} className={colSpan}>
                  <button
                    type="button"
                    className={`group relative w-full overflow-hidden rounded-xl ${aspectClass}`}
                    onClick={() => openLightbox(index)}
                    aria-label={`Åpne ${item.alt} i fullskjerm`}
                  >
                    {item.type === "photo" ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes={sizes}
                      />
                    ) : (
                      <video
                        src={item.src}
                        poster={item.poster}
                        muted
                        playsInline
                        preload="none"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    )}

                    {/* Purple hover overlay */}
                    <div className="absolute inset-0 bg-[#7c3aed]/0 transition-colors duration-300 group-hover:bg-[#7c3aed]/20 group-focus-visible:bg-[#7c3aed]/20" />

                    {/* Expand icon (top-right, visible on hover) */}
                    <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                      <div className="rounded-md bg-black/50 p-1.5">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                        </svg>
                      </div>
                    </div>

                    {/* Video-only: play button overlay (always visible) */}
                    {item.type === "video" && (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/40 bg-black/20">
                            <svg className="ml-0.5 h-4 w-4 text-white/80" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        {item.label && (
                          <div className="absolute bottom-3 left-3">
                            <span className="text-xs text-white/40">{item.label}</span>
                          </div>
                        )}
                      </>
                    )}
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* ── Lightbox modal ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Mediagalleri – element ${lightboxIndex + 1} av ${media.length}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={(e) => { if (e.target === e.currentTarget) closeLightbox(); }}
          >
            {/* Content area — stop propagation so clicking media doesn't close */}
            <div
              className="relative flex h-full max-h-[90vh] w-full max-w-5xl items-center justify-center px-16"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = media[lightboxIndex];
                if (item.type === "photo") {
                  return (
                    <div className="relative h-full w-full">
                      <Image
                        key={item.src}
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-contain"
                        sizes="100vw"
                      />
                    </div>
                  );
                } else {
                  return (
                    <video
                      key={item.src}
                      src={item.src}
                      poster={item.poster}
                      controls
                      autoPlay
                      playsInline
                      className="max-h-full max-w-full rounded-xl"
                      aria-label={item.alt}
                    />
                  );
                }
              })()}
            </div>

            {/* Close button */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={closeLightbox}
              aria-label="Lukk"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous arrow */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prevItem(); }}
              aria-label="Forrige"
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next arrow */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); nextItem(); }}
              aria-label="Neste"
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── Resultater (låst placeholder) ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="rounded-xl border border-dashed border-white/10 bg-white/5 px-6 py-10 text-center">
              <div className="mb-3 flex items-center justify-center gap-2 text-white/30">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
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
          <a
            href="/#prosjekter"
            className="text-sm text-white/40 transition-colors hover:text-white"
          >
            ← Tilbake til prosjekter
          </a>
          <a
            href="/#kontakt"
            className="text-sm font-semibold text-[#a78bfa] transition-colors hover:text-white"
          >
            Book et møte →
          </a>
        </div>
      </div>

      <PageCTA heading="Vil du ha lignende resultater?" />
      <Footer />
    </main>
  );
}
