import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import styles from '../styles/HomePageStyles/PartnersSection.module.scss';

const PartnersSection = () => {
  const { t } = useTranslation('common');
  const logos = t('partners.logos', { returnObjects: true }) as { logo: string; link: string }[];

  return (
    <section className={styles.partners}>
      <h2>{t('partners.title')}</h2>
      <div className={styles.logosWrapper}>
        {logos.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.logoCard}
          >
            <Image src={partner.logo} alt={`Partner ${index + 1}`} width={120} height={60} />
          </a>
        ))}
      </div>
    </section>
  );
};

export default PartnersSection;
