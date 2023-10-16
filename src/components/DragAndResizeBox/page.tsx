import React, { useState } from "react";
import ReactLassoSelect from "react-lasso-select";

interface Point {
  x: number;
  y: number;
}
interface DragAndResizeBoxProps {
  videoSrc: string; // Define the type for videoSrc (use the appropriate type)
}


function pointsToString(points: Point[]): string {
  return points.map(({ x, y }) => `${x},${y}`).join(" ");
}
const DragAndResizeBox: React.FC<DragAndResizeBoxProps> = ({ videoSrc }) => {
  const [src] = useState<string>(videoSrc); // Corrected image URL

  console.log(videoSrc,"videsrc");
  

  const [img, setImg] = useState<{ width: number; height: number }>({
    width: 0,
    height: 0,
  });
  const [width, setWidth] = useState<number>(500);
  const init = "172,173 509,99 458,263"
    .split(" ")
    .map((c) => c.split(",").map(Number))
    .map(([x, y]) => ({ x, y }));
  const [points, setPoints] = useState<Point[]>(init);

  return (
    <div className="App" style={{ color:'#000', width:'100%'}}>
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
      Image width:{" "}
      <input
        type="range"
        min="0"
        max="1000"
        value={width}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setWidth(+e.target.value)
        }
      />
      <br />
      Points: {pointsToString(points)}
      <br />
      <svg
        viewBox={`0 0 ${img.width} ${img.height}`}
        width={width}
        style={{ border: "1px solid black" }}
      >
        <polyline fill="red" points={pointsToString(points)} />
      </svg>
    </div>
  );
}

export default DragAndResizeBox;
