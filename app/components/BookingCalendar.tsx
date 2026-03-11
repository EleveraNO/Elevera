export default function BookingCalendar() {
  return (
    <section className="px-6 pb-24">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-center text-sm text-white/40">
          Se tilgjengelighet i kalenderen
        </p>
        <div className="overflow-hidden rounded-2xl border border-white/10">
          <iframe
            src="https://calendar.google.com/calendar/embed?src=tverbakk%40elevera.no&ctz=Europe%2FOslo&mode=WEEK&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0"
            width="100%"
            height="300"
            style={{ border: 0 }}
            scrolling="no"
            title="Elevera kalender"
          />
        </div>
      </div>
    </section>
  );
}
