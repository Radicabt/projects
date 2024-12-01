import { useTranslation } from "next-i18next";
import styles from "../../styles/IndustriesPageStyles/ContactSection.module.scss";

const ContactSection = () => {
  const { t } = useTranslation("industries");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
  };

  return (
    <section className={styles.contact}>
      <div className={styles.textContainer}>
        <h3 className={styles.title}>{t("contact.title")}</h3>
        <p className={styles.description}>{t("contact.description")}</p>
      </div>
      <form onSubmit={handleSubmit} className={styles.formContainer}>
        <div className={styles.inputWrapper}>
          <img
            src="/images/envelope-icon.png"
            alt="Envelope Icon"
            className={styles.inputIcon}
          />
          <input
            type="email"
            placeholder={t("contact.placeholder")}
            className={styles.inputField}
            required
          />
        </div>
        <button type="submit" className={styles.button}>
          {t("contact.buttonText")}
        </button>
      </form>
    </section>
  );
};

export default ContactSection;
