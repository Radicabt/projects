import React from 'react';
import { useTranslation } from 'next-i18next';
import styles from '../styles/HomePageStyles/SignUpForm.module.scss';

interface SignUpFormProps {
  onClose: () => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ onClose }) => {
  const { t } = useTranslation('common');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onClose();
  };

  return (
    <div className={styles.modalBackdrop}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &times;
        </button>
        <h2>{t('signUpForm.title')}</h2>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <input
              type="text"
              id="name"
              placeholder={t('signUpForm.placeholders.name')}
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="email"
              id="email"
              placeholder={t('signUpForm.placeholders.email')}
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              id="password"
              placeholder={t('signUpForm.placeholders.password')}
              className={styles.inputField}
            />
          </div>
          <div className={styles.formGroup}>
            <input
              type="password"
              id="repeatPassword"
              placeholder={t('signUpForm.placeholders.repeatPassword')}
              className={styles.inputField}
            />
          </div>
          <button type="submit" className={styles.submitButton}>
            {t('signUpForm.submit')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
