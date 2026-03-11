"use client";

import { useState } from "react";
import Logo from "./Logo";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#">
          <Logo />
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            Hjem
          </a>
          <a
            href="#tjenester"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            Tjenester
          </a>
          <a
            href="#kontakt"
            className="text-sm text-white/70 transition-colors hover:text-white"
          >
            Kontakt
          </a>
        </div>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="#kontakt"
            className="rounded-full bg-[#7c3aed] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#6d28d9] hover:shadow-lg hover:shadow-[#7c3aed]/25"
          >
            Book møte
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Meny"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-all ${menuOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/10 bg-[#0a0a0a] px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            <a
              href="#"
              className="text-sm text-white/70 transition-colors hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Hjem
            </a>
            <a
              href="#tjenester"
              className="text-sm text-white/70 transition-colors hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Tjenester
            </a>
            <a
              href="#kontakt"
              className="text-sm text-white/70 transition-colors hover:text-white"
              onClick={() => setMenuOpen(false)}
            >
              Kontakt
            </a>
            <a
              href="#kontakt"
              className="mt-2 rounded-full bg-[#7c3aed] px-5 py-2.5 text-center text-sm font-semibold text-white"
              onClick={() => setMenuOpen(false)}
            >
              Book møte
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
