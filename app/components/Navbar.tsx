"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const tjenester = [
  { label: "Nettside", href: "/tjenester/nettside-alesund" },
  { label: "Foto & Video", href: "/tjenester/foto-og-video-alesund" },
  { label: "Annonsering", href: "/tjenester/annonsering-alesund" },
  { label: "SEO", href: "/tjenester/seo-alesund" },
  { label: "Sosiale medier", href: "/tjenester/sosiale-medier-alesund" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const heroHeight = window.innerHeight * 0.85;
      setScrolled(y > heroHeight);
      setHidden(y > heroHeight + 100 && y > lastScrollY.current);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    function handleEscape(e: KeyboardEvent) {
      if (e.key === "Escape") setDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(19,19,18,0.88)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        transform: hidden && !menuOpen ? "translateY(-100%)" : "translateY(0)",
        opacity: scrolled ? 1 : 0,
        pointerEvents: scrolled ? "auto" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(77,70,53,0.28)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 20px 40px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-20">
        {/* Logo */}
        <a href="/" aria-label="Elevera – til forsiden">
          <Logo />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-9 md:flex">
          {["Hjem", "Kontakt"].map((label, i) => (
            <a
              key={label}
              href={i === 0 ? "/" : "/#kontakt"}
              className="text-sm font-medium transition-colors duration-200"
              style={{ color: "#d0c5af", fontFamily: "var(--font-noto-serif), serif" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#f2ca50")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#d0c5af")}
            >
              {label}
            </a>
          ))}

          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex cursor-pointer items-center gap-1 text-sm font-medium transition-colors duration-200"
              style={{ color: "#d0c5af", fontFamily: "var(--font-noto-serif), serif" }}
              onClick={() => setDropdownOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#f2ca50")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#d0c5af")}
            >
              Tjenester
              <svg
                className={`h-3 w-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-1/2 top-full w-52 -translate-x-1/2 pt-2">
                <div
                  className="py-2 shadow-xl"
                  style={{ border: "1px solid rgba(77,70,53,0.25)", background: "#1c1c1a", borderRadius: "2px" }}
                >
                  {tjenester.map((t) => (
                    <a
                      key={t.href}
                      href={t.href}
                      className="block px-4 py-2.5 text-sm transition-colors duration-150"
                      style={{ color: "#d0c5af" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#f2ca50";
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(242,202,80,0.06)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#d0c5af";
                        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
                      }}
                    >
                      {t.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-sm px-6 py-2.5 text-sm font-bold transition-all duration-200 active:scale-95"
            style={{ background: "#d4af37", color: "#3c2f00" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#f2ca50";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 0 20px rgba(212,175,55,0.35)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.background = "#d4af37";
              (e.currentTarget as HTMLAnchorElement).style.boxShadow = "none";
            }}
          >
            Start samtalen
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="flex min-h-[44px] min-w-[44px] cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meny"
          aria-expanded={menuOpen}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 w-6 transition-all duration-200 ${
                i === 0 ? (menuOpen ? "translate-y-2 rotate-45" : "") :
                i === 1 ? (menuOpen ? "opacity-0" : "") :
                (menuOpen ? "-translate-y-2 -rotate-45" : "")
              }`}
              style={{ background: "#e5e2de" }}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="overflow-hidden md:hidden"
            style={{ borderTop: "1px solid rgba(77,70,53,0.2)", background: "#131312" }}
          >
            <div className="flex flex-col gap-4 px-6 py-5">
              <a href="/" className="text-sm" style={{ color: "#d0c5af" }} onClick={() => setMenuOpen(false)}>Hjem</a>
              <div className="border-t pt-4" style={{ borderColor: "rgba(77,70,53,0.2)" }}>
                <p className="mb-2 text-[10px] font-bold uppercase tracking-widest" style={{ color: "rgba(208,197,175,0.4)" }}>Tjenester</p>
                {tjenester.map((t) => (
                  <a key={t.href} href={t.href} className="block py-2 text-sm" style={{ color: "#d0c5af" }} onClick={() => setMenuOpen(false)}>{t.label}</a>
                ))}
              </div>
              <a href="/#kontakt" className="text-sm" style={{ color: "#d0c5af" }} onClick={() => setMenuOpen(false)}>Kontakt</a>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
                target="_blank" rel="noopener noreferrer"
                className="mt-2 rounded-sm px-5 py-2.5 text-center text-sm font-bold"
                style={{ background: "#d4af37", color: "#3c2f00" }}
                onClick={() => setMenuOpen(false)}
              >
                Start samtalen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
