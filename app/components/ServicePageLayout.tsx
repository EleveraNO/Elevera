"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { EtheralShadow } from "./ui/etheral-shadow";
import ContactForm from "./ContactForm";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY";

interface FAQ {
  q: string;
  a: string;
}

interface Stat {
  stat: string;
  label: string;
}

interface ServicePageProps {
  badge: string;
  title: string;
  titleAccent: string;
  titleSuffix?: string;
  description: string;
  included: string[];
  includedLabel?: string;
  includedHeading?: string;
  includedSubtext?: string;
  whyTitle: string;
  whyText: string[];
  stats: Stat[];
  faqs: FAQ[];
  ctaHeading: string;
  /** Short standalone summary for AI extraction (40-60 words) */
  aiSummary?: string;
}

function FAQItem({ faq, open, onToggle }: { faq: FAQ; open: boolean; onToggle: () => void }) {
  return (
    <div style={{ borderBottom: "1px solid rgba(77,70,53,0.2)" }}>
      <button
        className="flex w-full cursor-pointer items-center justify-between py-5 text-left text-[15px] font-medium transition-colors duration-200"
        style={{ color: open ? "#f2ca50" : "#e5e2de" }}
        onClick={onToggle}
        onMouseEnter={(e) => { if (!open) (e.currentTarget as HTMLButtonElement).style.color = "#f2ca50"; }}
        onMouseLeave={(e) => { if (!open) (e.currentTarget as HTMLButtonElement).style.color = "#e5e2de"; }}
      >
        {faq.q}
        <motion.span
          className="ml-4 flex-shrink-0 text-lg"
          style={{ color: "#99907c" }}
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          +
        </motion.span>
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pb-5 text-sm leading-relaxed"
          style={{ color: "#d0c5af" }}
        >
          {faq.a}
        </motion.div>
      )}
    </div>
  );
}

