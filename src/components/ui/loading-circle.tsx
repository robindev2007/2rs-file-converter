import { cn } from "@/lib/utils";
import React from "react";

type loadingCircleProps = {
  progress: number;
  radius?: number;
  className?: string;
};

const LoadingCircle = ({ progress, radius, className }: loadingCircleProps) => {
  const r = radius ?? 15;
  const strokedashArr = 2 * Math.PI * r;
  const strokedashArrOffset = strokedashArr * ((100 - progress) / 100);

  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 160 160"
      style={{ transform: "rotate(-90deg)" }}>
      <circle
        r={r}
        cx="80"
        cy="80"
        fill="transparent"
        className="stroke-secondary"
        stroke-width="2px"
      />
      <circle
        r={r}
        cx="80"
        cy="80"
        fill="transparent"
        className="stroke-primary"
        stroke-linecap="round"
        stroke-width="2px"
        stroke-dasharray={strokedashArr}
        stroke-dashoffset={strokedashArrOffset}
      />
    </svg>
  );
};

export default LoadingCircle;
