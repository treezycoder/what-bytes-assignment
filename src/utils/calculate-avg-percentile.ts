import { DataPoint } from "@/types/graph";

export const calculateAvgPercentile = (data: DataPoint[]): number => {
  const totalStudents = data.reduce(
    (sum, item) => sum + item.numberOfStudents,
    0
  );
  const weightedSum = data.reduce(
    (sum, item) => sum + item.percentile * item.numberOfStudents,
    0
  );

  return totalStudents > 0 ? weightedSum / totalStudents : 0;
};
