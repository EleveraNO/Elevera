import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PageCTA from "../../components/PageCTA";

export const metadata: Metadata = {
  title: "Dronevideo i Ålesund | Profesjonelle Luftopptak – Elevera",
  description:
    "Profesjonell dronevideo og dronefoto i Ålesund. Vi produserer spektakulære luftopptak for bedrifter, eiendom, event og reklame i Ålesund og på Sunnmøre.",
  alternates: { canonical: "https://elevera.no/tjenester/dronevideo-alesund" },
  openGraph: {
    title: "Dronevideo i Ålesund – Elevera",
    description: "Spektakulære luftopptak med drone for bedrifter i Ålesund og omegn.",
    url: "https://elevera.no/tjenester/dronevideo-alesund",
  },
};

const included = [
  "Luftvideo i høy kvalitet (4K)",
  "Dronefoto og stillbilder fra luften",
  "Redigering og etterarbeid inkludert",
  "Kombineres med bakkefoto og video",
  "Egnet for eiendom, bedrift og event",
  "Levering av ferdige klipp og bilder",
];

const faqs = [
  {
    q: "Trenger dere tillatelse for å fly drone i Ålesund?",
    a: "Ja, vi opererer alltid i henhold til gjeldende regelverk fra Luftfartstilsynet og innhenter nødvendige tillatelser der det kreves.",
  },
  {
    q: "Hva brukes dronevideo til?",
    a: "Dronevideo egner seg perfekt til å presentere bedriftslokaler, eiendommer, events, turistattraksjoner og naturomgivelser på Sunnmøre – perspektiver du ikke får fra bakken.",
  },
  {
    q: "Kan dere kombinere dronevideo med vanlig video?",
    a: "Absolutt! Vi anbefaler å kombinere luftopptak med bakkeopptakene i samme produksjon for et helhetlig og profesjonelt resultat.",
  },
  {
    q: "Hva koster dronevideo i Ålesund?",
    a: "Dronevideo kan bestilles som del av en videoproduksjon eller som eget oppdrag. Ta kontakt for et uforpliktende tilbud tilpasset ditt behov.",
  },
];

