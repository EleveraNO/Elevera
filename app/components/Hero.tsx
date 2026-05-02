"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EtheralShadow } from "./ui/etheral-shadow";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section
      className="relative isolate flex items-end overflow-hidden px-6 pb-24 pt-36 md:px-20"
      style={{ minHeight: "100dvh" }}
    >
      {/* Ethereal shadow, animated atmospheric glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{ zIndex: 0 }}
      >
        <EtheralShadow
          color="rgba(212, 175, 55, 0.7)"
          animation={reduced ? undefined : { scale: 100, speed: 90 }}
          noise={{ opacity: 0.8, scale: 1.2 }}
          sizing="fill"
        />
        {/* Dark gradient fade for text readability */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, #131312 15%, rgba(19,19,18,0.6) 50%, rgba(19,19,18,0.2) 100%)",
          }}
        />
      </div>

      {/* Content, asymmetric two-column */}
      <div className="relative mx-auto w-full max-w-7xl" style={{ zIndex: 1 }}>
        <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-12">

          {/* Left: headline */}
          <div className="md:col-span-8">
            <motion.span
              className="mb-6 block text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "#f2ca50", fontFamily: "var(--font-manrope), sans-serif" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
            >
              Digitalbyrå i Ålesund
            </motion.span>

            <motion.h1
              className="mb-0 leading-[1.08] tracking-tight"
              style={{
                fontFamily: "var(--font-noto-serif), Georgia, serif",
                fontSize: "clamp(3rem, 7vw, 6.5rem)",
                color: "#e5e2de",
                textWrap: "balance",
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease }}
            >
              Flere kunder fra nett.{" "}
              <br className="hidden sm:block" />
              <em style={{ fontStyle: "italic", color: "#f2ca50" }}>
                Én partner.
              </em>
            </motion.h1>
          </div>

          {/* Right: body + CTAs */}
          <div className="md:col-span-4 pb-2">
            <motion.p
              className="mb-8 text-base leading-relaxed md:text-lg"
              style={{ color: "#d0c5af", maxWidth: "32ch" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease }}
            >
              Vi bygger nettsiden, tar bildene, lager videoene, styrer annonsene og publiserer for deg. Du trenger ikke løfte en finger.
            </motion.p>

            <motion.div
              className="flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.32, ease }}
            >
              <a
                href="#kontakt"
                className="rounded-sm px-8 py-3.5 text-sm font-bold transition-all duration-200 active:scale-95"
                style={{ background: "#d4af37", color: "#3c2f00" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#f2ca50";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px rgba(212,175,55,0.4)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "#d4af37";
                  (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                }}
              >
                Book gratis strategimøte
              </a>
              <a
                href="#tjenester"
                className="rounded-sm border px-8 py-3.5 text-sm font-bold transition-all duration-200"
                style={{ borderColor: "rgba(77,70,53,0.4)", color: "#e5e2de" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(242,202,80,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#f2ca50";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(77,70,53,0.4)";
                  (e.currentTarget as HTMLAnchorElement).style.color = "#e5e2de";
                }}
              >
                Se tjenester og priser
              </a>
            </motion.div>

            <motion.p
              className="mt-4 text-xs"
              style={{ color: "#99907c" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4, ease }}
            >
              30 min. Gratis. Uforpliktende. Ingen salgspitch.
            </motion.p>

            {/* Stats */}
            <motion.div
              className="mt-10 flex gap-8 border-t pt-8"
              style={{ borderColor: "rgba(77,70,53,0.3)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5, ease }}
            >
              {[
                { value: "+142%", label: "Snitt klikkvekst" },
                { value: "< 30 dager", label: "Til første resultater" },
                { value: "0 kr", label: "Hvis vi ikke leverer" },
              ].map((s) => (
                <div key={s.label}>
                  <div
                    className="text-xl font-bold"
                    style={{
                      color: "#f2ca50",
                      fontFamily: "var(--font-noto-serif), serif",
                      letterSpacing: "-0.02em",
                    }}
                  >
                    {s.value}
                  </div>
                  <div className="text-[11px] uppercase tracking-wider" style={{ color: "#99907c" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        style={{ zIndex: 2 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        aria-label="Scroll ned"
        onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}
        whileHover={{ opacity: 0.5 }}
      >
        <div
          className="relative flex justify-center rounded-full"
          style={{ width: 22, height: 36, border: "1.5px solid rgba(153,144,124,0.35)" }}
        >
          <motion.div
            className="rounded-full"
            style={{ width: 3, height: 7, background: "rgba(242,202,80,0.5)", marginTop: 5 }}
            animate={reduced ? {} : { y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.button>
    </section>
  );
}
