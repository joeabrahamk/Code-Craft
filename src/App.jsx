import { useState } from "react";
import "./App.css";
import Hero from "./Components/Hero.jsx";
import About from "./Components/About.jsx";
import Navbar from "./Components/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
    </>
  );
}

export default App;
