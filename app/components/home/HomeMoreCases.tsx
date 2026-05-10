import Arrow from "./Arrow";

type Case = {
  href: string;
  overline: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  imagePosition?: string;
};

const featuredCase: Case = {
  href: "/prosjekter/drive-trafikkskule",
  overline: "Trafikkskule · Sunnmøre",
  title: "Drive Trafikkskule",
  description:
    "Fra null følgere til 1 000 på syv dager, og 200 000 visninger første uke. Vi filmet kjøreskolens hverdag og klippet for TikTok, uten annonsebudsjett.",
  image: "/images/drive-trafikkskule/foto-3.jpg",
  imagePosition: "center 30%",
  tags: ["Innhold", "Sosiale Medier", "Strategi"],
};

const sideCases: Case[] = [
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

export default function HomeMoreCases() {
  return (
    <section className="home-section home-more-cases">
      <div className="wrap">
        <div className="home-section-head reveal" style={{ marginBottom: 28 }}>
          <div>
            <span className="section-label">Flere caser</span>
            <h2>Det vi har laget for andre lokale bedrifter.</h2>
          </div>
        </div>

        <div className="home-case-grid">
          <a
            href={featuredCase.href}
            className="home-case-card home-case-card-featured reveal"
          >
            <div
              className="home-case-card-image"
              style={{
                backgroundImage: `url('${featuredCase.image}')`,
                backgroundPosition: featuredCase.imagePosition ?? "center",
              }}
              aria-hidden="true"
            >
              <span className="home-case-card-overline">
                {featuredCase.overline}
              </span>
            </div>
            <div className="home-case-card-body">
              <h3>{featuredCase.title}</h3>
              <p>{featuredCase.description}</p>
              <div className="home-case-card-tags">
                {featuredCase.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <span className="home-case-card-link">
                Se casen <Arrow />
              </span>
            </div>
          </a>

          <div className="home-case-side-stack">
            {sideCases.map((c, i) => (
              <a
                key={c.href}
                href={c.href}
                className="home-case-card home-case-card-side reveal"
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
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
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="home-case-grid-foot reveal">
          <a href="/prosjekter" className="home-case-grid-foot-link">
            Se alle prosjekter <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
