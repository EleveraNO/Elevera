import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PriceCalculator from "../components/PriceCalculator";

export const metadata: Metadata = {
  title: "Priskalkulator – Elevera",
  description: "Sett sammen din egen digitale pakke og få en estimert pris med én gang. Nettside, innholdsproduksjon og annonsering.",
  alternates: { canonical: "https://elevera.no/kalkulator" },
};

export default function KalkulatorPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <PriceCalculator />
      <Footer />
    </main>
  );
}
