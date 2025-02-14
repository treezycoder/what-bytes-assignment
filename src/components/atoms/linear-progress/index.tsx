export interface ProgressBarProps {
  className?: string;
  progressPercentage: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  className = "",
  progressPercentage = 0,
}) => {
  // Determine progress color based on percentage
  const getProgressColor = (): string => {
    if (progressPercentage >= 75) return "#4CAF50"; // Green
    if (progressPercentage >= 50) return "#2196F3"; // Blue
    if (progressPercentage >= 25) return "#FF9800"; // Orange
    return "#F44336"; // Red
  };

  const progressColor = getProgressColor();

  return (
    <div
      className={`w-full flex justify-between items-center transition-all duration-200 ${className}`}
    >
      <div
        className="flex-1 rounded-lg h-2"
        style={{ backgroundColor: `${progressColor}33` }} // 33 is ~20% opacity in hex
      >
        <div
          style={{
            width: `${progressPercentage}%`,
            backgroundColor: progressColor,
          }}
          className="rounded-lg h-full transition-all duration-300"
        ></div>
      </div>
      <span
        style={{ color: progressColor }}
        className="text-sm px-1"
      >{`${progressPercentage}%`}</span>
    </div>
  );
};

export default ProgressBar;
