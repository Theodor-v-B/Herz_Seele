import { useState } from "react";

export default function FindHelp() {
  const [plz, setPlz] = useState("");
  const [stadt, setStadt] = useState("");
  const [results, setResults] = useState([]);
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState("");

  async function search() {
    setStatus("loading");
    setError("");

    const params = new URLSearchParams();
    if (plz.trim()) params.set("plz", plz.trim());
    if (stadt.trim()) params.set("stadt", stadt.trim());

    try {
      const res = await fetch(`http://localhost:3000/api/anlaufstellen?${params.toString()}`);
      const data = await res.json();

      if (!res.ok) {
        setResults([]);
        setStatus("error");
        setError(data?.error || "Fehler bei der Suche");
        return;
      }

      setResults(data.results || []);
      setStatus("done");
    } catch (e) {
      setResults([]);
      setStatus("error");
      setError("Backend nicht erreichbar (läuft server.js?)");
    }
  }

  return (
    <section className="container card" style={{ marginBottom: "24px" }}>
      <h2>Anlaufstellen finden</h2>
      <p className="small">Suche nach PLZ oder Stadt (oder beidem).</p>

      <div className="cta-stack">
        <input
          className="btn"
          style={{ borderRadius: "14px" }}
          value={plz}
          onChange={(e) => setPlz(e.target.value)}
          placeholder="PLZ (z.B. 10115)"
          inputMode="numeric"
        />

        <input
          className="btn"
          style={{ borderRadius: "14px" }}
          value={stadt}
          onChange={(e) => setStadt(e.target.value)}
          placeholder="Stadt (z.B. Berlin)"
        />

        <button className="btn btn-primary" onClick={search} disabled={status === "loading"}>
          {status === "loading" ? "Suche..." : "Suchen"}
        </button>
      </div>

      {status === "error" && <p className="small" style={{ marginTop: "12px" }}>{error}</p>}

      {status === "done" && results.length === 0 && (
        <p className="small" style={{ marginTop: "12px" }}>Keine Treffer gefunden.</p>
      )}

      {results.length > 0 && (
        <div style={{ marginTop: "16px" }} className="cards-3">
          {results.map((r, i) => (
            <article key={`${r.plz}-${r.name}-${i}`} className="card feature">
              <h3 style={{ marginTop: 0 }}>{r.name}</h3>
              <p className="small"><strong>{r.stadt}</strong> • {r.plz}</p>
              <p className="small">{r.strasse}</p>
              <p className="small">
                <a className="btn btn-outline" href={`tel:${r.telefon.replace(/\s+/g, "")}`}>
                  {r.telefon}
                </a>
              </p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}