import React from "react";
import "./Note.css";

export default function Note() {
  return (
    <div className="note-container">
      <ul>
        <p className="list-heading">Please Note</p>
        <li
          className="list-item"
          style={{
            backgroundColor: "#FFDC00",
            fontWeight: "bold",
            padding: "0.5vw",
            marginBottom: "0.5vw",
          }}
        >
          It is mandatory to carry your Physical Show Pass along with you at the
          venue.
        </li>
        <li className="list-item">
          The information you've provided enables us to promptly share your
          exclusive event pictures with you.
        </li>
      </ul>
    </div>
  );
}
