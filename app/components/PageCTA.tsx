import "./service.css";
import Arrow from "./home/Arrow";

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY";

interface PageCTAProps {
  heading: string;
  description?: string;
}

export default function PageCTA({ heading, description }: PageCTAProps) {
  return (
    <section className="svc-section">
      <div className="wrap">
        <div className="svc-cta-card">
          <h2>{heading}</h2>
          <p>
            {description ??
              "Book en uforpliktende samtale eller ring direkte. Vi svarer innen 24 timer på hverdager."}
          </p>
          <div className="svc-cta-actions">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Book møte
              <Arrow />
            </a>
            <a href="tel:+4794974165" className="btn btn-ghost svc-cta-phone">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              +47 949 74 165
            </a>
          </div>
          <p className="svc-cta-trust">
            Eller send en e-post til{" "}
            <a href="mailto:tverbakk@elevera.no">tverbakk@elevera.no</a>.
          </p>
        </div>
      </div>
    </section>
  );
}
