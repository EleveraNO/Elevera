import Arrow from "./Arrow";

export default function HomeCaseStudy() {
  return (
    <section id="caser" className="home-section">
      <div className="wrap">
        <div className="home-case reveal">
          <div className="home-case-body">
            <span className="overline">Case-studie · Drive Trafikkskule</span>
            <h2>1 000 nye følgere på syv dager. <em>Uten annonser.</em></h2>
            <p className="lead">
              Drive startet helt fra null, ny TikTok-konto, null følgere. Vi
              filmet kjøreskolens hverdag, klippet for plattformen og traff rett
              i målgruppen. Første uke ga 200 000 visninger og tusen nye
              følgere, uten en krone i annonsebudsjett.
            </p>

            <div className="home-case-stats">
              <div className="home-case-stat">
                <div className="num" data-count="200 000">200 000</div>
                <div className="label">Visninger første uke</div>
              </div>
              <div className="home-case-stat">
                <div className="num" data-count="1 000">1 000</div>
                <div className="label">Nye følgere på TikTok</div>
              </div>
              <div className="home-case-stat">
                <div className="num" data-count="0 kr" data-from="50000">
                  0 kr
                </div>
                <div className="label">Annonsekostnad</div>
              </div>
            </div>

            <a href="/prosjekter/drive-trafikkskule" className="btn btn-secondary">
              Les hele caseen
              <Arrow />
            </a>
          </div>

          <div className="home-case-visual" aria-hidden="true">
            <video
              src="/videos/drive-trafikkskule/rundkjoring-venstre.mp4"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              className="home-case-visual-video"
            />
            <span className="home-case-visual-chip">TIKTOK · 9:16</span>
          </div>
        </div>
      </div>
    </section>
  );
}
