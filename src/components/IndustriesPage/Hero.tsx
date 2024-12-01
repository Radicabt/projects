import { useTranslation } from "next-i18next";
import styles from "../../styles/IndustriesPageStyles/Hero.module.scss";

const Hero = () => {
  const { t } = useTranslation("industries");

  const intro = t("intro", { highlight: "" }).split("{{highlight}}");
  const pageTitle = t("pageTitle").split("{{highlight}}");

  return (
    <section className={styles.hero}>
      <h1 className={styles.pageTitle}>
        {pageTitle[0]}
        <span className={styles.highlight}>{t("highlight")}</span> 
        {pageTitle[1]} 
      </h1>

      <p className={styles.intro}>
        {intro[0]} 
        {intro[1]} 
      </p>
    </section>
  );
};

export default Hero;
