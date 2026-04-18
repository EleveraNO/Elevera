"use client";

import { useMemo, useState } from "react";

type Tier = "start" | "vekst" | "partner";

const TIER_PRICES: Record<Tier, number> = { start: 7900, vekst: 14900, partner: 22900 };
const TIER_NAMES: Record<Tier, string> = { start: "Start", vekst: "Vekst", partner: "Partner" };
/**
 * Tier-defaults bruker konservative antakelser for lokale bedrifter på Sunnmøre:
 * - leads: månedlige kvalifiserte henvendelser via Google/SoMe (ikke visninger)
 * - conv: inbound close-rate (Google-drevet trafikk har typisk 8–15%)
 * - order: snittverdi per kunde over kundens levetid
 */
const TIER_DEFAULTS: Record<Tier, { leads: number; conv: number; order: number }> = {
  start:   { leads: 12, conv: 12, order: 6500 },
  vekst:   { leads: 22, conv: 11, order: 7500 },
  partner: { leads: 38, conv: 12, order: 9000 },
};

const fmtKr = (n: number) =>
  Math.max(0, Math.round(n)).toLocaleString("nb-NO").replace(/\u00A0/g, " ") + " kr";
const fmtInt = (n: number) =>
  Math.max(0, Math.round(n)).toLocaleString("nb-NO").replace(/\u00A0/g, " ");
const fmtDec = (n: number) => n.toFixed(2).replace(".", ",").replace(/,00$/, "") + "×";

function fillPct(val: number, min: number, max: number) {
  return ((val - min) / (max - min)) * 100;
}

