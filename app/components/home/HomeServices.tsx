type Service = {
  index: string;
  title: string;
  href: string;
  description: string;
  icon: React.ReactNode;
};

const services: Service[] = [
  {
    index: "01",
    title: "Foto & Video",
    href: "/tjenester/foto-og-video-alesund",
    description:
      "Foto, video, drone og klipp som faktisk blir brukt. Filmet på lokasjon, klippet for kanalen det skal ut på.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="6" width="18" height="13" rx="1.5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="12.5" r="3.2" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8 6l1.5-2h5L16 6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    index: "02",
    title: "Sosiale medier",
    href: "/tjenester/sosiale-medier-alesund",
    description:
      "Strategi, publisering og måling. Fra null til synlig. Vi jobber med kanalen som faktisk treffer målgruppen din.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M4 19V8l8-4 8 4v11" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
        <path d="M9 19v-5h6v5" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="12" cy="10" r="1.4" fill="currentColor" />
      </svg>
    ),
  },
  {
    index: "03",
    title: "Nettside",
    href: "/tjenester/nettside-alesund",
    description:
      "Sider som gjør besøk om til kontaktforespørsler. Raskt, ryddig, laget for å bli funnet og for å få kontakt.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <rect x="3" y="5" width="18" height="14" rx="1.6" stroke="currentColor" strokeWidth="1.6" />
        <path d="M3 9h18" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="6" cy="7" r=".8" fill="currentColor" />
        <circle cx="8.5" cy="7" r=".8" fill="currentColor" />
      </svg>
    ),
  },
  {
    index: "04",
    title: "SEO",
    href: "/tjenester/seo-alesund",
    description:
      "Bli funnet av folk som allerede leter etter tjenesten din. Lokalt søk, struktur og innhold som rangerer.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
        <path d="M16 16l4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    index: "05",
    title: "Digital annonsering",
    href: "/tjenester/annonsering-alesund",
    description:
      "Annonser på Meta og Google som gir målbare leads, ikke bare visninger. Testet, målt og justert hver uke.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path d="M3 17L9 11l4 4 8-8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 7h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HomeServices() {
  return (
    <section id="tjenester" className="home-section">
      <div className="wrap">
        <div className="home-section-head">
          <div className="reveal">
            <span className="section-label">Tjenester</span>
            <h2>Fem tjenester. Samme mål: målbar vekst.</h2>
          </div>
          <p className="lead reveal">
            Vi setter opp det som faktisk trengs for din bedrift. Ikke en pakke,
            ikke en mal. Den enkleste kombinasjonen som faktisk virker for deg.
          </p>
        </div>

        <div className="home-services">
          {services.map((s, i) => (
            <a
              key={s.index}
              href={s.href}
              className="home-card reveal"
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              <div className="home-svc-head">
                <div className="home-svc-icon" aria-hidden="true">
                  {s.icon}
                </div>
                <span className="home-svc-index">{s.index}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
            </a>
          ))}
        </div>

        <div className="home-connector reveal">
          <div className="home-connector-glyph" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
          <div>
            <h3>En kanal alene fungerer sjelden.</h3>
            <p>
              De fleste kommer til oss med ett behov. Som regel viser det seg at
              to eller tre tjenester sammen gir mye sterkere resultater enn én
              alene. Vi setter opp det som faktisk trengs for din bedrift, ikke
              en pakke.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
