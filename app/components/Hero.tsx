"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function Particles() {
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

    const COLORS = ["124,58,237", "96,165,250", "167,139,250"];
    const particles = Array.from({ length: 35 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random(),
      alphaDir: Math.random() > 0.5 ? 0.003 : -0.003,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        p.alpha += p.alphaDir;
        if (p.alpha <= 0 || p.alpha >= 1) p.alphaDir *= -1;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha * 0.7})`;
        ctx.shadowBlur = 6;
        ctx.shadowColor = `rgba(${p.color},0.8)`;
        ctx.fill();
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

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/20 blur-[120px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <Particles />

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
