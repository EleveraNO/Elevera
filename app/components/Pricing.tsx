"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

const plans = [
  {
    name: "Synlighet",
    tag: "Kom i gang",
    price: "6 900",
    period: "/ mnd",
    forWho: "For bedrifter som vil etablere en profesjonell tilstedeværelse på nett.",
    features: [
      "2 plattformer (Instagram + Facebook)",
      "8 ferdigproduserte innlegg per måned",
      "Månedlig statusoppdatering",
    ],
    highlighted: false,
    cta: "Start med Synlighet",
  },
  {
    name: "Vekst",
    tag: "Mest valgt",
    price: "12 900",
    period: "/ mnd",
    forWho: "For bedrifter som vil nå flere kunder og begynne å annonsere.",
    features: [
      "3 plattformer (inkl. TikTok)",
      "12 ferdigproduserte innlegg per måned",
      "Meta Ads — vi setter opp og optimaliserer",
      "Månedlig rapport med tall",
    ],
    highlighted: false,
    cta: "Start med Vekst",
  },
  {
    name: "Premium",
    tag: "Anbefalt",
    price: "19 900",
    period: "/ mnd",
    forWho: "For bedrifter som vil vokse raskt og ha alt på ett sted.",
    features: [
      "3 plattformer (inkl. TikTok)",
      "16 ferdigproduserte innlegg per måned",
      "Månedlig foto/video-shoot",
      "Meta Ads + Google Ads",
      "Løpende SEO-optimalisering",
      "Dedikert kontaktperson",
    ],
    highlighted: true,
    cta: "Velg Premium",
  },
  {
    name: "Komplett vekst",
    tag: "Alt inkludert",
    price: "29 900",
    period: "/ mnd",
    forWho: "For bedrifter som vil ha en komplett digital partner — fra nettside til annonsering.",
    features: [
      "Alt i Premium-pakken",
      "20 ferdigproduserte innlegg per måned",
      "Nettside inkludert (design + utvikling)",
      "TikTok Ads i tillegg til Meta + Google",
      "Full vekststrategi og roadmap",
      "Prioritert support",
    ],
    highlighted: false,
    cta: "Ta kontakt",
  },
];

const addons = [
  { label: "Nettside", note: "engangssum", price: "fra 14 900 kr" },
  { label: "Ekstra annonseplattform", note: "per mnd", price: "+1 500 kr" },
  { label: "Ekstra fotoshoot", note: "per gang", price: "+3 500 kr" },
  { label: "SEO-pakke (frittstående)", note: "per mnd", price: "+2 500 kr" },
  { label: "Annonsekonto-oppsett", note: "engangs", price: "2 900 kr" },
  { label: "Videoredigering", note: "per video", price: "fra 1 200 kr" },
];

