import React from "react";
import "./Footer.css";
import footerLogo from "../assets/footerLogo.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <p className="footer-description">Immersive Technology Partner</p>
      <div className="footer-image-container">
        <img src={footerLogo} alt="logo" className="footerImg" />
      </div>
    </div>
  );
}
