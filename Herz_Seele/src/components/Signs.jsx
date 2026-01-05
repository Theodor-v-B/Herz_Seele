import { useTranslation } from "react-i18next";

/**
 * Signs.jsx
 * ----------
 * Zeigt typische Anzeichen einer Depression.
 * Die Texte kommen aus der translation.json, damit
 * die Seite mehrsprachig bleibt.
 *
 * Wichtig:
 * - Keine Logik hier, nur Darstellung
 * - Inhalte bewusst ruhig & erklärend gehalten
 */

export default function Signs() {
  const { t } = useTranslation();

  return (
    <section id="zeichen" className="section-alt">
      <div className="container">
        {/* Überschrift */}
        <h2>{t("signs.title")}</h2>

        {/* Karten-Layout mit 3 Hauptpunkten */}
        <div className="cards-3">
          
          {/* 1) Stimmung */}
          <article className="card feature">
            <h3>{t("signs.moodTitle")}</h3>
            <p>{t("signs.moodText")}</p>
          </article>

          {/* 2) Interesse & Energie */}
          <article className="card feature">
            <h3>{t("signs.energyTitle")}</h3>
            <p>{t("signs.energyText")}</p>
          </article>

          {/* 3) Schlaf & Körper */}
          <article className="card feature">
            <h3>{t("signs.sleepTitle")}</h3>
            <p>{t("signs.sleepText")}</p>
          </article>

        </div>
      </div>
    </section>
  );
}
