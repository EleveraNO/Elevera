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

// Sunnmørsalpene-inspired silhouette — realistic coastal mountain range
// ViewBox 0 0 1440 900. Tallest peak ~y520. Mountains occupy bottom ~42%.
const RIDGE =
  "M 0 900 " +
  // Left coast rising from sea level
  "L 0 820 L 30 810 L 60 798 L 90 785 L 110 778 L 130 770 " +
  // Foothills — gentle left slope
  "L 155 758 L 175 748 L 195 740 L 210 735 L 225 730 " +
  // P1 — small coastal peak (y=710)
  "L 240 722 L 252 715 L 260 712 L 265 710 L 270 712 L 278 716 " +
  "L 288 722 L 300 730 " +
  // Valley between P1 and P2
  "L 315 738 L 328 742 L 338 743 L 348 741 " +
  // Rising toward P2 — broad western shoulder
  "L 362 734 L 375 722 L 388 708 L 398 694 L 408 678 " +
  "L 415 664 L 422 648 L 428 635 L 434 622 " +
  // P2 — second peak, rugged (y=595)
  "L 438 610 L 442 602 L 445 597 L 448 595 " +
  "L 451 598 L 453 596 L 456 600 " +
  // P2 eastern descent — steep
  "L 462 612 L 470 628 L 480 645 L 492 662 " +
  // Saddle between P2 and P3
  "L 505 676 L 518 686 L 530 692 L 542 694 L 555 690 " +
  // Rising to P3 — tallest peak, dramatic cliff
  "L 568 680 L 580 664 L 590 646 L 598 626 " +
  "L 604 608 L 610 588 L 614 570 L 618 555 L 620 542 " +
  // P3 — main summit, jagged twin top (y=520)
  "L 622 530 L 624 524 L 626 520 L 629 525 " +
  "L 631 521 L 634 528 " +
  // P3 eastern face — steep cliff drop
  "L 640 545 L 648 565 L 658 588 L 670 610 " +
  "L 684 632 L 698 650 " +
  // Valley between P3 and P4
  "L 712 664 L 726 674 L 740 680 L 754 682 L 768 678 " +
  // Rising to P4 — second tallest (y=570)
  "L 782 668 L 795 654 L 806 638 L 816 620 " +
  "L 824 604 L 830 588 L 835 576 " +
  // P4 summit — rocky (y=570)
  "L 838 572 L 840 570 L 843 573 L 845 571 L 848 576 " +
  // P4 eastern slope — more gradual
  "L 856 592 L 866 612 L 878 634 L 892 654 " +
  "L 908 672 L 924 686 " +
  // Valley before P5
  "L 940 696 L 955 702 L 968 704 L 980 702 " +
  // Rising to P5 — medium peak (y=640)
  "L 994 694 L 1008 682 L 1020 668 L 1030 656 L 1038 646 " +
  // P5 summit (y=640)
  "L 1042 642 L 1045 640 L 1048 643 L 1050 641 L 1053 646 " +
  // P5 eastern slope — long gentle descent to coast
  "L 1062 658 L 1075 674 L 1092 690 " +
  "L 1112 706 L 1135 720 L 1160 732 " +
  "L 1190 744 L 1225 755 L 1265 764 " +
  "L 1310 772 L 1360 780 L 1410 786 L 1440 790 " +
  "L 1440 900";

const FILL_PATH = `${RIDGE} Z`;

function Mountain() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full"
      preserveAspectRatio="none"
      viewBox="0 0 1440 900"
      fill="none"
    >
      <defs>
        {/* Solid dark fill — opaque mountain body */}
        <linearGradient id="mtnFill" x1="626" y1="520" x2="626" y2="900" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(8,6,18,0.85)" />
          <stop offset="5%" stopColor="rgba(8,6,18,0.95)" />
          <stop offset="15%" stopColor="rgba(8,6,18,1)" />
          <stop offset="100%" stopColor="rgba(8,6,18,1)" />
        </linearGradient>
        {/* Ridge glow: bright at peaks, fading down the slopes */}
        <linearGradient id="mtnStroke" x1="626" y1="520" x2="626" y2="780" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="rgba(192,168,255,0.7)" />
          <stop offset="25%" stopColor="rgba(147,119,230,0.4)" />
          <stop offset="55%" stopColor="rgba(124,58,237,0.12)" />
          <stop offset="100%" stopColor="rgba(124,58,237,0)" />
        </linearGradient>
      </defs>

      {/* Mountain solid fill */}
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
