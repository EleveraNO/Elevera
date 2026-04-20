"use client";

import { useState } from "react";

type ServiceItem = {
  num: string;
  title: string;
  description: string;
  href: string;
  /** Hotspot position on the central video (0–100 percent) */
  hotspot: { x: number; y: number };
  /** Label position over the video (0–100 percent of the video container) */
  label: { x: number; y: number };
  /** Which side the title number sits on */
  align: "left" | "right";
};

const services: ServiceItem[] = [
  {
    num: "01",
    title: "Foto & Video",
    description:
      "Foto, video, drone og klipp som faktisk blir brukt. Filmet på lokasjon, klippet for kanalen det skal ut på.",
    href: "/tjenester/foto-og-video-alesund",
    hotspot: { x: 38, y: 42 },
    label: { x: 4, y: 22 },
    align: "left",
  },
  {
    num: "02",
    title: "Sosiale medier",
    description:
      "Strategi, publisering og måling. Fra null til synlig. Vi jobber med kanalen som faktisk treffer målgruppen din.",
    href: "/tjenester/sosiale-medier-alesund",
    hotspot: { x: 56, y: 22 },
    label: { x: 66, y: 12 },
    align: "right",
  },
  {
    num: "03",
    title: "Nettside",
    description:
      "Sider som gjør besøk om til kontaktforespørsler. Raskt, ryddig, laget for å bli funnet og for å få kontakt.",
    href: "/tjenester/nettside-alesund",
    hotspot: { x: 70, y: 50 },
    label: { x: 78, y: 38 },
    align: "right",
  },
  {
    num: "04",
    title: "SEO",
    description:
      "Bli funnet av folk som allerede leter etter tjenesten din. Lokalt søk, struktur og innhold som rangerer.",
    href: "/tjenester/seo-alesund",
    hotspot: { x: 32, y: 78 },
    label: { x: 4, y: 70 },
    align: "left",
  },
  {
    num: "05",
    title: "Digital annonsering",
    description:
      "Annonser på Meta og Google som gir målbare leads, ikke bare visninger. Testet, målt og justert hver uke.",
    href: "/tjenester/annonsering-alesund",
    hotspot: { x: 66, y: 78 },
    label: { x: 66, y: 76 },
    align: "right",
  },
];

function ServiceLabel({
  item,
  active,
  setActive,
  overlay,
}: {
  item: ServiceItem;
  active: string | null;
  setActive: (n: string | null) => void;
  overlay: boolean;
}) {
  const className = overlay
    ? `svc-fw-label svc-fw-label-${item.align}${active === item.num ? " active" : ""}`
    : `svc-stack-item${active === item.num ? " active" : ""}`;

  const overlayStyle = overlay
    ? { left: `${item.label.x}%`, top: `${item.label.y}%` }
    : undefined;

  return (
    <a
      href={item.href}
      className={className}
      style={overlayStyle}
      onMouseEnter={() => setActive(item.num)}
      onMouseLeave={() => setActive(null)}
      onFocus={() => setActive(item.num)}
      onBlur={() => setActive(null)}
    >
      <div className="svc-fw-head">
        <h3>{item.title}</h3>
        <span className="svc-fw-num">{item.num}</span>
      </div>
      <p>{item.description}</p>
    </a>
  );
}

export default function HomeServices() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="tjenester" className="home-section svc-fw-section">
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
      </div>

      {/* Full-width visual with overlaid labels (desktop only) */}
      <div className="svc-fw-bleed reveal">
        <div
          className="svc-fw-card"
          data-active={active ?? ""}
          onMouseLeave={() => setActive(null)}
        >
          <video
            className="svc-fw-video"
            src="/videos/tjenester.mp4"
            poster="/videos/tjenester-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            aria-hidden="true"
          />
          <div className="svc-fw-vignette" aria-hidden="true" />

          {/* Labels — absolutely positioned over the video on desktop.
              The video itself has 01–05 numbered markers baked into the
              illustration, so we don't render extra hotspot buttons. */}
          {services.map((s) => (
            <ServiceLabel
              key={`label-${s.num}`}
              item={s}
              active={active}
              setActive={setActive}
              overlay
            />
          ))}
        </div>
      </div>

      {/* Stacked fallback for mobile / narrow screens */}
      <div className="wrap svc-stack">
        {services.map((s) => (
          <ServiceLabel
            key={`stack-${s.num}`}
            item={s}
            active={active}
            setActive={setActive}
            overlay={false}
          />
        ))}
      </div>

      <div className="wrap">
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
