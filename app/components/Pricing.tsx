"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

const plans = [
  {
    name: "Start",
    price: "4 990",
    period: "/ mnd",
    setup: "12 990",
    description: "For små bedrifter som trenger en profesjonell start på nett.",
    features: [
      "Enkel landingsside (1 side)",
      "Foto til nettsiden",
      "Grunnleggende SEO",
      "Månedlig rapport",
    ],
    notIncluded: [
      "Innholdsproduksjon til sosiale medier",
      "Annonsering",
      "Strategi",
    ],
    cta: "Start prosjekt",
    highlighted: false,
  },
  {
    name: "Vekst",
    price: "12 990",
    period: "/ mnd",
    setup: "16 990",
    description: "Profesjonell digital vekst for bedrifter som vil få flere kunder.",
    features: [
      "Profesjonell nettside (inntil 5 sider)",
      "Foto & video til nettsiden",
      "Lokal SEO",
      "1 shoot per måned",
      "1 reel per uke",
      "10 bilder per måned",
      "Publisering på Instagram, Facebook & TikTok",
      "Boosting av beste innlegg",
      "Innholdskalender",
      "Dedikert kontaktperson",
    ],
    notIncluded: [],
    cta: "Start vekst",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "24 990",
    period: "/ mnd",
    setup: "24 990",
    description: "Full digital markedsføring for bedrifter som vil dominere i sitt marked.",
    features: [
      "Skreddersydd nettside uten sidebegrensning",
      "Avansert SEO + blogg",
      "2 shoots per måned",
      "2 reels per uke",
      "20 bilder per måned",
      "Dedikerte Meta Ads-kampanjer",
      "Google Ads",
      "Retargeting & A/B-testing",
      "Digital vekststrategi",
      "Kvartalsvise strategimøter",
      "24/7 prioritert support",
    ],
    notIncluded: [],
    cta: "Kontakt oss",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="mb-16 text-center">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#2DD4BF" }}
          >
            Prispakker
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: "#EDEDEF", letterSpacing: "-0.02em" }}>
            Enkle, transparente priser
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed" style={{ color: "rgba(237,237,239,0.45)" }}>
            Ingen skjulte gebyrer. Ingen overraskelser. Velg pakken som passer din bedrift.
          </p>
        </FadeUp>

        <div id="prispakker" className="scroll-mt-24">
          <StaggerContainer className="grid gap-4 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <StaggerItem key={index}>
                <div
                  className="relative flex h-full flex-col rounded-xl p-8 transition-all duration-200"
                  style={
                    plan.highlighted
                      ? {
                          border: "1px solid rgba(45,212,191,0.45)",
                          background: "linear-gradient(135deg, rgba(45,212,191,0.08) 0%, #111115 60%)",
                          boxShadow: "0 0 60px rgba(45,212,191,0.08), 0 20px 40px rgba(0,0,0,0.3)",
                        }
                      : {
                          border: "1px solid rgba(255,255,255,0.07)",
                          background: "#111115",
                        }
                  }
                >
                  {plan.highlighted && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                      <span
                        className="rounded-full px-4 py-1 text-[11px] font-bold uppercase tracking-widest"
                        style={{ background: "#2DD4BF", color: "#09090B" }}
                      >
                        Mest populær
                      </span>
                    </div>
                  )}

                  {/* Plan header */}
                  <div className="mb-6">
                    <h3 className="mb-1 text-lg font-bold" style={{ color: "#EDEDEF" }}>
                      {plan.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(237,237,239,0.45)" }}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mb-1 flex items-baseline gap-1.5">
                    <span className="text-4xl font-bold" style={{ color: "#EDEDEF" }}>
                      {plan.price} kr
                    </span>
                    <span className="text-sm" style={{ color: "rgba(237,237,239,0.35)" }}>
                      {plan.period}
                    </span>
                  </div>
                  <p className="mb-8 text-sm" style={{ color: "rgba(237,237,239,0.3)" }}>
                    + {plan.setup} kr etablering (én gang)
                  </p>

                  {/* Divider */}
                  <div className="mb-6 h-px" style={{ background: "rgba(255,255,255,0.07)" }} />

                  {/* Features */}
                  <ul className="mb-8 flex-1 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm">
                        <span
                          className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full"
                          style={{ background: "#2DD4BF" }}
                        />
                        <span style={{ color: "rgba(237,237,239,0.75)" }}>{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, i) => (
                      <li
                        key={`not-${i}`}
                        className="flex items-start gap-2.5 text-sm"
                        style={{ opacity: 0.35 }}
                      >
                        <svg
                          className="mt-0.5 h-4 w-4 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          style={{ color: "rgba(237,237,239,0.4)" }}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                        <span className="line-through" style={{ color: "rgba(237,237,239,0.4)" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    type="button"
                    onClick={() => {
                      sessionStorage.setItem("valgtPakke", plan.name);
                      window.dispatchEvent(new CustomEvent("valgtPakke", { detail: plan.name }));
                      document.getElementById("kontakt")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="block w-full rounded-full py-3.5 text-center text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                    style={
                      plan.highlighted
                        ? {
                            background: "#2DD4BF",
                            color: "#09090B",
                          }
                        : {
                            border: "1px solid rgba(255,255,255,0.15)",
                            color: "rgba(237,237,239,0.75)",
                            background: "transparent",
                          }
                    }
                    onMouseEnter={(e) => {
                      if (plan.highlighted) {
                        (e.currentTarget as HTMLButtonElement).style.background = "#14B8A6";
                      } else {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
                        (e.currentTarget as HTMLButtonElement).style.color = "#EDEDEF";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (plan.highlighted) {
                        (e.currentTarget as HTMLButtonElement).style.background = "#2DD4BF";
                      } else {
                        (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.15)";
                        (e.currentTarget as HTMLButtonElement).style.color = "rgba(237,237,239,0.75)";
                      }
                    }}
                  >
                    {plan.cta}
                  </button>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-10 text-center">
            <p className="text-sm" style={{ color: "rgba(237,237,239,0.45)" }}>
              For å sikre gode resultater jobber vi med en oppstartsfase på minimum 3 måneder.
            </p>
            <p className="mt-1 text-sm" style={{ color: "rgba(237,237,239,0.25)" }}>
              Dette gir oss tid til å produsere innhold, teste annonser og optimalisere strategien. Alle priser er ekskl. mva.
            </p>
          </div>
        </FadeUp>

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
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(45,212,191,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(45,212,191,0.10)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#2DD4BF";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(45,212,191,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(45,212,191,0.05)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(45,212,191,0.8)";
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="3" width="20" height="14" rx="2"/>
                <path d="M8 21h8M12 17v4"/>
                <path d="M7 8h10M7 12h6"/>
              </svg>
              Bygg din egen vekstpakke
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
