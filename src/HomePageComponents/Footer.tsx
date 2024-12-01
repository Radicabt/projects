import React from "react";
import { useTranslation } from "next-i18next";
import styles from "../styles/HomePageStyles/Footer.module.scss";

const Footer: React.FC = () => {
  const { t } = useTranslation("common");

  type FooterTranslation = {
    services: string;
    servicesList: string[];
    aboutUs: string;
    aboutList: string[];
    values: string;
    valuesList: string[];
    team: string;
    teamList: string[];
    industries: string;
    industriesList: string[];
    contactUs: string;
    contactForm: {
      namePlaceholder: string;
      emailPlaceholder: string;
      messagePlaceholder: string;
      newsletterCheckbox: string;
      submitButton: string;
    };
    location: {
      address: string;
      phone: string;
      email: string;
    };
    legal: {
      legalNotice: string;
      dataProtection: string;
      termsOfUse: string;
    };
    copyright: string;
  };
  const servicesList = t("footer.servicesList", { returnObjects: true }) as string[];
  const aboutList = t("footer.aboutList", { returnObjects: true }) as string[];
  const valuesList = t("footer.valuesList", { returnObjects: true }) as string[];
  const teamList = t("footer.teamList", { returnObjects: true }) as string[];
  const industriesList = t("footer.industriesList", { returnObjects: true }) as string[];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.logoSection}>
          <img src="/images/logo.png" alt="Logo" />
          <div className={styles.footerLogos}>
            <div className={styles.logoRow}>
              <img
                src="/images/footer-logo1.png"
                alt="Footer Logo 1"
                className={styles.footerLogo1}
              />
              <img
                src="/images/footer-logo2.png"
                alt="Footer Logo 2"
                className={styles.footerLogo2}
              />
            </div>
            <img
              src="/images/footer-logo3.png"
              alt="Footer Logo 3"
              className={styles.footerLogo3}
            />
          </div>
        </div>

        <div className={styles.linksSection}>
          <div className={styles.column}>
            <h3>{t("footer.services")}</h3>
            <ul>
              {servicesList.map((service, index) => (
                <li key={index}>{service}</li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <h3>{t("footer.aboutUs")}</h3>
            <ul>
              {aboutList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <h3>{t("footer.values")}</h3>
            <ul>
              {valuesList.map((value, index) => (
                <li key={index}>{value}</li>
              ))}
            </ul>
          </div>
          <div className={styles.column}>
            <h3>{t("footer.team")}</h3>
            <ul>
              {teamList.map((member, index) => (
                <li key={index}>{member}</li>
              ))}
            </ul>
            <h3>{t("footer.industries")}</h3>
            <ul>
              {industriesList.map((industry, index) => (
                <li key={index}>{industry}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className={styles.contactSection}>
          <form className={styles.contactForm}>
            <h3>{t("footer.contactUs")}</h3>
            <input
              className={styles.Input}
              type="text"
              placeholder={t("footer.contactForm.namePlaceholder")}
            />
            <input
              className={styles.Input}
              type="email"
              placeholder={t("footer.contactForm.emailPlaceholder")}
            />
            <textarea
              className={styles.Input2}
             placeholder={t("footer.contactForm.messagePlaceholder")} />
            <div className={styles.checkbox}>
              <input type="checkbox" id="newsletter" />
              <label htmlFor="newsletter">
                {t("footer.contactForm.newsletterCheckbox")}
              </label>
            </div>
            <button type="submit">{t("footer.contactForm.submitButton")}</button>
          </form>

          <div className={styles.mapWrapper}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2870.9936491894097!2d21.44353174169245!3d41.99812670335967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x135f1c03ca466cd5%3A0x13c6e28728d7cf9!2zV2VyYSBjaXQgdGhlb3J5IFJlYWwgUm9ncm92YSBPbm1pY2ph!5e0!3m2!1sen!2smk!4v1686160602460"
              allowFullScreen
            ></iframe>
            <div className={styles.contactDetails}>
              <div className={styles.contactItem}>
                <img src="/images/location icon.png" alt="Location Icon" />
                <p>{t("footer.location.address")}</p>
              </div>
              <div className={styles.contactItem}>
                <img src="/images/phone icon.png" alt="Phone Icon" />
                <p>{t("footer.location.phone")}</p>
              </div>
              <div className={styles.contactItem}>
                <img src="/images/envelope-icon.png" alt="Email Icon" />
                <p>{t("footer.location.email")}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <div className={styles.legalLinks}>
          <p>{t("footer.legal.legalNotice")}</p>
          <p>{t("footer.legal.dataProtection")}</p>
          <p>{t("footer.legal.termsOfUse")}</p>
        </div>
        <p className={styles.copyright}>{t("footer.copyright")}</p>
      </div>
    </footer>
  );
};

export default Footer;
