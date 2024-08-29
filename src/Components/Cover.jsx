import React from "react";
import Background from "../assets/Background.jpg";
import "./Cover.css";

export default function Cover() {
  return (
    <div className="background-img-container">
      <img src={Background} alt="background" className="background-image" />
    </div>
  );
}
