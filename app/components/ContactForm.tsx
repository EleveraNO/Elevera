"use client";

import { useState, useEffect, useCallback } from "react";

type Status = "idle" | "sending" | "success" | "error";

const TJENESTER = [
  "Landingsside",
  "Bedriftsnettside",
  "Foto og video",
  "Dronevideo",
  "Annonsering",
  "Sosiale medier",
  "Logo og profil",
];

const inputClass =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#f2ca50]/60 transition-colors text-sm";

const PAKKE_TJENESTER: Record<string, string[]> = {
  Start: ["Bedriftsnettside"],
  Vekst: ["Bedriftsnettside", "Foto og video", "Sosiale medier"],
  Partner: ["Bedriftsnettside", "Foto og video", "Dronevideo", "Annonsering", "Sosiale medier"],
};

// Prisdata for estimat (må matche services i Pricing.tsx)
const TJENESTE_PRISER: Record<string, { from: number; unit: string; oppstart?: number }> = {
  "Landingsside": { from: 590, unit: "kr/mnd", oppstart: 3000 },
  "Bedriftsnettside": { from: 990, unit: "kr/mnd", oppstart: 5000 },
  "Foto og video": { from: 5000, unit: "kr" },
  "Dronevideo": { from: 4000, unit: "kr" },
  "Annonsering": { from: 3500, unit: "kr/mnd" },
  "Sosiale medier": { from: 6000, unit: "kr/mnd" },
  "Logo og profil": { from: 8000, unit: "kr" },
};

