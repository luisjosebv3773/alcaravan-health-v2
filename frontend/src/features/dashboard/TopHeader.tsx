import React from 'react';
import { Bell } from 'lucide-react';
import { UserProfile } from './UserProfile';
import styles from './Dashboard.module.css';

export const TopHeader: React.FC = () => {
  return (
    <header className={styles.topHeader}>
      <div className={styles.headerActions}>
        <button className={styles.notificationBtn}>
          <Bell size={20} />
          <div className={styles.notificationBadge} />
        </button>
        
        <UserProfile 
          name="Mateo R." 
          role="Patient IM #9839" 
        />
      </div>
    </header>
  );
};
