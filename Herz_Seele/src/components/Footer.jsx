import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

/**
 * Footer
 * --------------------------------------------------
 * Zentrale Fußzeile der Anwendung.
 * Enthält:
 * - Copyright
 * - Kurzen Hinweis (Disclaimer)
 * - Rechtliche Seiten (Impressum, Datenschutz, Urheberrecht)
 *
 * Hinweis:
 * Texte kommen bewusst aus i18n, damit der Footer
 * automatisch sprachabhängig bleibt.
 */
export default function Footer() {
  const { t } = useTranslation();

  // Aktuelles Jahr dynamisch setzen
  // (kein hart codiertes Jahr im Code)
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        
        {/* Copyright / Projektname */}
        <p>
          © {year} Herz&Seele – {t("footer.copyright")}
        </p>

        {/* Kurzer rechtlicher Hinweis */}
        <p className="small">
          {t("footer.disclaimer")}
        </p>

        {/* Rechtliche Links */}
        <p className="small">
          <Link to="/impressum" className="footer-link">
            {t("footer.impressum")}
          </Link>

          {" 🌿 "}

          <Link to="/datenschutz" className="footer-link">
            {t("footer.privacy")}
          </Link>

          {" 🌿 "}

          <Link
            to="/urheberrecht-nutzungsbedingungen"
            className="footer-link"
          >
            {t("footer.copyrightLink")}
          </Link>
        </p>

      </div>
    </footer>
  );
}
