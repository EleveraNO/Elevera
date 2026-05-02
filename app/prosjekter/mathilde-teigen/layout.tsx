import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mathilde Teigen – Casestudie | Elevera",
  description:
    "Visuell hjemmeside for artist, låtskriver og dirigent Mathilde Teigen. Mørkt, taktilt designspråk som matcher musikken, bygget av Elevera.",
  alternates: { canonical: "https://elevera.no/prosjekter/mathilde-teigen" },
  openGraph: {
    title: "Mathilde Teigen – Casestudie | Elevera",
    description:
      "Visuell hjemmeside for artist, låtskriver og dirigent, der det visuelle uttrykket matcher musikken.",
    url: "https://elevera.no/prosjekter/mathilde-teigen",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
