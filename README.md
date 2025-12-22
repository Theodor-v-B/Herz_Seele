# Herz&Seele — Informationsseite zu Depressionen

Kurzbeschreibung
Herz&Seele ist eine kleine, statische Informationsseite (Deutsch) mit verständlichen Erklärungen, ersten Schritten und seriösen Anlaufstellen bei Depressionen. Die Seite ist nicht als Ersatz für medizinische Beratung gedacht.

Features
- Einfache, einseitige Struktur: `index.html` + `style.css`.
- Klarer Fokus auf Erstinformationen, Hilfestellungen und Krisenhinweise.
- Barrierefreundliche Elemente: `skip-link`, ARIA-Attribute.
- Automatische Jahresanzeige per kleinem Script.

Dateiübersicht
- `index.html` : Hauptseite (Inhalte auf Deutsch)
- `style.css`  : Styles und Layout
- `README.md`  : Projektbeschreibung (diese Datei)

Lokales Testen
- Direkter Schnelltest: Öffne `index.html` im Browser.
- Lokaler Server (empfohlen): Im Projektordner z. B. mit Python:
  - `python -m http.server 8000`
  - Dann im Browser: `http://localhost:8000`
- Alternative (Node): `npx serve .`

Barrierefreiheit & Sicherheitshinweise
- `skip-link` ermöglicht Tastatur-Nutzer*innen das Überspringen von Navigation.
- Navigation hat `aria-label`; dekorative Elemente sind `aria-hidden="true"`.
- Kein Ersatz für professionelle Hilfe — akute Krise: Notruf `112` oder Bereitschaftsdienst `116 117`.

Anpassung & Entwicklung
- Inhalte bearbeiten: einfach `index.html` anpassen (Texte, Telefonnummern, regionale Links).
- Styling ändern: `style.css` editieren; Komponenten sind modular gehalten.
- Mehrsprachigkeit: Dateien duplizieren oder kleines JS zur Sprachumschaltung ergänzen.
- Ressourcen zentralisieren: Überlege eine JSON-Datei für externe Links, um Inhalte leichter zu pflegen.

Verbesserungsvorschläge (kurz)
- Open Graph / Social-Meta-Tags ergänzen.
- Formular für Kontaktaufnahme oder Low-threshold-Hilfen hinzufügen (Datenschutz beachten).
- HTML-Validierung und Accessibility-Checks ins CI integrieren.
- Rechtliches: Impressum und Datenschutzerklärung ergänzen bevor öffentlich gemacht wird.

Nützliche Links / Danksagung
- TelefonSeelsorge: https://www.telefonseelsorge.de
- Stiftung Deutsche Depressionshilfe: https://www.deutsche-depressionshilfe.de
- 116117: https://www.116117.de
testing pr