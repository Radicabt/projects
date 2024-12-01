import { useTranslation } from "next-i18next";
import styles from "../../styles/PartnershipPageStyles/HeroSection.module.scss";

const HeroSection = () => {
  const { t } = useTranslation("partnership");
  return (
    <section className={styles.hero}>
      <h1 className={styles.title}>
        {t("heroTitle.part1")}{" "}
        <span>{t("heroTitle.highlight")}</span>{" "}
        {t("heroTitle.part2")}{" "}
        <span>{t("heroTitle.highlight2")}</span>
      </h1>
      <p className={styles.subtitle}>{t("heroSubtitle")}</p>
    </section>
  );
};

export default HeroSection;
