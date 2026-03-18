# Homepage Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Oppdatere Elevera-forsiden fra "tech startup"-estetikk til "premium lokalt byrå" ved å innføre Fraunces serif-font, gull-aksent, fjerne dot-grid og raffinere knapper/komponenter.

**Architecture:** Endringene er rent visuelle og berører ingen dataflyt eller server-logikk. Alle komponentendringer er isolerte — ingen ny delt state eller nye komponenter. Font-oppsettet i `layout.tsx` og `globals.css` gjøres først da alle komponent-oppgaver avhenger av at `font-fraunces`-klassen er tilgjengelig.

**Tech Stack:** Next.js 16 App Router, TypeScript, Tailwind CSS v4, Framer Motion, next/font/google

**Spec:** `docs/superpowers/specs/2026-03-18-elevera-homepage-redesign.md`

---

## Filer som endres

| Fil | Endring |
|-----|---------|
| `app/layout.tsx` | Legg til Fraunces, fjern Montserrat |
| `app/globals.css` | Oppdater `--background`, legg til `--font-fraunces` token |
| `app/components/Hero.tsx` | Fjern DotGrid, oppdater H1, glow-blobs, linjegrid, knapp, trust-ikoner |
| `app/components/Navbar.tsx` | Oppdater bakgrunnsfarge, endre desktop CTA-knapp |
| `app/components/Services.tsx` | Oppdater H2, legg til gull-linje i kort, fjern hover-gradient, fjern skygge |
| `app/components/CTA.tsx` | Oppdater H2, bytt glow-blob, oppdater knapper, trust-ikoner |
| `app/components/Pricing.tsx` | Oppdater H2, pris-visning, badge, featured checkmarks, knapper |
| `app/components/FAQ.tsx` | Oppdater H2 |
| `app/components/WhyElevera.tsx` | Oppdater H2 |
| `app/components/Problems.tsx` | Oppdater H2 |

---

## Task 1: Font-oppsett og bakgrunnsfarge

**Files:**
- Modify: `app/layout.tsx`
- Modify: `app/globals.css`

- [ ] **Steg 1: Legg til Fraunces og fjern Montserrat i `layout.tsx`**

Åpne `app/layout.tsx`. Gjør disse tre endringene i nøyaktig rekkefølge:

**1a. Bytt importlinje øverst:**
```ts
// FØR:
import { Geist, Montserrat } from "next/font/google";
// ETTER:
import { Geist, Fraunces } from "next/font/google";
```

**1b. Erstatt Montserrat-konstantdefinisjon med Fraunces:**
```ts
// FJERN hele denne blokken:
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["700"],
  display: "swap",
});

// LEGG TIL i stedet:
const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["italic"],
  weight: ["700", "800"],
  display: "swap",
});
```

**1c. Oppdater `<body>` className — fjern `${montserrat.variable}`, legg til `${fraunces.variable}`:**
```tsx
<body className={`${geistSans.variable} ${fraunces.variable} antialiased`}>
```

- [ ] **Steg 2: Oppdater `globals.css`**

Åpne `app/globals.css`. Gjør to endringer:

**2a.** I `:root`-blokken, endre bakgrunnsfarge:
```css
--background: #0c0c0e;
```

**2b.** Inne i eksisterende `@theme inline { ... }`-blokk, legg til font-token på slutten av blokken (ikke lag en ny `@theme`-blokk):
```css
--font-fraunces: var(--font-fraunces);
```

- [ ] **Steg 3: Verifiser TypeScript**

```bash
cd /Users/mariusteigen/Desktop/elevera && npx tsc --noEmit
```
Forventet: ingen feil.

- [ ] **Steg 4: Verifiser visuelt i browser**

