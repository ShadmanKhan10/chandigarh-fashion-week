// import React, { useState } from "react";
// import axios from "axios";
// import CaptureIcon from "../assets/CaptureIcon.png";
// import LocationIcon from "../assets/LocationIcon.png";
// import CompanyIcon from "../assets/CompanyIcon.png";
// import nameIcon from "../assets/nameIcon.png";
// import mobileIcon from "../assets/mobileIcon.png";
// import Capture from "./Capture";
// import "./Registration.css";
// import LoggedIn from "./LoggedIn";
// import Note from "./Note";
// import Footer from "./Footer";

// export default function Registration() {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [mobileNo, setMobileNo] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [profileImg, setProfileImg] = useState(null);
//   const [profileImgBase64, setProfileImgBase64] = useState("");
//   const [capturePage, setCapturePage] = useState(false);
//   const [selfiePlaceHolder, setSelfiePlaceHolder] = useState("Capture Selfie");
//   const [selfieClicked, setSelfieClicke] = useState(false);
//   const [userSelfie, setUserSelfie] = useState();
//   const [success, setSuccess] = useState("false");

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//   };

//   const handleMobileNoChange = (event) => {
//     setMobileNo(event.target.value);
//   };
//   const handleCompanyNameChange = (event) => {
//     setCompanyName(event.target.value);
//   };
//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//   };

//   const handleCapture = () => {
//     setCapturePage(true);
//   };

//   const handleProfileImageChange = (event) => {
//     const file = event.target.files[0];
//     setProfileImg(URL.createObjectURL(file));

//     // Convert image to base64
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       setProfileImgBase64(reader.result);
//     };
//     reader.readAsDataURL(file);
//   };

//   // const handleTestSubmit = (event) => {
//   //   event.preventDefault();
//   //   setSuccess(true);
//   // };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     // console.log("Form Submitted");

//     const newParticipant = {
//       name,
//       mobileNo,
//       companyName,
//       location,
//       userImage: userSelfie,
//       // profileImg: profileImgBase64,
//     };

//     try {
//       const response = await axios.post(
//         "http://192.168.1.8:3000/register-participant",
//         newParticipant
//       );
//       console.log("Participant added:", response.data);
//       // console.log(response.data.data.co);
//       // Handle success (e.g., clear form, show success message, etc.)
//       setSuccess("login-success");
//     } catch (error) {
//       console.error("Error adding participant:", error);
//       setSuccess("login-failed");
//     }
//   };

//   return (
//     <>
//       {success === "false" && (
//         <div className="main-registration-container">
//           <div className="registration-container">
//             <div className="text-containing-div">
//               <p className="text-description">
//                 Please fill in your details below to register yourself for the
//                 Chandigarh Times Fashion Week 2024
//               </p>
//             </div>

//             <form onSubmit={handleSubmit}>
//               <div className="input-field-container">
//                 <div className="nameIcon-container">
//                   <img className="name-icon" src={nameIcon} alt="icon" />
//                 </div>
//                 <input
//                   className="name-field"
//                   type="text"
//                   placeholder="Name"
//                   value={name}
//                   onChange={handleNameChange}
//                 />
//                 <div className="mobileIcon-container">
//                   <img className="mobile-icon" src={mobileIcon} alt="icon" />
//                 </div>
//                 <input
//                   className="mobileNo-field"
//                   type="number"
//                   placeholder="Mobile Number"
//                   value={mobileNo}
//                   onChange={handleMobileNoChange}
//                 />
//                 <div className="CompanyIcon-container">
//                   <img className="company-icon" src={CompanyIcon} alt="icon" />
//                 </div>
//                 <input
//                   className="company-field"
//                   type="text"
//                   placeholder="Company Name"
//                   value={companyName}
//                   onChange={handleCompanyNameChange}
//                 />

//                 <div className="locationIcon-container">
//                   <img
//                     className="location-icon"
//                     src={LocationIcon}
//                     alt="icon"
//                   />
//                 </div>
//                 <input
//                   className="location-field"
//                   type="text"
//                   placeholder="Location"
//                   value={location}
//                   onChange={handleLocationChange}
//                 />
//                 <div className="captureIcon-container">
//                   <img className="capture-icon" src={CaptureIcon} alt="icon" />
//                 </div>

//                 <input
//                   className="capture-selfie-field"
//                   // type="text"
//                   placeholder={selfiePlaceHolder}
//                   value={selfiePlaceHolder}
//                   onClick={handleCapture}
//                 />
//               </div>

