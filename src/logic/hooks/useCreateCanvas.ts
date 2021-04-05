import { MutableRefObject, useEffect } from "react";

/**
 * Canvasを生成します。
 * @param refs
 * @param width
 * @param height
 */
export const useCreateCanvas = (
  refs: MutableRefObject<HTMLCanvasElement | null>[],
  width: number,
  height: number
) => {
  useEffect(() => {
    refs.forEach((cv) => {
      if (!cv.current) {
        return;
      }
      const canvas = cv.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        return;
      }
      canvas.width = width * 2;
      canvas.height = height * 2;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      // for Retina
      ctx.scale(2, 2);
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);
    });
  }, [height, refs, width]);
};
