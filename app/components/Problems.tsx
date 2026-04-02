"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

const problems = [
  {
    number: "01",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: "Ingen synlighet på nett",
    description: "Du har en nettside, men ingen finner deg. Konkurrentene dine stjeler kundene dine dag for dag.",
  },
  {
    number: "02",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Annonsepenger som forsvinner",
    description: "Du har prøvd Facebook- og Google-annonser, men pengene bare forsvinner uten målbare resultater.",
  },
  {
    number: "03",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Uprofesjonelt visuelt inntrykk",
    description: "Bilder tatt med mobil og amatøraktig design gjør at kunder velger bort deg til fordel for konkurrenter.",
  },
  {
    number: "04",
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "For mange leverandører",
    description: "Fotograf her, webutvikler der, og et annet byrå for annonsering. Det koster tid, penger og energi.",
  },
];

export default function Problems() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="mb-16">
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#2DD4BF" }}
          >
            Kjenner du deg igjen?
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: "#F2EDE6" }}>
            Utfordringer mange{" "}
            <br className="hidden sm:block" />
            lokale bedrifter møter
          </h2>
        </FadeUp>

        <div style={{ background: "rgba(255,255,255,0.06)" }} className="rounded-xl overflow-hidden">
        <StaggerContainer className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem) => (
            <StaggerItem key={problem.number}>
              <div
                className="flex h-full flex-col gap-5 p-7 transition-colors duration-200"
                style={{ background: "#09090B" }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#111115";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLDivElement).style.background = "#09090B";
                }}
              >
                <div className="flex items-start justify-between">
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded-lg"
                    style={{
                      border: "1px solid rgba(45,212,191,0.18)",
                      background: "rgba(45,212,191,0.07)",
                      color: "#2DD4BF",
                    }}
                  >
                    {problem.icon}
                  </div>
                  <span className="font-mono text-xs" style={{ color: "rgba(255,255,255,0.18)" }}>
                    {problem.number}
                  </span>
                </div>
                <div>
                  <h3 className="mb-2 font-semibold leading-snug" style={{ color: "#F2EDE6" }}>
                    {problem.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(242,237,230,0.45)" }}>
                    {problem.description}
                  </p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        </div>

        <FadeUp delay={0.3}>
          <div className="mt-10 pt-8" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
            <p style={{ color: "rgba(242,237,230,0.45)" }}>
              Kjenner du igjen ett eller flere av disse punktene?{" "}
              <a
                href="#kontakt"
                className="underline underline-offset-4 transition-colors hover:opacity-80"
                style={{ color: "#2DD4BF" }}
              >
                Da er Elevera svaret.
              </a>
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
