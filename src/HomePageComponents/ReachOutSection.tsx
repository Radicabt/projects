import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../styles/HomePageStyles/ReachOutSection.module.scss';

const ReachOutSection = () => {
  const { t } = useTranslation('common');

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
  };

  return (
    <section className={styles.reachOutSection}>
      <div className={styles.line}></div>

      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <h2 className={styles.message}>{t('reachOut.message')}</h2>
        </div>
        <form className={styles.form} onSubmit={handleFormSubmit}>
          <input
            type="email"
            className={styles.emailInput}
            placeholder={t('reachOut.emailPlaceholder')}
          />
          <button type="submit" className={styles.submitButton}>
            {t('reachOut.submitButton')}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ReachOutSection;