// Global type declaration
declare global {
  interface Window {
    __eleveraSetTjenester?: (tjenester: string[]) => void;
  }
}

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [navn, setNavn] = useState("");
  const [bedrift, setBedrift] = useState("");
  const [epost, setEpost] = useState("");
  const [tjenester, setTjenester] = useState<string[]>([]);
  const [melding, setMelding] = useState("");
  const [valgtPakke, setValgtPakke] = useState<string | null>(null);
  const [prisEstimat, setPrisEstimat] = useState<string | null>(null);

  // Beregn prisestimat
  function beregnEstimat(valgte: string[]) {
    if (valgte.length === 0) return null;

    const hasDiscount = valgte.length >= 2;
    const disc = (v: number) => Math.round(v * 0.85);

    let monthlyTotal = 0;
    let oneTimeTotal = 0;
    let setupTotal = 0;

    for (const name of valgte) {
      const p = TJENESTE_PRISER[name];
      if (!p) continue;
      if (p.unit.includes("mnd")) {
        monthlyTotal += p.from;
      } else {
        oneTimeTotal += p.from;
      }
      if (p.oppstart) setupTotal += p.oppstart;
    }

    const parts: string[] = [];
    if (monthlyTotal > 0) {
      const val = hasDiscount ? disc(monthlyTotal) : monthlyTotal;
      parts.push(`fra ${val.toLocaleString("nb-NO")} kr/mnd`);
    }
    if (oneTimeTotal > 0) {
      const val = hasDiscount ? disc(oneTimeTotal) : oneTimeTotal;
      parts.push(`${val.toLocaleString("nb-NO")} kr engangskostnad`);
    }
    if (setupTotal > 0) {
      parts.push(`${setupTotal.toLocaleString("nb-NO")} kr oppstart`);
    }
    if (hasDiscount) parts.push("15% rabatt inkludert");

    return parts.join(" + ");
  }

  // Eksponer global funksjon som Pricing kan kalle direkte
  const applyTjenester = useCallback((valgte: string[]) => {
    setValgtPakke(null);
    setTjenester(valgte);
    setPrisEstimat(beregnEstimat(valgte));
    setMelding(`Jeg er interessert i: ${valgte.join(", ")}.`);
  }, []);

  useEffect(() => {
    // Eksponer callback globalt
    window.__eleveraSetTjenester = applyTjenester;

    // Pakkevalg via sessionStorage
    const pakke = sessionStorage.getItem("valgtPakke");
    if (pakke) {
      setValgtPakke(pakke);
      setTjenester(PAKKE_TJENESTER[pakke] ?? []);
      setMelding(`Jeg er interessert i ${pakke}-pakken.`);
      sessionStorage.removeItem("valgtPakke");
    }

    const handler = (e: Event) => {
      const p = (e as CustomEvent<string>).detail;
      setValgtPakke(p);
      setTjenester(PAKKE_TJENESTER[p] ?? []);
      setMelding(`Jeg er interessert i ${p}-pakken.`);
      sessionStorage.removeItem("valgtPakke");
    };
    window.addEventListener("valgtPakke", handler);

    return () => {
      window.removeEventListener("valgtPakke", handler);
      delete window.__eleveraSetTjenester;
    };
  }, [applyTjenester]);

  function toggleTjeneste(t: string) {
    setTjenester((prev) => {
      const next = prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t];
      setPrisEstimat(beregnEstimat(next));
      return next;
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("https://formspree.io/f/xgonybjn", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          navn,
          bedrift,
          epost,
          pakke: valgtPakke ?? "Enkelttjenester",
          tjenester: tjenester.join(", "),
          prisEstimat: prisEstimat ?? "Ikke beregnet",
          melding,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="mx-auto max-w-md rounded-2xl border border-[#f2ca50]/30 bg-[#f2ca50]/10 px-8 py-10 text-center">
        <div className="mb-4 flex justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#f2ca50]/20">
            <svg className="h-7 w-7 text-[#f2ca50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
      {/* Pakkevalg — alltid synlig */}
      <div>
        <label className="mb-1.5 block text-xs font-medium text-white/50">
          Hvilken pakke er du interessert i?
        </label>
        <div className="grid grid-cols-3 gap-2">
          {(["Start", "Vekst", "Partner"] as const).map((p) => {
            const active = valgtPakke === p;
            return (
              <button
                key={p}
                type="button"
                onClick={() => {
                  if (active) {
                    setValgtPakke(null);
                    setMelding("");
                  } else {
                    setValgtPakke(p);
                    setTjenester([]);
                    setPrisEstimat(null);
                    setMelding(`Jeg er interessert i ${p}-pakken.`);
                  }
                }}
                className={`rounded-xl border py-3 text-center text-sm font-semibold transition-all ${
                  active
                    ? "border-[#f2ca50] bg-[#f2ca50]/15 text-[#f2ca50]"
                    : "border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white/80"
                }`}
              >
                {active && <span className="mr-1">✓ </span>}
                {p}
              </button>
            );
          })}
        </div>
      </div>

      {/* Prisestimat — vises bare ved enkelttjenester */}
      {!valgtPakke && prisEstimat && tjenester.length > 0 && (
        <div className="rounded-xl border border-[#f2ca50]/30 bg-[#f2ca50]/5 px-4 py-3">
          <div className="flex items-start gap-2.5">
            <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-[#f2ca50]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
            <div>
              <p className="text-xs font-semibold text-[#f2ca50]">Prisestimat</p>
              <p className="mt-0.5 text-sm text-white/70">{prisEstimat}</p>
            </div>
          </div>
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

      {/* Tjeneste-pills — vises bare når man har valgt fra enkelttjenester */}
      {!valgtPakke && tjenester.length > 0 && (
        <div>
          <label className="mb-1.5 block text-xs font-medium text-white/50">
            Valgte tjenester
          </label>
          <div className="flex flex-wrap gap-2">
            {tjenester.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => toggleTjeneste(t)}
                className="rounded-full border border-[#f2ca50] bg-[#f2ca50]/20 px-4 py-2 text-sm font-medium text-white transition-all hover:bg-[#f2ca50]/10"
              >
                ✓ {t}
                <span className="ml-1.5 text-white/30">×</span>
              </button>
            ))}
          </div>
        </div>
      )}

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
        className="w-full rounded-full bg-[#f2ca50] px-8 py-3.5 text-sm font-semibold text-[#131312] transition-all hover:bg-[#d4af37] disabled:opacity-50"
      >
        {status === "sending" ? "Sender..." : "Send melding"}
      </button>
    </form>
  );
}