export default function ServicePageLayout({
  badge,
  title,
  titleAccent,
  titleSuffix,
  description,
  included,
  whyTitle,
  whyText,
  stats,
  faqs,
  ctaHeading,
  includedLabel,
  includedHeading,
  includedSubtext,
  aiSummary,
}: ServicePageProps) {
  const reduced = useReducedMotion();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section
        className="relative isolate flex items-end overflow-hidden px-6 pb-20 pt-36 md:px-20"
        style={{ minHeight: "70dvh" }}
      >
        {/* Ethereal background */}
        <div className="pointer-events-none absolute inset-0" style={{ zIndex: 0 }}>
          <EtheralShadow
            color="rgba(212, 175, 55, 0.45)"
            animation={reduced ? undefined : { scale: 60, speed: 40 }}
            noise={{ opacity: 0.5, scale: 1.4 }}
            sizing="fill"
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, #131312 20%, rgba(19,19,18,0.65) 55%, rgba(19,19,18,0.3) 100%)" }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-7xl" style={{ zIndex: 1 }}>
          {/* Badge + Headline */}
          <motion.span
            className="mb-5 block text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: "#f2ca50", fontFamily: "var(--font-manrope), sans-serif" }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            {badge}
          </motion.span>

          <motion.h1
            className="mb-8 max-w-3xl leading-[1.08] tracking-tight"
            style={{
              fontFamily: "var(--font-noto-serif), Georgia, serif",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              color: "#e5e2de",
            }}
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            {title}{" "}
            <em style={{ fontStyle: "italic", color: "#f2ca50" }}>
              {titleAccent}
            </em>
            {titleSuffix && <> {titleSuffix}</>}
          </motion.h1>

          {/* Description + CTA — below headline, over the background */}
          <div className="grid grid-cols-1 items-end gap-8 md:grid-cols-12">
            <div className="md:col-span-6">
              <motion.p
                className="mb-6 text-base leading-relaxed md:text-lg"
                style={{ color: "#d0c5af", maxWidth: "42ch" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
              >
                {description}
              </motion.p>
              <motion.div
                className="flex flex-col gap-3 sm:flex-row"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.32, ease }}
              >
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
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
                  Få et gratis tilbud
                </a>
                <a
                  href="/#priser"
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
                  Se priser
                </a>
              </motion.div>
            </div>

            {/* AI summary + freshness — inside hero, right column */}
            <div className="md:col-span-6">
              {aiSummary && (
                <motion.p
                  className="mb-3 max-w-md text-xs leading-relaxed"
                  style={{ color: "rgba(153,144,124,0.6)" }}
                  itemProp="description"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {aiSummary}
                </motion.p>
              )}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[10px]" style={{ color: "rgba(153,144,124,0.35)" }}>
                <span>Sist oppdatert: april 2026</span>
                <span>·</span>
                <span>Av Elevera — digitalbyrå i Ålesund</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included — editorial grid */}
      <section className="px-6 py-24 md:px-20" style={{ background: "#1c1c1a" }}>
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <span
                className="mb-3 block text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: "#f2ca50", fontFamily: "var(--font-manrope), sans-serif" }}
              >
                {includedLabel ?? "Inkludert"}
              </span>
              <h2
                className="text-3xl font-bold tracking-tight md:text-4xl"
                style={{ fontFamily: "var(--font-noto-serif), Georgia, serif", color: "#e5e2de" }}
              >
                {includedHeading ?? "Hva du får"}
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed md:text-right" style={{ color: "#99907c" }}>
              {includedSubtext ?? "Alt dette er inkludert i leveransen."}
            </p>
          </div>

          <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-3" style={{ background: "rgba(77,70,53,0.15)" }}>
            {included.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="flex items-start gap-4 p-6 transition-colors duration-300"
                style={{ background: "#1c1c1a" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#20201e")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.background = "#1c1c1a")}
              >
                <svg
                  className="mt-0.5 h-5 w-5 flex-shrink-0"
                  viewBox="0 0 16 16"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle cx="8" cy="8" r="8" fill="rgba(242,202,80,0.1)" />
                  <path d="M5 8.5L7 10.5L11 6.5" stroke="#f2ca50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="text-sm leading-relaxed" style={{ color: "rgba(229,226,222,0.75)" }}>
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why invest — asymmetric editorial */}
      <section className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-16 md:grid-cols-12">
            {/* Text */}
            <motion.div
              className="relative md:col-span-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Ghost number */}
              <div
                className="pointer-events-none absolute select-none"
                style={{
                  top: "-2.5rem",
                  left: "-1.5rem",
                  fontFamily: "var(--font-noto-serif), serif",
                  fontSize: "8rem",
                  lineHeight: 1,
                  WebkitTextStroke: "1px rgba(153,144,124,0.15)",
                  color: "transparent",
                }}
                aria-hidden="true"
              >
                ?
              </div>

              <span
                className="mb-4 block text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: "#f2ca50", fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Hvorfor
              </span>
              <h2
                className="mb-8 text-3xl font-bold tracking-tight md:text-4xl"
                style={{ fontFamily: "var(--font-noto-serif), Georgia, serif", color: "#e5e2de" }}
              >
                {whyTitle}
              </h2>
              <div className="space-y-4">
                {whyText.map((p, i) => (
                  <p key={i} className="text-base leading-relaxed" style={{ color: "#d0c5af" }}>
                    {p}
                  </p>
                ))}
              </div>
            </motion.div>

            {/* Stats grid */}
            <div className="md:col-span-7">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.08 }}
                    className="rounded-sm p-6 transition-colors duration-300"
                    style={{ background: "#1c1c1a", border: "1px solid rgba(77,70,53,0.2)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(242,202,80,0.25)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(77,70,53,0.2)";
                    }}
                  >
                    <div
                      className="mb-2 text-3xl font-bold"
                      style={{
                        color: "#f2ca50",
                        fontFamily: "var(--font-noto-serif), serif",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {item.stat}
                    </div>
                    <div className="text-xs leading-relaxed" style={{ color: "#99907c" }}>
                      {item.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 md:px-20" style={{ background: "#1c1c1a" }}>
        <div className="mx-auto max-w-2xl">
          <motion.div
            className="mb-10 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ fontFamily: "var(--font-noto-serif), Georgia, serif", color: "#e5e2de" }}
            >
              Vanlige spørsmål
            </h2>
          </motion.div>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Package bridge — connects service to pricing */}
      <section className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-5xl">
          <motion.div
            className="mb-12 text-center"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="mb-3 block text-xs font-bold uppercase tracking-[0.3em]"
              style={{ color: "#f2ca50", fontFamily: "var(--font-manrope), sans-serif" }}
            >
              Priser
            </span>
            <h2
              className="mb-3 text-2xl font-bold tracking-tight sm:text-3xl"
              style={{ fontFamily: "var(--font-noto-serif), Georgia, serif", color: "#e5e2de" }}
            >
              Denne tjenesten inngår i alle våre pakker
            </h2>
            <p className="mx-auto max-w-lg text-sm leading-relaxed" style={{ color: "#99907c" }}>
              Du kan kjøpe tjenesten enkeltvis, eller få den som en del av en fast pakke der vi tar hånd om alt.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              { name: "Start", price: "7 900", desc: "Nettside, bilder og grunnleggende synlighet", tag: null },
              { name: "Vekst", price: "14 900", desc: "Alt i Start + innhold, publisering og annonsering", tag: "Mest populær" },
              { name: "Partner", price: "22 900", desc: "Alt i Vekst + dedikert partner, strategi og prioritert support", tag: null },
            ].map((pkg, i) => (
              <motion.a
                key={pkg.name}
                href="/#priser"
                className="group relative flex flex-col rounded-sm p-6 transition-all duration-300"
                style={{
                  background: i === 1 ? "rgba(242,202,80,0.05)" : "rgba(28,28,26,0.5)",
                  border: i === 1 ? "1px solid rgba(242,202,80,0.25)" : "1px solid rgba(77,70,53,0.2)",
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(242,202,80,0.35)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = i === 1 ? "rgba(242,202,80,0.25)" : "rgba(77,70,53,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                {pkg.tag && (
                  <span
                    className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: "#f2ca50", color: "#131312" }}
                  >
                    {pkg.tag}
                  </span>
                )}
                <div className="mb-3 flex items-baseline gap-1">
                  <span
                    className="text-2xl font-bold tabular-nums"
                    style={{ color: i === 1 ? "#f2ca50" : "#e5e2de", fontFamily: "var(--font-manrope), sans-serif" }}
                  >
                    {pkg.price} kr
                  </span>
                  <span className="text-sm" style={{ color: "#99907c" }}>/mnd</span>
                </div>
                <h3 className="mb-2 text-lg font-bold" style={{ fontFamily: "var(--font-noto-serif), serif", color: "#e5e2de" }}>
                  {pkg.name}
                </h3>
                <p className="mb-4 flex-1 text-sm leading-relaxed" style={{ color: "#99907c" }}>
                  {pkg.desc}
                </p>
                <span
                  className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-all duration-300 group-hover:gap-3"
                  style={{ color: "#f2ca50" }}
                >
                  Se pakken
                  <svg className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </motion.a>
            ))}
          </div>

          <motion.p
            className="mt-6 text-center text-xs"
            style={{ color: "rgba(153,144,124,0.5)" }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Trenger du bare denne tjenesten?{" "}
            <a
              href="/#priser"
              className="underline underline-offset-2 transition-colors duration-150"
              style={{ color: "rgba(242,202,80,0.6)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#f2ca50")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(242,202,80,0.6)")}
            >
              Se enkelttjenester og priser.
            </a>
          </motion.p>
        </div>
      </section>

      {/* CTA with contact form */}
      <section className="px-6 py-24 md:px-20">
        <div className="mx-auto max-w-4xl">
          <motion.div
            className="relative overflow-hidden rounded-sm p-10 text-center md:p-16"
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              background: "#1c1c1a",
              border: "1px solid rgba(77,70,53,0.2)",
            }}
          >
            {/* Gold glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{ background: "radial-gradient(circle at 50% 50%, rgba(242,202,80,0.05) 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <div
              className="absolute left-1/2 top-0 h-px w-32 -translate-x-1/2"
              style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              <h2
                className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl"
                style={{ fontFamily: "var(--font-noto-serif), Georgia, serif", color: "#e5e2de" }}
              >
                {ctaHeading}
              </h2>
              <p className="mx-auto mb-8 max-w-md text-base leading-relaxed" style={{ color: "#d0c5af" }}>
                Book en gratis prat, eller send oss en melding — vi svarer innen 24 timer.
              </p>

              <div className="mb-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm px-10 py-4 text-sm font-bold transition-all duration-200 active:scale-95"
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
                  Book gratis møte
                </a>
                <a
                  href="tel:+4794974165"
                  className="flex items-center gap-2 rounded-sm border px-10 py-4 text-sm font-bold transition-all duration-200"
                  style={{ borderColor: "rgba(77,70,53,0.35)", color: "rgba(229,226,222,0.7)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(242,202,80,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#f2ca50";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(77,70,53,0.35)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(229,226,222,0.7)";
                  }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ring oss
                </a>
              </div>

              <div className="my-8 flex items-center gap-4">
                <div className="h-px flex-1" style={{ background: "rgba(77,70,53,0.25)" }} />
                <span className="text-sm" style={{ color: "rgba(208,197,175,0.4)" }}>Eller send oss en melding</span>
                <div className="h-px flex-1" style={{ background: "rgba(77,70,53,0.25)" }} />
              </div>

              <ContactForm />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
