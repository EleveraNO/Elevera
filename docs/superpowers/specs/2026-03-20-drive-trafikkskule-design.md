# Drive Trafikkskule — Case Study Page Design

## Overview

A case study / portfolio page for Drive Trafikkskule, a driving school client with locations in Volda and Ulsteinvik. Elevera has delivered photo, video, drone footage, and is working on ads (in progress). The page is built now with existing content and will be updated with results when the project concludes.

**URL:** `/prosjekter/drive-trafikkskule`
**File:** `app/prosjekter/drive-trafikkskule/page.tsx`

---

## Design Approach: Hybrid — Show Content Now, Results Later

The page is fully built with current media assets. A "Prosjekt pågår" badge sets expectations. The results section is a locked placeholder that will be filled in when the project is complete. This allows the page to be linked from the Portfolio section immediately.

---

## Style

Matches the existing site exactly:
- Background: `#0a0a0a`
- Accent: `#7c3aed` / `#a78bfa`
- Text: `white` / `white/70` / `white/50`
- Headings: `font-fraunces` (same as rest of site)
- Animations: `FadeUp`, `StaggerContainer`, `StaggerItem` from `../../components/animations`
- Imports: `<Navbar />` from `../../components/Navbar`, `<Footer />` from `../../components/Footer`, `<PageCTA />` from `../../components/PageCTA`

---

## Page Sections

### 1. Navbar
Standard `<Navbar />` component.

### 2. Hero
- "Prosjekt pågår" badge: `text-sm rounded-full border border-[#fbbf24]/25 bg-[#fbbf24]/10 text-[#fbbf24] px-4 py-1.5` — no pulsing dot, plain text only
- H1: `font-fraunces font-extrabold` — "Drive Trafikkskule"
- Subtitle: "Volda & Ulsteinvik · Trafikkskule" (`text-white/40`)
- Three service tags (`text-sm rounded border border-[#7c3aed]/30 bg-[#7c3aed]/15 text-[#a78bfa] px-3 py-1`):
  - "Foto"
  - "Video & Dronevideo"
  - "Annonsering"
- Subtle purple glow blob in background (same pattern as Cut O' Clock hero: `absolute rounded-full bg-[#7c3aed]/20 blur-[120px]`)
- No background photo in hero (unlike Cut O' Clock) — clean dark background so masonry grid below carries the visual weight

### 3. Innhold — Masonry Grid with Lightbox

**Section label:** "Innhold" (uppercase tracking label, `text-sm font-semibold uppercase tracking-widest text-[#7c3aed]`)

#### Grid structure

Desktop grid: **6 columns** (`grid-cols-6`). `span` values map to:
- `wide` → `col-span-4`
- `normal` → `col-span-2`
- `tall` is not used

**Aspect ratios** (applied as Tailwind classes on each grid item wrapper):
- Wide video items: `aspect-video` (16:9)
- Normal photo items: `aspect-[4/3]`
- Wide photo items (if any): `aspect-video` (16:9)
- All items use `relative` positioning so `next/image fill` and `<video>` can stretch to fill

Row layout:
- Row 1: `wide` video (reklamevideo, col-span-4) + `normal` photo (col-span-2)
- Row 2: Three `normal` photos (col-span-2 each = 6 total)
- Row 3: `normal` photo (col-span-2) + `wide` drone video (col-span-4)
- Row 4: Three `normal` photos (col-span-2 each)

The grid is `grid-cols-1` by default (mobile, single column stacked) and `md:grid-cols-6` on desktop. All `col-span-*` values are prefixed with `md:` so they only apply at medium breakpoints and above (e.g. `md:col-span-4`, `md:col-span-2`).

#### Each grid item

Photo items:
- `next/image` with `object-cover`, `rounded-xl`, `overflow-hidden`
- `sizes` prop based on span: wide items → `"(max-width: 768px) 100vw, 66vw"`, normal items → `"(max-width: 768px) 100vw, 33vw"`
- Hover: `hover:scale-[1.02] transition-transform duration-300`, purple overlay tint (`bg-[#7c3aed]/20`), SVG expand icon (Heroicons `ArrowsPointingOutIcon` or inline `<svg>`) top-right corner

Video items:
- `<video>` tag with `poster`, `muted`, `playsInline`, `rounded-xl`
- Play button overlay: white circle border with triangle (same pattern as Portfolio component)
- Label bottom-left: e.g. "Dronevideo — Volda" (`text-xs text-white/40`)
- Hover: same scale + overlay as photos, expand SVG icon top-right

Click on any item → opens lightbox.

#### Lightbox modal

- `"use client"` — uses `useState` for open/current index
- Framer Motion `AnimatePresence` wrapping the modal for fade in/out
- Full-screen overlay: `fixed inset-0 z-50 bg-black/90`
- Body scroll locked when open: add/remove `overflow-hidden` on `document.body` in `useEffect`
- Focus trapped within modal: first focusable element (close button) receives focus on open
- Centered content area: photo renders with `next/image` `object-contain` filling available space; video renders with native controls, **autoplays with sound** when lightbox opens (user explicitly clicked to open)
- Close button top-right: `×` SVG, `aria-label="Lukk"`
- Previous / next arrow buttons on left and right edges
- Keyboard: `useEffect` listener for `Escape` (close), `ArrowLeft` / `ArrowRight` (navigate) — cleaned up on unmount
- Wraps around at ends (last item → first, first item → last)

#### Media data type

Defined at top of file before the component:

```ts
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
  poster: string;   // required — used as thumbnail in grid card
  label?: string;   // shown bottom-left on video grid cards
  span: "wide" | "normal";
};

type MediaItem = PhotoItem | VideoItem;

const media: MediaItem[] = [
  // populated by developer when placing files in /public/
];
```

**Media assets location:** `/public/images/drive-trafikkskule/` and `/public/videos/drive-trafikkskule/`

### 4. Resultater — Locked Placeholder

Dashed border box with low-opacity text:
- Heading: "Resultater & tall" (plain text, no emoji — use a lock SVG icon if desired)
- Body: "Innsikt og kampanjeresultater publiseres når prosjektet er ferdig"
- Style: `border border-dashed border-white/10 bg-white/5 rounded-xl text-center py-10 px-6`

This section is replaced with real stats/results when the project concludes. No structural change needed — just swap the placeholder content.

### 5. Footer Navigation

Simple row at bottom of main content area:
- Left: `← Tilbake til prosjekter` (links to `/#prosjekter`)
- Right: `Book et møte →` (links to `/#kontakt`)
- Separated by `border-t border-white/10 mt-16 pt-8`

### 6. PageCTA + Footer
Standard `<PageCTA />` and `<Footer />` components.

---

## Portfolio Integration

Update `app/components/Portfolio.tsx` to link the Drive Trafikkskule card to `/prosjekter/drive-trafikkskule` (currently `href: null`).

---

## Metadata

```ts
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
```

---

## Files

| File | Change |
|------|--------|
| `app/prosjekter/drive-trafikkskule/page.tsx` | Create — full page |
| `app/components/Portfolio.tsx` | Modify — add href to Drive card |
| `public/images/drive-trafikkskule/` | Manual — developer places photos here |
| `public/videos/drive-trafikkskule/` | Manual — developer places videos here |

---

## Out of Scope

- Process/timeline section (not needed — this is media-focused, not a written case study)
- "Hva ble levert" checklist (covered implicitly by the service tags)
- Real results/stats (added later when project is done)
- Schema.org structured data (can be added later)
