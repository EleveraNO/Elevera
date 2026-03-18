# Elevera Homepage Redesign — Design Spec

**Dato:** 2026-03-18
**Scope:** Hovedside (`app/page.tsx`) og alle komponenter brukt på forsiden
**Mål:** Oppdatere stil og brand-tone fra "tech startup" til "premium lokalt byrå"

---

## Designretning

**Raffinert mørk** — beholder mørk bakgrunn og lilla identitet, men rydder opp i detaljer som gjør nåværende design se generisk ut. Resultatet skal signalisere at Elevera er seriøse og dyre uten å virke fremmed for lokale bedriftskunder i Ålesund.

---

## Typografi

| Bruk | Font | Stil |
|------|------|------|
| H1, H2 (seksjonstitler) | Fraunces | Italic, weight 700–800 |
| Brødtekst, labels, nav | Geist Sans (beholdes) | Normal |
| Priser i Pricing | Fraunces | Italic, weight 800 |

**Implementasjon:** Legg til Fraunces via `next/font/google` i `layout.tsx`. Bruk som CSS-variabel `--font-fraunces`.

---

## Fargepalett

| Token | Verdi | Bruk |
|-------|-------|------|
| Primær lilla | `#7c3aed` | Knapper, glow-blobs, border-aksenter |
| Sekundær gull | `#fbbf24` | Trust-ikoner (✦), «Mest populær»-badge, sekundær knapp-border, gull-linje under kortnummer, gull-glow i CTA |
| Bakgrunn | `#0c0c0e` | Sidebakgrunn (justert fra `#0a0a0a`) |
| Tekst primær | `#ffffff` | Overskrifter |
| Tekst sekundær | `rgba(255,255,255,0.50)` | Brødtekst |
| Tekst subtil | `rgba(255,255,255,0.30)` | Labels, metadata |

---

## Bakgrunn og animasjoner

### Fjernes
- Canvas-basert dot-grid animasjon (`DotGrid`-komponenten i `Hero.tsx`)

### Beholdes og justeres
- Animerte glow-blobs i Hero (lilla, allerede eksisterende)
- Ny gull-glow-blob tilføyes i Hero (høyre side / nedre hjørne): `rgba(251,191,36,0.08)`, blur 90px

### Ny tekstur
- Nesten usynlig linjegrid som CSS `background-image` på Hero-seksjonen:
  ```css
  background-image:
    linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
  background-size: 80px 80px;
  ```

---

## Komponent-endringer

### Hero (`components/Hero.tsx`)
- Fjern `DotGrid`-komponenten og all tilhørende canvas-kode
- H1: Fraunces italic — fjern gradient-tekst (`bg-clip-text text-transparent`), erstatt med ren hvit
- Legg til en tynn gull-linje (`28px × 2px`, gradient lilla→gull) under H1 som aksentelement
- Legg til gull-glow-blob (ny `motion.div`)
- Legg til subtilt linjegrid-bakgrunn på seksjonen

### Navbar (`components/Navbar.tsx`)
- «Book møte»-knapp: endre fra solid lilla til `border: 1px solid rgba(251,191,36,0.4)` med transparent bakgrunn og hvit tekst
  - Hover: `background: rgba(251,191,36,0.08)`

### Services (`components/Services.tsx`)
- H2: Fraunces italic
- Tjenestekort: legg til gull-linje (`28px × 2px`, gradient lilla→gull) under kortnummer, erstatter lilla glow-hover-effekt
- Hover-state beholdes men forenkles: `border-color: rgba(124,58,237,0.4)` uten `box-shadow`

### CTA (`components/CTA.tsx`)
- H2: Fraunces italic
- Legg til gull-glow-blob (`rgba(251,191,36,0.10)`, blur 80px) nede til høyre
- Sekundærknapp («Ring oss»): erstatt `border-white/20` med `border-[#fbbf24]/35`
- Trust-signal ikoner: bytt lilla SVG-checkmark ut med gull `✦`-tegn

### Pricing (`components/Pricing.tsx`)
- Prisvisning: wrap i Fraunces italic
- «Mest populær»-badge: endre fra lilla til gull (`text-[#fbbf24]`, `border-[#fbbf24]/25`, `bg-[#fbbf24]/10`)
- Checkmarks i featured-kort: endre fra lilla til gull

### FAQ, WhyElevera, Problems
- Seksjonstitlene (H2): Fraunces italic
- Ingen andre endringer

### Footer
- Ingen endringer

---

## Knapp-hierarki

| Type | Stil |
|------|------|
| Primær | `bg-[#7c3aed]`, hvit tekst, `border-radius: 8px` |
| Sekundær / outline | `border border-[#fbbf24]/35`, transparent, hvit tekst, gull-hover |
| Ghost | `border border-white/15`, transparent |

**Merk:** Avrunding endres fra full pill (`rounded-full`) til `rounded-lg` (8px) på primærknapper for å signalisere mer "byrå" enn "app".

---

## Ikke i scope

- Tjenestesider (tas separat)
- Blogg og prosjektsider
- Innholdsendringer / copywriting
- Nye seksjoner eller seksjonrekkefølge
- Mobilmeny-redesign

---

## Avhengigheter

- Legg til `Fraunces` i `next/font/google`-import i `layout.tsx`
- Legg til `.superpowers/` i `.gitignore`
