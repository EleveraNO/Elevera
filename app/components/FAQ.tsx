"use client";

import { useState } from "react";
import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

const faqs = [
  {
    question: "Hvor lang er bindingstiden?",
    answer: "Vi jobber med 3 måneders bindingstid for alle pakker. Dette gir oss nok tid til å se reelle resultater og optimalisere kampanjene. Etter bindingstiden kan du si opp med én måneds varsel.",
  },
  {
    question: "Hva skjer etter jeg bestiller?",
    answer: "Innen 24 timer tar vi kontakt for et onboarding-møte der vi kartlegger din bedrift, dine mål og ditt marked. Deretter utarbeider vi en skreddersydd plan og setter i gang produksjon og oppsett.",
  },
  {
    question: "Inkluderer pakkene annonsekostnader?",
    answer: "Nei, annonsekostnadene (budsjett til Meta og Google) kommer i tillegg til pakkeprisene. Vi anbefaler et minimumsbudsjett på 3 000–5 000 kr/mnd for betalt annonsering.",
  },
  {
    question: "Kan jeg oppgradere eller endre pakke underveis?",
    answer: "Absolutt. Du kan oppgradere til en større pakke når som helst i kontraktsperioden. Nedgradering er mulig ved fornyelse.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-3xl">
        <FadeUp className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">
            FAQ
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Vanlige spørsmål
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Finner du ikke svaret du leter etter?{" "}
            <a href="#kontakt" className="text-[#7c3aed] hover:underline">
              Ta kontakt med oss
            </a>
            .
          </p>
        </FadeUp>

        <StaggerContainer className="space-y-3">
          {faqs.map((faq, index) => (
            <StaggerItem key={index}>
              <div
                className={`rounded-2xl border transition-all ${
                  openIndex === index
                    ? "border-[#7c3aed]/40 bg-[#7c3aed]/5"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="pr-4 font-semibold text-white">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 text-[#7c3aed] transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="leading-relaxed text-white/60">{faq.answer}</p>
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
