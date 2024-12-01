import { useTranslation } from "next-i18next";
import React, { useState } from "react";
import SignUpForm from "./SignUpForm";
import styles from "../styles/HomePageStyles/PromoSection.module.scss";

const PromoSection = () => {
  const { t } = useTranslation("common");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className={styles.promoSection}>
      <div className={styles.textContainer}>
        <h2>{t("promoSection.heading")}</h2>
        <div className={styles.buttons}>
          <button className={styles.exploreButton}>
            {t("promoSection.buttons.explore")}
          </button>
          <button className={styles.bookButton} onClick={openModal}>
            {t("promoSection.buttons.book")}
          </button>
        </div>
      </div>
      <div className={styles.mediaContainer}>
        <img
          src="/images/video.gif"
          alt="Promo GIF"
          className={styles.promoGif}
        />
        <div className={styles.horizontalLine}></div>
      </div>
      {isModalOpen && <SignUpForm onClose={closeModal} />}
    </section>
  );
};

export default PromoSection;
