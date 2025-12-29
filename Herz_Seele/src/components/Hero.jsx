export default function Hero() {
  return (
    <section className="hero container card">
      <div className="hero-content">
        <h1>Depression verstehen. <span className="soft">Schritt für Schritt.</span></h1>

        <p className="lead">
          Du bist nicht allein. Hier findest du verständliche Informationen, erste Schritte und seriöse
          Anlaufstellen. Kleine Schritte zählen.
        </p>

        <div className="actions">
          <a href="#hilfe" className="btn btn-primary">Jetzt Unterstützung finden</a>
          <a href="#was-ist" className="btn btn-ghost">Mehr erfahren</a>
        </div>

        <p className="disclaimer">
          Hinweis: Diese Seite ersetzt keine ärztliche Diagnose. Diese Webseite kann keine Soforthilfe in akuten Krisen leisten.<br />
          Wenn Sie sich in einer lebensbedrohlichen Situation befinden, wenden Sie sich an die von uns verlinkten Seiten.
        </p>
      </div>

      <div className="hero-visual" aria-hidden="true">
        <div className="blob"></div>
        <div className="blob blob-2"></div>
      </div>
    </section>
  );
}