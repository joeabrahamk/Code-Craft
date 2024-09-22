import React from "react";
import eetilogo from "../assets/eeti-logo.webp";
import iedccec from "../assets/iedccec.webp";
import foces from "../assets/foces.webp";
import visatiedc from "../assets/visatiedc.webp";
import iedccek from "../assets/iedccek.webp";
import sreeiedc from "../assets/sreeramaiedc.webp";
import catalyst from "../assets/Catalyst.webp";

function Collab() {
    return (

        <>
            <div className="Collab-container">
                <div className="Collab-heading">
                     <h1>In Collaboration With</h1>
                </div>

                <div className="Collab-logos">
                    
                <a href="https://www.eetifoundation.org/" target="_blank" rel="noopener noreferrer">
                        <img src={eetilogo} className="eeti-logo" alt="EETI" />
                    </a>
                    <a href="https://www.iedcbootcampcec.in/" target="_blank" rel="noopener noreferrer">
                        <img src={iedccec} className="iedccec-logo" alt="BOOTCAMP" />
                    </a>
                    <a href="https://foces.ceconline.edu/" target="_blank"  rel="noopener noreferrer">
                        <img src={foces} className="foces-logo" alt="FOCES" />
                    </a>
                    <a href="https://www.visat.org" target="_blank"  rel="noopener noreferrer">
                        <img src={visatiedc} className="visat-logo" alt="visat-iedc" />
                    </a>
                    
                    <a href="https://iedc-cek.vercel.app/" target="_blank"  rel="noopener noreferrer">
                        <img src={iedccek} className="iedccek-logo" alt="cek-iedc" />
                    </a>

                    

                    <a href="https://www.visat.org" target="_blank" className="catalyst"  rel="noopener noreferrer">
                        <img src={catalyst} className="catalyst-logo" alt="Catalyst" />
                    </a>
                    


                    <a href="" target="_blank"  rel="noopener noreferrer">
                        <img className="dummy-logo" />
                    </a>

                    <a href="https://www.visat.org" target="_blank"  rel="noopener noreferrer">
                        <img src={sreeiedc} className="sreeiedc-logo" alt="sreeiedc" />
                    </a>


                </div>

            </div>

        </>

    );

}

export default Collab;