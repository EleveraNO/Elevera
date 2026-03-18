# Elevera Homepage Redesign — Design Spec

**Dato:** 2026-03-18
**Scope:** Hovedside (`app/page.tsx`) og alle komponenter brukt på forsiden
**Mål:** Oppdatere stil og brand-tone fra "tech startup" til "premium lokalt byrå"

---

## Designretning

**Raffinert mørk** — beholder mørk bakgrunn og lilla identitet, men rydder opp i detaljer som gjør nåværende design se generisk ut. Resultatet skal signalisere at Elevera er seriøse og dyre uten å virke fremmed for lokale bedriftskunder i Ålesund.

---

## Typografi

| Bruk | Font | Stil | Vekt |
|------|------|------|------|
| H1, H2 (alle seksjoner) | Fraunces | Italic | 700 |
| Priser i Pricing | Fraunces | Italic | 800 |
| Brødtekst, labels, nav | Geist Sans (beholdes) | Normal | varierer |

**Implementasjon i `layout.tsx`:**
```ts
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic"],       // må eksplisitt be om italic-variant
  weight: ["700", "800"],
  display: "swap",
});
```
Legg `fraunces.variable` inn i `<body className={...}>`.

**`globals.css` — to endringer:**

1. Oppdater bakgrunnsfarge i `:root`:
```css
--background: #0c0c0e;   /* var: #0a0a0a */
```

2. Legg til Fraunces-token **inne i eksisterende `@theme inline`-blokk** (ikke en ny `@theme`-blokk):
```css
@theme inline {
  /* ... eksisterende tokens ... */
  --font-fraunces: var(--font-fraunces);
}
```
Dette ser ut som en selv-referanse, men er korrekt: `next/font` injiserer CSS-variabelen på `<body>` ved runtime, og Tailwind v4's `@theme inline` registrerer den som token slik at `font-fraunces` blir en gyldig Tailwind-klasse.

Bruk klassen `font-fraunces italic font-bold` på alle H1/H2-elementer (weight 700). For prisvisning bruk `font-fraunces italic font-extrabold` (weight 800).

**Merk:** `layout.tsx` er en server component (ingen `"use client"`) — `next/font/google`-import fungerer korrekt i server components.

**Montserrat:** Fjern fra `layout.tsx`: (1) `Montserrat`-importen øverst, (2) `montserrat`-konstantdefinisjon, og (3) `${montserrat.variable}` fra `<body className={...}>`. Fonten brukes ikke i noen komponent.

---

## Fargepalett

| Token | Verdi | Bruk |
|-------|-------|------|
| Primær lilla | `#7c3aed` | Primærknapper, glow-blobs, border-aksenter |
| Sekundær gull | `#fbbf24` | Trust-ikoner (✦), «Mest populær»-badge, sekundærknapp-border, gull-linje under kortnummer, gull-glow i Hero og CTA |
| Bakgrunn | `#0c0c0e` | Sidebakgrunn (justert fra `#0a0a0a`) |
| Tekst primær | `#ffffff` | Overskrifter |
| Tekst sekundær | `rgba(255,255,255,0.50)` | Brødtekst |
| Tekst subtil | `rgba(255,255,255,0.30)` | Labels, metadata |

**Navbar bakgrunn:** Oppdater to hardkodede verdier i `Navbar.tsx`:
- Scrollet desktop-navbar: `bg-[#0a0a0a]/80` → `bg-[#0c0c0e]/80`
- Mobilmeny-panel: `bg-[#0a0a0a]` → `bg-[#0c0c0e]`

---

## Bakgrunn og animasjoner

### Fjernes
- Canvas-basert dot-grid animasjon — fjern hele `DotGrid`-komponenten og funksjonen fra `Hero.tsx`

### Beholdes og justeres
- Eksisterende animerte lilla glow-blobs i Hero beholdes uendret

