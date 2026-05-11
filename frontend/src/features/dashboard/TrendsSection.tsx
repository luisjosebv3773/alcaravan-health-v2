import React from 'react';
import { TrendingUp } from 'lucide-react';
import styles from './Dashboard.module.css';

const TrendCardItem: React.FC<{ label: string, value: string, percent: string, data: number[], color?: string }> = ({ label, value, percent, data, color = '#13EC5B' }) => (
  <div className={styles.trendCard}>
    <div className={styles.trendCardLabel}>{label}</div>
    <div className={styles.trendCardValueRow}>
      <span className={styles.trendCardValue}>{value}</span>
      <span className={styles.trendCardPercent} style={{ color }}>
        <TrendingUp size={12} />
        {percent}
      </span>
    </div>
    <div className={styles.sparkline}>
      {data.map((val, i) => (
        <div 
          key={i} 
          className={styles.sparkBar} 
          style={{ 
            height: `${val}%`, 
            background: i === data.length - 1 ? color : `rgba(${color === '#13EC5B' ? '19, 236, 91' : '245, 158, 11'}, ${0.2 + (i * 0.1)})` 
          }} 
        />
      ))}
    </div>
  </div>
);

export const TrendsSection: React.FC = () => {
  return (
    <div className={styles.trendsContainer}>
      <h3 className={styles.trendsTitle}>Tendencias métricas (últimos 6 meses)</h3>
      <div className={styles.trendsGrid}>
        <TrendCardItem label="PESO" value="68.2kg" percent="2%" data={[60, 65, 50, 55, 45, 40]} />
        <TrendCardItem label="MASA MUSCULAR" value="38.2kg" percent="1.5%" data={[40, 45, 50, 60, 70, 80]} />
        <TrendCardItem label="PROMEDIO DE SUEÑO" value="7h 12m" percent="0%" data={[70, 60, 80, 50, 65, 65]} color="#F59E0B" />
        <TrendCardItem label="GRASA VISCERAL" value="Level 9" percent="Bien" data={[80, 80, 75, 70, 65, 60]} />
      </div>
    </div>
  );
};
