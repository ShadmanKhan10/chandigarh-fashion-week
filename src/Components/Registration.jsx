// import React, { useState, useEffect } from "react";
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

// export default function Registration() {
//   const [name, setName] = useState("");
//   const [location, setLocation] = useState("");
//   const [mobileNo, setMobileNo] = useState("");
//   const [companyName, setCompanyName] = useState("");
//   const [selfieName, setSelfieName] = useState("");
//   const [profileImg, setProfileImg] = useState(null);
//   const [profileImgBase64, setProfileImgBase64] = useState("");
//   const [capturePage, setCapturePage] = useState(false);
//   const [selfiePlaceHolder, setSelfiePlaceHolder] = useState("Capture Selfie");
//   const [selfieClicked, setSelfieClicke] = useState(false);
//   const [userSelfie, setUserSelfie] = useState();
//   const [success, setSuccess] = useState("false");
//   const [errorMsg, setErrorMsg] = useState("");
//   const [showInputError, setShowInputError] = useState(false);

//   const [nameError, setNameError] = useState(false);
//   const [mobileError, setMobileError] = useState(false);
//   const [companyError, setCompanyError] = useState(false);
//   const [locationError, setLocaionError] = useState(false);
//   const [selfieError, setSelfieError] = useState(false);

//   const [multipleFace, setMultipleFace] = useState(false);

//   useEffect(() => {
//     if (success === "login-failed") {
//       setMobileNo("");
//     }
//   }, [success]);

//   const handleNameChange = (event) => {
//     setName(event.target.value);
//     setNameError(false);
//   };

//   const handleMobileNoChange = (event) => {
//     const value = event.target.value;
//     if (/^\d*$/.test(value)) {
//       setMobileNo(value);
//       setMobileError(false);
//     }
//   };

//   const handleCompanyNameChange = (event) => {
//     setCompanyName(event.target.value);
//     setCompanyError(false);
//   };

//   const handleLocationChange = (event) => {
//     setLocation(event.target.value);
//     setLocaionError(false);
//   };

//   const handleSelfieChange = (event) => {
//     setSelfieName(event.target.value);
//   };

//   const handleCapture = () => {
//     setCapturePage(true);
//   };

//   const validateInputs = () => {
//     let isValid = true;

//     if (name === "") {
//       setNameError(true);
//       isValid = false;
//     }

//     if (!/^\d{10}$/.test(mobileNo)) {
//       setMobileError(true);
//       isValid = false;
//     }

//     if (companyName === "") {
//       setCompanyError(true);
//       isValid = false;
//     }

//     if (location === "") {
//       setLocaionError(true);
//       isValid = false;
//     }

//     if (selfiePlaceHolder === "Capture Selfie") {
//       setSelfieError(true);
//       isValid = false;
//     }

//     return isValid;
//   };

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setMultipleFace(false);
//     setNameError(false);
//     setMobileError(false);
//     setCompanyError(false);
//     setLocaionError(false);
//     setSelfieError(false);

//     if (validateInputs()) {
//       const newParticipant = {
//         name,
//         mobileNo,
//         companyName,
//         location,
//         userImage: userSelfie,
//         registrationType: "pre-registration",
//       };

//       try {
//         const response = await axios.post(
//           "http://192.168.1.14:3000/register-participant",
//           newParticipant
//         );
//         console.log("Participant added:", response.data);

//         setSuccess("login-success");
//         console.log(response.status);
//       } catch (error) {
//         if (error.response.status === 409) {
//           setMultipleFace(true);
//           console.log(multipleFace);
//         }
//         // setSuccess("login-failed");
//         // setErrorMsg(error.response.data.message);
//       }
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
//               <div className="inputs-field-container">
//                 <div className="name-container">
//                   <div className="nameIcon-container">
//                     <img className="icon" src={nameIcon} alt="icon" />
//                   </div>
//                   <input
//                     className="input-field"
//                     type="text"
//                     placeholder="Name"
//                     value={name}
//                     onChange={handleNameChange}
//                     required
//                   />
//                 </div>
//                 {nameError && (
//                   <div className="mobile-error-container">
//                     <p className="mobile-error">Enter your name</p>
//                   </div>
//                 )}

