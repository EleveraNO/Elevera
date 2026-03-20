# Drive Trafikkskule Case Study Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a case study page at `/prosjekter/drive-trafikkskule` with a masonry media grid, lightbox modal, and results placeholder.

**Architecture:** A single `"use client"` page component at `app/prosjekter/drive-trafikkskule/page.tsx`. The lightbox state (`isOpen`, `currentIndex`) lives in the page component via `useState`. The masonry grid is a 6-column CSS grid with `md:col-span-4` (wide) and `md:col-span-2` (normal) items. Media is defined as a typed discriminated union array at the top of the file — populated with placeholder paths initially, replaced when real assets are added. `Portfolio.tsx` is updated to add the `href` for the Drive Trafikkskule card.

**Tech Stack:** Next.js 16, TypeScript, Tailwind CSS v4, Framer Motion (`AnimatePresence`, `motion`), `next/image`

---

## File Map

| File | Action | Responsibility |
|------|--------|----------------|
| `app/prosjekter/drive-trafikkskule/page.tsx` | Create | Full page: hero, masonry grid, lightbox, results placeholder, footer nav |
| `app/prosjekter/drive-trafikkskule/layout.tsx` | Create | Exports `metadata` for the page (required since page.tsx is `"use client"`) |
| `app/components/Portfolio.tsx` | Modify line 15 | Add `href: "/prosjekter/drive-trafikkskule"` for Drive card |

---

## How to verify at each step

Since this project has no test framework, verification at each step is:

```bash
cd /Users/mariusteigen/Desktop/elevera
npm run build
```

Expected output: `✓ Compiled successfully` with no TypeScript errors. A step is only done when the build passes.

---

## Task 1: Page scaffold, metadata, and hero section

**Files:**
- Create: `app/prosjekter/drive-trafikkskule/page.tsx`

This task produces a working page with the hero section fully implemented. The media grid and lightbox sections are stubbed with `{/* TODO */}` comments so the build passes.

- [ ] **Step 1: Create the directory and file**

```bash
mkdir -p app/prosjekter/drive-trafikkskule
touch app/prosjekter/drive-trafikkskule/page.tsx
```

- [ ] **Step 2: Write the full hero scaffold**

Write `app/prosjekter/drive-trafikkskule/page.tsx` with this exact content:

```tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageCTA from "../../components/PageCTA";
import { FadeUp, StaggerContainer, StaggerItem } from "../../components/animations";

// ─── Types ────────────────────────────────────────────────────────────────────

type PhotoItem = {
  type: "photo";
  src: string;
  alt: string;
  span: "wide" | "normal";
};

type VideoItem = {
  type: "video";
  src: string;
  alt: string;
  poster: string;
  label?: string;
  span: "wide" | "normal";
};

type MediaItem = PhotoItem | VideoItem;

// ─── Media data ───────────────────────────────────────────────────────────────
// Replace src/poster values with real paths once assets are placed in:
//   /public/images/drive-trafikkskule/
//   /public/videos/drive-trafikkskule/

const media: MediaItem[] = [
  // Row 1
  { type: "video",  src: "/videos/drive-trafikkskule/reklamevideo.mp4", alt: "Reklamevideo for Drive Trafikkskule", poster: "/images/drive-trafikkskule/reklamevideo-poster.jpg", label: "Reklamevideo", span: "wide" },
  { type: "photo",  src: "/images/drive-trafikkskule/foto-1.jpg", alt: "Drive Trafikkskule – foto 1", span: "normal" },
  // Row 2
  { type: "photo",  src: "/images/drive-trafikkskule/foto-2.jpg", alt: "Drive Trafikkskule – foto 2", span: "normal" },
  { type: "photo",  src: "/images/drive-trafikkskule/foto-3.jpg", alt: "Drive Trafikkskule – foto 3", span: "normal" },
  { type: "photo",  src: "/images/drive-trafikkskule/foto-4.jpg", alt: "Drive Trafikkskule – foto 4", span: "normal" },
  // Row 3
  { type: "photo",  src: "/images/drive-trafikkskule/foto-5.jpg", alt: "Drive Trafikkskule – foto 5", span: "normal" },
  { type: "video",  src: "/videos/drive-trafikkskule/dronevideo.mp4", alt: "Dronevideo over Volda", poster: "/images/drive-trafikkskule/dronevideo-poster.jpg", label: "Dronevideo — Volda", span: "wide" },
  // Row 4
  { type: "photo",  src: "/images/drive-trafikkskule/foto-6.jpg", alt: "Drive Trafikkskule – foto 6", span: "normal" },
  { type: "photo",  src: "/images/drive-trafikkskule/foto-7.jpg", alt: "Drive Trafikkskule – foto 7", span: "normal" },
  { type: "photo",  src: "/images/drive-trafikkskule/foto-8.jpg", alt: "Drive Trafikkskule – foto 8", span: "normal" },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DriveTrafikkkulePage() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  function openLightbox(index: number) {
    setLightboxIndex(index);
    setLightboxOpen(true);
  }

  function closeLightbox() {
    setLightboxOpen(false);
  }

  function prevItem() {
    setLightboxIndex((i) => (i - 1 + media.length) % media.length);
  }

  function nextItem() {
    setLightboxIndex((i) => (i + 1) % media.length);
  }

  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* ── Hero ── */}
      <section className="relative overflow-hidden px-6 pb-16 pt-32">
        {/* Purple glow blob */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/4 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/20 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-4xl">
          <FadeUp>
            {/* "Prosjekt pågår" badge */}
            <div className="mb-6">
              <span className="inline-block rounded-full border border-[#fbbf24]/25 bg-[#fbbf24]/10 px-4 py-1.5 text-sm font-semibold text-[#fbbf24]">
                Prosjekt pågår
              </span>
            </div>

            {/* Heading */}
            <h1 className="mb-3 font-fraunces text-5xl font-extrabold leading-[1.05] text-white sm:text-6xl md:text-7xl">
              Drive<br />Trafikkskule
            </h1>

            {/* Subtitle */}
            <p className="mb-6 text-sm tracking-wide text-white/40">
              Volda &amp; Ulsteinvik · Trafikkskule
            </p>

            {/* Service tags */}
            <div className="flex flex-wrap gap-2">
              {["Foto", "Video & Dronevideo", "Annonsering"].map((tag) => (
                <span
                  key={tag}
                  className="rounded border border-[#7c3aed]/30 bg-[#7c3aed]/15 px-3 py-1 text-sm text-[#a78bfa]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── Innhold (masonry grid) — Task 2 ── */}
      {/* TODO: add grid section */}

      {/* ── Lightbox — Task 3 ── */}
      {/* TODO: add lightbox modal */}

      {/* ── Resultater — Task 4 ── */}
      {/* TODO: add results placeholder */}

      {/* ── Footer nav — Task 4 ── */}
      {/* TODO: add footer nav */}

      <PageCTA heading="Vil du ha lignende resultater?" />
      <Footer />
    </main>
  );
}
```

> **Note on metadata:** `export const metadata` cannot be used in a `"use client"` file. The page title is set via the `<title>` tag in the root layout, but for per-page SEO with `"use client"`, use Next.js 16's `generateMetadata` workaround: keep the page as `"use client"` and export metadata from a separate `layout.tsx` in the same folder. Add this after the page file is created:

- [ ] **Step 3: Create the metadata layout file**

