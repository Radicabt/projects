import React from "react";
import { useTranslation } from "next-i18next";
import styles from "../../styles/JobsPageStyles/Cards.module.scss";

type JobType = "Full-Time" | "On-Site" | "Hybrid";

type Job = {
  id: number;
  title: string;
  description: string;
  datePosted: string;
  jobType: JobType[]; 
};

type CardsProps = {
  jobs: Job[]; 
};

const Cards = ({ jobs }: CardsProps) => {
  const { t } = useTranslation("jobs");

  return (
    <div className={styles.cardsWrapper}>
      {jobs.map((job) => (
        <div className={styles.card} key={job.id}>
          <div className={styles.date}>{job.datePosted}</div>
          <h2 className={styles.cardTitle}>
            <span className={styles.titleFirstWord}>{job.title.split(" ")[0]}</span>{" "}
            {job.title.split(" ").slice(1).join(" ")}
          </h2>
          <p className={styles.cardDescription}>{job.description}</p>
          <div className={styles.cardJobTypes}>
            <span
              className={styles.jobType}
              style={{
                backgroundColor: job.jobType.includes("Full-Time") ? "#FF6F0F" : "transparent",
              }}
            >
              Full-Time
            </span>
            <span
              className={styles.jobType}
              style={{
                backgroundColor: job.jobType.includes("On-Site") ? "#FF6F0F" : "transparent",
              }}
            >
              On-Site
            </span>
            <span
              className={styles.jobType}
              style={{
                backgroundColor: job.jobType.includes("Hybrid") ? "#FF6F0F" : "transparent",
              }}
            >
              Hybrid
            </span>
          </div>
          <button className={styles.applyButton}>{t("applyButton")}</button>
        </div>
      ))}
    </div>
  );
};

export default Cards;
