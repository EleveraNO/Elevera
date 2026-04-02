"use client";

import { motion, useReducedMotion } from "framer-motion";
import FloatingCards from "./FloatingCards";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center px-6 pb-16 pt-28" style={{ overflowX: "clip" }}>
      {/* Ambient glow — left */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          left: "-10%", top: "50%",
          width: 800, height: 800,
          transform: "translateY(-50%)",
          background: "radial-gradient(circle, rgba(45,212,191,0.10) 0%, rgba(45,212,191,0.04) 35%, transparent 70%)",
          borderRadius: "50%",
        }}
        animate={reduced ? {} : { opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Ambient glow — right */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute"
        style={{
          right: "-5%", bottom: "-10%",
          width: 600, height: 600,
          background: "radial-gradient(circle, rgba(45,212,191,0.07) 0%, rgba(45,212,191,0.02) 40%, transparent 70%)",
          borderRadius: "50%",
        }}
        animate={reduced ? {} : { opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-8">

          {/* ── Left column: text ── */}
          <div className="w-full lg:w-[55%]">
            {/* Location badge */}
            <motion.div
              className="mb-8 inline-flex items-center gap-2.5 rounded-full border px-4 py-1.5"
              style={{ borderColor: "rgba(45,212,191,0.2)", background: "rgba(45,212,191,0.06)" }}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full" style={{ background: "#2DD4BF" }} />
              <span className="text-[11px] font-semibold uppercase tracking-[0.18em]" style={{ color: "rgba(45,212,191,0.8)" }}>
                Digitalbyrå — Ålesund, Norge
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              className="mb-6 text-[clamp(3.2rem,7.5vw,6.5rem)] font-bold leading-[1.0] tracking-tight"
              style={{ color: "#F2EDE6" }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
            >
              Én partner for{" "}
              <em
                style={{
                  fontFamily: "var(--font-fraunces), Georgia, serif",
                  fontStyle: "italic",
                  color: "#2DD4BF",
                  textShadow: "0 0 40px rgba(45,212,191,0.35), 0 0 80px rgba(45,212,191,0.15)",
                }}
              >
                vekst
              </em>{" "}
              på nett.
            </motion.h1>

            {/* Teal rule */}
            <motion.div
              className="mb-6 h-px origin-left"
              style={{ background: "#2DD4BF", width: "4rem" }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            />

            {/* Sub-text */}
            <motion.p
              className="mb-8 max-w-md text-lg leading-relaxed"
              style={{ color: "rgba(242,237,230,0.52)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease }}
            >
              Foto & video, konverterende nettsider og presis annonsering —
              alt fra én partner som kjenner Ålesund.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mb-10 flex flex-wrap items-center gap-4"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.34, ease }}
            >
              <a
                href="#kontakt"
                className="inline-flex items-center rounded-full px-8 py-3.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: "#2DD4BF", color: "#09090B", boxShadow: "0 0 0 0 rgba(45,212,191,0)" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#14B8A6";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 30px rgba(45,212,191,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#2DD4BF";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 0 0 rgba(45,212,191,0)";
                }}
              >
                Book gratis møte
              </a>
              <a
                href="#tjenester"
                className="flex items-center gap-2 text-sm font-medium transition-colors duration-200"
                style={{ color: "rgba(242,237,230,0.55)" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F2EDE6")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(242,237,230,0.55)")}
              >
                Se hva vi tilbyr
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </motion.div>

            {/* Stats row */}
            <motion.div
              className="mb-8 flex items-center gap-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
            >
              {[
                { value: "+142%", label: "Klikkvekst for kunder" },
                { value: "5+", label: "Bedrifter" },
                { value: "100%", label: "Fornøyde kunder" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-xl font-bold" style={{ color: "#F2EDE6", letterSpacing: "-0.03em" }}>{stat.value}</span>
                  <span className="text-[11px]" style={{ color: "rgba(242,237,230,0.35)" }}>{stat.label}</span>
                </div>
              ))}
            </motion.div>

          </div>

          {/* ── Right column: floating cards ── */}
          <motion.div
            className="relative w-full lg:w-[45%]"
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            aria-hidden="true"
          >
            <FloatingCards />
          </motion.div>

        </div>
      </div>

      {/* Scroll indicator */}
      {/* Scroll indicator — mouse icon */}
      <motion.button
        className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        aria-label="Scroll ned"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        whileHover={{ opacity: 0.6 }}
      >
        <div
          className="relative flex justify-center rounded-full"
          style={{
            width: 22, height: 36,
            border: "1.5px solid rgba(255,255,255,0.18)",
          }}
        >
          <motion.div
            className="rounded-full"
            style={{ width: 3, height: 7, background: "rgba(255,255,255,0.4)", marginTop: 5 }}
            animate={reduced ? {} : { y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.button>
    </section>
  );
}