```bash
npm run dev
```
Åpne `http://localhost:3000`. Sjekk at bakgrunnsfargen er justert (svært subtil endring fra #0a0a0a → #0c0c0e). Ingen synlig font-endring ennå — det er forventet.

- [ ] **Steg 5: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "feat: legg til Fraunces-font, fjern Montserrat, oppdater bakgrunnsfarge"
```

---

## Task 2: Hero-komponent

**Files:**
- Modify: `app/components/Hero.tsx`

- [ ] **Steg 1: Fjern DotGrid og tilhørende imports**

**1a.** Slett import-linjen `import { useEffect, useRef } from "react"` helt. Behold `"use client"` og `import { motion } from "framer-motion"` — disse brukes fortsatt.

**1b.** Fjern hele `DotGrid`-funksjonen — alt fra `function DotGrid()` til og med den avsluttende `}` (ca. linje 6–103).

**1c.** Fjern `<DotGrid />` JSX-bruken inne i `return`-blokken.

- [ ] **Steg 2: Erstatt blå glow-blob med gull**

Finn `motion.div` med `bg-blue-500/15` (den andre blob-en). Erstatt den med:
```tsx
<motion.div
  className="absolute right-1/4 bottom-1/4 h-[400px] w-[400px] rounded-full bg-[#fbbf24]/8 blur-[90px]"
  animate={{ scale: [1, 1.18, 1], opacity: [0.5, 0.8, 0.5] }}
  transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 2 }}
/>
```

- [ ] **Steg 3: Legg til linjegrid på `<section>`**

Finn `<section className="relative flex min-h-screen ...">`. Legg til `style`-prop:
```tsx
style={{
  backgroundImage: `
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)
  `,
  backgroundSize: "80px 80px",
}}
```

- [ ] **Steg 4: Oppdater H1 og legg til gull-aksent-linje**

Merk: H1 i Hero er en `motion.h1`, ikke en vanlig `h1`. Finn:
```tsx
<motion.h1
  className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white ..."
```
Legg til `font-fraunces italic` i className.

Finn `<span className="bg-gradient-to-r from-[#7c3aed] to-[#60a5fa] bg-clip-text text-transparent">Alt du trenger</span>` — fjern `<span>`-taggene, la teksten stå som ren hvit tekst i H1.

Rett etter avsluttende `</h1>`, legg til gull-aksent-linjen:
```tsx
<div className="mx-auto my-4 h-0.5 w-7 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#fbbf24]" />
```

- [ ] **Steg 5: Oppdater primærknapp og trust-ikoner**

Finn `<a href="#kontakt" className="rounded-full bg-[#7c3aed] ...">`. Endre `rounded-full` → `rounded-lg`.

Finn de tre trust-signal `<span>`-elementene med SVG-checkmarks. Erstatt hvert SVG-element med:
```tsx
<span className="text-[#fbbf24] text-xs">✦</span>
```
(Behold de ytre `<span className="flex items-center gap-2">`-elementene og teksten — bare bytt ut SVG-blokken.)

- [ ] **Steg 6: Verifiser TypeScript**

```bash
npx tsc --noEmit
```
Forventet: ingen feil.

- [ ] **Steg 7: Verifiser visuelt**

Sjekk `http://localhost:3000`:
- Dot-grid er borte ✓
- H1 er i Fraunces italic ✓
- Tynn gull-linje under H1 ✓
- Gull-glow nede til høyre i hero ✓
- Hero-knapp er `rounded-lg` ✓
- Trust-ikoner er gull ✦ ✓

- [ ] **Steg 8: Commit**

```bash
git add app/components/Hero.tsx
git commit -m "feat: oppdater Hero — Fraunces H1, gull-blob, linjegrid, fjern dot-grid"
```

---

## Task 3: Navbar

**Files:**
- Modify: `app/components/Navbar.tsx`

- [ ] **Steg 1: Oppdater bakgrunnsfarge**

Finn `bg-[#0a0a0a]/80` i den kondisjonelle navbar-klassen (scrollet state) — endre til `bg-[#0c0c0e]/80`.

Finn `bg-[#0a0a0a]` i mobilmeny-panelet (den `<div>` som vises når `menuOpen` er true) — endre til `bg-[#0c0c0e]`.

- [ ] **Steg 2: Oppdater desktop «Book møte»-knapp**

Finn desktop-CTA `<a className="rounded-full bg-[#7c3aed] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#6d28d9] hover:shadow-lg hover:shadow-[#7c3aed]/25">`. Erstatt hele className med:
```
rounded-lg border border-[#fbbf24]/35 bg-transparent px-5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-[#fbbf24]/8
```

- [ ] **Steg 3: Verifiser TypeScript og visuelt**

```bash
npx tsc --noEmit
```

Sjekk `http://localhost:3000` — desktop navbar viser nå gull-outline «Book møte»-knapp. Mobilmeny er uendret.

- [ ] **Steg 4: Commit**

