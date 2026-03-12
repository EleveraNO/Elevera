import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { FadeUp, StaggerContainer, StaggerItem } from "../../components/animations";

export const metadata: Metadata = {
  title: "Cut O' Clock – Casestudie | Elevera",
  description:
    "Se hvordan Elevera hjalp frisørsalongen Cut O' Clock i Ålesund med profesjonell foto, video og innholdsstrategi for sosiale medier.",
  alternates: { canonical: "https://elevera.no/prosjekter/cut-o-clock" },
  openGraph: {
    title: "Cut O' Clock – Casestudie | Elevera",
    description: "Hvordan Elevera leverte profesjonelt innhold til frisørsalongen Cut O' Clock i Ålesund.",
    url: "https://elevera.no/prosjekter/cut-o-clock",
  },
};

const prosess = [
  {
    steg: "01",
    tittel: "Møte & behovskartlegging",
    beskrivelse:
      "Vi startet med et face-to-face møte for å forstå Cut O' Clocks mål, målgruppe og ønsket uttrykk. Her kartla vi hva slags innhold som ville treffe best på sosiale medier.",
  },
  {
    steg: "02",
    tittel: "Planlegging av produksjonsdag",
    beskrivelse:
      "Basert på møtet planla vi en effektiv produksjonsdag. Vi valgte motiver, bygde opp konseptet og sørget for at alt var klart for opptak.",
  },
  {
    steg: "03",
    tittel: "Foto & videoproduksjon",
    beskrivelse:
      "På produksjonsdagen produserte vi profesjonelle bilder og kortformat video tilpasset Instagram. All redigering og etterarbeid ble gjort av Elevera.",
  },
  {
    steg: "04",
    tittel: "Publiseringsplan for Instagram",
    beskrivelse:
      "Vi leverte en ferdig publiseringsplan slik at innholdet ble brukt strategisk – rett format, rett tidspunkt, med mål om høyere rekkevidde og engasjement.",
  },
];

const levert = [
  "Profesjonelle bedriftsbilder",
  "Kortformat reklamevideo for Instagram",
  "Fullstendig redigering og etterarbeid",
  "Publiseringsplan for sosiale medier",
];

export default function CutOClockPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden px-6 pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/20 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-4 py-1.5">
            <span className="text-sm font-medium text-[#a78bfa]">Frisør · Ålesund</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Cut O&apos; Clock
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60">
            Hvordan Elevera hjalp en lokal frisørsalong i Ålesund med å bygge et
            profesjonelt visuelt uttrykk og en innholdsstrategi som engasjerer på Instagram.
          </p>
        </div>
      </section>

      {/* Featured image – full width */}
      <section className="px-6 pb-4 pt-8">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <div className="relative overflow-hidden rounded-2xl border border-white/10" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/cut-o-clock/Photo 1.jpg"
                alt="Cut O' Clock – produksjon"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
                priority
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Prosessen */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <FadeUp className="mb-12 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">Slik jobbet vi</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Prosessen</h2>
          </FadeUp>

          <div className="grid gap-16 md:grid-cols-2 md:items-start">
            {/* Timeline */}
            <div className="relative">
              <div className="absolute left-6 top-0 h-full w-px bg-white/10 sm:left-8" />
              <StaggerContainer className="space-y-10">
                {prosess.map((item) => (
                  <StaggerItem key={item.steg}>
                    <div className="relative flex gap-6 sm:gap-8">
                      <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#7c3aed]/40 bg-[#7c3aed]/10 text-sm font-bold text-[#a78bfa]">
                        {item.steg}
                      </div>
                      <div className="pb-2 pt-2">
                        <h3 className="mb-2 font-bold text-white">{item.tittel}</h3>
                        <p className="text-sm leading-relaxed text-white/50">{item.beskrivelse}</p>
                      </div>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>

            {/* Image alongside process */}
            <FadeUp className="hidden md:block">
              <div className="relative overflow-hidden rounded-2xl border border-white/10" style={{ aspectRatio: "3/4" }}>
                <Image
                  src="/images/cut-o-clock/Photo 2.jpg"
                  alt="Cut O' Clock – produksjonsdag"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 50vw, 480px"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Hva ble levert */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <FadeUp className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">Leveransen</p>
            <h2 className="text-3xl font-bold text-white">Hva ble levert</h2>
          </FadeUp>
          <StaggerContainer className="grid gap-4 sm:grid-cols-2">
            {levert.map((item, i) => (
              <StaggerItem key={i}>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                  <svg className="h-5 w-5 flex-shrink-0 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-white/80">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Two images side by side */}
      <section className="px-6 py-8">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4">
            <FadeUp>
              <div className="relative overflow-hidden rounded-2xl border border-white/10" style={{ aspectRatio: "4/5" }}>
                <Image
                  src="/images/cut-o-clock/Photo 3.jpg"
                  alt="Cut O' Clock – bilde 3"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 480px"
                />
              </div>
            </FadeUp>
            <FadeUp>
              <div className="relative overflow-hidden rounded-2xl border border-white/10" style={{ aspectRatio: "4/5" }}>
                <Image
                  src="/images/cut-o-clock/Photo 4.jpg"
                  alt="Cut O' Clock – bilde 4"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 45vw, 480px"
                />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-sm">
          <FadeUp className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">Resultatet</p>
            <h2 className="text-3xl font-bold text-white">Se videoen</h2>
          </FadeUp>
          <FadeUp>
            <div className="overflow-hidden rounded-2xl border border-white/10" style={{ aspectRatio: "9/16" }}>
              <video
                src="/videos/cut-o-clock-full.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Closing image */}
      <section className="px-6 pb-20">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <div className="relative overflow-hidden rounded-2xl border border-white/10" style={{ aspectRatio: "16/9" }}>
              <Image
                src="/images/cut-o-clock/Photo 5.jpg"
                alt="Cut O' Clock – resultat"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1024px"
              />
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <div className="rounded-3xl border border-[#7c3aed]/30 bg-[#7c3aed]/10 p-12">
            <h2 className="mb-4 text-3xl font-bold text-white">Vil du ha lignende resultater?</h2>
            <p className="mb-8 text-white/60">
              Book et gratis møte og hør hva vi kan gjøre for din bedrift i Ålesund.
            </p>
            <a
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-[#7c3aed] px-8 py-3.5 font-semibold text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:bg-[#6d28d9] hover:-translate-y-0.5"
            >
              Book gratis møte
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
