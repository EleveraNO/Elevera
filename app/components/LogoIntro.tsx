"use client";

import { useEffect, useState } from "react";

export default function LogoIntro() {
  const [visible, setVisible] = useState(false);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("elevera_intro_seen")) return;
    setVisible(true);
    const fadeTimer = setTimeout(() => setFading(true), 2900);
    const hideTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("elevera_intro_seen", "1");
    }, 3700);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-[#0a0a0a] transition-opacity duration-700 ${
        fading ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="w-64 sm:w-80 md:w-96">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 672.82 271.78">
          <defs>
            <style>{`
              @keyframes elevera-draw {
                from { stroke-dashoffset: 1500; }
                to   { stroke-dashoffset: 0; }
              }
              @keyframes elevera-fill {
                from { fill-opacity: 0; }
                to   { fill-opacity: 1; }
              }
              @keyframes elevera-stroke-out {
                from { opacity: 1; }
                to   { opacity: 0; }
              }
              @keyframes elevera-text {
                from { opacity: 0; }
                to   { opacity: 1; }
              }
              .ei-fill {
                fill-opacity: 0;
                animation: elevera-fill 0.5s ease-out 2.0s forwards;
              }
              .ei-stroke {
                fill: none;
                stroke: white;
                stroke-width: 2.5;
                stroke-linejoin: round;
                stroke-linecap: round;
                stroke-dasharray: 1500;
                stroke-dashoffset: 1500;
                animation:
                  elevera-draw 1.8s cubic-bezier(0.4,0,0.2,1) 0.2s forwards,
                  elevera-stroke-out 0.35s ease-out 2.5s forwards;
              }
              .ei-text {
                opacity: 0;
                animation: elevera-text 0.7s ease-out 1.6s forwards;
              }
            `}</style>
          </defs>

          {/* Ikon fill */}
          <path
            className="ei-fill"
            fill="white"
            d="M89.02,132.38 L196.45,107.22 L243.83,130.01 L218.76,100.22 L233.36,93.71
               L251.31,109.57 L283.36,89.15 L322.59,105.44 L305.01,75.35 L343.45,50.86
               L396.05,78.63 L437.89,64.26 L577.14,132.38 L437.63,36.42 L409.07,55.8
               L349.36,15.05 L264.49,72.98 L241.99,60.93 Z"
          />

          {/* Ikon strek – tegnes gradvis */}
          <path
            className="ei-stroke"
            d="M89.02,132.38 L196.45,107.22 L243.83,130.01 L218.76,100.22 L233.36,93.71
               L251.31,109.57 L283.36,89.15 L322.59,105.44 L305.01,75.35 L343.45,50.86
               L396.05,78.63 L437.89,64.26 L577.14,132.38 L437.63,36.42 L409.07,55.8
               L349.36,15.05 L264.49,72.98 L241.99,60.93 Z"
          />

          {/* Tekst */}
          <text
            className="ei-text"
            fill="white"
            fontFamily="Montserrat-Bold, Montserrat"
            fontSize="130.67"
            fontWeight="700"
            transform="translate(0 237.02)"
          >
            <tspan letterSpacing=".05em" x="0" y="0">EL</tspan>
            <tspan letterSpacing=".04em" x="179.67" y="0">E</tspan>
            <tspan letterSpacing=".03em" x="272.58" y="0">V</tspan>
            <tspan letterSpacing=".05em" x="374.63" y="0">ERA</tspan>
          </text>
        </svg>
      </div>
    </div>
  );
}
