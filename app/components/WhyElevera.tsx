"use client";

import { FadeUp } from "./animations";

const benefits = [
  {
    stat: "30",
    unit: "dager",
    title: "Raskere resultater",
    description:
      "Vi jobber ikke med lange strategiprosesser uten handling. Du ser resultater innen de første ukene – og vi optimaliserer løpende for å skalere det som virker.",
  },
  {
    stat: "1",
    unit: "partner",
    title: "Personlig oppfølging",
    description:
      "Du slipper å forklare deg på nytt hver gang. Vi kjenner din bedrift, din bransje og dine mål – og gir deg tett oppfølging fra dag én til du når toppen.",
  },
  {
    stat: "100",
    unit: "%",
    title: "Full gjennomsiktighet",
    description:
      "Du har alltid tilgang til alle tall, rapporter og data. Vi forklarer hva pengene dine gjør og hvorfor vi tar de valgene vi tar – på norsk, uten sjargong.",
  },
];

export default function WhyElevera() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="mb-16">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#f2ca50" }}
          >
            Hvorfor Elevera
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              className="max-w-md text-3xl font-bold sm:text-4xl md:text-5xl"
              style={{ color: "#e5e2de" }}
            >
              Hvorfor velge Elevera?
            </h2>
            <p className="max-w-xs text-sm leading-relaxed sm:text-right" style={{ color: "rgba(229,226,222,0.45)" }}>
              Du betaler for resultater, ikke fine presentasjoner.
            </p>
          </div>
        </FadeUp>

        {/* Stats grid */}
        <div
          className="overflow-hidden rounded-2xl"
          style={{ border: "1px solid rgba(255,255,255,0.08)" }}
        >
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {benefits.map((benefit, index) => (
              <FadeUp key={index} delay={index * 0.1}>
                <div className="flex flex-col gap-4 p-8 lg:p-10" style={{ background: "#1c1c1a" }}>
                  {/* Big stat */}
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-6xl font-bold leading-none lg:text-7xl"
                      style={{
                        fontFamily: "var(--font-fraunces), Georgia, serif",
                        fontStyle: "italic",
                        color: "#f2ca50",
                      }}
                    >
                      {benefit.stat}
                    </span>
                    <span className="text-lg font-light" style={{ color: "rgba(229,226,222,0.3)" }}>
                      {benefit.unit}
                    </span>
                  </div>
                  {/* Divider */}
                  <div className="h-px w-8" style={{ background: "rgba(242,202,80,0.3)" }} />
                  {/* Text */}
                  <div>
                    <h3
                      className="mb-2 font-bold text-lg"
                      style={{ color: "#e5e2de" }}
                    >
                      {benefit.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(229,226,222,0.45)" }}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Guarantee banner */}
          <FadeUp delay={0.3}>
            <div
              className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between p-8 lg:p-10 border-t"
              style={{
                borderColor: "rgba(242,202,80,0.2)",
                background: "linear-gradient(135deg, rgba(242,202,80,0.08) 0%, rgba(242,202,80,0.03) 100%)",
              }}
            >
              <div className="flex items-start gap-4">
                {/* Shield icon */}
                <div
                  className="mt-0.5 flex-shrink-0 flex items-center justify-center rounded-full"
                  style={{
                    width: 40, height: 40,
                    background: "rgba(242,202,80,0.12)",
                    border: "1px solid rgba(242,202,80,0.25)",
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" fill="rgba(242,202,80,0.15)" stroke="#f2ca50" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M9 12l2 2 4-4" stroke="#f2ca50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <h3 className="mb-1 font-bold text-lg" style={{ color: "#e5e2de" }}>
                    Ingen resultater? Ingen kostnad.
                  </h3>
                  <p className="text-sm leading-relaxed max-w-lg" style={{ color: "rgba(229,226,222,0.5)" }}>
                    Vi avtaler hva suksess ser ut som før vi starter. Trafikk, leads, klikk — noe konkret. Treffer vi ikke det, betaler du ikke for den måneden. Ingen unntak.
                  </p>
                </div>
              </div>
              <a
                href="#kontakt"
                className="flex-shrink-0 inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                style={{ background: "#f2ca50", color: "#131312" }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#d4af37")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#f2ca50")}
              >
                Book gratis møte
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true">
                  <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
