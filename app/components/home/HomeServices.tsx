"use client";

import { useState } from "react";

type ServiceItem = {
  num: string;
  title: string;
  description: string;
  href: string;
  /** Vertical position of the label within the stage (0–100% from top) */
  top: number;
  /** Which edge the label anchors to */
  anchor: "left" | "right";
};

const services: ServiceItem[] = [
  {
    num: "01",
    title: "Foto & Video",
    description:
      "Foto, video, drone og klipp som faktisk blir brukt. Filmet på lokasjon, klippet for kanalen det skal ut på.",
    href: "/tjenester/foto-og-video-alesund",
    top: 20,
    anchor: "left",
  },
  {
    num: "02",
    title: "Sosiale medier",
    description:
      "Strategi, publisering og måling. Fra null til synlig. Vi jobber med kanalen som faktisk treffer målgruppen din.",
    href: "/tjenester/sosiale-medier-alesund",
    top: 6,
    anchor: "right",
  },
  {
    num: "03",
    title: "Nettside",
    description:
      "Sider som gjør besøk om til kontaktforespørsler. Raskt, ryddig, laget for å bli funnet og for å få kontakt.",
    href: "/tjenester/nettside-alesund",
    top: 30,
    anchor: "right",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Bli funnet av folk som allerede leter etter tjenesten din. Lokalt søk, struktur og innhold som rangerer.",
    href: "/tjenester/seo-alesund",
    top: 62,
    anchor: "left",
  },
  {
    num: "05",
    title: "Digital annonsering",
    description:
      "Annonser på Meta og Google som gir målbare leads, ikke bare visninger. Testet, målt og justert hver uke.",
    href: "/tjenester/annonsering-alesund",
    top: 62,
    anchor: "right",
  },
];

function ServiceLabel({
  item,
  active,
  setActive,
}: {
  item: ServiceItem;
  active: string | null;
  setActive: (n: string | null) => void;
}) {
  const style: React.CSSProperties = {
    top: `${item.top}%`,
    ...(item.anchor === "left" ? { left: 0 } : { right: 0 }),
  };

  return (
    <a
      href={item.href}
      className={`svc-stage-label svc-stage-label-${item.anchor}${active === item.num ? " active" : ""}`}
      style={style}
      onMouseEnter={() => setActive(item.num)}
      onMouseLeave={() => setActive(null)}
      onFocus={() => setActive(item.num)}
      onBlur={() => setActive(null)}
    >
      <div className="svc-stage-head">
        <h3>{item.title}</h3>
        <span className="svc-stage-num">{item.num}</span>
      </div>
      <p>{item.description}</p>
    </a>
  );
}

export default function HomeServices() {
  const [active, setActive] = useState<string | null>(null);

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

        <div
          className="svc-stage reveal"
          data-active={active ?? ""}
          onMouseLeave={() => setActive(null)}
        >
          <div className="svc-stage-video-wrap" aria-hidden="true">
            <video
              className="svc-stage-video"
              src="/videos/tjenester.mp4"
              poster="/videos/tjenester-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          {services.map((s) => (
            <ServiceLabel
              key={s.num}
              item={s}
              active={active}
              setActive={setActive}
            />
          ))}
        </div>

        {/* Mobile fallback — simple stacked list */}
        <div className="svc-stage-stack">
          {services.map((s) => (
            <a
              key={`stack-${s.num}`}
              href={s.href}
              className="svc-stack-item"
              onMouseEnter={() => setActive(s.num)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="svc-stage-head">
                <h3>{s.title}</h3>
                <span className="svc-stage-num">{s.num}</span>
              </div>
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
