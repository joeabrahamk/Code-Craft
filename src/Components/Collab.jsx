import React, { useEffect } from "react";
import {
  motion,
  useMotionValue,
  animate,
  useMotionTemplate,
} from "framer-motion";
import foundation from "../assets/eetifoundation.webp";
import eetilogo from "../assets/eeti-logo.webp";
import iedccec from "../assets/iedccec.webp";
import foces from "../assets/foces.webp"; // Ensure this path is correct
import visatiedc from "../assets/visatiedc.webp";
import iedccek from "../assets/iedccek.webp";
import catalyst from "../assets/Catalyst.webp";
import sreeiedc from "../assets/sreeramaiedc.webp";

// Cloud data to generate random clouds
const cloudData = [
  { width: 150, height: 75, top: 60, left: 0, speed: 30 },
  { width: 100, height: 50, top: 80, left: 350, speed: 35 },
  { width: 120, height: 60, top: 100, left: 400, speed: 30 },
  { width: 250, height: 120, top: 200, left: 600, speed: 35 },
  { width: 300, height: 150, top: 400, left: 100, speed: 50 },
  { width: 150, height: 75, top: 500, left: 300, speed: 40 },
  { width: 120, height: 60, top: 520, left: 350, speed: 45 },
  { width: 130, height: 65, top: 540, left: 400, speed: 40 },
  { width: 280, height: 140, top: 600, left: 700, speed: 50 },
  { width: 180, height: 90, top: 620, left: 800, speed: 45 },
  { width: 140, height: 70, top: 640, left: 850, speed: 50 },
  { width: 130, height: 65, top: 660, left: 900, speed: 40 },
];

function Collab() {
  const createCloudVariants = (speed, width) => ({
    animate: {
      x: [0, window.innerWidth], // Animate from left to right
      transition: {
        repeat: Infinity, // Infinite looping
        duration: speed, // Custom speed for each cloud
        ease: "linear",
        onRepeat: (animation) => {
          animation.start({ x: -width }); // Start from off-screen left
        },
      },
    },
  });

  const collaborators = [
    { src: foundation, alt: "EETIF", href: "https://www.eetifoundation.org/" },
    { src: eetilogo, alt: "EETI", href: "https://www.eetifoundation.org/" },
    {
      src: iedccec,
      alt: "IEDC Bootcamp CEC",
      href: "https://www.iedcbootcampcec.in/",
    },
    { src: foces, alt: "FOCES", href: "https://foces.ceconline.edu/" },
    { src: visatiedc, alt: "VISAT IEDC", href: "https://www.visat.org" },
    { src: iedccek, alt: "IEDC CEK", href: "https://iedc-cek.vercel.app/" },
    { src: catalyst, alt: "Catalyst", href: "https://www.visat.org" },
    { src: sreeiedc, alt: "Sree Rama IEDC", href: "" },
  ];

  return (
    <div className="relative collab-container">
      {/* Clouds Animation - Randomly positioned clouds */}
      {cloudData.map((cloud, index) => (
        <motion.div
          key={index}
          className="absolute bg-white opacity-80 rounded-full"
          style={{
            top: cloud.top,
            left: cloud.left,
            width: `${cloud.width}px`,
            height: `${cloud.height}px`,
          }}
          variants={createCloudVariants(cloud.speed, cloud.width)}
          animate="animate"
        ></motion.div>
      ))}
      <div className="collab-heading">
        <h1>In Collaboration With</h1>
      </div>
      <div className="collab-cards">
        {collaborators.map((collab, index) => (
          <div className="collab-card" key={index}>
            <a href={collab.href} target="_blank" rel="noopener noreferrer">
              <img src={collab.src} alt={collab.alt} className="collab-logo" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Collab;
