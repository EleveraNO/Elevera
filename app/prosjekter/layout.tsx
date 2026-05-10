import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prosjekter | Elevera",
  description:
    "Et utvalg av prosjekter Elevera har laget for lokale bedrifter på Sunnmøre og resten av landet, fra kjøreskole og artist til gård og frisør.",
  alternates: { canonical: "https://elevera.no/prosjekter" },
  openGraph: {
    title: "Prosjekter | Elevera",
    description:
      "Et utvalg av prosjekter Elevera har laget for lokale bedrifter.",
    url: "https://elevera.no/prosjekter",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
