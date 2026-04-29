import React from 'react';
import styles from './Login.module.css';
import logo from '../../../assets/logo_mini.png'; // Fallback if no svg

export const LoginSidebar: React.FC = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.sidebarBackground} />
      <div className={styles.sidebarOverlay} />
      
      <div className={styles.sidebarContent}>
        <div className={styles.brandHeader}>
          {/* We assume logo_mini.png acts as the shield logo */}
          <img src={logo} alt="Alcaraván Health Logo" className={styles.logo} />
          <span className={styles.brandName}>Alcaraván Health</span>
        </div>

        <h1 className={styles.title}>Gestión Clínica<br />con Propósito</h1>
        <p className={styles.subtitle}>
          La herramienta integral para el profesional de la salud moderno.
        </p>

        <div className={styles.tagsContainer}>
          <div className={styles.tagItem}>
            <span className={`${styles.tagText} ${styles.tagTextActive}`}>EFICIENCIA</span>
            <div className={`${styles.tagIndicator} ${styles.tagIndicatorActive}`} />
          </div>
          <div className={styles.tagItem}>
            <span className={`${styles.tagText} ${styles.tagTextInactive}`}>SEGURIDAD</span>
            <div className={`${styles.tagIndicator} ${styles.tagIndicatorInactive}`} />
          </div>
          <div className={styles.tagItem}>
            <span className={`${styles.tagText} ${styles.tagTextInactive}`}>EMPATÍA</span>
            <div className={`${styles.tagIndicator} ${styles.tagIndicatorInactive}`} />
          </div>
        </div>
      </div>
    </div>
  );
};
