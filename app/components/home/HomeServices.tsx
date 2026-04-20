"use client";

import { useState } from "react";

type ServiceItem = {
  num: string;
  title: string;
  description: string;
  href: string;
  /** Which side of the video this label sits on */
  side: "left" | "right";
  /** Display order within its column (1 = top) */
  order: number;
};

const services: ServiceItem[] = [
  {
    num: "01",
    title: "Foto & Video",
    description:
      "Foto, video, drone og klipp som faktisk blir brukt. Filmet på lokasjon, klippet for kanalen det skal ut på.",
    href: "/tjenester/foto-og-video-alesund",
    side: "left",
    order: 1,
  },
  {
    num: "02",
    title: "Sosiale medier",
    description:
      "Strategi, publisering og måling. Fra null til synlig. Vi jobber med kanalen som faktisk treffer målgruppen din.",
    href: "/tjenester/sosiale-medier-alesund",
    side: "right",
    order: 1,
  },
  {
    num: "03",
    title: "Nettside",
    description:
      "Sider som gjør besøk om til kontaktforespørsler. Raskt, ryddig, laget for å bli funnet og for å få kontakt.",
    href: "/tjenester/nettside-alesund",
    side: "right",
    order: 2,
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Bli funnet av folk som allerede leter etter tjenesten din. Lokalt søk, struktur og innhold som rangerer.",
    href: "/tjenester/seo-alesund",
    side: "left",
    order: 2,
  },
  {
    num: "05",
    title: "Digital annonsering",
    description:
      "Annonser på Meta og Google som gir målbare leads, ikke bare visninger. Testet, målt og justert hver uke.",
    href: "/tjenester/annonsering-alesund",
    side: "right",
    order: 3,
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
  return (
    <a
      href={item.href}
      className={`svc-side-item svc-side-item-${item.side}${active === item.num ? " active" : ""}`}
      onMouseEnter={() => setActive(item.num)}
      onMouseLeave={() => setActive(null)}
      onFocus={() => setActive(item.num)}
      onBlur={() => setActive(null)}
    >
      <div className="svc-side-head">
        <h3>{item.title}</h3>
        <span className="svc-side-num">{item.num}</span>
      </div>
      <p>{item.description}</p>
    </a>
  );
}

export default function HomeServices() {
  const [active, setActive] = useState<string | null>(null);

  const leftItems = services
    .filter((s) => s.side === "left")
    .sort((a, b) => a.order - b.order);
  const rightItems = services
    .filter((s) => s.side === "right")
    .sort((a, b) => a.order - b.order);

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
          className={`svc-radial reveal${active ? " is-active" : ""}`}
          onMouseLeave={() => setActive(null)}
        >
          <div className="svc-side-col svc-side-col-left">
            {leftItems.map((s) => (
              <ServiceLabel
                key={s.num}
                item={s}
                active={active}
                setActive={setActive}
              />
            ))}
          </div>

          <div className="svc-radial-video-wrap" aria-hidden="true">
            <video
              className="svc-radial-video"
              src="/videos/tjenester.mp4"
              poster="/videos/tjenester-poster.jpg"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          </div>

          <div className="svc-side-col svc-side-col-right">
            {rightItems.map((s) => (
              <ServiceLabel
                key={s.num}
                item={s}
                active={active}
                setActive={setActive}
              />
            ))}
          </div>
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
