import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "../../styles/PartnershipPageStyles/PartnershipCards.module.scss";

const PartnershipCards = () => {
  const { t } = useTranslation("partnership");
  const partnerships = t("partners", { returnObjects: true }) as Array<{
    title: string;
    highlight: string;
    description: string;
    image1: string;
    image2?: string;
  }>;
  const ctaText = t("cta");

  return (
    <section className={styles.partnershipCards}>
      {partnerships.map((partner, index) => (
        <div
          key={index}
          className={`${styles.card} ${
            partner.image2 ? styles.doubleImageCard : styles.singleImageCard
          }`}
        >
          <div className={styles.imageContainer}>
            <Image
              src={partner.image1}
              alt={`${partner.highlight} image 1`}
              width={753}
              height={487}
              className={styles.cardImage}
            />
            {partner.image2 && (
              <Image
                src={partner.image2}
                alt={`${partner.highlight} image 2`}
                width={753}
                height={487}
                className={styles.cardImage}
              />
            )}
          </div>
          <div className={styles.textContainer}>
            <h2 className={styles.cardTitle}>
              {partner.title} <span>{partner.highlight}</span>
            </h2>
            <p className={styles.cardDescription}>{partner.description}</p>
          </div>
        </div>
      ))}
      <button className={styles.ctaButton}>{ctaText}</button>
    </section>
  );
};

export default PartnershipCards;
