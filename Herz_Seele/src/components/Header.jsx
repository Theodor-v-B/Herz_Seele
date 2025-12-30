import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Header() {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [a11yOpen, setA11yOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [ttsOn, setTtsOn] = useState(false);

  const a11yRef = useRef(null);
  const langRef = useRef(null);

  // Klick außerhalb -> Menüs schließen
  useEffect(() => {
    function onDocClick(e) {
      if (a11yRef.current && !a11yRef.current.contains(e.target)) setA11yOpen(false);
      if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
    }
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // Routewechsel -> Popups zu + TTS stoppen
  useEffect(() => {
    setA11yOpen(false);
    setLangOpen(false);
    window.speechSynthesis?.cancel();
    setTtsOn(false);
  }, [location.pathname]);

  function currentTtsLang() {
    if (i18n.language === "en") return "en-US";
    if (i18n.language === "fi") return "fi-FI";
    return "de-DE";
  }

  function startReading() {
    const main = document.getElementById("main");
    const text = (main?.innerText || "").trim();
    if (!text) return;

    window.speechSynthesis.cancel();

    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = currentTtsLang();
    utter.rate = 1;
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

  function setLanguage(next) {
    i18n.changeLanguage(next);
    stopReading(); // koordiniert vorlesen
    setLangOpen(false);
  }

  const langLabel = i18n.language?.toUpperCase?.() || "DE";

  return (
    <header className="site-header glass">
      <div className="container header-inner">
        <Link to="/" className="brand" aria-label="Zur Startseite">
          <span className="logo" aria-hidden="true">🌿</span>
          <span className="brand-name">Herz&Seele</span>
        </Link>

        <div className="header-right">
          <nav className="nav" aria-label="Hauptnavigation">
            <a href="#was-ist" className="nav-link">{t("nav.whatIs")}</a>
            <a href="#zeichen" className="nav-link">{t("nav.signs")}</a>
            <a href="#hilfe" className="nav-link">{t("nav.help")}</a>
            <a href="#ressourcen" className="nav-link">{t("nav.contacts")}</a>
          </nav>

          {/* lang menu */}
          <div className="lang" ref={langRef}>
            <button
              type="button"
              className="nav-link lang-btn"
              aria-haspopup="menu"
              aria-expanded={langOpen}
              onClick={() => setLangOpen(v => !v)}
              title={t("lang.label")}
            >
              🌐 {langLabel}
            </button>

            {langOpen && (
              <div className="lang-menu" role="menu" aria-label={t("lang.label")}>
                <button className="lang-item" onClick={() => setLanguage("de")}>DE</button>
                <button className="lang-item" onClick={() => setLanguage("en")}>EN</button>
                <button className="lang-item" onClick={() => setLanguage("fi")}>FI</button>
              </div>
            )}
          </div>

          {/* Barrierefreiheit */}
          <div className="accessibility" ref={a11yRef}>
            <button
              type="button"
              className="nav-link a11y-btn"
              aria-haspopup="menu"
              aria-expanded={a11yOpen}
              onClick={() => setA11yOpen(v => !v)}
            >
              🔊 {t("nav.a11y")}
            </button>

            {a11yOpen && (
              <div className="a11y-menu" role="menu" aria-label={t("nav.a11y")}>
                <p className="a11y-title">{t("nav.ttsTitle")}</p>

                {!ttsOn ? (
                  <button className="btn btn-primary a11y-action" onClick={startReading}>
                    ▶ {t("nav.ttsStart")}
                  </button>
                ) : (
                  <button className="btn btn-outline a11y-action" onClick={stopReading}>
                    ■ {t("nav.ttsStop")}
                  </button>
                )}

                <p className="small" style={{ marginTop: 10, opacity: 0.9 }}>
                  {t("nav.ttsHint")}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
