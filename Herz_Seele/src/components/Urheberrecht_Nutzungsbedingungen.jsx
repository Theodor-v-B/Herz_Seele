import { useTranslation } from "react-i18next";

/**
 * Urheberrecht_Nutzungsbedingungen.jsx
 * -----------------------------------
 * Statische Rechteseite (i18n-fähig).
 * Inhalte werden vollständig aus translation.json geladen,
 * damit keine rechtlichen Texte im Code selbst „hart verdrahtet“ sind.
 *
 * Autor: Marcel Pinkert
 * Projekt: Herz&Seele
 */

export default function Urheberrecht_Nutzungsbedingungen() {
  const { t } = useTranslation();

  /**
   * Bildnachweis-Liste
   * Wird als Array aus der Translation geladen.
   * returnObjects: true ist nötig, da i18next sonst Strings zurückgibt.
   */
  const imageSources = t("copyright.s3List", {
    returnObjects: true,
  });

  return (
    <section
      className="container card"
      style={{ margin: "24px auto" }}
      aria-labelledby="copyright-title"
    >
      {/* ===== Titel ===== */}
      <h1 id="copyright-title">
        {t("copyright.title")}
      </h1>

      {/* ===== 1. Eigene Inhalte ===== */}
      <h3>{t("copyright.s1Title")}</h3>
      <p>{t("copyright.s1Text1")}</p>
      <p>{t("copyright.s1Text2")}</p>

      {/* ===== 2. Inhalte Dritter ===== */}
      <h3>{t("copyright.s2Title")}</h3>
      <p>{t("copyright.s2Text1")}</p>
      <p>{t("copyright.s2Text2")}</p>

      {/* ===== 3. Bildnachweise ===== */}
      <h3>{t("copyright.s3Title")}</h3>
      <p>{t("copyright.s3Text")}</p>

      <ul className="list">
        {Array.isArray(imageSources) &&
          imageSources.map((source, index) => (
            <li key={index}>
              <strong>{source}</strong>
            </li>
          ))}
      </ul>

      <p className="small">
        {t("copyright.s3Note")}
      </p>

      {/* ===== 4. Verlinkung ===== */}
      <h3>{t("copyright.s4Title")}</h3>
      <p>{t("copyright.s4Text")}</p>
    </section>
  );
}

/**
 * EOF
 * ------------------------------------------------------------------
 * Diese Datei enthält bewusst keine Logik, keine Side Effects
 * und keine externen Abhängigkeiten außer i18n.
 * Änderungen an Texten erfolgen ausschließlich über translation.json.
 */