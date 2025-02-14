import { Scores } from "@/types/context";
import styles from "@/styles/global.module.css";

export interface StatisticCardProps {
  className?: string;
  title: string;
  data: Scores;
}

const StatisticCard: React.FC<StatisticCardProps> = ({
  className = "",
  title,
  data,
}) => {
  const { rank, percentile, totalQuestions, currentScore } = data;
  return (
    <div
      className={`rounded-md bg-white flex flex-col gap-3 border-2 p-3 ${className}`}
    >
      <p className={styles.cardTitle}>{title}</p>
      <div className="bg-transparent w-full flex flex-col gap-2 md:gap-0 md:flex-row">
        {/* first  */}
        <div className="flex-1 border-r-1 items-center flex gap-3 pl-4 pr-2">
          <span className={styles.emojiContainer}>
            <span>🏆</span>
          </span>
          <div className="flex md:flex-col gap-2">
            <span className="font-bold text-black">{rank}</span>
            <span className="uppercase text-gray-400 min-w-fit truncate">
              Your Rank
            </span>
          </div>
        </div>

        {/* second */}
        <div className="flex-1 border-r-1 items-center flex gap-3 pl-4 pr-2">
          <span className={styles.emojiContainer}>
            <span>📅</span>
          </span>
          <div className="flex md:flex-col gap-2">
            <span className="font-bold text-black">{`${percentile}%`}</span>
            <span className="uppercase text-gray-400 min-w-fit truncate">
              Percentile
            </span>
          </div>
        </div>

        {/* third */}
        <div className="flex-1 items-center flex gap-3 pl-4 pr-2">
          <span className={styles.emojiContainer}>
            <span>✅</span>
          </span>
          <div className="flex md:flex-col gap-2">
            <span className="font-bold text-black">{`${currentScore} / ${totalQuestions}`}</span>
            <span className="uppercase text-gray-400 min-w-fit truncate">
              Correct Answers
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
