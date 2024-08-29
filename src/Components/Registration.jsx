import React, { useState } from "react";
import axios from "axios";
import CaptureIcon from "../assets/CaptureIcon.png";
import LocationIcon from "../assets/LocationIcon.png";
import CompanyIcon from "../assets/CompanyIcon.png";
import nameIcon from "../assets/nameIcon.png";
import mobileIcon from "../assets/mobileIcon.png";
import "./Registration.css";

export default function Registration() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [profileImg, setProfileImg] = useState(null);
  const [profileImgBase64, setProfileImgBase64] = useState("");
  //   const [success, setSuccess] = useState("");

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
    // console.log("Form Submitted");

    const newParticipant = {
      name,
      mobileNo,
      companyName,
      location,
      profileImg: profileImgBase64,
    };

    try {
      const response = await axios.post(
        "http://192.168.1.8:3003/register-participant",
        newParticipant
      );
      console.log("Participant added:", response.data);
      console.log(response.data.data.companyName);
      // Handle success (e.g., clear form, show success message, etc.)
      setSuccess("success");
    } catch (error) {
      console.error("Error adding participant:", error);
      setSuccess("failure");
    }
  };

  return (
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
            type="text"
            placeholder="Capture Selfie"
          />
        </div>

        <div className="button-container">
          <button type="submit" className="submit-btn">
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
}
