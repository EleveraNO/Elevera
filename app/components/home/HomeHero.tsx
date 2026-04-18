import HeroTopography from "./HeroTopography";
import Arrow from "./Arrow";

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero-bg" aria-hidden="true">
        <HeroTopography />
      </div>

      <div className="home-hero-vignette" aria-hidden="true" />

      <div className="wrap">
        <div className="home-hero-grid">
          <div>
            <span className="home-hero-eyebrow">Vekstbyrå i Ålesund</span>
            <h1>Én partner for hele markedsføringen.</h1>
            <p className="lead">
              Foto, sosialt, nettside, SEO og annonser — fra én person som
              bygger alt sammen og måler hva som faktisk gir kunder.
            </p>
            <div className="home-hero-ctas">
              <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Book møte
                <Arrow />
              </a>
              <a href="#caser" className="btn btn-ghost">Se casene</a>
            </div>
            <div className="home-hero-meta">
              <span><strong>Basert i</strong> Ålesund</span>
              <span><strong>Jobber med</strong> lokale bedrifter på Sunnmøre</span>
              <span><strong>Åpen for</strong> nye prosjekter</span>
            </div>
          </div>
        </div>
      </div>

      <div className="home-hero-scroll" aria-hidden="true">
        <span>Scroll</span>
        <div className="home-hero-scroll-line" />
      </div>
    </section>
  );
}
