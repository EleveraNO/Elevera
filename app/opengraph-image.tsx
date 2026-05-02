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
          background: "#131312",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "Georgia, serif",
          position: "relative",
        }}
      >
        {/* Gold glow */}
        <div
          style={{
            position: "absolute",
            width: 700,
            height: 700,
            borderRadius: "50%",
            background: "rgba(212, 175, 55, 0.12)",
            filter: "blur(120px)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Second subtle glow, offset */}
        <div
          style={{
            position: "absolute",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "rgba(242, 202, 80, 0.08)",
            filter: "blur(80px)",
            top: "30%",
            left: "60%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Logo */}
        <div
          style={{
            fontSize: 88,
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: "#e5e2de",
            marginBottom: 20,
          }}
        >
          ELEVERA
        </div>

        {/* Gold divider */}
        <div
          style={{
            width: 60,
            height: 3,
            background: "linear-gradient(90deg, transparent, #f2ca50, transparent)",
            borderRadius: 2,
            marginBottom: 28,
          }}
        />

        {/* Tagline */}
        <div
          style={{
            fontSize: 30,
            color: "#d0c5af",
            textAlign: "center",
          }}
        >
          Digitalbyrå i Ålesund
        </div>

        {/* Services */}
        <div
          style={{
            fontSize: 18,
            color: "rgba(153, 144, 124, 0.7)",
            marginTop: 14,
            textAlign: "center",
            letterSpacing: "0.05em",
          }}
        >
          Nettside · Foto & Video · Annonsering · SEO · Sosiale medier
        </div>

        {/* Badge bottom */}
        <div
          style={{
            position: "absolute",
            bottom: 44,
            display: "flex",
            alignItems: "center",
            gap: 8,
            background: "rgba(242, 202, 80, 0.08)",
            border: "1px solid rgba(242, 202, 80, 0.2)",
            borderRadius: 999,
            padding: "8px 22px",
          }}
        >
          <div
            style={{
              width: 8,
              height: 8,
              borderRadius: "50%",
              background: "#f2ca50",
            }}
          />
          <span style={{ color: "#f2ca50", fontSize: 16, fontFamily: "sans-serif" }}>
            elevera.no
          </span>
        </div>
      </div>
    ),
    { ...size }
  );
}
