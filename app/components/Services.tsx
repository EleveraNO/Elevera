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
    glow: "radial-gradient(circle at 100% 100%, rgba(251,191,36,0.08) 0%, transparent 60%)",
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
    glow: "radial-gradient(circle at 100% 100%, rgba(56,189,248,0.08) 0%, transparent 60%)",
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
    glow: "radial-gradient(circle at 100% 100%, rgba(251,146,60,0.08) 0%, transparent 60%)",
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
    glow: "radial-gradient(circle at 100% 100%, rgba(167,139,250,0.08) 0%, transparent 60%)",
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
        <FadeUp className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">
            Tjenester
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Foto, video og annonsering som skaper vekst
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            Elevera tilbyr alle digitale tjenestene du trenger for å vokse –
            slik slipper du å styre med flere byråer.
          </p>
        </FadeUp>

        {/* Mobile: stacked cards */}
        <div className="grid gap-4 md:hidden">
          {services.map((service, index) => (
            <a
              key={service.number}
              href={service.href}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/5 p-7"
            >
              <span className="mb-3 block text-4xl font-bold text-[#7c3aed]/20">
                {service.number}
              </span>
              <h3 className="mb-2 text-lg font-bold text-white">{service.title}</h3>
              <p className="mb-5 text-sm leading-relaxed text-white/50">{service.description}</p>
              <ul className="mb-5 space-y-2">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-white/70">
                    <svg aria-hidden="true" className="h-3.5 w-3.5 flex-shrink-0 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <span className="flex items-center gap-1 text-sm font-semibold text-[#7c3aed]">
                Les mer
                <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>

        {/* Desktop: interactive expanding grid */}
        <div
          className="hidden h-[620px] gap-3 md:grid"
          style={{
            gridTemplateColumns: cols,
            gridTemplateRows: rows,
            transition: "grid-template-columns 0.45s ease, grid-template-rows 0.45s ease",
          }}
        >
          {services.map((service, index) => {
            const isActive = hovered === index;
            const isDimmed = hovered !== null && !isActive;

            return (
              <a
                key={service.number}
                href={service.href}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border p-8 transition-all duration-300 ${
                  isActive
                    ? "border-[#7c3aed]/50 shadow-[0_0_50px_rgba(124,58,237,0.15)]"
                    : isDimmed
                    ? "border-white/5 bg-white/3"
                    : "border-white/10 bg-white/5"
                }`}
                style={isActive ? { background: service.glow } : undefined}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Number */}
                <span
                  className={`block font-bold text-[#7c3aed]/20 transition-all duration-300 ${
                    isActive ? "mb-4 text-6xl" : "mb-3 text-4xl"
                  }`}
                >
                  {service.number}
                </span>

                {/* Title */}
                <h3
                  className={`font-bold text-white transition-all duration-300 ${
                    isActive ? "mb-4 text-2xl" : "mb-2 text-lg"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description — hide when another is hovered */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isDimmed ? "max-h-0 opacity-0" : "max-h-32 opacity-100"
                  }`}
                >
                  <p className="text-sm leading-relaxed text-white/50">
                    {service.description}
                  </p>
                </div>

                {/* Features — only when active */}
                <ul
                  className={`mt-4 space-y-2 overflow-hidden transition-all duration-300 ${
                    isActive ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <svg aria-hidden="true" className="h-3.5 w-3.5 flex-shrink-0 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/70">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Les mer — only when active */}
                <span
                  className={`mt-auto flex items-center gap-1 pt-4 text-sm font-semibold text-[#7c3aed] transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Les mer
                  <svg aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
