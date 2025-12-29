import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Header() {
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [ttsOn, setTtsOn] = useState(false);
  const menuRef = useRef(null);

  // Popup schließen bei Klick außerhalb
  useEffect(() => {
    function onDocClick(e) {
      if (!menuRef.current) return;
      if (!menuRef.current.contains(e.target)) setMenuOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Wenn Seite wechselt: Popup zu + Vorlesen stoppen
  useEffect(() => {
    setMenuOpen(false);
    window.speechSynthesis?.cancel();
    setTtsOn(false);
  }, [location.pathname]);

  function startReading() {
    // Aktuellen Seiten-Text vorlesen (main)
    const main = document.getElementById("main");
    const text = (main?.innerText || "").trim();

    if (!text) return;

    // alles abbrechen was noch läuft
    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "de-DE";
    utter.rate = 1; // normal
    utter.pitch = 1;

    utter.onend = () => setTtsOn(false);
    utter.onerror = () => setTtsOn(false);

    window.speechSynthesis.speak(utter);
    setTtsOn(true);
  }

  function stopReading() {
    window.speechSynthesis.cancel();
    setTtsOn(false);
  }

  return (
    <header className="site-header glass">
      <div className="container header-inner">
        {/* Klickbares Logo -> Startseite */}
        <Link to="/" className="brand" aria-label="Zur Startseite">
          <span className="logo" aria-hidden="true">🌿</span>
          <span className="brand-name">Herz&Seele</span>
        </Link>

        <div className="header-right">
          <nav className="nav" aria-label="Hauptnavigation">
            <a href="#was-ist" className="nav-link">Was ist Depression?</a>
            <a href="#zeichen" className="nav-link">Anzeichen</a>
            <a href="#hilfe" className="nav-link">Hilfe finden</a>
            <a href="#ressourcen" className="nav-link">Kontakte</a>
          </nav>

          {/* Barrierefreiheit Button + Popup */}
          <div className="accessibility" ref={menuRef}>
            <button
              type="button"
              className="nav-link a11y-btn"
              aria-haspopup="menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              🔊 Barrierefreiheit
            </button>

            {menuOpen && (
              <div className="a11y-menu" role="menu" aria-label="Barrierefreiheit Menü">
                <p className="a11y-title">Vorlesen (Text-to-Speech)</p>

                {!ttsOn ? (
                  <button className="btn btn-primary a11y-action" onClick={startReading}>
                    ▶ Vorlesen starten
                  </button>
                ) : (
                  <button className="btn btn-outline a11y-action" onClick={stopReading}>
                    ■ Vorlesen stoppen
                  </button>
                )}

                <p className="small" style={{ marginTop: 10, opacity: 0.9 }}>
                  Hinweis: Vorlesen funktioniert im Browser (z. B. Chrome/Edge) ohne Installation.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
