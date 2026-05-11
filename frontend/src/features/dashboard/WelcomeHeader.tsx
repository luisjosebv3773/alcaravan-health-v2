import React from 'react';
import { Download, Plus } from 'lucide-react';
import styles from './Dashboard.module.css';

interface WelcomeHeaderProps {
  name: string;
  date: string;
}

export const WelcomeHeader: React.FC<WelcomeHeaderProps> = ({ name, date }) => {
  return (
    <section className={styles.welcomeHeader}>
      <div>
        <h1 className={styles.welcomeTitle}>Buenos días, {name}</h1>
        <p className={styles.welcomeSubtitle}>Aquí tienes tu resumen de salud para hoy, {date}.</p>
      </div>
      <div className={styles.actionButtons}>
        <button className={styles.btnSecondary}>
          <Download size={16} />
          Informe de exportación
        </button>
        <button className={styles.btnPrimary}>
          <Plus size={16} />
          Métrica logarítmica
        </button>
      </div>
    </section>
  );
};
