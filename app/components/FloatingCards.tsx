"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

// ─── Card components ───────────────────────────────────────────────────────────

function VideoCard() {
  return (
    <Link href="/prosjekter/drive-trafikkskule" style={{ display: "block", textDecoration: "none" }}>
      <div style={{
        width: 300,
        background: "#0E0E12",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.04)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
        cursor: "pointer",
      }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1.025)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 28px 70px rgba(0,0,0,0.6), 0 0 0 1px rgba(45,212,191,0.2)";
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(45,212,191,0.3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 60px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.04)";
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.09)";
        }}
      >
        {/* Video thumbnail */}
        <div style={{ height: 170, position: "relative", overflow: "hidden", background: "#060D0D" }}>
          <video
            src="/videos/drive-trafikkskule.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.85 }}
          />
          {/* Overlay gradient */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
            pointerEvents: "none",
          }} />
          {/* Badge */}
          <div style={{
            position: "absolute", top: 12, left: 12,
            background: "rgba(45,212,191,0.15)",
            border: "1px solid rgba(45,212,191,0.25)",
            borderRadius: 100,
            padding: "3px 10px",
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#2DD4BF",
            fontFamily: "system-ui, sans-serif",
            textTransform: "uppercase",
          }}>
            Innholdspakke
          </div>
        </div>
        {/* Info */}
        <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#F2EDE6", fontFamily: "system-ui, sans-serif", marginBottom: 2 }}>
              Drive Trafikkskule
            </div>
            <div style={{ fontSize: 11, color: "rgba(242,237,230,0.38)", fontFamily: "system-ui, sans-serif" }}>
              Trafikkskole · Ålesund
            </div>
          </div>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: "rgba(45,212,191,0.1)",
            border: "1px solid rgba(45,212,191,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

function WebCard() {
  return (
    <Link href="/prosjekter/tverbakken-gard" style={{ display: "block", textDecoration: "none" }}>
      <div style={{
        width: 280,
        background: "#0E0E12",
        border: "1px solid rgba(255,255,255,0.09)",
        borderRadius: 18,
        overflow: "hidden",
        boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.04)",
        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
        cursor: "pointer",
      }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1.025)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 28px 70px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,158,11,0.2)";
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(245,158,11,0.3)";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLDivElement).style.transform = "scale(1)";
          (e.currentTarget as HTMLDivElement).style.boxShadow = "0 24px 60px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.04)";
          (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.09)";
        }}
      >
        {/* Screenshot */}
        <div style={{ height: 160, position: "relative", overflow: "hidden", background: "#060a06" }}>
          <Image
            src="/images/tverbakken-gard/hero-screenshot.jpg"
            alt="Tverbakken Gård nettside"
            fill
            style={{ objectFit: "cover", objectPosition: "top", opacity: 0.9 }}
          />
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)",
            pointerEvents: "none",
          }} />
          {/* Badge */}
          <div style={{
            position: "absolute", top: 12, left: 12,
            background: "rgba(245,158,11,0.15)",
            border: "1px solid rgba(245,158,11,0.25)",
            borderRadius: 100,
            padding: "3px 10px",
            fontSize: 10, fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#f59e0b",
            fontFamily: "system-ui, sans-serif",
            textTransform: "uppercase",
          }}>
            Nettside
          </div>
        </div>
        {/* Info */}
        <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#F2EDE6", fontFamily: "system-ui, sans-serif", marginBottom: 2 }}>
              Tverbakken Gård
            </div>
            <div style={{ fontSize: 11, color: "rgba(242,237,230,0.38)", fontFamily: "system-ui, sans-serif" }}>
              Gård · Kjerringøy, Nordland
            </div>
          </div>
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            background: "rgba(245,158,11,0.1)",
            border: "1px solid rgba(245,158,11,0.2)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5">
              <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

