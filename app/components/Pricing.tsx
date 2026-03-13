"use client";

import { FadeUp, StaggerContainer, StaggerItem } from "./animations";

const plans = [
  {
    name: "Start",
    price: "3 490",
    period: "/ mnd",
    setup: "2 990",
    description: "For deg som vil etablere en profesjonell digital tilstedeværelse.",
    features: [
      "1 nettside (inntil 5 sider)",
      "Foto & video til nettsiden",
      "Grunnleggende SEO",
      "E-poststøtte",
      "Månedlig rapport",
    ],
    notIncluded: ["Månedlig innholdsproduksjon", "Betalt annonsering"],
    cta: "Kom i gang",
    highlighted: false,
  },
  {
    name: "Vekst",
    price: "5 990",
    period: "/ mnd",
    setup: "4 990",
    description: "Den mest populære pakken for bedrifter som vil vokse raskt.",
    features: [
      "Alt i Start",
      "1 shoot per måned",
      "4 reels per måned",
      "10 bilder per måned",
      "Publisering på Instagram, Facebook & TikTok",
      "Innholdskalender",
      "Dedikert kontaktperson",
    ],
    notIncluded: [],
    cta: "Velg Vekst",
    highlighted: true,
  },
  {
    name: "Pro",
    price: "9 990",
    period: "/ mnd",
    setup: "7 990",
    description: "Full digital markedsføring for ambisiøse bedrifter uten kompromiss.",
    features: [
      "Alt i Vekst",
      "2 shoots per måned",
      "8 reels per måned",
      "20 bilder per måned",
      "Meta Ads + Google Ads",
      "Digital vekststrategi",
      "Kvartalsvise strategimøter",
      "24/7 prioritert support",
    ],
    notIncluded: [],
    cta: "Kontakt oss",
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <>
    <style>{`
      @keyframes vekstPulse {
        0%, 100% { box-shadow: 0 0 30px rgba(124,58,237,0.2), 0 25px 50px rgba(124,58,237,0.15); }
        50% { box-shadow: 0 0 60px rgba(124,58,237,0.45), 0 25px 50px rgba(124,58,237,0.3); }
      }
    `}</style>
    <section className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <FadeUp className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">
            Prispakker
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Enkle, transparente priser
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Ingen skjulte gebyrer. Ingen overraskelser. Velg pakken som passer din bedrift.
          </p>
        </FadeUp>

        <StaggerContainer className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <StaggerItem key={index}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition-all ${
                  plan.highlighted
                    ? "border-[#7c3aed] bg-gradient-to-b from-[#7c3aed]/20 to-[#7c3aed]/5 scale-105"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
                style={plan.highlighted ? { animation: "vekstPulse 3s ease-in-out infinite" } : {}}
              >
                {plan.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="rounded-full bg-[#7c3aed] px-4 py-1 text-xs font-bold uppercase tracking-wider text-white">
                      Mest populær
                    </span>
                  </div>
                )}
                <h3 className="mb-2 text-lg font-bold text-white">{plan.name}</h3>
                <p className="mb-6 text-sm leading-relaxed text-white/50">{plan.description}</p>
                <div className="mb-2 flex items-end gap-1">
                  <span className="text-4xl font-bold text-white">{plan.price} kr</span>
                  <span className="mb-1 text-white/40">{plan.period}</span>
                </div>
                <p className="mb-8 text-sm text-white/40">+ {plan.setup} kr etablering (én gang)</p>
                <ul className="mb-8 flex-1 space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2.5 text-sm">
                      <svg className="h-4 w-4 flex-shrink-0 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/80">{feature}</span>
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, i) => (
                    <li key={`not-${i}`} className="flex items-center gap-2.5 text-sm opacity-40">
                      <svg className="h-4 w-4 flex-shrink-0 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                      <span className="text-white/40 line-through">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#kontakt"
                  className={`block rounded-full py-3 text-center text-sm font-semibold transition-all ${
                    plan.highlighted
                      ? "bg-[#7c3aed] text-white hover:bg-[#6d28d9] shadow-lg shadow-[#7c3aed]/30"
                      : "border border-white/20 text-white hover:border-white/40 hover:bg-white/5"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <FadeUp delay={0.3}>
          <p className="mt-10 text-center text-sm text-white/30">
            Alle priser er ekskl. mva. Bindingstid 3 måneder. Kontakt oss for skreddersydde pakker.
          </p>
        </FadeUp>
      </div>
    </section>
    </>
  );
}
