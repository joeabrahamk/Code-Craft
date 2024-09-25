import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import logo from "../assets/logo.png";

function Footer() {
  return (
    <>
      <div className="footer-bg">
        <div className="footer-top">
          {/* Left Section - Logo */}
          <div className="footer-left">
            <img src={logo} alt="Logo" className="footer-logo" />
          </div>

          {/* Right Section - Contact Numbers */}
          <div className="footer-right">
            <p className="contact">
              <FaPhoneAlt className="contact-icon" /> +91 70251 20451
            </p>
            <p className="contact">
              <FaPhoneAlt className="contact-icon" /> +91 94005 79315
            </p>
          </div>
        </div>

        
        <div className="footer-bottom">
          <p className="copyright">© 2024 . All Rights Reserved.</p>
          <p className="made-by">
            made with <span className="heart">❤</span> team Code Craft
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
