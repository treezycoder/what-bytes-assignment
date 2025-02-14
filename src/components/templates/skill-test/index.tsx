"use client";

import GraphCard from "@/components/molecules/graph-card";
import QuestionsCard from "@/components/molecules/questions-card";
import StatisticCard from "@/components/molecules/statistics-card";
import UpdaterCard from "@/components/molecules/updater-card";
import WiseCard from "@/components/molecules/wise-card";
import { useGlobalState } from "@/context";
import { updaterCardData, WiseCardItems } from "@/data/placeholder";

export default function SkillTestTemplate() {
  const { scores } = useGlobalState();

  return (
    <div className="flex flex-col w-full gap-4">
      <h1 className="font-semibold text-gray-700 text-lg">Skill Test</h1>
      <div className="flex flex-col lg:flex-row gap-4 w-full">
        <section className="flex flex-col gap-3 flex-1 w-full lg:w-auto">
          <UpdaterCard data={updaterCardData} />
          <StatisticCard title="Quick Statistics" data={scores} />
          <GraphCard
            title="Comparison Graph"
            percentile={scores.percentile}
            averagePercentile={72}
          />
        </section>
        <section className="flex flex-col gap-3 flex-1 w-full lg:w-auto">
          <WiseCard
            title="Syllabus Wise Analysis"
            progressData={WiseCardItems}
          />
          <QuestionsCard
            title="Question Analysis"
            totalQuestions={scores.totalQuestions}
            correctAnswers={scores.currentScore}
          />
        </section>
      </div>
    </div>
  );
}
