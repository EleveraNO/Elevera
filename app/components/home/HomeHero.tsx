import Arrow from "./Arrow";

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY";

export default function HomeHero() {
  return (
    <section className="home-hero">
      <div className="home-hero-bg" aria-hidden="true">
        <picture>
          <source media="(max-width: 767px)" srcSet="/hero-mobile.jpg" />
          <img src="/hero.jpg" alt="" className="home-hero-img" />
        </picture>
      </div>

      <div className="home-hero-vignette" aria-hidden="true" />

      <div className="wrap">
        <div className="home-hero-grid">
          <div>
            <span className="home-hero-eyebrow">Vekstbyrå i Ålesund</span>
            <h1>Én partner for hele markedsføringen.</h1>
            <p className="lead">
              Foto, sosialt, nettside, SEO og annonser, fra én person som
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
              <span><strong>Ålesund · hele Norge</strong></span>
              <span><strong>Én kontaktperson</strong></span>
              <span><strong>Gratis første møte</strong></span>
            </div>
          </div>
        </div>
      </div>

      <div className="home-hero-scroll" aria-hidden="true">
        <div className="home-hero-scroll-line" />
      </div>
    </section>
  );
}
