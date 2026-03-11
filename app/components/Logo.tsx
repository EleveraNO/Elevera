export default function Logo({ height = 40 }: { height?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 672.82 271.78"
      style={{ height, width: "auto" }}
      aria-label="Elevera"
    >
      <defs>
        <style>{`
          .elv-1, .elv-2 { fill: #fff; }
          .elv-2 {
            font-family: Montserrat, Montserrat-Bold, sans-serif;
            font-size: 130.67px;
            font-weight: 700;
          }
          .elv-3 { letter-spacing: .05em; }
          .elv-4 { letter-spacing: .05em; }
          .elv-5 { letter-spacing: .04em; }
          .elv-6 { letter-spacing: .03em; }
        `}</style>
      </defs>
      <text className="elv-2" transform="translate(0 237.02)">
        <tspan className="elv-4" x="0" y="0">EL</tspan>
        <tspan className="elv-5" x="179.67" y="0">E</tspan>
        <tspan className="elv-6" x="272.58" y="0">V</tspan>
        <tspan className="elv-3" x="374.63" y="0">ERA</tspan>
      </text>
      <polygon
        className="elv-1"
        points="437.63 36.42 409.07 55.8 349.36 15.05 264.49 72.98 241.99 60.93 89.02 132.38 196.45 107.22 243.83 130.01 218.76 100.22 233.36 93.71 251.31 109.57 283.36 89.15 322.59 105.44 305.01 75.35 343.45 50.86 396.05 78.63 437.89 64.26 577.14 132.38 437.63 36.42"
      />
    </svg>
  );
}
