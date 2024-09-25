import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Collab from "./Components/Collab.jsx";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import FlappyBirdGame from "./Components/FlappyBird.jsx";
import FlappyBird from "./Components/FlappyBird.jsx";
import FAQ from "./Components/FAQ.jsx";

function App() {
  return (
    <div className="overflow-hidden">
      <Navbar />
      <FlappyBird />
      <Hero />
      <About />
      <Collab />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
