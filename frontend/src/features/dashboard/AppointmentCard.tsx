import React from 'react';
import { Calendar } from 'lucide-react';
import styles from './Dashboard.module.css';

interface AppointmentCardProps {
  date: string;
  time: string;
  location: string;
  doctorName: string;
  doctorRole: string;
  doctorAvatar: string;
}

export const AppointmentCard: React.FC<AppointmentCardProps> = ({
  date,
  time,
  location,
  doctorName,
  doctorRole,
  doctorAvatar,
}) => {
  return (
    <div className={styles.appointmentCard}>
      <div className={styles.apptTimeRow}>
        <div className={styles.apptIconBox}>
          <Calendar size={20} />
        </div>
        <div>
          <h4 className={styles.apptTitle}>{date}</h4>
          <p className={styles.apptSubtitle}>{time} - {location}</p>
        </div>
      </div>
      
      <div className={styles.doctorRow}>
        <img 
          src={doctorAvatar} 
          alt={doctorName} 
          className={styles.doctorAvatar} 
        />
        <div>
          <p className={styles.doctorName}>{doctorName}</p>
          <p className={styles.doctorRole}>{doctorRole}</p>
        </div>
      </div>

      <button className={styles.btnSecondary} style={{ width: '100%', justifyContent: 'center' }}>
        Prepárese para la visita
      </button>
    </div>
  );
};