function MetricsCard() {
  const points = [0.72, 0.65, 0.70, 0.58, 0.62, 0.50, 0.45, 0.38, 0.42, 0.30, 0.25, 0.20];
  const W = 228, H = 72;
  const toX = (i: number) => (i / (points.length - 1)) * W;
  const toY = (v: number) => v * H;

  let linePath = `M ${toX(0)},${toY(points[0])}`;
  for (let i = 1; i < points.length; i++) {
    const x0 = toX(i - 1), y0 = toY(points[i - 1]);
    const x1 = toX(i), y1 = toY(points[i]);
    const cpx = (x0 + x1) / 2;
    linePath += ` C ${cpx},${y0} ${cpx},${y1} ${x1},${y1}`;
  }
  const areaPath = linePath + ` L ${toX(points.length - 1)},${H} L ${toX(0)},${H} Z`;

  return (
    <div style={{
      width: 268,
      background: "#0E0E12",
      border: "1px solid rgba(255,255,255,0.09)",
      borderRadius: 18,
      overflow: "hidden",
      boxShadow: "0 24px 60px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.04)",
      padding: "18px 20px",
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 11, color: "rgba(242,237,230,0.35)", fontFamily: "system-ui, sans-serif",
            letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4 }}>
            Annonsering
          </div>
          <div style={{ fontSize: 20, fontWeight: 700, color: "#F2EDE6", fontFamily: "system-ui, sans-serif", letterSpacing: "-0.5px" }}>
            +142%
          </div>
        </div>
        <div style={{
          background: "rgba(45,212,191,0.12)",
          border: "1px solid rgba(45,212,191,0.2)",
          borderRadius: 8, padding: "4px 8px",
          fontSize: 11, fontWeight: 600, color: "#2DD4BF",
          fontFamily: "system-ui, sans-serif",
        }}>
          ↑ Klikk
        </div>
      </div>
      <svg width={W} height={H} style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="fc-areaFill" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2DD4BF" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.01" />
          </linearGradient>
        </defs>
        <path d={areaPath} fill="url(#fc-areaFill)" />
        <path d={linePath} fill="none" stroke="#2DD4BF" strokeWidth="1.8"
          strokeLinecap="round" strokeLinejoin="round" />
        <circle cx={toX(points.length - 1)} cy={toY(points[points.length - 1])} r="4" fill="#2DD4BF" />
        <circle cx={toX(points.length - 1)} cy={toY(points[points.length - 1])} r="7" fill="rgba(45,212,191,0.2)" />
      </svg>
    </div>
  );
}

// ─── Main component ────────────────────────────────────────────────────────────

export default function FloatingCards() {
  const reduced = useReducedMotion();
  const rafRef = useRef<number>(0);
  const startRef = useRef<number | null>(null);

  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (reduced) return;

    function animate(timestamp: number) {
      if (startRef.current === null) startRef.current = timestamp;
      const t = (timestamp - startRef.current) / 1000;

      const c1 = {
        y: Math.sin(t * 0.45) * 22,
        x: Math.sin(t * 0.28) * 9,
        r: Math.sin(t * 0.35) * 3,
      };
      const c2 = {
        y: Math.sin(t * 0.38 + 2.1) * 28,
        x: Math.sin(t * 0.22 + 1.5) * 7,
        r: Math.sin(t * 0.30 + 1.0) * -3.5,
      };
      const c3 = {
        y: Math.sin(t * 0.52 + 4.2) * 18,
        x: Math.sin(t * 0.33 + 3.0) * 11,
        r: Math.sin(t * 0.41 + 2.0) * 2.5,
      };

      if (card1Ref.current) {
        card1Ref.current.style.transform = `translate(${c1.x}px, ${c1.y}px) rotate(${c1.r}deg)`;
      }
      if (card2Ref.current) {
        card2Ref.current.style.transform = `translate(${c2.x}px, ${c2.y}px) rotate(${c2.r}deg)`;
      }
      if (card3Ref.current) {
        card3Ref.current.style.transform = `translate(${c3.x}px, ${c3.y}px) rotate(${c3.r}deg)`;
      }

      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(rafRef.current);
  }, [reduced]);

  return (
    <>
      {/* ── Mobile: horizontal scroll strip ── */}
      <div className="lg:hidden" style={{
        display: "flex",
        gap: 14,
        overflowX: "auto",
        paddingBottom: 8,
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        msOverflowStyle: "none",
        scrollbarWidth: "none",
      }}>
        <div style={{ scrollSnapAlign: "start", flexShrink: 0 }}><VideoCard /></div>
        <div style={{ scrollSnapAlign: "start", flexShrink: 0 }}><WebCard /></div>
        <div style={{ scrollSnapAlign: "start", flexShrink: 0 }}><MetricsCard /></div>
      </div>

      {/* ── Desktop: floating overlapping layout ── */}
      <div className="hidden lg:block" style={{ position: "relative", width: "100%", aspectRatio: "900 / 1080", overflow: "visible" }}>

        {/* Card 2: Website — middle left (back layer) */}
        <div ref={card2Ref} style={{
          position: "absolute",
          left: "5%", top: "34%",
          opacity: 0.82,
          willChange: "transform",
        }}>
          <WebCard />
        </div>

        {/* Card 3: Metrics — lower center (mid layer) */}
        <div ref={card3Ref} style={{
          position: "absolute",
          left: "33%", top: "58%",
          opacity: 0.92,
          willChange: "transform",
        }}>
          <MetricsCard />
        </div>

        {/* Card 1: Video — upper right (front layer) */}
        <div ref={card1Ref} style={{
          position: "absolute",
          left: "50%", top: "10%",
          opacity: 1,
          willChange: "transform",
        }}>
          <VideoCard />
        </div>

      </div>
    </>
  );
}