Create `app/prosjekter/drive-trafikkskule/layout.tsx`:

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drive Trafikkskule – Casestudie | Elevera",
  description: "Se hvordan Elevera leverte foto, video og dronevideo til Drive Trafikkskule i Volda og Ulsteinvik.",
  alternates: { canonical: "https://elevera.no/prosjekter/drive-trafikkskule" },
  openGraph: {
    title: "Drive Trafikkskule – Casestudie | Elevera",
    description: "Foto, video og dronevideo for Drive Trafikkskule — Volda & Ulsteinvik.",
    url: "https://elevera.no/prosjekter/drive-trafikkskule",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

- [ ] **Step 4: Verify build passes**

```bash
npm run build
```

Expected: `✓ Compiled successfully` — the page renders with hero section and two `TODO` stubs.

- [ ] **Step 5: Commit**

```bash
git add app/prosjekter/drive-trafikkskule/page.tsx app/prosjekter/drive-trafikkskule/layout.tsx
git commit -m "feat: add Drive Trafikkskule page scaffold with hero section"
```

---

## Task 2: Masonry grid with photo and video items

**Files:**
- Modify: `app/prosjekter/drive-trafikkskule/page.tsx` — replace `{/* TODO: add grid section */}` with the full grid section

The grid is 6 columns on desktop (`md:grid-cols-6`), single column on mobile. Each item wrapper uses `relative` + `aspect-video` (wide video) or `aspect-[4/3]` (normal photo). Photos use `next/image` with `fill`. Videos show a play button overlay. All items show a purple tint + expand SVG icon on hover.

- [ ] **Step 1: Replace the grid TODO with the full implementation**

Find `{/* TODO: add grid section */}` in `page.tsx` and replace it with:

```tsx
      {/* ── Innhold (masonry grid) ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeUp className="mb-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">Innhold</p>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 gap-3 md:grid-cols-6">
            {media.map((item, index) => {
              const isWide = item.span === "wide";
              const colSpan = isWide ? "md:col-span-4" : "md:col-span-2";
              const aspectClass = isWide ? "aspect-video" : "aspect-[4/3]";
              const sizes = isWide
                ? "(max-width: 768px) 100vw, 66vw"
                : "(max-width: 768px) 100vw, 33vw";

              return (
                <StaggerItem key={index} className={colSpan}>
                  <button
                    type="button"
                    className={`group relative w-full overflow-hidden rounded-xl ${aspectClass}`}
                    onClick={() => openLightbox(index)}
                    aria-label={`Åpne ${item.alt} i fullskjerm`}
                  >
                    {item.type === "photo" ? (
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                        sizes={sizes}
                      />
                    ) : (
                      <video
                        src={item.src}
                        poster={item.poster}
                        muted
                        playsInline
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                    )}

                    {/* Purple hover overlay */}
                    <div className="absolute inset-0 bg-[#7c3aed]/0 transition-colors duration-300 group-hover:bg-[#7c3aed]/20" />

                    {/* Expand icon (top-right, visible on hover) */}
                    <div className="absolute right-3 top-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="rounded-md bg-black/50 p-1.5">
                        <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5v-4m0 4h-4m4 0l-5-5" />
                        </svg>
                      </div>
                    </div>

                    {/* Video-only: play button overlay (always visible) */}
                    {item.type === "video" && (
                      <>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-white/40 bg-black/20">
                            <svg className="ml-0.5 h-4 w-4 text-white/80" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                        {item.label && (
                          <div className="absolute bottom-3 left-3">
                            <span className="text-xs text-white/40">{item.label}</span>
                          </div>
                        )}
                      </>
                    )}
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: `✓ Compiled successfully` — no TypeScript errors. The grid renders (images will 404 until real assets are added — that is expected).

- [ ] **Step 3: Commit**

```bash
git add app/prosjekter/drive-trafikkskule/page.tsx
git commit -m "feat: add Drive Trafikkskule masonry media grid"
```

---

## Task 3: Lightbox modal

**Files:**
- Modify: `app/prosjekter/drive-trafikkskule/page.tsx` — replace `{/* TODO: add lightbox modal */}` with the full lightbox implementation, and add `useEffect` + `useRef` hooks for scroll lock, focus, and keyboard navigation

The lightbox is a full-screen `motion.div` overlay rendered via `AnimatePresence`. Body scroll is locked while open. The close button receives focus on open. `Escape` closes, arrow keys navigate.

- [ ] **Step 1: Add scroll lock + keyboard + focus effects**

After the `nextItem` function (before the `return`), add three `useEffect` hooks:

```tsx
  // Body scroll lock
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  // Keyboard navigation
  useEffect(() => {
    if (!lightboxOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevItem();
      if (e.key === "ArrowRight") nextItem();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen]);

  // Focus close button when lightbox opens
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (lightboxOpen) {
      closeBtnRef.current?.focus();
    }
  }, [lightboxOpen]);
```

- [ ] **Step 2: Replace the lightbox TODO with the full modal**

Find `{/* TODO: add lightbox modal */}` and replace it with:

```tsx
      {/* ── Lightbox modal ── */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            onClick={closeLightbox}
          >
            {/* Content area — stop propagation so clicking media doesn't close */}
            <div
              className="relative flex h-full max-h-[90vh] w-full max-w-5xl items-center justify-center px-16"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = media[lightboxIndex];
                if (item.type === "photo") {
                  return (
                    <div className="relative h-full w-full">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-contain"
                        sizes="100vw"
                      />
                    </div>
                  );
                } else {
                  return (
                    <video
                      key={item.src}
                      src={item.src}
                      poster={item.poster}
                      controls
                      autoPlay
                      playsInline
                      className="max-h-full max-w-full rounded-xl"
                      aria-label={item.alt}
                    />
                  );
                }
              })()}
            </div>

            {/* Close button */}
            <button
              ref={closeBtnRef}
              type="button"
              onClick={closeLightbox}
              aria-label="Lukk"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous arrow */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prevItem(); }}
              aria-label="Forrige"
              className="absolute left-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next arrow */}
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); nextItem(); }}
              aria-label="Neste"
              className="absolute right-4 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/50 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
