import React from "react";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import styles from "../../styles/AboutPageStyles/CertificationCards.module.scss";

type Certification = {
  icon: string;
  title: string;
  description: string;
  buttonText: string;
};

type CertificationsSection = {
  title: string;
  certification: Certification;
  count: number;
};

const CertificationCards = () => {
  const { t } = useTranslation("about");

  const { title, certification, count } = t("certificationsSection", {
    returnObjects: true,
  }) as CertificationsSection;

  const certificationsArray = Array.from({ length: count }, (_, index) => ({
    ...certification,
    id: index + 1, 
  }));

  return (
    <section className={styles.certificationsSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <div className={styles.certificationsGrid}>
        {certificationsArray.map((cert) => (
          <div key={cert.id} className={styles.certificationCard}>
            <Image
              src={cert.icon}
              alt={cert.title}
              width={80}
              height={80}
              className={styles.certIcon}
            />
            <h3 className={styles.cardTitle}>{cert.title}</h3>
            <p className={styles.cardDescription}>{cert.description}</p>
            <button className={styles.seeMoreBtn}>{cert.buttonText}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationCards;
