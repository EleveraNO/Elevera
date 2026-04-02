"use client";

import { useEffect, useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Logo from "./Logo";

const tjenester = [
  { label: "Videoproduksjon", href: "/tjenester/videoproduksjon-alesund" },
  { label: "Fotografering", href: "/tjenester/fotografering-alesund" },
  { label: "Nettside", href: "/tjenester/nettside-alesund" },
  { label: "Annonsering", href: "/tjenester/annonsering-alesund" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click or Escape
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
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "shadow-lg" : ""
      }`}
      style={
        scrolled
          ? {
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(9,9,11,0.85)",
              backdropFilter: "blur(12px)",
            }
          : { borderBottom: "1px solid transparent", background: "transparent" }
      }
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" aria-label="Elevera – til forsiden">
          <Logo />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="/"
            className="text-sm transition-colors duration-200"
            style={{ color: "rgba(242,237,230,0.55)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F2EDE6")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(242,237,230,0.55)")}
          >
            Hjem
          </a>

          {/* Tjenester dropdown */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="flex cursor-pointer items-center gap-1 text-sm transition-colors duration-200"
              style={{ color: "rgba(242,237,230,0.55)" }}
              onClick={() => setDropdownOpen((v) => !v)}
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "#F2EDE6")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.color = "rgba(242,237,230,0.55)")}
            >
              Tjenester
              <svg
                className={`h-3.5 w-3.5 transition-transform ${dropdownOpen ? "rotate-180" : ""}`}
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <div className="absolute left-1/2 top-full w-52 -translate-x-1/2 pt-2">
                <div
                  className="rounded-xl py-2 shadow-xl"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "#111115",
                  }}
                >
                  {tjenester.map((t) => (
                    <a
                      key={t.href}
                      href={t.href}
                      className="block px-4 py-2.5 text-sm transition-colors duration-150"
                      style={{ color: "rgba(242,237,230,0.55)" }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "#F2EDE6";
                        (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.04)";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLAnchorElement).style.color = "rgba(242,237,230,0.55)";
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

          <a
            href="/#kontakt"
            className="text-sm transition-colors duration-200"
            style={{ color: "rgba(242,237,230,0.55)" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "#F2EDE6")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "rgba(242,237,230,0.55)")}
          >
            Kontakt
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{ background: "#2DD4BF", color: "#09090B" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#14B8A6")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.background = "#2DD4BF")}
          >
            Book møte
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="flex min-h-[44px] min-w-[44px] cursor-pointer flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meny"
          aria-expanded={menuOpen}
        >
          <span
            className={`block h-0.5 w-6 transition-all duration-200 ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
            style={{ background: "#F2EDE6" }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-200 ${menuOpen ? "opacity-0" : ""}`}
            style={{ background: "#F2EDE6" }}
          />
          <span
            className={`block h-0.5 w-6 transition-all duration-200 ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
            style={{ background: "#F2EDE6" }}
          />
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
            style={{
              borderTop: "1px solid rgba(255,255,255,0.07)",
              background: "#09090B",
            }}
          >
            <div className="flex flex-col gap-4 px-6 py-4">
              <a
                href="/"
                className="text-sm"
                style={{ color: "rgba(242,237,230,0.6)" }}
                onClick={() => setMenuOpen(false)}
              >
                Hjem
              </a>
              <div
                className="border-t pt-4"
                style={{ borderColor: "rgba(255,255,255,0.07)" }}
              >
                <p
                  className="mb-2 text-[10px] font-semibold uppercase tracking-widest"
                  style={{ color: "rgba(242,237,230,0.28)" }}
                >
                  Tjenester
                </p>
                {tjenester.map((t) => (
                  <a
                    key={t.href}
                    href={t.href}
                    className="block py-2 text-sm"
                    style={{ color: "rgba(242,237,230,0.6)" }}
                    onClick={() => setMenuOpen(false)}
                  >
                    {t.label}
                  </a>
                ))}
              </div>
              <a
                href="/#kontakt"
                className="text-sm"
                style={{ color: "rgba(242,237,230,0.6)" }}
                onClick={() => setMenuOpen(false)}
              >
                Kontakt
              </a>
              <a
                href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold"
                style={{ background: "#2DD4BF", color: "#09090B" }}
                onClick={() => setMenuOpen(false)}
              >
                Book møte
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
