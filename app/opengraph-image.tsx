import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Elevera – Digitalbyrå i Ålesund";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Purple glow */}
        <div
          style={{
            position: "absolute",
            width: 600,
            height: 600,
            borderRadius: "50%",
            background: "rgba(124, 58, 237, 0.25)",
            filter: "blur(120px)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            letterSpacing: "0.05em",
            color: "white",
            marginBottom: 24,
          }}
        >
          ELEVERA
        </div>

        {/* Divider */}
        <div
          style={{
            width: 80,
            height: 4,
            background: "#7c3aed",
            borderRadius: 2,
            marginBottom: 32,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.6)",
            textAlign: "center",
            maxWidth: 800,
          }}
        >
          Digitalbyrå i Ålesund
        </div>

        {/* Sub-tagline */}
        <div
          style={{
            fontSize: 22,
            color: "rgba(255,255,255,0.35)",
            marginTop: 16,
            textAlign: "center",
          }}
        >
          Nettside · Foto & Video · Betalt annonsering
        </div>

        {/* Badge */}
        <div
          style={{
            position: "absolute",
            bottom: 48,
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(124, 58, 237, 0.15)",
            border: "1px solid rgba(124, 58, 237, 0.3)",
            borderRadius: 999,
            padding: "10px 24px",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: "50%",
              background: "#7c3aed",
            }}
          />
          <span style={{ color: "#a78bfa", fontSize: 18 }}>elevera.no</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
