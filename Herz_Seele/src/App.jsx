import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Hero from "./components/Hero";
import FindHelp from "./components/FindHelp";
import WhatIs from "./components/WhatIs";
import Signs from "./components/Signs";
import Help from "./components/Help";
import Resources from "./components/Resources";
import Footer from "./components/Footer";
import Impressum from "./components/Impressum";
import Datenschutz from "./components/Datenschutz";
import Urheberrecht_Nutzungsbedingungen from "./components/Urheberrecht_Nutzungsbedingungen";

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Zum Inhalt springen</a>
      <Header />

      <main id="main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <FindHelp />
                <WhatIs />
                <Signs />
                <Help />
                <Resources />
              </>
            }
          />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/urheberrecht-nutzungsbedingungen" element={<Urheberrecht_Nutzungsbedingungen />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
