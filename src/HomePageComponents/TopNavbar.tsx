import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import styles from '../styles/HomePageStyles/TopNavbar.module.scss';

const TopNavbar = () => {
  const { t } = useTranslation('common');
  const router = useRouter();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (locale: string) => {
    router.push(router.asPath, router.asPath, { locale });
    setDropdownOpen(false); 
  };

  return (
    <div className={styles.topNavbar}>
      <div className={styles.logo}>
        <Image src="/images/logo.png" alt="Company Logo" width={112} height={48} />
      </div>
      <div className={styles.rightSection}>
        <Link href="/emergency-response-plan" className={styles.link}>
          {t('emergencyResponsePlan')}
        </Link>
        <Link href="/support" className={`${styles.link} ${styles.supportLink}`}>
          {t('support')} <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
        </Link>
        <div className={styles.languageSelector}>
          <button
            className={styles.languageButton}
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <Image src="/images/globe.png" alt="Globe Icon" width={24} height={24} />
            <span>{router.locale?.toUpperCase()}</span>
            <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
          </button>
          {dropdownOpen && (
            <div className={styles.languageDropdown}>
              <button onClick={() => handleLanguageChange('en')}>{t('languageOptions.en')}</button>
              <button onClick={() => handleLanguageChange('de')}>{t('languageOptions.de')}</button>
              <button onClick={() => handleLanguageChange('mk')}>{t('languageOptions.mk')}</button>
              <button onClick={() => handleLanguageChange('al')}>{t('languageOptions.al')}</button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
