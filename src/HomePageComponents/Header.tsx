import React, { useState } from 'react';
import Link from 'next/link';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router'; 
import styles from '../styles/HomePageStyles/Header.module.scss';
import MegaMenuModal from './MegaMenuModal';

interface Section {
  title: string;
  description: string;
  button: string;
  listItems: string[];
}

const Header: React.FC = () => {
  const { t } = useTranslation('common');
  const [isModalOpen, setModalOpen] = useState(false);
  const router = useRouter();

  const sections = t('menu.sections', { returnObjects: true });
  const isSectionsArray = Array.isArray(sections);
  const sectionData: Section[] = isSectionsArray ? sections : [];
  const currentPath = router.pathname;
  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault(); 
    setModalOpen(true); 
  };

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <ul>
            <li>
              <Link
                href="/"
                className={currentPath === '/' ? styles.active : ''}
              >
                {t('header.home')}
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className={currentPath === '/about' ? styles.active : ''}
              >
                {t('header.aboutUs')}
              </Link>
            </li>
            <li>
              <button
                className={`${styles.servicesBtn} ${isModalOpen || currentPath === '/services' ? styles.active : ''}`}
                onClick={handleServicesClick}
              >
                {t('header.services')}
              </button>
            </li>
            <li>
              <Link
                href="/industries"
                className={currentPath === '/industries' ? styles.active : ''}
              >
                {t('header.industries')}
              </Link>
            </li>
            <li>
              <Link
                href="/partnerships"
                className={currentPath === '/partnerships' ? styles.active : ''}
              >
                {t('header.partnerships')}
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles.actions}>
          <Link href="/contact">
            <button
              className={`${styles.contactBtn} ${currentPath === '/contact' ? styles.activeButton : ''}`}
            >
              {t('header.contact')}
            </button>
          </Link>
          <Link href="/jobs">
            <button
              className={`${styles.jobsBtn} ${currentPath === '/jobs' ? styles.activeButton : ''}`}
            >
              {t('header.jobs')}
            </button>
          </Link>
          <Link href="/newsletter">
            <button
              className={`${styles.newsletterBtn} ${currentPath === '/newsletter' ? styles.activeButton : ''}`}
            >
              {t('header.newsletter')}
            </button>
          </Link>
        </div>
      </header>
      {isModalOpen && (
        <MegaMenuModal
          sections={sectionData}
          onClose={() => setModalOpen(false)}
        />
      )}
    </>
  );
};

export default Header;
