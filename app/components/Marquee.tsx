const items = [
  "Foto & Video",
  "Dronevideo",
  "Nettside",
  "Markedsføring",
  "Annonsering",
  "Innholdsproduksjon",
  "Redigering",
  "SEO",
];

export default function Marquee() {
  const content = items.flatMap((item, i) => [
    <span
      key={i}
      className="text-xs font-semibold uppercase tracking-[0.18em] text-white/35 transition-colors hover:text-white/60"
    >
      {item}
    </span>,
    <span key={`sep-${i}`} className="mx-6 text-[10px] select-none" style={{ color: "rgba(242,202,80,0.25)" }} aria-hidden>
      ◆
    </span>,
  ]);

  return (
    <div className="relative overflow-hidden py-5">
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-[#131312] to-transparent" aria-hidden />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-[#131312] to-transparent" aria-hidden />

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-25%); }
        }
        .marquee-track {
          animation: marquee 30s linear infinite;
          display: flex;
          align-items: center;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-track">
        {content}
        {content}
        {content}
        {content}
      </div>
    </div>
  );
}
