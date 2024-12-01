import React from "react";
import { useTranslation } from "next-i18next";
import styles from "../../styles/NewsletterPageStyles/Hero.module.scss";

const Hero = () => {
  type HeroType = {
    title: string;
    subtitle: string;
    postedDate: string;
    author: string;
  };

  const { t } = useTranslation("newsletter");
  const hero = t("hero", { returnObjects: true }) as HeroType;

  return (
    <section className={styles.hero}>
      <div className={styles["hero-overlay"]}></div>
      <div className={styles["hero-content"]}>
      <p>{hero.subtitle}</p>
        <h1>{hero.title}</h1>
        <p className={styles.postedDate}>{hero.postedDate} <span className={styles.author}>{hero.author}</span> </p>
       
      </div>
    </section>
  );
};

export default Hero;
