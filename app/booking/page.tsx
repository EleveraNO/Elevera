import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Book møte – Elevera",
  description: "Book et gratis strategimøte med Elevera. Vi hjelper bedrifter i Ålesund og omegn å vokse på nett.",
  alternates: { canonical: "https://elevera.no/booking" },
};

export default function BookingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a]">
      <Navbar />

      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#7c3aed]/30 bg-[#7c3aed]/10 px-4 py-1.5">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#7c3aed]" />
              <span className="text-sm font-medium text-[#a78bfa]">Gratis og uforpliktende</span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-white sm:text-5xl">
              Book et gratis møte
            </h1>
            <p className="mx-auto max-w-xl text-white/50">
              Velg en tid som passer deg. Vi tar en prat på 30 minutter og ser
              på hva Elevera kan gjøre for din bedrift.
            </p>
          </div>

          {/* Calendar embed */}
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=tverbakk%40elevera.no&ctz=Europe%2FOslo"
              width="100%"
              height="600"
              style={{ border: 0 }}
              scrolling="no"
              title="Elevera kalender"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
