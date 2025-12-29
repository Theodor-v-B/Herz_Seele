export default function Impressum() {
  return (
    <section className="container card" style={{ margin: "40px auto" }}>
      <h1>Impressum</h1>

      <p><strong>Angaben gemäß § 5 TMG</strong></p>

      <p>
        Herz&Seele – Projektarbeit<br />
        Marcel Pinkert<br />
        Theodor von Brentano
      </p>

      <p>
        Musterstraße 12<br />
        12345 Musterstadt<br />
        Deutschland
      </p>

      <p>
        <strong>Kontakt:</strong><br />
        E-Mail: kontakt@herzundseele-projekt.de
      </p>

      <p className="small" style={{ marginTop: "20px" }}>
        Hinweis: Dies ist ein nicht-kommerzielles Studienprojekt.
        Die bereitgestellten Inhalte dienen ausschließlich Informationszwecken
        und ersetzen keine professionelle medizinische oder psychologische Beratung.
      </p>

    </section>
  );
}