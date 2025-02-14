import { comparisonGraphData } from "@/data/placeholder";
import PercentileLineChart from "../graph";
import { calculateAvgPercentile } from "@/utils/calculate-avg-percentile";
import styles from "@/styles/global.module.css";

export interface GraphCardProps {
  className?: string;
  title: string;
  percentile: number;
  averagePercentile: number;
}

const GraphCard: React.FC<GraphCardProps> = ({
  className = "",
  title,
  percentile,
  averagePercentile,
}) => {
  return (
    <div
      className={`rounded-md flex flex-col items-start gap-3 bg-white border-2 p-3 ${className}`}
    >
      <p className={styles.cardTitle}>{title}</p>
      <div className="w-full">
        <div className="flex gap-4 justify-between items-center">
          <p className={styles.cardParagraph}>
            <strong>{`You scored ${percentile}% percentile`}</strong>
            {` which is ${renderPercentileDetail(
              percentile,
              averagePercentile
            )} the average percentile ${calculateAvgPercentile(
              comparisonGraphData
            ).toFixed()}% of all the engineers who took the assignment.`}
          </p>
          <span className={styles.emojiContainer}>
            <span>📈</span>
          </span>
        </div>
        <div className="mt-4">
          <PercentileLineChart
            data={comparisonGraphData}
            yourPercentile={percentile}
          />
        </div>
      </div>
    </div>
  );
};

export default GraphCard;

function renderPercentileDetail(
  percentile: number,
  avgPercentile: number
): "less than" | "greater than" | "equal to" {
  if (percentile < avgPercentile) {
    return "less than";
  }

  if (percentile > avgPercentile) {
    return "greater than";
  }

  return "equal to";
}
