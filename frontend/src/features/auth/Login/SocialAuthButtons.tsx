import React from 'react';
import styles from './Login.module.css';
import googleIcon from '../../../assets/google.png';
import appleIcon from '../../../assets/apple.png';

export const SocialAuthButtons: React.FC = () => {
  return (
    <div className={styles.socialAuth}>
      <button className={styles.socialButton} type="button">
        <img src={googleIcon} alt="Google" className={styles.socialIcon} />
        Google
      </button>
      <button className={styles.socialButton} type="button">
        <img src={appleIcon} alt="Apple" className={styles.socialIcon} />
        Apple
      </button>
    </div>
  );
};
