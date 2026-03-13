"use client";

import { useRef, useState } from "react";
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
      { label: "Profesjonell nettside", note: "opptil 5 sider", price: 3500, setup: 4990 },
      { label: "Skreddersydd nettside", note: "ubegrenset sider", price: 6000, setup: 7990 },
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
        bullets: ["1 shoot annenhver måned", "2 reels per måned", "5 bilder per måned"],
        price: 2500,
        setup: 0,
      },
      {
        label: "Aktiv tilstedeværelse",
        bullets: ["1 shoot per måned", "4 reels per måned", "10 bilder per måned"],
        price: 5000,
        setup: 0,
      },
      {
        label: "Aggressiv vekst",
        bullets: ["2 shoots per måned", "8 reels per måned", "20 bilder per måned"],
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
  const [adminPosting, setAdminPosting] = useState<boolean | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const postingFee = adminPosting === true ? 1000 : 0;

  const monthly = sections.reduce(
    (sum, s) => sum + (s.options[selected[s.id]]?.price ?? 0),
    0
  ) + postingFee;
  const setup = sections.reduce(
    (sum, s) => sum + (s.options[selected[s.id]]?.setup ?? 0),
    0
  );
  const nothingSelected = monthly === 0;

  const packageSummary = sections
    .map((s) => {
      const opt = s.options[selected[s.id]];
      if (!opt || opt.price === 0) return null;
      return `${s.title.replace(/^\d+\.\s/, "")}: ${opt.label} – ${formatPrice(opt.price)}/mnd`;
    })
    .filter(Boolean)
    .join("\n");

  const postingLine =
    selected.innhold > 0 && adminPosting !== null
      ? `\nPublisering: ${adminPosting ? "Elevera administrerer publisering" : "Kunden publiserer selv"}`
      : "";

  const fullSummary = packageSummary
    ? `Valgt pakke:\n${packageSummary}${postingLine}\n\nMånedlig pris: ${formatPrice(monthly)}/mnd${setup > 0 ? `\nEtablering: ${formatPrice(setup)}` : ""}`
    : "";

  function handleSendClick() {
    setShowForm(true);
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch("https://formspree.io/f/xgonybjn", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  }

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
            <div key={section.id}>
            <div
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
                        setSelected((prev) => ({ ...prev, [section.id]: idx }))
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
                                <li key={i} className="text-sm text-white/50">
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

            {/* Posting-spørsmål vises etter innhold-seksjonen */}
            <AnimatePresence>
              {section.id === "innhold" && selected.innhold > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="mt-3 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
                >
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#7c3aed]">
                    Publisering
                  </p>
                  <p className="mb-5 text-lg font-semibold text-white">
                    Vil dere at vi publiserer innholdet for dere?
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {[
                      { label: "Nei, vi poster selv", note: "0 kr", value: false, bullets: [] },
                      {
                        label: "Ja, dere poster for oss",
                        note: "+1 000 kr/mnd",
                        value: true,
                        bullets: ["Publisering på Instagram / Facebook / TikTok", "Captions og hashtags", "Optimalisert publiseringskalender"],
                      },
                    ].map(({ label, value, note, bullets }) => (
                      <button
                        key={String(value)}
                        onClick={() => setAdminPosting(value)}
                        className={`relative rounded-xl border p-4 text-left text-sm font-semibold transition-all duration-200 ${
                          adminPosting === value
                            ? "border-[#7c3aed] bg-[#7c3aed]/10 text-white"
                            : "border-white/10 bg-white/[0.02] text-white/70 hover:border-white/20 hover:bg-white/[0.05]"
                        }`}
                      >
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="font-semibold">{label}</span>
                            {bullets.length > 0 && (
                              <ul className="mt-2 space-y-0.5">
                                {bullets.map((b, i) => (
                                  <li key={i} className="text-xs text-white/50 font-normal">{b}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                          <span className={`shrink-0 text-xs font-semibold ${adminPosting === value ? "text-[#7c3aed]" : "text-white/30"}`}>{note}</span>
                        </div>
                        {adminPosting === value && (
                          <span className="absolute right-3 top-3 flex h-5 w-5 items-center justify-center rounded-full bg-[#7c3aed] text-xs text-white">
                            ✓
                          </span>
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Footer note */}
        <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] px-6 py-5 text-sm text-white/40 space-y-1">
          <p>For å sikre gode resultater jobber vi med en oppstartsfase på minimum 3 måneder. Dette gir oss tid til å produsere innhold, teste annonser og optimalisere strategien.</p>
          <p>Alle priser er ekskl. mva. Annonsebudsjett kommer i tillegg til pakkeprisen.</p>
        </div>

        {/* Sticky price bar */}
        <AnimatePresence>
          {!nothingSelected && (
            <motion.div
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 80, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="fixed bottom-0 left-0 right-0 z-50 border-t border-[#7c3aed]/30 bg-[#0a0a0a]/95 px-4 py-4 backdrop-blur-md"
            >
              <div className="mx-auto flex max-w-4xl items-center justify-between gap-4">
                <div className="flex items-baseline gap-3">
                  <span className="text-2xl font-bold text-white">
                    {formatPrice(monthly)}
                    <span className="text-base font-normal text-white/40">/mnd</span>
                  </span>
                  {setup > 0 && (
                    <span className="text-sm text-white/40">
                      + {formatPrice(setup)} etablering
                    </span>
                  )}
                </div>
                <button
                  onClick={handleSendClick}
                  className="shrink-0 rounded-full bg-[#7c3aed] px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-[#6d28d9]"
                >
                  Send forespørsel
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Spacer so sticky bar doesn't overlap content */}
        <AnimatePresence>
          {!nothingSelected && <motion.div initial={{ height: 0 }} animate={{ height: 80 }} exit={{ height: 0 }} />}
        </AnimatePresence>

        {/* Contact form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 24 }}
              transition={{ duration: 0.4 }}
              className="mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              {submitted ? (
                <div className="py-8 text-center">
                  <p className="text-2xl font-bold text-white">Takk for din forespørsel!</p>
                  <p className="mt-2 text-white/50">Vi tar kontakt innen 24 timer.</p>
                </div>
              ) : (
                <>
                  <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">
                    Send forespørsel
                  </p>
                  <h3 className="mb-6 text-xl font-bold text-white">
                    Vi tar kontakt innen 24 timer
                  </h3>

                  {/* Package summary */}
                  <div className="mb-6 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-white/40">
                      Din valgte pakke
                    </p>
                    {sections.map((s) => {
                      const opt = s.options[selected[s.id]];
                      if (!opt || opt.price === 0) return null;
                      return (
                        <div key={s.id} className="flex justify-between py-1 text-sm">
                          <span className="text-white/60">
                            {s.title.replace(/^\d+\.\s/, "")}
                          </span>
                          <span className="font-semibold text-white">
                            {opt.label} — {formatPrice(opt.price)}/mnd
                          </span>
                        </div>
                      );
                    })}
                    {selected.innhold > 0 && adminPosting !== null && (
                      <div className="flex justify-between py-1 text-sm">
                        <span className="text-white/60">Publisering</span>
                        <span className="font-semibold text-white">
                          {adminPosting ? "Elevera administrerer" : "Kunden publiserer selv"}
                        </span>
                      </div>
                    )}
                    <div className="mt-3 border-t border-white/10 pt-3 flex justify-between text-sm font-bold">
                      <span className="text-white/60">Totalt</span>
                      <span className="text-white">{formatPrice(monthly)}/mnd{setup > 0 ? ` + ${formatPrice(setup)} etablering` : ""}</span>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Hidden package info */}
                    <input type="hidden" name="pakke" value={fullSummary} />

                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm text-white/60">
                          Navn <span className="text-[#7c3aed]">*</span>
                        </label>
                        <input
                          type="text"
                          name="navn"
                          required
                          placeholder="Ola Nordmann"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#7c3aed]/60 focus:ring-1 focus:ring-[#7c3aed]/40 transition"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm text-white/60">
                          Bedriftsnavn
                        </label>
                        <input
                          type="text"
                          name="bedrift"
                          placeholder="Bedriften AS"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#7c3aed]/60 focus:ring-1 focus:ring-[#7c3aed]/40 transition"
                        />
                      </div>
                    </div>
                    <div className="grid gap-4 sm:grid-cols-2">
                      <div>
                        <label className="mb-1.5 block text-sm text-white/60">
                          E-post <span className="text-[#7c3aed]">*</span>
                        </label>
                        <input
                          type="email"
                          name="epost"
                          required
                          placeholder="ola@bedriften.no"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#7c3aed]/60 focus:ring-1 focus:ring-[#7c3aed]/40 transition"
                        />
                      </div>
                      <div>
                        <label className="mb-1.5 block text-sm text-white/60">
                          Telefon
                        </label>
                        <input
                          type="tel"
                          name="telefon"
                          placeholder="+47 000 00 000"
                          className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#7c3aed]/60 focus:ring-1 focus:ring-[#7c3aed]/40 transition"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm text-white/60">
                        Melding (valgfritt)
                      </label>
                      <textarea
                        name="melding"
                        rows={3}
                        placeholder="Noe du vil legge til?"
                        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/30 outline-none focus:border-[#7c3aed]/60 focus:ring-1 focus:ring-[#7c3aed]/40 transition resize-none"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full rounded-full bg-[#7c3aed] py-3.5 text-sm font-semibold text-white transition hover:bg-[#6d28d9] disabled:opacity-60"
                    >
                      {submitting ? "Sender..." : "Send forespørsel"}
                    </button>
                  </form>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