export default function Pricing() {
  return (
    <section className="px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <FadeUp className="mb-12 text-center">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#2DD4BF" }}
          >
            Prispakker
          </p>
          <h2
            className="text-3xl font-bold sm:text-4xl md:text-5xl"
            style={{ color: "#F2EDE6", letterSpacing: "-0.02em" }}
          >
            Vi tar jobben —{" "}
            <span style={{ color: "#2DD4BF" }}>du høster resultatene</span>
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed"
            style={{ color: "rgba(242,237,230,0.45)" }}
          >
            Ingen skjulte gebyrer. Fra idé og produksjon til publisering og
            oppfølging — vi tar hånd om alt.
          </p>
        </FadeUp>

        {/* "Included in all plans" strip */}
        <FadeUp delay={0.05}>
          <div
            className="mb-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-xl px-6 py-4"
            style={{
              border: "1px solid rgba(45,212,191,0.15)",
              background: "rgba(45,212,191,0.04)",
            }}
          >
            <span
              className="text-xs font-semibold uppercase tracking-widest"
              style={{ color: "#2DD4BF" }}
            >
              Inkludert i alle pakker
            </span>
            {[
              "Innholdsstrategi",
              "Tekstforfatning",
              "Grafisk design",
              "Publisering",
              "Månedlig oppfølging",
            ].map((item) => (
              <span
                key={item}
                className="flex items-center gap-1.5 text-xs"
                style={{ color: "rgba(242,237,230,0.55)" }}
              >
                <span
                  className="h-1 w-1 rounded-full"
                  style={{ background: "#2DD4BF" }}
                />
                {item}
              </span>
            ))}
          </div>
        </FadeUp>

        {/* Package cards */}
        <div id="prispakker" className="scroll-mt-24">
          <StaggerContainer className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {plans.map((plan, index) => (
              <StaggerItem key={index}>
                <div
                  className="group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={
                    plan.highlighted
                      ? {
                          border: "1px solid rgba(45,212,191,0.5)",
                          background:
                            "linear-gradient(145deg, rgba(45,212,191,0.07) 0%, #111115 55%)",
                          boxShadow:
                            "0 0 0 1px rgba(45,212,191,0.1), 0 0 40px rgba(45,212,191,0.08), 0 20px 40px rgba(0,0,0,0.4)",
                        }
                      : {
                          border: "1px solid rgba(255,255,255,0.07)",
                          background: "#111115",
                          boxShadow: "0 4px 24px rgba(0,0,0,0.2)",
                        }
                  }
                  onMouseEnter={(e) => {
                    if (!plan.highlighted) {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(45,212,191,0.25)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "0 8px 32px rgba(0,0,0,0.35), 0 0 20px rgba(45,212,191,0.06)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!plan.highlighted) {
                      (e.currentTarget as HTMLDivElement).style.borderColor =
                        "rgba(255,255,255,0.07)";
                      (e.currentTarget as HTMLDivElement).style.boxShadow =
                        "0 4px 24px rgba(0,0,0,0.2)";
                    }
                  }}
                >
                  {/* Badge */}
                  <div className="mb-4 flex items-center justify-between">
                    <span
                      className="rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest"
                      style={
                        plan.highlighted
                          ? { background: "#2DD4BF", color: "#09090B" }
                          : {
                              background: "rgba(255,255,255,0.06)",
                              color: "rgba(242,237,230,0.45)",
                            }
                      }
                    >
                      {plan.tag}
                    </span>
                  </div>

                  {/* Plan name */}
                  <h3
                    className="mb-1 text-lg font-bold"
                    style={{ color: "#F2EDE6" }}
                  >
                    {plan.name}
                  </h3>

                  {/* "For who" */}
                  <p
                    className="mb-5 text-xs leading-relaxed"
                    style={{ color: "rgba(242,237,230,0.40)" }}
                  >
                    {plan.forWho}
                  </p>

                  {/* Price */}
                  <div className="mb-5 flex items-baseline gap-1">
                    <span
                      className="text-3xl font-bold tabular-nums"
                      style={{
                        color: plan.highlighted ? "#2DD4BF" : "#F2EDE6",
                      }}
                    >
                      {plan.price} kr
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: "rgba(242,237,230,0.3)" }}
                    >
                      {plan.period}
                    </span>
                  </div>

                  {/* Divider */}
                  <div
                    className="mb-5 h-px"
                    style={{
                      background: plan.highlighted
                        ? "rgba(45,212,191,0.15)"
                        : "rgba(255,255,255,0.06)",
                    }}
                  />

                  {/* Features */}
                  <ul className="mb-8 flex-1 space-y-2.5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs">
                        <svg
                          className="mt-0.5 h-3.5 w-3.5 flex-shrink-0"
                          viewBox="0 0 12 12"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 6l3 3 5-5"
                            stroke={plan.highlighted ? "#2DD4BF" : "rgba(45,212,191,0.6)"}
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        <span style={{ color: "rgba(242,237,230,0.72)" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="#kontakt"
                    className="block w-full cursor-pointer rounded-full py-3 text-center text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 active:scale-[0.98]"
                    style={
                      plan.highlighted
                        ? { background: "#2DD4BF", color: "#09090B" }
                        : {
                            border: "1px solid rgba(255,255,255,0.12)",
                            color: "rgba(242,237,230,0.70)",
                            background: "transparent",
                          }
                    }
                    onMouseEnter={(e) => {
                      if (plan.highlighted) {
                        (e.currentTarget as HTMLAnchorElement).style.background =
                          "#14B8A6";
                      } else {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor =
                          "rgba(255,255,255,0.28)";
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "#F2EDE6";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (plan.highlighted) {
                        (e.currentTarget as HTMLAnchorElement).style.background =
                          "#2DD4BF";
                      } else {
                        (e.currentTarget as HTMLAnchorElement).style.borderColor =
                          "rgba(255,255,255,0.12)";
                        (e.currentTarget as HTMLAnchorElement).style.color =
                          "rgba(242,237,230,0.70)";
                      }
                    }}
                  >
                    {plan.cta}
                  </a>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        {/* Usikker? helper */}
        <FadeUp delay={0.15}>
          <p
            className="mt-6 text-center text-xs"
            style={{ color: "rgba(242,237,230,0.28)" }}
          >
            Usikker på hvilken pakke som passer?{" "}
            <a
              href="#kontakt"
              className="underline underline-offset-2 transition-colors duration-150"
              style={{ color: "rgba(45,212,191,0.6)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color = "#2DD4BF")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(45,212,191,0.6)")
              }
            >
              Ta kontakt — vi hjelper deg å velge.
            </a>
          </p>
        </FadeUp>

        {/* Tilleggstjenester */}
        <FadeUp delay={0.2}>
          <div className="mt-16">
            <div className="mb-6 text-center">
              <p
                className="text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "rgba(242,237,230,0.35)" }}
              >
                Tilleggstjenester
              </p>
              <p
                className="mt-1 text-xs"
                style={{ color: "rgba(242,237,230,0.25)" }}
              >
                Legg til det du trenger — uten å bytte pakke.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {addons.map((addon, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl px-5 py-4 transition-colors duration-150"
                  style={{
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "#111115",
                  }}
                >
                  <div>
                    <p
                      className="text-sm font-medium"
                      style={{ color: "rgba(242,237,230,0.80)" }}
                    >
                      {addon.label}
                    </p>
                    <p
                      className="text-xs"
                      style={{ color: "rgba(242,237,230,0.30)" }}
                    >
                      {addon.note}
                    </p>
                  </div>
                  <span
                    className="text-sm font-semibold tabular-nums"
                    style={{ color: "#2DD4BF" }}
                  >
                    {addon.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>

        {/* Footer */}
        <FadeUp delay={0.3}>
          <p
            className="mt-10 text-center text-xs leading-relaxed"
            style={{ color: "rgba(242,237,230,0.22)" }}
          >
            Alle priser er eks. mva. Annonsekostnader kommer i tillegg og
            avtales separat. Bindingstid 3 måneder, deretter løpende.
          </p>
        </FadeUp>

        {/* Calculator link */}
        <FadeUp delay={0.4}>
          <div className="mt-8 flex justify-center">
            <a
              href="/kalkulator"
              className="group inline-flex items-center gap-3 rounded-xl px-6 py-3.5 text-sm font-medium transition-all duration-200"
              style={{
                border: "1px solid rgba(45,212,191,0.2)",
                background: "rgba(45,212,191,0.05)",
                color: "rgba(45,212,191,0.8)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(45,212,191,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(45,212,191,0.10)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#2DD4BF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(45,212,191,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(45,212,191,0.05)";
                (e.currentTarget as HTMLAnchorElement).style.color =
                  "rgba(45,212,191,0.8)";
              }}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
                <path d="M7 8h10M7 12h6" />
              </svg>
              Bygg din egen pakke
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                →
              </span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
