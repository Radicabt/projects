import React from 'react';
import styles from '../styles/HomePageStyles/HomeServicesCards.module.scss';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import { useRouter } from 'next/router';

const HomeServicesCards = () => {
  const { t } = useTranslation('common');
  const router = useRouter();

  const services = t('homeServices.cards', { returnObjects: true }) as {
    title: string;
    description: string;
    icon: string;
  }[];

  const handleNavigate = (index: number) => {
    router.push(`/services${index + 1}`);
  };

  return (
    <section className={styles.servicesSection}>
      <h2 className={styles.sectionTitle}>{t('homeServices.title')}</h2>
      <div className={styles.cardsContainer}>
        {services.map((service, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.iconWrapper}>
              <Image
                src={`/images/${service.icon}`}
                alt={service.title}
                width={38.39}
                height={48.86}
              />
            </div>
            <h3 className={styles.cardTitle}>{service.title}</h3>
            <p className={styles.cardDescription}>{service.description}</p>
            <button
              className={styles.cardButton}
              onClick={() => handleNavigate(index)}
            >
              {t('homeServices.buttonText')}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeServicesCards;

