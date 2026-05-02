import Arrow from "./Arrow";
import HomeROICalculator from "./HomeROICalculator";

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY";

export default function HomePricing() {
  return (
    <section className="home-pricing" id="priser">
      <div className="wrap">
        <div className="home-section-head reveal">
          <span className="section-label">Priser</span>
          <h2>Tre pakker. Én for hvert stadium av vekst.</h2>
          <p>
            Faste månedspriser, ingen bindingstid. Du kan alltid bytte pakke
            når behovet endrer seg.
          </p>
        </div>

        <div className="home-pricing-grid">
          {/* Start */}
          <div className="home-tier reveal">
            <div className="home-tier-name">Start</div>
            <p className="home-tier-desc">For deg som trenger et solid fundament.</p>
            <div className="home-tier-price">
              <span className="home-tier-price-amount">7 900 kr</span>
              <span className="home-tier-price-period">/mnd</span>
            </div>
            <div className="home-tier-features-label">Inkludert</div>
            <ul className="home-tier-features">
              <li>Nettside (inntil 5 sider)</li>
              <li>Profesjonelle bilder av bedriften</li>
              <li>Google-optimalisert innhold</li>
              <li>Hosting og teknisk drift</li>
              <li>Månedlige nettside-oppdateringer</li>
              <li>Grunnleggende SEO</li>
              <li>Kontaktskjema med varsling</li>
              <li>Google Business oppsett</li>
            </ul>
            <div className="home-tier-footer">
              <p className="home-tier-note">
                For bedrifter som trenger et solid digitalt fundament og vil
                bli funnet på Google.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Kom i gang
                <Arrow />
              </a>
            </div>
          </div>

          {/* Vekst (featured) */}
          <div className="home-tier home-tier-featured reveal">
            <span className="home-tier-badge">Mest populær</span>
            <div className="home-tier-name">Vekst</div>
            <p className="home-tier-desc">For deg som vil bli sett og vokse.</p>
            <div className="home-tier-price">
              <span className="home-tier-price-amount">14 900 kr</span>
              <span className="home-tier-price-period">/mnd</span>
            </div>
            <div className="home-tier-features-label">Alt i Start, pluss</div>
            <ul className="home-tier-features">
              <li>Nettside utvidet til 8 sider</li>
              <li>4 videoer + 8 bilder produsert per måned</li>
              <li>Publisering 3x per uke på sosiale medier</li>
              <li>Innholdsstrategi og redaksjonsplan</li>
              <li>Aktiv SEO-oppfølging</li>
              <li>Månedlig resultatrapport</li>
            </ul>
            <div className="home-tier-footer">
              <p className="home-tier-note">
                Du får en synlig bedrift som poster jevnlig. Vi tar hele jobben.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Velg Vekst
                <Arrow />
              </a>
            </div>
          </div>

          {/* Partner */}
          <div className="home-tier reveal">
            <div className="home-tier-name">Partner</div>
            <p className="home-tier-desc">
              For deg som vil ha en dedikert digital partner.
            </p>
            <div className="home-tier-price">
              <span className="home-tier-price-amount">22 900 kr</span>
              <span className="home-tier-price-period">/mnd</span>
            </div>
            <div className="home-tier-features-label">Alt i Vekst, pluss</div>
            <ul className="home-tier-features">
              <li>Egen nettside uten sidebegrensning</li>
              <li>6 videoer + 12 bilder per måned</li>
              <li>Publisering 5x per uke</li>
              <li>Annonsering på Meta og Google</li>
              <li>Dronevideo ved behov</li>
              <li>Landingssider for kampanjer</li>
              <li>Månedlig strategimøte</li>
              <li>Prioritert support</li>
            </ul>
            <div className="home-tier-footer">
              <p className="home-tier-note">
                Vi blir en forlengelse av teamet ditt. Du fokuserer på det du
                kan best.
              </p>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost"
              >
                Bli partner
                <Arrow />
              </a>
            </div>
          </div>
        </div>

        <HomeROICalculator />

        <p className="home-roi-fineprint">
          Indikative tall basert på dine egne forutsetninger. Faktisk resultat
          avhenger av marked, sesong og tilbudet ditt. Ingen garantier, bare
          ærlig matte.
        </p>

        <p className="home-pricing-footnote reveal">
          Alle priser er eks. mva. Oppstart faktureres separat. Trenger du noe
          annet? <a href="#kontakt">Ta kontakt, så lager vi noe som passer.</a>
        </p>
      </div>
    </section>
  );
}
