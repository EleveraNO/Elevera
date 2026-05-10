"use client";

import "./service.css";
import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import Arrow from "./home/Arrow";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY";

interface FAQ {
  q: string;
  a: string;
}

interface Stat {
  stat: string;
  label: string;
}

interface ServicePageProps {
  badge: string;
  title: string;
  titleAccent: string;
  titleSuffix?: string;
  description: string;
  included: string[];
  includedLabel?: string;
  includedHeading?: string;
  includedSubtext?: string;
  whyTitle: string;
  whyText: string[];
  stats: Stat[];
  faqs: FAQ[];
  ctaHeading: string;
  aiSummary?: string;
  children?: ReactNode;
  heroVideo?: string;
  heroPoster?: string;
}

function FAQItem({
  faq,
  open,
  onToggle,
}: {
  faq: FAQ;
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="svc-faq-item">
      <button
        type="button"
        className={`svc-faq-q${open ? " open" : ""}`}
        onClick={onToggle}
        aria-expanded={open}
      >
        <span>{faq.q}</span>
        <motion.span
          className="svc-faq-plus"
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          +
        </motion.span>
      </button>
      {open && (
        <motion.div
          className="svc-faq-a"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.25, ease }}
        >
          {faq.a}
        </motion.div>
      )}
    </div>
  );
}

export default function ServicePageLayout({
  badge,
  title,
  titleAccent,
  titleSuffix,
  description,
  included,
  whyTitle,
  whyText,
  stats,
  faqs,
  ctaHeading,
  includedLabel,
  includedHeading,
  includedSubtext,
  aiSummary,
  children,
  heroVideo,
  heroPoster,
}: ServicePageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className={`svc-hero${heroVideo ? " svc-hero--video" : ""}`}>
        {heroVideo && (
          <video
            className="svc-hero-video"
            autoPlay
            loop
            muted
            playsInline
            poster={heroPoster}
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
        <div className="svc-hero-bg" aria-hidden="true" />
        <div className="wrap svc-hero-inner">
          <motion.span
            className="svc-hero-badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
          >
            {badge}
          </motion.span>

          <motion.h1
            className="svc-hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
          >
            {title}{" "}
            <em className="svc-hero-title-accent">{titleAccent}</em>
            {titleSuffix && <> {titleSuffix}</>}
          </motion.h1>

          <div className="svc-hero-grid">
            <div>
              <motion.p
                className="svc-hero-desc"
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease }}
              >
                {description}
              </motion.p>
              <motion.div
                className="svc-hero-ctas"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease }}
              >
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Book møte
                  <Arrow />
                </a>
                <a href="/#priser" className="btn btn-ghost">
                  Se priser
                </a>
              </motion.div>
            </div>

            <div className="svc-hero-meta">
              <div className="svc-hero-fresh">
                <span>Sist oppdatert: april 2026</span>
                <span aria-hidden="true">·</span>
                <span>Elevera, vekstbyrå i Ålesund</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Included */}
      <section className="svc-section svc-included">
        <div className="wrap">
          <div className="svc-section-head">
            <div>
              <span className="section-label">{includedLabel ?? "Inkludert"}</span>
              <h2>{includedHeading ?? "Hva du får"}</h2>
            </div>
            <p className="lead">
              {includedSubtext ?? "Alt dette er inkludert i leveransen."}
            </p>
          </div>

          <ul className="svc-included-grid">
            {included.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.04, ease }}
              >
                <span className="svc-check" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M4 8.5l2.5 2.5L12 5.5"
                      stroke="#F7F4EC"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why */}
      <section className="svc-section svc-why">
        <div className="wrap">
          <div className="svc-why-grid">
            <motion.div
              className="svc-why-copy"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease }}
            >
              <span className="section-label">Hvorfor</span>
              <h2>{whyTitle}</h2>
              {whyText.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </motion.div>

            <div className="svc-stats">
              {stats.map((item, i) => (
                <motion.div
                  key={i}
                  className="svc-stat"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease }}
                >
                  <div className="svc-stat-num">{item.stat}</div>
                  <div className="svc-stat-label">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {children}

      {/* FAQ */}
      <section className="svc-section svc-faq">
        <div className="wrap">
          <div className="svc-faq-head">
            <span className="section-label">FAQ</span>
            <h2>Vanlige spørsmål</h2>
          </div>
          <div className="svc-faq-list">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                open={openFaq === i}
                onToggle={() => setOpenFaq(openFaq === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Package bridge */}
      <section className="svc-section svc-bridge">
        <div className="wrap">
          <div className="svc-bridge-head">
            <span className="section-label">Priser</span>
            <h2>Denne tjenesten inngår i alle pakkene</h2>
            <p>
              Du kan kjøpe tjenesten enkeltvis, eller få den som en del av en
              månedspakke der vi tar hånd om alt.
            </p>
          </div>

          <div className="svc-bridge-grid">
            {[
              {
                name: "Start",
                price: "7 900",
                desc: "Nettside, bilder og grunnleggende synlighet",
                featured: false,
              },
              {
                name: "Vekst",
                price: "14 900",
                desc: "Alt i Start, pluss innhold, publisering og SEO",
                featured: true,
              },
              {
                name: "Partner",
                price: "22 900",
                desc: "Alt i Vekst, pluss annonser, drone og strategi",
                featured: false,
              },
            ].map((pkg) => (
              <a
                key={pkg.name}
                href="/#priser"
                className={`svc-pkg${pkg.featured ? " featured" : ""}`}
              >
                {pkg.featured && (
                  <span className="svc-pkg-badge">Mest populær</span>
                )}
                <div className="svc-pkg-price">
                  <span className="svc-pkg-from">Fra</span>
                  <span className="svc-pkg-amount">{pkg.price} kr</span>
                  <span className="svc-pkg-period">/mnd</span>
                </div>
                <h3 className="svc-pkg-name">{pkg.name}</h3>
                <p className="svc-pkg-desc">{pkg.desc}</p>
                <span className="svc-pkg-cta">
                  Se pakken <Arrow />
                </span>
              </a>
            ))}
          </div>

          <p className="svc-bridge-foot">
            Trenger du bare denne tjenesten?{" "}
            <a href="/#priser">Se enkelttjenester og priser.</a>
          </p>
        </div>
      </section>

      {/* AI summary (kort fortalt) */}
      {aiSummary && (
        <section className="svc-section svc-summary">
          <div className="wrap">
            <div className="svc-summary-card">
              <span className="section-label">Kort fortalt</span>
              <p>{aiSummary}</p>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="svc-section svc-cta">
        <div className="wrap">
          <div className="svc-cta-card">
            <h2>{ctaHeading}</h2>
            <p>
              Book en uforpliktende samtale eller ring direkte. Vi svarer innen
              24 timer på hverdager.
            </p>
            <div className="svc-cta-actions">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Book møte
                <Arrow />
              </a>
              <a href="tel:+4794974165" className="btn btn-ghost svc-cta-phone">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                +47 949 74 165
              </a>
            </div>
            <p className="svc-cta-trust">
              Eller send en e-post til{" "}
              <a href="mailto:tverbakk@elevera.no">tverbakk@elevera.no</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
