"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Option = {
  label: string;
  note?: string;
  bullets?: string[];
  price: number;
  setup: number;
};

type Section = {
  id: string;
  title: string;
  subtitle: string;
  options: Option[];
};

const sections: Section[] = [
  {
    id: "nettside",
    title: "1. Nettside",
    subtitle: "Hva trenger dere?",
    options: [
      { label: "Ingen nettside", price: 0, setup: 0 },
      { label: "Landingsside", note: "1 side", price: 2000, setup: 1990 },
      {
        label: "Profesjonell nettside",
        note: "opptil 5 sider",
        price: 3500,
        setup: 4990,
      },
      {
        label: "Skreddersydd nettside",
        note: "ubegrenset sider",
        price: 6000,
        setup: 7990,
      },
    ],
  },
  {
    id: "innhold",
    title: "2. Innholdsproduksjon",
    subtitle: "Hvor aktiv vil dere være på sosiale medier?",
    options: [
      { label: "Ingen innhold", price: 0, setup: 0 },
      {
        label: "Lett tilstedeværelse",
        bullets: [
          "1 shoot annenhver måned",
          "2 reels per måned",
          "5 bilder per måned",
        ],
        price: 2500,
        setup: 0,
      },
      {
        label: "Aktiv tilstedeværelse",
        bullets: [
          "1 shoot per måned",
          "4 reels per måned",
          "10 bilder per måned",
        ],
        price: 5000,
        setup: 0,
      },
      {
        label: "Aggressiv vekst",
        bullets: [
          "2 shoots per måned",
          "8 reels per måned",
          "20 bilder per måned",
        ],
        price: 9000,
        setup: 0,
      },
    ],
  },
  {
    id: "annonsering",
    title: "3. Annonsering",
    subtitle: "Vil dere bruke annonser for å skaffe kunder?",
    options: [
      { label: "Ingen annonser", price: 0, setup: 0 },
      { label: "Boosting av innlegg", price: 1000, setup: 0 },
      { label: "Meta Ads", price: 2500, setup: 0 },
      { label: "Meta Ads + Google Ads", price: 4000, setup: 0 },
    ],
  },
];

function formatPrice(n: number) {
  return n.toLocaleString("nb-NO") + " kr";
}

export default function PriceCalculator() {
  const [selected, setSelected] = useState<Record<string, number>>({
    nettside: 0,
    innhold: 0,
    annonsering: 0,
  });

  const monthly = sections.reduce((sum, section) => {
    return sum + (section.options[selected[section.id]]?.price ?? 0);
  }, 0);

  const setup = sections.reduce((sum, section) => {
    return sum + (section.options[selected[section.id]]?.setup ?? 0);
  }, 0);

  const nothingSelected = monthly === 0;

  return (
    <section className="bg-[#0a0a0a] py-24 px-4">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">
            Priskalkulator
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Sett sammen din pakke
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Ikke sikker på hvilken pakke som passer? Velg det du trenger og se
            prisen med en gang.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div
              key={section.id}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
            >
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">
                {section.title}
              </p>
              <p className="mb-6 text-lg font-semibold text-white">
                {section.subtitle}
              </p>
              <div className="grid gap-3 sm:grid-cols-2">
                {section.options.map((option, idx) => {
                  const isSelected = selected[section.id] === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() =>
                        setSelected((prev) => ({
                          ...prev,
                          [section.id]: idx,
                        }))
                      }
                      className={`group relative rounded-xl border p-4 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-[#7c3aed] bg-[#7c3aed]/10"
                          : "border-white/10 bg-white/[0.02] hover:border-white/20 hover:bg-white/[0.05]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <span className="font-semibold text-white">
                            {option.label}
                          </span>
                          {option.note && (
                            <span className="ml-2 text-sm text-white/40">
                              {option.note}
                            </span>
                          )}
                          {option.bullets && (
                            <ul className="mt-2 space-y-0.5">
                              {option.bullets.map((b, i) => (
                                <li
                                  key={i}
                                  className="text-sm text-white/50"
                                >
                                  {b}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                        <span
                          className={`shrink-0 text-sm font-semibold ${
                            isSelected ? "text-[#7c3aed]" : "text-white/40"
                          }`}
                        >
                          {option.price === 0
                            ? "0 kr"
                            : `+${formatPrice(option.price)}`}
                        </span>
                      </div>
                      {isSelected && (
                        <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#7c3aed] text-xs text-white">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Result */}
        <AnimatePresence>
          {!nothingSelected && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
              className="mt-8 rounded-2xl border border-[#7c3aed]/40 bg-[#7c3aed]/10 p-8"
            >
              <p className="mb-6 text-center text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">
                Din estimerte pakke
              </p>
              <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-12">
                <div className="text-center">
                  <p className="text-sm text-white/50">Månedlig pris</p>
                  <p className="text-4xl font-bold text-white">
                    {formatPrice(monthly)}
                    <span className="text-lg font-normal text-white/40">
                      {" "}
                      / mnd
                    </span>
                  </p>
                </div>
                {setup > 0 && (
                  <>
                    <div className="hidden h-12 w-px bg-white/10 sm:block" />
                    <div className="text-center">
                      <p className="text-sm text-white/50">Etablering (én gang)</p>
                      <p className="text-2xl font-bold text-white">
                        {formatPrice(setup)}
                      </p>
                    </div>
                  </>
                )}
              </div>
              <p className="mt-4 text-center text-xs text-white/30">
                Annonsebudsjett kommer i tillegg. Priser er veiledende.
              </p>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
                <a
                  href="#kontakt"
                  className="w-full rounded-full bg-[#7c3aed] px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#6d28d9] sm:w-auto"
                >
                  Book gratis strategisamtale
                </a>
                <a
                  href="#kontakt"
                  className="w-full rounded-full border border-white/20 px-8 py-3.5 text-center text-sm font-semibold text-white transition hover:border-white/40 sm:w-auto"
                >
                  Send forespørsel
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
