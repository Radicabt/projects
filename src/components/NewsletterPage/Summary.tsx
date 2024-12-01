import React from "react";
import { useTranslation } from "next-i18next";
import styles from "../../styles/NewsletterPageStyles/Summary.module.scss";

const Summary = () => {
  const { t } = useTranslation("newsletter");

  const sections = [
    {
      heading: t("summary.heading"),
      content: t("summary.content"),
      hasBorders: true, 
    },
    {
      heading: t("introduction.heading"),
      content: t("introduction.content"),
    },
    {
      heading: t("keyTrends.heading"),
      contents: [
        t("keyTrends.content"),
        t("keyTrends.content2"),
        t("keyTrends.content3"),
        t("keyTrends.content4"),
        t("keyTrends.content5"),
        t("keyTrends.content6"),
      ],
    },
    {
      heading: t("caseStudies.heading"),
      contents: [
        { text: t("caseStudies.content"), isHighlighted: true },
        { text: t("caseStudies.heading1"), isHighlighted: true },
        { text: t("caseStudies.content1"), isHighlighted: false },
      ],
    },
    {
      heading: t("prevention.heading"),
      subheading: t("prevention.subheading"),
      contents: [
        { text: t("prevention.content"), isHighlighted: true },
        { text: t("prevention.content1"), isHighlighted: false },
        { text: t("prevention.content2"), isHighlighted: true },
        { text: t("prevention.content3"), isHighlighted: false },
        { text: t("prevention.content4"), isHighlighted: true },
        { text: t("prevention.content5"), isHighlighted: false },
      ],
    },
    {
      heading: t("conclusion.heading"),
      content: t("conclusion.content"),
    },
  ];

  return (
    <div className={styles.summaryContainer}>
      {sections.map((section, index) => (
        <div
          key={index}
          className={`${styles.section} ${
            section.hasBorders ? styles.sectionWithBorders : ""
          }`}
        >
          <h2 className={styles.mainHeading}>{section.heading}</h2>
          {section.contents ? (
            section.contents.map((item, subIndex) =>
              typeof item === "string" ? (
                <p key={subIndex} className={styles.content}>
                  {item}
                </p>
              ) : (
                <p
                  key={subIndex}
                  className={`${styles.content} ${
                    item.isHighlighted ? styles.highlightedText : ""
                  }`}
                >
                  {item.text}
                </p>
              )
            )
          ) : (
            <p className={styles.content}>{section.content}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default Summary;
