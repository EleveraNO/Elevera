"use client";

import React, { useRef } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/* (MediaCycler replaced by single compiled video — see photo-reel.mp4) */

const services = [
  {
    number: "01",
    title: "Foto & Video",
    href: "/tjenester/foto-og-video-alesund",
    description:
      "Profesjonelt foto og video som stopper scrollingen. Vi kommer til deg, tar bildene og lager innholdet — du slipper å tenke på det.",
    features: ["Produktfoto som selger", "Reklamefilm og bedriftsvideo", "Dronevideo og luftopptak", "Bedriftsfoto og portrett"],
    image: "https://images.unsplash.com/photo-1574717025058-2f8737d2e2b7?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Profesjonelt kameraoppsett med studiobelysning",
    layout: "hero" as const,
  },
  {
    number: "02",
    title: "Digital annonsering",
    href: "/tjenester/annonsering-alesund",
    description:
      "Vi setter opp og styrer annonsene dine på Facebook, Instagram og Google — slik at du får henvendelser fra folk som faktisk er klare til å kjøpe.",
    features: ["Meta Ads (Facebook & Instagram)", "Google Ads & Shopping", "A/B-testing av annonsemateriale", "Månedlig rapportering"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    imageAlt: "Digitalt dashboard med analysegrafar på skjerm",
    layout: "editorial-right" as const,
  },
  {
    number: "03",
    title: "Nettside & design",
    href: "/tjenester/nettside-alesund",
    description:
      "En nettside som laster raskt, ser profesjonell ut og faktisk får besøkende til å ta kontakt. Vi bygger den, tar bildene og skriver tekstene.",
    features: ["Design tilpasset din merkevare", "Rask lasting og mobiltilpasset", "SEO-optimalisert fra dag én", "Eget foto og video inkludert"],
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    imageAlt: "Laptop med webdesign på skjermen, moderne kontor",
    layout: "breakout-left" as const,
  },
  {
    number: "04",
    title: "SEO",
    href: "/tjenester/seo-alesund",
    description:
      "Vi sørger for at bedriften din dukker opp når folk i Ålesund søker etter det du tilbyr. Teknisk oppsett, innhold og lenkebygging.",
    features: ["Teknisk SEO og sideoptimalisering", "Innholdsstrategi og blogginnhold", "Lenkebygging og autoritetsarbeid", "Lokal SEO og Google Business"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    imageAlt: "Analyseverktøy med søkedata på skjerm",
    layout: "giant-number" as const,
  },
  {
    number: "05",
    title: "Sosiale medier",
    href: "/tjenester/sosiale-medier-alesund",
    description:
      "Vi tar over Instagram, Facebook og TikTok for deg. Du godkjenner innholdet — vi poster, svarer og bygger følgerskaren.",
    features: ["Strategi og redaksjonsplan", "Innholdsproduksjon og publisering", "Community-styring og svar", "Månedlig rapport med innsikt"],
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=2074&auto=format&fit=crop",
    imageAlt: "Sosiale medier-apper på mobilskjerm",
    layout: "horizontal-tags" as const,
  },
];

/* ── Shared sub-components ── */

function CTA({ href, label }: { href: string; label?: string }) {
  return (
    <a
      href={href}
      className="group relative inline-flex items-center gap-2 text-sm font-bold transition-all duration-300"
      style={{ color: "#f2ca50" }}
    >
      <span className="flex items-center gap-2 group-hover:gap-3 transition-all duration-300">
        {label ?? "Les mer"}
        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </span>
      <span className="absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full" style={{ background: "#f2ca50" }} />
    </a>
  );
}

function StaggeredFeatures({ features, inView }: { features: string[]; inView: boolean }) {
  return (
    <ul className="space-y-3">
      {features.map((f, i) => (
        <motion.li
          key={f}
          className="flex items-center gap-3 text-sm"
          style={{ color: "#d0c5af" }}
          initial={{ opacity: 0, x: -12 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease }}
        >
          <svg className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <circle cx="8" cy="8" r="8" fill="rgba(242,202,80,0.1)" />
            <path d="M5 8.5L7 10.5L11 6.5" stroke="#f2ca50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {f}
        </motion.li>
      ))}
    </ul>
  );
}

function ParallaxImage({ image, imageAlt, className, style }: { image: string; imageAlt: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  // Skip parallax on mobile — saves scroll listener overhead
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
  const { scrollYProgress } = useScroll({
    target: isMobile ? undefined : ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], isMobile ? [0, 0] : [20, -20]);

  return (
    <div ref={ref} className={`group/img overflow-hidden ${className ?? ""}`} style={{ background: "#1c1c1a", ...style }}>
      <motion.div
        className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover/img:scale-[1.04]"
        style={{
          backgroundImage: `url('${image}')`,
          y: reduced ? 0 : y,
          scale: 1.08,
        }}
        role="img"
        aria-label={imageAlt}
      />
      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-1/4" style={{ background: "linear-gradient(to top, rgba(19,19,18,0.4), transparent)" }} />
    </div>
  );
}

function Divider() {
  return (
    <div className="mx-auto max-w-7xl px-6 md:px-20">
      <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(77,70,53,0.3) 30%, rgba(77,70,53,0.3) 70%, transparent)" }} />
    </div>
  );
}

/* ── Layout: Hero (01) — fullbredde bilde med tekst over ── */

function LayoutHero({ service }: { service: (typeof services)[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative isolate overflow-hidden rounded-sm" style={{ minHeight: "520px" }}>
      {/* Background image with parallax */}
      <ParallaxImage image={service.image} imageAlt={service.imageAlt} className="absolute inset-0" />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#131312]/95 via-[#131312]/60 to-transparent" />

      {/* Ghost number — fills background */}
      <motion.div
        className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 select-none"
        style={{
          fontFamily: "var(--font-noto-serif), serif",
          fontStyle: "italic",
          fontSize: "18rem",
          lineHeight: 1,
          WebkitTextStroke: "1px rgba(242,202,80,0.08)",
          color: "transparent",
        }}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, ease }}
        aria-hidden="true"
      >
        {service.number}
      </motion.div>

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[520px] items-center px-8 py-16 md:px-16">
        <div className="max-w-lg">
          <motion.span
            className="mb-4 block text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: "#f2ca50" }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, ease }}
          >
            {service.number}
          </motion.span>
          <motion.h3
            className="mb-5 text-3xl font-bold tracking-tight md:text-5xl"
            style={{ fontFamily: "var(--font-noto-serif), Georgia, serif", color: "#e5e2de" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            {service.title}
          </motion.h3>
          <motion.p
            className="mb-8 text-base leading-relaxed md:text-lg"
            style={{ color: "#d0c5af" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            {service.description}
          </motion.p>
          <div className="mb-8">
            <StaggeredFeatures features={service.features} inView={inView} />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            <CTA href={service.href} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ── Layout: Editorial Right (02) — tekst venstre, bilde høyre med breakout ── */

function LayoutEditorialRight({ service }: { service: (typeof services)[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
      <div className="relative md:col-span-5">
        <motion.div
          className="pointer-events-none absolute select-none"
          style={{
            top: "-3rem", left: "-2rem",
            fontFamily: "var(--font-noto-serif), serif", fontStyle: "italic",
            fontSize: "10rem", lineHeight: 1,
            WebkitTextStroke: "1px rgba(242,202,80,0.12)", color: "transparent",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease }}
          aria-hidden="true"
        >
          {service.number}
        </motion.div>
        <div className="relative z-10">
          <motion.span
            className="mb-3 block text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: "rgba(242,202,80,0.6)" }}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
          >
            {service.number}
          </motion.span>
          <motion.h3
            className="mb-5 text-3xl font-bold tracking-tight md:text-4xl"
            style={{ fontFamily: "var(--font-noto-serif), Georgia, serif", color: "#e5e2de" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.08, ease }}
          >
            {service.title}
          </motion.h3>
          <motion.p
            className="mb-8 text-base leading-relaxed"
            style={{ color: "#d0c5af" }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.15, ease }}
          >
            {service.description}
          </motion.p>
          <div className="mb-8">
            <StaggeredFeatures features={service.features} inView={inView} />
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
            <CTA href={service.href} />
          </motion.div>
        </div>
      </div>

      {/* Image — pushed out to the right edge */}
      <motion.div
        className="relative md:col-span-7"
        initial={{ opacity: 0, x: 40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.15, ease }}
      >
        <div className="overflow-hidden rounded-sm md:-mr-20" style={{ border: "1px solid rgba(77,70,53,0.15)" }}>
          <ParallaxImage image={service.image} imageAlt={service.imageAlt} className="relative" style={{ aspectRatio: "16/10" }} />
        </div>
        {/* Glow shadow under image */}
        <div className="pointer-events-none absolute -bottom-4 left-[10%] right-[10%] h-12 blur-[30px]" style={{ background: "rgba(242,202,80,0.06)" }} />
      </motion.div>
    </div>
  );
}

/* ── Layout: Breakout Left (03) — bilde bryter ut til venstre, tekst høyre ── */

function LayoutBreakoutLeft({ service }: { service: (typeof services)[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid grid-cols-1 items-center gap-12 md:grid-cols-12">
      {/* Image breakout left */}
      <motion.div
        className="relative md:col-span-7 order-1"
        initial={{ opacity: 0, x: -40 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1, ease }}
      >
        <div className="overflow-hidden rounded-sm md:-ml-20" style={{ border: "1px solid rgba(77,70,53,0.15)" }}>
          <ParallaxImage image={service.image} imageAlt={service.imageAlt} className="relative" style={{ aspectRatio: "16/11" }} />
        </div>
        <div className="pointer-events-none absolute -bottom-4 left-[10%] right-[10%] h-12 blur-[30px]" style={{ background: "rgba(242,202,80,0.06)" }} />
      </motion.div>

      {/* Text */}
      <div className="relative md:col-span-5 order-2">
        <motion.div
          className="pointer-events-none absolute select-none"
          style={{
            top: "-3rem", right: "-2rem",
            fontFamily: "var(--font-noto-serif), serif", fontStyle: "italic",
            fontSize: "10rem", lineHeight: 1,
            WebkitTextStroke: "1px rgba(242,202,80,0.12)", color: "transparent",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, ease }}
          aria-hidden="true"
        >
          {service.number}
        </motion.div>
        <div className="relative z-10">
          <motion.span
            className="mb-3 block text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: "rgba(242,202,80,0.6)" }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, ease }}
          >
            {service.number}
          </motion.span>
          <motion.h3
            className="mb-5 text-3xl font-bold tracking-tight md:text-4xl"
            style={{ fontFamily: "var(--font-noto-serif), Georgia, serif", color: "#e5e2de" }}
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1, ease }}
          >
            {service.title}
          </motion.h3>
          <motion.p
            className="mb-8 text-base leading-relaxed"
            style={{ color: "#d0c5af" }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.18, ease }}
          >
            {service.description}
          </motion.p>
          <div className="mb-8">
            <StaggeredFeatures features={service.features} inView={inView} />
          </div>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.6 }}>
            <CTA href={service.href} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

/* ── Layout: Giant Number (04) — enorm 04 fyller bakgrunnen ── */

function LayoutGiantNumber({ service }: { service: (typeof services)[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="relative overflow-hidden rounded-sm px-8 py-16 md:px-16 md:py-24"
      style={{ background: "#1c1c1a", border: "1px solid rgba(77,70,53,0.15)" }}
    >
      {/* Giant number — fills entire background */}
      <motion.div
        className="pointer-events-none absolute inset-0 flex items-center justify-center select-none"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1.2, ease }}
        aria-hidden="true"
      >
        <span
          style={{
            fontFamily: "var(--font-noto-serif), serif",
            fontStyle: "italic",
            fontSize: "clamp(16rem, 35vw, 28rem)",
            lineHeight: 1,
            WebkitTextStroke: "2px rgba(242,202,80,0.06)",
            color: "transparent",
          }}
        >
          {service.number}
        </span>
      </motion.div>

      {/* Content */}
      <div className="relative z-10 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <motion.span
            className="mb-3 block text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: "#f2ca50" }}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
          >
            {service.number}
          </motion.span>
          <motion.h3
            className="mb-5 text-3xl font-bold tracking-tight md:text-5xl"
            style={{ fontFamily: "var(--font-noto-serif), Georgia, serif", color: "#e5e2de" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            {service.title}
          </motion.h3>
          <motion.p
            className="mb-8 text-base leading-relaxed md:text-lg"
            style={{ color: "#d0c5af" }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            {service.description}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.5 }}>
            <CTA href={service.href} label="Kontakt oss" />
          </motion.div>
        </div>

        {/* Features as cards */}
        <div className="grid grid-cols-2 gap-3">
          {service.features.map((f, i) => (
            <motion.div
              key={f}
              className="rounded-sm p-4 transition-colors duration-300"
              style={{ background: "rgba(19,19,18,0.6)", border: "1px solid rgba(77,70,53,0.2)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(242,202,80,0.25)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.borderColor = "rgba(77,70,53,0.2)")}
            >
              <svg className="mb-2 h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="8" fill="rgba(242,202,80,0.1)" />
                <path d="M5 8.5L7 10.5L11 6.5" stroke="#f2ca50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <p className="text-sm leading-snug" style={{ color: "rgba(229,226,222,0.7)" }}>{f}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── Layout: Horizontal Tags (05) — features som horisontale tags, bilde fullbredde under ── */

function LayoutHorizontalTags({ service }: { service: (typeof services)[0] }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();

  return (
    <div ref={ref} className="relative">
      {/* Floating icons scattered behind content */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        {floatingIcons.map((icon) => (
          <motion.div
            key={icon.id}
            className="absolute"
            style={{ left: icon.left, top: icon.top }}
            initial={{ opacity: 0 }}
            animate={inView ? {
              opacity: 0.07,
              x: reduced ? 0 : icon.dx,
              y: reduced ? 0 : icon.dy,
            } : {}}
            transition={{
              opacity: { duration: 0.8, delay: icon.delay * 0.15 },
              x: { duration: icon.dur, repeat: Infinity, ease: "easeInOut", delay: icon.delay },
              y: { duration: icon.dur * 0.85, repeat: Infinity, ease: "easeInOut", delay: icon.delay + 1 },
            }}
          >
            <svg className={icon.size} viewBox="0 0 24 24" fill="#f2ca50">
              {icon.icon}
            </svg>
          </motion.div>
        ))}
      </div>
      {/* Text + horizontal features */}
      <div className="mb-10 grid grid-cols-1 items-end gap-8 md:grid-cols-12">
        <div className="md:col-span-6">
          <motion.div
            className="pointer-events-none absolute select-none"
            style={{
              fontFamily: "var(--font-noto-serif), serif", fontStyle: "italic",
              fontSize: "10rem", lineHeight: 1,
              WebkitTextStroke: "1px rgba(242,202,80,0.1)", color: "transparent",
            }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            aria-hidden="true"
          >
            {service.number}
          </motion.div>
          <motion.span
            className="relative z-10 mb-3 block text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: "#f2ca50" }}
            initial={{ opacity: 0, y: 10 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4, ease }}
          >
            {service.number}
          </motion.span>
          <motion.h3
            className="relative z-10 mb-5 text-3xl font-bold tracking-tight md:text-5xl"
            style={{ fontFamily: "var(--font-noto-serif), Georgia, serif", color: "#e5e2de" }}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease }}
          >
            {service.title}
          </motion.h3>
          <motion.p
            className="relative z-10 text-base leading-relaxed md:text-lg"
            style={{ color: "#d0c5af" }}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2, ease }}
          >
            {service.description}
          </motion.p>
        </div>

        <div className="md:col-span-6">
          {/* Features as horizontal tags */}
          <div className="flex flex-wrap gap-2 md:justify-end">
            {service.features.map((f, i) => (
              <motion.span
                key={f}
                className="rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300"
                style={{
                  background: "rgba(28,28,26,0.6)",
                  border: "1px solid rgba(77,70,53,0.25)",
                  color: "rgba(229,226,222,0.7)",
                  backdropFilter: "blur(8px)",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.08, ease }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(242,202,80,0.4)";
                  (e.currentTarget as HTMLSpanElement).style.color = "#f2ca50";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLSpanElement).style.borderColor = "rgba(77,70,53,0.25)";
                  (e.currentTarget as HTMLSpanElement).style.color = "rgba(229,226,222,0.7)";
                }}
              >
                {f}
              </motion.span>
            ))}
          </div>
          <motion.div
            className="mt-6 md:text-right"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <CTA href={service.href} label="Kontakt oss" />
          </motion.div>
        </div>
      </div>

    </div>
  );
}

/* ── Floating Icons — scattered behind the entire section 05 ── */

// SVG path fragments for each platform
const IG = <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />;
const FB = <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />;
// TikTok — clean music note style
const TT = <><path d="M9 3v11.5a3.5 3.5 0 103.5-3.5H12V8h1a4 4 0 003.5 3.97V8.03A5 5 0 0012 3H9z" /><circle cx="9" cy="17.5" r="3.5" /></>;
const GL = <><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" /><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" /><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 001 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" /><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" /></>;
// YouTube
const YT = <path d="M23.5 6.19a3.02 3.02 0 00-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 00.5 6.19 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.81 3.02 3.02 0 002.12 2.14c1.87.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 002.12-2.14A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.81zM9.55 15.57V8.43L15.82 12l-6.27 3.57z" />;
// LinkedIn
const LI = <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 013.37-1.85c3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 11-.01-4.13 2.06 2.06 0 01.01 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77A1.75 1.75 0 000 1.73v20.54A1.75 1.75 0 001.77 24h20.45A1.76 1.76 0 0024 22.27V1.73A1.76 1.76 0 0022.22 0z" />;

const floatingIcons = [
  { id: "ig1",  left: "5%",  top: "12%", dur: 18, dx: [0, 25, -15, 0], dy: [0, -20, 15, 0], delay: 0,   size: "h-10 w-10 md:h-14 md:w-14", icon: IG },
  { id: "fb1",  left: "78%", top: "8%",  dur: 22, dx: [0, -20, 10, 0], dy: [0, 15, -25, 0], delay: 2,   size: "h-8 w-8 md:h-12 md:w-12", icon: FB },
  { id: "tt1",  left: "62%", top: "58%", dur: 20, dx: [0, 15, -20, 0], dy: [0, -18, 8, 0],  delay: 4,   size: "h-10 w-10 md:h-14 md:w-14", icon: TT },
  { id: "gl1",  left: "18%", top: "62%", dur: 24, dx: [0, -12, 22, 0], dy: [0, 20, -12, 0], delay: 1,   size: "h-9 w-9 md:h-12 md:w-12", icon: GL },
  { id: "ig2",  left: "90%", top: "42%", dur: 19, dx: [0, -18, 8, 0],  dy: [0, -10, 20, 0], delay: 3,   size: "h-7 w-7 md:h-10 md:w-10", icon: IG },
  { id: "tt2",  left: "38%", top: "5%",  dur: 21, dx: [0, 20, -10, 0], dy: [0, 12, -18, 0], delay: 5,   size: "h-8 w-8 md:h-11 md:w-11", icon: TT },
  { id: "yt1",  left: "50%", top: "70%", dur: 23, dx: [0, -16, 14, 0], dy: [0, -14, 10, 0], delay: 1.5, size: "h-9 w-9 md:h-13 md:w-13", icon: YT },
  { id: "li1",  left: "28%", top: "30%", dur: 25, dx: [0, 18, -8, 0],  dy: [0, -22, 12, 0], delay: 3.5, size: "h-7 w-7 md:h-10 md:w-10", icon: LI },
  { id: "fb2",  left: "72%", top: "32%", dur: 17, dx: [0, -10, 18, 0], dy: [0, 16, -14, 0], delay: 0.5, size: "h-8 w-8 md:h-11 md:w-11", icon: FB },
  { id: "gl2",  left: "48%", top: "40%", dur: 26, dx: [0, 14, -16, 0], dy: [0, -8, 18, 0],  delay: 4.5, size: "h-6 w-6 md:h-9 md:w-9", icon: GL },
  { id: "ig3",  left: "12%", top: "45%", dur: 20, dx: [0, -22, 12, 0], dy: [0, 10, -16, 0], delay: 2.5, size: "h-6 w-6 md:h-8 md:w-8", icon: IG },
  { id: "yt2",  left: "85%", top: "68%", dur: 19, dx: [0, 12, -20, 0], dy: [0, -16, 8, 0],  delay: 5.5, size: "h-7 w-7 md:h-10 md:w-10", icon: YT },
];

/* ── Main ── */

/* ── Horizontal Scroll Section ── */

function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => { setIsMobile(window.innerWidth < 768); }, []);

  const { scrollYProgress } = useScroll({
    target: isMobile ? undefined : containerRef,
    offset: ["start start", "end end"],
  });
  const panelCount = services.length;
  const totalShift = (panelCount - 1) * 75 - 20;
  const x = useTransform(scrollYProgress, [0, 0.95], ["0vw", `-${totalShift}vw`]);

  // Mobile: simple vertical stack, no scroll hijacking
  if (isMobile) {
    return (
      <div className="flex flex-col gap-6 px-4 py-8">
        {services.map((service) => (
          <a
            key={service.number}
            href={service.href}
            className="relative flex flex-col overflow-hidden rounded-sm"
            style={{ background: "#1c1c1a", border: "1px solid rgba(77,70,53,0.2)", minHeight: 280 }}
          >
            {/* Background video/image */}
            <div className="absolute inset-0">
              {service.layout === "hero" ? (
                <video src="/videos/photo-reel.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" style={{ opacity: 0.5 }} />
              ) : service.layout === "horizontal-tags" ? (
                <video src="/videos/social-bg.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" style={{ opacity: 0.5 }} />
              ) : service.layout === "giant-number" ? (
                <video src="/videos/seo-bg.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" style={{ opacity: 0.4 }} />
              ) : service.layout === "breakout-left" ? (
                <video src="/videos/website-bg.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" style={{ opacity: 0.4 }} />
              ) : service.layout === "editorial-right" ? (
                <video src="/videos/ads-bg.mp4" autoPlay muted loop playsInline className="h-full w-full object-cover" style={{ opacity: 0.4 }} />
              ) : null}
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1a] via-[#1c1c1a]/70 to-transparent" />
            <div className="relative z-10 mt-auto p-6">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.2em]" style={{ color: "rgba(242,202,80,0.5)" }}>{service.number}</span>
              <h3 className="mb-2 text-xl font-bold" style={{ fontFamily: "var(--font-noto-serif), serif", color: "#e5e2de" }}>{service.title}</h3>
              <p className="mb-4 text-sm leading-relaxed" style={{ color: "#d0c5af" }}>{service.description}</p>
              <span className="text-xs font-bold uppercase tracking-wider" style={{ color: "#f2ca50" }}>Les mer →</span>
            </div>
          </a>
        ))}
      </div>
    );
  }

  // Desktop: horizontal scroll
  return (
    <div
      ref={containerRef}
      className="relative"
      style={{ height: `${panelCount * 100}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          className="flex gap-6 pl-6 md:pl-20"
          style={{ x: reduced ? undefined : x }}
        >
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              className="group relative flex w-[85vw] flex-shrink-0 overflow-hidden rounded-sm md:w-[75vw] lg:w-[70vw]"
              style={{
                height: "75vh",
                background: "#1c1c1a",
                border: "1px solid rgba(77,70,53,0.2)",
              }}
            >
              {/* Background image — left half on desktop */}
              <div className="absolute inset-0 md:relative md:w-1/2 md:flex-shrink-0">
                {service.layout === "hero" ? (
                  /* Foto & Video — compiled showreel */
                  <div className="relative h-full w-full" style={{ background: "#131312" }}>
                    <video src="/videos/photo-reel.mp4" autoPlay muted loop playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ opacity: 0.85 }} />
                  </div>
                ) : service.layout === "horizontal-tags" ? (
                  /* SoMe — Remotion video */
                  <div className="relative h-full w-full" style={{ background: "#131312" }}>
                    <video src="/videos/social-bg.mp4" autoPlay muted loop playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ opacity: 0.85, objectPosition: "75% center" }} />
                  </div>
                ) : service.layout === "giant-number" ? (
                  /* SEO — Remotion video */
                  <div className="relative h-full w-full" style={{ background: "#131312" }}>
                    <video src="/videos/seo-bg.mp4" autoPlay muted loop playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ opacity: 0.7 }} />
                  </div>
                ) : service.layout === "breakout-left" ? (
                  /* Nettside — Remotion video */
                  <div className="relative h-full w-full" style={{ background: "#131312" }}>
                    <video src="/videos/website-bg.mp4" autoPlay muted loop playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ opacity: 0.75 }} />
                  </div>
                ) : service.layout === "editorial-right" ? (
                  /* Annonsering — Remotion video */
                  <div className="relative h-full w-full" style={{ background: "#131312" }}>
                    <video src="/videos/ads-bg.mp4" autoPlay muted loop playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                      style={{ opacity: 0.8, objectPosition: "60% center" }} />
                  </div>
                ) : null}
                {/* Gradient overlay for mobile text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1a] via-[#1c1c1a]/60 to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-[#1c1c1a]" />
              </div>

              {/* Content — right half on desktop, overlaid on mobile */}
              <div className="relative z-10 flex flex-col justify-center p-8 md:w-1/2 md:p-12 lg:p-16">
                {/* Ghost number */}
                <div
                  className="pointer-events-none absolute right-6 top-6 select-none"
                  style={{
                    fontFamily: "var(--font-noto-serif), serif",
                    fontStyle: "italic",
                    fontSize: "8rem",
                    lineHeight: 1,
                    WebkitTextStroke: "1px rgba(242,202,80,0.08)",
                    color: "transparent",
                  }}
                  aria-hidden="true"
                >
                  {service.number}
                </div>

                <span
                  className="mb-3 block text-xs font-bold uppercase tracking-[0.3em]"
                  style={{ color: "rgba(242,202,80,0.6)" }}
                >
                  {service.number}
                </span>
                <h3
                  className="mb-4 text-3xl font-bold tracking-tight md:text-4xl"
                  style={{ fontFamily: "var(--font-noto-serif), Georgia, serif", color: "#e5e2de" }}
                >
                  {service.title}
                </h3>
                <p className="mb-6 max-w-md text-base leading-relaxed" style={{ color: "#d0c5af" }}>
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mb-8 space-y-2.5">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm" style={{ color: "#d0c5af" }}>
                      <svg className="h-4 w-4 shrink-0" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                        <circle cx="8" cy="8" r="8" fill="rgba(242,202,80,0.1)" />
                        <path d="M5 8.5L7 10.5L11 6.5" stroke="#f2ca50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <CTA href={service.href} />
              </div>

              {/* Panel index dots — bottom center */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
                {services.map((_, j) => (
                  <div
                    key={j}
                    className="h-1 rounded-full transition-all duration-300"
                    style={{
                      width: j === i ? 24 : 8,
                      background: j === i ? "#f2ca50" : "rgba(77,70,53,0.4)",
                    }}
                  />
                ))}
              </div>
            </motion.div>
          ))}
          {/* End spacer so last card can be fully visible */}
          <div className="w-[5vw] flex-shrink-0 md:w-[10vw]" />
        </motion.div>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section id="tjenester" className="py-32">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-6 md:px-20">
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <span
                className="mb-4 block text-xs font-bold uppercase tracking-[0.3em]"
                style={{ color: "#f2ca50", fontFamily: "var(--font-manrope), sans-serif" }}
              >
                Tjenester
              </span>
              <h2
                className="text-4xl font-bold leading-tight tracking-tight md:text-6xl"
                style={{ fontFamily: "var(--font-noto-serif), Georgia, serif", color: "#e5e2de" }}
              >
                Alt du trenger — fra én partner
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed md:text-right" style={{ color: "#d0c5af" }}>
              Slipper du å koordinere fotograf, webdesigner og reklamebyrå. Vi tar hele jobben.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── Horizontal scroll driven by vertical scroll ── */}
      <HorizontalScroll />
    </section>
  );
}
