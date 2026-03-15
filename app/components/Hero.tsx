"use client";

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const c = canvas;

    const resize = () => {
      c.width = c.offsetWidth;
      c.height = c.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const SPACING = 52;
    let raf: number;
    let t = 0;

    const draw = () => {
      t += 0.4;
      ctx.clearRect(0, 0, c.width, c.height);

      const cols = Math.ceil(c.width / SPACING) + 1;
      const rows = Math.ceil(c.height / SPACING) + 2;
      const offsetY = t % SPACING;
      const scrolledRows = Math.floor(t / SPACING);

      const cx = c.width / 2;
      const cy = c.height / 2;
      const maxDist = Math.sqrt(cx * cx + cy * cy);

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const x = col * SPACING;
          const y = row * SPACING - offsetY;

          const dx = x - cx;
          const dy = y - cy;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const edgeFade = Math.max(0, 1 - dist / maxDist) * 0.85 + 0.15;

          const wave = Math.sin(dist * 0.018 - t * 0.06) * 0.5 + 0.5;

          const worldRow = row + scrolledRows;
          const seed = Math.sin(col * 127.1 + worldRow * 311.7) * 43758.5453;
          const rand = seed - Math.floor(seed);
          const isBright = rand > 0.94;

          const baseAlpha = 0.07 + wave * 0.08;
          const alpha = isBright
            ? Math.min(1, baseAlpha * 4 * edgeFade)
            : baseAlpha * edgeFade;

          const radius = isBright ? 2.0 : 1.2;

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
            ctx.shadowBlur = 8;
            ctx.shadowColor = `rgba(${color},0.8)`;
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

// Geometric mountain silhouette inspired by the Elevera logo polygon
function Mountain() {
  const ridge =
    "M 0 590 L 60 568 L 125 545 L 195 520 L 260 498 L 318 478 L 370 460 L 415 443 L 456 427 L 492 412 L 524 397 L 552 382 L 576 368 L 597 354 L 614 341 L 627 328 L 636 317 L 641 304 L 644 291 L 640 278 L 646 265 L 655 252 L 666 239 L 678 226 L 690 213 L 700 200 L 708 187 L 713 174 L 715 162 L 712 150 L 717 140 L 720 130 L 723 140 L 728 150 L 725 162 L 727 174 L 732 187 L 740 200 L 750 213 L 762 226 L 774 239 L 785 252 L 794 265 L 800 278 L 796 291 L 799 304 L 804 317 L 813 328 L 826 341 L 843 354 L 864 368 L 888 382 L 916 397 L 948 412 L 984 427 L 1025 443 L 1070 460 L 1122 478 L 1180 498 L 1245 520 L 1315 545 L 1380 568 L 1440 590";

  const fillPath = `${ridge} L 1440 900 L 0 900 Z`;

  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 1440 900"
      fill="none"
    >
      <defs>
        <linearGradient id="mtnFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(124,58,237,0)" />
          <stop offset="45%" stopColor="rgba(124,58,237,0.07)" />
          <stop offset="100%" stopColor="rgba(124,58,237,0.18)" />
        </linearGradient>
        <linearGradient
          id="mtnStroke"
          x1="720" y1="130"
          x2="720" y2="590"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor="rgba(167,139,250,0.7)" />
          <stop offset="55%" stopColor="rgba(124,58,237,0.3)" />
          <stop offset="100%" stopColor="rgba(124,58,237,0)" />
        </linearGradient>
      </defs>

      {/* Subtle fill beneath the ridge */}
      <path d={fillPath} fill="url(#mtnFill)" />

      {/* Animated ridge line */}
      <motion.path
        d={ridge}
        stroke="url(#mtnStroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3.5, delay: 0.6, ease: "easeOut" }}
      />

      {/* Faint secondary ridge — shifted slightly */}
      <motion.path
        d="M 0 640 L 80 618 L 170 594 L 255 570 L 330 550 L 392 531 L 446 514 L 495 498 L 538 482 L 578 466 L 612 451 L 641 437 L 664 423 L 682 410 L 695 396 L 703 383 L 705 368 L 700 353 L 698 338 L 700 323 L 705 308 L 714 293 L 720 278 L 726 293 L 735 308 L 740 323 L 742 338 L 740 353 L 737 368 L 735 383 L 743 396 L 756 410 L 774 423 L 797 437 L 826 451 L 860 466 L 900 482 L 944 498 L 993 514 L 1048 531 L 1110 550 L 1185 570 L 1270 594 L 1360 618 L 1440 640"
        stroke="rgba(124,58,237,0.12)"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 4, delay: 1.2, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Deep glow blobs */}
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-1/3 h-[750px] w-[750px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/25 blur-[120px]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/15 blur-[90px]"
          animate={{ scale: [1, 1.22, 1], opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute left-1/4 bottom-1/3 h-[280px] w-[280px] rounded-full bg-violet-400/15 blur-[70px]"
          animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3.5 }}
        />
      </div>

      <DotGrid />
      <Mountain />

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

        {/* CTA */}
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
