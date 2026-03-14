"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function RisingGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const SPACING = 52;
    let raf: number;
    let t = 0;

    const draw = () => {
      t += 0.4;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const cols = Math.ceil(canvas.width / SPACING) + 1;
      const rows = Math.ceil(canvas.height / SPACING) + 2;
      const offsetY = t % SPACING;
      // World-space row index — stays consistent as grid scrolls
      const scrolledRows = Math.floor(t / SPACING);

      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const maxDist = Math.sqrt(cx * cx + cy * cy);

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const x = col * SPACING;
          const y = row * SPACING - offsetY;

          // Distance from center → fade out at edges
          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const edgeFade = Math.max(0, 1 - dist / maxDist) * 0.85 + 0.15;

          // Slow ripple wave from center
          const wave = Math.sin(dist * 0.018 - t * 0.06) * 0.5 + 0.5;

          // Use world row so pattern stays identical as rows scroll in/out
          const worldRow = row + scrolledRows;
          const seed = Math.sin(col * 127.1 + worldRow * 311.7) * 43758.5453;
          const rand = seed - Math.floor(seed);
          const isBright = rand > 0.94;

          const baseAlpha = 0.1 + wave * 0.12;
          const alpha = isBright
            ? Math.min(1, baseAlpha * 4.5 * edgeFade)
            : baseAlpha * edgeFade;

          const radius = isBright ? 2.2 : 1.3;

          // Colour: mostly purple, occasionally blue/violet
          const colorSeed = Math.sin(col * 53.3 + worldRow * 97.1) * 43758.5;
          const colorRand = colorSeed - Math.floor(colorSeed);
          const color =
            colorRand > 0.75
              ? "96,165,250"
              : colorRand > 0.55
              ? "167,139,250"
              : "124,58,237";

          ctx.beginPath();
          ctx.arc(x, y, radius, 0, Math.PI * 2);

          if (isBright) {
            ctx.shadowBlur = 10;
            ctx.shadowColor = `rgba(${color},0.9)`;
          }

          ctx.fillStyle = `rgba(${color},${alpha})`;
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}

// Animated SVG growth curve drawn across background
function GrowthCurve() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 1200 700"
      fill="none"
    >
      {/* Main growth curve */}
      <motion.path
        d="M -50 620 C 150 580, 280 500, 420 420 C 560 340, 620 260, 720 200 C 820 140, 920 110, 1100 70 C 1150 60, 1200 55, 1260 50"
        stroke="url(#growthGrad)"
        strokeWidth="1.5"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3, delay: 0.8, ease: "easeOut" }}
      />
      {/* Subtle fill under curve */}
      <motion.path
        d="M -50 620 C 150 580, 280 500, 420 420 C 560 340, 620 260, 720 200 C 820 140, 920 110, 1100 70 C 1150 60, 1200 55, 1260 50 L 1260 750 L -50 750 Z"
        fill="url(#growthFill)"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5, delay: 1.5, ease: "easeOut" }}
      />
      {/* Secondary fainter curve */}
      <motion.path
        d="M -50 680 C 200 650, 350 580, 500 500 C 640 430, 720 360, 850 290 C 950 235, 1060 195, 1260 160"
        stroke="url(#growthGrad2)"
        strokeWidth="0.8"
        fill="none"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3.5, delay: 1.2, ease: "easeOut" }}
      />
      <defs>
        <linearGradient id="growthGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(124,58,237,0)" />
          <stop offset="30%" stopColor="rgba(124,58,237,0.25)" />
          <stop offset="70%" stopColor="rgba(96,165,250,0.3)" />
          <stop offset="100%" stopColor="rgba(167,139,250,0.1)" />
        </linearGradient>
        <linearGradient id="growthGrad2" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgba(96,165,250,0)" />
          <stop offset="40%" stopColor="rgba(96,165,250,0.12)" />
          <stop offset="100%" stopColor="rgba(124,58,237,0.05)" />
        </linearGradient>
        <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(124,58,237,0.04)" />
          <stop offset="100%" stopColor="rgba(124,58,237,0)" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Deep glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        {/* Hoved-glow */}
        <motion.div
          className="absolute left-1/2 top-1/3 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/20 blur-[130px]"
          animate={{ scale: [1, 1.14, 1], opacity: [0.55, 0.8, 0.55] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Blå aksent nede til høyre */}
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-[380px] w-[380px] rounded-full bg-blue-500/10 blur-[95px]"
          animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.7, 0.45] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        {/* Violet aksent nede til venstre */}
        <motion.div
          className="absolute left-1/4 bottom-1/3 h-[250px] w-[250px] rounded-full bg-violet-400/10 blur-[75px]"
          animate={{ scale: [1, 1.25, 1], opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        />
      </div>

      <RisingGrid />

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <motion.div
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-4 py-1.5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#7c3aed]" />
          <span className="text-sm font-medium text-[#a78bfa]">
            Digitalbyrå i Ålesund
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Én partner.{" "}
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#60a5fa] bg-clip-text text-transparent">
            Alt du trenger
          </span>{" "}
          for å vokse på nett.
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          Vi hjelper bedrifter i Ålesund og omegn med å vokse på nett –
          gjennom profesjonell foto & video, konverterende nettsider og
          presis annonsering. Alt fra én partner.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <a
            href="#kontakt"
            className="rounded-full bg-[#7c3aed] px-10 py-4 text-base font-semibold text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:bg-[#6d28d9] hover:shadow-xl hover:shadow-[#7c3aed]/40 hover:-translate-y-0.5"
          >
            Kom i gang i dag
          </a>
        </motion.div>

        {/* Trust signals */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-white/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Gratis strategimøte
          </span>
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Svar innen 24 timer
          </span>
          <span className="flex items-center gap-2">
            <svg className="h-4 w-4 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Ålesund og omegn
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#tjenester"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/25 transition-colors hover:text-white/55"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        aria-label="Scroll ned"
      >
        <motion.svg
          width="28" height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M6 9l6 6 6-6" />
          <path d="M6 14l6 6 6-6" opacity="0.4" />
        </motion.svg>
      </motion.a>
    </section>
  );
}
