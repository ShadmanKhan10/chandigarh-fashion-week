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

import React from "react";
import "./LoggedIn.css";
import Footer from "./Footer";

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
      <Footer />
    </>
  );
}
