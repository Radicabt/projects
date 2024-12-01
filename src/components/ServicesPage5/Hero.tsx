import { useTranslation } from "next-i18next";
import styles from "../../styles/ServicesPagesStyles/ServicesPage1.module.scss";

const Hero = () => {
  const { t } = useTranslation("services");

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroText}>
        <h1 className={styles.heroTitle}>
          <span className={styles.highlight}>{t("page5.highlight")}</span> {t("page5.heroTitle")}
        </h1>

        <div className={styles.heroSubtitleContainer}>
          <div className={styles.verticalLine}></div>
          <p className={styles.heroSubtitle}>{t("page5.heroSubtitle")}</p>
        </div>

        <button className={styles.heroButton}>{t("page5.buttonDemo")}</button>
      </div>
    </section>
  );
};

export default Hero;
