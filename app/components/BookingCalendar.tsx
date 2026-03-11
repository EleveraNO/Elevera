export default function BookingCalendar() {
  return (
    <section id="kontakt" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#7c3aed]">
            Book møte
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-4xl md:text-5xl">
            Velg en tid som passer deg
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/50">
            Book et gratis strategimøte på 30 minutter – gratis og uforpliktende.
          </p>
        </div>

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

        <p className="mt-6 text-center text-sm text-white/30">
          Foretrekker du å ta kontakt direkte?{" "}
          <a href="mailto:tverbakk@elevera.no" className="text-[#7c3aed] hover:underline">
            Send oss en e-post
          </a>{" "}
          eller ring{" "}
          <a href="tel:+4794974165" className="text-[#7c3aed] hover:underline">
            +47 94 97 41 65
          </a>
        </p>
      </div>
    </section>
  );
}
