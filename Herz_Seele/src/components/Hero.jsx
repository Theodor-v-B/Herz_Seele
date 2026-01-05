// Hero.jsx
// --------------------------------------------------
// Zentrale Hero-Sektion der Startseite
// Zweck:
// - Erste Orientierung für Nutzer:innen
// - Klare, beruhigende Botschaft
// - Call-to-Actions für Hilfe & Information
// --------------------------------------------------

import { useTranslation } from "react-i18next";

export default function Hero() {
  // i18n Hook
  // Alle Texte kommen aus der translation.json
  const { t } = useTranslation();

  return (
    <section className="hero container card">
      {/* ===============================
          Text-Inhalt (links)
      =============================== */}
      <div className="hero-content">
        {/* Hauptüberschrift */}
        <h1>
          {t("hero.titleMain")}{" "}
          <span className="soft">
            {t("hero.titleSoft")}
          </span>
        </h1>

        {/* Einleitender Erklärungstext */}
        <p className="lead">
          {t("hero.lead")}
        </p>

        {/* ===============================
            Call-to-Action Buttons
        =============================== */}
        <div className="actions">
          {/* Primärer CTA: direkt Hilfe finden */}
          <a href="#hilfe" className="btn btn-primary">
            {t("hero.ctaHelp")}
          </a>

          {/* Sekundärer CTA: mehr Hintergrundwissen */}
          <a href="#was-ist" className="btn btn-ghost">
            {t("hero.ctaMore")}
          </a>
        </div>

        {/* ===============================
            Rechtlicher & medizinischer Hinweis
        =============================== */}
        <p className="disclaimer">
          {t("hero.disclaimerLine1")}
          <br />
          {t("hero.disclaimerLine2")}
        </p>
      </div>

      {/* ===============================
          Dekorativer Hintergrund (rein visuell)
          -> bewusst aria-hidden
      =============================== */}
      <div className="hero-visual" aria-hidden="true">
        <div className="blob"></div>
        <div className="blob blob-2"></div>
      </div>
    </section>
  );
}