export default function DronevideoPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      {/* Hero */}
      <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden px-6 pt-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/20 blur-[120px]" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl text-center">

          {/* Drone animation */}
          <style>{`
            @keyframes droneFloat {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-12px); }
            }
            @keyframes shadowPulse {
              0%, 100% { transform: scaleX(1); opacity: 0.3; }
              50% { transform: scaleX(0.7); opacity: 0.15; }
            }
            @keyframes p1 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes p2 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes p3 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes p4 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            .drone-body { animation: droneFloat 3s ease-in-out infinite; }
            .drone-shadow { animation: shadowPulse 3s ease-in-out infinite; }
            .prop-tl { animation: p1 0.4s linear infinite; transform-origin: 28px 28px; }
            .prop-tr { animation: p2 0.4s linear infinite; transform-origin: 112px 28px; }
            .prop-bl { animation: p3 0.4s linear infinite; transform-origin: 28px 72px; }
            .prop-br { animation: p4 0.4s linear infinite; transform-origin: 112px 72px; }
          `}</style>

          <div className="mb-8 flex flex-col items-center">
            <svg width="140" height="100" viewBox="0 0 140 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Shadow */}
              <ellipse className="drone-shadow" cx="70" cy="95" rx="30" ry="5" fill="#7c3aed" />

              <g className="drone-body">
                {/* Arms */}
                <line x1="70" y1="48" x2="28" y2="28" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="70" y1="48" x2="112" y2="28" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="70" y1="56" x2="28" y2="72" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />
                <line x1="70" y1="56" x2="112" y2="72" stroke="#7c3aed" strokeWidth="2.5" strokeLinecap="round" />

                {/* Body */}
                <rect x="57" y="42" width="26" height="20" rx="5" fill="#7c3aed" fillOpacity="0.2" stroke="#7c3aed" strokeWidth="1.5" />
                <rect x="63" y="48" width="14" height="8" rx="2" fill="#7c3aed" fillOpacity="0.4" />

                {/* Camera */}
                <circle cx="70" cy="65" r="4" fill="#7c3aed" fillOpacity="0.6" stroke="#a78bfa" strokeWidth="1" />
                <circle cx="70" cy="65" r="2" fill="#a78bfa" />

                {/* LED blink */}
                <circle cx="70" cy="48" r="2" fill="#a78bfa" fillOpacity="0.9" />

                {/* Propeller hubs + spinning blades */}
                {/* Top-left */}
                <circle cx="28" cy="28" r="5" fill="#1a1a2e" stroke="#7c3aed" strokeWidth="1.5" />
                <g className="prop-tl">
                  <rect x="18" y="26.5" width="20" height="3" rx="1.5" fill="#a78bfa" fillOpacity="0.7" />
                  <rect x="26.5" y="18" width="3" height="20" rx="1.5" fill="#a78bfa" fillOpacity="0.7" />
                </g>

                {/* Top-right */}
                <circle cx="112" cy="28" r="5" fill="#1a1a2e" stroke="#7c3aed" strokeWidth="1.5" />
                <g className="prop-tr">
                  <rect x="102" y="26.5" width="20" height="3" rx="1.5" fill="#a78bfa" fillOpacity="0.7" />
                  <rect x="110.5" y="18" width="3" height="20" rx="1.5" fill="#a78bfa" fillOpacity="0.7" />
                </g>

                {/* Bottom-left */}
                <circle cx="28" cy="72" r="5" fill="#1a1a2e" stroke="#7c3aed" strokeWidth="1.5" />
                <g className="prop-bl">
                  <rect x="18" y="70.5" width="20" height="3" rx="1.5" fill="#a78bfa" fillOpacity="0.7" />
                  <rect x="26.5" y="62" width="3" height="20" rx="1.5" fill="#a78bfa" fillOpacity="0.7" />
                </g>

                {/* Bottom-right */}
                <circle cx="112" cy="72" r="5" fill="#1a1a2e" stroke="#7c3aed" strokeWidth="1.5" />
                <g className="prop-br">
                  <rect x="102" y="70.5" width="20" height="3" rx="1.5" fill="#a78bfa" fillOpacity="0.7" />
                  <rect x="110.5" y="62" width="3" height="20" rx="1.5" fill="#a78bfa" fillOpacity="0.7" />
                </g>
              </g>
            </svg>
          </div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-[#7c3aed]" />
            <span className="text-sm font-medium text-[#a78bfa]">Ålesund og Sunnmøre</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl md:text-6xl">
            Profesjonell{" "}
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#60a5fa] bg-clip-text text-transparent">
              dronevideo
            </span>{" "}
            i Ålesund
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-white/60">
            Spektakulære luftopptak som gir bedriften din et perspektiv ingen kan ignorere.
            Vi produserer profesjonell dronevideo og dronefoto i Ålesund og på Sunnmøre.
          </p>
          <a
            href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ2HY3t28agc1uq8sE2kofQvPHGvms01uI7Lf-i-YV0iD0VIyWS2JwTBKZJwsMTmV-F_0jVbiEWY"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-[#7c3aed] px-8 py-3.5 text-base font-semibold text-white shadow-lg shadow-[#7c3aed]/30 transition-all hover:bg-[#6d28d9] hover:-translate-y-0.5"
          >
            Få et gratis tilbud
          </a>
        </div>
      </section>

      {/* Hva er inkludert */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Hva er inkludert?</h2>
            <p className="mt-4 text-white/50">Alt du trenger for profesjonelle luftopptak.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {included.map((item, i) => (
              <div key={i} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-5 py-4">
                <svg className="h-5 w-5 flex-shrink-0 text-[#7c3aed]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-sm text-white/80">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">
                Hvorfor dronevideo for bedriften din?
              </h2>
              <div className="space-y-4 text-white/60 leading-relaxed">
                <p>
                  Luftopptak gir et unikt perspektiv som skiller seg ut i mengden. Enten du
                  vil vise frem bedriftslokaler, en eiendom eller de spektakulære omgivelsene
                  på Sunnmøre — dronevideo leverer innhold ingen kan ignorere.
                </p>
                <p>
                  Vi kombinerer gjerne dronevideo med bakkeopptakene for å gi deg en
                  komplett videoproduksjon som forteller hele historien om bedriften din.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { stat: "4K", label: "Luftopptak i høyeste kvalitet" },
                { stat: "3x", label: "Mer engasjement med luftperspektiv" },
                { stat: "1 dag", label: "Kombinert med bakkeproduksjon" },
                { stat: "100%", label: "Lokalt – vi kjenner Ålesund og Sunnmøre" },
              ].map((item, i) => (
                <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-5">
                  <div className="text-2xl font-bold text-[#7c3aed] mb-1">{item.stat}</div>
                  <div className="text-xs text-white/50 leading-relaxed">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20 border-t border-white/10">
        <div className="mx-auto max-w-3xl">
          <h2 className="mb-10 text-center text-3xl font-bold text-white">
            Vanlige spørsmål om dronevideo
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="rounded-2xl border border-white/10 bg-white/5 px-6 py-5">
                <h3 className="mb-2 font-semibold text-white">{faq.q}</h3>
                <p className="text-sm leading-relaxed text-white/50">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PageCTA heading="Klar for luftopptak?" />

      <Footer />
    </main>
  );
}
