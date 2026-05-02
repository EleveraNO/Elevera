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
    answer: "Innen 24 timer tar vi kontakt for et onboarding-møte der vi kartlegger din bedrift, dine mål og ditt marked. Deretter utarbeider vi en tilpasset plan og setter i gang produksjon og oppsett.",
  },
  {
    question: "Inkluderer pakkene annonsekostnader?",
    answer: "Nei, annonsekostnadene (budsjett til Meta og Google) kommer i tillegg til pakkeprisene. Vi anbefaler et minimumsbudsjett på 3 000–5 000 kr/mnd for digital annonsering.",
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
          <p
            className="mb-3 text-xs font-semibold uppercase tracking-[0.2em]"
            style={{ color: "#f2ca50" }}
          >
            FAQ
          </p>
          <h2 className="text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: "#e5e2de" }}>
            Vanlige spørsmål
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm" style={{ color: "rgba(229,226,222,0.45)" }}>
            Finner du ikke svaret du leter etter?{" "}
            <a
              href="#kontakt"
              className="underline underline-offset-4 transition-opacity hover:opacity-70"
              style={{ color: "#f2ca50" }}
            >
              Ta kontakt med oss
            </a>
            .
          </p>
        </FadeUp>

        <StaggerContainer className="space-y-2">
          {faqs.map((faq, index) => (
            <StaggerItem key={index}>
              <div
                className="rounded-xl transition-all duration-200"
                style={
                  openIndex === index
                    ? {
                        border: "1px solid rgba(242,202,80,0.25)",
                        background: "rgba(242,202,80,0.04)",
                      }
                    : {
                        border: "1px solid rgba(255,255,255,0.07)",
                        background: "#1c1c1a",
                      }
                }
              >
                <button
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  aria-expanded={openIndex === index}
                >
                  <span className="pr-4 font-semibold" style={{ color: "#e5e2de" }}>
                    {faq.question}
                  </span>
                  <svg
                    className={`h-5 w-5 flex-shrink-0 transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                    style={{ color: "#f2ca50" }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className="mx-6 mb-6 border-l-2 pl-4"
                    style={{ borderColor: "rgba(242,202,80,0.35)" }}
                  >
                    <p className="text-sm leading-relaxed" style={{ color: "rgba(229,226,222,0.55)" }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
