import React, { useRef } from "react";
import { useCreateCanvas } from "@/logic/hooks/useCreateCanvas";

export const TopPageComponent: React.FC = () => {
  const width = 600;
  const height = 400;
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const refs = [canvasRef];
  useCreateCanvas(refs, width, height);
  return <canvas ref={canvasRef} />;
};