```bash
git add app/components/Navbar.tsx
git commit -m "feat: oppdater Navbar — gull-outline CTA-knapp, justert bakgrunnsfarge"
```

---

## Task 4: Services

**Files:**
- Modify: `app/components/Services.tsx`

- [ ] **Steg 1: Oppdater H2**

Finn `<h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">`. Legg til `font-fraunces italic` i className.

- [ ] **Steg 2: Oppdater tjenestekort i `.map()`**

For hvert kort: finn `<span className="mb-4 block text-5xl font-bold text-[#7c3aed]/20">{service.number}</span>`. Rett etter denne `<span>`, legg til gull-linjen:
```tsx
<div className="mb-4 h-0.5 w-7 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#fbbf24]" />
```

- [ ] **Steg 3: Fjern gradient-overlay og hover-skygge**

Inne i `<a>`-elementet: finn `<div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/0 to-[#7c3aed]/0 transition-all duration-500 group-hover:from-[#7c3aed]/5 group-hover:to-transparent" />` og slett den linjen helt.

På `<a>`-elementets className: fjern `hover:shadow-[0_0_30px_rgba(124,58,237,0.2)]`. Behold `hover:border-[#7c3aed]/50`.

- [ ] **Steg 4: Verifiser TypeScript og visuelt**

```bash
npx tsc --noEmit
```

Sjekk `http://localhost:3000` — seksjonstittelen er i Fraunces, hvert kort har tynn gull-linje under nummeret, hover er roligere.

- [ ] **Steg 5: Commit**

```bash
git add app/components/Services.tsx
git commit -m "feat: oppdater Services — Fraunces H2, gull-linje i kort, fjern hover-gradient"
```

---

## Task 5: CTA

**Files:**
- Modify: `app/components/CTA.tsx`

- [ ] **Steg 1: Oppdater H2**

Finn `<h2 className="mb-4 text-3xl font-bold text-white ...">`. Legg til `font-fraunces italic`.

- [ ] **Steg 2: Erstatt blå glow-blob med gull**

Finn `<div className="absolute right-0 bottom-0 h-48 w-48 rounded-full bg-blue-500/10 blur-[60px]" ...>`. Erstatt med:
```tsx
<div
  className="absolute right-0 bottom-0 h-52 w-52 rounded-full bg-[#fbbf24]/10 blur-[80px]"
  style={{ animation: "glowPulse2 6s ease-in-out infinite" }}
/>
```

- [ ] **Steg 3: Oppdater primærknapp**

Finn `<a href="https://calendar.google.com/..." className="rounded-full bg-[#7c3aed] ...">`. Endre `rounded-full` → `rounded-lg`.

- [ ] **Steg 4: Oppdater sekundærknapp («Ring oss»)**

Finn `<a href="tel:..." className="flex items-center gap-2 rounded-full border border-white/20 ...">`. Erstatt hele className med:
```
flex items-center gap-2 rounded-lg border border-[#fbbf24]/35 px-8 py-4 text-base font-semibold text-white/80 transition-all hover:border-[#fbbf24]/60 hover:bg-[#fbbf24]/8 hover:text-white
```

- [ ] **Steg 5: Oppdater trust-signal ikoner**

Finn de tre `<span className="flex items-center gap-1.5">`-elementene med SVG-checkmarks. Erstatt hvert SVG-element med:
```tsx
<span className="text-[#fbbf24] text-xs">✦</span>
```

- [ ] **Steg 6: Verifiser TypeScript og visuelt**

```bash
npx tsc --noEmit
```

Sjekk `http://localhost:3000` — CTA-seksjonen har Fraunces tittel, gull-glow nede til høyre, `rounded-lg` knapper, gull-outline «Ring oss», gull ✦-ikoner.

- [ ] **Steg 7: Commit**

```bash
git add app/components/CTA.tsx
git commit -m "feat: oppdater CTA — Fraunces H2, gull-blob, gull-outline sekundærknapp"
```

---

## Task 6: Pricing

**Files:**
- Modify: `app/components/Pricing.tsx`

- [ ] **Steg 1: Oppdater H2**

Finn seksjonstittelen `<h2 className="text-3xl font-bold text-white ...">`. Legg til `font-fraunces italic`.

- [ ] **Steg 2: Oppdater prisvisning**

Finn `<span className="text-4xl font-bold text-white">{plan.price} kr</span>`. Restrukturer til:
```tsx
<span className="text-4xl font-bold text-white">
  <span className="font-fraunces italic font-extrabold">{plan.price}</span> kr
</span>
```

