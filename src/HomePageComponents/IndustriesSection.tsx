import React from 'react';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../styles/HomePageStyles/IndustriesSection.module.scss';

const IndustriesSection = () => {
  const { t } = useTranslation('common');
  const icons = t('industries.icons', { returnObjects: true }) as Array<{
    name: string;
    icon: string;
  }>;

  return (
    <section className={styles.industries}>
      <h2>{t('industries.title')}</h2>
      <p>{t('industries.subtitle')}</p>
      <div className={styles.scrollableIconsWrapper}>
        <div className={styles.line}></div>
        <div className={styles.icons}>
          {icons.map((industry, index) => (
            <div key={index} className={styles.industryCard}>
              <Image src={industry.icon} alt={industry.name} width={120} height={120} />
              <p>{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
      <Link href="/industries">
        <button className={styles.button}>{t('industries.buttonText')}</button>
      </Link>
    </section>
  );
};

export default IndustriesSection;

