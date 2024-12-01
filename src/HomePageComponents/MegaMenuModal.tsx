import React, { useEffect, useRef } from 'react';
import styles from '../styles/HomePageStyles/MegaMenuModal.module.scss';
import { useRouter } from 'next/router';

interface Section {
  title: string;
  description: string;
  button: string;
  listItems: string[];
}

interface MegaMenuModalProps {
  sections: Section[];
  onClose: () => void;
}

const MegaMenuModal: React.FC<MegaMenuModalProps> = ({ sections, onClose }) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  const handleExploreClick = (sectionTitle: string) => {
    const pageMapping: { [key: string]: string } = {
      "SIEM Threat Detection": "/services1",
      "Penetration Testing": "/services2",
      "Incident Response": "/services3",
      "Network Security": "/services4",
      "Security Awareness Training": "/services5",

      
      "SIEM Bedrohungserkennung": "/services1",
      "Penetrationstests": "/services2",
      "Vorfallreaktion": "/services3",
      "Netzwerksicherheit": "/services4",
      "Schulung zur Sicherheitsbewusstsein": "/services5",

    
      "SIEM Zbulimi i Kërcënimeve": "/services1",
      "Testimi i Penetrimit": "/services2",
      "Përgjigja ndaj Incidenteve": "/services3",
      "Siguria e Rrjetit": "/services4",
      "Trajnimi për Ndërgjegjësimin për Sigurinë": "/services5",

      
      "SIEM Детекција на Закани": "/services1",
      "Тестирање на Пенетрација": "/services2",
      "Одговор на Инциденти": "/services3",
      "Безбедност на Мрежа": "/services4",
      "Обучување за Безбедносна Свест": "/services5",
    };

    const destination = pageMapping[sectionTitle];
    if (destination) {
      router.push(destination);
    } else {
      router.push('/'); 
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent} ref={modalRef}>
        <button className={styles.closeBtn} onClick={onClose}>X</button>
        <div className={styles.megaMenu}>
          {sections.map((section, index) => (
            <div key={index} className={styles.section}>
              <img
                src={`/images/mega-menu-icon${index + 1}.png`}
                alt={`icon-${index + 1}`}
                className={styles.icon}
              />
              <h3 className={styles.title}>{section.title}</h3>
              <p className={styles.description}>{section.description}</p>
              <ul className={styles.list}>
                {section.listItems.map((item, i) => (
                  <li key={i} className={styles.listItem}>{item}</li>
                ))}
              </ul>
              <button className={styles.exploreButton} onClick={() => handleExploreClick(section.title)}>
                {section.button}
                <span className={styles.chevron}>&gt;</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MegaMenuModal;
