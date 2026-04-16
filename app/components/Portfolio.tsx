"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useInView,
  useMotionValue,
  animate as motionAnimate,
  useReducedMotion,
} from "framer-motion";

const CYCLE_MS = 5500;

interface Project {
  id: string;
  type: "video" | "image" | "mockup";
  src: string;
  client: string;
  industry: string;
  tags: string[];
  href: string;
  summary: string;
  cta: string;
  result: string | null;
}

const projects: Project[] = [
  {
    id: "drive",
    type: "video",
    src: "/videos/drive-trafikkskule.mp4",
    client: "Drive Trafikkskule",
    industry: "Trafikkskule · Volda & Ulsteinvik",
    tags: ["Innholdspakke", "Publisering", "Annonsering"],
    href: "/prosjekter/drive-trafikkskule",
    summary: "Komplett innholdspakke med video, foto og publisering på sosiale medier. Vi produserte alt innholdet og bygde en organisk tilstedeværelse fra scratch.",
    cta: "Se casestudie",
    result: "+142% klikkvekst",
  },
  {
    id: "cutoclock",
    type: "video",
    src: "/videos/cut-o-clock.mp4",
    client: "Cut O' Clock",
    industry: "Frisørsalong · Ålesund",
    tags: ["Innholdspakke"],
    href: "/prosjekter/cutoclock",
    summary: "Innholdsproduksjon med fokus på å vise frem frisørenes personlighet og fagkompetanse. Profesjonelle portretter og behind-the-scenes video.",
    cta: "Se mer",
    result: null,
  },
  {
    id: "tverbakken",
    type: "mockup",
    src: "/images/tverbakken-gard/heromockup.png",
    client: "Tverbakken Gård",
    industry: "Gård · Kjerringøy, Nordland",
    tags: ["Nettside"],
    href: "/prosjekter/tverbakken-gard",
    summary: "Nettside for en gård på Kjerringøy i Nordland. Vi designet og utviklet siden, tok bildene og skrev alt innholdet.",
    cta: "Se mer",
    result: null,
  },
];

/* ── AutoplayVideo ── */

function AutoplayVideo({ src, label }: { src: string; label: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) v.play().catch(() => {}); else v.pause(); },
      { threshold: 0.2 },
    );
    obs.observe(v);
    return () => obs.disconnect();
  }, []);
  return (
    <video ref={ref} src={src} muted loop playsInline preload="metadata" aria-label={label}
      className="absolute inset-0 h-full w-full object-cover" />
  );
}

/* ── AnimatedCounter ── */

function AnimatedCounter({ target, inView }: { target: number; inView: boolean }) {
  const mv = useMotionValue(0);
  const [d, setD] = useState("00");
  const reduced = useReducedMotion();
  useEffect(() => {
    if (!inView) return;
    if (reduced) { setD(String(target).padStart(2, "0")); return; }
    mv.set(0);
    const c = motionAnimate(mv, target, {
      duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setD(String(Math.round(v)).padStart(2, "0")),
    });
    return () => c.stop();
  }, [inView, target, mv, reduced]);
  return <>{d}</>;
}

/* ── ProgressDots ── */

function ProgressDots({ active, progress, onClick }: { active: number; progress: number; onClick: (i: number) => void }) {
  return (
    <div className="mt-8 flex justify-center gap-3">
      {projects.map((_, i) => (
        <button key={i} onClick={() => onClick(i)}
          className="relative h-1 cursor-pointer overflow-hidden rounded-full"
          style={{ width: 48, background: "rgba(77,70,53,0.3)" }}
          aria-label={`Vis prosjekt ${i + 1}`}>
          <div className="absolute inset-y-0 left-0 rounded-full"
            style={{
              background: "#f2ca50",
              width: i === active ? `${progress * 100}%` : i < active ? "100%" : "0%",
              transition: i === active ? "none" : "width 0.3s ease",
            }} />
        </button>
      ))}
    </div>
  );
}

/* ── Main ── */

