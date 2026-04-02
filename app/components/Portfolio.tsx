"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FadeUp } from "./animations";

// ─── Project data ─────────────────────────────────────────────────────────────

const projects = [
  {
    id: "drive",
    type: "video" as const,
    src: "/videos/drive-trafikkskule.mp4",
    client: "Drive Trafikkskule",
    industry: "Trafikkskule · Volda & Ulsteinvik",
    tags: ["Innholdspakke", "Publisering", "Annonsering"],
    href: "/prosjekter/drive-trafikkskule",
    accentColor: "#2DD4BF",
    accentBg: "rgba(45,212,191,0.15)",
    accentBorder: "rgba(45,212,191,0.3)",
    result: "+142% klikkvekst",
    active: false,
  },
  {
    id: "cutoclock",
    type: "video" as const,
    src: "/videos/cut-o-clock.mp4",
    client: "Cut O' Clock",
    industry: "Frisørsalong · Ålesund",
    tags: ["Innholdspakke"],
    href: "/prosjekter/cutoclock",
    accentColor: "#2DD4BF",
    accentBg: "rgba(45,212,191,0.15)",
    accentBorder: "rgba(45,212,191,0.3)",
    result: null,
    active: false,
  },
  {
    id: "tverbakken",
    type: "image" as const,
    src: "/images/tverbakken-gard/sau-paa-fjell.jpg",
    client: "Tverbakken Gård",
    industry: "Gård · Kjerringøy, Nordland",
    tags: ["Nettside"],
    href: "/prosjekter/tverbakken-gard",
    accentColor: "#2DD4BF",
    accentBg: "rgba(45,212,191,0.15)",
    accentBorder: "rgba(45,212,191,0.3)",
    result: null,
    active: true,
  },
];

// ─── AutoplayVideo ─────────────────────────────────────────────────────────────

function AutoplayVideo({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.2 }
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={label}
      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
    />
  );
}

// ─── ProjectCard ──────────────────────────────────────────────────────────────

function ProjectCard({
  project,
  index,
  featured = false,
  className = "",
}: {
  project: (typeof projects)[number];
  index: number;
  featured?: boolean;
  className?: string;
}) {
  return (
    <motion.a
      href={project.href}
      aria-label={`Se casestudie for ${project.client}`}
      className={`group relative block overflow-hidden rounded-2xl ${className}`}
      style={{ border: "1px solid rgba(255,255,255,0.08)" }}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      whileHover={{ borderColor: project.accentBorder }}
    >
      {/* Media */}
      <div className="absolute inset-0">
        {project.type === "video" ? (
          <AutoplayVideo src={project.src} label={project.client} />
        ) : (
          <Image
            src={project.src}
            alt={project.client}
            fill
            className="object-cover object-center transition-transform duration-700 group-hover:scale-[1.04]"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 40vw"
          />
        )}
      </div>

      {/* Gradient overlays — deeper at bottom for legibility */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/25 to-black/35" />
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: `radial-gradient(ellipse 80% 55% at 50% 100%, ${project.accentBg} 0%, transparent 70%)` }}
      />

      {/* Top row: tags + index */}
      <div className="absolute left-4 right-4 top-4 flex items-start justify-between">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider"
              style={{
                background: "rgba(0,0,0,0.45)",
                backdropFilter: "blur(8px)",
                border: `1px solid ${project.accentBorder}`,
                color: project.accentColor,
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <span
          className="text-[10px] font-bold tabular-nums"
          style={{ color: "rgba(255,255,255,0.18)" }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <p
          className="mb-1 text-[11px] uppercase tracking-wider font-medium"
          style={{ color: "rgba(242,237,230,0.35)" }}
        >
          {project.industry}
        </p>
        <div className="flex items-end justify-between gap-2">
          <p
            className={`font-bold leading-tight ${featured ? "text-xl sm:text-2xl" : "text-base"}`}
            style={{ color: "#F2EDE6" }}
          >
            {project.client}
          </p>
          <span
            className="flex flex-shrink-0 items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-300 group-hover:gap-2 group-hover:pl-3.5"
            style={{
              background: project.accentBg,
              border: `1px solid ${project.accentBorder}`,
              color: project.accentColor,
            }}
          >
            {featured ? "Se casestudie" : "Se mer"}
            <svg
              className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
    </motion.a>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function Portfolio() {
  const [featured, ...rest] = projects;

  return (
    <section id="prosjekter" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">

        {/* Header */}
        <FadeUp className="mb-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">

            {/* Left: eyebrow + heading */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <p
                  className="text-xs font-semibold uppercase tracking-[0.2em]"
                  style={{ color: "#2DD4BF" }}
                >
                  Utvalgte prosjekter
                </p>
                <div className="h-px flex-1 max-w-[40px]" style={{ background: "rgba(45,212,191,0.3)" }} />
              </div>
              <h2
                className="text-3xl font-bold sm:text-4xl md:text-5xl"
                style={{ color: "#F2EDE6" }}
              >
                Resultater som snakker
                <br className="hidden sm:block" /> for seg selv
              </h2>
            </div>

            {/* Right: count + link */}
            <div className="flex flex-col items-start gap-3 sm:items-end">
              <div className="flex items-baseline gap-2">
                <span
                  className="text-4xl font-bold tabular-nums leading-none"
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontStyle: "italic",
                    color: "rgba(45,212,191,0.25)",
                  }}
                >
                  03
                </span>
                <span className="text-sm" style={{ color: "rgba(242,237,230,0.35)" }}>
                  ferdigstilte prosjekter
                </span>
              </div>
              <a
                href="/prosjekter"
                className="group/link flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: "#2DD4BF" }}
              >
                Se alle prosjekter
                <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

          </div>
        </FadeUp>

        {/* Grid: featured left + 2 stacked right */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-[1.35fr_1fr]" style={{ minHeight: 580 }}>

          {/* Featured card (Drive) — full height */}
          <ProjectCard
            project={featured}
            index={0}
            featured={true}
            className="min-h-[420px] md:min-h-0 md:h-full"
          />

          {/* Right column — 2 stacked */}
          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {rest.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i + 1}
                featured={false}
                className="min-h-[240px] md:h-[calc(50%-8px)]"
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
