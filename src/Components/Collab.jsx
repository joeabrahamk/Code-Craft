import React from "react";
import eetilogo from "../assets/eeti-logo.webp";
import iedccec from "../assets/iedccec.webp";
import foces from "../assets/foces.webp";
import visatiedc from "../assets/visatiedc.webp";
import iedccek from "../assets/iedccek.webp";
import sreeiedc from "../assets/sreeramaiedc.webp";
import catalyst from "../assets/Catalyst.webp";

const logos = [
  {
    src: eetilogo,
    alt: "EETI",
    href: "https://www.eetifoundation.org/",
  },
  {
    src: iedccec,
    alt: "BOOTCAMP",
    href: "https://www.iedcbootcampcec.in/",
  },
  {
    src: foces,
    alt: "FOCES",
    href: "https://foces.ceconline.edu/",
  },
  {
    src: visatiedc,
    alt: "visat-iedc",
    href: "https://www.visat.org",
  },
  {
    src: iedccek,
    alt: "cek-iedc",
    href: "https://iedc-cek.vercel.app/",
  },
  {
    src: catalyst,
    alt: "Catalyst",
    href: "https://www.visat.org",
  },

  {
    src: sreeiedc,
    alt: "sreeiedc",
    href: "https://www.visat.org",
  },
];

function Collab() {
  const collaborators = [
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
    <div className="collab-container">
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
