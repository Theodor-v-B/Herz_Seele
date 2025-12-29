import helloBetterLogo from "../assets/hellobetter.svg";

export default function WhatIs() {
  return (
    <section id="was-ist" className="container grid-2">
      <article className="card">
        <h2>Was ist eine Depression?</h2>
        <p>
          Eine Depression ist mehr als „traurig sein“. Sie betrifft Stimmung,
          Gedanken, Körper und Verhalten über einen längeren Zeitraum und kann
          den Alltag stark belasten. Viele Betroffene fühlen sich dadurch
          eingeschränkt – wichtig ist: Eine Depression ist häufig und sie ist
          behandelbar.
        </p>
        <ul className="list">
          <li>
            Sie kann jede*n treffen – unabhängig von Alter, Beruf oder
            Lebenssituation.
          </li>
          <li>
            Sie entsteht durch ein Zusammenspiel biologischer, psychologischer
            und sozialer Faktoren.
          </li>
          <li>
            Es gibt wirksame Behandlungen und vielfältige Möglichkeiten zur
            Unterstützung.
          </li>
        </ul>
      </article>

      <aside className="card tip">
        <h3>Erster kurzer Selbst-Check</h3>

        <p className="small">
          Ein Selbst-Check ersetzt keine Diagnose – kann aber ein Hinweis sein,
          Hilfe zu suchen.
        </p>

        <a
          href="https://hellobetter.de/rezept/service/"
          className="btn btn-secondary"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "12px",
          }}
        >
          <img
            src={helloBetterLogo}
            alt="HelloBetter Logo"
            style={{ height: "18px" }}
          />
          
        </a>

        <p className="small" style={{ marginTop: "12px", opacity: 10.8 }}>
          <strong>HelloBetter ist eine digitale Plattform für
          evidenzbasierte Online-Therapieprogramme, die psychische Beschwerden
          wie Stress, Depression, Angst und Schlafstörungen behandelt. Die
          Programme vermitteln wirksame Techniken aus der kognitiven
          Verhaltenstherapie, sind über App und Web nutzbar, werden durch
          psychologische Coaches begleitet und sind teilweise als digitale
          Gesundheitsanwendung (DiGA) auf Rezept erhältlich.</strong>
        </p>
      </aside>
    </section>
  );
}
