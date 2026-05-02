import Image from "next/image";

export default function HomeAbout() {
  return (
    <section id="om" className="home-section">
      <div className="wrap">
        <div className="home-about">
          <div className="home-about-visual reveal">
            <Image
              src="/images/marius.jpg"
              alt="Marius, daglig leder i Elevera"
              fill
              sizes="(max-width: 900px) 360px, 420px"
              className="home-about-visual-img"
              priority={false}
            />
          </div>
          <div className="reveal">
            <span className="section-label">Om</span>
            <h2>Én person. Hele jobben.</h2>
            <p>
              Jeg er Marius. Jeg driver Elevera fra Ålesund og hjelper lokale
              bedrifter bli funnet, valgt og kontaktet.
            </p>
            <p>
              Du får direkte kontakt med den som faktisk gjør jobben, fra
              første samtale til tallene begynner å komme inn.
            </p>
            <div className="home-about-sig">
              <div className="home-about-sig-avatar">M</div>
              <div>
                <div className="name">Marius</div>
                <div className="role">Daglig leder · Elevera</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
