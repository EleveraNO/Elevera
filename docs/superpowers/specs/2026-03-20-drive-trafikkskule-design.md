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
- Animations: `FadeUp`, `StaggerContainer`, `StaggerItem` from `./components/animations`

---

## Page Sections

### 1. Navbar
Standard `<Navbar />` component.

### 2. Hero
- "Prosjekt pågår" badge: `rounded-full border border-[#fbbf24]/25 bg-[#fbbf24]/10 text-[#fbbf24]`
- H1: `font-fraunces font-extrabold` — "Drive Trafikkskule"
- Subtitle: "Volda & Ulsteinvik · Trafikkskule"
- Three service tags (`rounded border border-[#7c3aed]/30 bg-[#7c3aed]/15 text-[#a78bfa]`):
  - "Foto"
  - "Video & Dronevideo"
  - "Annonsering"
- Subtle purple glow blob in background (same pattern as Cut O' Clock hero)
- No background photo in hero (unlike Cut O' Clock) — clean dark background so masonry grid below carries the visual weight

### 3. Innhold — Masonry Grid with Lightbox

**Section label:** "Innhold" (uppercase tracking label in `text-[#7c3aed]`)

A CSS grid with varied column spans creating a masonry-like layout. Mix of photos and videos in the same grid. Each cell is an individual item.

**Grid layout (desktop, ~4 rows):**
- Row 1: Wide video (reklamevideo, `col-span` wider) + tall portrait photo
- Row 2: Three equal-width photos
- Row 3: One photo + wide drone video
- Row 4: Two equal photos

**On mobile:** Single column, full-width stacked items.

**Each grid item:**
- Photo items: `next/image` with `object-cover`, `rounded-xl`, `overflow-hidden`
- Video items: `<video>` tag with poster image, muted, `rounded-xl`. Play button overlay (circle with triangle). Label bottom-left (e.g. "Dronevideo — Volda").
- Hover state on all items: slight scale up (`hover:scale-[1.02]`), purple overlay tint, "⛶ åpne" hint top-right
- Click → opens lightbox modal

**Lightbox modal:**
- Full-screen dark overlay (`bg-black/90`)
- Centered content: photo fills screen with `object-contain`, or video plays with controls
- Close button top-right (×)
- Previous/next arrows to navigate between items
- `useCallback` + keyboard listener for Escape (close) and arrow keys (navigate)
- Framer Motion `AnimatePresence` for fade in/out

**Media assets location:** `/public/images/drive-trafikkskule/` and `/public/videos/drive-trafikkskule/`

**Media data array** (defined at top of file):
```ts
type MediaItem = {
  type: "photo" | "video";
  src: string;
  alt: string;
  poster?: string; // for video items
  label?: string;  // shown bottom-left on video cards
  span?: "wide" | "tall" | "normal"; // controls grid sizing
};
```

### 4. Resultater — Locked Placeholder

Dashed border box with low-opacity text:
- "📊 Resultater & tall"
- "Innsikt og kampanjeresultater publiseres når prosjektet er ferdig"
- Style: `border border-dashed border-white/10 bg-white/2 rounded-xl`

This section is replaced with real stats/results when the project concludes. No structural change needed — just swap the placeholder content.

### 5. Footer Navigation

Simple row at bottom of content:
- Left: `← Tilbake til prosjekter` (links to `/#prosjekter` or a future projects index)
- Right: `Book et møte →` (links to `/#kontakt`)
- Separated by `border-t border-white/10`

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
