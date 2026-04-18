"use client";

import { useEffect, useRef } from "react";

type Props = {
  accent?: string;
  cream?: string;
  ink?: string;
};

export default function HeroTopography({
  accent = "#2F5F3F",
  cream = "#F7F4EC",
  ink = "#1A1A1A",
}: Props) {
  void cream;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef(0);
  const visRef = useRef(true);
  const mouseRef = useRef({ x: 0.72, y: 0.28, tx: 0.72, ty: 0.28 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let W = 0, H = 0, DPR = 1;
    function resize() {
      if (!canvas || !ctx) return;
      const rect = canvas.getBoundingClientRect();
      DPR = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(1, Math.floor(rect.width));
      H = Math.max(1, Math.floor(rect.height));
      canvas.width = W * DPR;
      canvas.height = H * DPR;
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    const io = new IntersectionObserver(
      (entries) => { visRef.current = entries[0].isIntersecting; },
      { threshold: 0.01 }
    );
    io.observe(canvas);

    function onMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.tx = (e.clientX - rect.left) / rect.width;
      mouseRef.current.ty = (e.clientY - rect.top) / rect.height;
    }
    window.addEventListener("mousemove", onMove, { passive: true });

    function field(x: number, y: number, t: number, mx: number, my: number) {
      const dx = x - mx;
      const dy = y - my;
      const d = Math.sqrt(dx * dx + dy * dy);

      const ax = x * 3.2;
      const ay = y * 2.0;

      const a = Math.sin(ax * 1.8 + t * 0.15) * Math.cos(ay * 1.6 - t * 0.12);
      const b = Math.sin((ax + ay) * 1.1 - t * 0.18) * 0.55;
      const c = Math.cos(ax * 0.6 - ay * 0.9 + t * 0.08) * 0.4;

      const bias = (1 - x) * 0.35 - y * 0.25;
      const dome = Math.max(0, 0.45 - d) * 0.9;

      return a + b + c + bias + dome;
    }

    const COLS = 96;
    const ROWS = 56;
    const LEVELS = [
      -1.4, -1.0, -0.7, -0.45, -0.25, -0.08,
       0.08,  0.22,  0.38,  0.55,  0.74,  0.95, 1.2,
    ];

    const grid = new Float32Array(COLS * ROWS);

    function sampleGrid(t: number, mx: number, my: number) {
      let i = 0;
      for (let r = 0; r < ROWS; r++) {
        const y = r / (ROWS - 1);
        for (let c = 0; c < COLS; c++) {
          const x = c / (COLS - 1);
          grid[i++] = field(x, y, t, mx, my);
        }
      }
    }

    function interp(v1: number, v2: number, level: number) {
      if (Math.abs(v2 - v1) < 1e-6) return 0.5;
      return (level - v1) / (v2 - v1);
    }

    function drawContours(level: number, alpha: number) {
      if (!ctx) return;
      ctx.beginPath();
      const cellW = W / (COLS - 1);
      const cellH = H / (ROWS - 1);

      for (let r = 0; r < ROWS - 1; r++) {
        for (let c = 0; c < COLS - 1; c++) {
          const i = r * COLS + c;
          const v0 = grid[i];
          const v1 = grid[i + 1];
          const v2 = grid[i + COLS + 1];
          const v3 = grid[i + COLS];

          let idx = 0;
          if (v0 > level) idx |= 1;
          if (v1 > level) idx |= 2;
          if (v2 > level) idx |= 4;
          if (v3 > level) idx |= 8;
          if (idx === 0 || idx === 15) continue;

          const x0 = c * cellW, y0 = r * cellH;
          const x1 = x0 + cellW, y1 = y0 + cellH;

          const top = (): [number, number] => [x0 + interp(v0, v1, level) * cellW, y0];
          const right = (): [number, number] => [x1, y0 + interp(v1, v2, level) * cellH];
          const bottom = (): [number, number] => [x0 + interp(v3, v2, level) * cellW, y1];
          const left = (): [number, number] => [x0, y0 + interp(v0, v3, level) * cellH];

          const seg = (a: [number, number], b: [number, number]) => {
            ctx.moveTo(a[0], a[1]);
            ctx.lineTo(b[0], b[1]);
          };

          switch (idx) {
            case 1:  case 14: seg(left(), top()); break;
            case 2:  case 13: seg(top(), right()); break;
            case 3:  case 12: seg(left(), right()); break;
            case 4:  case 11: seg(bottom(), right()); break;
            case 5:
              seg(left(), top());
              seg(bottom(), right());
              break;
            case 6:  case 9:  seg(top(), bottom()); break;
            case 7:  case 8:  seg(left(), bottom()); break;
            case 10:
              seg(top(), right());
              seg(left(), bottom());
              break;
            default: break;
          }
        }
      }

      ctx.globalAlpha = alpha;
      ctx.stroke();
    }

    function hexToRgb(h: string): [number, number, number] {
      const s = h.replace("#", "");
      if (s.length === 3) {
        const [r, g, b] = s.split("").map((c) => parseInt(c + c, 16));
        return [r, g, b];
      }
      return [
        parseInt(s.slice(0, 2), 16),
        parseInt(s.slice(2, 4), 16),
        parseInt(s.slice(4, 6), 16),
      ];
    }

    function drawSunGlow(t: number) {
      if (!ctx) return;
      const cx = W * (0.78 + Math.sin(t * 0.05) * 0.01);
      const cy = H * (0.22 + Math.cos(t * 0.04) * 0.01);
      const r = Math.max(W, H) * 0.55;
      const [ar, ag, ab] = hexToRgb(accent);

      const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
      g.addColorStop(0.00, `rgba(${ar},${ag},${ab},0.18)`);
      g.addColorStop(0.35, `rgba(${ar},${ag},${ab},0.06)`);
      g.addColorStop(1.00, `rgba(${ar},${ag},${ab},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, W, H);

      const g2 = ctx.createRadialGradient(cx, cy, 0, cx, cy, r * 0.35);
      g2.addColorStop(0, "rgba(255, 235, 200, 0.35)");
      g2.addColorStop(1, "rgba(255, 235, 200, 0)");
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, W, H);
    }

    const [ar, ag, ab] = hexToRgb(accent);
    const [ir, ig, ib] = hexToRgb(ink);

    const start = performance.now();
    function frame(now: number) {
      if (!ctx) return;
      if (!visRef.current) {
        rafRef.current = requestAnimationFrame(frame);
        return;
      }

      const t = (now - start) / 1000;

      const m = mouseRef.current;
      m.x += (m.tx - m.x) * 0.04;
      m.y += (m.ty - m.y) * 0.04;

      ctx.clearRect(0, 0, W, H);
      drawSunGlow(t);
      sampleGrid(t * 0.9, m.x, m.y);

      ctx.lineWidth = 1;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let k = 0; k < LEVELS.length; k++) {
        const lvl = LEVELS[k];

        const u = k / (LEVELS.length - 1);
        let rC: number, gC: number, bC: number;
        if (u < 0.5) {
          const f = u / 0.5;
          rC = ir + (ar - ir) * f;
          gC = ig + (ag - ig) * f;
          bC = ib + (ab - ib) * f;
        } else {
          const f = (u - 0.5) / 0.5;
          rC = ar + (255 - ar) * f * 0.45;
          gC = ag + (245 - ag) * f * 0.45;
          bC = ab + (230 - ab) * f * 0.45;
        }

        const major = k % 3 === 0;
        const alpha = major ? 0.55 : 0.22;
        ctx.lineWidth = major ? 1.1 : 0.75;
        ctx.strokeStyle = `rgb(${rC | 0},${gC | 0},${bC | 0})`;

        drawContours(lvl, alpha);
      }

      ctx.globalAlpha = 1;

      if (!reduced) {
        rafRef.current = requestAnimationFrame(frame);
      }
    }

    rafRef.current = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(rafRef.current);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("mousemove", onMove);
    };
  }, [accent, ink]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
      }}
    />
  );
}
