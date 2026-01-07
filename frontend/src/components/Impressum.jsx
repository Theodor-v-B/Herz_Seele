/**
 * Impressum.jsx
 * -----------------------------------------
 * Rechtliche Pflichtseite (§5 TMG)
 * Inhalte sind bewusst statisch gehalten,
 * Texte kommen aus i18n für Mehrsprachigkeit.
 *
 * Autor: Marcel Pinkert
 * Projekt: Herz&Seele
 */

import { useTranslation } from "react-i18next";

export default function Impressum() {
  // i18n Hook für Übersetzungen
  const { t } = useTranslation();

  return (
    <section
      className="container card"
      style={{ margin: "40px auto" }}
      aria-labelledby="imprint-title"
    >
      {/* ======================================================
          1. Titel
         ====================================================== */}
      <h1 id="imprint-title">{t("imprint.title")}</h1>

      {/* ======================================================
          2. Rechtliche Grundlage
         ====================================================== */}
      <p>
        <strong>{t("imprint.legal")}</strong>
      </p>

      {/* ======================================================
          3. Projekt & Verantwortliche
         ====================================================== */}
      <p>
        <strong>{t("imprint.project")}</strong>
        <br />
        Marcel Pinkert
        <br />
        Theo von Brentano
      </p>

      {/* ======================================================
          4. Anschrift
         ====================================================== */}
      <p>
        Musterstraße 12
        <br />
        12345 Musterstadt
        <br />
        Deutschland
      </p>

      {/* ======================================================
          5. Kontaktinformationen
         ====================================================== */}
      <p>
        <strong>{t("imprint.contact")}</strong>
        <br />
        {t("imprint.email")}{" "}
        <a href="mailto:kontakt@herzundseele-projekt.de">
          kontakt@herzundseele-projekt.de
        </a>
      </p>

      {/* ======================================================
          6. Hinweis / Disclaimer
         ====================================================== */}
      <p className="small" style={{ marginTop: "20px" }}>
        {t("imprint.note")}
      </p>
    </section>
  );
}