export default function Portfolio() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [textVisible, setTextVisible] = useState(true);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef(Date.now());
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-100px" });

  const goTo = useCallback((i: number) => {
    setTextVisible(false);
    setActive(i);
    setProgress(0);
    startRef.current = Date.now();
    setTimeout(() => setTextVisible(true), 700);
  }, []);

  useEffect(() => {
    if (hovered || !inView) return;
    startRef.current = Date.now() - progress * CYCLE_MS;
    timerRef.current = setInterval(() => {
      const p = Math.min((Date.now() - startRef.current) / CYCLE_MS, 1);
      setProgress(p);
      if (p >= 1) goTo((active + 1) % projects.length);
    }, 40);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [active, hovered, inView, goTo, progress]);

  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  // Which card drives the column size: hovered card takes priority, then active
  const dominant = hoveredCard ?? active;
  const cols = [
    "1.5fr 1fr 1fr",
    "1fr 1.5fr 1fr",
    "1fr 1fr 1.5fr",
  ][dominant];

  return (
    <section id="prosjekter" className="px-6 py-28 md:px-20" ref={sectionRef}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => { setHovered(false); startRef.current = Date.now() - progress * CYCLE_MS; }}>
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
            <span className="mb-4 block text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "#f2ca50", fontFamily: "var(--font-manrope), sans-serif" }}>
              Utvalgte prosjekter
            </span>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
              style={{ fontFamily: "var(--font-noto-serif), Georgia, serif", color: "#e5e2de" }}>
              Resultater som snakker<br className="hidden sm:block" /> for seg selv
            </h2>
          </motion.div>
          <motion.div className="flex flex-col items-start gap-3 sm:items-end"
            initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.15 }}>
            <div className="flex items-baseline gap-2">
              <span className="text-5xl font-bold leading-none"
                style={{ fontFamily: "var(--font-noto-serif), serif", fontStyle: "italic", color: "rgba(242,202,80,0.3)" }}>
                <AnimatedCounter target={projects.length} inView={inView} />
              </span>
              <span className="text-sm" style={{ color: "#99907c" }}>ferdigstilte prosjekter</span>
            </div>
          </motion.div>
        </div>

        {/* ── Desktop bento grid — big card spans 2 rows, two small stacked ── */}
        <motion.div
          className="hidden md:grid gap-4"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            gridTemplateColumns: cols,
            minHeight: 520,
            transition: "grid-template-columns 0.7s cubic-bezier(0.21, 0.47, 0.32, 0.98)",
          }}
        >
          {projects.map((project, i) => {
            const isExpanded = hoveredCard !== null ? hoveredCard === i : i === active;
            return (
              <a
                key={project.id}
                href={isExpanded ? project.href : undefined}
                onClick={!isExpanded ? (e: React.MouseEvent) => { e.preventDefault(); goTo(i); } : undefined}
                className="group relative block cursor-pointer overflow-hidden rounded-sm"
                style={{
                  border: isExpanded ? "1px solid rgba(242,202,80,0.25)" : "1px solid rgba(77,70,53,0.2)",
                  transition: "border-color 0.5s ease",
                }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Media */}
                <div className="absolute inset-0">
                  {project.type === "video" ? (
                    <AutoplayVideo src={project.src} label={project.client} />
                  ) : project.type === "mockup" ? (
                    /* Animated mockup with gradient background */
                    <div className="absolute inset-0 overflow-hidden">
                      {/* Animated gradient background */}
                      <div className="absolute inset-0" style={{
                        background: "linear-gradient(135deg, #1a1f1d 0%, #131312 30%, #1a1612 60%, #131312 100%)",
                      }}>
                        {/* Orbiting gradient blobs */}
                        <motion.div className="absolute rounded-full"
                          style={{ width: 300, height: 300, left: "20%", top: "10%",
                            background: "radial-gradient(circle, rgba(242,202,80,0.08) 0%, transparent 70%)", filter: "blur(40px)" }}
                          animate={{ x: [0, 30, -20, 0], y: [0, -25, 15, 0] }}
                          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
                        <motion.div className="absolute rounded-full"
                          style={{ width: 250, height: 250, right: "15%", bottom: "20%",
                            background: "radial-gradient(circle, rgba(100,140,120,0.07) 0%, transparent 70%)", filter: "blur(40px)" }}
                          animate={{ x: [0, -20, 15, 0], y: [0, 20, -30, 0] }}
                          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }} />
                      </div>
                      {/* Laptop mockup — centered, pulsing */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center p-8"
                        animate={{ scale: [1, 1.02, 1], y: [0, -4, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <Image src={project.src} alt={project.client}
                          width={700} height={450}
                          className="relative z-10 drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
                          style={{ objectFit: "contain", maxHeight: "85%", width: "auto" }}
                          sizes="(max-width: 768px) 100vw, 50vw" />
                      </motion.div>
                    </div>
                  ) : (
                    <Image src={project.src} alt={project.client} fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      sizes="(max-width: 768px) 100vw, 50vw" />
                  )}
                </div>

                {/* Gradient */}
                <div className="absolute inset-0 transition-all duration-500"
                  style={{
                    background: isExpanded
                      ? "linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.25) 50%, rgba(0,0,0,0.12) 100%)"
                      : "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.35) 100%)",
                  }} />

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(242,202,80,0.1) 0%, transparent 70%)" }} />

                {/* Ghost number */}
                <div className="pointer-events-none absolute right-4 top-3 select-none"
                  style={{
                    fontFamily: "var(--font-noto-serif), serif", fontStyle: "italic",
                    fontSize: isExpanded ? "7rem" : "4rem", lineHeight: 1,
                    WebkitTextStroke: `1px rgba(242,202,80,${isExpanded ? 0.1 : 0.05})`,
                    color: "transparent",
                    transition: "font-size 0.7s cubic-bezier(0.21,0.47,0.32,0.98)",
                  }} aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>

                {/* Tags — featured only */}
                <div className="absolute left-4 top-4 flex flex-wrap gap-1.5"
                  style={{ opacity: isExpanded ? 1 : 0, transition: "opacity 0.3s ease", transitionDelay: isExpanded ? "0.5s" : "0s" }}>
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{ background: "rgba(19,19,18,0.5)", backdropFilter: "blur(12px)",
                        border: "1px solid rgba(242,202,80,0.25)", color: "#f2ca50" }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Result badge — featured only */}
                {project.result && (
                  <div className="absolute right-4 top-4"
                    style={{ opacity: isExpanded ? 1 : 0, transition: "opacity 0.3s ease", transitionDelay: isExpanded ? "0.5s" : "0s" }}>
                    <span className="rounded-full px-3 py-1 text-[11px] font-bold tabular-nums"
                      style={{ background: "rgba(242,202,80,0.15)", backdropFilter: "blur(12px)",
                        border: "1px solid rgba(242,202,80,0.3)", color: "#f2ca50" }}>
                      {project.result}
                    </span>
                  </div>
                )}

                {/* Small card single tag */}
                {!isExpanded && (
                  <div className="absolute left-4 top-4"
                    style={{ opacity: isExpanded ? 0 : 1, transition: "opacity 0.3s ease" }}>
                    <span className="rounded-full px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider"
                      style={{ background: "rgba(19,19,18,0.5)", backdropFilter: "blur(12px)",
                        border: "1px solid rgba(242,202,80,0.15)", color: "rgba(242,202,80,0.6)" }}>
                      {project.tags[0]}
                    </span>
                  </div>
                )}

                {/* Bottom content */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <p className="mb-1 text-[10px] font-medium uppercase tracking-wider"
                    style={{ color: "rgba(229,226,222,0.35)" }}>
                    {project.industry}
                  </p>
                  <h3 className="font-bold leading-tight"
                    style={{
                      fontFamily: "var(--font-noto-serif), serif", color: "#e5e2de",
                      fontSize: isExpanded ? "1.6rem" : "1rem",
                      transition: "font-size 0.7s cubic-bezier(0.21,0.47,0.32,0.98)",
                    }}>
                    {project.client}
                  </h3>

                  {/* Summary + CTA — featured only */}
                  <AnimatePresence>
                    {isExpanded && textVisible && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 4 }}
                        transition={{ duration: 0.4 }}
                      >
                        <p className="mt-3 max-w-md text-sm leading-relaxed"
                          style={{ color: "rgba(229,226,222,0.55)" }}>
                          {project.summary}
                        </p>
                        <span className="relative mt-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 group-hover:gap-3"
                          style={{ color: "#f2ca50" }}>
                          {project.cta}
                          <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                          </svg>
                          <span className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" style={{ background: "#f2ca50" }} />
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </a>
            );
          })}
        </motion.div>

        {/* ── Mobile — stacked, all same size ── */}
        <div className="flex flex-col gap-3 md:hidden">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.href}
              className="group relative block overflow-hidden rounded-sm"
              style={{ border: "1px solid rgba(77,70,53,0.2)", height: 280 }}
            >
              {/* Media */}
              <div className="absolute inset-0">
                {project.type === "video" ? (
                  <AutoplayVideo src={project.src} label={project.client} />
                ) : project.type === "mockup" ? (
                  <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, #1a1f1d 0%, #131312 40%, #1a1612 70%, #131312 100%)" }}>
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <Image src={project.src} alt={project.client} width={400} height={260}
                        className="drop-shadow-[0_12px_30px_rgba(0,0,0,0.5)]"
                        style={{ objectFit: "contain", maxHeight: "80%", width: "auto" }} sizes="100vw" />
                    </div>
                  </div>
                ) : (
                  <Image src={project.src} alt={project.client} fill className="object-cover" sizes="100vw" />
                )}
              </div>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/15" />

              {/* Result badge */}
              {project.result && (
                <div className="absolute right-3 top-3">
                  <span className="rounded-full px-2.5 py-1 text-[10px] font-bold tabular-nums"
                    style={{ background: "rgba(242,202,80,0.15)", backdropFilter: "blur(12px)",
                      border: "1px solid rgba(242,202,80,0.3)", color: "#f2ca50" }}>
                    {project.result}
                  </span>
                </div>
              )}

              {/* Tags */}
              <div className="absolute left-3 top-3 flex flex-wrap gap-1">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider"
                    style={{ background: "rgba(19,19,18,0.5)", backdropFilter: "blur(12px)",
                      border: "1px solid rgba(242,202,80,0.25)", color: "#f2ca50" }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-[10px] font-medium uppercase tracking-wider" style={{ color: "rgba(229,226,222,0.35)" }}>
                  {project.industry}
                </p>
                <h3 className="text-lg font-bold leading-tight"
                  style={{ fontFamily: "var(--font-noto-serif), serif", color: "#e5e2de" }}>
                  {project.client}
                </h3>
                <span className="relative mt-2 inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider"
                  style={{ color: "#f2ca50" }}>
                  {project.cta}
                  <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <ProgressDots active={active} progress={progress} onClick={goTo} />
        </div>
      </div>
    </section>
  );
}
