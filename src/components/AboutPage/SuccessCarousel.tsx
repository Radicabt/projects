import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "../../styles/AboutPageStyles/SuccessCarousel.module.scss";

const SuccessCarousel = () => {
  const { t } = useTranslation("about");

  const title = t("success.title");
  const company = t("success.company");
  const challenge = t("success.challenge");
  const solution = t("success.solution");
  const outcome = t("success.outcome");
  const itemCount = parseInt(t("success.itemCount"), 10);

  const successItems = Array.from({ length: itemCount }, () => ({
    company,
    challenge,
    solution,
    outcome,
    image: "/images/success-story.png",
  }));

  const itemsPerPage = 3;
  const totalPages = Math.ceil(successItems.length / itemsPerPage);

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const totalLineWidth = 100; 
  const stepWidth = (100 - (114 / 1500) * 100) / totalPages; 
  const orangeLinePosition = currentIndex * stepWidth;

  return (
    <section className={styles.successSection}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.carouselWrapper}>
        <div
          className={styles.carouselContent}
          style={{
            transform: `translateX(-${currentIndex * stepWidth}%)`,
          }}
        >
          {successItems.map((item, index) => (
            <div key={index} className={styles.card}>
              <img src={item.image} alt="success" className={styles.cardImage} />
              <div className={styles.verticalLine}></div>
              <div className={styles.cardContent}>
                <h3 className={styles.company}>{item.company}</h3>
                <p>
                  <strong>Challenge:</strong> {item.challenge}
                </p>
                <p>
                  <strong>Solution:</strong> {item.solution}
                </p>
                <p>
                  <strong>Outcome:</strong> {item.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.lineWrapper}>
          <div className={styles.line}>
            <div
              className={styles.activeLine}
              style={{
                left: `${orangeLinePosition}%`,
              }}
            ></div>
          </div>

          <div className={styles.controls}>
            <button className={styles.chevron} onClick={handlePrev}>
              <span className={styles.arrow}>&lt;</span>
            </button>
            <button className={styles.chevron} onClick={handleNext}>
              <span className={styles.arrow}>&gt;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessCarousel;
