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

// Sunnmørsalpene-inspired silhouette — 5 peaks, dark silhouette, lilla ridge glow
// Peak heights (y from top in 900px viewBox): P1=740 P2=650 P3=588 P4=614 P5=658
const RIDGE =
  "M 0 862 " +
  // Far-left flat coast
  "L 40 831 L 80 801 L 120 771 L 150 748 " +
  // Minor left hump (P1)
  "L 160 740 " +
  "L 170 745 L 182 756 L 197 767 L 213 778 L 228 788 " +
  // Valley before P2
  "L 242 797 L 256 803 L 261 804 L 266 803 " +
  // Rising to P2
  "L 278 791 L 292 775 L 308 756 L 324 735 " +
  "L 338 713 L 350 692 L 358 672 " +
  // P2 rocky twin top
  "L 357 655 L 360 650 L 363 656 L 362 651 L 366 658 " +
  // P2 right descent
  "L 373 667 L 382 677 L 393 690 L 406 704 " +
  "L 420 718 L 430 727 " +
  // Valley before P3 (tallest) — dramatic cliff rise
  "L 436 730 L 441 729 L 446 726 " +
  "L 450 714 L 454 697 L 456 676 " +
  "L 458 654 L 459 628 L 459 608 " +
  // P3 twin summit — tallest peak
  "L 458 597 L 460 588 L 462 595 L 465 590 L 467 599 " +
  // P3 right face — near-vertical cliff
  "L 472 609 L 480 622 L 490 638 " +
  "L 502 653 L 516 668 " +
  // Descent to valley
  "L 532 682 L 547 695 L 558 704 L 568 708 L 579 707 " +
  // Valley before P4
  "L 591 697 L 606 681 " +
  // Rising to P4
  "L 620 663 L 633 644 L 641 626 " +
  // P4 rocky top
  "L 639 620 L 641 614 L 644 620 L 646 614 L 649 622 " +
  // P4 right descent
  "L 659 634 L 672 650 L 687 666 " +
  "L 704 683 L 721 700 " +
  // Valley before P5
  "L 736 714 L 750 724 L 759 730 L 768 731 " +
  // Rising to P5
  "L 779 724 L 792 712 L 806 699 " +
  "L 819 684 L 828 669 " +
  // P5 rocky top
  "L 831 659 L 829 658 L 832 662 L 835 657 L 838 664 " +
  // Right slope — long gentle descent
  "L 853 675 L 869 687 L 888 700 " +
  "L 909 712 L 932 722 L 958 731 " +
  "L 986 739 L 1017 747 L 1050 753 " +
  "L 1086 759 L 1125 764 L 1166 768 " +
  "L 1210 772 L 1258 775 L 1310 778 " +
  "L 1366 781 L 1440 784";

const FILL_PATH = `${RIDGE} L 1440 900 L 0 900 Z`;

function Mountain() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 1440 900"
      fill="none"
    >
      <defs>
        <linearGradient id="mtnFill" x1="0" y1="0" x2="0" y2="1" gradientUnits="objectBoundingBox">
          <stop offset="0%" stopColor="rgba(15,10,30,0)" />
          <stop offset="35%" stopColor="rgba(15,10,30,0.65)" />
          <stop offset="100%" stopColor="rgba(10,10,20,0.92)" />
        </linearGradient>
        <linearGradient id="mtnStroke" x1="460" y1="588" x2="460" y2="820" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(192,168,255,0.75)" />
          <stop offset="35%" stopColor="rgba(167,139,250,0.45)" />
          <stop offset="70%" stopColor="rgba(124,58,237,0.18)" />
          <stop offset="100%" stopColor="rgba(124,58,237,0)" />
        </linearGradient>
      </defs>

      {/* Mountain fill */}
      <path d={FILL_PATH} fill="url(#mtnFill)" />

      {/* Animated ridge line */}
      <motion.path
        d={RIDGE}
        stroke="url(#mtnStroke)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 3.5, delay: 0.6, ease: "easeOut" }}
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
