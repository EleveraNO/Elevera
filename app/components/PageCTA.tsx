import ContactForm from "./ContactForm";

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY";

interface PageCTAProps {
  heading: string;
  description?: string;
}

export default function PageCTA({ heading, description }: PageCTAProps) {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-3xl text-center">
        <div className="rounded-3xl border border-[#7c3aed]/30 bg-[#7c3aed]/10 p-10">
          <h2 className="mb-4 text-3xl font-bold text-white">{heading}</h2>
          <p className="mb-8 text-white/60">
            {description ?? "Book et gratis møte og hør hva vi kan gjøre for din bedrift i Ålesund."}
          </p>

          <div className="mb-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-[#7c3aed] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:bg-[#6d28d9] hover:-translate-y-0.5"
            >
              Book gratis møte
            </a>
            <a
              href="tel:+4794974165"
              className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Ring oss
            </a>
          </div>

          <div className="mb-8 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/10" />
            <span className="text-sm text-white/30">Eller send oss en melding</span>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}
