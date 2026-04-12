import ContactForm from "./ContactForm";

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY";

const TEAL = "#f2ca50";

interface PageCTAProps {
  heading: string;
  description?: string;
}

export default function PageCTA({ heading, description }: PageCTAProps) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div
          className="relative overflow-hidden rounded-3xl p-10"
          style={{
            border: "1px solid rgba(242,202,80,0.2)",
            background: "linear-gradient(135deg, rgba(242,202,80,0.07) 0%, #1c1c1a 50%, #131312 100%)",
          }}
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 left-1/2 h-px w-32 -translate-x-1/2"
            style={{ background: "linear-gradient(90deg, transparent, #f2ca50, transparent)" }}
          />

          {/* Badge */}
          <div
            className="mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
            style={{ border: "1px solid rgba(242,202,80,0.2)", background: "rgba(242,202,80,0.07)" }}
          >
            <span className="h-2 w-2 animate-pulse rounded-full" style={{ background: TEAL }} />
            <span className="text-sm font-medium" style={{ color: "rgba(242,202,80,0.85)" }}>
              Gratis og uforpliktende
            </span>
          </div>

          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">{heading}</h2>
          <p className="mb-8 text-white/55">
            {description ?? "Book et gratis møte og hør hva vi kan gjøre for din bedrift i Ålesund."}
          </p>

          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full px-8 py-3.5 font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{ background: TEAL, color: "#131312" }}
            >
              Book gratis møte
            </a>
            <a
              href="tel:+4794974165"
              className="flex items-center gap-2 rounded-full border px-8 py-3.5 font-semibold transition-all duration-200 hover:-translate-y-0.5"
              style={{ borderColor: "rgba(255,255,255,0.15)", color: "rgba(229,226,222,0.7)" }}
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Ring oss
            </a>
          </div>

          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="text-sm" style={{ color: "rgba(229,226,222,0.3)" }}>Eller send oss en melding</span>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
