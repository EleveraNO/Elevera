"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

const plans = [
  {
    name: "Synlighet",
    price: "6 900",
    period: "/ mnd",
    description: "Kom i gang med profesjonell tilstedeværelse på sosiale medier.",
    features: [
      "2 plattformer (f.eks. Instagram + Facebook)",
      "8 ferdigproduserte innlegg per måned",
      "Vi tar hånd om alt — fra idé og produksjon til publisering og oppfølging",
      "Månedlig statusoppdatering",
    ],
    highlighted: false,
    cta: "Ta kontakt",
  },
  {
    name: "Vekst",
    price: "12 900",
    period: "/ mnd",
    description: "Mer innhold, flere kanaler og betalt annonsering for synlig vekst.",
    features: [
      "3 plattformer (inkl. TikTok)",
      "12 ferdigproduserte innlegg per måned",
      "Vi tar hånd om alt — fra idé og produksjon til publisering og oppfølging",
      "Meta Ads (annonsekostnader ekskl.)",
      "Månedlig rapport med tall",
    ],
    highlighted: false,
    cta: "Ta kontakt",
  },
  {
    name: "Premium",
    price: "19 900",
    period: "/ mnd",
    description: "Full pakke med produksjon, annonsering og SEO — alt på ett sted.",
    features: [
      "3 plattformer (inkl. TikTok)",
      "16 ferdigproduserte innlegg per måned",
      "Vi tar hånd om alt — fra idé og produksjon til publisering og oppfølging",
      "Månedlig foto/video-shoot",
      "Meta Ads + Google Ads (annonsekostnader ekskl.)",
      "Løpende SEO-optimalisering",
      "Dedikert kontaktperson",
    ],
    highlighted: true,
    cta: "Ta kontakt",
  },
  {
    name: "Komplett vekst",
    price: "29 900",
    period: "/ mnd",
    description: "Alt i Premium — pluss nettside, TikTok Ads og full vekststrategi.",
    features: [
      "Alt i Premium-pakken",
      "20 ferdigproduserte innlegg per måned",
      "Nettside inkludert (design + utvikling)",
      "Meta + Google + TikTok Ads (annonsekostnader ekskl.)",
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
        <FadeUp className="mb-16 text-center">
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
            Enkle, transparente priser
          </h2>
          <p
            className="mx-auto mt-4 max-w-xl text-sm leading-relaxed"
            style={{ color: "rgba(242,237,230,0.45)" }}
          >
            Ingen skjulte gebyrer. Vi leverer alt — fra idé til publisering.
          </p>
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
                          border: "1px solid rgba(124,58,237,0.6)",
                          background:
                            "linear-gradient(145deg, rgba(124,58,237,0.10) 0%, #111115 55%)",
                          boxShadow:
                            "0 0 0 1px rgba(124,58,237,0.15), 0 0 40px rgba(124,58,237,0.12), 0 20px 40px rgba(0,0,0,0.4)",
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
                  {/* Most popular badge */}
                  {plan.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                      <span
                        className="rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-widest"
                        style={{ background: "#7c3aed", color: "#fff" }}
                      >
                        Mest populær
                      </span>
                    </div>
                  )}

                  {/* Plan name + description */}
                  <div className="mb-5">
                    <h3
                      className="mb-1.5 text-base font-bold"
                      style={{ color: "#F2EDE6" }}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className="text-xs leading-relaxed"
                      style={{ color: "rgba(242,237,230,0.45)" }}
                    >
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-6 flex items-baseline gap-1">
                    <span
                      className="text-3xl font-bold"
                      style={{ color: plan.highlighted ? "#a78bfa" : "#F2EDE6" }}
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
                        ? "rgba(124,58,237,0.2)"
                        : "rgba(255,255,255,0.06)",
                    }}
                  />

                  {/* Features */}
                  <ul className="mb-8 flex-1 space-y-2.5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{
                            background: plan.highlighted ? "#a78bfa" : "#2DD4BF",
                          }}
                        />
                        <span style={{ color: "rgba(242,237,230,0.70)" }}>
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
                        ? { background: "#7c3aed", color: "#fff" }
                        : {
                            border: "1px solid rgba(255,255,255,0.12)",
                            color: "rgba(242,237,230,0.70)",
                            background: "transparent",
                          }
                    }
                    onMouseEnter={(e) => {
                      if (plan.highlighted) {
                        (e.currentTarget as HTMLAnchorElement).style.background =
                          "#6d28d9";
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
                          "#7c3aed";
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

        {/* Tilleggstjenester */}
        <FadeUp delay={0.2}>
          <div className="mt-16">
            <p
              className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.2em]"
              style={{ color: "rgba(242,237,230,0.35)" }}
            >
              Tilleggstjenester
            </p>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {addons.map((addon, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl px-5 py-4"
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

        {/* Footer note */}
        <FadeUp delay={0.3}>
          <p
            className="mt-10 text-center text-xs leading-relaxed"
            style={{ color: "rgba(242,237,230,0.25)" }}
          >
            Alle priser er eks. mva. Annonsekostnader kommer i tillegg og avtales
            separat. Bindingstid 3 måneder, deretter løpende.
          </p>
        </FadeUp>

        {/* Link to calculator */}
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
