export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/3 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/20 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/4 h-[300px] w-[300px] rounded-full bg-blue-600/10 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-4 py-1.5">
          <span className="h-2 w-2 animate-pulse rounded-full bg-[#7c3aed]" />
          <span className="text-sm font-medium text-[#a78bfa]">
            Digitalbyrå i Ålesund
          </span>
        </div>

        {/* Heading */}
        <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
          Én partner.{" "}
          <span className="bg-gradient-to-r from-[#7c3aed] to-[#60a5fa] bg-clip-text text-transparent">
            Alt du trenger
          </span>{" "}
          for å vokse på nett.
        </h1>

        {/* Subtext */}
        <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60 sm:text-xl">
          Vi hjelper bedrifter i Ålesund og omegn med å vokse på nett –
          gjennom profesjonell foto & video, konverterende nettsider og
          presis annonsering. Alt fra én partner.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#kontakt"
            className="rounded-full bg-[#7c3aed] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:bg-[#6d28d9] hover:shadow-xl hover:shadow-[#7c3aed]/40 hover:-translate-y-0.5"
          >
            Kom i gang i dag
          </a>
          <a
            href="#tjenester"
            className="flex items-center gap-2 rounded-full border border-white/20 px-8 py-3.5 text-base font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white hover:-translate-y-0.5"
          >
            Se hva vi tilbyr
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="h-9 w-9 rounded-full border-2 border-[#0a0a0a] bg-gradient-to-br from-[#7c3aed] to-[#60a5fa] flex items-center justify-center text-xs font-bold text-white"
              >
                {String.fromCharCode(64 + i)}
              </div>
            ))}
          </div>
          <p className="text-sm text-white/50">
            <span className="font-semibold text-white/80">50+</span> bedrifter i Ålesund og omegn vokser med Elevera
          </p>
        </div>
      </div>
    </section>
  );
}
