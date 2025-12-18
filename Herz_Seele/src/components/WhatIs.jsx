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
          <li>Sie kann jede*n treffen – unabhängig von Alter, Beruf oder Lebenssituation.</li>
          <li>Sie entsteht durch ein Zusammenspiel biologischer, psychologischer und sozialer Faktoren.</li>
          <li>Es gibt wirksame Behandlungen und vielfältige Möglichkeiten zur Unterstützung.</li>
        </ul>
      </article>

      <aside className="card tip">
        <h3>Erster kurzer Selbst-Check</h3>
        <p>
          Frage dich:{" "}
          <em>
            Belasten mich Niedergeschlagenheit, Interessensverlust oder
            Antriebslosigkeit an den meisten Tagen über mindestens 2 Wochen?
          </em>
        </p>
        <p className="small">
          Ein Selbst-Check ersetzt keine Diagnose – kann aber ein Hinweis sein,
          Hilfe zu suchen.
        </p>
        <a href="#hilfe" className="btn btn-secondary">
          Schritte zur Hilfe
        </a>
      </aside>
    </section>
  );
}
