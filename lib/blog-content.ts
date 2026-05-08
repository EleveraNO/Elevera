/**
 * Single source of truth for blog posts when serving markdown
 * to AI crawlers and LLM consumers.
 *
 * Each entry mirrors the React-rendered article at
 * /blogg/{slug}, condensed to the key arguments so an LLM
 * can cite it without round-tripping the HTML.
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  readTime: string;
  publishedDate: string; // ISO 8601
  displayDate: string;   // Human-readable Norwegian
  author: string;
  body: string;          // Markdown
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "google-business-profile-guide",
    title:
      "Google Business Profile for lokale bedrifter — komplett 2026-guide",
    description:
      "Den gratis Google-tjenesten som ofte gir mer trafikk enn nettsiden. De fleste lokale bedrifter har den satt opp halvveis — eller ikke i det hele tatt.",
    category: "Lokal SEO",
    readTime: "10 min",
    publishedDate: "2026-04-18",
    displayDate: "18. april 2026",
    author: "Marius Teigen Tverbakk",
    body: `Det finnes et gratis Google-verktøy som ofte gir mer trafikk enn selve nettsiden. De fleste lokale bedrifter i Ålesund har det enten ignorert, satt opp halvveis, eller glemt at det finnes. Her er alt du trenger å vite for å fikse det i 2026.

## Det korte svaret

Google Business Profile (tidligere Google My Business) er den gratis kortversjonen av bedriften din som dukker opp i Google Maps og i søkeresultater. Når noen googler "frisør Ålesund", er det de tre profilene i det lokale Maps-kartet som får mesteparten av klikkene — ikke nettsidene under.

Hvis du driver en lokal bedrift og ikke har en fullstendig profil, taper du kunder hver dag. Det er gratis å fikse, det tar 20 minutter å sette opp, og det er sannsynligvis den største forskjellen du kan gjøre for synligheten din i år.

## Hvorfor GBP er det første du bør fikse

Før du bruker penger på annonser, SEO eller ny nettside, bør profilen være ryddig. Her er hvorfor:

- **Det er gratis.** Du betaler null for å dukke opp i Maps. Det er den eneste Google-tjenesten hvor en liten bedrift stiller likt med store aktører.
- **Det gir lokalt fokus.** Når noen søker fra Ålesund, prioriterer Google bedrifter i Ålesund. En Oslo-basert konkurrent kan ha bedre SEO globalt, men slår deg ikke i lokal-pakken.
- **Det tar kjøpsklar trafikk.** Folk som søker "rørlegger Spjelkavik" vil ikke lese en bloggpost. De vil ringe noen i dag. GBP lar dem ringe direkte fra søkeresultatet.
- **Det gir deg data du ellers ikke får.** Du ser hvor mange som fant deg via Maps, hvor mange som ringte, hvor mange som ba om veibeskrivelse.

## Slik setter du opp profilen fra scratch

1. Gå til business.google.com og logg inn med en Google-konto. Bruk en konto du faktisk eier langsiktig — ikke en ansatt som slutter neste år.
2. Søk opp bedriften din. Hvis Google har registrert den fra før, claimer du bare eierskap. Hvis ikke, klikker du "Legg til bedriften din" og registrerer den selv.
3. Velg kategori. Dette er viktigere enn folk tror — hovedkategorien din bestemmer hvilke søk du dukker opp på. Velg den mest spesifikke som passer. "Frisør" er bedre enn "Skjønnhet og velvære".
4. Legg inn adresse hvis kundene kommer til deg. Hvis du reiser til kundene (rørlegger, fotograf), velg "tjenesteområde" i stedet for adresse.
5. Legg inn telefon, nettside, åpningstider.
6. Bekreft. Google sender enten en SMS, ringer deg, eller sender et fysisk postkort med en kode. For de fleste små norske bedrifter blir det postkortet — kommer innen 5–7 virkedager.

## De 7 feltene som faktisk flytter nåla

### 1. Bedriftsnavn — skriv det som folk sier det
Ikke legg til søkeord du ikke heter. "Pettersen VVS AS" er riktig. "Pettersen VVS Ålesund — Rørlegger og Baderomsservice" er både imot Googles retningslinjer og skurrer for kundene.

### 2. Kategori — det mest avgjørende ene valget
Du kan velge én hovedkategori og flere underkategorier. Bruk underkategoriene. En frisørsalong kan ha "Frisør" som hovedkategori, og legge til "Barberer", "Hårfargesalong" og "Spa" som underkategorier. Hver ekstra kategori åpner et nytt søk du kan dukke opp på.

### 3. Beskrivelse — 750 tegn, bruk alle
Skriv konkret om hva du gjør, hvem du gjør det for, og hvor. Nevn byen/kommunen minst to ganger. Ingen floskler.

### 4. Tjenester — legg inn alt du tilbyr
Hver tjeneste du legger inn er et ekstra søk du kan dukke opp på.

### 5. Bilder — det første folk ser
Profiler med minst 10 gode bilder får dobbelt så mange klikk som profiler uten. Ikke bruk stock-bilder. Ærlige mobilbilder er bedre enn fine stock-bilder.

### 6. Åpningstider — inkluder helligdager
Feil åpningstider er en av de største klagene i Google-anmeldelser. Oppdater påsken, julen og 17. mai.

### 7. Anmeldelser — start i dag
En profil med 20+ anmeldelser og gjennomsnitt over 4.5 stjerner gjør det bedre enn en profil med 500 anmeldelser og 4.1 stjerner. Kvalitet og respons slår volum.

## Vanlige feil hos lokale bedrifter

- Ingen bilder, eller kun logo
- Utdaterte åpningstider
- Ubesvarte anmeldelser — spesielt de dårlige
- Feil kategori (bilverksted med kategori "Bilforhandler")
- Ingen posts (funksjonen 99% av norske bedrifter aldri bruker)
- Nettside-lenke som peker til forsiden, uansett tjeneste

## Slik får du flere anmeldelser

Send en kort SMS eller e-post 24 timer etter at jobben er gjort med en direkte anmeldelses-lenke fra GBP-adminen. Svar på alle anmeldelser innen 48 timer — gode, dårlige, middels. Svarene dine er offentlig markedsføring.

## Posts-funksjonen ingen bruker

GBP lar deg publisere små posts direkte på profilen. Jeg anbefaler minst én i måneden. Ikke fordi den får mye klikk, men fordi Google registrerer at profilen er aktiv. Aktive profiler rangerer bedre.

## Oppdateringsrytme

- **Ukentlig:** Sjekk meldinger og svar anmeldelser.
- **Månedlig:** Publiser én post. Sjekk at åpningstidene stemmer.
- **Kvartalsvis:** Legg til 3–5 nye bilder. Se gjennom statistikken.
- **Årlig:** Gå gjennom tjenestelisten og beskrivelsen.

Total tidsbruk: rundt 1 time i måneden.

## Hva GBP ikke kan gjøre

GBP er grunnmuren, ikke hele markedsføringen. Det dekker ikke dybde (nettsiden din er fortsatt hovedstedet for detaljer), salgsprosessen, rangering utenfor lokalt, eller betalt annonsering (det er Google Ads).

## Ofte stilte spørsmål

**Koster Google Business Profile noe?** Nei. Det er helt gratis.

**Hvor lang tid tar oppsett?** Selve oppsettet 15–20 minutter. Verifiseringen via postkort tar 5–7 virkedager.

**Trenger jeg en nettside for å ha GBP?** Nei, men hvis du har en bør den være koblet til profilen.

**Hvor ofte bør jeg oppdatere?** Minst én post i måneden. Svar på alle anmeldelser innen 48 timer.

**Hva gjør jeg ved dårlig anmeldelse?** Svar rolig, innen 48 timer. Takk for tilbakemeldingen, beklag, tilby vei videre. Folk leser svarene dine mer enn selve anmeldelsen.`,
  },
  {
    slug: "sosiale-medier-bedrift-pris",
    title: "Hva koster sosiale medier-styring for bedrifter?",
    description:
      "Du vet du burde poste oftere. Men hva koster det å la noen andre gjøre det? Her er de ærlige prisene — og hva du bør passe på.",
    category: "Sosiale medier",
    readTime: "9 min",
    publishedDate: "2026-04-12",
    displayDate: "12. april 2026",
    author: "Marius Teigen Tverbakk",
    body: `Du vet at bedriften din burde vært mer aktiv på Instagram. Kanskje TikTok også. Men hvem har tid? Og hva koster det egentlig å la noen andre gjøre det?

## Det korte svaret

Regn med 5 000 til 15 000 kr per måned hos et norsk byrå. Under 5 000 kr er det sjelden nok timer til å gjøre en skikkelig jobb. Over 15 000 kr er du inn i pakker der annonsering, fotoshoots og strategi er inkludert.

## Hva prisene faktisk betyr i praksis

Problemet med å bare se på månedsprisen er at det som er inkludert varierer enormt.

| Prisnivå | Hva du typisk får | Din innsats |
|---|---|---|
| 3 000–5 000 kr/mnd | Strategi og rådgivning. Du lager og poster innholdet selv. | Mye |
| 5 000–8 000 kr/mnd | Ferdig innhold 2–3x/uke. Du godkjenner og de poster. | Litt |
| 8 000–12 000 kr/mnd | Alt over + fotoshoot, stories, community management. | Nesten ingenting |
| 12 000–20 000 kr/mnd | Alt over + annonsering, video, strategi, rapportering. | Ingenting |

Forskjellen er ikke prisen — det er hva du faktisk slipper å gjøre.

## Kan du gjøre det selv?

Ja. Det er fullt mulig. Men regn med 8–15 timer per uke for å gjøre det skikkelig — inkludert innholdsproduksjon, tekstskriving, publisering, svar på meldinger og analyse. Det er ikke et spørsmål om du kan gjøre det selv, men om du bør bruke tiden din på det.

## Hva du bør se etter i et byrå

- **Lager de innholdet selv?** Mange byråer forventer at du leverer bilder og tekst. Da betaler du egentlig bare for noen som trykker "publiser".
- **Poster de for deg, eller bare planlegger?** Strategi er fint — men det som teller er at ting faktisk blir publisert.
- **Svarer de på meldinger?** Community management er halvparten av jobben.
- **Får du se resultater?** Månedlig rapport med konkrete tall på rekkevidde, engasjement og følgervekst.
- **Kjenner de bransjen din?** Et byrå som har jobbet med lokale bedrifter forstår at du ikke trenger viralt innhold — du trenger innhold som treffer folk i nærområdet ditt.

## Er det verdt pengene?

80 prosent av forbrukere sjekker en bedrifts Instagram før de tar kontakt. Hvis de finner en konto som ikke har postet på tre uker, med bilder tatt i dårlig lys og ingen svar på kommentarer — de går videre. Til konkurrenten som ser mer profesjonell ut.

## Hva vi tar for det

Hos Elevera starter sosiale medier-styring fra 6 000 kr/mnd som enkelttjeneste. Trenger du mer — annonsering, fotoshoot eller flere plattformer — har vi pakker fra 7 900 til 22 900 kr/mnd.`,
  },
  {
    slug: "markedsforingsbyraa-alesund",
    title: "Markedsføringsbyrå i Ålesund — hva bør du se etter?",
    description:
      "Hva gjør et markedsføringsbyrå, hva koster det, og hva skiller et godt byrå fra resten? En praktisk guide for bedrifter i Ålesund.",
    category: "Markedsføring",
    readTime: "8 min",
    publishedDate: "2026-03-24",
    displayDate: "24. mars 2026",
    author: "Marius Teigen Tverbakk",
    body: `## Hva gjør et markedsføringsbyrå

Et godt markedsføringsbyrå for lokale bedrifter på Sunnmøre leverer tre ting:

1. **Innholdsproduksjon** — foto, video, tekst
2. **Kanal-drift** — nettside, sosiale medier, SEO, annonser
3. **Måling** — hva virker og hva må endres

De dårlige byråene gjør bare én av disse. De gode lager helheten.

## Hva koster det?

| Tjeneste | Månedlig pris |
|---|---|
| SoMe-styring | 5 000–15 000 kr |
| Nettside (retainer) | 1 500–5 000 kr |
| SEO | 4 000–12 000 kr |
| Annonsering (Meta/Google) | 3 500–10 000 kr + mediabudsjett |
| Full pakke | 10 000–25 000 kr |

Mediabudsjett (pengene Facebook/Google tar) er i tillegg. Et byrå som ikke skiller honorar fra annonsebudsjett er et byrå du ikke skal bruke.

## Hva skiller et godt byrå

- **De viser resultater**, ikke bare aktivitet. "Vi publiserte 12 poster" er ikke resultat. "Vi fikk 34 leads" er resultat.
- **De kjenner lokalt**. Et Oslo-byrå uten kjennskap til Ålesund vil produsere generisk innhold.
- **De sier nei.** Gode byråer takker nei til prosjekter de ikke kan levere på. Dårlige sier ja til alt.
- **De bygger helheten.** Nettside, bilder, sosialt og annonser fra samme kilde = konsistent merkevare. Tre leverandører = tre ulike stemmer.

## Rød flagg

- Garantier om "førsteplass på Google" — umulig å garantere
- Pris uten beskrivelse av timebruk eller leveranser
- Ingen referanser du kan ringe
- Lange bindingstider (over 12 mnd)
- Rapporter fulle av visninger og likes, ingen leads

## Hva du bør spørre om

1. Hvem eier innholdet etter avtaletid?
2. Får jeg rapportere månedlig?
3. Kan jeg si opp med 30 dagers varsel?
4. Hvem er faktisk kontaktperson — og hvor mange kunder har de?
5. Hva måler dere suksess på?

## Om Elevera

Vi er et lite byrå i Ålesund. Vi tar ikke inn hundre kunder. Men de vi tar inn, følger vi opp skikkelig — fra foto og video til nettside, SEO og annonser. Alt fra én person.`,
  },
  {
    slug: "dronevideo-pris",
    title: "Hva koster dronevideo? Prisene og hva du faktisk betaler for",
    description:
      "En halvdag, en hel dag, råfiler eller ferdig redigert video? Vi rydder opp i prisforvirringen og forteller deg hva som faktisk påvirker prisen.",
    category: "Dronevideo",
    readTime: "7 min",
    publishedDate: "2026-03-18",
    displayDate: "18. mars 2026",
    author: "Marius Teigen Tverbakk",
    body: `## Det korte svaret

- **Halvdag (2–4 timer):** 2 500–5 000 kr
- **Hel produksjonsdag:** 5 000–12 000 kr (med redigering, ferdig video)
- **Enkel råfil:** 1 500–2 000 kr

Prisen avhenger av kompleksitet, redigering, reiseavstand og antall leveranser.

## Hva påvirker prisen

1. **Timer opptak** — jo lengre, jo mer
2. **Redigering** — råfil < enkel klipp < fullt redigert med musikk, tekst og fargekorrigering
3. **Reiseavstand** — utenfor Sunnmøre tilkommer reise
4. **Kompleksitet** — kveldsopptak, bemannede luftromsoner, dårlig vær
5. **Antall leveranser** — 1 video vs 5 klipp til ulike kanaler

## Krav i Norge

Piloter som flyr drone kommersielt må ha godkjent dronepilotsertifikat. Alle seriøse leverandører er sertifisert og forsikret. Spør om dokumentasjon før du bestiller.

## Vanlige bruksområder

- Eiendomsmarkedsføring
- Reklamefilm for bedrifter
- Dokumentasjon av anleggsprosjekter
- Reiseliv og destinasjonsinnhold
- Arrangementer
- Sosiale medier-innhold

Dronevideo er spesielt effektivt når du vil vise omgivelser, størrelse eller beliggenhet.

## Hva du bør spørre om

- Hvilke videoer leveres (format, lengde, antall)?
- Er reise og redigering inkludert?
- Hvem eier rettighetene etterpå?
- Kan jeg få råfiler hvis jeg vil?
- Forsikring og sertifisering?

## Hva vi tar for det

Hos Elevera er dronevideo inkludert i Partner-pakken (fra 22 900 kr/mnd) eller bestilles som enkeltstående oppdrag fra 4 000 kr.`,
  },
  {
    slug: "nettside-bedrift-pris",
    title: "Hva koster en nettside til bedriften? Ærlige priser",
    description:
      "Fra null kroner til 150 000 kr — prisen på en bedriftsnettside varierer enormt. Her er hva du faktisk trenger, og når du betaler for mye.",
    category: "Nettside",
    readTime: "9 min",
    publishedDate: "2026-03-31",
    displayDate: "31. mars 2026",
    author: "Marius Teigen Tverbakk",
    body: `## Prisspenn for en bedriftsnettside

| Nivå | Pris | Hva du får |
|---|---|---|
| DIY (Wix, Squarespace) | 0–200 kr/mnd | Mal, selvbygget, ingen hjelp |
| Frilansstudent | 3 000–10 000 kr | Én nettside, mal-basert, usikker kvalitet |
| Frilansprofesjonell | 15 000–40 000 kr | Tilpasset design, god kvalitet |
| Lite byrå | 25 000–80 000 kr | Design + SEO + bilder + tekster |
| Stort byrå | 80 000–300 000 kr | Prosjektledelse, flere leverandører |

Månedlig retainer (drift, oppdateringer, hosting) kommer vanligvis i tillegg — 500–5 000 kr/mnd.

## Hva en seriøs pris faktisk dekker

1. **Design** — tilpasset din merkevare, ikke mal
2. **Utvikling** — rask laste-tid, mobiltilpasset
3. **Tekster** — skrevet for konvertering, ikke bare informasjon
4. **Bilder** — egne eller profesjonelle, aldri stock
5. **SEO** — struktur, hastighet, Google-venner
6. **Drift** — oppdateringer, hosting, backup

Betaler du 5 000 kr får du 1–2 av disse. Betaler du 80 000 kr får du alle 6.

## Når du betaler for mye

- Byrået bruker WordPress-mal (må ikke koste mer enn 20 000)
- Du leverer alle tekstene og bildene selv (rabatt bør gjelde)
- Ingen lenke til tidligere prosjekter
- Estimat uten spesifikasjon

## Hva du faktisk trenger som lokal bedrift

De fleste lokale Ålesund-bedrifter trenger:
- 5–8 sider (forside, om, tjenester, kontakt, evt. produkter)
- Mobiloptimalisert (97% av besøk er mobil i 2026)
- Rask laste-tid (under 2 sek)
- Tydelig kontakt-CTA på hver side
- Kobling til Google Business Profile
- Grunnleggende SEO

Alt over dette er bonus.

## Hva vi tar for det

Hos Elevera er nettside inkludert i alle pakker fra 7 900 kr/mnd — hosting, oppdateringer og SEO inngår.`,
  },
  {
    slug: "facebook-annonser-tips",
    title: "Facebook-annonser for småbedrifter — hva som faktisk fungerer",
    description:
      "Mange lokale bedrifter kaster bort penger på Facebook-annonser. Her er de vanligste feilene — og hva du bør gjøre i stedet.",
    category: "Annonsering",
    readTime: "8 min",
    publishedDate: "2026-04-01",
    displayDate: "1. april 2026",
    author: "Marius Teigen Tverbakk",
    body: `## De 5 vanligste feilene

### 1. Booste innlegg
"Boost post"-knappen er den dyreste knappen Facebook lager. Den gir deg dårlig targeting og ingen kontroll på visningene. Bruk Ads Manager i stedet.

### 2. Ingen klar CTA
En annonse uten klar handling er en annonse som får likes. Likes betaler ikke regningene. Bruk "Bestill nå", "Få tilbud", "Les mer" — ikke bare fine bilder.

### 3. Feil målgruppe
De fleste lokale bedrifter burde targete en radius rundt bedriften (5–30 km) + demografi. Ikke "alle voksne i Norge".

### 4. Ingen oppfølging
Annonsen tar dem til landingsside. Landingssiden må være tilpasset annonsen — samme budskap, samme tilbud. 80% av annonseutgifter kaster man fordi landingssiden ikke leverer.

### 5. Ingen måling
Hvis du ikke vet hva én lead koster, vet du ikke om det lønner seg.

## Hva som fungerer for lokale bedrifter

- **Video foran stillbilder.** Meta prioriterer video, det er billigere CPM.
- **Korte annonser.** Headline 5 ord. Primærtekst 1–2 linjer.
- **Retargeting.** Folk som har besøkt nettsiden er 10x mer sannsynlig til å konvertere.
- **Én kampanje, én målgruppe, én CTA.** Ikke mange varianter i samme kampanje.
- **Bytt ut creative hver 2–4 uke.** Annonse-tretthet skjer raskt.

## Budsjett

Minimum 3 000 kr/mnd for å få meningsfulle data. Under det er det bare testing. 5 000–15 000 kr/mnd er der lokale bedrifter ser ROI.

## Hva vi tar for det

Hos Elevera er Meta-annonsering inkludert i Partner-pakken (fra 22 900 kr/mnd). Mediabudsjett (det du betaler til Meta) kommer i tillegg.`,
  },
  {
    slug: "instagram-lokale-kunder",
    title: "Slik bruker du Instagram til å få flere kunder lokalt",
    description:
      "Mange lokale bedrifter er på Instagram, men få bruker det på en måte som faktisk gir kunder. Her er det som fungerer.",
    category: "Sosiale medier",
    readTime: "6 min",
    publishedDate: "2026-03-13",
    displayDate: "13. mars 2026",
    author: "Marius Teigen Tverbakk",
    body: `## Det som faktisk virker

### Geo-tagging
Bruk lokasjon på hver post. Det er slik folk finner deg når de søker lokalt. "Ålesund", spesifikt sted (f.eks. "Brosundet"), landemerker.

### Hashtags — lokale + bransje
3–5 lokale (#ålesund, #sunnmøre, #alesund), 3–5 bransjerelaterte, 2–3 merkevarespesifikke. Aldri 30 hashtags.

### Stories > feed
Stories får mer organisk rekkevidde for lokale bedrifter i 2026. Hver dag, minst én.

### Reels med lyd
Bruk trending lyder. Reels med trending lyd får 2–3x mer rekkevidde enn uten.

### Svar på meldinger raskt
Under 1 time. Instagram ser responsrate og prioriterer kontoer som svarer.

## Innholdstyper som funker for lokale

1. **Før/etter** — håndverk, frisør, beauty
2. **Dagen i livet** — bak kulissene
3. **Kundehistorier** — fornøyde kunder
4. **Tips & triks** — utstill ekspertisen
5. **Produkt/tjeneste i bruk** — kontekstuelt, ikke stock

## Antall poster

3 poster + 5 stories per uke. Mer er bedre, men konsistens slår volum.

## Mål du faktisk bør se på

- Profilbesøk (ikke likes)
- Sparte poster
- Klikk til nettside
- DM-er

Ikke følgervekst alene. 500 engasjerte lokale følgere slår 5 000 passive fra hele Norge.`,
  },
  {
    slug: "profesjonelle-bilder-bedrift",
    title: "Hvorfor trenger bedriften din profesjonelle bilder?",
    description:
      "Bilder er ofte det første potensielle kunder ser av bedriften din. Her er hvorfor investeringen i profesjonell foto lønner seg.",
    category: "Foto & Video",
    readTime: "5 min",
    publishedDate: "2026-03-13",
    displayDate: "13. mars 2026",
    author: "Marius Teigen Tverbakk",
    body: `## Førsteinntrykket er digitalt

90% av folk sjekker bedriften din på nett før de tar kontakt. Bildene på Google, nettsiden og sosiale medier er førsteinntrykket — ikke lokalet ditt.

## Hva dårlige bilder signaliserer

- Ubetydelig/amatør (mobilbilder i dårlig lys)
- Lite tillitsverdig (stock-bilder, ingen personlighet)
- Lite oppdatert (bilder fra 2018)

Selv om bedriften din er førsteklasses, sender dårlige bilder motsatt signal.

## Hva profesjonelle bilder gir

1. **Konvertering** — 80% høyere salgskonvertering med profesjonelt bildemateriale
2. **Tillit** — ser ut som en seriøs bedrift
3. **Konsistens** — samme stil på alle kanaler (nettside, GBP, sosialt)
4. **SEO** — riktig tagget + strukturerte data + raske bilder ranker bedre

## Hva du faktisk trenger

Minimum-sett for en lokal bedrift:
- 5–8 bedriftsbilder (team, lokaler, arbeidsprosess)
- 3–5 produktbilder (hvis du selger produkter)
- 1–2 portretter av deg/eiere
- Cover-bilde som viser utsiden

Halvdag med fotograf holder. Koster 5 000–15 000 kr. Bildene lever i 2–3 år.

## Hva du bør unngå

- Stock-bilder (folk gjenkjenner dem)
- Filter/preset-tunge bilder (datert fort)
- Bilder der folk ikke ser på kamera
- Lokalet uten mennesker

## Hva vi tar for det

Hos Elevera er fotoshoot inkludert i alle pakker fra 7 900 kr/mnd, eller som enkeltstående oppdrag fra 5 000 kr.`,
  },
];

export const BLOG_POSTS_BY_SLUG: Record<string, BlogPost> = Object.fromEntries(
  BLOG_POSTS.map((p) => [p.slug, p])
);
