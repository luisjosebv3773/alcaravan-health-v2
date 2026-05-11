import React from 'react';
import styles from './Dashboard.module.css';

interface GoalItemProps {
  label: string;
  current: string | number;
  total: string | number;
  percent: number;
}

export const GoalItem: React.FC<GoalItemProps> = ({ label, current, total, percent }) => {
  return (
    <div className={styles.goalItem}>
      <div className={styles.goalLabelRow}>
         <span className={styles.goalLabel}>{label}</span>
         <span className={styles.goalValue}>{current} / {total}</span>
      </div>
      <div className={styles.goalBarBg}>
        <div 
          className={styles.goalBarFill} 
          style={{ width: `${percent}%` }}
        />
      </div>
    </div>
  );
};
