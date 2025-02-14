import React from "react";

export interface CircularProgressProps {
  progressPercentage: number;
  centerContent?: React.ReactNode;
  size?: number;
  strokeWidth?: number;
}

const CircularProgress: React.FC<CircularProgressProps> = ({
  progressPercentage,
  centerContent,
  size = 100,
  strokeWidth = 8,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const progressOffset =
    circumference - (progressPercentage / 100) * circumference;

  return (
    <svg width={size} height={size} className="relative">
      {/* Background Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke="#BBDEFB" // Light Blue
        strokeWidth={strokeWidth}
      />

      {/* Progress Circle */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        fill="transparent"
        stroke="#2196F3" // Blue Progress
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
        strokeLinecap="round"
        className="transition-all duration-500"
      />

      {/* Center Content */}
      <foreignObject
        x={strokeWidth}
        y={strokeWidth}
        width={size - strokeWidth * 2}
        height={size - strokeWidth * 2}
        className="flex items-center justify-center"
      >
        <div className="flex items-center justify-center w-full h-full text-2xl">
          {centerContent}
        </div>
      </foreignObject>
    </svg>
  );
};

export default CircularProgress;
