require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);

app.get("/api/health", (req, res) => {
  res.json({ status: "Backend läuft 🚀" });
});

async function initDb() {
  // Tabelle
  await db.query(`
    CREATE TABLE IF NOT EXISTS anlaufstellen (
      id SERIAL PRIMARY KEY,
      stadt TEXT NOT NULL,
      plz TEXT NOT NULL,
      name TEXT NOT NULL,
      strasse TEXT NOT NULL,
      telefon TEXT NOT NULL
    )
  `);

  // Seed nur wenn leer
  const { rows } = await db.query("SELECT COUNT(*) FROM anlaufstellen");
  const count = Number(rows[0].count);

  if (count === 0) {
    const seedPath = path.join(__dirname, "seed.sql");
    const seedSql = fs.readFileSync(seedPath, "utf-8");
    await db.query(seedSql);
    console.log("Seed erfolgreich 🌱 (seed.sql)");
  } else {
    console.log(`Seed übersprungen (bereits ${count} Einträge vorhanden)`);
  }
}

// Route: PLZ ODER Stadt (oder beides)
app.get("/api/anlaufstellen", async (req, res) => {
  try {
    const plz = String(req.query.plz || "").trim();
    const stadt = String(req.query.stadt || "").trim();

    if (!plz && !stadt) {
      return res.status(400).json({ error: "Bitte PLZ oder Stadt angeben." });
    }

    let sql = `
      SELECT stadt, plz, name, strasse, telefon
      FROM anlaufstellen
      WHERE 1=1
    `;
    const params = [];
    let i = 1;

    if (plz) {
      sql += ` AND plz = $${i++}`;
      params.push(plz);
    }

    if (stadt) {
      sql += ` AND LOWER(stadt) = LOWER($${i++})`;
      params.push(stadt);
    }

    sql += " ORDER BY stadt, plz, name";

    const { rows } = await db.query(sql, params);
    res.json({ results: rows });
  } catch (err) {
    console.error("DB Fehler:", err);
    res.status(500).json({ error: "Datenbankfehler" });
  }
});

initDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server läuft auf http://localhost:${PORT}`);
      console.log(`Health: http://localhost:${PORT}/api/health`);
    });
  })
  .catch((err) => {
    console.error("Init DB fehlgeschlagen:", err);
    process.exit(1);
  });
