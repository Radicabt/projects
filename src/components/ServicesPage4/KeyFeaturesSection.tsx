import { useTranslation } from "next-i18next";
import styles from "../../styles/ServicesPagesStyles/ServicesPage1.module.scss";

const KeyFeatures = () => {
  const { t } = useTranslation("services");
  const keyFeatures = t("page4.keyFeatures", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const overviewTitle = t("page4.overviewTitle");
  const overviewText = t("page4.overviewText");

  const tdrTitle = t("page4.tdrTitle");
  const tdrText = t("page4.tdrText");

  const bestPracticesTitle = t("page4.bestPracticesTitle");
  const bestPractices = t("page4.bestPractices", { returnObjects: true }) as Array<{
    title: string;
    description: string;
  }>;

  const conclusionTitle = t("page4.conclusionTitle");
  const conclusionText = t("page4.conclusionText");

  return (
    <section className={styles.keyFeaturesSection}>
      <h2 className={styles.keyFeaturesTitle}>
        Key Features of <span className={styles.highlight}>Network Security</span>
      </h2>

      <div className={styles.iconContainer}>
        <img src="/images/card-icon4.png" alt="Icon" className={styles.icon} />
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
