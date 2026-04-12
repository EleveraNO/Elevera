"use client";

import { motion, useReducedMotion } from "framer-motion";

const clients = [
  "Drive Trafikkskule",
  "Cut O' Clock",
  "Tverbakken Gård",
];

export default function SocialProof() {
  const reduced = useReducedMotion();

  return (
    <section className="px-6 py-10">
      <motion.div
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Divider line */}
        <div className="mb-8 h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }} aria-hidden="true" />

        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
          {/* Label */}
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: "rgba(229,226,222,0.25)" }}>
            Stolte samarbeid
          </p>

          {/* Client names as minimal logo-style text */}
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
            {clients.map((client, i) => (
              <motion.span
                key={client}
                className="text-sm font-semibold tracking-wide whitespace-nowrap"
                style={{ color: "rgba(229,226,222,0.3)" }}
                initial={reduced ? {} : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.color = "rgba(229,226,222,0.6)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.color = "rgba(229,226,222,0.3)";
                }}
              >
                {client}
              </motion.span>
            ))}
          </div>

          {/* Mini stat */}
          <div className="flex items-center gap-2">
            <span
              className="text-lg font-bold"
              style={{
                color: "#f2ca50",
                fontFamily: "var(--font-fraunces), Georgia, serif",
                fontStyle: "italic",
              }}
            >
              100%
            </span>
            <span className="text-[11px] uppercase tracking-wider" style={{ color: "rgba(229,226,222,0.25)" }}>
              fornøyde
            </span>
          </div>
        </div>

        {/* Divider line */}
        <div className="mt-8 h-px w-full" style={{ background: "rgba(255,255,255,0.06)" }} aria-hidden="true" />
      </motion.div>
    </section>
  );
}
