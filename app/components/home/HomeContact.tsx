"use client";

import { useState } from "react";
import Arrow from "./Arrow";

type Status = "idle" | "sending" | "success" | "error";
type Pakke = "Start" | "Vekst" | "Partner" | null;

const TJENESTER = [
  "Nettside",
  "Foto og video",
  "Dronevideo",
  "Digital annonsering",
  "Sosiale medier",
  "SEO",
  "Logo og profil",
];

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY";

export default function HomeContact() {
  const [status, setStatus] = useState<Status>("idle");
  const [navn, setNavn] = useState("");
  const [bedrift, setBedrift] = useState("");
  const [epost, setEpost] = useState("");
  const [pakke, setPakke] = useState<Pakke>(null);
  const [tjenester, setTjenester] = useState<string[]>([]);
  const [melding, setMelding] = useState("");
  const [showTjenester, setShowTjenester] = useState(false);

  function velgPakke(p: Exclude<Pakke, null>) {
    if (pakke === p) {
      setPakke(null);
      setMelding("");
      return;
    }
    setPakke(p);
    setMelding(`Jeg er interessert i ${p}-pakken.`);
  }

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
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          navn,
          bedrift,
          epost,
          pakke: pakke ?? "Enkelttjenester",
          tjenester: tjenester.join(", "),
          melding,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="kontakt" className="home-section home-contact">
      <div className="wrap">
        <div className="home-contact-grid">
          <aside className="home-contact-side reveal">
            <span className="section-label" style={{ color: "var(--stone-400)" }}>
              Kontakt
            </span>
            <h2>Klar for å bli funnet, valgt og kontaktet?</h2>
            <p className="home-contact-lead">
              Book en uforpliktende samtale, eller send noen ord om hva du
              trenger. Vi ser på bedriften din, hva som mangler, og om det vi
              gjør passer for deg.
            </p>

            <div className="home-contact-channels">
              <a
                href="mailto:tverbakk@elevera.no"
                className="home-contact-channel"
              >
                <span className="home-contact-channel-label">E-post</span>
                <span className="home-contact-channel-value">
                  tverbakk@elevera.no
                </span>
              </a>
              <a href="tel:+4794974165" className="home-contact-channel">
                <span className="home-contact-channel-label">Telefon</span>
                <span className="home-contact-channel-value">
                  +47 949 74 165
                </span>
              </a>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="home-contact-channel"
              >
                <span className="home-contact-channel-label">Booking</span>
                <span className="home-contact-channel-value">
                  Velg tid direkte i kalenderen
                </span>
              </a>
            </div>

            <p className="home-contact-trust">
              Svar innen 24 timer på hverdager. Alltid uforpliktende.
            </p>
          </aside>

          <div className="home-contact-form-wrap reveal">
            {status === "success" ? (
              <div className="home-contact-success">
                <div className="home-contact-success-icon" aria-hidden="true">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M5 13l4 4L19 7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Takk for meldingen!</h3>
                <p>Vi tar kontakt innen 24 timer på hverdager.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="home-contact-form" noValidate>
                <div className="home-contact-field-group">
                  <span className="home-contact-field-label">
                    Interessert i en pakke?
                  </span>
                  <div className="home-contact-tiers" role="tablist">
                    {(["Start", "Vekst", "Partner"] as const).map((p) => (
                      <button
                        key={p}
                        type="button"
                        role="tab"
                        aria-selected={pakke === p}
                        className={`home-contact-tier${pakke === p ? " active" : ""}`}
                        onClick={() => velgPakke(p)}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="home-contact-field-group">
                  <button
                    type="button"
                    className="home-contact-toggle"
                    aria-expanded={showTjenester}
                    aria-controls="home-contact-tjenester-panel"
                    onClick={() => setShowTjenester((v) => !v)}
                  >
                    <span className="home-contact-toggle-label">
                      Eller velg enkelt-tjenester
                      {tjenester.length > 0 && !showTjenester && (
                        <span className="home-contact-toggle-count">
                          {tjenester.length} valgt
                        </span>
                      )}
                    </span>
                    <svg
                      className={`home-contact-toggle-chevron${showTjenester ? " open" : ""}`}
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      aria-hidden="true"
                    >
                      <path
                        d="M3 5l4 4 4-4"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {showTjenester && (
                    <div
                      id="home-contact-tjenester-panel"
                      className="home-contact-pills"
                    >
                      {TJENESTER.map((t) => {
                        const active = tjenester.includes(t);
                        return (
                          <button
                            key={t}
                            type="button"
                            aria-pressed={active}
                            className={`home-contact-pill${active ? " active" : ""}`}
                            onClick={() => toggleTjeneste(t)}
                          >
                            {active && <span aria-hidden="true">✓ </span>}
                            {t}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                <div className="home-contact-row">
                  <label className="home-contact-field">
                    <span className="home-contact-field-label">Navn</span>
                    <input
                      type="text"
                      required
                      placeholder="Ola Nordmann"
                      value={navn}
                      onChange={(e) => setNavn(e.target.value)}
                    />
                  </label>
                  <label className="home-contact-field">
                    <span className="home-contact-field-label">Bedrift</span>
                    <input
                      type="text"
                      required
                      placeholder="Bedriften AS"
                      value={bedrift}
                      onChange={(e) => setBedrift(e.target.value)}
                    />
                  </label>
                </div>

                <label className="home-contact-field">
                  <span className="home-contact-field-label">E-post</span>
                  <input
                    type="email"
                    required
                    placeholder="ola@bedriften.no"
                    value={epost}
                    onChange={(e) => setEpost(e.target.value)}
                  />
                </label>

                <label className="home-contact-field">
                  <span className="home-contact-field-label">Melding</span>
                  <textarea
                    required
                    rows={4}
                    placeholder="Fortell kort hva du trenger hjelp med …"
                    value={melding}
                    onChange={(e) => setMelding(e.target.value)}
                  />
                </label>

                {status === "error" && (
                  <p className="home-contact-error">
                    Noe gikk galt. Prøv igjen, eller send en e-post direkte til
                    tverbakk@elevera.no.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary home-contact-submit"
                >
                  {status === "sending" ? "Sender…" : "Send melding"}
                  <Arrow />
                </button>

                <p className="home-contact-note">
                  Ved å sende godtar du at vi lagrer informasjonen for å svare
                  deg. Se{" "}
                  <a href="/personvern">personvernerklæring</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
