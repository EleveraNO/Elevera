"use client";

import { ScaleIn } from "./animations";
import ContactForm from "./ContactForm";

export default function CTA() {
  return (
    <section id="kontakt" className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <ScaleIn>
          <div
            className="relative overflow-hidden rounded-2xl p-10 text-center md:p-16"
            style={{
              border: "1px solid rgba(45,212,191,0.2)",
              background: "linear-gradient(135deg, rgba(45,212,191,0.07) 0%, #111115 50%, #0E0E12 100%)",
            }}
          >
            {/* Subtle top accent line */}
            <div
              className="absolute top-0 left-1/2 h-px w-32 -translate-x-1/2"
              style={{ background: "linear-gradient(90deg, transparent, #2DD4BF, transparent)" }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Badge */}
              <div
                className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
                style={{
                  border: "1px solid rgba(45,212,191,0.2)",
                  background: "rgba(45,212,191,0.07)",
                }}
              >
                <span
                  className="h-2 w-2 animate-pulse rounded-full"
                  style={{ background: "#2DD4BF" }}
                />
                <span className="text-sm font-medium" style={{ color: "rgba(45,212,191,0.85)" }}>
                  Gratis og uforpliktende
                </span>
              </div>

              <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl" style={{ color: "#F2EDE6" }}>
                Klar til å vokse?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed" style={{ color: "rgba(242,237,230,0.52)" }}>
                Book et gratis strategimøte på 30 minutter. Vi hjelper bedrifter i
                Ålesund og omegn – og forteller deg nøyaktig hva vi ville gjort
                for å hjelpe akkurat deg vokse på nett.
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-8 py-3.5 text-base font-semibold transition-all duration-200 hover:-translate-y-0.5"
                  style={{
                    background: "#2DD4BF",
                    color: "#09090B",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#14B8A6";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#2DD4BF";
                  }}
                >
                  Book gratis møte
                </a>
                <a
                  href="tel:+4794974165"
                  className="flex items-center gap-2 rounded-full px-8 py-3.5 text-base font-semibold transition-all duration-200"
                  style={{
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(242,237,230,0.7)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#F2EDE6";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.15)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(242,237,230,0.7)";
                  }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ring oss
                </a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm" style={{ color: "rgba(242,237,230,0.38)" }}>
                {["Gratis og uforpliktende", "Svar innen 24 timer", "Ingen salgsmasi"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" style={{ color: "#2DD4BF" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>

              <div className="my-10 flex items-center gap-4">
                <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
                <span className="text-sm" style={{ color: "rgba(242,237,230,0.28)" }}>
                  Eller send oss en melding
                </span>
                <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
              </div>

              <ContactForm />
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
