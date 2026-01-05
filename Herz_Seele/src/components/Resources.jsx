/**
 * Resources.jsx
 * ----------------
 * Zweck:
 * - Anzeige seriöser externer Hilfsangebote
 * - Inhalte (Beschreibung, Labels) sind übersetzbar
 * - Eigennamen der Organisationen bleiben bewusst unverändert (DE)
 *
 * Hinweis:
 * Alle verlinkten Stellen sind deutsche Anlaufstellen.
 * Daher werden Namen nicht lokalisiert, um Auffindbarkeit zu gewährleisten.
 */

import { useTranslation } from "react-i18next";

export default function Resources() {
  // i18n Hook für UI-Texte (Titel, Hinweise, Beschreibungen)
  const { t } = useTranslation();

  return (
    <section id="ressourcen" className="section-alt">
      <div className="container">

        {/* =====================================================
            Section Header
           ===================================================== */}
        <h2>{t("resources.title")}</h2>
        <p className="small">
          {t("resources.note")}
        </p>

        {/* =====================================================
            Resource Cards
            - Namen bleiben absichtlich auf Deutsch
            - Nur Beschreibungen & UI-Texte werden übersetzt
           ===================================================== */}
        <div className="cards-3">

          {/* Stiftung Deutsche Depressionshilfe */}
          <a
            className="card link-card"
            href="https://www.deutsche-depressionshilfe.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Stiftung Deutsche Depressionshilfe</h3>
            <p>{t("resources.desc_depressionshilfe")}</p>
            <span className="link-hint">
              {t("resources.openWebsite")}
            </span>
          </a>

          {/* TelefonSeelsorge */}
          <a
            className="card link-card"
            href="https://www.telefonseelsorge.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>TelefonSeelsorge</h3>
            <p>{t("resources.desc_telefonseelsorge")}</p>
            <span className="link-hint">
              {t("resources.openWebsite")}
            </span>
          </a>

          {/* Ärztlicher Bereitschaftsdienst */}
          <a
            className="card link-card"
            href="https://www.116117.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>116117</h3>
            <p>{t("resources.desc_116117")}</p>
            <span className="link-hint">
              {t("resources.openWebsite")}
            </span>
          </a>

          {/* Deutsche Depressionsliga */}
          <a
            className="card link-card"
            href="https://depressionsliga.de/hilfecenter/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Deutsche Depressionsliga e.V</h3>
            <p>{t("resources.desc_depressionsliga")}</p>
            <span className="link-hint">
              {t("resources.openWebsite")}
            </span>
          </a>

          {/* Familienportal */}
          <a
            className="card link-card"
            href="https://familienportal.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Familienportal</h3>
            <p>{t("resources.desc_familienportal")}</p>
            <span className="link-hint">
              {t("resources.openWebsite")}
            </span>
          </a>

          {/* Nummer gegen Kummer */}
          <a
            className="card link-card"
            href="https://www.nummergegenkummer.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Nummer gegen Kummer</h3>
            <p>{t("resources.desc_nummergegenkummer")}</p>
            <span className="link-hint">
              {t("resources.openWebsite")}
            </span>
          </a>

        </div>
      </div>
    </section>
  );
}
