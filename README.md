# Herz & Seele - Hilfe bei Depressionen

Willkommen bei "Herz & Seele"! Dieses Projekt ist eine einfache Website, die Menschen hilft, mehr über Depressionen zu erfahren und lokale Hilfsangebote in ihrer Nähe zu finden. Die Website ist in mehreren Sprachen verfügbar und soll Unterstützung bieten, wenn man sich niedergeschlagen fühlt.

## Was ist dieses Projekt?

"Herz & Seele" besteht aus zwei Hauptteilen:
- **Die Website (Frontend):** Das ist der Teil, den du im Browser siehst. Hier findest du Informationen über Depressionen, Tipps und eine Suchfunktion für Hilfsstellen.
- **Der Server (Backend):** Das ist der "Motor" hinter der Website. Er speichert Daten über Hilfsangebote und stellt sie der Website zur Verfügung.

Das Projekt läuft in sogenannten "Containern" (kleine, isolierte Umgebungen), um es einfach zu starten und zu verwalten.

## Technologien

Das Projekt verwendet moderne Webtechnologien:
- **Frontend:** React mit Vite für eine schnelle und benutzerfreundliche Website.
- **Backend:** Node.js mit Express für den Server und PostgreSQL als Datenbank.
- **Containerisierung:** Docker und Docker Compose für einfache Bereitstellung.
- **Mehrsprachigkeit:** Unterstützung für Deutsch, Englisch, Arabisch, Finnisch, Polnisch, Russisch, Türkisch und Ukrainisch mit i18next.
- **CI/CD-Pipeline:** Automatisiert den Build, Test und Deployment-Prozess, um sicherzustellen, dass Code-Änderungen schnell überprüft und zuverlässig in Produktion bereitgestellt werden.

## Für wen ist diese Website gedacht?

Die Website richtet sich an alle, die Informationen über Depressionen suchen oder Hilfe brauchen. Sie ist besonders nützlich für:
- Menschen, die Anzeichen von Depressionen bei sich oder anderen bemerken.
- Familienmitglieder oder Freunde, die unterstützen möchten.
- Jeder, der mehr über psychische Gesundheit erfahren möchte.

**Wichtig:** Diese Website ersetzt keine professionelle medizinische Beratung. Bei akuten Problemen wende dich bitte an Fachpersonal oder Notdienste.

## Wie starte ich die Website?

Um die Website lokal auf deinem Computer zu starten, folge diesen einfachen Schritten. Du brauchst keine Programmierkenntnisse – alles ist automatisiert.

### Was brauchst du?
- **Docker:** Ein Programm, das "Container" (wie kleine virtuelle Maschinen) auf deinem Computer laufen lässt. Es ist kostenlos und einfach zu installieren. Besuche [docker.com](https://www.docker.com/) und lade die Desktop-Version für Windows herunter.

### Schritt-für-Schritt-Anleitung
1. **Lade das Projekt herunter:** Stelle sicher, dass du alle Dateien aus diesem Ordner hast.

2. **Erstelle eine Konfigurationsdatei:** Erstelle eine neue Datei namens `.env` im Hauptordner (neben der `README.md`). Kopiere diese Zeilen hinein:
   ```
   POSTGRES_USER=postgres
   POSTGRES_PASSWORD=postgres
   POSTGRES_DB=anlaufstellen
   ```
   Diese Datei enthält Passwörter für die Datenbank – behandle sie sicher und teile sie nicht.

3. **Starte die Anwendung:** Öffne ein Terminal (z.B. die Eingabeaufforderung oder PowerShell) im Hauptordner und gib ein:
   ```
   docker-compose up -d
   ```
   Das startet die Datenbank, den Server und die Website im Hintergrund. Warte ein paar Minuten, bis alles bereit ist.

4. **Öffne die Website:** Öffne deinen Browser und gehe zu `http://localhost`. Die Website sollte nun laufen.

Fertig! Wenn du Änderungen am Code machen möchtest, kannst du die Container stoppen mit `docker-compose down` und neu starten.

### Alternative: Ohne Docker (für Fortgeschrittene)
Wenn du Docker nicht verwenden möchtest, musst du PostgreSQL lokal installieren und die Anwendungen manuell starten. Das ist aber komplizierter und wird hier nicht im Detail erklärt.

## Produktions-Deployment

Für den Betrieb in der Cloud (z.B. auf Azure) gibt es vorgefertigte Docker-Images und Scripts:

1. **Mit Docker Compose (Produktion):** Verwende `docker-compose.prod.yml` anstelle von `docker-compose.yml`. Stelle sicher, dass die `.env`-Datei mit sicheren Passwörtern konfiguriert ist.

2. **Azure Cloud:** Im Ordner `infrastructur_cli/` findest du Scripts für die Bereitstellung auf Microsoft Azure. Diese automatisieren die Einrichtung von virtuellen Maschinen und Containern in der Cloud.

Für detaillierte Anleitungen zu Cloud-Deployment schaue in die Scripts oder die Dokumentation im `infrastructur_cli/` Ordner.

## Häufige Probleme und Lösungen

- **Die Website startet nicht:** Stelle sicher, dass Docker läuft und die `.env`-Datei korrekt erstellt wurde.
- **Fehlermeldung mit "Postgres":** Das bedeutet, die Datenbank läuft nicht. Prüfe mit `docker compose logs postgres`, ob alles in Ordnung ist.
- **Andere Fehler:** Schau in die Logs mit `docker compose logs`. Wenn du nicht weiterkommst, suche online nach der Fehlermeldung oder frage in einem Forum.

## Mehr Informationen

- Die Website unterstützt mehrere Sprachen: Deutsch, Englisch, Arabisch, Finnisch, Polnisch, Russisch, Türkisch und Ukrainisch. Du kannst die Sprache im Browser wechseln.
- Das Projekt ist Open-Source und wird kontinuierlich verbessert.

## Was kann ich beitragen?

Wenn du helfen möchtest, das Projekt zu verbessern:
- Melde Fehler oder Vorschläge als Issue auf GitHub.
- Erstelle Pull Requests für Code-Verbesserungen.
- Übersetze die Website in weitere Sprachen oder verbessere bestehende Übersetzungen.

Wenn du Fragen hast, melde dich gerne!

---

*Dieses Projekt ist ein Aschlussprojekt und wird kontinuierlich verbessert.*
