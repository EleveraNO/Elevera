import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#2F5F3F",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <svg
          width="156"
          height="40"
          viewBox="89 15 488.14 117.38"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon
            fill="#F7F4EC"
            points="437.63 36.42 409.07 55.8 349.36 15.05 264.49 72.98 241.99 60.93 89.02 132.38 196.45 107.22 243.83 130.01 218.76 100.22 233.36 93.71 251.31 109.57 283.36 89.15 322.59 105.44 305.01 75.35 343.45 50.86 396.05 78.63 437.89 64.26 577.14 132.38 437.63 36.42"
          />
        </svg>
      </div>
    ),
    { ...size }
  );
}
