import { useTranslation } from "next-i18next";
import styles from "../../styles/ServicesPagesStyles/ServicesPage1.module.scss";

const KeyFeatures = () => {
  const { t } = useTranslation("services");
  const keyFeatures = t("page1.keyFeatures", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const overviewTitle = t("page1.overviewTitle");
  const overviewText = t("page1.overviewText");

  const tdrTitle = t("page1.tdrTitle");
  const tdrText = t("page1.tdrText");

  const bestPracticesTitle = t("page1.bestPracticesTitle");
  const bestPractices = t("page1.bestPractices", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const conclusionTitle = t("page1.conclusionTitle");
  const conclusionText = t("page1.conclusionText");

  return (
    <section className={styles.keyFeaturesSection}>
      <h2 className={styles.keyFeaturesTitle}>
        Key Features of <span className={styles.highlight}>SIEM</span>
      </h2>

      <div className={styles.iconContainer}>
        <img src="/images/card-icon1.png" alt="Icon" className={styles.icon} />
      </div>

      <div className={styles.keyFeaturesContainer}>
        {keyFeatures.map((feature, index) => (
          <div key={index} className={styles.featureCard}>
            <h3 className={styles.featureTitle}>{feature.title}</h3>
            <p className={styles.featureDescription}>{feature.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.textSection}>
        <h2 className={styles.sectionTitle}>{overviewTitle}</h2>
        <p className={styles.sectionText}>{overviewText}</p>
      </div>

      <div className={styles.textSection}>
        <h2 className={styles.sectionTitle}>{tdrTitle}</h2>
        <p className={styles.sectionText}>{tdrText}</p>
      </div>

      <div className={styles.textSection}>
        <h2 className={styles.sectionTitle}>{bestPracticesTitle}</h2>
        {bestPractices.map((practice, index) => (
          <div key={index} className={styles.bestPracticeItem}>
            <p className={styles.bestPracticeDescription}>{practice.description}</p>
          </div>
        ))}
      </div>

      <div className={styles.textSection}>
        <h2 className={styles.sectionTitle}>{conclusionTitle}</h2>
        <p className={styles.sectionText}>{conclusionText}</p>
      </div>
    </section>
  );
};

export default KeyFeatures;
