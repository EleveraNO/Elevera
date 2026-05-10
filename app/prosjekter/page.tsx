import Arrow from "../components/home/Arrow";
import HomeNav from "../components/home/HomeNav";
import HomeFooter from "../components/home/HomeFooter";
import HomeRevealObserver from "../components/home/HomeRevealObserver";
import "../components/home/home.css";

type Case = {
  href: string;
  overline: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  imagePosition?: string;
};

const allCases: Case[] = [
  {
    href: "/prosjekter/drive-trafikkskule",
    overline: "Trafikkskule · Sunnmøre",
    title: "Drive Trafikkskule",
    description:
      "Fra null følgere til 1 000 på syv dager, og 200 000 visninger første uke. TikTok-innhold uten annonsebudsjett.",
    image: "/images/drive-trafikkskule/foto-3.jpg",
    imagePosition: "center 30%",
    tags: ["Innhold", "Sosiale Medier", "Strategi"],
  },
  {
    href: "/prosjekter/mathilde-teigen",
    overline: "Artist · Trøndelag/Nordland",
    title: "Mathilde Teigen",
    description:
      "Visuell hjemmeside for artist, låtskriver og dirigent, der det visuelle uttrykket matcher musikken.",
    image: "/images/mathilde-teigen/thumb.jpg",
    tags: ["Nettside", "Design", "Kontaktskjema"],
  },
  {
    href: "/prosjekter/cutoclock",
    overline: "Frisør · Ålesund",
    title: "Cut O' Clock",
    description:
      "Profesjonelle bilder og innhold for en ny frisørsalong som skulle sette seg i markedet.",
    image: "/images/cut-o-clock/Photo 3.jpg",
    tags: ["Foto", "Video", "Sosialt"],
  },
  {
    href: "/prosjekter/tverbakken-gard",
    overline: "Gård · Kjerringøy",
    title: "Tverbakken Gård",
    description:
      "Komplett nettside med nettbutikk for 10. generasjons gård på Kjerringøy, fra null til e-handel.",
    image: "/images/tverbakken-gard/hero.jpg",
    tags: ["Nettside", "Foto", "Strategi"],
  },
];

export default function ProsjekterPage() {
  return (
    <>
      <HomeRevealObserver />
      <HomeNav />
      <main>
        <section className="home-section" style={{ paddingTop: "clamp(120px, 14vw, 180px)" }}>
          <div className="wrap">
            <div
              className="home-section-head reveal"
              style={{ marginBottom: 56, maxWidth: "640px" }}
            >
              <span className="section-label">Prosjekter</span>
              <h2>Caser fra ekte kunder.</h2>
              <p>
                Et utvalg av det vi har laget for lokale bedrifter, fra
                kjøreskole og artist til gård og frisør.
              </p>
            </div>

            <div className="prosjekter-grid">
              {allCases.map((c, i) => (
                <a
                  key={c.href}
                  href={c.href}
                  className="home-case-card reveal"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <div
                    className="home-case-card-image"
                    style={{
                      backgroundImage: `url('${c.image}')`,
                      backgroundPosition: c.imagePosition ?? "center",
                    }}
                    aria-hidden="true"
                  >
                    <span className="home-case-card-overline">{c.overline}</span>
                  </div>
                  <div className="home-case-card-body">
                    <h3>{c.title}</h3>
                    <p>{c.description}</p>
                    <div className="home-case-card-tags">
                      {c.tags.map((t) => (
                        <span key={t}>{t}</span>
                      ))}
                    </div>
                    <span className="home-case-card-link">
                      Se casen <Arrow />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <HomeFooter />
    </>
  );
}
