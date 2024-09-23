import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedTab, setSelectedTab] = useState("Home");

  // Function to handle the scroll progress
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const totalHeight = document.body.scrollHeight - window.innerHeight;

    // Change the state based on scroll position
    setIsScrolled(currentScrollPos > 50);

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

  const tabs = ["Home", "Pricing", "Features", "Docs", "Blog"];

  return (
    <header>
      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-8 py-2 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-lg"
            : "bg-transparent"
        }`}
      >
        <div
          className={`w-full flex justify-between items-center transition-opacity duration-500 ease-in-out ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="text-xl font-bold">Logo</div>

          {/* SlideTabs with Animated Selection */}
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

        {/* Scroll Progress Bar */}
        <div className="bottom-0 absolute left-0 w-full">
          <motion.div
            className="h-1 rounded-full bg-[#FA5F1A]"
            animate={{ width: `${scrollProgress}%` }}
            transition={{ type: "spring", duration: 0.2 }}
          ></motion.div>
        </div>
      </nav>
    </header>
  );
};

// Tab component with hover and selection animation
const Tab = ({ text, selected, setSelectedTab }) => {
  return (
    <button
      onClick={() => setSelectedTab(text)}
      className={`relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase md:px-5 md:py-2 md:text-base transition-colors ${
        selected ? "text-white" : "text-black hover:text-[#FA5F1A]"
      }`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-[#FA5F1A] rounded-md"
        />
      )}
    </button>
  );
};

export default Navbar;
