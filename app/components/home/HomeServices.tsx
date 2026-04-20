"use client";

import { useState } from "react";

type ServiceItem = {
  num: string;
  title: string;
  description: string;
  href: string;
  /** Hotspot position on the central image (0–100 percent) */
  hotspot: { x: number; y: number };
};

const services: ServiceItem[] = [
  {
    num: "01",
    title: "Foto & Video",
    description:
      "Foto, video, drone og klipp som faktisk blir brukt. Filmet på lokasjon, klippet for kanalen det skal ut på.",
    href: "/tjenester/foto-og-video-alesund",
    hotspot: { x: 34, y: 42 },
  },
  {
    num: "02",
    title: "Sosiale medier",
    description:
      "Strategi, publisering og måling. Fra null til synlig. Vi jobber med kanalen som faktisk treffer målgruppen din.",
    href: "/tjenester/sosiale-medier-alesund",
    hotspot: { x: 62, y: 22 },
  },
  {
    num: "03",
    title: "Nettside",
    description:
      "Sider som gjør besøk om til kontaktforespørsler. Raskt, ryddig, laget for å bli funnet og for å få kontakt.",
    href: "/tjenester/nettside-alesund",
    hotspot: { x: 76, y: 52 },
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Bli funnet av folk som allerede leter etter tjenesten din. Lokalt søk, struktur og innhold som rangerer.",
    href: "/tjenester/seo-alesund",
    hotspot: { x: 28, y: 78 },
  },
  {
    num: "05",
    title: "Digital annonsering",
    description:
      "Annonser på Meta og Google som gir målbare leads, ikke bare visninger. Testet, målt og justert hver uke.",
    href: "/tjenester/annonsering-alesund",
    hotspot: { x: 70, y: 80 },
  },
];

function ServiceLabel({
  item,
  active,
  setActive,
  align,
}: {
  item: ServiceItem;
  active: string | null;
  setActive: (n: string | null) => void;
  align: "left" | "right";
}) {
  return (
    <a
      href={item.href}
      className={`svc-radial-item svc-radial-item-${align}${active === item.num ? " active" : ""}`}
      onMouseEnter={() => setActive(item.num)}
      onMouseLeave={() => setActive(null)}
      onFocus={() => setActive(item.num)}
      onBlur={() => setActive(null)}
    >
      <div className="svc-radial-head">
        <h3>{item.title}</h3>
        <span className="svc-radial-num">{item.num}</span>
      </div>
      <p>{item.description}</p>
    </a>
  );
}

export default function HomeServices() {
  const [active, setActive] = useState<string | null>(null);
  const byNum = (n: string) => services.find((s) => s.num === n)!;

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
          className="svc-radial reveal"
          data-active={active ?? ""}
          onMouseLeave={() => setActive(null)}
        >
          <div className="svc-radial-col svc-radial-col-left">
            <ServiceLabel
              item={byNum("01")}
              active={active}
              setActive={setActive}
              align="left"
            />
            <ServiceLabel
              item={byNum("04")}
              active={active}
              setActive={setActive}
              align="left"
            />
          </div>

          <div className="svc-radial-center" aria-hidden="true">
            <div className="svc-radial-image">
              <div className="svc-radial-placeholder">
                <span className="svc-radial-placeholder-label">
                  Plass for illustrasjon
                </span>
              </div>
              {services.map((s) => (
                <button
                  key={s.num}
                  type="button"
                  tabIndex={-1}
                  className={`svc-hotspot${active === s.num ? " active" : ""}`}
                  style={{ left: `${s.hotspot.x}%`, top: `${s.hotspot.y}%` }}
                  onMouseEnter={() => setActive(s.num)}
                  onMouseLeave={() => setActive(null)}
                  aria-label={s.title}
                >
                  {s.num}
                </button>
              ))}
              {/* Decorative connecting lines */}
              <svg
                className="svc-radial-lines"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                {services.map((s) => (
                  <circle
                    key={s.num}
                    cx={s.hotspot.x}
                    cy={s.hotspot.y}
                    r="0.6"
                    className={`svc-radial-line-dot${active === s.num ? " active" : ""}`}
                  />
                ))}
              </svg>
            </div>
          </div>

          <div className="svc-radial-col svc-radial-col-right">
            <ServiceLabel
              item={byNum("02")}
              active={active}
              setActive={setActive}
              align="right"
            />
            <ServiceLabel
              item={byNum("03")}
              active={active}
              setActive={setActive}
              align="right"
            />
            <ServiceLabel
              item={byNum("05")}
              active={active}
              setActive={setActive}
              align="right"
            />
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
