import LogoMark from "./LogoMark";

export default function HomeFooter() {
  return (
    <footer className="home-footer">
      <div className="wrap">
        <div className="home-footer-top">
          <div>
            <a href="/" className="home-logo" aria-label="Elevera">
              <LogoMark />
              Elevera
            </a>
            <p className="home-foot-about">
              Vekstbyrå i Ålesund. Innhold, sosialt, nettside, SEO og
              markedsføring for lokale bedrifter.
            </p>
          </div>
          <div className="home-foot-col">
            <h5>Kontakt</h5>
            <ul>
              <li><a href="mailto:tverbakk@elevera.no">tverbakk@elevera.no</a></li>
              <li><a href="tel:+4794974165">+47 949 74 165</a></li>
              <li><span>Ålesund, Norge</span></li>
            </ul>
          </div>
          <div className="home-foot-col">
            <h5>Tjenester</h5>
            <ul>
              <li><a href="/tjenester/foto-og-video-alesund">Foto &amp; Video</a></li>
              <li><a href="/tjenester/sosiale-medier-alesund">Sosiale medier</a></li>
              <li><a href="/tjenester/nettside-alesund">Nettside</a></li>
              <li><a href="/tjenester/seo-alesund">SEO</a></li>
              <li><a href="/tjenester/annonsering-alesund">Digital annonsering</a></li>
            </ul>
          </div>
          <div className="home-foot-col">
            <h5>Byrå</h5>
            <ul>
              <li><a href="/#caser">Caser</a></li>
              <li><a href="/#priser">Priser</a></li>
              <li><a href="/#om">Om</a></li>
              <li><a href="/blogg">Blogg</a></li>
              <li><a href="/#kontakt">Book møte</a></li>
            </ul>
          </div>
        </div>
        <div className="home-footer-bottom">
          <div>© {new Date().getFullYear()} Elevera.</div>
          <div style={{ display: "flex", gap: 24 }}>
            <a href="/personvern">Personvern</a>
            <a href="/vilkar">Vilkår</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
