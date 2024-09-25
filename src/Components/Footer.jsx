import React, { useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="footer-bg">
        <div className="footer-top">
          {/* Left Section - Logo */}
          <div className="footer-left">
            <img src={""} alt="Logo" className="footer-logo" />
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
    </>
  );
}

export default Footer;