//               <div className="button-container">
//                 <button
//                   // onClick={handleSubmit}
//                   onClick={handleSubmit}
//                   type="submit"
//                   className="submit-btn"
//                 >
//                   SUBMIT
//                 </button>
//               </div>
//             </form>
//             <Note />
//           </div>
//           {capturePage && (
//             <Capture
//               setCapturePage={setCapturePage}
//               setSelfiePlaceHolder={setSelfiePlaceHolder}
//               setSelfieClicke={setSelfieClicke}
//               userSelfie={userSelfie}
//               setUserSelfie={setUserSelfie}
//               name={name}
//             />
//           )}
//           {/* {success && <LoggedIn name={name} userSelfie={userSelfie} />} */}
//         </div>
//       )}
//       <div>
//         {success === "login-success" && (
//           <LoggedIn name={name} userSelfie={userSelfie} />
//         )}
//       </div>
//     </>
//   );
// }

import React, { useState, useEffect } from "react";
import axios from "axios";
import CaptureIcon from "../assets/CaptureIcon.png";
import LocationIcon from "../assets/LocationIcon.png";
import CompanyIcon from "../assets/CompanyIcon.png";
import nameIcon from "../assets/nameIcon.png";
import mobileIcon from "../assets/mobileIcon.png";
import Capture from "./Capture";
import "./Registration.css";
import LoggedIn from "./LoggedIn";
import Note from "./Note";

export default function Registration() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [profileImg, setProfileImg] = useState(null);
  const [profileImgBase64, setProfileImgBase64] = useState("");
  const [capturePage, setCapturePage] = useState(false);
  const [selfiePlaceHolder, setSelfiePlaceHolder] = useState("Capture Selfie");
  const [selfieClicked, setSelfieClicke] = useState(false);
  const [userSelfie, setUserSelfie] = useState();
  const [success, setSuccess] = useState("false");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (success === "login-failed") {
      alert(errorMsg);
      // refreshFields();
      setName("");
      setLocation("");
      setMobileNo("");
      setCompanyName("");
      setUserSelfie(null);
      setSelfiePlaceHolder("Capture Selfie");
      setSuccess("false");
    }
  }, [success]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleMobileNoChange = (event) => {
    setMobileNo(event.target.value);
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleCapture = () => {
    setCapturePage(true);
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    setProfileImg(URL.createObjectURL(file));

    // Convert image to base64
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfileImgBase64(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newParticipant = {
      name,
      mobileNo,
      companyName,
      location,
      userImage: userSelfie,
    };

    try {
      const response = await axios.post(
        "http://192.168.1.8:3000/register-participant",
        newParticipant
      );
      console.log("Participant added:", response.data);
      setSuccess("login-success");

      console.log(response.status);
    } catch (error) {
      // console.error("Error adding participant:", error);
      setSuccess("login-failed");
      console.log("Error Msg", error.response.data.message);
      setErrorMsg(error.response.data.message);
    }
  };

  return (
    <>
      {success === "false" && (
        <div className="main-registration-container">
          <div className="registration-container">
            <div className="text-containing-div">
              <p className="text-description">
                Please fill in your details below to register yourself for the
                Chandigarh Times Fashion Week 2024
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="input-field-container">
                <div className="nameIcon-container">
                  <img className="name-icon" src={nameIcon} alt="icon" />
                </div>
                <input
                  className="name-field"
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={handleNameChange}
                />
                <div className="mobileIcon-container">
                  <img className="mobile-icon" src={mobileIcon} alt="icon" />
                </div>
                <input
                  className="mobileNo-field"
                  type="number"
                  placeholder="Mobile Number"
                  value={mobileNo}
                  onChange={handleMobileNoChange}
                />
                <div className="CompanyIcon-container">
                  <img className="company-icon" src={CompanyIcon} alt="icon" />
                </div>
                <input
                  className="company-field"
                  type="text"
                  placeholder="Company Name"
                  value={companyName}
                  onChange={handleCompanyNameChange}
                />

                <div className="locationIcon-container">
                  <img
                    className="location-icon"
                    src={LocationIcon}
                    alt="icon"
                  />
                </div>
                <input
                  className="location-field"
                  type="text"
                  placeholder="Location"
                  value={location}
                  onChange={handleLocationChange}
                />
                <div className="captureIcon-container">
                  <img className="capture-icon" src={CaptureIcon} alt="icon" />
                </div>

                <input
                  className="capture-selfie-field"
                  placeholder={selfiePlaceHolder}
                  value={selfiePlaceHolder}
                  onClick={handleCapture}
                />
              </div>

              <div className="button-container">
                <button
                  onClick={handleSubmit}
                  type="submit"
                  className="submit-btn"
                >
                  SUBMIT
                </button>
              </div>
            </form>
            <Note />
          </div>
          {capturePage && (
            <Capture
              setCapturePage={setCapturePage}
              setSelfiePlaceHolder={setSelfiePlaceHolder}
              setSelfieClicke={setSelfieClicke}
              userSelfie={userSelfie}
              setUserSelfie={setUserSelfie}
              name={name}
            />
          )}
        </div>
      )}
      <div>
        {success === "login-success" && (
          <LoggedIn name={name} userSelfie={userSelfie} />
        )}
      </div>
    </>
  );
}
