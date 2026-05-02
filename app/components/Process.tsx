"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

const steps = [
  {
    number: "01",
    title: "Strategimøte",
    description:
      "Vi starter med et gratis 30-minutters møte. Vi lærer din bedrift å kjenne, kartlegger markedet og lager en konkret plan, uten forpliktelser.",
    detail: "Gratis · 30 minutter · Ingen salgsmasi",
  },
  {
    number: "02",
    title: "Produksjon",
    description:
      "Vi setter i gang med foto, video, nettside og annonser. Du har én kontaktperson gjennom hele prosessen og godkjenner alt underveis.",
    detail: "Rask levering · Løpende dialog · Du eier alt",
  },
  {
    number: "03",
    title: "Lansering & vekst",
    description:
      "Vi lanserer, måler og optimaliserer kontinuerlig. Månedlige rapporter viser nøyaktig hva som virker, og vi skalerer det som gir resultater.",
    detail: "Månedlig rapport · Løpende optimalisering",
  },
];

export default function Process() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="mb-16">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#f2ca50" }}
          >
            Slik jobber vi
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <h2
              className="max-w-sm text-3xl font-bold sm:text-4xl md:text-5xl"
              style={{ color: "#e5e2de" }}
            >
              Fra første møte til målbare resultater
            </h2>
            <p
              className="max-w-xs text-sm leading-relaxed sm:text-right"
              style={{ color: "rgba(229,226,222,0.45)" }}
            >
              En enkel, forutsigbar prosess, slik at du alltid vet
              hva som skjer og hva du betaler for.
            </p>
          </div>
        </FadeUp>

        <div className="relative" style={{ background: "rgba(255,255,255,0.06)" }}>
        {/* Connecting line on desktop */}
        <div
          className="absolute top-10 left-[calc(33%-1px)] right-[calc(33%-1px)] hidden h-px md:block"
          style={{ background: "rgba(242,202,80,0.15)" }}
          aria-hidden="true"
        />
        <StaggerContainer className="grid gap-px md:grid-cols-3">

          {steps.map((step, i) => (
            <StaggerItem key={i}>
              <div
                className="relative flex flex-col gap-5 p-8 lg:p-10"
                style={{ background: "#131312" }}
              >
                {/* Step number with teal ring */}
                <div className="flex items-center gap-4">
                  <div
                    className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold"
                    style={{
                      border: "1px solid rgba(242,202,80,0.35)",
                      background: "rgba(242,202,80,0.07)",
                      color: "#f2ca50",
                    }}
                  >
                    {step.number}
                  </div>
                  <div
                    className="h-px flex-1 md:hidden"
                    style={{ background: "rgba(255,255,255,0.07)" }}
                    aria-hidden="true"
                  />
                </div>

                <div>
                  <h3
                    className="mb-2 text-lg font-bold"
                    style={{ color: "#e5e2de" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="mb-4 text-sm leading-relaxed"
                    style={{ color: "rgba(229,226,222,0.50)" }}
                  >
                    {step.description}
                  </p>
                  <p
                    className="text-xs font-medium"
                    style={{ color: "rgba(242,202,80,0.65)" }}
                  >
                    {step.detail}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        </div>

        <FadeUp delay={0.3} className="mt-8 text-center">
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "#f2ca50",
              color: "#131312",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#d4af37";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#f2ca50";
            }}
          >
            Start med steg 1, gratis møte
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </FadeUp>
      </div>
    </section>
  );
}
