import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="site-header glass">
      <div className="container header-inner">
        {/* Klickbares Logo → Startseite */}
        <Link to="/" className="brand">
          <span className="logo" aria-hidden="true">🌿</span>
          <span className="brand-name">Herz&Seele</span>
        </Link>

        <nav className="nav" aria-label="Hauptnavigation">
          <a href="#was-ist" className="nav-link">Was ist Depression?</a>
          <a href="#zeichen" className="nav-link">Anzeichen</a>
          <a href="#hilfe" className="nav-link">Hilfe finden</a>
          <a href="#ressourcen" className="nav-link">Kontakte</a>
        </nav>
      </div>
    </header>
  );
}