### Ny gull-glow-blob i Hero
Erstatt eksisterende `bg-blue-500/15`-blob (den andre motion.div i Hero) med gull-blob:
```tsx
<motion.div
  className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#fbbf24]/8 blur-[90px]"
  animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.8, 0.5] }}
  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
/>
```
Den tredje `bg-violet-400/15`-bloben beholdes uendret. Merk: animasjonsverdiene på den erstattede blobben endres fra originalen (`scale: [1, 1.22, 1], opacity: [0.5, 0.85, 0.5]`) til nye verdier i snippet over — dette er tilsiktet for å gi gull-blobben en noe mykere bevegelse enn den lilla.

### Ny gull-glow-blob i CTA
Erstatt eksisterende `bg-blue-500/10`-blob (nede til høyre, `h-48 w-48 blur-[60px]`) med større gull-blob — størrelses- og blur-endringen er tilsiktet for å gi mer subtil varme. `glowPulse2`-keyframen er allerede definert inline i `CTA.tsx`:
```tsx
<div
  className="absolute right-0 bottom-0 h-52 w-52 rounded-full bg-[#fbbf24]/10 blur-[80px]"
  style={{ animation: "glowPulse2 6s ease-in-out infinite" }}
/>
```

### Subtilt linjegrid i Hero
Legg til som inline-style på Hero `<section>`:
```tsx
style={{
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
  `,
  backgroundSize: "80px 80px",
}}
```

---

## Knapp-hierarki (globalt for hele forsiden)

| Type | Klasser | Avrunding |
|------|---------|-----------|
| Primær | `bg-[#7c3aed] text-white font-semibold` | `rounded-lg` (8px) — erstatter `rounded-full` **alle steder** |
| Sekundær / outline | `border border-[#fbbf24]/35 text-white/80 font-semibold hover:bg-[#fbbf24]/8` | `rounded-lg` |
| Ghost | `border border-white/15 text-white/70` | `rounded-lg` |

`rounded-full` → `rounded-lg` gjelder **alle** CTA-knapper på forsiden: Hero, Navbar (desktop), Pricing, CTA-seksjonen.

**Mobilmeny:** Navbar mobilmeny er ikke i scope — `rounded-full bg-[#7c3aed]` på mobilknappen beholdes uendret for å unngå halvferdig redesign på mobil.

---

## Komponent-endringer

### Hero (`components/Hero.tsx`)
- Fjern `DotGrid`-komponenten og all tilhørende canvas-kode
- H1: legg til `font-fraunces italic` på `<h1>`-elementet (`font-bold` er allerede der, ikke dupliser). Fjern gradient-spannen rundt "Alt du trenger" (linje med `bg-gradient-to-r from-[#7c3aed] to-[#60a5fa] bg-clip-text text-transparent`) — behold teksten men fjern `<span>`-taggene slik at hele H1 er ren hvit
- Legg til gull-aksent-linje etter H1: `<div className="mx-auto my-4 h-0.5 w-7 bg-gradient-to-r from-[#7c3aed] to-[#fbbf24] rounded-full" />`
- Legg til gull-glow-blob (se over)
- Legg til linjegrid-bakgrunn på `<section>` (se over)
- Primærknapp: `rounded-full` → `rounded-lg`
- Trust-signal SVG-checkmarks: bytt ut med `<span className="text-[#fbbf24] text-xs">✦</span>`

### Navbar (`components/Navbar.tsx`)
- Oppdater bakgrunnsfarge: `#0a0a0a` → `#0c0c0e` (to steder)
- «Book møte»-knapp (desktop): endre til `rounded-lg border border-[#fbbf24]/35 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#fbbf24]/8`. Fjern `bg-[#7c3aed]`, `hover:bg-[#6d28d9]`, og `hover:shadow-lg hover:shadow-[#7c3aed]/25`. Merk: dette demoterer knappen fra primær til sekundær outline — tilsiktet. Den primære konverteringshandlingen på forsiden er Hero-CTA-knappen; navbar-knappen skal være tilgjengelig men ikke konkurrere visuelt.

### Services (`components/Services.tsx`)
- H2: `font-fraunces italic`
- Tjenestekort: legg til gull-linje rett etter kortnummeret:
  `<div className="mb-4 h-0.5 w-7 bg-gradient-to-r from-[#7c3aed] to-[#fbbf24] rounded-full" />`
- Fjern gradient-overlay `<div>` som er umiddelbar sibling **før** `<div className="relative z-10 flex flex-1 flex-col">` inne i `<a>`-elementet. Den har statiske klasser `absolute inset-0 bg-gradient-to-br from-[#7c3aed]/0 to-[#7c3aed]/0` og hover-klasser `group-hover:from-[#7c3aed]/5 group-hover:to-transparent`
- Hover-effekt: behold eksisterende `hover:border-[#7c3aed]/50` uendret, fjern kun `hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]`

### CTA (`components/CTA.tsx`)
- H2: `font-fraunces italic`
- Erstatt `bg-blue-500/10`-blob med gull-glow-blob (se over)
- Sekundærknapp («Ring oss»): erstatt hele className med `flex items-center gap-2 rounded-lg border border-[#fbbf24]/35 px-8 py-4 text-base font-semibold text-white/80 transition-all hover:border-[#fbbf24]/60 hover:bg-[#fbbf24]/8 hover:text-white` (fjerner `hover:border-white/40 hover:text-white` som ellers ville overskrevet gull-border ved hover)
- Primærknapp: `rounded-full` → `rounded-lg`
- Trust-signal SVG-checkmarks: bytt ut med `<span className="text-[#fbbf24] text-xs">✦</span>`

### Pricing (`components/Pricing.tsx`)
- H2 (seksjonstittelen): `font-fraunces italic`
- Prisvisning i alle tre planer: eksisterende kode er `<span className="text-4xl font-bold text-white">{plan.price} kr</span>`. Restrukturer til:
  ```tsx
  <span className="text-4xl font-bold text-white">
    <span className="font-fraunces italic font-extrabold">{plan.price}</span> kr
  </span>
  ```
  `kr`-enheten forblir i `text-4xl`-spannen men utenfor Fraunces-spannen.
- «Mest populær»-badge på featured-kort: eksisterende badge er en solid pill uten border (`rounded-full bg-[#7c3aed] px-4 py-1 text-xs font-bold text-white`). Erstatt hele elementet med:
  ```tsx
  <span className="mb-4 inline-block rounded-full border border-[#fbbf24]/25 bg-[#fbbf24]/10 px-4 py-1 text-xs font-bold text-[#fbbf24]">
    ✦ Mest populær
  </span>
  ```
- Checkmarks i **featured-kortet (Vekst) kun**: endre SVG `className` fra `text-[#7c3aed]` til `text-[#fbbf24]`
- Checkmarks i Start- og Pro-kortene beholdes lilla
- Alle tre plan-kortenes CTA-knapper: endre `rounded-full` → `rounded-lg`. Behold øvrige klasser uendret — Start og Pro beholder sin ghost-stil (`border-white/20`, `text-white`), endring av disse til design-token-verdiene (`border-white/15`, `text-white/70`) er ikke i scope for denne iterasjonen.

### FAQ (`components/FAQ.tsx`)
- H2 (seksjonstittelen): `font-fraunces italic`
- Ingen andre endringer

### WhyElevera (`components/WhyElevera.tsx`)
- H2 (seksjonstittelen): `font-fraunces italic`
- Ingen andre endringer

### Problems (`components/Problems.tsx`)
- H2 (seksjonstittelen): `font-fraunces italic`
- Ingen andre endringer

### Footer (`components/Footer.tsx`)
- Ingen endringer

---

## Ikke i scope

- Tjenestesider (tas separat)
- Blogg og prosjektsider
- Mobilmeny-redesign
- Innholdsendringer / copywriting
- Nye seksjoner eller endret seksjonrekkefølge
- Marquee, Portfolio, BookingCalendar, LogoIntro, CookieBanner
- `PageCTA.tsx` — brukes kun på tjenestesider, ikke på forsiden
