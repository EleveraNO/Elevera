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
  { type: "video",  src: "/videos/drive-trafikkskule/reklamevideo.mp4", alt: "Reklamevideo for Drive Trafikkskule", poster: "/images/drive-trafikkskule/reklamevideo-poster.jpg", label: "Reklamevideo", span: "wide" },
  { type: "photo",  src: "/images/drive-trafikkskule/foto-1.jpg", alt: "Drive Trafikkskule – foto 1", span: "normal" },
  // Row 2
  { type: "photo",  src: "/images/drive-trafikkskule/foto-2.jpg", alt: "Drive Trafikkskule – foto 2", span: "normal" },
  { type: "photo",  src: "/images/drive-trafikkskule/foto-3.jpg", alt: "Drive Trafikkskule – foto 3", span: "normal" },
  { type: "photo",  src: "/images/drive-trafikkskule/foto-4.jpg", alt: "Drive Trafikkskule – foto 4", span: "normal" },
  // Row 3
  { type: "photo",  src: "/images/drive-trafikkskule/foto-5.jpg", alt: "Drive Trafikkskule – foto 5", span: "normal" },
  { type: "video",  src: "/videos/drive-trafikkskule/dronevideo.mp4", alt: "Dronevideo over Volda", poster: "/images/drive-trafikkskule/dronevideo-poster.jpg", label: "Dronevideo — Volda", span: "wide" },
  // Row 4
  { type: "photo",  src: "/images/drive-trafikkskule/foto-6.jpg", alt: "Drive Trafikkskule – foto 6", span: "normal" },
  { type: "photo",  src: "/images/drive-trafikkskule/foto-7.jpg", alt: "Drive Trafikkskule – foto 7", span: "normal" },
  { type: "photo",  src: "/images/drive-trafikkskule/foto-8.jpg", alt: "Drive Trafikkskule – foto 8", span: "normal" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DriveTrafikkkulePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

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

      {/* ── Innhold (masonry grid) — Task 2 ── */}
      {/* TODO: add grid section */}

      {/* ── Lightbox — Task 3 ── */}
      {/* TODO: add lightbox modal */}

      {/* ── Resultater — Task 4 ── */}
      {/* TODO: add results placeholder */}

      {/* ── Footer nav — Task 4 ── */}
      {/* TODO: add footer nav */}

      <PageCTA heading="Vil du ha lignende resultater?" />
      <Footer />
    </main>
  );
}
