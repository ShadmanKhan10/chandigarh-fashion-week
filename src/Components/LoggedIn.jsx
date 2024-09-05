// import React from "react";
// import "./LoggedIn.css";
// import Footer from "./Footer";

// export default function LoggedIn({ name, userSelfie }) {
//   return (
//     <div className="loggedIn-container">
//       <div className="login-img-container">
//         <img
//           //   src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
//           src={userSelfie}
//           alt="profile-img"
//           className="user-profile-img"
//         />
//       </div>
//       <div className="login-msg-container">
//         <p className="name-description">Hi, {name}</p>
//         <p className="login-msg-description">
//           Thank you for registering for the Chandigarh Times Fashion
//           <br /> Week event. Get ready for an exciting day full of fashion,
//           style,trends, and unforgettable moments
//         </p>
//         <p className="login-msg-description">
//           Please ensure that you carry your Physical Show Pass along with you at
//           the venue.
//         </p>
//         <p className="login-msg-description">
//           We look forward to seeing you there!
//         </p>
//       </div>
//       <Footer />
//     </div>
//   );
// }

import React, { useState } from "react";
import "./LoggedIn.css";
import sponsorsImage from "../assets/sponsorsImage.png";
import designerImage from "../assets/designerImage.png";
import Footer from "./Footer";
import LoggedLogo from "./LoggedLogo";

export default function LoggedIn({ name, userSelfie }) {
  return (
    <>
      <div className="loggedIn-container">
        <div className="login-img-container">
          <img
            src={userSelfie}
            alt="profile-img"
            className="user-profile-img"
          />
        </div>
        <div className="login-msg-container">
          <p className="name-description">Hi, {name}</p>
          <p className="login-msg-description">
            Thank you for registering for the Chandigarh Times Fashion
            <br /> Week event. Get ready for an exciting day full of fashion,
            style,trends, and unforgettable moments
          </p>
          <p className="login-msg-description">
            Please ensure that you carry your Physical Show Pass along with you
            at the venue.
          </p>
          <p className="login-msg-description">
            We look forward to seeing you there!
          </p>
        </div>
      </div>
      <p
        style={{
          textAlign: "center",
          color: "white",
          fontStyle: "italic",

          position: "relative",
          top: "3.5vw",
        }}
      >
        Partners
      </p>
      <div className="sponser-img-container">
        <img src={sponsorsImage} className="sponser-img" alt="sponser" />
      </div>
      <p
        style={{
          textAlign: "center",
          color: "white",
          fontStyle: "italic",
          position: "relative",
          top: "3.5vw",
        }}
      >
        Designers
      </p>
      <div className="designer-img-container">
        <img src={designerImage} className="designer-img" alt="designers" />
      </div>
      {/* <Footer /> */}
    </>
  );
}
