import { ProfileBoxProps } from "@/components/molecules/profile-box";
import { UpdaterCardProps } from "@/components/molecules/updater-card";
import { WiseCardItem } from "@/components/molecules/wise-card";
import { Scores } from "@/types/context";

// data for the header profile picture component with name
export const profileBoxData: ProfileBoxProps = {
  img_src: "/assets/images/tobias.png",
  name: "Tresor Ngahame",
};

// data for updater dashboard card
export const updaterCardData: UpdaterCardProps = {
  title: "Hyper Text MarkUp Language",
  duration: "15mins",
  numberOfQuestions: 8,
  dateOfSubmission: "2025-02-13T00:00:00.000Z",
  img_src:
    "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
};

//data for the graph

export const comparisonGraphData = [
  { percentile: 0, numberOfStudents: 3 },
  { percentile: 15, numberOfStudents: 3 },
  { percentile: 25, numberOfStudents: 1 },
  { percentile: 30, numberOfStudents: 10 },
  { percentile: 50, numberOfStudents: 6 },
  { percentile: 75, numberOfStudents: 8 },
  { percentile: 100, numberOfStudents: 4 },
];

export const defaultScores: Scores = {
  rank: 5,
  percentile: 50,
  currentScore: 10,
  totalQuestions: 20,
};

export const WiseCardItems: WiseCardItem[] = [
  {
    title: "HTML Tools, Form, History",
    progress: 80,
  },

  {
    title: "Tags and References in HTML",
    progress: 60,
  },

  {
    title: "Tables & References in HTML",
    progress: 40,
  },

  {
    title: "Tables & CSS Basis",
    progress: 96,
  },
];
