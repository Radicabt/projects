import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import styles from "../../styles/NewsletterPageStyles/ContactUs.module.scss";
import SignUpForm from "../../HomePageComponents/SignUpForm";
const ContactUs = () => {
  const { t } = useTranslation("newsletter");

  const contactUsText = t("contactUs.text");
  const placeholderText = t("contactUs.placeholder");
  const buttonText = t("contactUs.buttonText");
  const highlightedText = t("contactUs.highlightedText");

  const [isModalOpen, setIsModalOpen] = useState(false); 

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className={styles.contactSection}>
      <div className={styles.contactContent}>
        <div className={styles.textContainer}>
          <h3 className={styles.contactTitle}>
            <span className={styles.highlightText}>{highlightedText}</span>
            {contactUsText.replace(highlightedText, "")}
          </h3>
        </div>
        <div className={styles.formContainer}>
          <input
            type="email"
            className={styles.emailInput}
            placeholder={placeholderText}
          />
          <button className={styles.joinButton} onClick={openModal}>
            {buttonText}
          </button>
        </div>
      </div>

      {isModalOpen && <SignUpForm onClose={closeModal} />}
    </section>
  );
};

export default ContactUs;
