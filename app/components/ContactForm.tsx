"use client";

import { useState, useEffect } from "react";

type Status = "idle" | "sending" | "success" | "error";

const TJENESTER = ["Nettside", "Foto", "Video", "Droneinnhold", "Markedsføring"];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#7c3aed]/60 transition-colors text-sm";

const PAKKE_TJENESTER: Record<string, string[]> = {
  Start: ["Nettside"],
  Vekst: ["Nettside", "Foto", "Video", "Markedsføring"],
  Pro: ["Nettside", "Foto", "Video", "Droneinnhold", "Markedsføring"],
};

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [navn, setNavn] = useState("");
  const [bedrift, setBedrift] = useState("");
  const [epost, setEpost] = useState("");
  const [tjenester, setTjenester] = useState<string[]>([]);
  const [melding, setMelding] = useState("");
  const [valgtPakke, setValgtPakke] = useState<string | null>(null);

  function applyPakke(pakke: string) {
    setValgtPakke(pakke);
    setTjenester(PAKKE_TJENESTER[pakke] ?? []);
    setMelding(`Jeg er interessert i ${pakke}-pakken.`);
    sessionStorage.removeItem("valgtPakke");
  }

  useEffect(() => {
    // Ved refresh: les fra sessionStorage
    const pakke = sessionStorage.getItem("valgtPakke");
    if (pakke) applyPakke(pakke);

    // Ved klikk på siden (komponent allerede mountet): lytt på custom event
    const handler = (e: Event) => applyPakke((e as CustomEvent<string>).detail);
    window.addEventListener("valgtPakke", handler);
    return () => window.removeEventListener("valgtPakke", handler);
  }, []);

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
        body: JSON.stringify({ navn, bedrift, epost, pakke: valgtPakke ?? "Ikke valgt", tjenester: tjenester.join(", "), melding }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-8 py-10 text-center">
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
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4 text-left">
      {valgtPakke && (
        <div className="flex items-center justify-between rounded-xl border border-[#7c3aed]/40 bg-[#7c3aed]/10 px-4 py-3">
          <div className="flex items-center gap-2.5">
            <svg className="h-4 w-4 text-[#a78bfa]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-sm font-medium text-white">Valgt pakke:</span>
            <span className="rounded-full bg-[#7c3aed]/30 px-3 py-0.5 text-sm font-semibold text-[#a78bfa]">
              {valgtPakke}
            </span>
          </div>
          <button
            type="button"
            onClick={() => { setValgtPakke(null); setTjenester([]); setMelding(""); }}
            className="text-xs text-white/30 transition hover:text-white/60"
          >
            Endre
          </button>
        </div>
      )}
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
        <label className="mb-1.5 block text-xs font-medium text-white/50">E-postadresse</label>
        <input
          type="email"
          required
          placeholder="ola@bedriften.no"
          value={epost}
          onChange={(e) => setEpost(e.target.value)}
          className={inputClass}
        />
      </div>

      <div>
        <label className="mb-1.5 block text-xs font-medium text-white/50">
          Tjeneste <span className="text-white/30">(velg gjerne flere)</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {TJENESTER.map((t) => {
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
  );
}
