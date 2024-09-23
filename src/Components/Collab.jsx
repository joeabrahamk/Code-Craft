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
  return (
    <div className="bg-[#f7f0f0] h-screen flex flex-col items-center justify-center">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#e5601c]">
          In Collaboration With
        </h1>
      </div>

      <div className="flex flex-wrap gap-16 justify-center items-center px-4">
        {logos.map((logo, index) => (
          <a
            key={index}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#e4dddd] p-2 rounded-lg w-64 h-64  flex justify-center items-center"
          >
            {logo.src ? (
              <img
                src={logo.src}
                className="max-h-20 hover:scale-110 transition-transform duration-300"
                alt={logo.alt}
              />
            ) : (
              <div className="max-h-20 bg-gray-200 rounded-lg flex justify-center items-center">
                <span className="text-gray-400">No Logo</span>
              </div>
            )}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Collab;
