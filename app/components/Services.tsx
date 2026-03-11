const services = [
  {
    number: "01",
    title: "Foto & Video",
    href: "/tjenester/fotografering-alesund",
    description:
      "Profesjonelt innhold som stopper scrollingen og konverterer. Vi produserer alt fra produktfoto og bedriftsbilder til reklamefilmer og sosiale medier-videoer.",
    features: [
      "Produktfotografering",
      "Bedriftsfoto & portrett",
      "Reklamevideo & kortfilm",
      "Innhold for sosiale medier",
    ],
  },
  {
    number: "02",
    title: "Nettside",
    href: "/tjenester/nettside-alesund",
    description:
      "Raske, konverterende nettsider som ser bra ut på alle enheter. Vi bygger alt fra enkle landingssider til avanserte e-handelssider med SEO i bunn.",
    features: [
      "Moderne webdesign",
      "Rask lasting & mobiltilpasset",
      "SEO-optimalisert",
      "Enkel CMS for deg",
    ],
  },
  {
    number: "03",
    title: "Betalt annonsering",
    href: "/tjenester/annonsering-alesund",
    description:
      "Vi administrerer Meta- og Google-annonser som faktisk gir avkastning. Datadrevet optimalisering som skalerer det som virker og kutter det som ikke gjør det.",
    features: [
      "Meta Ads (Facebook & Instagram)",
      "Google Ads & Shopping",
      "A/B-testing av annonser",
      "Månedlig rapportering",
    ],
  },
  {
    number: "04",
    title: "Digital vekststrategi",
    href: "/#kontakt",
    description:
      "En helhetlig plan for din digitale tilstedeværelse. Vi analyserer markedet, identifiserer muligheter og bygger en skreddersydd strategi for vekst.",
    features: [
      "Konkurrentanalyse",
      "Innholdskalender",
      "KPI-oppsett & tracking",
      "Kvartalsvise gjennomganger",
    ],
  },
];

export default function Services() {
  return (
    <section id="tjenester" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">
            Tjenester
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Alt under ett tak
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/50">
            Elevera tilbyr alle digitale tjenestene du trenger for å vokse –
            slik slipper du å styre med flere byråer.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-8 transition-all hover:border-[#7c3aed]/40"
            >
              {/* Background gradient on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/0 to-[#7c3aed]/0 transition-all duration-500 group-hover:from-[#7c3aed]/5 group-hover:to-transparent" />

              <div className="relative z-10">
                {/* Number */}
                <span className="mb-4 block text-5xl font-bold text-[#7c3aed]/20">
                  {service.number}
                </span>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {service.title}
                </h3>
                <p className="mb-6 leading-relaxed text-white/50">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <svg
                        className="h-4 w-4 flex-shrink-0 text-[#7c3aed]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-white/70">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Les mer */}
                <span className="flex items-center gap-1 text-sm font-semibold text-[#7c3aed] transition-all group-hover:gap-2">
                  Les mer
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
