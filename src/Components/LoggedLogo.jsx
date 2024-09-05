import React from "react";
import loggedlogo from "../assets/loggedlogo.png";
import "./LoggedLogo.css";

export default function LoggedLogo() {
  return (
    <div className="main-logged-container">
      <img src={loggedlogo} alt="loggedlogo" className="logged-logo" />
    </div>
  );
}