//                 <div className="name-container">
//                   <div className="mobileIcon-container">
//                     <img className="icon" src={mobileIcon} alt="icon" />
//                   </div>
//                   <input
//                     className="input-field"
//                     type="number"
//                     placeholder="Mobile Number"
//                     value={mobileNo}
//                     onChange={handleMobileNoChange}
//                     required
//                   />
//                 </div>

//                 {mobileError && (
//                   <div className="mobile-error-container">
//                     <p className="mobile-error">
//                       Enter 10 digits Mobile Number
//                     </p>
//                   </div>
//                 )}

//                 <div className="name-container">
//                   <div className="CompanyIcon-container">
//                     <img className="icon" src={CompanyIcon} alt="icon" />
//                   </div>
//                   <input
//                     className="input-field"
//                     type="text"
//                     placeholder="Company Name"
//                     value={companyName}
//                     onChange={handleCompanyNameChange}
//                     required
//                   />
//                 </div>
//                 {companyError && (
//                   <div className="mobile-error-container">
//                     <p className="mobile-error">Enter your company</p>
//                   </div>
//                 )}

//                 <div className="name-container">
//                   <div className="locationIcon-container">
//                     <img className="icon" src={LocationIcon} alt="icon" />
//                   </div>
//                   <input
//                     className="input-field"
//                     type="text"
//                     placeholder="Location"
//                     value={location}
//                     onChange={handleLocationChange}
//                     required
//                   />
//                 </div>
//                 {locationError && (
//                   <div className="mobile-error-container">
//                     <p className="mobile-error">Enter your location</p>
//                   </div>
//                 )}

//                 <div className="name-container">
//                   <div className="captureIcon-container">
//                     <img className="icon" src={CaptureIcon} alt="icon" />
//                   </div>

//                   <input
//                     className="input-field"
//                     placeholder={selfiePlaceHolder}
//                     // value={selfiePlaceHolder}
//                     onClick={handleCapture}
//                     onChange={handleSelfieChange}
//                     required
//                     readOnly
//                   />
//                 </div>
//                 {selfieError ||
//                   (multipleFace && (
//                     <div className="mobile-error-container">
//                       {selfieError ? (
//                         <p className="mobile-error">No selfie found</p>
//                       ) : (
//                         <p className="mobile-error">Multiple Face Detected</p>
//                       )}
//                     </div>
//                   ))}
//               </div>

//               <div className="button-container">
//                 <button
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
import Logo from "./Logo";
import LoggedLogo from "./LoggedLogo";

