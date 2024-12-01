import { useTranslation } from "next-i18next";
import styles from "../../styles/ContactPageStyles/ContactPage.module.scss";

const ContactContent = () => {
  const { t } = useTranslation("contact");

  const countryOptions = t("form.country.options", { returnObjects: true }) as string[];
  const nextSteps = t("nextSteps.steps", { returnObjects: true }) as { number: number; text: string }[];

  return (
    <div className={styles.contactContainer}>
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{t("hero-title")}</h1>
      </section>

      <div className={styles.contactMain}>
        <div className={styles.contactDetails}>
          <h2 className={styles.title}>{t("title")}</h2>
          <p className={styles.description}>{t("description")}</p>
          <ul>
            <li>
              <strong>Email:</strong>: {t("details.email")}
            </li>
            <li>
              <strong>Phone:</strong>: {t("details.phone")}
            </li>
            <li>
              <strong>Address:</strong>: {t("details.address")}
            </li>
          </ul>

          <section className={styles.nextSteps}>
            <h3>{t("nextSteps.title")}</h3>
            {nextSteps.map((step) => (
              <div key={step.number} className={styles.stepItem}>
                <div className={styles.stepNumber}>{step.number}</div>
                <p>{step.text}</p>
              </div>
            ))}
          </section>
        </div>
        <div className={styles.contactForm}>
          <form>
            <label htmlFor="name" className={styles.label}>
              {t("form.name")}
            </label>
            <input type="text" id="name" name="name" placeholder={t("form.name")} />

            <label htmlFor="email" className={styles.label}>
              {t("form.email")}
            </label>
            <input type="email" id="email" name="email" placeholder={t("form.email")} />

            <label htmlFor="phone" className={styles.label}>
              {t("form.phone")}
            </label>
            <input type="tel" id="phone" name="phone" placeholder={t("form.phone")} />

            <label htmlFor="country" className={styles.label}>
              {t("form.country.label")}
            </label>
            <select id="country" name="country">
              {countryOptions.map((country, index) => (
                <option key={index} value={country}>
                  {country}
                </option>
              ))}
            </select>

            <label htmlFor="message" className={styles.label}>
              {t("form.message")}
            </label>
            <textarea id="message" name="message" placeholder={t("form.message")} />

            <button type="submit" className={styles.submitButton}>
              {t("form.submit")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
