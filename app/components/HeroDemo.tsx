"use client";

import { useEffect, useState, useReducer } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";

const DURATION = 4000; // ms per slide

const services = [
  {
    id: "video",
    label: "Foto & video",
    panel: VideoPanel,
  },
  {
    id: "nettside",
    label: "Nettside",
    panel: NettsidePanel,
  },
  {
    id: "annonsering",
    label: "Annonsering",
    panel: AnnonseringPanel,
  },
];

// ── Video panel ──────────────────────────────────────────────
function VideoPanel({ active }: { active: boolean }) {
  return (
    <div className="flex h-full flex-col gap-4 p-5">
      {/* Mock video thumbnail */}
      <div
        className="relative flex-1 overflow-hidden rounded-lg"
        style={{ background: "#09090B", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        {/* Fake image bars */}
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-[2]" style={{ background: "rgba(45,212,191,0.06)" }} />
          <div className="flex-[3]" style={{ background: "rgba(45,212,191,0.03)" }} />
          <div className="flex-[1]" style={{ background: "rgba(9,9,11,0.8)" }} />
        </div>
        {/* Scene silhouette */}
        <div className="absolute bottom-6 left-0 right-0 flex items-end justify-center gap-2 px-4">
          {[32, 48, 28, 56, 36].map((h, i) => (
            <div
              key={i}
              className="w-6 rounded-t"
              style={{ height: h, background: "rgba(255,255,255,0.06)" }}
            />
          ))}
        </div>
        {/* Play button */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={active ? { scale: 1, opacity: 1 } : { scale: 0.85, opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div
            className="flex h-12 w-12 items-center justify-center rounded-full"
            style={{ background: "#2DD4BF", boxShadow: "0 0 24px rgba(45,212,191,0.4)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="#09090B">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </motion.div>
        {/* Label */}
        <div className="absolute bottom-2 left-3">
          <span
            className="rounded px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider"
            style={{ background: "rgba(45,212,191,0.15)", color: "#2DD4BF" }}
          >
            Reklamevideo
          </span>
        </div>
      </div>
      {/* Stats row */}
      <div className="flex gap-3">
        {[
          { label: "Visninger", value: "12 400" },
          { label: "Klikk", value: "1 830" },
          { label: "Konvertering", value: "14.7%" },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            className="flex-1 rounded-lg p-3 text-center"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            initial={{ opacity: 0, y: 8 }}
            animate={active ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }}
            transition={{ delay: 0.15 + i * 0.08, duration: 0.3, ease: "easeOut" }}
          >
            <p className="text-sm font-bold" style={{ color: "#F2EDE6" }}>{s.value}</p>
            <p className="text-[10px]" style={{ color: "rgba(242,237,230,0.38)" }}>{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Nettside panel ──────────────────────────────────────────
function NettsidePanel({ active }: { active: boolean }) {
  const bars = [
    { w: "75%", delay: 0.1 },
    { w: "55%", delay: 0.18 },
    { w: "90%", delay: 0.26 },
    { w: "40%", delay: 0.34 },
    { w: "65%", delay: 0.42 },
  ];

  return (
    <div className="flex h-full flex-col gap-3 p-5">
      {/* Browser chrome */}
      <div
        className="flex-1 overflow-hidden rounded-lg"
        style={{ border: "1px solid rgba(255,255,255,0.08)", background: "#09090B" }}
      >
        {/* URL bar */}
        <div
          className="flex items-center gap-2 px-3 py-2"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.03)" }}
        >
          <div className="flex gap-1">
            {["#ef4444","#f59e0b","#22c55e"].map((c) => (
              <div key={c} className="h-2 w-2 rounded-full" style={{ background: c, opacity: 0.7 }} />
            ))}
          </div>
          <div
            className="flex flex-1 items-center gap-1.5 rounded px-2 py-0.5"
            style={{ background: "rgba(255,255,255,0.05)" }}
          >
            <svg className="h-2.5 w-2.5" style={{ color: "#2DD4BF" }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            <span className="text-[9px]" style={{ color: "rgba(242,237,230,0.35)" }}>dinbedrift.no</span>
          </div>
        </div>
        {/* Page content skeleton building up */}
        <div className="space-y-2.5 p-4">
          {/* Hero block */}
          <motion.div
            className="h-10 rounded"
            style={{ background: "rgba(45,212,191,0.12)" }}
            initial={{ scaleX: 0, originX: 0 }}
            animate={active ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.05 }}
          />
          {bars.map((b, i) => (
            <motion.div
              key={i}
              className="h-2 rounded"
              style={{ background: "rgba(255,255,255,0.07)", width: b.w }}
              initial={{ scaleX: 0, originX: 0 }}
              animate={active ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.3, ease: "easeOut", delay: b.delay }}
            />
          ))}
          {/* CTA button */}
          <motion.div
            className="mt-2 h-6 w-24 rounded-full"
            style={{ background: "rgba(45,212,191,0.25)" }}
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.25, delay: 0.5 }}
          />
        </div>
      </div>
      {/* Info badges */}
      <div className="flex gap-2">
        {[
          { icon: "⚡", label: "Rask levering" },
          { icon: "📱", label: "Mobiloptimert" },
          { icon: "🔒", label: "Du eier alt" },
        ].map((b, i) => (
          <motion.div
            key={b.label}
            className="flex flex-1 items-center justify-center gap-1 rounded-lg py-2 text-[10px] font-medium"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)", color: "rgba(242,237,230,0.55)" }}
            initial={{ opacity: 0 }}
            animate={active ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.4 + i * 0.07, duration: 0.25 }}
          >
            <span aria-hidden="true">{b.icon}</span>
            {b.label}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Annonsering panel ──────────────────────────────────────
function AnnonseringPanel({ active }: { active: boolean }) {
  const bars = [
    { label: "Jan", h: 35 },
    { label: "Feb", h: 48 },
    { label: "Mar", h: 42 },
    { label: "Apr", h: 65 },
    { label: "Mai", h: 58 },
    { label: "Jun", h: 88 },
  ];
  const metrics = [
    { label: "Rekkevidde", value: "+89%", positive: true },
    { label: "Kostnad/klikk", value: "−34%", positive: true },
    { label: "Konverteringer", value: "+142%", positive: true },
  ];

  return (
    <div className="flex h-full flex-col gap-4 p-5">
      {/* Chart */}
      <div
        className="flex-1 rounded-lg p-4"
        style={{ background: "#09090B", border: "1px solid rgba(255,255,255,0.08)" }}
      >
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(242,237,230,0.3)" }}>
          Henvendelser siste 6 mnd
        </p>
        <div className="flex h-24 items-end gap-2">
          {bars.map((b, i) => (
            <div key={b.label} className="flex flex-1 flex-col items-center gap-1">
              <motion.div
                className="w-full rounded-t"
                style={{ background: i === 5 ? "#2DD4BF" : "rgba(45,212,191,0.3)" }}
                initial={{ scaleY: 0, originY: 1 }}
                animate={active ? { scaleY: 1 } : { scaleY: 0 }}
                transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 + i * 0.07 }}
                custom={b.h}
                // height via inline style on wrapper
              >
                <div style={{ height: b.h }} />
              </motion.div>
              <span className="text-[8px]" style={{ color: "rgba(242,237,230,0.25)" }}>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
      {/* Metrics */}
      <div className="flex flex-col gap-2">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            className="flex items-center justify-between rounded-lg px-3 py-2"
            style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}
            initial={{ opacity: 0, x: 10 }}
            animate={active ? { opacity: 1, x: 0 } : { opacity: 0, x: 10 }}
            transition={{ delay: 0.3 + i * 0.09, duration: 0.3, ease: "easeOut" }}
          >
            <span className="text-xs" style={{ color: "rgba(242,237,230,0.5)" }}>{m.label}</span>
            <span className="text-sm font-bold" style={{ color: "#2DD4BF" }}>{m.value}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// ── Main component ──────────────────────────────────────────
export default function HeroDemo() {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();

  useEffect(() => {
    if (reduced || paused) return;
    const start = performance.now();
    let raf: number;

    function tick(now: number) {
      const elapsed = (now - start) % DURATION;
      const p = elapsed / DURATION;
      setProgress(p);

      const slide = Math.floor((now - start) / DURATION) % services.length;
      setActive(slide);

      raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [reduced, paused]);

  const ActivePanel = services[active].panel;

  return (
    <div
      className="relative overflow-hidden rounded-2xl"
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        background: "#0D0D10",
        boxShadow: "0 0 80px rgba(45,212,191,0.06), 0 32px 64px rgba(0,0,0,0.4)",
      }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Tab bar */}
      <div
        className="flex"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.07)" }}
        role="tablist"
      >
        {services.map((s, i) => (
          <button
            key={s.id}
            role="tab"
            aria-selected={active === i}
            onClick={() => { setActive(i); setProgress(0); }}
            className="relative flex-1 cursor-pointer py-3 text-xs font-semibold transition-colors duration-200"
            style={{
              color: active === i ? "#F2EDE6" : "rgba(242,237,230,0.38)",
              background: "transparent",
            }}
          >
            {s.label}
            {active === i && (
              <motion.div
                layoutId="tab-indicator"
                className="absolute bottom-0 left-0 right-0 h-px"
                style={{ background: "#2DD4BF" }}
                transition={{ duration: 0.25 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Progress bar */}
      {!reduced && (
        <div className="h-px w-full" style={{ background: "rgba(255,255,255,0.05)" }}>
          <motion.div
            className="h-full"
            style={{ background: "rgba(45,212,191,0.4)", width: `${progress * 100}%` }}
          />
        </div>
      )}

      {/* Panel */}
      <div className="h-64" role="tabpanel">
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="h-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <ActivePanel active={true} />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