export default function Registration() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [selfieName, setSelfieName] = useState("");
  const [profileImg, setProfileImg] = useState(null);
  const [profileImgBase64, setProfileImgBase64] = useState("");
  const [capturePage, setCapturePage] = useState(false);
  const [selfiePlaceHolder, setSelfiePlaceHolder] = useState("Capture Selfie");
  const [selfieClicked, setSelfieClicke] = useState(false);
  const [userSelfie, setUserSelfie] = useState();
  const [success, setSuccess] = useState("false");
  const [errorMsg, setErrorMsg] = useState("");
  const [showInputError, setShowInputError] = useState(false);

  const [nameError, setNameError] = useState(false);
  const [mobileError, setMobileError] = useState(false);
  const [companyError, setCompanyError] = useState(false);
  const [locationError, setLocaionError] = useState(false);
  const [selfieError, setSelfieError] = useState(false);

  const [multipleFace, setMultipleFace] = useState(false);

  const [loading, setLoading] = useState(false);

  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    if (success === "login-failed") {
      setMobileNo("");
    }
  }, [success]);

  const handleNameChange = (event) => {
    setName(event.target.value);
    setNameError(false);
  };

  const handleMobileNoChange = (event) => {
    const value = event.target.value;
    if (/^\d{0,10}$/.test(value)) {
      setMobileNo(value);
      if (value.length < 10) {
        setMobileError(true);
      } else {
        setMobileError(false);
      }
    }
  };

  const handleCompanyNameChange = (event) => {
    setCompanyName(event.target.value);
    setCompanyError(false);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    setLocaionError(false);
  };

  const handleSelfieChange = (event) => {
    setSelfieName(event.target.value);
  };

  const handleCapture = () => {
    setCapturePage(true);
  };

  const validateInputs = () => {
    let isValid = true;

    if (name === "") {
      setNameError(true);
      isValid = false;
    }

    if (!/^\d{10}$/.test(mobileNo)) {
      setMobileError(true);
      isValid = false;
    }

    if (companyName === "") {
      setCompanyError(true);
      isValid = false;
    }

    if (location === "") {
      setLocaionError(true);
      isValid = false;
    }

    if (selfiePlaceHolder === "Capture Selfie") {
      setSelfieError(true);
      isValid = false;
    }

    return isValid;
  };

  // Updated selfie error handling logic
  const handleSubmit = async (event) => {
    event.preventDefault();
    setMultipleFace(false);
    setNameError(false);
    setMobileError(false);
    setCompanyError(false);
    setLocaionError(false);
    setSelfieError(false);

    if (validateInputs()) {
      const newParticipant = {
        name,
        mobileNo,
        companyName,
        location,
        userImage: userSelfie,
        registrationType: "pre-registration",
      };
      setLoading(true);
      try {
        const response = await axios.post(
          // "http://192.168.1.14:3000/register-participant",
          "https://service.ctfw2024.in/register-participant",
          newParticipant
        );
        console.log("Participant added:", response.data);
        setSuccess("login-success");
        console.log(response.status);
        setLoading(false);
        setShowLogo(true);
      } catch (error) {
        if (error.response.status === 409) {
          setMultipleFace(true);
          setLoading(false);
        }
      }
    }
  };

  return (
    <>
      {showLogo ? <LoggedLogo /> : <Logo />}
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
              <div className="inputs-field-container">
                <div className="name-container">
                  <div className="nameIcon-container">
                    <img className="icon" src={nameIcon} alt="icon" />
                  </div>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={handleNameChange}
                    required
                  />
                </div>
                {nameError && (
                  <div className="mobile-error-container">
                    <p className="mobile-error">Enter your name</p>
                  </div>
                )}

                <div className="name-container">
                  <div className="mobileIcon-container">
                    <img className="icon" src={mobileIcon} alt="icon" />
                  </div>
                  <input
                    className="input-field"
                    type="number"
                    placeholder="Mobile Number"
                    value={mobileNo}
                    onChange={handleMobileNoChange}
                    required
                  />
                </div>

                {mobileError && (
                  <div className="mobile-error-container">
                    <p className="mobile-error">
                      Enter 10 digits Mobile Number
                    </p>
                  </div>
                )}

                <div className="name-container">
                  <div className="CompanyIcon-container">
                    <img className="icon" src={CompanyIcon} alt="icon" />
                  </div>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Company Name"
                    value={companyName}
                    onChange={handleCompanyNameChange}
                    required
                  />
                </div>
                {companyError && (
                  <div className="mobile-error-container">
                    <p className="mobile-error">Enter your company</p>
                  </div>
                )}

                <div className="name-container">
                  <div className="locationIcon-container">
                    <img className="icon" src={LocationIcon} alt="icon" />
                  </div>
                  <input
                    className="input-field"
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={handleLocationChange}
                    required
                  />
                </div>
                {locationError && (
                  <div className="mobile-error-container">
                    <p className="mobile-error">Enter your location</p>
                  </div>
                )}

                <div className="name-container">
                  <div className="captureIcon-container">
                    <img className="icon" src={CaptureIcon} alt="icon" />
                  </div>

                  <input
                    className="input-field"
                    placeholder={selfiePlaceHolder}
                    value={
                      selfiePlaceHolder !== "Capture Selfie"
                        ? selfiePlaceHolder
                        : ""
                    }
                    onClick={handleCapture}
                    onChange={handleSelfieChange}
                    // style={{ color: "white" }}
                    required
                    readOnly
                  />
                </div>
                {(selfieError || multipleFace) && (
                  <div className="mobile-error-container">
                    {selfieError ? (
                      <p className="mobile-error">No selfie found</p>
                    ) : (
                      <p className="mobile-error">
                        Capture a clear single face selfie
                      </p>
                    )}
                  </div>
                )}
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
              setSelfieError={setSelfieError}
            />
          )}
        </div>
      )}
      {success === "login-success" && (
        <LoggedIn name={name} userSelfie={userSelfie} />
      )}
      {loading && (
        <div className="loaderContainer">
          <div className="loader"></div>
        </div>
      )}
    </>
  );
}
