import { useTranslation } from "next-i18next";
import styles from "../styles/HomePageStyles/NewsletterSection.module.scss";
import Image from "next/image";

const NewsletterSection = () => {
  const { t } = useTranslation("common");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <section className={styles.newsletterContainer}>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{t("newsletter.title")}</h2>
      </div>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.inputWrapper}>
          <input
            type="email"
            className={styles.input}
            placeholder={t("newsletter.placeholder")}
          />
          <Image
            src="/images/envelope-icon.png"
            alt="Envelope Icon"
            width={20}
            height={20}
            className={styles.icon}
          />
        </div>
        <button type="submit" className={styles.button}>
          {t("newsletter.buttonText")}
        </button>
      </form>
    </section>
  );
};

export default NewsletterSection;
