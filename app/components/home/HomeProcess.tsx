const steps = [
  {
    num: "Steg 01",
    title: "Samtale",
    body: "Vi møtes, ser på bedriften din og finner hva som faktisk trenger å endre seg.",
  },
  {
    num: "Steg 02",
    title: "Plan",
    body: "Konkret plan for hvilke tjenester vi bruker, hva vi måler og når det skal leveres.",
  },
  {
    num: "Steg 03",
    title: "Produksjon",
    body: "Vi filmer, bygger og publiserer. Du ser arbeidet mens det skjer, ikke etterpå.",
  },
  {
    num: "Steg 04",
    title: "Måling",
    body: "Vi leser tallene hver uke, beholder det som virker og bytter ut det som ikke gjør det.",
  },
];

export default function HomeProcess() {
  return (
    <section className="home-section home-process">
      <div className="wrap">
        <div className="home-section-head reveal" style={{ marginBottom: 0 }}>
          <div>
            <span className="section-label">Prosess</span>
            <h2>Fire steg fra første samtale til målbare resultater.</h2>
          </div>
        </div>

        <div className="home-process-grid">
          {steps.map((s, i) => (
            <div
              key={s.num}
              className="home-step reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <span className="home-step-num">{s.num}</span>
              <h4>{s.title}</h4>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
