import React, { Suspense, lazy, useState, useEffect } from "react";
import "./App.css";
import Loader from "./Components/Loader.jsx";

const Hero = lazy(() => import("./Components/Hero.jsx"));
const About = lazy(() => import("./Components/About.jsx"));
const Collab = lazy(() => import("./Components/Collab.jsx"));
const Navbar = lazy(() => import("./Components/Navbar.jsx"));
const Footer = lazy(() => import("./Components/Footer.jsx"));
const FlappyBirdGame = lazy(() => import("./Components/FlappyBird.jsx"));
const Leaderboard = lazy(() => import("./Components/Leaderboard.jsx"));
const FAQ = lazy(() => import("./Components/FAQ.jsx"));

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1650); // 1.65 seconds

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="overflow-hidden">
      <Suspense fallback={<Loader />}>
        <Navbar />
        <div id="home">
          <Hero />
        </div>
        <div id="about">
          <About />
        </div>
        <div id="collab">
          <Collab />
        </div>
       
        <div id="faq">
          <FAQ />
        </div>
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;