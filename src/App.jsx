import React from "react";
import Hero from "./components/hero";
import DesktopEleven from "./components/desktopEleven";
import DesktopOne from "./components/desktopOne";
import DesktopTen from "./components/desktopTen";
import Faq from "./components/faq";
import Revolution from "./components/revolution";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <div>
      <Hero />
      <DesktopEleven />
      <DesktopOne />
      <DesktopTen />
      <Faq />
      <Revolution />
      <Footer />
    </div>
  );
}

export default App;
