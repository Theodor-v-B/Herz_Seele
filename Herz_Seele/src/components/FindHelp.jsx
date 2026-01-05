import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";

/**
 * FindHelp.jsx
 * -------------------------------------------------------
 * UI-Widget zum Suchen von Anlaufstellen (DE-DB) per PLZ/Stadt.
 * - Frontend-Validierung für leere Suche
 * - API-Basis per VITE_API_BASE_URL konfigurierbar
 * - saubere Statusmaschine (idle/loading/done/error)
 */
export default function FindHelp() {
  const { t } = useTranslation();

  // -----------------------------
  // Local UI state
  // -----------------------------
  const [plz, setPlz] = useState("");
  const [stadt, setStadt] = useState("");
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | loading | done | error etc
  const [error, setError] = useState("");

  // -----------------------------
  // Config
  // -----------------------------
  const API_BASE = useMemo(
    () => import.meta.env.VITE_API_BASE_URL || "http://localhost:3000",
    []
  );

  // -----------------------------
  // Helpers
  // -----------------------------
  const normalized = useMemo(() => {
    return {
      plz: plz.trim(),
      stadt: stadt.trim(),
    };
  }, [plz, stadt]);

  function setErrorState(message) {
    setResults([]);
    setStatus("error");
    setError(message);
  }

  function buildQuery({ plz, stadt }) {
    const params = new URLSearchParams();
    if (plz) params.set("plz", plz);
    if (stadt) params.set("stadt", stadt);
    return params.toString();
  }

  // -----------------------------
  // Actions
  // -----------------------------
  async function search() {
    setStatus("loading");
    setError("");

    if (!normalized.plz && !normalized.stadt) {
      setErrorState(t("findHelp.errorEmpty"));
      return;
    }

    const qs = buildQuery(normalized);

    try {
      // Request
      const res = await fetch(`${API_BASE}/api/anlaufstellen?${qs}`);
      const data = await res.json();

      if (!res.ok) {
        setErrorState(data?.error || t("findHelp.errorGeneric"));
        return;
      }

      setResults(Array.isArray(data?.results) ? data.results : []);
      setStatus("done");
    } catch {
      setErrorState(t("findHelp.errorBackend"));
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter") search();
  }

  // -----------------------------
  // Render
  // -----------------------------
  return (
    <section className="container card" style={{ marginBottom: "24px" }}>
      <header style={{ marginBottom: "12px" }}>
        <h2 style={{ marginBottom: "6px" }}>{t("findHelp.title")}</h2>
        <p className="small" style={{ margin: 0 }}>
          {t("findHelp.subtitle")}
        </p>
        <p className="small" style={{ marginTop: "8px", opacity: 0.9 }}>
          {t("findHelp.noteDE")}
        </p>
      </header>

      {/* Inputs + Action */}
      <div className="cta-stack">
        <input
          className="btn input-plz"
          style={{ borderRadius: "14px" }}
          value={plz}
          onChange={(e) => setPlz(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t("findHelp.plzPlaceholder")}
          inputMode="numeric"
          aria-label={t("findHelp.plzPlaceholder")}
        />

        <input
          className="btn"
          style={{ borderRadius: "14px" }}
          value={stadt}
          onChange={(e) => setStadt(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={t("findHelp.cityPlaceholder")}
          aria-label={t("findHelp.cityPlaceholder")}
        />

        <button
          className="btn btn-primary"
          onClick={search}
          disabled={status === "loading"}
        >
          {status === "loading" ? t("findHelp.loading") : t("findHelp.search")}
        </button>
      </div>

      {/* Status messages */}
      {status === "error" && (
        <p className="small" style={{ marginTop: "12px" }}>
          {error}
        </p>
      )}

      {status === "done" && results.length === 0 && (
        <p className="small" style={{ marginTop: "12px" }}>
          {t("findHelp.noResults")}
        </p>
      )}

      {/* Results */}
      {results.length > 0 && (
        <div className="cards-3" style={{ marginTop: "16px" }}>
          {results.map((r, i) => {
            const phone = String(r?.telefon || "").replace(/\s+/g, "");
            const key = `${r?.plz || "x"}-${r?.name || "y"}-${i}`;

            return (
              <article key={key} className="card feature">
                <h3 style={{ marginTop: 0 }}>{r?.name}</h3>

                <p className="small">
                  <strong>{r?.stadt}</strong> • {r?.plz}
                </p>

                <p className="small">{r?.strasse}</p>

                {phone ? (
                  <a className="btn btn-outline" href={`tel:${phone}`}>
                    {r?.telefon}
                  </a>
                ) : null}
              </article>
            );
          })}
        </div>
      )}
    </section>
  );
}
