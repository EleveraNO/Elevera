"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

const benefits = [
  {
    icon: (
      <svg className="h-7 w-7 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Raskere resultater",
    description: "Vi jobber ikke med lange strategiprosesser uten handling. Du ser resultater innen de første ukene – og vi optimaliserer løpende for å skalere det som virker.",
    stat: "30 dager",
    statLabel: "til første resultater",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Fast partner",
    description: "Du får én dedikert person som kjenner din bedrift, din bransje og dine mål. Ingen rotering av kontaktpersoner – samme ansikt fra dag én til du når toppen.",
    stat: "1 partner",
    statLabel: "for alt du trenger",
  },
  {
    icon: (
      <svg className="h-7 w-7 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Full gjennomsiktighet",
    description: "Du har alltid tilgang til alle tall, rapporter og data. Vi forklarer hva pengene dine gjør og hvorfor vi tar de valgene vi tar – på norsk, uten sjargong.",
    stat: "100%",
    statLabel: "transparent rapportering",
  },
];

export default function WhyElevera() {
  return (
    <section className="relative px-6 py-24 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-[#7c3aed]/10 blur-[120px]" />
      </div>
      <div className="relative z-10 mx-auto max-w-6xl">
        <FadeUp className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">
            Hvorfor Elevera
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Hva gjør oss annerledes?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Vi er ikke nok et digitalbyrå med lovnader. Vi er en partner som leverer – og det er forskjellen.
          </p>
        </FadeUp>

        <StaggerContainer className="grid gap-8 md:grid-cols-3">
          {benefits.map((benefit, index) => (
            <StaggerItem key={index}>
              <div className="group rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-[#7c3aed]/30">
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl border border-[#7c3aed]/20 bg-[#7c3aed]/10">
                  {benefit.icon}
                </div>
                <h3 className="mb-3 text-lg font-bold text-white">{benefit.title}</h3>
                <p className="mb-6 leading-relaxed text-white/50 text-sm">{benefit.description}</p>
                <div className="border-t border-white/10 pt-6">
                  <span className="block text-2xl font-bold text-[#7c3aed]">{benefit.stat}</span>
                  <span className="text-sm text-white/40">{benefit.statLabel}</span>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
