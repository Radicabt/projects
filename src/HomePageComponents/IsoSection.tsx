import React from "react";
import Image from "next/image";
import styles from "../styles/HomePageStyles/IsoSection.module.scss";
import isoLogo from "../../public/images/iso-logo.png";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

interface Certificate {
  title: string;
}

const IsoSection = () => {
  const { t } = useTranslation("common");
  const certificates: Certificate[] = t("iso.certificates", {
    returnObjects: true,
  }) as Certificate[];

  return (
    <section className={styles.isoSection}>
      <div className={styles.container}>
        <div className={styles.isoLogo}>
          <Image src={isoLogo} alt="ISO Logo" width={317} height={320} />
        </div>

        <div className={styles.textContent}>
          <h2 className={styles.title}>{t("iso.title")}</h2>
          <p className={styles.description}>
            {t("iso.description")
              .split("CYBERWARE Global Defense")
              .map((text, index, array) => (
                <React.Fragment key={index}>
                  {text}
                  {index < array.length - 1 && (
                    <span className={styles.highlight}>
                      CYBERWARE Global Defense
                    </span>
                  )}
                </React.Fragment>
              ))}
          </p>
          <ul className={styles.certificatesList}>
            {certificates.map((cert, index) => (
              <li
                key={index}
                className={`${styles.certificateItem} ${
                  index === 0
                    ? styles.firstItem
                    : index === certificates.length - 1
                    ? styles.lastItem
                    : ""
                }`}
              >
                <span className={styles.certificateText}>{cert.title}</span>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className={styles.certificateChevron}
                />
              </li>
            ))}
          </ul>
          <div className={styles.viewAll}>
            <Link href="/about#iso-certification">
              <button>{t("iso.viewAll")}</button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IsoSection;
