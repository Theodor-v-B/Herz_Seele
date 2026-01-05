/**
 * Datenschutz.jsx
 * ----------------
 * Statische Datenschutzseite
 * - Inhalte kommen aus i18n (Mehrsprachigkeit)
 * - Struktur bewusst nah an rechtlichem Aufbau gehalten
 * - Keine Logik, nur semantisches Rendering
 */

import { useTranslation } from "react-i18next";

export default function Datenschutz() {
  // i18n Hook – liefert Übersetzungsfunktion
  const { t } = useTranslation();

  return (
    <section
      className="container card"
      style={{ margin: "24px auto" }}
      aria-labelledby="privacy-title"
    >
      {/* =====================================================
          Titel
      ===================================================== */}
      <h1 id="privacy-title">{t("privacy.title")}</h1>

      {/* =====================================================
          1. Datenschutz auf einen Blick
      ===================================================== */}
      <section>
        <h3>1. {t("privacy.overviewTitle")}</h3>
        <p>
          {t("privacy.overviewText")}
          <br />
          <br />
          <strong>{t("privacy.noticeTitle")}</strong>{" "}
          {t("privacy.noticeText")}
        </p>
      </section>

      {/* =====================================================
          2. Team hinter Herz&Seele
      ===================================================== */}
      <section>
        <h3>2. {t("privacy.controllerTitle")}</h3>
        <p className="small" style={{ color: "var(--text)" }}>
          {/* Kontaktinformationen bewusst nicht übersetzt
              (rechtlich relevante Eigennamen & Adresse) */}
          Herz&amp;Seele – Projektarbeit<br />
          Marcel Pinkert<br />
          Theodor von Brentano
          <br /><br />
          Musterstraße 12<br />
          12345 Musterstadt<br />
          Deutschland
          <br /><br />
          E-Mail: kontakt@herzundseele-projekt.de
        </p>
      </section>

      {/* =====================================================
          3. Datenerfassung (Server-Logs)
      ===================================================== */}
      <section>
        <h3>3. {t("privacy.dataCollectionTitle")}</h3>
        <p>{t("privacy.dataCollectionText")}</p>
      </section>

      {/* =====================================================
          4. SSL / TLS
      ===================================================== */}
      <section>
        <h3>4. {t("privacy.sslTitle")}</h3>
        <p>{t("privacy.sslText")}</p>
      </section>

      {/* =====================================================
          5. Haftungsausschluss
      ===================================================== */}
      <section>
        <h3>5. {t("privacy.disclaimerTitle")}</h3>
        <p>{t("privacy.disclaimerText")}</p>
      </section>

      {/* =====================================================
          6. Rechte der Nutzer:innen
      ===================================================== */}
      <section>
        <h3>6. {t("privacy.rightsTitle")}</h3>
        <p>{t("privacy.rightsText")}</p>
      </section>

      {/* =====================================================
          EOF – Datenschutz.jsx
          bewusst simpel & transparent gehalten
      ===================================================== */}
    </section>
  );
}