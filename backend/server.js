const express = require("express");
const cors = require("cors");
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// CORS: React/Vite darf an dieses Backend schicken
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// SQLite DB verbinden
const dbPath = path.join(__dirname, "data.db");
const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error("DB Fehler:", err.message);
  } else {
    console.log("SQLite DB verbunden:", dbPath);
  }
});

// Tabelle anlegen + Seed
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS anlaufstellen (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      stadt TEXT NOT NULL,
      plz TEXT NOT NULL,
      name TEXT NOT NULL,
      strasse TEXT NOT NULL,
      telefon TEXT NOT NULL
    )
  `);

  db.get("SELECT COUNT(*) AS count FROM anlaufstellen", (err, row) => {
    if (err) {
      console.error("Seed-Check Fehler:", err.message);
      return;
    }

    if (row.count === 0) {
      const stmt = db.prepare(`
        INSERT INTO anlaufstellen (stadt, plz, name, strasse, telefon)
        VALUES (?, ?, ?, ?, ?)
      `);

      // Berlin
      stmt.run("Berlin","10115","Sozialpsychiatrischer Dienst Berlin","Turmstraße 21, 10559 Berlin","030 9018-0");
      stmt.run("Berlin","10115","Berliner Krisendienste","Berliner Allee 26, 13088 Berlin","0800 111 0 111");
      stmt.run("Berlin","10115","Charité – Ambulante Psychiatrie","Charitéplatz 1, 10117 Berlin","030 450 517002");
      stmt.run("Berlin","10115","Caritas / Diakonie Berlin","Residenzstraße 90, 13409 Berlin","030 66633-0");

      // Dortmund
      stmt.run("Dortmund","44135","Sozialpsychiatrischer Dienst Dortmund","Hoher Wall 9–11, 44137 Dortmund","0231 50-22534");
      stmt.run("Dortmund","44135","Klinikum Dortmund – Psychiatrische Ambulanzen","Beurhausstraße 40, 44137 Dortmund","0231 953-0");
      stmt.run("Dortmund","44135","Caritas Dortmund – Psychosoziale Beratung","Propsteihof 10, 44137 Dortmund","0231 1848-0");
      stmt.run("Dortmund","44135","Diakonie Dortmund","Lange Straße 42, 44137 Dortmund","0231 8494-0");

      // Hamburg
      stmt.run("Hamburg","20095","Sozialpsychiatrischer Dienst Hamburg","Billstraße 80, 20539 Hamburg","040 42828-0");
      stmt.run("Hamburg","20095","Asklepios Kliniken – Psychiatrische Ambulanzen","Rübenkamp 220, 22307 Hamburg","040 1818-0");
      stmt.run("Hamburg","20095","Universitätsklinikum Hamburg-Eppendorf (UKE)","Martinistraße 52, 20246 Hamburg","040 7410-0");
      stmt.run("Hamburg","20095","Diakonie Hamburg","Königstraße 54, 22767 Hamburg","040 30620-0");

      // Stuttgart
      stmt.run("Stuttgart","70173","Sozialpsychiatrischer Dienst Stuttgart","Sophienstraße 1, 70178 Stuttgart","0711 216-59300");
      stmt.run("Stuttgart","70173","Klinikum Stuttgart – Zentrum für Seelische Gesundheit","Prießnitzweg 24, 70374 Stuttgart","0711 278-0");
      stmt.run("Stuttgart","70173","Caritas Stuttgart – Psychosoziale Beratung","Strombergstraße 11, 70188 Stuttgart","0711 2633-0");
      stmt.run("Stuttgart","70173","Evangelische Gesellschaft Stuttgart","Büchsenstraße 34/36, 70174 Stuttgart","0711 2054-0");

      // München
      stmt.run("München","80331","Sozialpsychiatrischer Dienst München","Paul-Heyse-Straße 20, 80336 München","089 233-47234");
      stmt.run("München","80331","LMU Klinikum – Psychiatrische Ambulanz","Nußbaumstraße 7, 80336 München","089 4400-55511");
      stmt.run("München","80331","Caritas München","Hirtenstraße 4, 80335 München","089 55169-0");
      stmt.run("München","80331","Isar-Amper-Klinikum (ambulant)","Ringstraße 8, 85540 Haar","089 4562-0");

      // Saarbrücken
      stmt.run("Saarbrücken","66111","Sozialpsychiatrischer Dienst Saarbrücken","Stengelstraße 10–12, 66117 Saarbrücken","0681 506-5332");
      stmt.run("Saarbrücken","66111","Klinikum Saarbrücken – Psychiatrie","Winterberg 1, 66119 Saarbrücken","0681 963-0");
      stmt.run("Saarbrücken","66111","Caritas Saarbrücken","Ursulinenstraße 67, 66111 Saarbrücken","0681 30906-0");
      stmt.run("Saarbrücken","66111","Diakonie Saarbrücken","Neumünsterstraße 10, 66111 Saarbrücken","0681 940440");

      // Mainz
      stmt.run("Mainz","55116","Sozialpsychiatrischer Dienst Mainz","Kaiserstraße 3–5, 55116 Mainz","06131 12-3300");
      stmt.run("Mainz","55116","Universitätsmedizin Mainz – Psychiatrie","Untere Zahlbacher Straße 8, 55131 Mainz","06131 17-0");
      stmt.run("Mainz","55116","Caritas Mainz","Bahnstraße 32, 55128 Mainz","06131 2848-0");
      stmt.run("Mainz","55116","Diakonie Mainz","Kaiserstraße 37, 55116 Mainz","06131 25090");

      // Wiesbaden
      stmt.run("Wiesbaden","65183","Sozialpsychiatrischer Dienst Wiesbaden","Konradinerallee 11, 65189 Wiesbaden","0611 31-4600");
      stmt.run("Wiesbaden","65183","Helios Dr. Horst-Schmidt-Kliniken","Ludwig-Erhard-Straße 100, 65199 Wiesbaden","0611 43-0");
      stmt.run("Wiesbaden","65183","Caritas Wiesbaden","Bahnhofstraße 26, 65185 Wiesbaden","0611 1749-0");
      stmt.run("Wiesbaden","65183","Diakonie Wiesbaden","Rheinstraße 65, 65185 Wiesbaden","0611 36091-0");

      // Erfurt
      stmt.run("Erfurt","99084","Sozialpsychiatrischer Dienst Erfurt","Juri-Gagarin-Ring 150, 99084 Erfurt","0361 655-4200");
      stmt.run("Erfurt","99084","Helios Klinikum Erfurt – Psychiatrie","Nordhäuser Straße 74, 99089 Erfurt","0361 781-0");
      stmt.run("Erfurt","99084","Caritas Erfurt","Regierungsstraße 44, 99084 Erfurt","0361 6574-0");
      stmt.run("Erfurt","99084","Diakonie Thüringen","Löberstraße 23, 99084 Erfurt","0361 51800-0");

      // Dresden
      stmt.run("Dresden","01067","Sozialpsychiatrischer Dienst Dresden","Theaterstraße 11, 01067 Dresden","0351 488-5301");
      stmt.run("Dresden","01067","Universitätsklinikum Carl Gustav Carus","Fetscherstraße 74, 01307 Dresden","0351 458-0");
      stmt.run("Dresden","01067","Caritas Dresden","Budapester Straße 15, 01069 Dresden","0351 4988-0");
      stmt.run("Dresden","01067","Diakonie Dresden","Glashütter Straße 101a, 01277 Dresden","0351 31001-0");

      // Magdeburg
      stmt.run("Magdeburg","39104","Sozialpsychiatrischer Dienst Magdeburg","Lübecker Straße 32, 39124 Magdeburg","0391 540-6000");
      stmt.run("Magdeburg","39104","Universitätsklinikum Magdeburg – Psychiatrie","Leipziger Straße 44, 39120 Magdeburg","0391 67-0");
      stmt.run("Magdeburg","39104","Caritas Magdeburg","Karl-Schmidt-Straße 5c, 39104 Magdeburg","0391 40851-0");
      stmt.run("Magdeburg","39104","Diakonie Magdeburg","Lübecker Straße 108, 39124 Magdeburg","0391 24451-0");

      // Potsdam
      stmt.run("Potsdam","14467","Sozialpsychiatrischer Dienst Potsdam","Friedrich-Ebert-Straße 79/81, 14467 Potsdam","0331 289-2200");
      stmt.run("Potsdam","14467","Klinikum Ernst von Bergmann","Charlottenstraße 72, 14467 Potsdam","0331 241-0");
      stmt.run("Potsdam","14467","Caritas Potsdam","Althoffstraße 2, 14469 Potsdam","0331 710298");
      stmt.run("Potsdam","14467","Diakonie Potsdam","Rudolf-Breitscheid-Straße 24, 14482 Potsdam","0331 7405-0");

      // Hannover
      stmt.run("Hannover","30159","Sozialpsychiatrischer Dienst Hannover","Podbielskistraße 168, 30177 Hannover","0511 616-4600");
      stmt.run("Hannover","30159","Medizinische Hochschule Hannover (MHH)","Carl-Neuberg-Straße 1, 30625 Hannover","0511 532-0");
      stmt.run("Hannover","30159","KRH Kliniken – Psychiatrie","Rudolf-Virchow-Straße 5, 30625 Hannover","0511 906-0");
      stmt.run("Hannover","30159","Diakonie Hannover","Ebhardtstraße 3A, 30159 Hannover","0511 3687-0");

      // Schwerin
      stmt.run("Schwerin","19053","Sozialpsychiatrischer Dienst Schwerin","Am Packhof 2–6, 19053 Schwerin","0385 545-2900");
      stmt.run("Schwerin","19053","Helios Kliniken Schwerin – Psychiatrie","Wismarsche Straße 393–397, 19055 Schwerin","0385 520-0");
      stmt.run("Schwerin","19053","Caritas Schwerin","Am Grünen Tal 50, 19063 Schwerin","0385 59179-0");
      stmt.run("Schwerin","19053","Diakonie Mecklenburg-Vorpommern","Körnerstraße 7, 19055 Schwerin","0385 50070-0");

      // Kiel
      stmt.run("Kiel","24103","Sozialpsychiatrischer Dienst Kiel","Fleethörn 18–24, 24103 Kiel","0431 901-3400");
      stmt.run("Kiel","24103","Universitätsklinikum Schleswig-Holstein (UKSH)","Arnold-Heller-Straße 3, 24105 Kiel","0431 500-0");
      stmt.run("Kiel","24103","Caritas Kiel","Waitzstraße 6, 24105 Kiel","0431 5902-0");
      stmt.run("Kiel","24103","Diakonie Schleswig-Holstein","Kanalufer 48, 24768 Rendsburg","04331 593-0");

      // Bremen
      stmt.run("Bremen","28195","Sozialpsychiatrischer Dienst Bremen","Faulenstraße 69, 28195 Bremen","0421 361-15151");
      stmt.run("Bremen","28195","Klinikum Bremen-Ost – Psychiatrie","Züricher Straße 40, 28325 Bremen","0421 408-0");
      stmt.run("Bremen","28195","Caritas Bremen","Birkenstraße 11, 28195 Bremen","0421 33873-0");
      stmt.run("Bremen","28195","Diakonie Bremen","Contrescarpe 101, 28195 Bremen","0421 16384-0");

      stmt.finalize();
      console.log("Seed: Anlaufstellen erfolgreich eingefügt");
    }
  });
});

// Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend läuft 🚀" });
});

// Abfrage per PLZ: /api/anlaufstellen?plz=10115
app.get("/api/anlaufstellen", (req, res) => {
  const { plz } = req.query;

  if (!plz) {
    return res.status(400).json({ error: "PLZ fehlt" });
  }

  db.all(
    "SELECT stadt, name, strasse, telefon FROM anlaufstellen WHERE plz = ?",
    [String(plz).trim()],
    (err, rows) => {
      if (err) {
        console.error("DB Fehler:", err.message);
        return res.status(500).json({ error: "Datenbankfehler" });
      }

      res.json({ results: rows });
    }
  );
});

// Abfrage: /api/anlaufstellen?plz=10115

app.get("/api/anlaufstellen", (req, res) => {
  const plz = (req.query.plz || "").trim();
  const stadt = (req.query.stadt || "").trim();

  if (!plz && !stadt) {
    return res.status(400).json({ error: "Bitte plz oder stadt angeben." });
  }

  let sql = "SELECT stadt, plz, name, strasse, telefon FROM anlaufstellen WHERE 1=1";
  const params = [];

  if (plz) {
    sql += " AND plz = ?";
    params.push(plz);
  }

  if (stadt) {
    sql += " AND stadt = ?";
    params.push(stadt);
  }

  db.all(sql, params, (err, rows) => {
    if (err) {
      console.error("DB Fehler:", err.message);
      return res.status(500).json({ error: "Datenbankfehler" });
    }
    res.json({ results: rows });
  });
});

// server starten
app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
  console.log(`Health: http://localhost:${PORT}/api/health`);
});
