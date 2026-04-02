"use client";

import { useState } from "react";
import { FadeUp } from "./animations";

const services = [
  {
    number: "01",
    title: "Foto & Video",
    href: "/tjenester/foto-og-video-alesund",
    description:
      "Profesjonelt innhold som stopper scrollingen og konverterer. Vi produserer alt fra produktfoto og bedriftsbilder til reklamefilmer og dronevideo.",
    features: [
      "Produktfotografering",
      "Bedriftsfoto & portrett",
      "Reklamevideo & kortfilm",
      "Dronevideo & luftopptak",
    ],
    accentColor: "rgba(45,212,191,0.12)",
  },
  {
    number: "02",
    title: "Nettside",
    href: "/tjenester/nettside-alesund",
    description:
      "Raske, konverterende nettsider som ser bra ut på alle enheter. Vi bygger alt fra enkle landingssider til avanserte e-handelssider med SEO i bunn.",
    features: [
      "Moderne webdesign",
      "Rask lasting & mobiltilpasset",
      "SEO-optimalisert",
      "Eget foto & video til siden",
    ],
    accentColor: "rgba(45,212,191,0.12)",
  },
  {
    number: "03",
    title: "Betalt annonsering",
    href: "/tjenester/annonsering-alesund",
    description:
      "Vi administrerer Meta- og Google-annonser som faktisk gir avkastning. Datadrevet optimalisering som skalerer det som virker og kutter det som ikke gjør det.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads & Shopping",
      "A/B-testing av annonser",
      "Månedlig rapportering",
    ],
    accentColor: "rgba(45,212,191,0.12)",
  },
  {
    number: "04",
    title: "Digital vekststrategi",
    href: "/#kontakt",
    description:
      "En helhetlig plan for din digitale tilstedeværelse. Vi analyserer markedet, identifiserer muligheter og bygger en skreddersydd strategi for vekst.",
    features: [
      "Konkurrentanalyse",
      "Innholdskalender",
      "KPI-oppsett & tracking",
      "Kvartalsvise gjennomganger",
    ],
    accentColor: "rgba(45,212,191,0.12)",
  },
];

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  const cols =
    hovered === null ? "1fr 1fr" : hovered % 2 === 0 ? "2fr 1fr" : "1fr 2fr";
  const rows =
    hovered === null ? "1fr 1fr" : hovered < 2 ? "2fr 1fr" : "1fr 2fr";

  return (
    <section id="tjenester" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="mb-16">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#2DD4BF" }}
          >
            Tjenester
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              className="max-w-sm text-3xl font-bold sm:text-4xl md:text-5xl"
              style={{ color: "#F2EDE6" }}
            >
              Alt du trenger for å vokse på nett
            </h2>
            <p className="max-w-xs text-sm leading-relaxed sm:text-right" style={{ color: "rgba(242,237,230,0.45)" }}>
              Slipper du å styre med flere byråer — Elevera leverer
              alt fra én partner.
            </p>
          </div>
        </FadeUp>

        {/* Mobile: stacked cards */}
        <div className="grid gap-3 md:hidden">
          {services.map((service) => (
            <a
              key={service.number}
              href={service.href}
              className="flex flex-col rounded-xl p-7 transition-colors duration-200"
              style={{
                border: "1px solid rgba(255,255,255,0.08)",
                background: "#111115",
              }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span
                  className="text-xs font-mono"
                  style={{ color: "rgba(45,212,191,0.5)" }}
                >
                  {service.number}
                </span>
                <svg
                  aria-hidden="true"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{ color: "rgba(242,237,230,0.3)" }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
              <h3 className="mb-2 text-lg font-bold" style={{ color: "#F2EDE6" }}>
                {service.title}
              </h3>
              <p className="mb-5 text-sm leading-relaxed" style={{ color: "rgba(242,237,230,0.45)" }}>
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: "rgba(242,237,230,0.65)" }}>
                    <span
                      className="h-1 w-1 flex-shrink-0 rounded-full"
                      style={{ background: "#2DD4BF" }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </div>

        {/* Desktop: interactive expanding grid */}
        <div
          className="hidden h-[600px] gap-3 md:grid"
          style={{
            gridTemplateColumns: cols,
            gridTemplateRows: rows,
            transition: "grid-template-columns 0.4s ease, grid-template-rows 0.4s ease",
          }}
        >
          {services.map((service, index) => {
            const isActive = hovered === index;
            const isDimmed = hovered !== null && !isActive;

            return (
              <a
                key={service.number}
                href={service.href}
                className="group relative flex flex-col overflow-hidden rounded-xl p-8 transition-all duration-300"
                style={{
                  border: isActive
                    ? "1px solid rgba(45,212,191,0.35)"
                    : "1px solid rgba(255,255,255,0.07)",
                  background: isActive
                    ? "#111115"
                    : isDimmed
                    ? "#0C0C0F"
                    : "#111115",
                  opacity: isDimmed ? 0.55 : 1,
                }}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Accent dot on active */}
                {isActive && (
                  <div
                    className="absolute top-0 left-0 h-px w-16"
                    style={{ background: "#2DD4BF" }}
                  />
                )}

                {/* Number */}
                <span
                  className="mb-3 block font-mono text-sm transition-all duration-300"
                  style={{ color: isActive ? "rgba(45,212,191,0.7)" : "rgba(255,255,255,0.18)" }}
                >
                  {service.number}
                </span>

                {/* Title */}
                <h3
                  className={`font-bold transition-all duration-300 ${isActive ? "mb-4 text-2xl" : "mb-2 text-lg"}`}
                  style={{ color: "#F2EDE6" }}
                >
                  {service.title}
                </h3>

                {/* Description — hide when another is hovered */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isDimmed ? "max-h-0 opacity-0" : "max-h-32 opacity-100"
                  }`}
                >
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(242,237,230,0.45)" }}>
                    {service.description}
                  </p>
                </div>

                {/* Features — only when active */}
                <ul
                  className={`mt-5 space-y-2.5 overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <span
                        className="h-1.5 w-1.5 flex-shrink-0 rounded-full"
                        style={{ background: "#2DD4BF" }}
                      />
                      <span style={{ color: "rgba(242,237,230,0.7)" }}>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Les mer — only when active */}
                <div
                  className={`mt-auto flex items-center gap-1.5 pt-5 text-sm font-semibold transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ color: "#2DD4BF" }}
                >
                  Les mer
                  <svg
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
