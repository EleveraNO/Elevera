"use client";

import { useState } from "react";
import { ScaleIn } from "./animations";

type Status = "idle" | "sending" | "success" | "error";

export default function CTA() {
  const [status, setStatus] = useState<Status>("idle");
  const [navn, setNavn] = useState("");
  const [bedrift, setBedrift] = useState("");
  const [tjenester, setTjenester] = useState<string[]>([]);
  const [melding, setMelding] = useState("");

  const tjenesteListe = ["Nettside", "Markedsføring", "Innholdsproduksjon"];

  function toggleTjeneste(t: string) {
    setTjenester((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xgonybjn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ navn, bedrift, tjenester: tjenester.join(", "), melding }),
      });
      if (res.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#7c3aed]/60 transition-colors text-sm";

  return (
    <section id="kontakt" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <ScaleIn>
          <div className="relative overflow-hidden rounded-3xl border border-[#7c3aed]/30 bg-gradient-to-br from-[#7c3aed]/20 via-[#7c3aed]/10 to-transparent p-12 text-center md:p-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/20 blur-[80px]" />
              <div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-blue-500/10 blur-[60px]" />
            </div>

            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-4 py-1.5">
                <span className="h-2 w-2 animate-pulse rounded-full bg-[#7c3aed]" />
                <span className="text-sm font-medium text-[#a78bfa]">
                  Gratis og uforpliktende
                </span>
              </div>

              <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl md:text-5xl">
                Klar til å vokse?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg text-white/60">
                Book et gratis strategimøte på 30 minutter. Vi hjelper bedrifter i
                Ålesund og omegn – og forteller deg nøyaktig hva vi ville gjort
                for å hjelpe akkurat deg vokse på nett.
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#7c3aed] px-8 py-4 text-base font-semibold text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:bg-[#6d28d9] hover:shadow-xl hover:shadow-[#7c3aed]/40 hover:-translate-y-0.5"
                >
                  Book gratis møte
                </a>
                <a
                  href="tel:+4794974165"
                  className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-4 text-base font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ring oss
                </a>
              </div>

              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/40">
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Gratis og uforpliktende
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Svar innen 24 timer
                </span>
                <span className="flex items-center gap-1.5">
                  <svg className="h-4 w-4 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Ingen salgsmasi
                </span>
              </div>

              {/* Divider */}
              <div className="my-10 flex items-center gap-4">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-sm text-white/30">Eller send oss en melding</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* Contact form */}
              {status === "success" ? (
                <div className="mx-auto max-w-md rounded-2xl border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-8 py-10">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#7c3aed]/20">
                      <svg className="h-7 w-7 text-[#a78bfa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-white">Takk for meldingen!</p>
                  <p className="mt-2 text-sm text-white/50">Vi tar kontakt innen 24 timer.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4 text-left">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-white/50">Navn</label>
                      <input
                        type="text"
                        required
                        placeholder="Ola Nordmann"
                        value={navn}
                        onChange={(e) => setNavn(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-xs font-medium text-white/50">Bedriftsnavn</label>
                      <input
                        type="text"
                        required
                        placeholder="Bedriften AS"
                        value={bedrift}
                        onChange={(e) => setBedrift(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/50">
                      Tjeneste <span className="text-white/30">(velg gjerne flere)</span>
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {tjenesteListe.map((t) => {
                        const active = tjenester.includes(t);
                        return (
                          <button
                            key={t}
                            type="button"
                            onClick={() => toggleTjeneste(t)}
                            className={`rounded-full border px-4 py-2 text-sm font-medium transition-all ${
                              active
                                ? "border-[#7c3aed] bg-[#7c3aed]/20 text-white"
                                : "border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white/80"
                            }`}
                          >
                            {active && <span className="mr-1.5">✓</span>}
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-xs font-medium text-white/50">Melding</label>
                    <textarea
                      required
                      rows={4}
                      placeholder="Fortell litt om hva du trenger hjelp med..."
                      value={melding}
                      onChange={(e) => setMelding(e.target.value)}
                      className={inputClass + " resize-none"}
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-sm text-red-400">Noe gikk galt. Prøv igjen eller ring oss.</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full rounded-full border border-[#7c3aed]/50 bg-[#7c3aed]/10 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-[#7c3aed]/20 hover:border-[#7c3aed]/80 disabled:opacity-50"
                  >
                    {status === "sending" ? "Sender..." : "Send melding"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
