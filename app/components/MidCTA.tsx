"use client";

import { FadeUp } from "./animations";

export default function MidCTA() {
  return (
    <section className="px-6 py-12">
      <FadeUp>
        <div
          className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 rounded-xl px-8 py-7 sm:flex-row"
          style={{
            border: "1px solid rgba(242,202,80,0.15)",
            background: "linear-gradient(90deg, rgba(242,202,80,0.05) 0%, transparent 100%)",
          }}
        >
          <div>
            <p
              className="mb-1 text-base font-semibold sm:text-lg"
              style={{ color: "#e5e2de" }}
            >
              Klar til å se hva Elevera kan gjøre for deg?
            </p>
            <p className="text-sm" style={{ color: "rgba(229,226,222,0.45)" }}>
              Book et gratis strategimøte — ingen forpliktelser, ingen salgsmasi.
            </p>
          </div>
          <div className="flex flex-shrink-0 items-center gap-3">
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-6 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: "#f2ca50", color: "#131312" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#d4af37";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background = "#f2ca50";
              }}
            >
              Book møte
            </a>
            <a
              href="tel:+4794974165"
              className="text-sm transition-colors duration-200"
              style={{ color: "rgba(229,226,222,0.5)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "#e5e2de";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = "rgba(229,226,222,0.5)";
              }}
            >
              eller ring oss
            </a>
          </div>
        </div>
      </FadeUp>
    </section>
  );
}
