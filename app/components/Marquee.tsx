const items = [
  "Foto",
  "Video",
  "Dronevideo",
  "Nettside",
  "Markedsføring",
  "Innholdsproduksjon",
  "Annonsering",
  "Redigering",
];

const dot = (
  <span className="mx-6 text-[#7c3aed]" aria-hidden>
    ·
  </span>
);

export default function Marquee() {
  const content = items.flatMap((item, i) => [
    <span key={i} className="text-sm font-semibold uppercase tracking-widest text-white/40">
      {item}
    </span>,
    dot,
  ]);

  return (
    <div className="overflow-hidden border-y border-white/5 py-4">
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .marquee-track {
          animation: marquee 20s linear infinite;
          display: flex;
          width: max-content;
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="marquee-track">
        {content}
        {content}
      </div>
    </div>
  );
}
