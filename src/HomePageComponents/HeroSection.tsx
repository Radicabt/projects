import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "next-i18next";
import styles from "../styles/HomePageStyles/HeroSection.module.scss";
import SignUpForm from "./SignUpForm";

const HeroSection = () => {
  const { t } = useTranslation("common");
  const industries = t("heroSection.industries", {
    returnObjects: true,
  }) as string[];
  const headline = t("heroSection.content.headline") as string;
  const highlightText = t("heroSection.content.highlightWord") as string;

  const highlightStartIndex = headline.indexOf(highlightText);
  const beforeHighlight =
    highlightStartIndex !== -1
      ? headline.slice(0, highlightStartIndex)
      : headline;
  const highlight =
    highlightStartIndex !== -1
      ? headline.slice(
          highlightStartIndex,
          highlightStartIndex + highlightText.length
        )
      : "";
  const afterHighlight =
    highlightStartIndex !== -1
      ? headline.slice(highlightStartIndex + highlightText.length)
      : "";

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      <section className={styles.hero}>
        <div className={styles.headerText}>
          <h1>{t("heroSection.header.title")}</h1>
          <h2>{t("heroSection.header.subtitle")}</h2>
        </div>
        <div className={styles.heroContentWrapper}>
          <div className={styles.heroContent}>
            <h3>
              {beforeHighlight}
              {highlight && (
                <span className={styles.highlight}>{highlight}</span>
              )}
              {afterHighlight}
              <div className={styles.divider}></div>
              <span className={styles.subText}>
                {t("heroSection.content.subtext")}
              </span>
            </h3>
          </div>
          <div className={styles.buttons}>
            <button className={styles.consultBtn}>
              <Image
                src="/images/image.png"
                alt="Consultation"
                width={32}
                height={32}
              />
              {t("heroSection.buttons.consultation")}
            </button>
            <button className={styles.startBtn} onClick={handleOpenModal}>
              {t("heroSection.buttons.getStarted")}
            </button>
          </div>
        </div>
        <div className={styles.heroLinks}>
          {industries.map((industry, index) => (
            <a href="#" key={index}>
              {industry}
            </a>
          ))}
        </div>
      </section>
      {isModalOpen && <SignUpForm onClose={handleCloseModal} />}
    </>
  );
};

export default HeroSection;
