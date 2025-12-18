export default function Help() {
  return (
    <section id="hilfe" className="container grid-2">
      <article className="card help-card">
        <div>
          <h2>Hilfe finden</h2>

          <ol className="steps">
            <li><strong>Darüber sprechen:</strong> Vertrauensperson, Hausarzt/Hausärztin.</li>
            <li><strong>Termin vereinbaren:</strong> Psychotherapeutische Sprechstunde anfragen.</li>
            <li><strong>Selbstfürsorge:</strong> Tagesstruktur, Bewegung, Schlafrhythmus, kleine Ziele.</li>
          </ol>
        </div>

        <div className="cta-stack">
          <a className="btn btn-primary" href="tel:116117">
            116 117 – Ärztlicher Bereitschaftsdienst
          </a>
          <a
            className="btn btn-outline"
            href="https://www.116117-termine.de"
            target="_blank"
            rel="noopener"
          >
            Online Terminsuche
          </a>
        </div>
      </article>

      <aside className="card soothing help-card">
        <div>
          <h2>Hilfestellung</h2>
          <p className="small">
            Hier findest du schnelle Unterstützung in herausfordernden Momenten.
          </p>
        </div>

        <div className="cta-stack">
          <a href="#" className="btn btn-primary">Suizidprävention</a>
          <a href="#" className="btn btn-outline">Einsamkeit</a>
          <a href="#" className="btn btn-secondary">Krise</a>
        </div>
      </aside>
    </section>
  );
}
