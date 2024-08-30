import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import close from "../assets/close.png";
import click from "../assets/click.png";
import camera from "../assets/camera.png";
import "./Capture.css";

export default function Capture({
  setCapturePage,
  setSelfiePlaceHolder,
  setSelfieClicke,
  userSelfie,
  setUserSelfie,
  name,
}) {
  const [captured, setCaptured] = useState(false);
  const webcamRef = useRef(null);

  const handleToggle = () => {
    setCapturePage(false);
    console.log("Captured Selfie", userSelfie);
  };

  const handleCaptureClick = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    setUserSelfie(webcamRef.current.getScreenshot());
    setCaptured(true);
    setSelfieClicke(true);
    setSelfiePlaceHolder(`${name}.png`);
  };

  const handleRetake = () => {
    setCaptured(false);
  };
  return (
    <div className="capture-container">
      <div onClick={handleToggle} className="close-container">
        <img src={close} className="close-img" alt="close" />
      </div>
      <div className="capture-flex-container">
        <div className="camera-preview-container">
          {!captured && (
            <Webcam
              mirrored={true}
              audio={false}
              ref={webcamRef}
              className="webcam-preview"
            />
          )}
          {captured && (
            <img
              src={webcamRef.current.getScreenshot()}
              alt="clicked-selfie"
              className="webcam-preview"
            />
          )}
        </div>
      </div>
      {!captured && (
        <div className="camera-click-container">
          <div className="click-container" onClick={handleCaptureClick}>
            <img src={click} className="click-img" alt="click" />
          </div>
          <div className="camera-container">
            <img src={camera} className="camera-img" alt="camera" />
          </div>
        </div>
      )}
      {captured && (
        <div className="confirm-retake-container">
          <button onClick={handleToggle} className="confirm-btn">
            CONFIRM
          </button>
          <button className="retake-btn" onClick={handleRetake}>
            RETAKE
          </button>
        </div>
      )}
    </div>
  );
}
