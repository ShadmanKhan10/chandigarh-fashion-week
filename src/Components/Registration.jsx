import React, { useState } from "react";
import axios from "axios";

export default function Registration() {
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [profileImg, setProfileImg] = useState(null);
  const [profileImgBase64, setProfileImgBase64] = useState("");
  const [success, setSuccess] = useState("");

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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={handleNameChange}
        />
        <input
          type="number"
          placeholder="Mobile Number"
          value={mobileNo}
          onChange={handleMobileNoChange}
        />
        <input
          type="text"
          placeholder="Company Name"
          value={companyName}
          onChange={handleCompanyNameChange}
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={handleLocationChange}
        />
        <input type="file" onChange={handleProfileImageChange} />
        <div>
          {profileImg && (
            <img
              src={profileImg}
              alt="Profile Preview"
              height={100}
              width={150}
            />
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
      {success === "success" && <h1>Success</h1>}
      {success === "failure" && <h1>Failed</h1>}
    </div>
  );
}
