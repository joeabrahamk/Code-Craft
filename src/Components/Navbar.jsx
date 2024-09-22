import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Function to handle the scroll progress
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    // Change the state based on scroll position
    if (currentScrollPos > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    // Calculate the scroll percentage
    if (totalHeight > 0) {
      const scroll = (currentScrollPos / totalHeight) * 100;
      setScrollProgress(scroll);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-8 py-4 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-lg" : "bg-transparent"
        }`}
      >
        <div
          className={`container mx-auto flex justify-between items-center transition-opacity duration-300 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-xl font-bold">Logo</div>
          <div className="space-x-4">
            <a href="#home" className="text-gray-800 hover:text-blue-500">
              Home
            </a>
            <a href="#about" className="text-gray-800 hover:text-blue-500">
              About
            </a>
            <a href="#services" className="text-gray-800 hover:text-blue-500">
              Services
            </a>
            <a href="#contact" className="text-gray-800 hover:text-blue-500">
              Contact
            </a>
          </div>
        </div>
        <div className="bottom-0 absolute left-0 w-full">
          <div
            className="h-1 bg-blue-500"
            style={{
              width: `${scrollProgress}%`,
              transition: "width 0.3s ease-out",
            }}
          ></div>
        </div>
      </nav>

      {/* Scroll Progress Bar */}
    </header>
  );
};

export default Navbar;
