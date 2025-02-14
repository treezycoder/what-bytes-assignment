"use client";

import Image from "next/image";
import { ReactNode, useState } from "react";
import Button from "../../atoms/button";
import CustomInput from "../../molecules/input-field";
import { Scores } from "@/types/context";
import { validateForm } from "@/utils/form-validation";
import { useGlobalState } from "@/context";
import ArrowIcon from "../../../../public/assets/icons/arrow.icon";

interface UpdaterFormProps {
  skill_img_src: string;
  className?: string;
}

const UpdaterForm: React.FC<UpdaterFormProps> = ({
  skill_img_src,
  className = "",
}) => {
  const { scores, setScores, setShowUpdateForm } = useGlobalState();

  const [formData, setFormData] = useState<Scores>(scores);
  const { rank, percentile, currentScore, totalQuestions } = formData;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm(formData)) {
      setScores(formData);
      setShowUpdateForm(false);
      console.table(formData);
    }
  };

  const handleCancel = () => {
    setShowUpdateForm(false);
  };

  return (
    <form
      id="update-form"
      onSubmit={handleFormSubmit}
      className={`flex flex-col gap-3 p-4 pt-5 shadow-lg rounded-md bg-white ${className}`}
    >
      <header className="flex justify-between items-center">
        <span className="text-lg md:text-xl font-bold font-sans">
          Update Scores
        </span>
        <span className="size-[30px] bg-transparent relative">
          <Image
            fill
            alt={"test skill"}
            className="w-full h-full object-cover"
            src={skill_img_src ?? "/assets/images/unknown.png"}
          />
        </span>
      </header>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-3">
          {renderInputField(
            1,
            "Rank",
            <CustomInput
              id="rank"
              name="rank"
              type="number"
              required
              className="w-full md:w-auto"
              validate={() => rank > 0}
              hint={rank && rank <= 0 ? "should be greater than 0" : ""}
              value={rank}
              onChange={(e) =>
                setFormData({ ...formData, rank: Number(e.target.value) })
              }
            />,
            "rank"
          )}
          {renderInputField(
            2,
            "Percentile",
            <CustomInput
              id="percentile"
              name="percentile"
              type="number"
              required
              validate={() => percentile >= 0 && percentile <= 100}
              hint={
                percentile && (percentile < 0 || percentile > 100)
                  ? "should be between 0 and 100"
                  : ""
              }
              className="w-full md:w-auto"
              value={percentile}
              onChange={(e) =>
                setFormData({ ...formData, percentile: Number(e.target.value) })
              }
            />,
            "percentile"
          )}
          {renderInputField(
            3,
            `Current Score (out of ${totalQuestions})`,
            <CustomInput
              id="currentScore"
              name="currentScore"
              type="number"
              required
              validate={() =>
                currentScore <= totalQuestions && currentScore >= 0
              }
              hint={
                currentScore &&
                (currentScore > totalQuestions || currentScore < 0)
                  ? `must be between 0 and ${totalQuestions}`
                  : ""
              }
              className="w-full md:w-auto flex-none bg-red-400"
              value={currentScore}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  currentScore: Number(e.target.value),
                })
              }
            />,
            "currentScore"
          )}
        </div>
        <div className="flex justify-end items-center gap-3">
          <Button
            type="button"
            onClick={handleCancel}
            variant="ghost"
            className="w-[60px]"
          >
            Cancel
          </Button>
          <Button
            disabled={!validateForm(formData)}
            type="submit"
            className={`w-[100px] group transition-all duration-200 ${
              validateForm(formData) ? "" : "cursor-not-allowed opacity-50"
            }`}
            icon={
              <ArrowIcon className="group-hover:translate-x-(2px) fill-white size-5" />
            }
            iconClassName="group-hover:translate-x-(2px)"
          >
            Save
          </Button>
        </div>
      </div>
    </form>
  );
};

const renderInputField = (
  fieldNo: number,
  field: string,
  input: ReactNode,
  inputId: string
) => {
  return (
    <div className="flex flex-col gap-2 items-start md:items-center md:flex-row md:justify-between">
      <div className="flex gap-2">
        <div className="size-5 rounded-full flex items-center justify-center bg-blue-800">
          <span className="text-white text-sm">{fieldNo}</span>
        </div>
        <label htmlFor={inputId} className="text-gray-800 text-sm">
          Update your <strong className="Capitalize">{field}</strong>
        </label>
      </div>
      <span className="w-full min-w-[100px] md:max-w-[200px]">{input}</span>
    </div>
  );
};

export default UpdaterForm;
