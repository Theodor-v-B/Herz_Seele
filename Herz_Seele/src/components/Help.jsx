import { useTranslation } from "react-i18next";

/**
 * Help.jsx
 * ----------
 * Zeigt konkrete nächste Schritte, wenn man Hilfe sucht,
 * plus direkte Links zu seriösen Angeboten.
 *
 * Fokus:
 * - übersichtlich
 * - niedrigschwellig
 * - keine Überforderung
 */

export default function Help() {
  const { t } = useTranslation();

  return (
    <section id="hilfe" className="container grid-2">

      {/* ======================================================
          LINKER BEREICH
          --> Schritt-für-Schritt Orientierung
      ====================================================== */}
      <article className="card help-card">
        <div>
          <h2>{t("help.title")}</h2>

          {/* 
            Nummerierte Schritte:
            bewusst kurz gehalten, damit man nicht abschaltet
          */}
          <ol className="steps">
            <li>
              <strong>{t("help.steps.talk")}</strong>
            </li>
            <li>
              <strong>{t("help.steps.appointment")}</strong>
            </li>
            <li>
              <strong>{t("help.steps.selfcare")}</strong>
            </li>
          </ol>
        </div>

        {/* Direkte, praktische Aktionen */}
        <div className="cta-stack">
          <a className="btn btn-primary" href="tel:116117">
            {t("help.medicalService")}
          </a>

          <a
            className="btn btn-outline"
            href="https://www.116117-termine.de"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("help.appointmentSearch")}
          </a>
        </div>
      </article>

      {/* ======================================================
          RECHTER BEREICH
          --> schnelle Hilfe für akute Situationen
      ====================================================== */}
      <aside className="card soothing help-card">
        <div>
          <h2>{t("help.supportTitle")}</h2>
          <p className="small">
            {t("help.supportText")}
          </p>
        </div>

        {/* 
          Externe Hilfsangebote
          bewusst klar getrennt & beschriftet
        */}
        <div className="cta-stack">

          {/* Suizidprävention */}
          <a
            href="https://www.suizidprophylaxe.de"
            className="btn btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("help.prevention")}
          </a>

          {/* Einsamkeit */}
          <a
            href="https://kompetenznetz-einsamkeit.de"
            className="btn btn-outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("help.loneliness")}
          </a>

          {/* Akute Krise */}
          <a
            href="https://www.telefonseelsorge.de/sorgen-themen/krise/"
            className="btn btn-secondary"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("help.crisis")}
          </a>
        </div>
      </aside>
    </section>
  );
}
