"use client";

import { useEffect } from "react";

/**
 * Mirrors the reveal-on-scroll + stat counter logic from the design handoff.
 * Runs once on mount and wires IntersectionObserver across all elements
 * marked with `.reveal`, `.home-case-stats`, `.home-process-grid`, `.home-connector`.
 */
export default function HomeRevealObserver() {
  useEffect(() => {
    const prefersReduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    const nf = new Intl.NumberFormat("nb-NO");

    function formatValue(
      val: number,
      opts: { prefix: string; suffix: string; isPct: boolean }
    ) {
      return (
        opts.prefix + nf.format(val) + (opts.isPct ? "%" : opts.suffix)
      );
    }

    function parseStat(target: string) {
      const isPct = target.includes("%");
      const isPlus = target.startsWith("+");
      // Any non-numeric trailing token (e.g. " kr", "×")
      const trailMatch = target.match(/[^0-9\s].*$/);
      const trail = trailMatch ? trailMatch[0].replace(/^\+/, "") : "";
      const num = parseFloat(target.replace(/[^0-9.\-]/g, ""));
      const suffix = isPct ? "" : trail ? ` ${trail}` : "";
      const prefix = isPlus ? "+" : "";
      return { num, prefix, suffix, isPct };
    }

    function animateCount(el: HTMLElement) {
      const target = el.dataset.count;
      if (!target) return;
      const parsed = parseStat(target);
      if (isNaN(parsed.num)) {
        el.textContent = target;
        return;
      }
      // data-from lets a stat animate from a specific starting value.
      // Useful for "counting down" (e.g. 50 000 → 0 kr annonsekostnad).
      const fromRaw = el.dataset.from;
      const from = fromRaw != null ? parseFloat(fromRaw.replace(/[^0-9.\-]/g, "")) : 0;
      const start = isNaN(from) ? 0 : from;
      const end = parsed.num;
      const dur = 1400;
      const startTime = performance.now();
      function tick(now: number) {
        const t = Math.min(1, (now - startTime) / dur);
        const eased = 1 - Math.pow(1 - t, 3);
        const val = Math.round(start + (end - start) * eased);
        el.textContent = formatValue(val, parsed);
        if (t < 1) requestAnimationFrame(tick);
        else el.textContent = target!;
      }
      requestAnimationFrame(tick);
    }

    // Stash target text and reset each stat to its starting visual state
    document.querySelectorAll<HTMLElement>(".home-case-stat .num").forEach((el) => {
      if (!el.dataset.count) {
        el.dataset.count = el.textContent?.trim() || "";
      }
      const parsed = parseStat(el.dataset.count!);
      const fromRaw = el.dataset.from;
      const from = fromRaw != null ? parseFloat(fromRaw.replace(/[^0-9.\-]/g, "")) : 0;
      const initial = isNaN(from) ? 0 : from;
      el.textContent = formatValue(initial, parsed);
    });

    if (prefersReduce) {
      document.querySelectorAll<HTMLElement>(".reveal").forEach((el) => el.classList.add("in"));
      document.querySelectorAll<HTMLElement>(".home-case-stat .num").forEach((el) => {
        el.textContent = el.dataset.count || el.textContent;
      });
      document.querySelectorAll<HTMLElement>(".home-case-stats, .home-process-grid, .home-connector").forEach((el) =>
        el.classList.add("in")
      );
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          el.classList.add("in");
          if (el.classList.contains("home-case-stats")) {
            el.querySelectorAll<HTMLElement>(".num").forEach((n, i) => {
              setTimeout(() => animateCount(n), 100 + i * 150);
            });
          }
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    document
      .querySelectorAll<HTMLElement>(".reveal, .home-case-stats, .home-process-grid, .home-connector")
      .forEach((el) => io.observe(el));

    return () => io.disconnect();
  }, []);

  return null;
}
