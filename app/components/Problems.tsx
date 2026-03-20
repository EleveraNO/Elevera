"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

const problems = [
  {
    icon: "📉",
    title: "Ingen synlighet på nett",
    description: "Du har en nettside, men ingen finner deg. Konkurrentene dine stjeler kundene dine dag for dag.",
  },
  {
    icon: "💸",
    title: "Annonsepenger som forsvinner",
    description: "Du har prøvd Facebook- og Google-annonser, men pengene bare forsvinner uten målbare resultater.",
  },
  {
    icon: "📷",
    title: "Uprofesjonelt visuelt inntrykk",
    description: "Bilder tatt med mobil og amatøraktig design gjør at kunder velger bort deg til fordel for konkurrenter.",
  },
  {
    icon: "🧩",
    title: "For mange leverandører å koordinere",
    description: "Fotograf her, webutvikler der, og et annet byrå for annonsering. Det koster tid, penger og energi.",
  },
];

export default function Problems() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">
            Kjenner du deg igjen?
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Sliter du med dette?
          </h2>
        </FadeUp>

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {problems.map((problem, index) => (
            <StaggerItem key={index}>
              <div className="group flex h-full flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#7c3aed]/40 hover:bg-white/8">
                <div className="mb-4 text-3xl">{problem.icon}</div>
                <h3 className="mb-2 font-semibold text-white">{problem.title}</h3>
                <p className="text-sm leading-relaxed text-white/50">{problem.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.3} className="mt-12 text-center">
          <p className="text-white/50">
            Hvis du nikket på minst ett av disse punktene –{" "}
            <a href="#kontakt" className="text-[#7c3aed] hover:underline">
              da er Elevera svaret
            </a>
            .
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
