import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>© {year} Herz&Seele – Informationsseite rund um Depressionen.</p>

        <p className="small">
          Diese Seite bietet Informationen und ersetzt keine professionelle Behandlung.
        </p>

        <p className="small">
          <Link to="/impressum" className="footer-link">
            Impressum
          </Link>
          {" 🌿 "}
          <Link to="/datenschutz" className="footer-link">
          Datenschutz
          </Link>
          {" 🌿 "}
          <Link to="/urheberrecht-nutzungsbedingungen" className="footer-link">
          Urheberrecht
          </Link>
        </p>
      </div>
    </footer>
  );
}