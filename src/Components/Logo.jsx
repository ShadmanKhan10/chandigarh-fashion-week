import React from "react";
import logo from "../assets/logo.png";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="main-logo-container">
      <img src={logo} alt="logo" className="logo" />
    </div>
  );
}
