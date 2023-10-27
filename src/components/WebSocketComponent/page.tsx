import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

interface WebSocketComponent {
  pointsCropped: string; // Define the type for videoSrc (use the appropriate type)
}
const WebSocketComponent: React.FC<WebSocketComponent> = ({
  pointsCropped,
}) => {
  // const [videoFrame, setVideoFrame] = useState("");
  const [videoFrame2, setVideoFrame2] = useState("");
  const [personCount, setPersonCount] = useState(0);
  const [urlInput, setUrlInput] = useState(
    "http://95.161.27.60/mjpg/video.mjpg"
  );
  //   const [pointsInput, setPointsInput] = useState('147,470 113,276 627,108 626,467');
  const [optionsVisible, setOptionsVisible] = useState(true);

  const wsProtocol = window.location.protocol === "https:" ? "wss" : "ws";
  //   const ws = new WebSocket(`ws://${window.location.host}/ws/video/`);
  const ws = new WebSocket("ws://" + "65.108.149.173:8000" + "/ws/video/");

  const startStreaming = () => {
    const message = {
      command: "start",
      url: urlInput,
      points: pointsCropped,
    };
    ws.send(JSON.stringify(message));
    // Hide the options after starting streaming
    setOptionsVisible(false);
  };

  ws.onmessage = (event) => {
    const frameData = JSON.parse(event.data);
    // setVideoFrame(`data:image/jpeg;base64, ${frameData.image}`);
    setVideoFrame2(`data:image/jpeg;base64, ${frameData.masked_image}`);
    setPersonCount(frameData.count);
  };

  console.log(pointsCropped, urlInput, "cropped points send");
  const styleImgFrame = {
    border: "1px solid #000",
    width: "100%",
    height: "100% ",
  };
  const countResult = {
    position: "relative",
    display: "flex",
  };
  return (
    <div className="App" style={{ color: "#000", width: "100%" }}>
      {/* <h1>Real Frame</h1> */}
      {/* <img id="video-frame" src={videoFrame} alt="Video Frame" /> */}
      <Box style={styleImgFrame}>
        <Image
          src={videoFrame2}
          id="mvideo-frame"
          alt="Video Frame"
          width={350}
          height={350}
          priority
        />
      </Box>

      {optionsVisible && (
        <div id="options">
          {/* <label htmlFor="url">Video URL:</label>
          <input
            type="text"
            id="url"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
          />
          <br />
          <label htmlFor="points">ROI Points:</label>
          {pointsCropped} */}
          {/* <input
            type="text"
            id="points"
            value={pointsInput}
            onChange={(e) => setPointsInput(e.target.value)}
          /><br /> */}
          <button id="start-button" onClick={startStreaming}>
            Start Streaming
          </button>
        </div>
      )}

      <Box sx={{  position:'absolute', bottom:'130px' }}>
        <Typography variant="h5">
        Person Count: <span id="person-count">{personCount}</span>
        </Typography>
      </Box>
    </div>
  );
};

export default WebSocketComponent;
