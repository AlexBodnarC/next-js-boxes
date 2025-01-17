import { Check } from "lucide-react";
import React from "react";

type Props = {
  completed: number;
  total: number;
};

const CircularProgress = ({ completed, total }: Props) => {
  const radius = 18; // Radius of the circle
  const strokeWidth = 4; // Width of the stroke
  const circumference = 2 * Math.PI * radius; // Circumference of the circle
  const percentage = (completed / total) * 100; // Progress percentage
  const strokeDashoffset = circumference - (percentage / 100) * circumference;
  const isCompleted = completed === total;

  return (
    <div className="relative w-10 h-10">
      <svg className="w-full h-full transform rotate-[-90deg]">
        {/* Background Circle */}
        <circle
          cx="20"
          cy="20"
          r={radius}
          className="stroke-gray-200"
          fill="none"
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        <circle
          cx="20"
          cy="20"
          r={radius}
          className={!isCompleted ? "stroke-blue-500" : "stroke-green-600"}
          fill="none"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
        />
      </svg>
      {/* Center Text */}
      <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold">
        {!isCompleted ? (
          `${completed}/${total}`
        ) : (
          <Check className="text-green-600" />
        )}
      </div>
    </div>
  );
};
export default CircularProgress;
