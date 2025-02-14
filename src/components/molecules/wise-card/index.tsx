import ProgressBar from "../../atoms/linear-progress";
import styles from "@/styles/global.module.css";

export interface WiseCardItem {
  title: string;
  progress: number;
}

interface WiseCardProps {
  progressData: WiseCardItem[];
  title: string;
  className?: string;
}

const WiseCard: React.FC<WiseCardProps> = ({
  className = "",
  title,
  progressData,
}) => {
  return (
    <div
      className={`rounded-md flex flex-col items-start gap-6 bg-white border-2 p-3 ${className}`}
    >
      <p className={styles.cardTitle}>{title}</p>
      {progressData.map((item, index) => (
        <div
          key={`${index}${item.title}`}
          className="flex flex-col gap-3 w-full"
        >
          <p className="text-sm text-gray-700 font-semibold">{item.title}</p>
          <ProgressBar progressPercentage={item.progress} />
        </div>
      ))}
    </div>
  );
};

export default WiseCard;
