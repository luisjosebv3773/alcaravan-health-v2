import React from 'react';
import styles from './Dashboard.module.css';

interface UserProfileProps {
  name: string;
  role: string;
  avatarUrl?: string;
}

export const UserProfile: React.FC<UserProfileProps> = ({ name, role, avatarUrl }) => {
  const defaultAvatar = `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=E5E7EB&color=111813`;
  
  return (
    <div className={styles.userProfile}>
      <div className={styles.userInfo}>
        <span className={styles.userName}>{name}</span>
        <span className={styles.userRole}>{role}</span>
      </div>
      <img 
        src={avatarUrl || defaultAvatar} 
        alt={name} 
        className={styles.userAvatar} 
      />
    </div>
  );
};