export default function HomeROICalculator() {
  const [tier, setTier] = useState<Tier>("vekst");
  const [months, setMonths] = useState(12);
  const [leads, setLeads] = useState(TIER_DEFAULTS.vekst.leads);
  const [conv, setConv] = useState(TIER_DEFAULTS.vekst.conv);
  const [order, setOrder] = useState(TIER_DEFAULTS.vekst.order);
  const [userEdited, setUserEdited] = useState({
    leads: false,
    conv: false,
    order: false,
  });

  const results = useMemo(() => {
    const monthlyCost = TIER_PRICES[tier];
    const customersMo = leads * (conv / 100);
    const revenueMo = customersMo * order;
    const totalCustomers = customersMo * months;
    const totalRevenue = revenueMo * months;
    const totalInvest = monthlyCost * months;
    const net = totalRevenue - totalInvest;
    const mult = totalInvest > 0 ? totalRevenue / totalInvest : 0;

    // Flat månedskostnad mot flat månedsinntekt gir kun to tilfeller:
    //   revenueMo >= monthlyCost → break-even fra første måned
    //   revenueMo <  monthlyCost → det blir aldri break-even (månedlig tap)
    let breakevenText: string;
    if (revenueMo <= 0) {
      breakevenText = "ikke nådd";
    } else if (revenueMo >= monthlyCost) {
      breakevenText = "måned 1";
    } else {
      breakevenText = "ikke nådd med disse tallene";
    }

    return {
      net,
      totalRevenue,
      totalInvest,
      mult,
      totalCustomers,
      breakevenText,
      breakevenReached: revenueMo > 0 && revenueMo >= monthlyCost,
    };
  }, [tier, months, leads, conv, order]);

  function pickTier(next: Tier) {
    setTier(next);
    const d = TIER_DEFAULTS[next];
    if (!userEdited.leads) setLeads(d.leads);
    if (!userEdited.conv) setConv(d.conv);
    if (!userEdited.order) setOrder(d.order);
  }

  return (
    <div className="home-roi reveal">
      <div className="home-roi-controls">
        <div className="home-roi-head">
          <span className="section-label">Regn ut selv</span>
          <h3>Hva er dette verdt for bedriften din?</h3>
          <p>Skru på tallene som gjelder for deg. Vi tror på ærlig matte, ikke lovnader.</p>
        </div>

        <div>
          <div className="home-roi-slider-label" style={{ marginBottom: 10 }}>
            Pakke
          </div>
          <div className="home-roi-tiers" role="tablist" aria-label="Velg pakke">
            {(["start", "vekst", "partner"] as Tier[]).map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={tier === t}
                className={`home-roi-tier-btn${tier === t ? " active" : ""}`}
                onClick={() => pickTier(t)}
              >
                {TIER_NAMES[t]}
              </button>
            ))}
          </div>
        </div>

        <div className="home-roi-slider">
          <div className="home-roi-slider-top">
            <span className="home-roi-slider-label">Tidsperiode</span>
            <span className="home-roi-slider-value">
              {months}
              <span className="unit">måneder</span>
            </span>
          </div>
          <input
            type="range"
            className="home-roi-range"
            min={3}
            max={36}
            step={1}
            value={months}
            aria-label="Antall måneder"
            onChange={(e) => setMonths(parseInt(e.target.value, 10))}
          />
          <div className="home-roi-range-track">
            <div
              className="fill"
              style={{ width: `${fillPct(months, 3, 36)}%` }}
            />
          </div>
          <div className="home-roi-slider-ticks">
            <span>3 mnd</span>
            <span>12 mnd</span>
            <span>24 mnd</span>
            <span>36 mnd</span>
          </div>
        </div>

        <div className="home-roi-slider">
          <div className="home-roi-slider-top">
            <span className="home-roi-slider-label">Nye leads per måned</span>
            <span className="home-roi-slider-value">
              {leads}
              <span className="unit">/ mnd</span>
            </span>
          </div>
          <input
            type="range"
            className="home-roi-range"
            min={5}
            max={120}
            step={1}
            value={leads}
            aria-label="Nye leads per måned"
            onChange={(e) => {
              setLeads(parseInt(e.target.value, 10));
              setUserEdited((u) => ({ ...u, leads: true }));
            }}
          />
          <div className="home-roi-range-track">
            <div
              className="fill"
              style={{ width: `${fillPct(leads, 5, 120)}%` }}
            />
          </div>
          <div className="home-roi-slider-ticks">
            <span>5</span>
            <span>40</span>
            <span>80</span>
            <span>120</span>
          </div>
        </div>

        <div className="home-roi-slider">
          <div className="home-roi-slider-top">
            <span className="home-roi-slider-label">Andel som blir kunde</span>
            <span className="home-roi-slider-value">
              {conv}
              <span className="unit">%</span>
            </span>
          </div>
          <input
            type="range"
            className="home-roi-range"
            min={2}
            max={30}
            step={1}
            value={conv}
            aria-label="Konverteringsrate"
            onChange={(e) => {
              setConv(parseInt(e.target.value, 10));
              setUserEdited((u) => ({ ...u, conv: true }));
            }}
          />
          <div className="home-roi-range-track">
            <div
              className="fill"
              style={{ width: `${fillPct(conv, 2, 30)}%` }}
            />
          </div>
          <div className="home-roi-slider-ticks">
            <span>2%</span>
            <span>10%</span>
            <span>20%</span>
            <span>30%</span>
          </div>
        </div>

        <div className="home-roi-slider">
          <div className="home-roi-slider-top">
            <span className="home-roi-slider-label">Snittverdi per kunde</span>
            <span className="home-roi-slider-value">
              {fmtInt(order)}
              <span className="unit">kr</span>
            </span>
          </div>
          <input
            type="range"
            className="home-roi-range"
            min={1000}
            max={50000}
            step={500}
            value={order}
            aria-label="Snittverdi per kunde"
            onChange={(e) => {
              setOrder(parseInt(e.target.value, 10));
              setUserEdited((u) => ({ ...u, order: true }));
            }}
          />
          <div className="home-roi-range-track">
            <div
              className="fill"
              style={{ width: `${fillPct(order, 1000, 50000)}%` }}
            />
          </div>
          <div className="home-roi-slider-ticks">
            <span>1k</span>
            <span>15k</span>
            <span>30k</span>
            <span>50k</span>
          </div>
        </div>
      </div>

      <aside className="home-roi-results" aria-live="polite">
        <div className="home-roi-result-primary">
          <span className="home-roi-result-label">Netto avkastning over perioden</span>
          <span className="home-roi-result-value">{fmtKr(results.net)}</span>
          <span className="home-roi-result-sub">
            etter {months} mnd med {TIER_NAMES[tier]}
          </span>
        </div>

        <div className="home-roi-result-row">
          <div className="home-roi-result-cell pos">
            <span className="home-roi-result-label">Forventet omsetning</span>
            <span className="home-roi-result-value">{fmtKr(results.totalRevenue)}</span>
          </div>
          <div className="home-roi-result-cell neg">
            <span className="home-roi-result-label">Total investering</span>
            <span className="home-roi-result-value">{fmtKr(results.totalInvest)}</span>
          </div>
        </div>

        <div className="home-roi-result-row">
          <div className="home-roi-result-cell">
            <span className="home-roi-result-label">ROI-multiplikator</span>
            <span className="home-roi-result-value">{fmtDec(results.mult)}</span>
          </div>
          <div className="home-roi-result-cell">
            <span className="home-roi-result-label">Nye kunder</span>
            <span className="home-roi-result-value">{fmtInt(results.totalCustomers)}</span>
          </div>
        </div>

        <div className="home-roi-breakeven">
          <span className="home-roi-breakeven-icon" aria-hidden="true">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path
                d="M2 7l3.5 3.5L12 3.5"
                stroke="#F7F4EC"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <div>
            {results.breakevenReached ? (
              <>
                Break-even fra <strong>{results.breakevenText}</strong> — resten
                er ren avkastning.
              </>
            ) : (
              <>
                Break-even <strong>ikke nådd</strong> med disse tallene. Prøv
                flere leads eller høyere snittverdi.
              </>
            )}
          </div>
        </div>
      </aside>
    </div>
  );
}
