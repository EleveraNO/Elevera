# Design System: Elevera — Tjenester Section

## 1. Visual Theme & Atmosphere

A warm, editorial luxury interface — like a high-end architecture magazine printed on dark paper with gold foil accents. The atmosphere is confident, intimate, and unhurried. Every section breathes. The reader should feel like they're being guided through a curated portfolio, not scrolling a template.

- **Density:** 3 — Art Gallery Airy. Aggressive whitespace. Each service gets its own spatial territory.
- **Variance:** 7 — Offset Asymmetric. Each service section has a distinct layout, but they share typography, color, and rhythm.
- **Motion:** 5 — Fluid CSS. Scroll-triggered reveals, parallax on images, staggered feature lists. No gratuitous animation.

## 2. Color Palette & Roles

- **Deep Charcoal** (#131312) — Primary background. The canvas. Nearly black with a warm amber undertone.
- **Warm Surface** (#1c1c1a) — Elevated cards, alternate section backgrounds. One notch lighter than canvas.
- **Burnished Gold** (#f2ca50) — Single accent. Used for: labels, numbers, CTAs, active states, checkmarks. Saturation ~75%.
- **Antique Gold** (#d4af37) — CTA button fill. Slightly darker, more muted. Hover state shifts to Burnished Gold.
- **Parchment** (#e5e2de) — Primary text. Headlines, titles. Warm off-white.
- **Aged Brass** (#d0c5af) — Body text, descriptions. Warm mid-tone.
- **Patina** (#99907c) — Tertiary text, metadata, timestamps. Low contrast, recedes.
- **Whisper Border** (rgba(77,70,53,0.2)) — Structural lines, card borders. Nearly invisible, felt more than seen.
- **Ghost Stroke** (rgba(153,144,124,0.15)) — Decorative ghost numbers. WebkitTextStroke only.

**Banned:** Purple, blue, neon, cyan, teal. No oversaturated accents. No pure black (#000000).

## 3. Typography Rules

- **Display/Headlines:** `Noto Serif` — Bold weight, italic for gold-accented words. Track-tight (-0.02em). Scale via clamp(2.5rem, 6vw, 5rem). Hierarchy through weight + color (gold italic vs white roman), not size alone.
- **Body:** `Manrope` — 400/500 weight. Leading 1.6. Max-width 36ch for descriptions. Color: Aged Brass (#d0c5af).
- **Labels/Eyebrows:** `Manrope` — 700 weight. All-caps. Letter-spacing 0.3em. Size 11–12px. Color: Burnished Gold.
- **Ghost Numbers:** `Noto Serif` italic. Size 9–18rem. Stroke-only (WebkitTextStroke). Color: transparent. Decorative, not informational.
- **Banned:** Inter, Arial, system fonts. Generic serifs (Times, Georgia, Garamond). Serif is allowed ONLY as Noto Serif for headlines.

## 4. Component Stylings

### Service Cards (the core component)
Each service is NOT a card. It's a **spatial zone** — text and image occupying a shared area with generous internal padding. No card borders, no card shadows. Separation comes from whitespace and gradient dividers.

### Buttons/CTAs
- Primary: Flat fill (#d4af37), dark text (#3c2f00). Border-radius 2px (nearly square). Tactile -2px translateY on active. Hover: shifts to #f2ca50 + subtle gold box-shadow glow (0 0 24px rgba(212,175,55,0.4)).
- Text CTA: Gold text, no background. Animated underline draws from left on hover. Arrow icon translates +6px right on hover.

### Feature Lists
- Vertical list with circular checkmark icons (gold fill circle + gold stroke checkmark).
- Staggered cascade reveal: each item fades in with 80ms delay.
- Alternative: horizontal pill/tag layout for variety (service 05).

### Tags/Pills
- Background: rgba(28,28,26,0.6) with backdrop-blur(8px). Border: Whisper Border. Border-radius: full (pill shape).
- Hover: border shifts to gold, text shifts to gold.

### Dividers
- Horizontal gradient line between sections: transparent → rgba(77,70,53,0.3) → transparent.
- Never a solid line. Always faded at edges.

## 5. Layout Principles

### The Five Layout Variants
Each service uses a different layout to prevent monotony:

1. **Hero Overlay** — Full-width background image. Text overlays left side with dark gradient. Ghost number fills right side. For the flagship service.
2. **Editorial Right** — 5-col text left, 7-col image right. Image breaks out of container (negative right margin). Ghost number behind text.
3. **Breakout Left** — Mirror of Editorial Right. Image breaks out to the left. Text on right.
4. **Giant Number** — Dark card with enormous centered ghost number (35vw). Content in 2-col grid: text left, features as card grid right.
5. **Horizontal Tags** — Text + horizontal feature pills on one row. Wide panoramic image below (21:9). Floating platform icons as background decoration.

### Grid Rules
- CSS Grid. 12-column base. Max-width 1400px centered.
- Section padding: 5rem vertical (clamp down on mobile).
- px-6 mobile, md:px-20 desktop.
- Single column collapse below 768px. No exceptions.

### Image Treatment
- All images have parallax (±20px on scroll).
- Hover: scale 1.0 → 1.04 with 700ms transition.
- Bottom fade gradient on all images.
- Images wrapped in #1c1c1a background with 0.5rem padding (film frame effect) for editorial layouts.
- Breakout images use negative margins (-80px) to extend beyond container.

## 6. Motion & Interaction

### Scroll-Triggered Reveals
- Each service section uses `useInView` with `once: true, margin: "-100px"`.
- Staggered entrance: number → title → description → features → CTA. Each with 80–100ms delay.
- Ease curve: cubic-bezier(0.21, 0.47, 0.32, 0.98) — weighty, decelerating.

### Parallax
- Images: ±20px vertical shift via `useScroll` + `useTransform`.
- Ghost numbers: scale from 0.8 → 1.0 on scroll entry.

### Feature List Cascade
- Each list item: opacity 0 → 1, x: -12px → 0. Delay: 0.3s base + i * 0.08s.

### Hover States
- Images: scale(1.04) with 700ms transition.
- CTAs: gap widens, arrow translates, underline draws in.
- Tags/pills: border and text shift to gold.
- Breakout images: gold glow shadow appears beneath (blur 30px).

### Performance
- Animate only `transform` and `opacity`.
- Grain texture on fixed `body::before` pseudo-element.
- `useReducedMotion` respected everywhere — all animations disabled if user prefers.

## 7. Anti-Patterns (Banned)

- No identical layouts across services. Each must be visually distinct.
- No 3-equal-column card grids.
- No centered service sections. Always asymmetric.
- No pure black (#000000) backgrounds.
- No Inter font.
- No generic serif fonts.
- No neon/purple/blue accents.
- No overlapping text on images without gradient protection.
- No "Scroll to explore" or bouncing scroll indicators in services.
- No oversaturated stock photos without color grading.
- No emojis.
- No AI copy clichés ("Elevate", "Seamless", "Next-Gen", "Unleash").
- No fake round numbers.
- No custom cursor effects.
- No animations that replay on re-scroll (once: true always).

## 8. Readability Upgrade Directive

The current services section prioritizes visual spectacle over scannability. For a visitor who wants to quickly understand "what do you offer?", the five wildly different layouts create cognitive overhead. 

**The fix:** Add a **scannable overview grid** at the top of the services section — a compact, at-a-glance summary of all 5 services. Then keep the deep-dive sections below for visitors who want detail.

### Overview Grid Spec
- 5 compact cards in a responsive grid (3+2 desktop, 2+2+1 tablet, 1-col mobile).
- Each card: service number + title + one-line description + arrow CTA.
- Cards are clickable — smooth-scroll to the corresponding deep-dive section.
- Active/hover state: gold left border, background shifts to Warm Surface.
- No images in the overview. Typography and spacing only.
- Staggered entrance animation.
