"use client";

import { useState, useRef, useEffect } from "react";
import {
  motion,
  useInView,
  useMotionValue,
  animate,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

/* ── Data ── */

const packages = [
  {
    name: "Start",
    tagline: "For deg som trenger et solid fundament",
    price: 7900,
    period: "/mnd",
    highlight: false,
    inheritFrom: null,
    includes: [
      "Nettside (inntil 5 sider)",
      "Profesjonelle bilder av bedriften",
      "Google-optimalisert innhold",
      "Hosting og teknisk drift",
      "Månedlige nettside-oppdateringer",
      "Grunnleggende SEO",
      "Kontaktskjema med varsling",
      "Google Business oppsett",
    ],
    note: "For bedrifter som trenger et solid digitalt fundament og vil bli funnet på Google.",
    cta: "Kom i gang",
  },
  {
    name: "Vekst",
    tagline: "For deg som vil synes og vokse",
    price: 14900,
    period: "/mnd",
    highlight: true,
    badge: "Mest populær",
    inheritFrom: "Alt i Start, pluss:",
    includes: [
      "Nettside utvidet til 8 sider",
      "4 videoer + 8 bilder produsert per måned",
      "Publisering 3x per uke på sosiale medier",
      "Innholdsstrategi og redaksjonsplan",
      "Aktiv SEO-oppfølging",
      "Månedlig resultatrapport",
    ],
    note: "Du får en synlig bedrift som poster jevnlig, uten at du løfter en finger.",
    cta: "Velg Vekst",
  },
  {
    name: "Partner",
    tagline: "For deg som vil ha en dedikert digital partner",
    price: 22900,
    period: "/mnd",
    highlight: false,
    inheritFrom: "Alt i Vekst, pluss:",
    includes: [
      "Skreddersydd nettside uten sidebegrensning",
      "6 videoer + 12 bilder per måned",
      "Publisering 5x per uke",
      "Annonsering på Meta og Google",
      "Dronevideo ved behov",
      "Landingssider for kampanjer",
      "Månedlig strategimøte",
      "Prioritert support",
    ],
    note: "Vi blir en forlengelse av teamet ditt. Du fokuserer på det du kan best.",
    cta: "Bli partner",
  },
];

const services = [
  {
    name: "Landingsside",
    desc: "1 side, hosting og vedlikehold inkludert",
    from: "590",
    unit: "kr/mnd",
    meta: "Oppstart: 3 000 kr · 12 mnd minstetid",
  },
  {
    name: "Bedriftsnettside",
    desc: "3–5 sider, hosting og vedlikehold inkludert",
    from: "990",
    unit: "kr/mnd",
    meta: "Oppstart: 5 000 kr · 12 mnd minstetid",
  },
  {
    name: "Foto og video",
    desc: "Halvdag med fotograf/videograf, ferdig redigert",
    from: "5 000",
    unit: "kr",
  },
  {
    name: "Dronevideo",
    desc: "Én lokasjon, ferdig redigert",
    from: "4 000",
    unit: "kr",
  },
  {
    name: "Annonsering",
    desc: "Oppsett og løpende optimalisering",
    from: "3 500",
    unit: "kr/mnd",
    meta: "+ annonsebudsjett",
  },
  {
    name: "Sosiale medier",
    desc: "Strategi, innhold og publisering",
    from: "6 000",
    unit: "kr/mnd",
  },
  {
    name: "Logo og profil",
    desc: "Visuell identitet for bedriften din",
    from: "8 000",
    unit: "kr",
  },
];

const faqs = [
  {
    q: "Kommer det noen oppstartskostnad i tillegg?",
    a: "Ja, det er en engangskostnad for å komme i gang: 15 000 kr (Start), 20 000 kr (Vekst) eller 25 000 kr (Partner). Den dekker strategiarbeid, nettside-utvikling, fotografering og oppsett av alle kontoer og verktøy.",
  },
  {
    q: "Hvor lang er bindingstiden?",
    a: "Vi har ingen bindingstid. Du kan si opp med én måneds varsel. Vi beholder kunder fordi vi leverer resultater, ikke fordi vi låser dem inne.",
  },
  {
    q: "Kan jeg starte med én tjeneste og oppgradere senere?",
    a: "Ja. Mange starter med en nettside eller en fotopakke, og utvider til en fast pakke når de ser verdien.",
  },
  {
    q: "Inkluderer prisen annonsekostnader?",
    a: "Nei, annonsebudsjett til Meta og Google kommer i tillegg og avtales separat. Vi anbefaler et minimum på 3 000–5 000 kr/mnd for å se resultater.",
  },
  {
    q: "Hva om jeg trenger noe som ikke står på listen?",
    a: "Ta kontakt. Vi skreddersyr løsninger for bedrifter som har behov utover standardpakkene. Første samtale er alltid gratis.",
  },
];

/* ── Animated Price Counter ── */

function AnimatedPrice({ value, inView }: { value: number; inView: boolean }) {
  const motionVal = useMotionValue(0);
  const [display, setDisplay] = useState("0");
  const reduced = useReducedMotion();

  useEffect(() => {
    if (inView) {
      if (reduced) {
        setDisplay(value.toLocaleString("nb-NO"));
        return;
      }
      motionVal.set(0);
      const controls = animate(motionVal, value, {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        onUpdate: (v) => setDisplay(Math.round(v).toLocaleString("nb-NO")),
      });
      return () => controls.stop();
    }
  }, [inView, value, motionVal, reduced]);

  return <>{display}</>;
}

/* ── Floating Orbs Background ── */

function FloatingOrbs() {
  const reduced = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => { setIsMobile(window.innerWidth < 768); }, []);
  if (reduced || isMobile) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {/* Gold orb, large, slow */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 500,
          height: 500,
          left: "15%",
          top: "10%",
          background: "radial-gradient(circle, rgba(212,175,55,0.12) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Warm orb, medium, offset */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 350,
          height: 350,
          right: "10%",
          top: "30%",
          background: "radial-gradient(circle, rgba(233,193,118,0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
        animate={{
          x: [0, -30, 15, 0],
          y: [0, 25, -35, 0],
        }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
      {/* Subtle dim orb, bottom */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: 400,
          height: 400,
          left: "40%",
          bottom: "5%",
          background: "radial-gradient(circle, rgba(242,202,80,0.06) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, 20, -30, 0],
          y: [0, -20, 10, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
    </div>
  );
}

/* ── Package Card ── */

function PackageCard({
  pkg,
  index,
  inView,
}: {
  pkg: (typeof packages)[0];
  index: number;
  inView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex h-full flex-col"
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.7,
        delay: index * 0.12,
        ease: [0.21, 0.47, 0.32, 0.98],
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Badge */}
      {pkg.badge && (
        <div
          className="absolute -top-3 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider"
          style={{
            background: "#f2ca50",
            color: "#131312",
            boxShadow: "0 0 20px rgba(242,202,80,0.3)",
          }}
        >
          {pkg.badge}
        </div>
      )}

      {/* Card body */}
      <div
        className="relative flex h-full flex-col overflow-hidden rounded-2xl p-7 transition-all duration-500"
        style={{
          background: pkg.highlight
            ? "rgba(28,28,26,0.85)"
            : "rgba(28,28,26,0.6)",
          backdropFilter: "blur(16px)",
          border: pkg.highlight
            ? "1px solid rgba(242,202,80,0.35)"
            : "1px solid rgba(77,70,53,0.2)",
          boxShadow: hovered
            ? pkg.highlight
              ? "0 0 50px rgba(242,202,80,0.12), 0 20px 50px rgba(0,0,0,0.4)"
              : "0 20px 50px rgba(0,0,0,0.4), 0 0 30px rgba(242,202,80,0.04)"
            : pkg.highlight
              ? "0 0 30px rgba(242,202,80,0.06), 0 8px 30px rgba(0,0,0,0.3)"
              : "0 4px 20px rgba(0,0,0,0.2)",
          transform: hovered ? "translateY(-4px)" : "translateY(0)",
        }}
      >
        {/* Gradient shimmer on highlight card */}
        {pkg.highlight && (
          <div
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              background:
                "linear-gradient(145deg, rgba(242,202,80,0.08) 0%, transparent 40%, transparent 60%, rgba(242,202,80,0.04) 100%)",
            }}
          />
        )}

        {/* Name + tagline */}
        <div className="relative z-10 mb-6">
          <h3
            className="mb-1 text-2xl font-bold"
            style={{
              fontFamily: "var(--font-noto-serif), Georgia, serif",
              color: "#e5e2de",
            }}
          >
            {pkg.name}
          </h3>
          <p className="text-sm" style={{ color: "#99907c" }}>
            {pkg.tagline}
          </p>
        </div>

        {/* Price */}
        <div className="relative z-10 mb-1 flex items-baseline gap-1">
          <span
            className="text-4xl font-bold tabular-nums"
            style={{
              color: pkg.highlight ? "#f2ca50" : "#e5e2de",
              letterSpacing: "-0.03em",
              fontFamily: "var(--font-manrope), sans-serif",
            }}
          >
            <AnimatedPrice value={pkg.price} inView={true} /> kr
          </span>
          <span className="text-sm" style={{ color: "#99907c" }}>
            {pkg.period}
          </span>
        </div>
        {/* Divider */}
        <div
          className="relative z-10 mb-6 h-px"
          style={{
            background: pkg.highlight
              ? "linear-gradient(90deg, transparent, rgba(242,202,80,0.25), transparent)"
              : "rgba(77,70,53,0.25)",
          }}
        />

        {/* Inherit line */}
        {pkg.inheritFrom && (
          <p
            className="relative z-10 mb-4 text-xs font-semibold"
            style={{ color: "#f2ca50" }}
          >
            {pkg.inheritFrom}
          </p>
        )}

        {/* Features */}
        <ul className="relative z-10 mb-6 flex-1 space-y-3">
          {pkg.includes.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[13px] leading-relaxed"
              style={{ color: "rgba(229,226,222,0.75)" }}
            >
              <svg
                className="mt-0.5 h-4 w-4 flex-shrink-0"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle
                  cx="8"
                  cy="8"
                  r="8"
                  fill={pkg.highlight ? "rgba(242,202,80,0.15)" : "rgba(242,202,80,0.08)"}
                />
                <path
                  d="M5 8.5L7 10.5L11 6.5"
                  stroke={pkg.highlight ? "#f2ca50" : "rgba(242,202,80,0.6)"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        {/* Note */}
        <div
          className="relative z-10 mb-5 border-t pt-4"
          style={{ borderColor: "rgba(77,70,53,0.2)" }}
        >
          <p className="text-xs leading-relaxed" style={{ color: "#99907c" }}>
            {pkg.note}
          </p>
        </div>

        {/* CTA */}
        <button
          type="button"
          onClick={() => {
            sessionStorage.setItem("valgtPakke", pkg.name);
            window.dispatchEvent(new CustomEvent("valgtPakke", { detail: pkg.name }));
            document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="relative z-10 block w-full cursor-pointer rounded-lg py-3.5 text-center text-sm font-bold transition-all duration-300"
          style={
            pkg.highlight
              ? {
                  background: "#d4af37",
                  color: "#131312",
                  boxShadow: hovered ? "0 0 24px rgba(212,175,55,0.3)" : "none",
                }
              : {
                  background: "transparent",
                  border: "1px solid rgba(77,70,53,0.4)",
                  color: "rgba(229,226,222,0.75)",
                }
          }
          onMouseEnter={(e) => {
            if (pkg.highlight) {
              (e.currentTarget as HTMLButtonElement).style.background = "#f2ca50";
            } else {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(242,202,80,0.5)";
              (e.currentTarget as HTMLButtonElement).style.color = "#f2ca50";
            }
          }}
          onMouseLeave={(e) => {
            if (pkg.highlight) {
              (e.currentTarget as HTMLButtonElement).style.background = "#d4af37";
            } else {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(77,70,53,0.4)";
              (e.currentTarget as HTMLButtonElement).style.color = "rgba(229,226,222,0.75)";
            }
          }}
        >
          {pkg.cta}
        </button>
      </div>
    </motion.div>
  );
}

/* ── FAQ Item ── */

function FAQItem({
  faq,
  index,
  open,
  onToggle,
}: {
  faq: (typeof faqs)[0];
  index: number;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div style={{ borderBottom: "1px solid rgba(77,70,53,0.2)" }}>
      <button
        className="flex w-full cursor-pointer items-center justify-between py-5 text-left text-[15px] font-medium transition-colors duration-200"
        style={{ color: open ? "#f2ca50" : "#e5e2de" }}
        onClick={onToggle}
        onMouseEnter={(e) => {
          if (!open) (e.currentTarget as HTMLButtonElement).style.color = "#f2ca50";
        }}
        onMouseLeave={(e) => {
          if (!open) (e.currentTarget as HTMLButtonElement).style.color = "#e5e2de";
        }}
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
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden"
          >
            <p
              className="pb-5 text-sm leading-relaxed"
              style={{ color: "#d0c5af" }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ── Main Component ── */

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<"pakker" | "tjenester">("pakker");
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const cardsRef = useRef(null);
  const cardsInView = useInView(cardsRef, { once: true, margin: "-80px" });

  const servicesRef = useRef(null);

  const SITE_GROUP = ["Landingsside", "Bedriftsnettside"];

  function toggleService(name: string) {
    setSelectedServices((prev) => {
      if (prev.includes(name)) return prev.filter((s) => s !== name);
      // Landingsside og Bedriftsnettside er gjensidig utelukkende
      if (SITE_GROUP.includes(name)) {
        const without = prev.filter((s) => !SITE_GROUP.includes(s));
        return [...without, name];
      }
      return [...prev, name];
    });
  }

  function sendSelectedServices() {
    // Kall ContactForm direkte via global callback
    window.__eleveraSetTjenester?.(selectedServices);
    setSelectedServices([]);
    document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
  }

  const faqRef = useRef(null);
  const faqInView = useInView(faqRef, { once: true, margin: "-60px" });

  return (
    <section className="relative px-4 py-28 sm:px-6 md:px-20" id="priser">
      {/* Floating background orbs */}
      <FloatingOrbs />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* ── Header ── */}
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span
            className="mb-4 block text-xs font-bold uppercase tracking-[0.3em]"
            style={{ color: "#f2ca50", fontFamily: "var(--font-manrope), sans-serif" }}
          >
            Priser
          </span>
          <h2
            className="mx-auto mb-4 max-w-lg text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-noto-serif), Georgia, serif",
              color: "#e5e2de",
              lineHeight: 1.15,
            }}
          >
            Alt du trenger for å{" "}
            <em
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #f2ca50, #e9c176)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              vokse
            </em>{" "}
            digitalt
          </h2>
          <p
            className="mx-auto max-w-md text-base leading-relaxed"
            style={{ color: "#d0c5af" }}
          >
            Vi tar oss av nettside, innhold, sosiale medier og annonsering. Du fokuserer på kundene dine.
          </p>
        </motion.div>

        {/* ── Tab bar ── */}
        <motion.div
          className="mb-12 flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div
            className="flex gap-1 rounded-xl p-1"
            style={{ background: "rgba(28,28,26,0.8)", border: "1px solid rgba(77,70,53,0.2)" }}
          >
            {(["pakker", "tjenester"] as const).map((tab) => (
              <button
                key={tab}
                className="relative cursor-pointer rounded-lg px-6 py-2.5 text-sm font-medium transition-colors duration-200"
                style={{
                  background: activeTab === tab ? "rgba(242,202,80,0.1)" : "transparent",
                  color: activeTab === tab ? "#f2ca50" : "#99907c",
                  border: activeTab === tab ? "1px solid rgba(242,202,80,0.2)" : "1px solid transparent",
                }}
                onClick={() => setActiveTab(tab)}
              >
                {tab === "pakker" ? "Pakker" : "Enkelttjenester"}
              </button>
            ))}
          </div>
        </motion.div>

        {/* ── Packages Grid ── */}
        <AnimatePresence mode="wait">
          {activeTab === "pakker" && (
            <motion.div
              key="pakker"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
            >
              <div
                ref={cardsRef}
                className="mx-auto grid max-w-5xl gap-5 md:grid-cols-3"
                id="prispakker"
              >
                {packages.map((pkg, i) => (
                  <PackageCard key={pkg.name} pkg={pkg} index={i} inView={cardsInView} />
                ))}
              </div>

              {/* Guarantee */}
              <motion.div
                className="mx-auto mt-10 max-w-5xl"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div
                  className="flex flex-col items-center gap-3 rounded-2xl px-6 py-5 text-center sm:flex-row sm:text-left"
                  style={{
                    background: "rgba(242,202,80,0.04)",
                    border: "1px solid rgba(242,202,80,0.15)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div
                    className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full"
                    style={{ background: "rgba(242,202,80,0.1)", border: "1px solid rgba(242,202,80,0.2)" }}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(242,202,80,0.15)" stroke="#f2ca50" strokeWidth="1.5" strokeLinejoin="round" />
                      <path d="M9 12l2 2 4-4" stroke="#f2ca50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <p className="text-sm" style={{ color: "rgba(229,226,222,0.6)" }}>
                    <span className="font-bold" style={{ color: "#e5e2de" }}>Ingen bindingstid.</span>{" "}
                    Du kan si opp med én måneds varsel. Vi beholder kunder fordi vi leverer, ikke fordi vi låser deg inne.
                  </p>
                </div>
              </motion.div>

              {/* Fine print */}
              <motion.p
                className="mt-5 text-center text-xs leading-relaxed"
                style={{ color: "rgba(153,144,124,0.5)" }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                Alle priser eks. mva. Annonsebudsjett kommer i tillegg og avtales separat.
              </motion.p>
            </motion.div>
          )}

          {/* ── Services Grid ── */}
          {activeTab === "tjenester" && (
            <motion.div
              key="tjenester"
              ref={servicesRef}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35 }}
              className="mx-auto max-w-4xl"
            >
              <p className="mb-8 text-center text-sm" style={{ color: "#99907c" }}>
                Velg tjenestene du er interessert i
              </p>

              {/* Løpende tjenester */}
              <p
                className="mb-3 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "rgba(242,202,80,0.6)" }}
              >
                Løpende tjenester
              </p>
              <div className="mb-10 grid gap-4 sm:grid-cols-2">
                {services.filter((s) => s.unit.includes("mnd")).map((svc, i) => {
                  const selected = selectedServices.includes(svc.name);
                  return (
                  <motion.div
                    key={svc.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.07 }}
                    className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300"
                    onClick={() => toggleService(svc.name)}
                    style={{
                      background: selected ? "rgba(242,202,80,0.06)" : "rgba(28,28,26,0.6)",
                      border: selected
                        ? "1px solid rgba(242,202,80,0.4)"
                        : "1px solid rgba(77,70,53,0.2)",
                      backdropFilter: "blur(16px)",
                      boxShadow: selected ? "0 0 24px rgba(242,202,80,0.06)" : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!selected) {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(242,202,80,0.3)";
                        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!selected) {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(77,70,53,0.2)";
                        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                      }
                    }}
                  >
                    {/* Selection indicator */}
                    <div
                      className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200"
                      style={{
                        background: selected ? "#f2ca50" : "rgba(77,70,53,0.25)",
                        border: selected ? "none" : "1px solid rgba(77,70,53,0.3)",
                      }}
                    >
                      {selected && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M5 13l4 4L19 7" stroke="#131312" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>

                    <div className="mb-4 flex items-start justify-between gap-4 pr-8">
                      <div>
                        <p className="text-base font-bold" style={{ color: selected ? "#f2ca50" : "#e5e2de" }}>
                          {svc.name}
                        </p>
                        <p className="mt-1 text-sm leading-relaxed" style={{ color: "#99907c" }}>
                          {svc.desc}
                        </p>
                        {svc.meta && (
                          <p className="mt-2 text-[11px]" style={{ color: "rgba(153,144,124,0.55)" }}>
                            {svc.meta}
                          </p>
                        )}
                      </div>
                    </div>
                    <div
                      className="mt-auto flex items-baseline gap-1 border-t pt-4"
                      style={{ borderColor: "rgba(77,70,53,0.2)" }}
                    >
                      <span className="text-[11px] uppercase tracking-wider" style={{ color: "rgba(153,144,124,0.5)" }}>
                        fra
                      </span>
                      <span
                        className="text-2xl font-bold tabular-nums"
                        style={{ color: "#f2ca50", letterSpacing: "-0.02em" }}
                      >
                        {svc.from}
                      </span>
                      <span className="text-sm" style={{ color: "#99907c" }}>
                        {svc.unit}
                      </span>
                    </div>
                  </motion.div>
                  );
                })}
              </div>

              {/* Engangstjenester */}
              <p
                className="mb-3 text-xs font-bold uppercase tracking-[0.2em]"
                style={{ color: "rgba(242,202,80,0.6)" }}
              >
                Engangstjenester
              </p>
              <div className="mb-8 grid gap-4 sm:grid-cols-2">
                {services.filter((s) => !s.unit.includes("mnd")).map((svc, i) => {
                  const selected = selectedServices.includes(svc.name);
                  return (
                  <motion.div
                    key={svc.name}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.07 + 0.3 }}
                    className="group relative flex cursor-pointer flex-col justify-between overflow-hidden rounded-2xl p-6 transition-all duration-300"
                    onClick={() => toggleService(svc.name)}
                    style={{
                      background: selected ? "rgba(242,202,80,0.06)" : "rgba(28,28,26,0.6)",
                      border: selected
                        ? "1px solid rgba(242,202,80,0.4)"
                        : "1px solid rgba(77,70,53,0.2)",
                      backdropFilter: "blur(16px)",
                      boxShadow: selected ? "0 0 24px rgba(242,202,80,0.06)" : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!selected) {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(242,202,80,0.3)";
                        (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!selected) {
                        (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(77,70,53,0.2)";
                        (e.currentTarget as HTMLDivElement).style.transform = "translateY(0)";
                      }
                    }}
                  >
                    <div
                      className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full transition-all duration-200"
                      style={{
                        background: selected ? "#f2ca50" : "rgba(77,70,53,0.25)",
                        border: selected ? "none" : "1px solid rgba(77,70,53,0.3)",
                      }}
                    >
                      {selected && (
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M5 13l4 4L19 7" stroke="#131312" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                    <div className="mb-4 pr-8">
                      <p className="text-base font-bold" style={{ color: selected ? "#f2ca50" : "#e5e2de" }}>
                        {svc.name}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed" style={{ color: "#99907c" }}>
                        {svc.desc}
                      </p>
                    </div>
                    <div
                      className="mt-auto flex items-baseline gap-1 border-t pt-4"
                      style={{ borderColor: "rgba(77,70,53,0.2)" }}
                    >
                      <span className="text-[11px] uppercase tracking-wider" style={{ color: "rgba(153,144,124,0.5)" }}>
                        fra
                      </span>
                      <span
                        className="text-2xl font-bold tabular-nums"
                        style={{ color: "#f2ca50", letterSpacing: "-0.02em" }}
                      >
                        {svc.from}
                      </span>
                      <span className="text-sm" style={{ color: "#99907c" }}>
                        {svc.unit}
                      </span>
                    </div>
                  </motion.div>
                  );
                })}
              </div>

              {/* Floating selection bar */}
              <AnimatePresence>
                {selectedServices.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
                  >
                    <div
                      className="flex items-center gap-4 rounded-2xl px-6 py-4 shadow-2xl"
                      style={{
                        background: "rgba(19,19,18,0.95)",
                        border: "1px solid rgba(242,202,80,0.3)",
                        backdropFilter: "blur(20px)",
                        boxShadow: "0 20px 60px rgba(0,0,0,0.5), 0 0 30px rgba(242,202,80,0.08)",
                      }}
                    >
                      <div className="flex flex-wrap items-center gap-2">
                        {selectedServices.map((name) => {
                          const svc = services.find((s) => s.name === name);
                          return (
                            <span
                              key={name}
                              className="rounded-full px-3 py-1 text-xs font-semibold"
                              style={{ background: "rgba(242,202,80,0.15)", color: "#f2ca50" }}
                            >
                              {name}{svc ? ` · ${svc.from} ${svc.unit}` : ""}
                            </span>
                          );
                        })}
                      </div>
                      <div
                        className="mx-2 h-8 w-px flex-shrink-0"
                        style={{ background: "rgba(77,70,53,0.4)" }}
                      />
                      <div className="flex flex-shrink-0 flex-col items-end gap-0.5" style={{ whiteSpace: "nowrap" }}>
                        {(() => {
                          const selected = services.filter((s) => selectedServices.includes(s.name));
                          const monthly = selected.filter((s) => s.unit.includes("mnd"));
                          const oneTime = selected.filter((s) => !s.unit.includes("mnd"));
                          const monthlyTotal = monthly.reduce((sum, s) => sum + parseInt(s.from.replace(/\s/g, ""), 10), 0);
                          const oneTimeTotal = oneTime.reduce((sum, s) => sum + parseInt(s.from.replace(/\s/g, ""), 10), 0);
                          const setupTotal = selected.reduce((sum, s) => {
                            if (!s.meta) return sum;
                            const match = s.meta.match(/Oppstart:\s*([\d\s]+)\s*kr/);
                            return match ? sum + parseInt(match[1].replace(/\s/g, ""), 10) : sum;
                          }, 0);
                          const hasDiscount = selectedServices.length >= 2;
                          const disc = (v: number) => Math.round(v * 0.85);

                          return (
                            <>
                              {hasDiscount && (
                                <span className="text-[10px] font-semibold" style={{ color: "rgba(242,202,80,0.7)" }}>
                                  −15% rabatt
                                </span>
                              )}
                              {monthlyTotal > 0 && (
                                <span className="text-sm font-bold tabular-nums" style={{ color: "#f2ca50" }}>
                                  {hasDiscount ? (
                                    <>
                                      <span className="mr-1.5 text-[11px] font-normal line-through" style={{ color: "#99907c" }}>
                                        {monthlyTotal.toLocaleString("nb-NO")}
                                      </span>
                                      {disc(monthlyTotal).toLocaleString("nb-NO")}
                                    </>
                                  ) : (
                                    monthlyTotal.toLocaleString("nb-NO")
                                  )} kr/mnd
                                </span>
                              )}
                              {oneTimeTotal > 0 && (
                                <span className="text-sm font-bold tabular-nums" style={{ color: "#f2ca50" }}>
                                  {hasDiscount ? (
                                    <>
                                      <span className="mr-1.5 text-[11px] font-normal line-through" style={{ color: "#99907c" }}>
                                        {oneTimeTotal.toLocaleString("nb-NO")}
                                      </span>
                                      {disc(oneTimeTotal).toLocaleString("nb-NO")}
                                    </>
                                  ) : (
                                    oneTimeTotal.toLocaleString("nb-NO")
                                  )} kr
                                </span>
                              )}
                              {setupTotal > 0 && (
                                <span className="text-[11px] tabular-nums" style={{ color: "#99907c" }}>
                                  + {setupTotal.toLocaleString("nb-NO")} kr oppstart
                                </span>
                              )}
                            </>
                          );
                        })()}
                      </div>
                      <button
                        onClick={sendSelectedServices}
                        className="flex-shrink-0 cursor-pointer rounded-lg px-5 py-2.5 text-sm font-bold transition-all duration-200 active:scale-95"
                        style={{ background: "#d4af37", color: "#131312" }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.background = "#f2ca50";
                          (e.currentTarget as HTMLButtonElement).style.boxShadow = "0 0 20px rgba(242,202,80,0.35)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLButtonElement).style.background = "#d4af37";
                          (e.currentTarget as HTMLButtonElement).style.boxShadow = "none";
                        }}
                      >
                        Send forespørsel →
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Bundle discount banner */}
              <motion.div
                className="relative mt-8 overflow-hidden rounded-2xl px-6 py-5 text-center"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  background: "rgba(242,202,80,0.05)",
                  border: "1px solid rgba(242,202,80,0.2)",
                }}
              >
                {/* Subtle glow */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(242,202,80,0.06) 0%, transparent 70%)" }}
                  aria-hidden="true"
                />
                <p className="relative z-10 text-sm font-semibold" style={{ color: "#e5e2de" }}>
                  Kombiner to eller flere tjenester og få{" "}
                  <span style={{ color: "#f2ca50" }}>15 % rabatt</span>.
                </p>
                <p className="relative z-10 mt-1 text-xs" style={{ color: "#99907c" }}>
                  <a
                    href="#kontakt"
                    className="underline underline-offset-2 transition-colors duration-150"
                    style={{ color: "rgba(242,202,80,0.65)" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#f2ca50")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(242,202,80,0.65)")}
                  >
                    Ta kontakt for et tilpasset tilbud.
                  </a>
                </p>
              </motion.div>

              {/* Fine print */}
              <motion.p
                className="mt-5 text-center text-xs"
                style={{ color: "rgba(153,144,124,0.45)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Alle priser eks. mva.
              </motion.p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── FAQ ── */}
        <motion.div
          ref={faqRef}
          className="mx-auto mt-24 max-w-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={faqInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h3
            className="mb-8 text-center text-2xl font-bold sm:text-3xl"
            style={{
              fontFamily: "var(--font-noto-serif), Georgia, serif",
              color: "#e5e2de",
            }}
          >
            Vanlige spørsmål
          </h3>
          <div>
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
