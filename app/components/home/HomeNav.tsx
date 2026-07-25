"use client";

import { useEffect, useState } from "react";
import LogoMark from "./LogoMark";
import Arrow from "./Arrow";

const BOOKING_URL =
  "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY";

const SPY_SECTIONS = ["tjenester", "caser", "priser", "om"];

export default function HomeNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = SPY_SECTIONS.map((id) => document.getElementById(id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (!sections.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className={`home-nav${scrolled ? " scrolled" : ""}`}>
      <div className="wrap home-nav-inner">
        <a href="/" className="home-logo" aria-label="Elevera hjem">
          <LogoMark />
          Elevera
        </a>
        <div className="home-nav-links">
          <a href="/#tjenester" className={active === "tjenester" ? "active" : undefined}>Tjenester</a>
          <a href="/#caser" className={active === "caser" ? "active" : undefined}>Caser</a>
          <a href="/#priser" className={active === "priser" ? "active" : undefined}>Priser</a>
          <a href="/#om" className={active === "om" ? "active" : undefined}>Om</a>
          <a href="https://app.elevera.no" target="_blank" rel="noopener noreferrer">
            Kundeportal
          </a>
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="home-nav-cta"
          >
            Book møte <Arrow size={12} />
          </a>
        </div>
        <button
          type="button"
          className="home-nav-toggle"
          aria-label="Meny"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
      <div className={`home-nav-mobile wrap${open ? " open" : ""}`}>
        <a href="/#tjenester" onClick={() => setOpen(false)}>
          Tjenester
        </a>
        <a href="/#caser" onClick={() => setOpen(false)}>
          Caser
        </a>
        <a href="/#priser" onClick={() => setOpen(false)}>
          Priser
        </a>
        <a href="/#om" onClick={() => setOpen(false)}>
          Om
        </a>
        <a
          href="https://app.elevera.no"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Kundeportal
        </a>
        <a
          href={BOOKING_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => setOpen(false)}
        >
          Book møte →
        </a>
      </div>
    </nav>
  );
}
