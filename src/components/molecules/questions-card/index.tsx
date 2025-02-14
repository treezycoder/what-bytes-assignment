import CircularProgress from "../../atoms/circular-progress";
import styles from "@/styles/global.module.css";

export interface GraphCardProps {
  className?: string;
  title: string;
  totalQuestions: number;
  correctAnswers: number;
}

const QuestionsCard: React.FC<GraphCardProps> = ({
  className = "",
  title,
  totalQuestions,
  correctAnswers,
}) => {
  const progressPercentage = (correctAnswers / totalQuestions) * 100;

  return (
    <div
      className={`rounded-md flex flex-col items-start gap-3 bg-white border-2 p-3 ${className}`}
    >
      <div className={`flex items-center justify-between w-full`}>
        <p className={styles.cardTitle}>{title}</p>
        <span className="text-blue-600">{`${correctAnswers}/${totalQuestions}`}</span>
      </div>
      <div className="w-full">
        <p className={styles.cardParagraph}>
          <strong>{`You scored ${correctAnswers} correct out of ${totalQuestions}`}</strong>
          .{" "}
          {correctAnswers !== totalQuestions
            ? "However, it still needs some improvements."
            : ""}
        </p>
        <div className="w-full flex py-[42px] justify-center items-center">
          <CircularProgress
            progressPercentage={progressPercentage}
            centerContent={"🎯"}
          />
        </div>
      </div>
    </div>
  );
};

export default QuestionsCard;
