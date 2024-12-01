import { useTranslation } from "next-i18next";
import styles from "../../styles/ServicesPagesStyles/ServicesPage1.module.scss";

const Hero = () => {
  const { t } = useTranslation("services");

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>
          <span className={styles.highlight}>{t("page1.highlight")}</span> {t("page1.heroTitle")}
        </h1>

        <div className={styles.heroSubtitleContainer}>
          <div className={styles.verticalLine}></div>
          <p className={styles.heroSubtitle}>{t("page1.heroSubtitle")}</p>
        </div>

        <button className={styles.heroButton}>{t("page1.buttonDemo")}</button>
      </div>
    </section>
  );
};

export default Hero;
