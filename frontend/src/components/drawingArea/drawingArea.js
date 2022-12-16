import { useRef } from "react";
import "./drawingArea.css";

const DrawingArea = () => {
  const canvasRef = useRef(null);

  const drawAt = (ctx, x, y, colour) => {
    const cellSize = 50;

    const cellX = Math.floor(x / cellSize) * cellSize;
    const cellY = Math.floor(y / cellSize) * cellSize;

    ctx.strokeStyle = colour;

    ctx.fillRect(cellX, cellY, cellSize, cellSize);
  };

  const leftClickOnCanvas = (event) => {
    if (!(canvasRef && canvasRef.current)) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const canvasRect = canvas.getBoundingClientRect();
    const clickX = event.clientX - canvasRect.left;
    const clickY = event.clientY - canvasRect.top;

    drawAt(ctx, clickX, clickY);
  };

  return (
    <>
      <div className="display-wrapper">
        <canvas
          ref={canvasRef}
          onClick={leftClickOnCanvas}
          id="display-area"
          height={500}
          width={500}
        ></canvas>
      </div>
    </>
  );
};

export default DrawingArea;
