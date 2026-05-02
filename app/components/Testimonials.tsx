"use client";

import { FadeUp } from "./animations";

export default function Testimonials() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp>
          <div
            className="relative overflow-hidden rounded-2xl px-8 py-14 text-center sm:px-16 sm:py-20"
            style={{
              background: "#1c1c1a",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Ambient glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(242,202,80,0.07) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />

            <div className="relative">
              {/* Eyebrow */}
              <p
                className="mb-5 text-xs font-semibold uppercase tracking-[0.2em]"
                style={{ color: "#f2ca50" }}
              >
                Neste prosjekt
              </p>

              {/* Heading */}
              <h2
                className="mx-auto mb-5 max-w-xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
                style={{ color: "#e5e2de" }}
              >
                Klar til å bli vår{" "}
                <em
                  style={{
                    fontFamily: "var(--font-fraunces)",
                    color: "#f2ca50",
                    fontStyle: "italic",
                  }}
                >
                  neste
                </em>{" "}
                casestudie?
              </h2>

              {/* Body */}
              <p
                className="mx-auto mb-10 max-w-md text-sm leading-relaxed"
                style={{ color: "rgba(229,226,222,0.50)" }}
              >
                Vi tar på oss et begrenset antall nye prosjekter om gangen,
                slik at hvert samarbeid får den oppmerksomheten det fortjener.
                Book et gratis møte og se hva vi kan gjøre for deg.
              </p>

              {/* CTA row */}
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "#f2ca50", color: "#131312" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "#d4af37";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "#f2ca50";
                  }}
                >
                  Book gratis strategimøte
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
                <a
                  href="/prosjekter"
                  className="text-sm transition-opacity hover:opacity-70"
                  style={{ color: "rgba(229,226,222,0.45)" }}
                >
                  Se våre prosjekter →
                </a>
              </div>

              {/* Existing clients strip */}
              <div
                className="mt-12 flex items-center justify-center gap-2 text-xs"
                style={{ color: "rgba(229,226,222,0.28)" }}
              >
                <span>Jobbet med</span>
                <span
                  className="mx-1 inline-block h-px w-4"
                  style={{ background: "rgba(229,226,222,0.15)" }}
                  aria-hidden="true"
                />
                <span style={{ color: "rgba(229,226,222,0.45)" }}>
                  Cut O&apos; Clock
                </span>
                <span aria-hidden="true">·</span>
                <span style={{ color: "rgba(229,226,222,0.45)" }}>
                  Drive Trafikkskule
                </span>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
