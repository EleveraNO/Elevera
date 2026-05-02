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
                  Trøndelag · Nordland — Artist, låtskriver, dirigent
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

        <PageCTA heading="Vil du også ha et nettsted som ligner deg?" />
        <HomeFooter />
      </main>
    </>
  );
}
