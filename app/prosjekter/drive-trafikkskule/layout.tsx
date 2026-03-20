import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Drive Trafikkskule – Casestudie | Elevera",
  description: "Se hvordan Elevera leverte foto, video og dronevideo til Drive Trafikkskule i Volda og Ulsteinvik.",
  alternates: { canonical: "https://elevera.no/prosjekter/drive-trafikkskule" },
  openGraph: {
    title: "Drive Trafikkskule – Casestudie | Elevera",
    description: "Foto, video og dronevideo for Drive Trafikkskule — Volda & Ulsteinvik.",
    url: "https://elevera.no/prosjekter/drive-trafikkskule",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
