import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Import icons for hamburger and close

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedTab, setSelectedTab] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for managing menu visibility

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    setIsScrolled(currentScrollPos > 50);

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

  const tabs = ["Home", "About", "Collab", /*"LeaderBoard"*/, "faq"];

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
    setIsMenuOpen(false); // Close mobile menu on tab click
    const element = document.getElementById(tab.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-8 py-2 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white backdrop-blur-lg shadow-lg"
            : "bg-white backdrop-blur-lg shadow-lg"
        }`}
      >
        <div className="w-full flex justify-between items-center">
          <img className="h-16" src={logo} alt="Logo" />

          {/* Hamburger Icon */}
          <div
            className="md:hidden cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <AiOutlineClose size={24} />
            ) : (
              <AiOutlineMenu size={24} />
            )}
          </div>

          {/* Desktop Tabs */}
          <ul className={`hidden md:flex w-fit rounded-full p-1`}>
            {tabs.map((tab) => (
              <Tab
                key={tab}
                text={tab}
                selected={selectedTab === tab}
                setSelectedTab={() => handleTabClick(tab)} // Call handleTabClick
              />
            ))}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute left-0 w-full bg-white rounded-lg shadow-lg mt-2 p-4">
            <ul className="flex flex-col space-y-2">
              {tabs.map((tab) => (
                <Tab
                  key={tab}
                  text={tab}
                  selected={selectedTab === tab}
                  setSelectedTab={() => handleTabClick(tab)} // Call handleTabClick
                />
              ))}
            </ul>
          </div>
        )}

        <div className="bottom-0 absolute left-0 w-full">
          <motion.div
            className="h-1 rounded-full bg-yellow-300"
            animate={{ width: `${scrollProgress}%` }}
            transition={{ type: "spring", duration: 0.2 }}
          />
        </div>
      </nav>
    </header>
  );
};

const Tab = ({ text, selected, setSelectedTab }) => {
  return (
    <button
      onClick={setSelectedTab} // Updated to use passed function directly
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-2 md:text-base transition-colors ${
        selected ? "text-white" : "text-[#1C9FE5] hover:text-yellow-300"
      }`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-[#1C9FE5] rounded-md"
        />
      )}
    </button>
  );
};

export default Navbar;
