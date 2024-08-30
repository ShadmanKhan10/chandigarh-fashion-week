import React, { useState } from "react";
import axios from "axios";
import CaptureIcon from "../assets/CaptureIcon.png";
import LocationIcon from "../assets/LocationIcon.png";
import CompanyIcon from "../assets/CompanyIcon.png";
import nameIcon from "../assets/nameIcon.png";
import mobileIcon from "../assets/mobileIcon.png";
import Logo from "./Logo";
import Cover from "./Cover";
import Capture from "./Capture";
import "./Registration.css";
import LoggedIn from "./LoggedIn";

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
  const [success, setSuccess] = useState(false);

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

  const handleTestSubmit = (event) => {
    event.preventDefault();
    setSuccess(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log("Form Submitted");

    const newParticipant = {
      name,
      mobileNo,
      companyName,
      location,
      userImage: userSelfie,
      // profileImg: profileImgBase64,
    };

    try {
      const response = await axios.post(
        "http://192.168.1.8:3000/register-participant",
        newParticipant
      );
      console.log("Participant added:", response.data);
      // console.log(response.data.data.co);
      // Handle success (e.g., clear form, show success message, etc.)
      setSuccess(true);
    } catch (error) {
      console.error("Error adding participant:", error);
      setSuccess(false);
    }
  };

  return (
    <>
      <div className="main-registration-container">
        <Cover />
        <Logo />
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
                <img className="location-icon" src={LocationIcon} alt="icon" />
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
                // type="text"
                placeholder={selfiePlaceHolder}
                value={selfiePlaceHolder}
                onClick={handleCapture}
              />
            </div>

            <div className="button-container">
              <button
                // onClick={handleSubmit}
                onClick={handleSubmit}
                type="submit"
                className="submit-btn"
              >
                SUBMIT
              </button>
            </div>
          </form>
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
        {success && <LoggedIn name={name} userSelfie={userSelfie} />}
      </div>
    </>
  );
}
