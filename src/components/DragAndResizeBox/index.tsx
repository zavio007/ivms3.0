import React, { useState } from "react";
import ReactLassoSelect from "react-lasso-select";
import Slider from "@mui/material/Slider";
import WebSocketComponent from "../WebSocketComponent/page";

interface Point {
  x: number;
  y: number;
}

interface DragAndResizeBoxProps {
  videoSrc: string;
}

function pointsToString(points: Point[]): string {
  return points.map(({ x, y }) => `${x},${y}`).join(" ");
}

const DragAndResizeBox: React.FC<DragAndResizeBoxProps> = ({ videoSrc }) => {
  const [src] = useState<string>(videoSrc);
  const [width, setWidth] = useState(500);
  const [img, setImg] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const init = "172,173 509,99 458,263"
    .split(" ")
    .map((c) => c.split(",").map(Number))
    .map(([x, y]) => ({ x, y }));
  const [points, setPoints] = useState<Point[]>(init);
  const resultPoints = pointsToString(points);

  const saveToJsonFile = () => {
    const data = {
      videoSrc: src,
      width,
      height: img.height,
      points: resultPoints,
    };

    // Save to localStorage
    localStorage.setItem("resizedImageData", JSON.stringify(data));
    console.log("Data saved to localStorage");
  };

  return (
    <div className="App" style={{ color: "#000", width: "100%", display: "flex", gap: '2rem' }}>
      <div>
        <ReactLassoSelect
          value={points}
          src={videoSrc}
          onChange={(path: Point[]) => {
            setPoints(path);
          }}
          imageStyle={{ width: `${width}px` }}
          onImageLoad={(e: React.SyntheticEvent<HTMLImageElement>) => {
            const img = e.target as HTMLImageElement;
            setImg({
              width: img.naturalWidth,
              height: img.naturalHeight,
            });
          }}
        />
        <br />
        <div>
          <Slider
            value={width}
            min={0}
            max={1000}
            onChange={(_event, newValue) => setWidth(newValue as number)}
          />
          <p>Image Width: {width}</p>
        </div>
        <br />
        Points:
        <div style={{ display: "flex" }}>{pointsToString(points)}</div>
        <br />
        <button onClick={saveToJsonFile}>Save to JSON</button>
      </div>
      <div>
        <WebSocketComponent pointsCropped={resultPoints} />
      </div>
    </div>
  );
};

export default DragAndResizeBox;
