import React from 'react';
import styles from './Dashboard.module.css';

interface StatCardProps {
  label: string;
  trend: string;
  value: string;
  status: string;
  progress: number;
  color: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, trend, value, status, progress, color }) => {
  const isPositive = trend.startsWith('-');
  
  return (
    <div className={styles.card}>
      <div className={styles.statCardHeader}>
        <span className={styles.statLabel}>{label}</span>
        <span className={`${styles.statTrend} ${isPositive ? styles.trendPositive : styles.trendNeutral}`}>
          {trend} respecto al mes pasado
        </span>
      </div>
      
      <div className={styles.statMain}>
        <span className={styles.statValue}>{value}</span>
        <span className={`${styles.statStatus} ${status === 'Óptima' || status === 'Saludable' ? styles.statusOptimal : styles.statusWarning}`}>
          {status}
        </span>
      </div>
      
      <div className={styles.progressBarBg}>
        <div 
          className={styles.progressBarFill} 
          style={{ width: `${progress}%`, backgroundColor: color }}
        />
      </div>
    </div>
  );
};
