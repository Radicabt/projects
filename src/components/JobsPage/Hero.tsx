import React from "react";
import { useTranslation } from "next-i18next";
import styles from "../../styles/JobsPageStyles/Hero.module.scss";

const Hero = () => {
  const { t } = useTranslation("jobs");

  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        <span className={styles.highlight}>{t("hero.highlight")}</span>
        {t("hero.title").replace(t("hero.highlight"), "")}
      </h1>
      <p className={styles.subtitle}>{t("hero.subtitle")}</p>
    </section>
  );
};

export default Hero;
