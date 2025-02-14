"use client";

import Image from "next/image";
import Button from "../../atoms/button";
import { formatWithZero } from "@/utils/format-with-zero";
import Modal from "../../organism/modal";
import { useGlobalState } from "@/context";
import UpdaterForm from "../../organism/updater-form";
import styles from "@/styles/global.module.css";

export type UpdaterCardProps = {
  title: string;
  numberOfQuestions: number;
  duration: string;
  dateOfSubmission: string;
  img_src: string;
};

interface UpdaterCardData {
  className?: string;
  data: UpdaterCardProps;
}

const UpdaterCard: React.FC<UpdaterCardData> = ({ className = "", data }) => {
  const { showUpdateForm, setShowUpdateForm } = useGlobalState();
  const { title, img_src, numberOfQuestions, dateOfSubmission, duration } =
    data;
  return (
    <div
      className={`rounded-md border-2 p-3 gap-3 flex items-center ${className}`}
    >
      <span className="size-[64px] bg-transparent relative">
        <Image
          fill
          alt={title}
          className="w-full h-full object-cover"
          src={img_src ?? "/assets/images/unknown.png"}
        />
      </span>
      <div className="flex gap-2 items-center w-full justify-between">
        <div className="flex flex-col gap-2">
          <p className={styles.cardTitle}>{title}</p>
          <p className={`${styles.cardParagraph} font-semibold`}>
            {`Questions: ${formatWithZero(
              numberOfQuestions
            )} | Duration: ${duration} | Submitted on ${new Date(
              dateOfSubmission
            ).toDateString()}`}
          </p>
        </div>
        <Button
          onClick={() => setShowUpdateForm(true)}
          text="Update"
          className=""
        />
        <Modal isOpen={showUpdateForm} onClose={() => setShowUpdateForm(false)}>
          <UpdaterForm skill_img_src={img_src} />
        </Modal>
      </div>
    </div>
  );
};

export default UpdaterCard;
