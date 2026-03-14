"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function FlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const c = canvas; // non-null reference for closures

    const resize = () => {
      c.width = c.offsetWidth;
      c.height = c.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const COUNT = 380;
    const SPEED = 1.3;
    const COLORS = ["124,58,237", "139,92,246", "96,165,250", "167,139,250"];

    type P = {
      x: number; y: number;
      vx: number; vy: number;
      color: string; size: number;
      life: number; maxLife: number;
    };

    function spawn(): P {
      return {
        x: Math.random() * c.width,
        y: Math.random() * c.height,
        vx: 0, vy: 0,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        size: 0.7 + Math.random() * 1.2,
        life: 0,
        maxLife: 160 + Math.random() * 220,
      };
    }

    const particles: P[] = Array.from({ length: COUNT }, () => {
      const p = spawn();
      p.life = Math.floor(Math.random() * p.maxLife); // stagger start
      return p;
    });

    let t = 0;
    let raf: number;

    function fieldAngle(x: number, y: number): number {
      const nx = x * 0.004;
      const ny = y * 0.004;
      return (
        Math.sin(nx + t * 0.12) * Math.cos(ny - t * 0.09) * Math.PI * 2 +
        Math.sin(nx * 2.3 - t * 0.18) * 0.6 +
        Math.cos(ny * 1.8 + t * 0.11) * 0.6
      );
    }

    const draw = () => {
      t += 0.007;

      // Semi-transparent fill creates glowing trails
      ctx.fillStyle = "rgba(10,10,10,0.13)";
      ctx.fillRect(0, 0, c.width, c.height);

      const cx = c.width / 2;
      const cy = c.height / 2;
      const maxDist = Math.sqrt(cx * cx + cy * cy);

      for (const p of particles) {
        p.life++;
        if (p.life >= p.maxLife) {
          Object.assign(p, spawn());
          continue;
        }

        const a = fieldAngle(p.x, p.y);
        p.vx = p.vx * 0.92 + Math.cos(a) * SPEED * 0.08;
        p.vy = p.vy * 0.92 + Math.sin(a) * SPEED * 0.08;
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < -10) p.x = canvas.width + 10;
        else if (p.x > canvas.width + 10) p.x = -10;
        if (p.y < -10) p.y = canvas.height + 10;
        else if (p.y > canvas.height + 10) p.y = -10;

        // Fade in/out over lifetime
        const lifeAlpha =
          Math.min(p.life / 45, 1) * Math.min((p.maxLife - p.life) / 45, 1);

        // Edge vignette — fade toward corners
        const dx = p.x - cx;
        const dy = p.y - cy;
        const edgeFade = Math.max(0, 1 - Math.sqrt(dx * dx + dy * dy) / maxDist);

        const alpha = lifeAlpha * edgeFade * 0.72;
        if (alpha < 0.01) continue;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${alpha})`;
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize); // eslint-disable-line
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

      <FlowField />

      <div className="relative z-10 mx-auto max-w-4xl text-center pb-24">
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
          className="mt-10 flex flex-wrap justify-center gap-4 text-sm text-white/40 sm:mt-16 sm:gap-6"
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
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 group flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-white/5 text-white/50 backdrop-blur-sm transition-all hover:border-[#7c3aed]/60 hover:bg-[#7c3aed]/15 hover:text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        aria-label="Scroll ned"
      >
        <motion.svg
          width="18" height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          animate={{ y: [0, 3, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M6 10l6 6 6-6" />
        </motion.svg>
      </motion.a>
    </section>
  );
}