- [ ] **Steg 3: Oppdater «Mest populær»-badge**

Finn `{plan.highlighted && (<span className="rounded-full bg-[#7c3aed] px-4 py-1 text-xs font-bold text-white">Mest populær</span>)}`. Erstatt `<span>`-elementet med:
```tsx
<span className="mb-4 inline-block rounded-full border border-[#fbbf24]/25 bg-[#fbbf24]/10 px-4 py-1 text-xs font-bold text-[#fbbf24]">
  ✦ Mest populær
</span>
```

- [ ] **Steg 4: Oppdater checkmarks i featured-kortet (Vekst)**

I `.map()`-render for `plan.features` finnes det en checkmark SVG med flat (ikke-betinget) className:
```tsx
<svg className="h-4 w-4 flex-shrink-0 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
```
Det finnes ingen eksisterende ternær her — du må **legge til en betinget className**. Endre linjen til:
```tsx
<svg
  className={`h-4 w-4 flex-shrink-0 ${plan.highlighted ? "text-[#fbbf24]" : "text-[#7c3aed]"}`}
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
```
Resten av SVG-elementet (path-blokken) beholdes uendret. Resultatet: Vekst-kort får gull checkmarks, Start og Pro beholder lilla.

- [ ] **Steg 5: Oppdater alle tre CTA-knapper**

Finn CTA-knappene for alle tre planer. Alle bruker `rounded-full` — endre til `rounded-lg` (behold øvrige klasser).

- [ ] **Steg 6: Verifiser TypeScript og visuelt**

```bash
npx tsc --noEmit
```

Sjekk `http://localhost:3000` — priser vises i Fraunces, «✦ Mest populær»-badge er gull, Vekst-kortet har gull checkmarks, alle plan-knapper er `rounded-lg`.

- [ ] **Steg 7: Commit**

```bash
git add app/components/Pricing.tsx
git commit -m "feat: oppdater Pricing — Fraunces pris/H2, gull badge og checkmarks"
```

---

## Task 7: FAQ, WhyElevera og Problems

**Files:**
- Modify: `app/components/FAQ.tsx`
- Modify: `app/components/WhyElevera.tsx`
- Modify: `app/components/Problems.tsx`

- [ ] **Steg 1: Oppdater H2 i FAQ**

Finn `<h2 ...>` i `FAQ.tsx`. Legg til `font-fraunces italic` i className.

- [ ] **Steg 2: Oppdater H2 i WhyElevera**

Finn `<h2 ...>` i `WhyElevera.tsx`. Legg til `font-fraunces italic` i className.

- [ ] **Steg 3: Oppdater H2 i Problems**

Finn `<h2 ...>` i `Problems.tsx`. Legg til `font-fraunces italic` i className.

- [ ] **Steg 4: Verifiser TypeScript**

```bash
npx tsc --noEmit
```
Forventet: ingen feil.

- [ ] **Steg 5: Visuell sluttsjekk**

Gå gjennom hele forsiden `http://localhost:3000` og sjekk:
- [ ] Alle seksjonstitlene (H2) er i Fraunces italic
- [ ] Dot-grid er borte fra Hero
- [ ] Gull-linje under H1 i Hero
- [ ] Gull-ikon ✦ på trust-signals (Hero + CTA)
- [ ] Gull-linje under kortnummer i Services
- [ ] Navbar desktop-knapp er gull-outline
- [ ] Alle primær CTA-knapper er `rounded-lg`
- [ ] CTA «Ring oss»-knapp er gull-outline
- [ ] Pricing: gull badge, gull checkmarks på Vekst
- [ ] Priser i Fraunces italic
- [ ] Bakgrunn er subtilt justert

- [ ] **Steg 6: Commit**

```bash
git add app/components/FAQ.tsx app/components/WhyElevera.tsx app/components/Problems.tsx
git commit -m "feat: oppdater FAQ, WhyElevera, Problems — Fraunces H2"
```

---

## Task 8: Push til Vercel

- [ ] **Steg 1: Push**

```bash
git push origin main
```

- [ ] **Steg 2: Verifiser deploy**

Sjekk at Vercel-builden går gjennom uten feil. Åpne produksjons-URL og gjenta den visuelle sjekklisten fra Task 7 Steg 5.
