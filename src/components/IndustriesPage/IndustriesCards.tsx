import { useTranslation } from "next-i18next";
import styles from "../../styles/IndustriesPageStyles/IndustriesCards.module.scss";

const IndustryCards = () => {
  const { t } = useTranslation("industries");
  const industries = t("industries", { returnObjects: true }) as Array<{
    iconKey: string;
    name: string;
    description: string;
    buttonText: string;
  }>;

  const iconPaths: { [key: string]: string } = {
    Healthcare: "/images/industries-page-icon1.png",
    eGame: "/images/industries-page-icon2.png",
    Education: "/images/industries-page-icon3.png",
    Retail: "/images/industries-page-icon4.png",
    Finance: "/images/industries-page-icon5.png",
    Government: "/images/industries-page-icon6.png"
  };

  return (
    <section className={styles.industryCards}>
      {industries.map((industry, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.icon}>
            <img 
              src={iconPaths[industry.iconKey]} 
              alt={`${industry.name} icon`} 
              width={100} 
              height={100} 
            />
          </div>
          <h2 className={styles.cardHeading}>{industry.name}</h2>
          <p className={styles.cardContent}>{industry.description}</p>
          <button className={styles.cardButton}>{industry.buttonText}</button>
        </div>
      ))}
    </section>
  );
};

export default IndustryCards;
