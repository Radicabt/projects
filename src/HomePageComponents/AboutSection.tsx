import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../styles/HomePageStyles/AboutSection.module.scss';


interface Card {
  text: string;
  highlight: string;
  icon: string;
}

const AboutSection = () => {
  const { t } = useTranslation('common');

  const cards = t('aboutSection.cards', { returnObjects: true }) as Card[];

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('aboutSection.title')}</h2>
        <p className={styles.description}>{t('aboutSection.description')}</p>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <img src={card.icon} alt="" className={styles.icon} />
              <p className={styles.text}>
                {card.text}{' '}
                <span className={styles.highlight}>{card.highlight}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
