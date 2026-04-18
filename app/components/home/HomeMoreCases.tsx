import Arrow from "./Arrow";

const cases = [
  {
    href: "/prosjekter/cutoclock",
    overline: "Frisør · Ålesund",
    title: "Cut O' Clock",
    description:
      "Profesjonelle bilder og innhold for en ny frisørsalong som skulle sette seg i markedet.",
    image: "/images/cut-o-clock/Photo 1.jpg",
    tags: ["Foto", "Video", "Sosialt"],
  },
  {
    href: "/prosjekter/tverbakken-gard",
    overline: "Gård · Kjerringøy",
    title: "Tverbakken Gård",
    description:
      "Komplett nettside med nettbutikk for 10. generasjons gård på Kjerringøy — fra null til e-handel.",
    image: "/images/tverbakken-gard/sau-paa-fjell.jpg",
    tags: ["Nettside", "Foto", "Strategi"],
  },
];

export default function HomeMoreCases() {
  return (
    <section className="home-section home-more-cases">
      <div className="wrap">
        <div className="home-section-head reveal" style={{ marginBottom: 48 }}>
          <div>
            <span className="section-label">Flere caser</span>
            <h2>Det vi har laget for andre lokale bedrifter.</h2>
          </div>
        </div>

        <div className="home-case-grid">
          {cases.map((c, i) => (
            <a
              key={c.href}
              href={c.href}
              className="home-case-card reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div
                className="home-case-card-image"
                style={{ backgroundImage: `url('${c.image}')` }}
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
  );
}
