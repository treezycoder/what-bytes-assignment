import { Scores } from "@/types/context";

export const validateForm = (data: Scores): boolean => {
  if (data.percentile < 0 || data.percentile > 100) {
    return false;
  }

  if (data.currentScore < 0 || data.currentScore > data.totalQuestions) {
    return false;
  }

  if (data.rank <= 0) {
    return false;
  }

  return true;
};
