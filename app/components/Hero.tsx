"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function DataStreams() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initStreaks();
    };

    type Streak = {
      x: number; y: number; vy: number;
      alpha: number; maxAlpha: number;
      height: number; width: number;
      alphaDir: number; color: string;
      dotY: number; dotAlpha: number;
    };

    const COLORS = ["124,58,237", "124,58,237", "167,139,250", "96,165,250"];
    let streaks: Streak[] = [];

    function makeStreak(x?: number): Streak {
      const color = COLORS[Math.floor(Math.random() * COLORS.length)];
      const w = canvas?.width ?? 800;
      const h = canvas?.height ?? 600;
      return {
        x: x ?? Math.random() * w,
        y: h + Math.random() * h,
        vy: -(Math.random() * 1.4 + 0.5),
        alpha: 0,
        maxAlpha: Math.random() * 0.55 + 0.12,
        height: Math.random() * 120 + 60,
        width: Math.random() > 0.7 ? 2 : 1,
        alphaDir: Math.random() * 0.012 + 0.006,
        color,
        dotY: 0,
        dotAlpha: 0,
      };
    }

    function initStreaks() {
      if (!canvas) return;
      // Spread evenly + some random ones
      const count = Math.max(18, Math.floor(canvas.width / 55));
      streaks = Array.from({ length: count }, (_, i) => {
        const s = makeStreak(
          i < 12
            ? (canvas.width / 12) * i + (Math.random() - 0.5) * 40
            : undefined
        );
        // Stagger start positions
        s.y = Math.random() * (canvas.height + 200) - 200;
        return s;
      });
    }

    resize();
    window.addEventListener("resize", resize);

    let raf: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const s of streaks) {
        s.y += s.vy;
        s.alpha += s.alphaDir;

        if (s.alpha >= s.maxAlpha) s.alphaDir = -(Math.random() * 0.006 + 0.004);
        if (s.alpha <= 0) {
          Object.assign(s, makeStreak());
          continue;
        }

        // Main streak gradient
        const grad = ctx.createLinearGradient(s.x, s.y, s.x, s.y - s.height);
        grad.addColorStop(0, `rgba(${s.color},0)`);
        grad.addColorStop(0.25, `rgba(${s.color},${s.alpha * 0.5})`);
        grad.addColorStop(0.7, `rgba(${s.color},${s.alpha})`);
        grad.addColorStop(1, `rgba(${s.color},0)`);

        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x, s.y - s.height);
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.width;
        ctx.shadowBlur = s.width > 1 ? 8 : 4;
        ctx.shadowColor = `rgba(${s.color},0.6)`;
        ctx.stroke();
        ctx.shadowBlur = 0;

        // Bright leading dot at top of streak
        const dotX = s.x;
        const dotY = s.y - s.height;
        ctx.beginPath();
        ctx.arc(dotX, dotY, s.width + 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${s.color},${s.alpha * 1.2})`;
        ctx.shadowBlur = 12;
        ctx.shadowColor = `rgba(${s.color},1)`;
        ctx.fill();
        ctx.shadowBlur = 0;
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
      className="pointer-events-none absolute inset-0 h-full w-full opacity-80"
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
        <motion.div
          className="absolute left-1/2 top-1/3 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/15 blur-[140px]"
          animate={{ scale: [1, 1.12, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-[350px] w-[350px] rounded-full bg-blue-500/8 blur-[100px]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute left-1/4 bottom-1/3 h-[200px] w-[200px] rounded-full bg-violet-400/8 blur-[80px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <DataStreams />

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
            className="rounded-full bg-[#7c3aed] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:bg-[#6d28d9] hover:shadow-xl hover:shadow-[#7c3aed]/40 hover:-translate-y-0.5"
          >
            Kom i gang i dag
          </a>
          <a
            href="#tjenester"
            className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white hover:-translate-y-0.5"
          >
            Se hva vi tilbyr
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
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
    </section>
  );
}