```

- [ ] **Step 3: Verify build passes**

```bash
npm run build
```

Expected: `✓ Compiled successfully` — no TypeScript errors.

- [ ] **Step 4: Commit**

```bash
git add app/prosjekter/drive-trafikkskule/page.tsx
git commit -m "feat: add Drive Trafikkskule lightbox modal with keyboard nav and scroll lock"
```

---

## Task 4: Results placeholder and footer navigation

**Files:**
- Modify: `app/prosjekter/drive-trafikkskule/page.tsx` — replace the two remaining `TODO` comments

- [ ] **Step 1: Replace the results TODO**

Find `{/* TODO: add results placeholder */}` and replace it with:

```tsx
      {/* ── Resultater (låst placeholder) ── */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <FadeUp>
            <div className="rounded-xl border border-dashed border-white/10 bg-white/5 px-6 py-10 text-center">
              <div className="mb-3 flex items-center justify-center gap-2 text-white/30">
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <p className="text-sm font-semibold text-white/30">Resultater &amp; tall</p>
              </div>
              <p className="text-sm text-white/20">
                Innsikt og kampanjeresultater publiseres når prosjektet er ferdig
              </p>
            </div>
          </FadeUp>
        </div>
      </section>
```

- [ ] **Step 2: Replace the footer nav TODO**

Find `{/* TODO: add footer nav */}` and replace it with:

```tsx
      {/* ── Footer navigation ── */}
      <div className="mx-auto max-w-6xl border-t border-white/10 px-6 pt-8 mt-16">
        <div className="flex items-center justify-between">
          <a
            href="/#prosjekter"
            className="text-sm text-white/40 transition-colors hover:text-white"
          >
            ← Tilbake til prosjekter
          </a>
          <a
            href="/#kontakt"
            className="text-sm font-semibold text-[#a78bfa] transition-colors hover:text-white"
          >
            Book et møte →
          </a>
        </div>
      </div>
```

- [ ] **Step 3: Verify build passes**

```bash
npm run build
```

Expected: `✓ Compiled successfully`.

- [ ] **Step 4: Commit**

```bash
git add app/prosjekter/drive-trafikkskule/page.tsx
git commit -m "feat: add Drive Trafikkskule results placeholder and footer navigation"
```

---

## Task 5: Portfolio integration

**Files:**
- Modify: `app/components/Portfolio.tsx` line 15 — change `href: null` to `href: "/prosjekter/drive-trafikkskule"`

- [ ] **Step 1: Update the Drive Trafikkskule project entry**

In `app/components/Portfolio.tsx`, find:

```ts
  {
    src: "/videos/drive-trafikkskule.mp4",
    client: "Drive Trafikkskule",
    href: null,
  },
```

Replace with:

```ts
  {
    src: "/videos/drive-trafikkskule.mp4",
    client: "Drive Trafikkskule",
    href: "/prosjekter/drive-trafikkskule",
  },
```

- [ ] **Step 2: Verify build passes**

```bash
npm run build
```

Expected: `✓ Compiled successfully`. The `projects` array has no explicit type annotation. After this change TypeScript will infer `href: string` for both entries, which is correct. No other changes are needed.

- [ ] **Step 3: Commit**

```bash
git add app/components/Portfolio.tsx
git commit -m "feat: link Drive Trafikkskule portfolio card to case study page"
```

---

## Notes for developer

- **Media assets:** Place real files in `/public/images/drive-trafikkskule/` and `/public/videos/drive-trafikkskule/` and update the `src`/`poster` values in the `media` array. The page works before assets exist — images will show broken placeholders, videos will show a black frame.
- **`font-fraunces`:** Must be configured in the Tailwind CSS v4 theme or via a `@font-face` rule. Check that it's already available on the site (it is used by the rest of the site), and that the Tailwind class `font-fraunces` resolves. If not, add the font-family mapping in `tailwind.config.ts` or the global CSS.
- **Results section:** When the project concludes, replace the locked placeholder content in section 4 with real metrics. No structural changes needed.
