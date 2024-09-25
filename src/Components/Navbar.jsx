import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedTab, setSelectedTab] = useState("Home");

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

  const tabs = ["Home", "About", "Collaboration", "LeaderBoard", "FAQ"];

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-8 py-2  transition-all duration-500 ease-in-out ${
          isScrolled ? "bg-white  backdrop-blur-lg shadow-lg" : "bg-transparent"
        }`}
      >
        <div
          className={`w-full flex justify-between items-center transition-opacity duration-500 ease-in-out ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <img className="h-16 " src={logo} alt="" srcset="" />

          <ul className="relative flex w-fit rounded-full p-1">
            {tabs.map((tab) => (
              <Tab
                key={tab}
                text={tab}
                selected={selectedTab === tab}
                setSelectedTab={setSelectedTab}
              />
            ))}
          </ul>
        </div>

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
      onClick={() => setSelectedTab(text)}
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
