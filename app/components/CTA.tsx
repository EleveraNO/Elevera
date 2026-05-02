"use client";

import { ScaleIn } from "./animations";
import ContactForm from "./ContactForm";

export default function CTA() {
  return (
    <section id="kontakt" className="px-6 py-24 md:px-20">
      <div className="mx-auto max-w-4xl">
        <ScaleIn>
          <div
            className="relative overflow-hidden p-10 text-center md:p-16"
            style={{
              background: "#1c1c1a",
              border: "1px solid rgba(77,70,53,0.2)",
              borderRadius: "2px",
            }}
          >
            {/* Gold radial glow */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                backgroundImage: "radial-gradient(circle at 50% 50%, rgba(242,202,80,0.06) 0%, transparent 70%)",
              }}
              aria-hidden="true"
            />
            {/* Top accent line */}
            <div
              className="absolute top-0 left-1/2 h-px w-32 -translate-x-1/2"
              style={{ background: "linear-gradient(90deg, transparent, #d4af37, transparent)" }}
              aria-hidden="true"
            />

            <div className="relative z-10">
              {/* Badge */}
              <div
                className="mb-6 inline-flex items-center gap-2 px-4 py-1.5"
                style={{
                  border: "1px solid rgba(212,175,55,0.25)",
                  background: "rgba(212,175,55,0.07)",
                  borderRadius: "2px",
                }}
              >
                <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: "#f2ca50" }} />
                <span className="text-sm font-semibold" style={{ color: "rgba(242,202,80,0.9)", fontFamily: "var(--font-manrope), sans-serif" }}>
                  Gratis og uforpliktende
                </span>
              </div>

              <h2
                className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
                style={{ fontFamily: "var(--font-noto-serif), Georgia, serif", color: "#e5e2de" }}
              >
                Lurer du på hva vi ville gjort for <em style={{ fontStyle: "italic", color: "#f2ca50" }}>din</em> bedrift?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed" style={{ color: "#d0c5af" }}>
                Book et gratis strategimøte på 30 minutter. Vi ser på nettsiden din, annonsene dine og konkurrentene dine, og forteller deg nøyaktig hva vi ville gjort annerledes.
              </p>

              <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-sm px-8 py-3.5 text-base font-bold transition-all duration-200 active:scale-95"
                  style={{ background: "#d4af37", color: "#3c2f00" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#f2ca50";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 24px rgba(212,175,55,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background = "#d4af37";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
                  }}
                >
                  Book gratis møte
                </a>
                <a
                  href="tel:+4794974165"
                  className="flex items-center gap-2 rounded-sm px-8 py-3.5 text-base font-semibold transition-all duration-200"
                  style={{ border: "1px solid rgba(77,70,53,0.35)", color: "rgba(229,226,222,0.7)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(242,202,80,0.4)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "#f2ca50";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(77,70,53,0.35)";
                    (e.currentTarget as HTMLAnchorElement).style.color = "rgba(229,226,222,0.7)";
                  }}
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Ring oss
                </a>
              </div>

              <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm" style={{ color: "rgba(208,197,175,0.5)" }}>
                {["Gratis og uforpliktende", "Svar innen 24 timer", "Ingen salgsmasi"].map((item) => (
                  <span key={item} className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" style={{ color: "#f2ca50" }}>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </span>
                ))}
              </div>

              <div className="my-10 flex items-center gap-4">
                <div className="h-px flex-1" style={{ background: "rgba(77,70,53,0.25)" }} />
                <span className="text-sm" style={{ color: "rgba(208,197,175,0.4)" }}>Eller send oss en melding</span>
                <div className="h-px flex-1" style={{ background: "rgba(77,70,53,0.25)" }} />
              </div>

              <ContactForm />
            </div>
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
